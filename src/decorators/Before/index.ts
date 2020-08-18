export default (fn) => {
  return (target, ...args) => {
    if (args[1]) {
      target[name]._BEFORE = fn;
      return;
    }

    target.prototype._BEFORE_EACH = fn;
  }
};
