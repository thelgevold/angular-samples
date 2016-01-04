var Character = (function () {
    function Character(keyCode) {
        this.isCurrent = false;
        this.lineBreak = false;
        this.placeHolder = false;
        if (keyCode === 13) {
            this.value = '\n';
            this.lineBreak = true;
        }
        else if (keyCode === -1) {
            this.value = '';
            this.placeHolder = true;
        }
        else {
            this.value = String.fromCharCode(keyCode);
        }
    }
    return Character;
})();
exports.Character = Character;
