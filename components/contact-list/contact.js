export class Contact {
    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
        this.descr = this.name + ' ' + this.phone;
    }
}
