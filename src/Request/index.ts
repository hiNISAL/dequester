let adapter = async (options) => {
  console.error('`dequester` need an adapter to handle request', options);

  return options;
};

export const useAdapter = (adapt) => {
  adapter = adapt;
};

export default async (options) => {
  let result: any = null;

  try {
    result = await adapter(options);
  } catch (err) {
    throw Error(err);
  }

  return result;
};
