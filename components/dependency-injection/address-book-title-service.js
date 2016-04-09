System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AddressBookTitleService;
    return {
        setters:[],
        execute: function() {
            AddressBookTitleService = (function () {
                function AddressBookTitleService() {
                    this.callCount = 0;
                    console.log('AddressBookTitleService');
                }
                AddressBookTitleService.prototype.getTitle = function () {
                    this.callCount++;
                    return "My Address Book";
                };
                return AddressBookTitleService;
            }());
            exports_1("AddressBookTitleService", AddressBookTitleService);
        }
    }
});
