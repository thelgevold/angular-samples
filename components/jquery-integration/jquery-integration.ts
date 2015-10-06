import {Component, View, ElementRef} from 'angular2/angular2';

declare var jQuery:any;

@Component({
    selector: 'jquery-integration'
})

@View({
    templateUrl: './components/jquery-integration/jquery-integration.html'
})

export class JqueryIntegration {
    elementRef: ElementRef;

    constructor(elementRef: ElementRef) {
        this.elementRef = elementRef;
    }

    onInit() {
        jQuery(this.elementRef.nativeElement).draggable({containment:'#draggable-parent'});
    }
}