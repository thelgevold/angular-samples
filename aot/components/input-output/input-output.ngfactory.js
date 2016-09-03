import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../components/input-output/input-output';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/linker/element_ref';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
var renderType_InputOutput_Host = null;
class _View_InputOutput_Host0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_InputOutput_Host0, renderType_InputOutput_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('input-output', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_InputOutput0(this.viewUtils, this.injector(0), this._appEl_0);
        this._InputOutput_0_4 = new import3.InputOutput(new import8.ElementRef(this._el_0), null);
        this._appEl_0.initComponent(this._InputOutput_0_4, [], compView_0);
        compView_0.create(this._InputOutput_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import3.InputOutput) && (0 === requestNodeIndex))) {
            return this._InputOutput_0_4;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._InputOutput_0_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
}
function viewFactory_InputOutput_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_InputOutput_Host === null)) {
        (renderType_InputOutput_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_InputOutput_Host0(viewUtils, parentInjector, declarationEl);
}
export const InputOutputNgFactory = new import10.ComponentFactory('input-output', viewFactory_InputOutput_Host0, import3.InputOutput);
const styles_InputOutput = [];
var renderType_InputOutput = null;
class _View_InputOutput0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_InputOutput0, renderType_InputOutput, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'h1', null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n              ', null);
        this._el_3 = this.renderer.createElement(parentRenderNode, 'div', null);
        this._text_4 = this.renderer.createText(this._el_3, '', null);
        this._text_5 = this.renderer.createText(parentRenderNode, '\n              ', null);
        this._el_6 = this.renderer.createElement(parentRenderNode, 'div', null);
        this._text_7 = this.renderer.createText(this._el_6, '', null);
        this._text_8 = this.renderer.createText(parentRenderNode, '\n              ', null);
        this._el_9 = this.renderer.createElement(parentRenderNode, 'div', null);
        this._text_10 = this.renderer.createText(this._el_9, '', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10
        ], [], []);
        return null;
    }
    detectChangesInternal(throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        const currVal_0 = import4.interpolate(1, '', this.context.headline, '');
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setText(this._text_1, currVal_0);
            this._expr_0 = currVal_0;
        }
        const currVal_1 = import4.interpolate(1, 'Counter: ', this.context.counter, '');
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setText(this._text_4, currVal_1);
            this._expr_1 = currVal_1;
        }
        const currVal_2 = import4.interpolate(1, 'Running total of counter values: ', this.context.sum, '');
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_7, currVal_2);
            this._expr_2 = currVal_2;
        }
        const currVal_3 = import4.interpolate(1, 'Growing string: ', this.context.growingString, '');
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setText(this._text_10, currVal_3);
            this._expr_3 = currVal_3;
        }
        this.detectViewChildrenChanges(throwOnChange);
    }
}
export function viewFactory_InputOutput0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_InputOutput === null)) {
        (renderType_InputOutput = viewUtils.createRenderComponentType('/Users/tor/Development/angular-2-samples/components/input-output/input-output.ts class InputOutput - inline template', 0, import9.ViewEncapsulation.None, styles_InputOutput, {}));
    }
    return new _View_InputOutput0(viewUtils, parentInjector, declarationEl);
}
