import { setCommonTag } from '@/utils';

export default (fn) => {
  return setCommonTag('_JSONP_CALLBACK_PREFIX', fn, '_EACH_JSONP_CALLBACK_PREFIX');
};
