import { setCommonTag } from '../../utils';

export default (fn: any) => {
  return setCommonTag('_ADAPTER', fn, '_ADAPTER');
};
