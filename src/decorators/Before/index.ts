import { setCommonTag } from '../../utils';

export default (fn: any) => {
  return setCommonTag('_BEFORE', fn, '_EACH_BEFORE');
};
