import { setCommonTag } from '@/utils';

export default (fn) => {
  return setCommonTag('_JSONP_CALLBACK_PARAM', fn, '_EACH_JSONP_CALLBACK_PARAM');
};
