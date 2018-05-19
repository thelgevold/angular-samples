import { Subject, pipe } from "rxjs";
import { Coordinates } from "./coordinates";
import { bufferCount, map } from "rxjs/operators";

export class EdgeService extends Subject<Coordinates> {
  getCoordinates() {
    return this.asObservable().pipe(
      bufferCount(2),
      map(buffer => {
        return { first: buffer[0], second: buffer[1] };
      })
    );
  }
}
