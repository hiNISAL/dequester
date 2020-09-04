var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { DequesterOptions } from '../../../Options';
import request from '../../../request';
import { getPath } from './helpers';
// ----------------------------------------------------------------------------
export default (function (method, path, prefix) {
    return function (target, name, desc) {
        // 保留参数
        var bck = target[name];
        // ----------------------------------------------------------------------------
        // 重写方法
        desc.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return __awaiter(void 0, void 0, void 0, function () {
                var queries, usePath, _a, 
                // 前缀
                _PREFIX, _b, 
                // 前置拦截器
                _EACH_BEFORE, _c, 
                // 后置拦截器
                _EACH_AFTER, _d, 
                // 取消钩子
                _EACH_CANCEL, _e, 
                // 错误钩子
                _EACH_ERROR, _f, 
                // 额外扩展参数
                _EACH_EXTENSION, _g, 
                // jsonp callback 前缀
                _EACH_JSONP_CALLBACK_PREFIX, _h, 
                // jsonp callback 参数名
                _EACH_JSONP_CALLBACK_PARAM, 
                // 适配器
                _EACH_ADAPTER, _j, _AFTER, _k, _BEFORE, _l, 
                // 头
                _HEADERS, _m, 
                // body类型
                _BODY_TYPE, _o, 
                // 取消钩子
                _CANCEL, _p, 
                // 错误钩子
                _ERROR, _q, 
                // 额外扩展参数
                _EXTENSION, _r, 
                // jsonp callback 前缀
                _JSONP_CALLBACK_PREFIX, _s, 
                // jsonp callback 参数名
                _JSONP_CALLBACK_PARAM, 
                // 适配器
                _ADAPTER, needUseEachBefore, needUseEachAfter, needUseBefore, needUseAfter, data, params, headers, cancel, ext, reqOpt, finalAdapter, _t, _u, 
                // 头
                headers, _v, 
                // 请求数据
                data, _w, 
                // url 参数
                params, _x, 
                // 前置钩子
                before, _y, 
                // 后置钩子
                after, _z, 
                // 是否使用绑定在class上的前置钩子
                useEachBefore, _0, 
                // 是否使用绑定在class上的后置钩子
                useEachAfter, _1, 
                // 是否使用绑定在method上的前置钩子
                useBefore, _2, 
                // 是否使用绑定在method上的后置钩子
                useAfter, 
                // 取消方法
                cancel, 
                // 错误钩子
                error, 
                // 额外扩展参数
                extension, _3, 
                // jsonp 回调前缀
                jsonpCallbackPrefix, _4, 
                // jsonp 请求参数名
                jsonpCallbackParam, 
                // 请求适配器
                adapter, options, result, e_1;
                return __generator(this, function (_5) {
                    switch (_5.label) {
                        case 0: return [4 /*yield*/, bck.apply(void 0, args)];
                        case 1:
                            queries = _5.sent();
                            usePath = path;
                            _a = target._PREFIX, _PREFIX = _a === void 0 ? '' : _a, _b = target._EACH_BEFORE, _EACH_BEFORE = _b === void 0 ? function () { } : _b, _c = target._EACH_AFTER, _EACH_AFTER = _c === void 0 ? function () { } : _c, _d = target._EACH_CANCEL, _EACH_CANCEL = _d === void 0 ? function () { } : _d, _e = target._EACH_ERROR, _EACH_ERROR = _e === void 0 ? function () { } : _e, _f = target._EACH_EXTENSION, _EACH_EXTENSION = _f === void 0 ? {} : _f, _g = target._EACH_JSONP_CALLBACK_PREFIX, _EACH_JSONP_CALLBACK_PREFIX = _g === void 0 ? '' : _g, _h = target._EACH_JSONP_CALLBACK_PARAM, _EACH_JSONP_CALLBACK_PARAM = _h === void 0 ? '' : _h, _EACH_ADAPTER = target._EACH_ADAPTER;
                            _j = bck._AFTER, _AFTER = _j === void 0 ? function () { } : _j, _k = bck._BEFORE, _BEFORE = _k === void 0 ? function () { } : _k;
                            _l = bck._HEADERS, _HEADERS = _l === void 0 ? {} : _l, _m = bck._BODY_TYPE, _BODY_TYPE = _m === void 0 ? {} : _m, _o = bck._CANCEL, _CANCEL = _o === void 0 ? _EACH_CANCEL : _o, _p = bck._ERROR, _ERROR = _p === void 0 ? function () { } : _p, _q = bck._EXTENSION, _EXTENSION = _q === void 0 ? {} : _q, _r = bck._JSONP_CALLBACK_PREFIX, _JSONP_CALLBACK_PREFIX = _r === void 0 ? _EACH_JSONP_CALLBACK_PREFIX : _r, _s = bck._JSONP_CALLBACK_PARAM, _JSONP_CALLBACK_PARAM = _s === void 0 ? _EACH_JSONP_CALLBACK_PARAM : _s, _ADAPTER = bck._ADAPTER;
                            needUseEachBefore = true;
                            needUseEachAfter = true;
                            needUseBefore = true;
                            needUseAfter = true;
                            // ----------------------------------------------------------------------------
                            // 处理一次参数内容 人工重载一下
                            if (Array.isArray(queries)) {
                                data = queries[0], params = queries[1], headers = queries[2], cancel = queries[3];
                                queries = data;
                                usePath = getPath(usePath, params);
                                // 合并头
                                _HEADERS = __assign(__assign({}, _HEADERS), headers);
                                _CANCEL = cancel || _CANCEL;
                            }
                            ext = {};
                            reqOpt = {};
                            finalAdapter = _ADAPTER || _EACH_ADAPTER;
                            // 如果是用 ReqOpt 构建的对象
                            if (queries instanceof DequesterOptions) {
                                reqOpt = queries.options;
                                _t = queries.options, _u = _t.headers, headers = _u === void 0 ? {} : _u, _v = _t.data, data = _v === void 0 ? {} : _v, _w = _t.params, params = _w === void 0 ? {} : _w, _x = _t.before, before = _x === void 0 ? function () { } : _x, _y = _t.after, after = _y === void 0 ? function () { } : _y, _z = _t.useEachBefore, useEachBefore = _z === void 0 ? true : _z, _0 = _t.useEachAfter, useEachAfter = _0 === void 0 ? true : _0, _1 = _t.useBefore, useBefore = _1 === void 0 ? true : _1, _2 = _t.useAfter, useAfter = _2 === void 0 ? true : _2, cancel = _t.cancel, error = _t.error, extension = _t.extension, _3 = _t.jsonpCallbackPrefix, jsonpCallbackPrefix = _3 === void 0 ? '' : _3, _4 = _t.jsonpCallbackParam, jsonpCallbackParam = _4 === void 0 ? '' : _4, adapter = _t.adapter;
                                // 合并头
                                _HEADERS = __assign(__assign({}, _HEADERS), headers);
                                // 重制body
                                queries = data;
                                // 处理path
                                usePath = getPath(usePath, params);
                                // 标记信息
                                (!useEachBefore && (needUseEachBefore = false));
                                (!useEachAfter && (needUseEachAfter = false));
                                (!useBefore && (needUseBefore = false));
                                (!useAfter && (needUseAfter = false));
                                // 覆盖小钩子
                                _AFTER = after;
                                _BEFORE = before;
                                _CANCEL = cancel || _CANCEL;
                                _ERROR = error || _ERROR;
                                ext = extension || ext;
                                _JSONP_CALLBACK_PREFIX = jsonpCallbackPrefix || _JSONP_CALLBACK_PREFIX || _EACH_JSONP_CALLBACK_PREFIX;
                                _JSONP_CALLBACK_PARAM = jsonpCallbackParam || _JSONP_CALLBACK_PARAM || _EACH_JSONP_CALLBACK_PARAM;
                                finalAdapter = adapter || finalAdapter;
                            }
                            options = {
                                method: method,
                                url: "" + (prefix || _PREFIX || '') + usePath,
                                headers: _HEADERS,
                                data: queries,
                                cancel: _CANCEL,
                                bodyType: _BODY_TYPE,
                                extension: {
                                    extension: ext,
                                    _EACH_EXTENSION: _EACH_EXTENSION,
                                    _EXTENSION: _EXTENSION,
                                },
                                jsonpCallbackPrefix: _JSONP_CALLBACK_PREFIX,
                                jsonpCallbackParam: _JSONP_CALLBACK_PARAM,
                                _SOURCE: {
                                    reqOpt: reqOpt,
                                },
                                adapter: finalAdapter,
                            };
                            if (!needUseEachBefore) return [3 /*break*/, 3];
                            return [4 /*yield*/, _EACH_BEFORE(options)];
                        case 2:
                            options = (_5.sent()) || options;
                            _5.label = 3;
                        case 3:
                            if (!needUseBefore) return [3 /*break*/, 5];
                            return [4 /*yield*/, _BEFORE(options)];
                        case 4:
                            options = (_5.sent()) || options;
                            _5.label = 5;
                        case 5:
                            result = null;
                            _5.label = 6;
                        case 6:
                            _5.trys.push([6, 8, , 11]);
                            return [4 /*yield*/, request(options)];
                        case 7:
                            result = _5.sent();
                            return [3 /*break*/, 11];
                        case 8:
                            e_1 = _5.sent();
                            return [4 /*yield*/, _EACH_ERROR(e_1)];
                        case 9:
                            _5.sent();
                            return [4 /*yield*/, _ERROR(e_1)];
                        case 10:
                            _5.sent();
                            throw Error(e_1);
                        case 11:
                            if (!needUseEachAfter) return [3 /*break*/, 13];
                            return [4 /*yield*/, _EACH_AFTER(result)];
                        case 12:
                            result = ((_5.sent()) || result);
                            _5.label = 13;
                        case 13:
                            if (!needUseAfter) return [3 /*break*/, 15];
                            return [4 /*yield*/, _AFTER(result)];
                        case 14:
                            result = ((_5.sent()) || result);
                            _5.label = 15;
                        case 15: return [2 /*return*/, result];
                    }
                });
            });
        };
    };
});
