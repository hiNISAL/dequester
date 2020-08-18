export default (prefix: string) => {
  return (target) => {
    target.prototype._PREFIX = prefix;
  };
};
