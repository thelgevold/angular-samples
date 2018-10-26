import {Component, OnInit} from '@angular/core';
import {ReactTreeView} from './react-tree-view';

@Component({
  selector: 'angular-host',
  templateUrl: './angular-host.html',
})
export class AngularHost implements OnInit {
  ngOnInit() {
    ReactTreeView.initialize('Locations');
  }
}
