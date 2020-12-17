import request from './Request';

export const Get = (path: string, prefix = '') => {
  return request('GET', path, prefix);
};

export const Post = (path: string, prefix = '') => {
  return request('POST', path, prefix);
};

export const Patch = (path: string, prefix = '') => {
  return request('PATCH', path, prefix);
};

export const Delete = (path: string, prefix = '') => {
  return request('DELETE', path, prefix);
};

export const Put = (path: string, prefix = '') => {
  return request('PUT', path, prefix);
};

export const JSONP = (path: string, prefix = '') => {
  return request('JSONP', path, prefix);
};
