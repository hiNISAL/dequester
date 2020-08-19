export const setMethodTag = (tag, value) => {
  return (target, name) => {
    target[name][tag] = value;
  }
};

// ----------------------------------------------------------------------------

export const setClassTag = (tag, value) => {
  return (target) => {
    target.prototype[tag] = value;
  };
};

// ----------------------------------------------------------------------------

export const setCommonTag = (methodTag, value, classTag?) => {
  return (target, ...args) => {
    if (args[0]) {
      target[args[0]][methodTag] = value;
      return;
    }

    target.prototype[classTag || methodTag] = value;
  }
};

// ----------------------------------------------------------------------------

export const clone = (object) => {
  return JSON.parse(JSON.stringify(object));
};
