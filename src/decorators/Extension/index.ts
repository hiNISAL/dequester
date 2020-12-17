import { setCommonTag } from '../../utils';

export default (fn: any) => {
  return setCommonTag('_EXTENSION', fn, '_EACH_EXTENSION');
};
