import { Component, Input } from '@angular/core';
export class Survey {
    constructor() {
        this.payLoad = null;
    }
    ngOnInit() {
        this.form = this.model.toGroup();
    }
    onSubmit() {
        this.payLoad = JSON.stringify(this.form.value);
    }
}
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
