import { DequesterOptions } from '@/Options';
import { iReqOpt } from '@/common.d';
import request from '@/request';
import defaultConfig from '@/config.default';
import { clone } from '@/utils';

// ----------------------------------------------------------------------------

let config = Object.assign({}, defaultConfig);

export const setConfig = (newConfig) => {
  config = Object.assign(newConfig);
};

// ----------------------------------------------------------------------------

/**
 * 根据占位符处理路径
 * @param path 
 * @param placeholder 
 */
const getPath = (path: string, placeholder: { [propName: string]: string; } = {}) => {
  for (const [k, v] of Object.entries(placeholder)) {
    path = path.replace(`:${k}`, v);
  }

  return path;
};

// ----------------------------------------------------------------------------

export default (method, path, prefix) => {
  return (target, name, desc) => {
    // 保留参数
    const bck = target[name];

    // ----------------------------------------------------------------------------

    // 重写方法
    desc.value = async (...args) => {
      let queries = await bck(...args);
      let usePath = path;

      // 取到类上装饰的信息
      const {
        // 前缀
        _PREFIX = '',
        // 前置拦截器
        _EACH_BEFORE = () => {},
        // 后置拦截器
        _EACH_AFTER = () => {},
        // 配置信息
        _EACH_CONFIG = {},
        // 取消钩子
        _EACH_CANCEL = () => {},
      } = target;

      // 取到方法上装饰的信息
      let {
        _AFTER = () => {},
        _BEFORE = () => {},
      } = bck;

      // 拿到装饰的一些信息
      let {
        // 头
        _HEADERS = {},
        // body类型
        _BODY_TYPE = {},
        // 配置信息
        _CONFIG = {},
        // 取消钩子
        _CANCEL = _EACH_CANCEL,
      } = bck;

      // ----------------------------------------------------------------------------

      let needUseEachBefore = true;
      let needUseEachAfter = true;
      let needUseBefore = true;
      let needUseAfter = true;

      // 处理配置信息
      const conf = {
        ...config,
        ..._EACH_CONFIG,
        ..._CONFIG,
      };

      // ----------------------------------------------------------------------------

      // 如果是用 ReqOpt 构建的对象
      if (queries instanceof DequesterOptions) {
        // 娶到配置信息
        const {
          // 头
          headers = {},
          // 请求数据
          data = {},
          // url 参数
          params = {},
          // 前置钩子
          before = () => {},
          // 后置钩子
          after = () => {},
          // 是否使用绑定在class上的前置钩子
          useEachBefore = true,
          // 是否使用绑定在class上的后置钩子
          useEachAfter = true,
          // 是否使用绑定在method上的前置钩子
          useBefore = true,
          // 是否使用绑定在method上的后置钩子
          useAfter = true,
          // 取消方法
          cancel,
        } = (queries.options as iReqOpt);

        // 合并头
        _HEADERS = {
          ..._HEADERS,
          ...headers,
        };

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
      }

      // 构建出 options 抛给请求库处理请求
      let options = {
        config: conf,
        method,
        url: `${prefix || _PREFIX || ''}${usePath}`,
        headers: _HEADERS,
        data: queries,
        cancel: _CANCEL,
      };

      // 看看是不是要执行大前置
      if (needUseEachBefore) {
        options = (await _EACH_BEFORE(options)) || options;
      }

      // 看看是不是要执行小前置
      if (needUseBefore) {
        options = (await _BEFORE(options)) || options;
      }

      // 跑请求
      let result = await request(options);

      // 看看要不要执行大后置
      if (needUseEachAfter) {
        result = (await _EACH_AFTER(result) || result);
      }

      // 看看要不要执行小后置
      if (needUseAfter) {
        result = (await _AFTER(result) || result);
      }

      return result;
    };
  };
};
