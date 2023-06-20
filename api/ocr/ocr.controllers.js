const tesseract = require("tesseract.js");

tesseract
  .recognize("http://localhost:8000/media/1687257691539hw.png", "eng")
  .then(({ data: { text } }) => {
    console.log(text);
  });

exports.ocrCreate = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = `http://${req.get("host")}/media/${req.file.filename}`;
      console.log(req.body.image);
    }
    res.status(201).json(req.file);
  } catch (error) {
    next(error);
  }
};
