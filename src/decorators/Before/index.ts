import { setCommonTag } from '@/utils';

export default (fn) => {
  return setCommonTag('_BEFORE', fn, '_EACH_BEFORE');
};
