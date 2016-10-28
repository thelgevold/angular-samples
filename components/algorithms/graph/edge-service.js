import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/bufferCount';
export class EdgeService extends Subject {
    getCoordinates() {
        return this.asObservable().bufferCount(2).map(buffer => { return { first: buffer[0], second: buffer[1] }; });
    }
}
