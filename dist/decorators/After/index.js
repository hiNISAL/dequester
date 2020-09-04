import { setCommonTag } from '../../utils';
export default (function (fn) {
    return setCommonTag('_AFTER', fn, '_EACH_AFTER');
});
