var HeaderRowService = (function () {
    function HeaderRowService() {
    }
    HeaderRowService.createHeader = function (length) {
        var alpha = 'abcdefghijklmnopqrstuvwxyz';
        var headerLength = 1;
        var header = [];
        var charCounter = 0;

        for (var i = 0; i < length; i++) {
            header.push(alpha.substr(charCounter, headerLength));
            charCounter++;
        }
        return header;
    };
    return HeaderRowService;
})();
exports.HeaderRowService = HeaderRowService;
