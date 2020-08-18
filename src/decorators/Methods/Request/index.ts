import { DequesterOptions } from '@/Options';

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

export default (method, path, prefix) => {
  return (target, name, desc) => {
    // 保留参数
    const bck = target[name];

    // 重写方法
    desc.value = async (...args) => {
      let queries = await bck(...args);
      let usePath = path;

      // 拿到装饰的一些信息
      let {
        _HEADERS = {},
        _BODY_TYPE = {},
      } = bck;

      console.log('_HEADERS', _HEADERS);
      console.log('_BODY_TYPE', _BODY_TYPE);

      if (queries instanceof DequesterOptions) {
        const {
          headers = {},
          data = {},
          params = {},
        } = queries.options;

        _HEADERS = {
          ..._HEADERS,
          ...headers,
        };

        queries = data;
        usePath = getPath(usePath, params);
      }

      // 构建出 options 抛给请求库处理请求
      const options = {
        method,
        url: `${prefix || target._PREFIX || ''}${usePath}`,
        headers: _HEADERS,
        data: queries,
      };

      console.log(options);
    };
  };
};
