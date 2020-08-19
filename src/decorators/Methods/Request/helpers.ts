/**
 * 根据占位符处理路径
 * @param path 
 * @param placeholder 
 */
export const getPath = (path: string, placeholder: { [propName: string]: string; } = {}) => {
  for (const [k, v] of Object.entries(placeholder)) {
    path = path.replace(`:${k}`, v);
  }

  return path;
};
