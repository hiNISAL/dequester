import axios from 'axios';
import qs from 'qs';
import jsonp from 'axios-jsonp';

const getMethod = (method: string) => {
  return (method || '').toLocaleUpperCase();
};

export default async (options: any) => {
  let queryString = '';
  const method = getMethod(options.method);

  if ((method === 'GET') || (method === 'JSONP')) {
    queryString = qs.stringify(options.data);
  }

  const axiosOptions: any = {
    url: `${options.url}${queryString ? `?${queryString}` : ''}`,
    method: options.method,
    data: options.data,
  };

  if (getMethod(options.method) === 'JSONP') {
    axiosOptions.adapter = jsonp;
    axiosOptions.callbackParamName = options.jsonpCallbackParam || 'callback';
  }

  const res = await axios(axiosOptions);

  return res;
};
