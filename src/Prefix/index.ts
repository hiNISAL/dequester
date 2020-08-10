export default (prefix: string) => {
  return (target) => {
    target.prototype.domain = prefix;
  };
};
