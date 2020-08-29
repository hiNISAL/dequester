import { setCommonTag } from '@/utils';
export default (function (fn) {
    return setCommonTag('_ADAPTER', fn, '_ADAPTER');
});
