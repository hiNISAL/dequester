import { setCommonTag } from '@/utils';
export default (function (fn) {
    return setCommonTag('_CANCEL', fn, '_EACH_CANCEL');
});
