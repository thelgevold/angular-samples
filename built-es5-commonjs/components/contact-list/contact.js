"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Contact = (function () {
    function Contact(name, phone) {
        this.name = name;
        this.phone = phone;
        this.descr = this.name + ' ' + this.phone;
    }
    return Contact;
}());
exports.Contact = Contact;
