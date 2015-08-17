var HeaderRowService = (function () {
    function HeaderRowService() {
    }
    HeaderRowService.createHeader = function (length) {
        var alpha = 'abcdefghijklmnopqrstuvwxyz';
        var headerLength = 1;
        var header = [];
        for (var i = 0; i < length; i++) {
            header.push(alpha.substr(i, headerLength));
            if (i === alpha.length) {
                headerLength++;
            }
        }
        return header;
    };
    return HeaderRowService;
})();
exports.HeaderRowService = HeaderRowService;
