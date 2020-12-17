let adapter = async (options: any) => {
  console.error('`dequester` need an adapter to handle request', options);

  return options;
};

export const useAdapter = (adapt: any) => {
  adapter = adapt;
};

export default async (options: any) => {
  let result: any = null;

  try {
    result = await adapter(options);
  } catch (err) {
    throw Error(err);
  }

  return result;
};
