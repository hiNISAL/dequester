import { setCommonTag } from '../../utils';

export default (fn: any) => {
  return setCommonTag('_ERROR', fn, '_EACH_ERROR');
};
