const editorial = require("../models/editorial");

exports.GetEditorials = (req, res, next) => {
  editorial
    .findAll({ order: [["name", "asc"]] })
    .then((results) => {
      const editorial = results.map((results) => results.dataValues);

      res.render("editorials/editorials", {
        pageTitle: "editorials",
        editorialsActive: true,
        editorial: editorial,
        hasEditorials: editorial.length > 0,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.GetAddEditorials = (req, res, next) => {
  res.render("editorials/save-editorials", {
    pageTitle: "Add new editorial",
    editMode: false,
  });
};
exports.PostAddEditorials = (req, res, next) => {
  const EditorialName = req.body.name;
  const EditorialPhone = req.body.phone;
  const country = req.body.country;
  editorial
    .create({ name: EditorialName, phone: EditorialPhone, country: country })
    .then((result) => {
      res.redirect("/editorials");
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.GetEditEditorials = (req, res, next) => {
  const edit = req.query.edit;
  const EditorialId = req.params.editorialId;

  if (!edit) {
    return res.redirect("/editorials");
  }

  editorial
    .findOne({ where: { id: EditorialId } })
    .then((result) => {
      const editorial = result.dataValues;

      if (!editorial) {
        return res.redirect("/editorials");
      }

      console.log(editorial);
      res.render("editorials/save-editorials", {
        pageTitle: "Edit editorial",
        editMode: edit,
        editorial: editorial,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.PostEditEditorials = (req, res, next) => {
  const EditorialName = req.body.name;
  const EditorialPhone = req.body.phone;
  const EditorialId = req.body.EditorialId;
  const country = req.body.country;

  editorial
    .update(
      { name: EditorialName, phone: EditorialPhone, country: country },
      { where: { id: EditorialId } }
    )
    .then((result) => {
      return res.redirect("/editorials");
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.PostDeleteEditorials = (req, res, next) => {
  const id = req.body.editorialId;
  editorial
    .destroy({ where: { id: id } })
    .then((result) => {
      return res.redirect("/editorials");
    })
    .catch((err) => {
      console.log(err);
    });
};
