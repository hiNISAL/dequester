import request from './Request';
export var Get = function (path, prefix) {
    if (prefix === void 0) { prefix = ''; }
    return request('GET', path, prefix);
};
export var Post = function (path, prefix) {
    if (prefix === void 0) { prefix = ''; }
    return request('POST', path, prefix);
};
export var Patch = function (path, prefix) {
    if (prefix === void 0) { prefix = ''; }
    return request('PATCH', path, prefix);
};
export var Delete = function (path, prefix) {
    if (prefix === void 0) { prefix = ''; }
    return request('DELETE', path, prefix);
};
export var Put = function (path, prefix) {
    if (prefix === void 0) { prefix = ''; }
    return request('PUT', path, prefix);
};
export var JSONP = function (path, prefix) {
    if (prefix === void 0) { prefix = ''; }
    return request('JSONP', path, prefix);
};
