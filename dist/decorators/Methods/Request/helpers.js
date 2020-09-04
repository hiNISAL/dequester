/**
 * 根据占位符处理路径
 * @param path
 * @param placeholder
 */
export var getPath = function (path, placeholder) {
    if (placeholder === void 0) { placeholder = {}; }
    for (var _i = 0, _a = Object.entries(placeholder); _i < _a.length; _i++) {
        var _b = _a[_i], k = _b[0], v = _b[1];
        path = path.replace(":" + k, v);
    }
    return path;
};
