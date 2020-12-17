import { setMethodTag } from '../../utils';

export default (headers: any) => {
  return setMethodTag('_HEADERS', headers);
};
