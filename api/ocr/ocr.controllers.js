const tesseract = require("tesseract.js");

exports.ocrCreate = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = `http://${req.get("host")}/media/${req.file.filename}`;
      console.log(req.body.image);
      const { data: text } = await tesseract.recognize(req.body.image, "eng");
      const response = {
        file: req.file,
        text: text.text.trim(),
      };
      return res.status(201).json(response);
    }
    return res.status(400).json({ error: "No image file provided." });
  } catch (error) {
    return next(error);
  }
};
