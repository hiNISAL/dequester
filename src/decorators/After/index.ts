import { setCommonTag } from '../../utils';

export default (fn: any) => {
  return setCommonTag('_AFTER', fn, '_EACH_AFTER');
};
