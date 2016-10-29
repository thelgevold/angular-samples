import { Component, Input } from '@angular/core';
export var Survey = (function () {
    function Survey() {
        this.payLoad = null;
    }
    Survey.prototype.ngOnInit = function () {
        this.form = this.model.toGroup();
    };
    Survey.prototype.onSubmit = function () {
        this.payLoad = JSON.stringify(this.form.value);
    };
    Survey.decorators = [
        { type: Component, args: [{
                    selector: 'survey',
                    templateUrl: './survey.html'
                },] },
    ];
    Survey.ctorParameters = [];
    Survey.propDecorators = {
        'model': [{ type: Input },],
    };
    return Survey;
}());
