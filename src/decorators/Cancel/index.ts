import { setCommonTag } from '../../utils';

export default (fn: any) => {
  return setCommonTag('_CANCEL', fn, '_EACH_CANCEL');
};
