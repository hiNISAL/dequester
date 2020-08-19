import { setCommonTag } from '@/utils';

export default (fn) => {
  return setCommonTag('_BEFORE', fn, '_BEFORE_EACH');
};
