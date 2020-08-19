import { setCommonTag } from '@/utils';

export default (fn) => {
  return setCommonTag('_AFTER', fn, '_AFTER_EACH');
};
