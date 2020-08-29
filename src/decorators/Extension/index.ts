import { setCommonTag } from '../../utils';

export default (fn) => {
  return setCommonTag('_EXTENSION', fn, '_EACH_EXTENSION');
};
