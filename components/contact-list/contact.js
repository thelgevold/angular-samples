System.register([], function(exports_1) {
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
            })();
            exports_1("Contact", Contact);
        }
    }
});
