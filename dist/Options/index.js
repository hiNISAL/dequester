var DequesterOptions = /** @class */ (function () {
    function DequesterOptions(options) {
        if (options === void 0) { options = {}; }
        this.options = options;
    }
    return DequesterOptions;
}());
export { DequesterOptions };
;
export default (function (options) {
    return new DequesterOptions(options);
});
