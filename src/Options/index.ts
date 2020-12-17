export class DequesterOptions {
  constructor(
    public readonly options: any = {},
  ) {}
};

export default (options: any) => {
  return new DequesterOptions(options);
};
