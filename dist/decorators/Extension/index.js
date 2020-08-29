import { setCommonTag } from '@/utils';
export default (function (fn) {
    return setCommonTag('_EXTENSION', fn, '_EACH_EXTENSION');
});
