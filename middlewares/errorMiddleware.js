const error = (err, req, res, next) => {
  // UNCOMMENT for Debugging
  console.log(err.message);

  if (err.message === 'User not found' || err.message === 'Role not found') {
    return res.status(404).json({ message: 'Resource Not Found' });
  }

  if (err.message === 'Invalid current password') {
    return res.status(401).json({ message: 'Current password entered is incorrect' });
  }

  if (err.message === 'Role already exists' || err.message === 'Farm already exists') {
    return res.status(422).json({ message: "Already exists! Can't process" });
  }

  res.status(500).json({ message: 'Internal Server Error' });
};

module.exports = error;
