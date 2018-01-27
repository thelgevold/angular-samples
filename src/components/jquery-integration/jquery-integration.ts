import {Component, ElementRef, Inject, OnInit} from '@angular/core';

declare var jQuery:any;

@Component({
    selector: 'jquery-integration',
    templateUrl: './jquery-integration.html'
})

export class JqueryIntegration implements OnInit {
    elementRef: ElementRef;

    constructor(@Inject(ElementRef) elementRef: ElementRef) {
        this.elementRef = elementRef;
    }

    ngOnInit() {
        jQuery(this.elementRef.nativeElement).find('.moving-box').draggable({containment:'#draggable-parent'});
    }
}