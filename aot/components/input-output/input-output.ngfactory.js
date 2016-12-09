import * as import0 from '../../../components/input-output/input-output';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '@angular/core/src/linker/element_ref';
export class Wrapper_InputOutput {
    constructor(p0, p1) {
        this._changed = false;
        this.context = new import0.InputOutput(p0, p1);
        this._expr_0 = import1.UNINITIALIZED;
        this._expr_1 = import1.UNINITIALIZED;
        this._expr_2 = import1.UNINITIALIZED;
        this._expr_3 = import1.UNINITIALIZED;
        this._expr_4 = import1.UNINITIALIZED;
    }
    ngOnDetach(view, componentView, el) {
    }
    ngOnDestroy() {
        (this.subscription0 && this.subscription0.unsubscribe());
    }
    check_counter(currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.counter = currValue;
            this._expr_0 = currValue;
        }
    }
    check_fixedValue(currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context.fixedValue = currValue;
            this._expr_1 = currValue;
        }
    }
    check_sum(currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_2, currValue))) {
            this._changed = true;
            this.context.sum = currValue;
            this._expr_2 = currValue;
        }
    }
    check_headline(currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_3, currValue))) {
            this._changed = true;
            this.context.headline = currValue;
            this._expr_3 = currValue;
        }
    }
    check_growingString(currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_4, currValue))) {
            this._changed = true;
            this.context.growingString = currValue;
            this._expr_4 = currValue;
        }
    }
    ngDoCheck(view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    }
    checkHost(view, componentView, el, throwOnChange) {
    }
    handleEvent(eventName, $event) {
        var result = true;
        return result;
    }
    subscribe(view, _eventHandler, emit0) {
        this._eventHandler = _eventHandler;
        if (emit0) {
            (this.subscription0 = this.context.stringChanged.subscribe(_eventHandler.bind(view, 'stringChanged')));
        }
    }
}
var renderType_InputOutput_Host = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, [], {});
class View_InputOutput_Host0 extends import2.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_InputOutput_Host0, renderType_InputOutput_Host, import6.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'input-output', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_InputOutput0(this.viewUtils, this, 0, this._el_0);
        this._InputOutput_0_3 = new Wrapper_InputOutput(new import9.ElementRef(this._el_0), null);
        this.compView_0.create(this._InputOutput_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import8.ComponentRef_(0, this, this._el_0, this._InputOutput_0_3.context);
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.InputOutput) && (0 === requestNodeIndex))) {
            return this._InputOutput_0_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._InputOutput_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    }
    destroyInternal() {
        this.compView_0.destroy();
        this._InputOutput_0_3.ngOnDestroy();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
export const InputOutputNgFactory = new import8.ComponentFactory('input-output', View_InputOutput_Host0, import0.InputOutput);
const styles_InputOutput = [];
var renderType_InputOutput = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, styles_InputOutput, {});
export class View_InputOutput0 extends import2.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_InputOutput0, renderType_InputOutput, import6.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_11 = import1.UNINITIALIZED;
        this._expr_12 = import1.UNINITIALIZED;
        this._expr_13 = import1.UNINITIALIZED;
        this._expr_14 = import1.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'h1', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n              ', null);
        this._el_3 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_4 = this.renderer.createText(this._el_3, '', null);
        this._text_5 = this.renderer.createText(parentRenderNode, '\n              ', null);
        this._el_6 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_7 = this.renderer.createText(this._el_6, '', null);
        this._text_8 = this.renderer.createText(parentRenderNode, '\n              ', null);
        this._el_9 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_10 = this.renderer.createText(this._el_9, '', null);
        this.init(null, (this.renderer.directRenderer ? null : [
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
        ]), null);
        return null;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_11 = import3.inlineInterpolate(1, '', this.context.headline, '');
        if (import3.checkBinding(throwOnChange, this._expr_11, currVal_11)) {
            this.renderer.setText(this._text_1, currVal_11);
            this._expr_11 = currVal_11;
        }
        const currVal_12 = import3.inlineInterpolate(1, 'Counter: ', this.context.counter, '');
        if (import3.checkBinding(throwOnChange, this._expr_12, currVal_12)) {
            this.renderer.setText(this._text_4, currVal_12);
            this._expr_12 = currVal_12;
        }
        const currVal_13 = import3.inlineInterpolate(1, 'Running total of counter values: ', this.context.sum, '');
        if (import3.checkBinding(throwOnChange, this._expr_13, currVal_13)) {
            this.renderer.setText(this._text_7, currVal_13);
            this._expr_13 = currVal_13;
        }
        const currVal_14 = import3.inlineInterpolate(1, 'Growing string: ', this.context.growingString, '');
        if (import3.checkBinding(throwOnChange, this._expr_14, currVal_14)) {
            this.renderer.setText(this._text_10, currVal_14);
            this._expr_14 = currVal_14;
        }
    }
}
