import {Component} from '@angular/core';

import {UpgradePubSubService} from './upgrade-pub-sub.service';

@Component({
  template: `<div>{{message}}</div>
             <button (click)="sendMessage()">Send Message From New Angular</button> 
             `
})
export class MessageComponent {
  message: string;

  constructor(private service: UpgradePubSubService) {}

  ngOnInit() {
    this.service.getMessages()
                .filter(m => m.key === 'old')
                .subscribe((data) => {
      this.message = data.message;
    });
  }

  sendMessage() {
    this.service.sendMessage('Hello old Angular! This is new Angular', 'new');
  }
}