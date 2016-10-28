import * as import0 from '../../../components/input-output/input-output';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view_utils';
import * as import3 from '@angular/core/src/linker/view';
import * as import5 from '@angular/core/src/linker/element';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/linker/element_ref';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
export class Wrapper_InputOutput {
    constructor(p0, p1) {
        this.changed = false;
        this.context = new import0.InputOutput(p0, p1);
        this._expr_0 = import1.UNINITIALIZED;
        this._expr_1 = import1.UNINITIALIZED;
        this._expr_2 = import1.UNINITIALIZED;
        this._expr_3 = import1.UNINITIALIZED;
        this._expr_4 = import1.UNINITIALIZED;
    }
    check_counter(currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this.changed = true;
            this.context.counter = currValue;
            this._expr_0 = currValue;
        }
    }
    check_fixedValue(currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._expr_1, currValue))) {
            this.changed = true;
            this.context.fixedValue = currValue;
            this._expr_1 = currValue;
        }
    }
    check_sum(currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._expr_2, currValue))) {
            this.changed = true;
            this.context.sum = currValue;
            this._expr_2 = currValue;
        }
    }
    check_headline(currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._expr_3, currValue))) {
            this.changed = true;
            this.context.headline = currValue;
            this._expr_3 = currValue;
        }
    }
    check_growingString(currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._expr_4, currValue))) {
            this.changed = true;
            this.context.growingString = currValue;
            this._expr_4 = currValue;
        }
    }
    detectChangesInInputProps(view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    }
    detectChangesInHostProps(view, el, throwOnChange) {
    }
}
var renderType_InputOutput_Host = null;
class _View_InputOutput_Host0 extends import3.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_InputOutput_Host0, renderType_InputOutput_Host, import7.ViewType.HOST, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import2.selectOrCreateRenderHostElement(this.renderer, 'input-output', import2.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import5.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_InputOutput0(this.viewUtils, this.injector(0), this._appEl_0);
        this._InputOutput_0_4 = new Wrapper_InputOutput(new import8.ElementRef(this._el_0), null);
        this._appEl_0.initComponent(this._InputOutput_0_4.context, [], compView_0);
        compView_0.create(this._InputOutput_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.InputOutput) && (0 === requestNodeIndex))) {
            return this._InputOutput_0_4.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._InputOutput_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._InputOutput_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
}
function viewFactory_InputOutput_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_InputOutput_Host === null)) {
        (renderType_InputOutput_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_InputOutput_Host0(viewUtils, parentInjector, declarationEl);
}
export const InputOutputNgFactory = new import10.ComponentFactory('input-output', viewFactory_InputOutput_Host0, import0.InputOutput);
const styles_InputOutput = [];
var renderType_InputOutput = null;
class _View_InputOutput0 extends import3.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_InputOutput0, renderType_InputOutput, import7.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
        this._expr_11 = import1.UNINITIALIZED;
        this._expr_12 = import1.UNINITIALIZED;
        this._expr_13 = import1.UNINITIALIZED;
        this._expr_14 = import1.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = import2.createRenderElement(this.renderer, parentRenderNode, 'h1', import2.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n              ', null);
        this._el_3 = import2.createRenderElement(this.renderer, parentRenderNode, 'div', import2.EMPTY_INLINE_ARRAY, null);
        this._text_4 = this.renderer.createText(this._el_3, '', null);
        this._text_5 = this.renderer.createText(parentRenderNode, '\n              ', null);
        this._el_6 = import2.createRenderElement(this.renderer, parentRenderNode, 'div', import2.EMPTY_INLINE_ARRAY, null);
        this._text_7 = this.renderer.createText(this._el_6, '', null);
        this._text_8 = this.renderer.createText(parentRenderNode, '\n              ', null);
        this._el_9 = import2.createRenderElement(this.renderer, parentRenderNode, 'div', import2.EMPTY_INLINE_ARRAY, null);
        this._text_10 = this.renderer.createText(this._el_9, '', null);
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
        const currVal_11 = import2.interpolate(1, '', this.context.headline, '');
        if (import2.checkBinding(throwOnChange, this._expr_11, currVal_11)) {
            this.renderer.setText(this._text_1, currVal_11);
            this._expr_11 = currVal_11;
        }
        const currVal_12 = import2.interpolate(1, 'Counter: ', this.context.counter, '');
        if (import2.checkBinding(throwOnChange, this._expr_12, currVal_12)) {
            this.renderer.setText(this._text_4, currVal_12);
            this._expr_12 = currVal_12;
        }
        const currVal_13 = import2.interpolate(1, 'Running total of counter values: ', this.context.sum, '');
        if (import2.checkBinding(throwOnChange, this._expr_13, currVal_13)) {
            this.renderer.setText(this._text_7, currVal_13);
            this._expr_13 = currVal_13;
        }
        const currVal_14 = import2.interpolate(1, 'Growing string: ', this.context.growingString, '');
        if (import2.checkBinding(throwOnChange, this._expr_14, currVal_14)) {
            this.renderer.setText(this._text_10, currVal_14);
            this._expr_14 = currVal_14;
        }
        this.detectViewChildrenChanges(throwOnChange);
    }
}
export function viewFactory_InputOutput0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_InputOutput === null)) {
        (renderType_InputOutput = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, styles_InputOutput, {}));
    }
    return new _View_InputOutput0(viewUtils, parentInjector, declarationEl);
}
