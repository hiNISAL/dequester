import { setCommonTag } from '../../utils';

export default (fn) => {
  return setCommonTag('_CANCEL', fn, '_EACH_CANCEL');
};
