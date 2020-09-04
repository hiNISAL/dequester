import { setCommonTag } from '../../utils';
export default (function (fn) {
    return setCommonTag('_BEFORE', fn, '_EACH_BEFORE');
});
