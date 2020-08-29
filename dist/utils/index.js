export var setMethodTag = function (tag, value) {
    return function (target, name) {
        target[name][tag] = value;
    };
};
// ----------------------------------------------------------------------------
export var setClassTag = function (tag, value) {
    return function (target) {
        target.prototype[tag] = value;
    };
};
// ----------------------------------------------------------------------------
export var setCommonTag = function (methodTag, value, classTag) {
    return function (target) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (args[0]) {
            target[args[0]][methodTag] = value;
            return;
        }
        target.prototype[classTag || methodTag] = value;
    };
};
// ----------------------------------------------------------------------------
export var clone = function (object) {
    return JSON.parse(JSON.stringify(object));
};
