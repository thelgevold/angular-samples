System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Contact;
    return {
        setters:[],
        execute: function() {
            Contact = (function () {
                function Contact(name, phone) {
                    this.name = name;
                    this.phone = phone;
                    this.descr = this.name + ' ' + this.phone;
                }
                return Contact;
            }());
            exports_1("Contact", Contact);
        }
    }
});
