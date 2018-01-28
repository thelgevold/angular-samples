export class AddressBookTitleService {

    callCount = 0;
    constructor(){
        console.log('AddressBookTitleService');
    }

    getTitle(){
        this.callCount++;
        return "My Address Book";
    }
}