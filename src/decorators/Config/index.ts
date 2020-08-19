import { setCommonTag } from '@/utils';

export default (config) => {
  return setCommonTag('_CONFIG', config, '_EACH_CONFIG');
};
