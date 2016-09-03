import { Component, ElementRef, Inject } from '@angular/core';
export class JqueryIntegration {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    ngOnInit() {
        jQuery(this.elementRef.nativeElement).find('.moving-box').draggable({ containment: '#draggable-parent' });
    }
}
JqueryIntegration.decorators = [
    { type: Component, args: [{
                selector: 'jquery-integration',
                templateUrl: './jquery-integration.html'
            },] },
];
JqueryIntegration.ctorParameters = [
    { type: ElementRef, decorators: [{ type: Inject, args: [ElementRef,] },] },
];
