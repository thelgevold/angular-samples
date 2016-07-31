
import {bootstrapWorkerApp} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core'
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app',
  template: `
    <div>
      <div>{{time}}</div>
      <button (click)="null"></button>
    </div>
  `
})
class App {
  time: string;
  constructor() {
    setInterval(() => {
      this.time = this.formatTime(new Date());
    },500);
  }

  formatTime(now){
    var h = this.padZero(now.getHours());
    var m = this.padZero(now.getMinutes());
    var s = this.padZero(now.getSeconds());

    return `${h}:${m}:${s}`;
  }

  padZero(part) {
    return part >= 10 ? part : "0" + part;
  }
}

bootstrapWorkerApp(App).catch(err => console.error(err)); 
