export default (headers) => {
  return (target, name) => {
    target[name]._HEADERS = headers;
  }
};
