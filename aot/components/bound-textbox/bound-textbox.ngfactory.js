import * as import0 from '../../../components/bound-textbox/bound-textbox';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/core/src/change_detection/change_detection_util';
export class Wrapper_BoundTextbox {
    constructor() {
        this._changed = false;
        this.context = new import0.BoundTextbox();
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
var renderType_BoundTextbox_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
class View_BoundTextbox_Host0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_BoundTextbox_Host0, renderType_BoundTextbox_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'bound-textbox', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_BoundTextbox0(this.viewUtils, this, 0, this._el_0);
        this._BoundTextbox_0_3 = new Wrapper_BoundTextbox();
        this.compView_0.create(this._BoundTextbox_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._BoundTextbox_0_3.context);
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.BoundTextbox) && (0 === requestNodeIndex))) {
            return this._BoundTextbox_0_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._BoundTextbox_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    }
    destroyInternal() {
        this.compView_0.destroy();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
export const BoundTextboxNgFactory = new import7.ComponentFactory('bound-textbox', View_BoundTextbox_Host0, import0.BoundTextbox);
const styles_BoundTextbox = [];
var renderType_BoundTextbox = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_BoundTextbox, {});
export class View_BoundTextbox0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_BoundTextbox0, renderType_BoundTextbox, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
        this._expr_5 = import8.UNINITIALIZED;
        this._expr_6 = import8.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'h1', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, 'Bound Textbox', null);
        this._el_2 = import3.createRenderElement(this.renderer, parentRenderNode, 'input', import3.EMPTY_INLINE_ARRAY, null);
        this._el_3 = import3.createRenderElement(this.renderer, parentRenderNode, 'span', import3.EMPTY_INLINE_ARRAY, null);
        this._text_4 = this.renderer.createText(this._el_3, '', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_2, new import3.InlineArray2(2, 'keyup', null), this.eventHandler(this.handleEvent_2));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._el_3,
            this._text_4
        ]), [disposable_0]);
        return null;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_5 = this.context.text;
        if (import3.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementProperty(this._el_2, 'value', currVal_5);
            this._expr_5 = currVal_5;
        }
        const currVal_6 = import3.inlineInterpolate(1, '', this.context.text, '');
        if (import3.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setText(this._text_4, currVal_6);
            this._expr_6 = currVal_6;
        }
    }
    handleEvent_2(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'keyup')) {
            const pd_sub_0 = (this.context.typing($event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    }
}
