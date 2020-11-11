import $ from 'jquery'

const getMethod = (method: string) => {
  return (method || '').toLocaleUpperCase();
};

export default async (options) => {
  const method = getMethod(options.method);
  if ((method === 'GET')){
	
  }
  const ajaxOptions: any = {
    url: options.url,
    type: options.method,
    data: options.data,
	dataType:'json',
  };
  const res ={data:await $.ajax(ajaxOptions)};
  return res;
};