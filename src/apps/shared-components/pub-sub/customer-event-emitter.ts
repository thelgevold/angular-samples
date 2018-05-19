import { Subject } from "rxjs";
import { Customer } from "./customer";

export class CustomerEventEmitter extends Subject<Customer> {
  constructor() {
    super();
  }

  emit(value) {
    super.next(value);
  }
}
