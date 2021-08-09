const express = require("express");

const router = express.Router();
const booksController = require("../controllers/booksController");

router.get("/books", booksController.GetBooks);
router.get("/save-books", booksController.GetAddBooks);
router.post("/save-books", booksController.PostAddBooks);
router.get("/edit-books/:booksId", booksController.GetEditBooks);
router.post("/edit-books", booksController.PostEditBooks);
router.post("/delete-books", booksController.PostDeleteBooks);

module.exports = router;
