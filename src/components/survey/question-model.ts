import {FormGroup, Validators, FormControl} from '@angular/forms';

export class QuestionModel{
    questions = [];

    toGroup(){
        let group:any = {};

        this.questions.forEach((question) => {
            if(question.required){
                group[question.key] = new FormControl('', Validators.required);
            }
            else{
                group[question.key] = new FormControl('');
            }
        });

        return new FormGroup(group);
    }
}