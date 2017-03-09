import { Component, Input } from '@angular/core';
var Survey = (function () {
    function Survey() {
        this.payLoad = null;
    }
    Survey.prototype.ngOnInit = function () {
        this.form = this.model.toGroup();
    };
    Survey.prototype.onSubmit = function () {
        this.payLoad = JSON.stringify(this.form.value);
    };
    return Survey;
}());
export { Survey };
Survey.decorators = [
    { type: Component, args: [{
                selector: 'survey',
                templateUrl: './survey.html'
            },] },
];
Survey.ctorParameters = function () { return []; };
Survey.propDecorators = {
    'model': [{ type: Input },],
};
