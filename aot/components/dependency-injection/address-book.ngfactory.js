import * as import0 from '../../../components/dependency-injection/address-book';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '../../../components/dependency-injection/address-book-service';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '@angular/http/src/http';
import * as import10 from '../../../components/dependency-injection/address-book-title-service';
import * as import11 from '@angular/core/src/linker/view_container';
import * as import12 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import13 from '@angular/core/src/change_detection/change_detection_util';
import * as import14 from '@angular/core/src/linker/template_ref';
import * as import15 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import16 from '@angular/common/src/directives/ng_for';
export class Wrapper_AddressBook {
    constructor(p0, p1) {
        this._changed = false;
        this.context = new import0.AddressBook(p0, p1);
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
var renderType_AddressBook_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
class View_AddressBook_Host0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_AddressBook_Host0, renderType_AddressBook_Host, import6.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'address-book', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_AddressBook0(this.viewUtils, this, 0, this._el_0);
        this._AddressBookService_0_3 = new import5.AddressBookService(this.injectorGet(import9.Http, this.parentIndex));
        this._AddressBook_0_4 = new Wrapper_AddressBook(this._AddressBookService_0_3, this.injectorGet(import10.AddressBookTitleService, this.parentIndex));
        this.compView_0.create(this._AddressBook_0_4.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import8.ComponentRef_(0, this, this._el_0, this._AddressBook_0_4.context);
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import5.AddressBookService) && (0 === requestNodeIndex))) {
            return this._AddressBookService_0_3;
        }
        if (((token === import0.AddressBook) && (0 === requestNodeIndex))) {
            return this._AddressBook_0_4.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._AddressBook_0_4.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    }
    destroyInternal() {
        this.compView_0.destroy();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
export const AddressBookNgFactory = new import8.ComponentFactory('address-book', View_AddressBook_Host0, import0.AddressBook);
const styles_AddressBook = [];
var renderType_AddressBook = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_AddressBook, {});
export class View_AddressBook0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_AddressBook0, renderType_AddressBook, import6.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_21 = import13.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'h1', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, 'Dependency Injection', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_0, 'h2', import3.EMPTY_INLINE_ARRAY, null);
        this._text_6 = this.renderer.createText(this._el_5, '', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_0, 'table', new import3.InlineArray2(2, 'class', 'table'), null);
        this._text_9 = this.renderer.createText(this._el_8, '\n        ', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_8, 'tbody', import3.EMPTY_INLINE_ARRAY, null);
        this._anchor_11 = this.renderer.createTemplateAnchor(this._el_10, null);
        this._vc_11 = new import11.ViewContainer(11, 10, this, this._anchor_11);
        this._TemplateRef_11_5 = new import14.TemplateRef_(this, 11, this._anchor_11);
        this._NgFor_11_6 = new import12.Wrapper_NgFor(this._vc_11.vcRef, this._TemplateRef_11_5, this.parentView.injectorGet(import15.IterableDiffers, this.parentIndex), this.ref);
        this._text_12 = this.renderer.createText(this._el_10, '\n    ', null);
        this._text_13 = this.renderer.createText(this._el_0, '\n', null);
        this._text_14 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_15 = import3.createRenderElement(this.renderer, parentRenderNode, 'h4', import3.EMPTY_INLINE_ARRAY, null);
        this._el_16 = import3.createRenderElement(this.renderer, this._el_15, 'a', new import3.InlineArray2(2, 'href', 'http://www.syntaxsuccess.com/viewarticle/dependency-injection-in-angular-2.0'), null);
        this._text_17 = this.renderer.createText(this._el_16, 'Read more here', null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._el_10,
            this._anchor_11,
            this._text_12,
            this._text_13,
            this._text_14,
            this._el_15,
            this._el_16,
            this._text_17
        ]), null);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import14.TemplateRef) && (11 === requestNodeIndex))) {
            return this._TemplateRef_11_5;
        }
        if (((token === import16.NgFor) && (11 === requestNodeIndex))) {
            return this._NgFor_11_6.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_11_0_0 = this.context.result.people;
        this._NgFor_11_6.check_ngForOf(currVal_11_0_0, throwOnChange, false);
        this._NgFor_11_6.ngDoCheck(this, this._anchor_11, throwOnChange);
        this._vc_11.detectChangesInNestedViews(throwOnChange);
        const currVal_21 = import3.inlineInterpolate(1, '', this.context.title, '');
        if (import3.checkBinding(throwOnChange, this._expr_21, currVal_21)) {
            this.renderer.setText(this._text_6, currVal_21);
            this._expr_21 = currVal_21;
        }
    }
    destroyInternal() {
        this._vc_11.destroyNestedViews();
    }
    createEmbeddedViewInternal(nodeIndex) {
        if ((nodeIndex == 11)) {
            return new View_AddressBook1(this.viewUtils, this, 11, this._anchor_11, this._vc_11);
        }
        return null;
    }
}
class View_AddressBook1 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        super(View_AddressBook1, renderType_AddressBook, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_8 = import13.UNINITIALIZED;
        this._expr_9 = import13.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'tr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_0, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._text_6 = this.renderer.createText(this._el_5, '', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n        ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7
        ]), null);
        return null;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_8 = import3.inlineInterpolate(1, '', this.context.$implicit.name, '');
        if (import3.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setText(this._text_3, currVal_8);
            this._expr_8 = currVal_8;
        }
        const currVal_9 = import3.inlineInterpolate(1, '', this.context.$implicit.address, '');
        if (import3.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setText(this._text_6, currVal_9);
            this._expr_9 = currVal_9;
        }
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
