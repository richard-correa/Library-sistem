const authors = require("../models/author");

exports.GetAuthors = (req, res, next) => {
  authors
    .findAll({ order: [["name", "asc"]] })
    .then((results) => {
      const authors = results.map((results) => results.dataValues);

      res.render("author/authors", {
        pageTitle: "authors",
        authorsActive: true,
        authors: authors,
        hasAuthors: authors.length > 0,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.GetAddAuthor = (req, res, next) => {
  res.render("author/save-authors", {
    pageTitle: "Add new author",
    editMode: false,
  });
};
exports.PostAddAuthor = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  authors
    .create({ name: name, email: email })
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.GetEditAuthor = (req, res, next) => {
  const edit = req.query.edit;
  const authorId = req.params.authorId;

  if (!edit) {
    return res.redirect("/");
  }

  authors
    .findOne({ where: { id: authorId } })
    .then((result) => {
      const author = result.dataValues;

      if (!author) {
        return res.redirect("/");
      }

      console.log(author);
      res.render("author/save-authors", {
        pageTitle: "Edit heroes",
        editMode: edit,
        author: author,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.PostEditAuthor = (req, res, next) => {
  const authorName = req.body.name;
  const authorEmail = req.body.email;
  const authorId = req.body.authorId;

  authors
    .update(
      { name: authorName, email: authorEmail },
      { where: { id: authorId } }
    )
    .then((result) => {
      return res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.PostDeleteAuthor = (req, res, next) => {
  const id = req.body.authorId;

  authors
    .destroy({ where: { id: id } })
    .then((result) => {
      return res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};
