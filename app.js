const express = require("express");
const path = require("path");
const expressHbs = require("express-handlebars");
const app = express();
const sequelize = require("./util/db");
const authors = require("./models/author");
const editorial = require("./models/editorial");
const books = require("./models/books");

const errorController = require("./controllers/ErrorController");

const compareHelpers = require("./util/helpers/hbs/compare");

app.engine(
  "hbs",
  expressHbs({
    layoutsDir: "views/layouts/",
    defaultLayout: "main-layout",
    extname: "hbs",
    helpers: {
      equalValue: compareHelpers.EqualValue,
    },
  })
);

app.set("view engine", "hbs");
app.set("views", "views");
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
const AuthorRoutes = require("./routes/authors");
const EditorialsRoutes = require("./routes/editorials");
const booksRouter = require("./routes/books");
app.use(AuthorRoutes);

app.use(EditorialsRoutes);

app.use(booksRouter);

app.use(errorController.Get404);

books.belongsTo(authors, { constraint: true, onDelete: "CASCADE" });
authors.hasMany(books);

books.belongsTo(editorial, { constraint: true, onDelete: "CASCADE" });
editorial.hasMany(books);

sequelize
  .sync()
  .then(function () {
    console.log("ok");
    app.listen(4500);
  })
  .catch((err) => {
    console.log(err);
  });
