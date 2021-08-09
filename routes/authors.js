const express = require("express");

const router = express.Router();
const authorController = require("../controllers/authorsControllers");

router.get("/", authorController.GetAuthors);
router.get("/save-authors", authorController.GetAddAuthor);
router.post("/save-authors", authorController.PostAddAuthor);
router.get("/edit-authors/:authorId", authorController.GetEditAuthor);
router.post("/edit-authors", authorController.PostEditAuthor);
router.post("/delete-authors", authorController.PostDeleteAuthor);
module.exports = router;
