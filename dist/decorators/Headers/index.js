import { setMethodTag } from '../../utils';
export default (function (headers) {
    return setMethodTag('_HEADERS', headers);
});
