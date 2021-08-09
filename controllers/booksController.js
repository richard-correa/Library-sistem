const books = require("../models/books");
const authors = require("../models/author");
const editorials = require("../models/editorial");

exports.GetBooks = (req, res, next) => {
  books
    .findAll({
      include: [{ model: authors }, { model: editorials }],
      order: [["name", "asc"]],
    })
    .then((results) => {
      const books = results.map((results) => results.dataValues);

      res.render("Books/books", {
        pageTitle: "books",
        booksActive: true,
        books: books,
        hasBooks: books.length > 0,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.GetAddBooks = (req, res, next) => {
  authors.findAll().then((a) => {
    const authors = a.map((results) => results.dataValues);
    editorials.findAll().then((a) => {
      const editorials = a.map((results) => results.dataValues);
      res.render("Books/save-books", {
        pageTitle: "Add new book",
        editMode: false,
        editorials: editorials,
        authors: authors,
        hasEditorials: editorials.length > 0,
        hasAuthors: authors.length > 0,
      });
    });
  });
};
exports.PostAddBooks = (req, res, next) => {
  const bookName = req.body.name;
  const bookYear = req.body.year;
  const authorName = req.body.authorName;
  const publisherName = req.body.publisherName;
  const publisherCountry = req.body.publisherCountry;
  books
    .create({
      name: bookName,
      year: bookYear,
      authorId: authorName,
      editorialId: publisherCountry,
      editorialId: publisherName,
    })
    .then((result) => {
      res.redirect("/books");
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.GetEditBooks = (req, res, next) => {
  const edit = req.query.edit;
  const bookId = req.params.booksId;

  if (!edit) {
    return res.redirect("/books");
  }

  books
    .findOne({ where: { id: bookId } })
    .then((result) => {
      const book = result.dataValues;

      if (!book) {
        return res.redirect("/books");
      }
      console.log(book);
      authors.findAll().then((a) => {
        const authors = a.map((results) => results.dataValues);
        editorials.findAll().then((a) => {
          const editorials = a.map((results) => results.dataValues);
          res.render("Books/save-books", {
            pageTitle: "Edit book",
            editMode: edit,
            book: book,
            authors: authors,
            editorials: editorials,
            hasEditorials: editorials.length > 0,
            hasAuthors: authors.length > 0,
          });
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.PostEditBooks = (req, res, next) => {
  const bookName = req.body.name;
  const bookYear = req.body.year;
  const BookId = req.body.BookId;
  const authorName = req.body.authorName;
  const publisherName = req.body.publisherName;
  const publisherCountry = req.body.publisherCountry;

  books
    .update(
      {
        name: bookName,
        year: bookYear,
        editorialId: publisherCountry,
        editorialId: publisherName,
        authorId: authorName,
      },
      { where: { id: BookId } }
    )
    .then((result) => {
      return res.redirect("/books");
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.PostDeleteBooks = (req, res, next) => {
  const id = req.body.bookId;
  books
    .destroy({ where: { id: id } })
    .then((result) => {
      return res.redirect("/books");
    })
    .catch((err) => {
      console.log(err);
    });
};
