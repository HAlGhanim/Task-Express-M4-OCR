exports.ocrCreate = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = `${req.file.path}`;
    }
    res.status(201).json(req.file);
  } catch (error) {
    next(error);
  }
};
