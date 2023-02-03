
// @ts-ignore
const Addon = (target, name) => {
  Object.defineProperty(target, name, {
    value() {
      alert(1)
      return {
        a: 1,
        b: 2,
      };
    }
  })
};

class Test {
  @Addon
  public fn() {
    return {
      a: 1,
    };
  }
}

const test = new Test();

console.log(test.fn());
