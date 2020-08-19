export const setMethodTag = (tag, value) => {
  return (target, name) => {
    target[name][tag] = value;
  }
};

export const setClassTag = (tag, value) => {
  return (target) => {
    target.prototype[tag] = value;
  };
};

export const setCommonTag = (methodTag, value, classTag?) => {
  return (target, ...args) => {
    if (args[1]) {
      target[name][methodTag] = value;
      return;
    }

    target.prototype[classTag || methodTag] = value;
  }
};
