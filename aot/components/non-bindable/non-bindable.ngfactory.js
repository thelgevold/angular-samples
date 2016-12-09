import * as import0 from '../../../components/non-bindable/non-bindable';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/core/src/change_detection/change_detection_util';
export class Wrapper_IgnoreBindings {
    constructor() {
        this._changed = false;
        this.context = new import0.IgnoreBindings();
    }
    ngOnDetach(view, componentView, el) {
    }
    ngOnDestroy() {
    }
    ngDoCheck(view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    }
    checkHost(view, componentView, el, throwOnChange) {
    }
    handleEvent(eventName, $event) {
        var result = true;
        return result;
    }
    subscribe(view, _eventHandler) {
        this._eventHandler = _eventHandler;
    }
}
var renderType_IgnoreBindings_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
class View_IgnoreBindings_Host0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_IgnoreBindings_Host0, renderType_IgnoreBindings_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'ignore-bindings', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_IgnoreBindings0(this.viewUtils, this, 0, this._el_0);
        this._IgnoreBindings_0_3 = new Wrapper_IgnoreBindings();
        this.compView_0.create(this._IgnoreBindings_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._IgnoreBindings_0_3.context);
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.IgnoreBindings) && (0 === requestNodeIndex))) {
            return this._IgnoreBindings_0_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._IgnoreBindings_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    }
    destroyInternal() {
        this.compView_0.destroy();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
export const IgnoreBindingsNgFactory = new import7.ComponentFactory('ignore-bindings', View_IgnoreBindings_Host0, import0.IgnoreBindings);
const styles_IgnoreBindings = [];
var renderType_IgnoreBindings = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_IgnoreBindings, {});
export class View_IgnoreBindings0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_IgnoreBindings0, renderType_IgnoreBindings, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
        this._expr_15 = import8.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'h1', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, 'Ignoring Bindings', null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_3 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_4 = this.renderer.createText(this._el_3, 'Ignored Binding:\n    ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_3, 'div', new import3.InlineArray2(2, 'ngNonBindable', ''), null);
        this._text_6 = this.renderer.createText(this._el_5, '{{10 * 10}}', null);
        this._text_7 = this.renderer.createText(this._el_3, '\n', null);
        this._text_8 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_9 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_10 = this.renderer.createText(this._el_9, '\n    Executed Binding:\n    ', null);
        this._el_11 = import3.createRenderElement(this.renderer, this._el_9, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_12 = this.renderer.createText(this._el_11, '', null);
        this._text_13 = this.renderer.createText(this._el_9, '\n', null);
        this._text_14 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._text_13,
            this._text_14
        ]), null);
        return null;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_15 = import3.inlineInterpolate(1, '', (10 * 10), '');
        if (import3.checkBinding(throwOnChange, this._expr_15, currVal_15)) {
            this.renderer.setText(this._text_12, currVal_15);
            this._expr_15 = currVal_15;
        }
    }
}
