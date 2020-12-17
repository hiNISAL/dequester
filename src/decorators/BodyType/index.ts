import { setMethodTag } from '../../utils';

export default (type: any) => {
  return setMethodTag('_BODY_TYPE', type);
};
