const express = require("express");
const router = express.Router();
const upload = require("../../middlewares/multer");
const { ocrCreate } = require("./ocr.controllers");

router.post("/", upload.single("image"), ocrCreate);

module.exports = router;
