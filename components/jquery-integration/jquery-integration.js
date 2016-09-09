import { Component, ElementRef, Inject } from '@angular/core';
export var JqueryIntegration = (function () {
    function JqueryIntegration(elementRef) {
        this.elementRef = elementRef;
    }
    JqueryIntegration.prototype.ngOnInit = function () {
        jQuery(this.elementRef.nativeElement).find('.moving-box').draggable({ containment: '#draggable-parent' });
    };
    JqueryIntegration.decorators = [
        { type: Component, args: [{
                    selector: 'jquery-integration',
                    templateUrl: './jquery-integration.html'
                },] },
    ];
    JqueryIntegration.ctorParameters = [
        { type: ElementRef, decorators: [{ type: Inject, args: [ElementRef,] },] },
    ];
    return JqueryIntegration;
}());
