export default (type) => {
  return (target, name) => {
    target[name]._BODY_TYPE = type;
  }
};
