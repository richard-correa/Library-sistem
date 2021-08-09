const express = require("express");

const router = express.Router();
const editorialsController = require("../controllers/editorialsControllers");

router.get("/editorials", editorialsController.GetEditorials);
router.get("/save-editorials", editorialsController.GetAddEditorials);
router.post("/save-editorials", editorialsController.PostAddEditorials);
router.get(
  "/edit-editorials/:editorialId",
  editorialsController.GetEditEditorials
);
router.post("/edit-editorials", editorialsController.PostEditEditorials);
router.post("/delete-editorials", editorialsController.PostDeleteEditorials);

module.exports = router;
