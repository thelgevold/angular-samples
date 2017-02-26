var AddressBookTitleService = (function () {
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
export { AddressBookTitleService };
