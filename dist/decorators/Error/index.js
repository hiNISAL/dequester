import { setCommonTag } from '../../utils';
export default (function (fn) {
    return setCommonTag('_ERROR', fn, '_EACH_ERROR');
});
