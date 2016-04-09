System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var HeaderRowService;
    return {
        setters:[],
        execute: function() {
            HeaderRowService = (function () {
                function HeaderRowService() {
                }
                HeaderRowService.createHeader = function (length) {
                    var alpha = 'abcdefghijklmnopqrstuvwxyz';
                    var headerLength = 1;
                    var header = [];
                    var prefix = '';
                    var pass = 0;
                    var charCounter = 0;
                    for (var i = 0; i < length; i++) {
                        if (charCounter === alpha.length) {
                            prefix += alpha.substr(pass, 1);
                            charCounter = 0;
                        }
                        header.push(prefix + alpha.substr(charCounter, headerLength));
                        charCounter++;
                    }
                    return header;
                };
                return HeaderRowService;
            }());
            exports_1("HeaderRowService", HeaderRowService);
        }
    }
});
