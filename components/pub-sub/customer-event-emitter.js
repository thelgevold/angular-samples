import { Subject } from 'rxjs/Subject';
export class CustomerEventEmitter extends Subject {
    constructor() {
        super();
    }
    emit(value) { super.next(value); }
}
