export class DequesterOptions {
  constructor(
    public readonly options: any = {},
  ) {}
};

export default (options) => {
  return new DequesterOptions(options);
};
