import {Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/filter';

export class UpgradePubSubService {
  
  constructor() {
    console.log('UpgradePubSubService created');
  }

  private messageSubject = new Subject<any>();

  sendMessage(msg: string, key: string) {
    this.messageSubject.next({message: msg, key: key});
  }

  getMessages() {
    return this.messageSubject.asObservable();
  }
}