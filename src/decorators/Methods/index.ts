import request from './Request';

export const Get = (path, prefix = '') => {
  return request('GET', path, prefix);
};

export const Post = (path, prefix = '') => {
  return request('POST', path, prefix);
};

export const Patch = (path, prefix = '') => {
  return request('PATCH', path, prefix);
};

export const Delete = (path, prefix = '') => {
  return request('DELETE', path, prefix);
};

export const Put = (path, prefix = '') => {
  return request('PUT', path, prefix);
};

export const JSONP = (path, prefix = '') => {
  return request('JSONP', path, prefix);
};
