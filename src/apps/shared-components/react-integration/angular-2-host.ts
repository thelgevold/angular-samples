import {Component, OnInit} from '@angular/core';
import {ReactTreeView} from './react-tree-view';

@Component({
    selector: 'angular-2-host',
    templateUrl:'./angular-2-host.html'
})

export class Angular2Host implements OnInit {

    ngOnInit(){
        ReactTreeView.initialize('Locations');
    }

}