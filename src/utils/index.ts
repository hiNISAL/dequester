export const setMethodTag = (tag: any, value: any) => {
  return (target: any, name: any) => {
    target[name][tag] = value;
  }
};

// ----------------------------------------------------------------------------

export const setClassTag = (tag: any, value: any) => {
  return (target: any) => {
    target.prototype[tag] = value;
  };
};

// ----------------------------------------------------------------------------

export const setCommonTag = (methodTag: any, value: any, classTag?: any) => {
  return (target: any, ...args: any[]) => {
    if (args[0]) {
      target[args[0]][methodTag] = value;
      return;
    }

    target.prototype[classTag || methodTag] = value;
  }
};

// ----------------------------------------------------------------------------

export const clone = (object: any) => {
  return JSON.parse(JSON.stringify(object));
};
