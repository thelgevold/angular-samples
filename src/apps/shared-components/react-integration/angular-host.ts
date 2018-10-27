import {Component, OnInit} from '@angular/core';
import {MergeSortComponent} from './merge-sort.component';

@Component({
  selector: 'angular-host',
  templateUrl: './angular-host.html',
})
export class AngularHost implements OnInit {
  ngOnInit() {
    MergeSortComponent.initialize();
  }
}
