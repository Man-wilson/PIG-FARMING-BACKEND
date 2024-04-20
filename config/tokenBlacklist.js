
const blacklist = new Set();

exports.add = (token) => {
  blacklist.add(token);
};

exports.contains = (token) => {
  return blacklist.has(token);
};

exports.remove = (token) => {
  blacklist.delete(token);
};

exports.clear = () => {
  blacklist.clear();
};