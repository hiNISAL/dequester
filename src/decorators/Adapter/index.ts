import { setCommonTag } from '../../utils';

export default (fn) => {
  return setCommonTag('_ADAPTER', fn, '_ADAPTER');
};
