const error = (err, req, res, next) => {
  console.log(err);

  res.status(500).json({ message: "Internal Server Error"});
};

module.exports = error;
