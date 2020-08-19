export interface iReqOpt {
  // 头
  headers?: {
    [propName: string]: string;
  };
  // 请求数据
  data?: any;
  // url 参数
  params?: {
    [propName: string]: string;
  };
  // 前置钩子
  before?: Function;
  // 后置钩子
  after?: Function;
  // 是否使用绑定在class上的前置钩子
  useEachBefore?: Function;
  // 是否使用绑定在class上的后置钩子
  useEachAfter?: Function;
  // 是否使用绑定在method上的前置钩子
  useBefore?: Function;
  // 是否使用绑定在method上的后置钩子
  useAfter?: Function;
}
