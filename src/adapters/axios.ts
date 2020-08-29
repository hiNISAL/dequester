import axios from 'axios';
import qs from 'qs';

export default async (options) => {
  let queryString = '';
  if (options.method.toLocaleUpperCase() === 'GET') {
    queryString = qs.stringify(options.data);
  }

  const res = await axios({
    url: `${options.url}${queryString ? `?${queryString}` : ''}`,
    method: options.method,
    data: options.data,
  });

  return res;
};
