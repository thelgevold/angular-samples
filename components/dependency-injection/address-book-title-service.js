export class AddressBookTitleService {
    constructor() {
        this.callCount = 0;
        console.log('AddressBookTitleService');
    }
    getTitle() {
        this.callCount++;
        return "My Address Book";
    }
}
