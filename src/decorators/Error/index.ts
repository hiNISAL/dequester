import { setCommonTag } from '@/utils';

export default (fn) => {
  return setCommonTag('_ERROR', fn, '_EACH_ERROR');
};
