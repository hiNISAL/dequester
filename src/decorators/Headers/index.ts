import { setMethodTag } from '@/utils';

export default (headers) => {
  return setMethodTag('_HEADERS', headers);
};
