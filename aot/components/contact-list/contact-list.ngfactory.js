import * as import0 from '../../../components/contact-list/contact-list';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/core/src/linker/view_container';
import * as import9 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import10 from '@angular/core/src/linker/template_ref';
import * as import11 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import12 from '@angular/common/src/directives/ng_for';
import * as import13 from '@angular/core/src/change_detection/change_detection_util';
export class Wrapper_ContactList {
    constructor() {
        this._changed = false;
        this.context = new import0.ContactList();
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
var renderType_ContactList_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
class View_ContactList_Host0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_ContactList_Host0, renderType_ContactList_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'contact-list', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_ContactList0(this.viewUtils, this, 0, this._el_0);
        this._ContactList_0_3 = new Wrapper_ContactList();
        this.compView_0.create(this._ContactList_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._ContactList_0_3.context);
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.ContactList) && (0 === requestNodeIndex))) {
            return this._ContactList_0_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._ContactList_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    }
    destroyInternal() {
        this.compView_0.destroy();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
export const ContactListNgFactory = new import7.ComponentFactory('contact-list', View_ContactList_Host0, import0.ContactList);
const styles_ContactList = [];
var renderType_ContactList = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_ContactList, {});
export class View_ContactList0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_ContactList0, renderType_ContactList, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'h1', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, 'Contact List', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_0, 'table', new import3.InlineArray2(2, 'class', 'table'), null);
        this._text_6 = this.renderer.createText(this._el_5, '\n        ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_5, 'thead', import3.EMPTY_INLINE_ARRAY, null);
        this._text_8 = this.renderer.createText(this._el_7, '\n            ', null);
        this._el_9 = import3.createRenderElement(this.renderer, this._el_7, 'tr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_10 = this.renderer.createText(this._el_9, '\n                ', null);
        this._el_11 = import3.createRenderElement(this.renderer, this._el_9, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._text_12 = this.renderer.createText(this._el_11, 'Name and phone number', null);
        this._text_13 = this.renderer.createText(this._el_9, '\n            ', null);
        this._text_14 = this.renderer.createText(this._el_7, '\n        ', null);
        this._text_15 = this.renderer.createText(this._el_5, '\n        ', null);
        this._el_16 = import3.createRenderElement(this.renderer, this._el_5, 'tbody', import3.EMPTY_INLINE_ARRAY, null);
        this._text_17 = this.renderer.createText(this._el_16, '\n            ', null);
        this._anchor_18 = this.renderer.createTemplateAnchor(this._el_16, null);
        this._vc_18 = new import8.ViewContainer(18, 16, this, this._anchor_18);
        this._TemplateRef_18_5 = new import10.TemplateRef_(this, 18, this._anchor_18);
        this._NgFor_18_6 = new import9.Wrapper_NgFor(this._vc_18.vcRef, this._TemplateRef_18_5, this.parentView.injectorGet(import11.IterableDiffers, this.parentIndex), this.ref);
        this._text_19 = this.renderer.createText(this._el_16, '\n        ', null);
        this._text_20 = this.renderer.createText(this._el_5, '\n    ', null);
        this._text_21 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_22 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'addContactControls'), null);
        this._text_23 = this.renderer.createText(this._el_22, '\n        ', null);
        this._el_24 = import3.createRenderElement(this.renderer, this._el_22, 'input', new import3.InlineArray2(2, 'placeholder', 'name'), null);
        this._text_25 = this.renderer.createText(this._el_22, '\n        ', null);
        this._el_26 = import3.createRenderElement(this.renderer, this._el_22, 'input', new import3.InlineArray2(2, 'placeholder', 'phone'), null);
        this._text_27 = this.renderer.createText(this._el_22, '\n        ', null);
        this._el_28 = import3.createRenderElement(this.renderer, this._el_22, 'button', new import3.InlineArray2(2, 'class', 'btn btn-primary btn-xs'), null);
        this._text_29 = this.renderer.createText(this._el_28, 'Add Contact', null);
        this._text_30 = this.renderer.createText(this._el_22, '\n    ', null);
        this._text_31 = this.renderer.createText(this._el_0, '\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_28, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_28));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._text_13,
            this._text_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._anchor_18,
            this._text_19,
            this._text_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._el_26,
            this._text_27,
            this._el_28,
            this._text_29,
            this._text_30,
            this._text_31
        ]), [disposable_0]);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import10.TemplateRef) && (18 === requestNodeIndex))) {
            return this._TemplateRef_18_5;
        }
        if (((token === import12.NgFor) && (18 === requestNodeIndex))) {
            return this._NgFor_18_6.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_18_0_0 = this.context.contacts;
        this._NgFor_18_6.check_ngForOf(currVal_18_0_0, throwOnChange, false);
        this._NgFor_18_6.ngDoCheck(this, this._anchor_18, throwOnChange);
        this._vc_18.detectChangesInNestedViews(throwOnChange);
    }
    destroyInternal() {
        this._vc_18.destroyNestedViews();
    }
    createEmbeddedViewInternal(nodeIndex) {
        if ((nodeIndex == 18)) {
            return new View_ContactList1(this.viewUtils, this, 18, this._anchor_18, this._vc_18);
        }
        return null;
    }
    handleEvent_28(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            const pd_sub_0 = (this.context.addContact(this._el_24, this._el_26) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    }
}
class View_ContactList1 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        super(View_ContactList1, renderType_ContactList, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_9 = import13.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'tr', new import3.InlineArray2(2, 'style', 'margin-bottom: 10px;'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, ' ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_0, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_5, 'button', new import3.InlineArray2(2, 'class', 'btn btn-primary btn-xs'), null);
        this._text_7 = this.renderer.createText(this._el_6, 'Delete', null);
        this._text_8 = this.renderer.createText(this._el_0, '\n            ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_6, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_6));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._el_6,
            this._text_7,
            this._text_8
        ]), [disposable_0]);
        return null;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_9 = import3.inlineInterpolate(1, '', this.context.$implicit.descr, '');
        if (import3.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setText(this._text_3, currVal_9);
            this._expr_9 = currVal_9;
        }
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
    handleEvent_6(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            const pd_sub_0 = (this.parentView.context.removeContact(this.context.$implicit) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    }
}
