export default (fn) => {
  return (target, ...args) => {
    if (args[1]) {
      target[name]._AFTER = fn;
      return;
    }

    target.prototype._AFTER_EACH = fn;
  }
};
