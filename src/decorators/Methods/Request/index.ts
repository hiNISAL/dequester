import { DequesterOptions } from '@/Options';
import { iReqOpt } from '@/common.d';
import request from '@/request';
import { getPath } from './helpers';

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
        // 取消钩子
        _EACH_CANCEL = () => {},
        // 错误钩子
        _EACH_ERROR = () => {},
        // 额外扩展参数
        _EACH_EXTENSION = {},
        // jsonp callback 前缀
        _EACH_JSONP_CALLBACK_PREFIX = '',
        // 适配器
        _EACH_ADAPTER,
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
        // 取消钩子
        _CANCEL = _EACH_CANCEL,
        // 错误钩子
        _ERROR = () => {},
        // 额外扩展参数
        _EXTENSION = {},
        // jsonp callback 前缀
        _JSONP_CALLBACK_PREFIX = '',
        // 适配器
        _ADAPTER,
      } = bck;

      // ----------------------------------------------------------------------------

      let needUseEachBefore = true;
      let needUseEachAfter = true;
      let needUseBefore = true;
      let needUseAfter = true;

      // ----------------------------------------------------------------------------

      // 处理一次参数内容 人工重载一下
      if (Array.isArray(queries)) {
        const [data, params, headers, cancel] = queries;

        queries = data;

        usePath = getPath(usePath, params);

        // 合并头
        _HEADERS = {
          ..._HEADERS,
          ...headers,
        };

        _CANCEL = cancel || _CANCEL;
      }

      // ----------------------------------------------------------------------------
      let ext = {};
      let reqOpt = {};
      let finalAdapter = _ADAPTER || _EACH_ADAPTER;

      // 如果是用 ReqOpt 构建的对象
      if (queries instanceof DequesterOptions) {
        reqOpt = queries.options;
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
          // 错误钩子
          error,
          // 额外扩展参数
          extension,
          // jsonp 回调前缀
          jsonpCallbackPrefix = '',
          // 请求适配器
          adapter,
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
        _ERROR = error || _ERROR;
        ext = extension || ext;
        _JSONP_CALLBACK_PREFIX = jsonpCallbackPrefix || _JSONP_CALLBACK_PREFIX || _EACH_JSONP_CALLBACK_PREFIX;
        finalAdapter = adapter || finalAdapter;
      }

      // 构建出 options 抛给请求库处理请求
      let options = {
        method,
        url: `${prefix || _PREFIX || ''}${usePath}`,
        headers: _HEADERS,
        data: queries,
        cancel: _CANCEL,
        bodyType: _BODY_TYPE,
        extension: {
          extension: ext,
          _EACH_EXTENSION,
          _EXTENSION,
        },
        jsonp: _JSONP_CALLBACK_PREFIX,
        _SOURCE: {
          reqOpt,
        },
        adapter: finalAdapter,
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
      let result: any = null;
      try {
        result = await request(options)
      } catch (e) {
        await _EACH_ERROR(e);
        await _ERROR(e);
        throw Error(e);
      }

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
