import { Component, ElementRef, Inject } from '@angular/core';
var JqueryIntegration = (function () {
    function JqueryIntegration(elementRef) {
        this.elementRef = elementRef;
    }
    JqueryIntegration.prototype.ngOnInit = function () {
        jQuery(this.elementRef.nativeElement).find('.moving-box').draggable({ containment: '#draggable-parent' });
    };
    return JqueryIntegration;
}());
export { JqueryIntegration };
JqueryIntegration.decorators = [
    { type: Component, args: [{
                selector: 'jquery-integration',
                templateUrl: './jquery-integration.html'
            },] },
];
JqueryIntegration.ctorParameters = function () { return [
    { type: ElementRef, decorators: [{ type: Inject, args: [ElementRef,] },] },
]; };
