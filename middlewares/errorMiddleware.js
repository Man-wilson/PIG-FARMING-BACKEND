const error = (err, req, res, next) => {
  // UNCOMMENT for Debugging
  console.log(err);

  if (err.message === 'User not found') {
    return res.status(404).json({ message: 'User not found' });
  }

  if (err.message === 'Invalid current password') {
    return res.status(401).json({ message: 'Current password entered is incorrect' });
  }

  res.status(500).json({ message: 'Internal Server Error' });
};

module.exports = error;
