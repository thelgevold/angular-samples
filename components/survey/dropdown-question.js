import { QuestionBase } from './question-base';
export class DropDownQuestion extends QuestionBase {
    constructor() {
        super();
        this.options = [];
        this.controlType = 'dropdown';
    }
}
