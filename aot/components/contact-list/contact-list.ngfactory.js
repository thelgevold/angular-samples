import * as import0 from '../../../components/contact-list/contact-list';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import11 from '@angular/core/src/linker/template_ref';
import * as import12 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import13 from '@angular/common/src/directives/ng_for';
export class Wrapper_ContactList {
    constructor() {
        this.changed = false;
        this.context = new import0.ContactList();
    }
    detectChangesInInputProps(view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    }
    detectChangesInHostProps(view, el, throwOnChange) {
    }
}
var renderType_ContactList_Host = null;
class _View_ContactList_Host0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_ContactList_Host0, renderType_ContactList_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer, 'contact-list', import4.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_ContactList0(this.viewUtils, this.injector(0), this._appEl_0);
        this._ContactList_0_4 = new Wrapper_ContactList();
        this._appEl_0.initComponent(this._ContactList_0_4.context, [], compView_0);
        compView_0.create(this._ContactList_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.ContactList) && (0 === requestNodeIndex))) {
            return this._ContactList_0_4.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._ContactList_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._ContactList_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
}
function viewFactory_ContactList_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ContactList_Host === null)) {
        (renderType_ContactList_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_ContactList_Host0(viewUtils, parentInjector, declarationEl);
}
export const ContactListNgFactory = new import9.ComponentFactory('contact-list', viewFactory_ContactList_Host0, import0.ContactList);
const styles_ContactList = [];
var renderType_ContactList = null;
class _View_ContactList0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_ContactList0, renderType_ContactList, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = import4.createRenderElement(this.renderer, parentRenderNode, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import4.createRenderElement(this.renderer, this._el_0, 'h1', import4.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, 'Contact List', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_5 = import4.createRenderElement(this.renderer, this._el_0, 'table', new import4.InlineArray2(2, 'class', 'table'), null);
        this._text_6 = this.renderer.createText(this._el_5, '\n        ', null);
        this._el_7 = import4.createRenderElement(this.renderer, this._el_5, 'thead', import4.EMPTY_INLINE_ARRAY, null);
        this._text_8 = this.renderer.createText(this._el_7, '\n            ', null);
        this._el_9 = import4.createRenderElement(this.renderer, this._el_7, 'tr', import4.EMPTY_INLINE_ARRAY, null);
        this._text_10 = this.renderer.createText(this._el_9, '\n                ', null);
        this._el_11 = import4.createRenderElement(this.renderer, this._el_9, 'td', import4.EMPTY_INLINE_ARRAY, null);
        this._text_12 = this.renderer.createText(this._el_11, 'Name and phone number', null);
        this._text_13 = this.renderer.createText(this._el_9, '\n            ', null);
        this._text_14 = this.renderer.createText(this._el_7, '\n        ', null);
        this._text_15 = this.renderer.createText(this._el_5, '\n        ', null);
        this._el_16 = import4.createRenderElement(this.renderer, this._el_5, 'tbody', import4.EMPTY_INLINE_ARRAY, null);
        this._text_17 = this.renderer.createText(this._el_16, '\n            ', null);
        this._anchor_18 = this.renderer.createTemplateAnchor(this._el_16, null);
        this._appEl_18 = new import3.AppElement(18, 16, this, this._anchor_18);
        this._TemplateRef_18_5 = new import11.TemplateRef_(this._appEl_18, viewFactory_ContactList1);
        this._NgFor_18_6 = new import10.Wrapper_NgFor(this._appEl_18.vcRef, this._TemplateRef_18_5, this.parentInjector.get(import12.IterableDiffers), this.ref);
        this._text_19 = this.renderer.createText(this._el_16, '\n        ', null);
        this._text_20 = this.renderer.createText(this._el_5, '\n    ', null);
        this._text_21 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_22 = import4.createRenderElement(this.renderer, this._el_0, 'div', new import4.InlineArray2(2, 'class', 'addContactControls'), null);
        this._text_23 = this.renderer.createText(this._el_22, '\n        ', null);
        this._el_24 = import4.createRenderElement(this.renderer, this._el_22, 'input', new import4.InlineArray2(2, 'placeholder', 'name'), null);
        this._text_25 = this.renderer.createText(this._el_22, '\n        ', null);
        this._el_26 = import4.createRenderElement(this.renderer, this._el_22, 'input', new import4.InlineArray2(2, 'placeholder', 'phone'), null);
        this._text_27 = this.renderer.createText(this._el_22, '\n        ', null);
        this._el_28 = import4.createRenderElement(this.renderer, this._el_22, 'button', new import4.InlineArray2(2, 'class', 'btn btn-primary btn-xs'), null);
        this._text_29 = this.renderer.createText(this._el_28, 'Add Contact', null);
        this._text_30 = this.renderer.createText(this._el_22, '\n    ', null);
        this._text_31 = this.renderer.createText(this._el_0, '\n', null);
        var disposable_0 = this.renderer.listen(this._el_28, 'click', this.eventHandler(this._handle_click_28_0.bind(this)));
        this.init([], [
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
        ], [disposable_0], []);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import11.TemplateRef) && (18 === requestNodeIndex))) {
            return this._TemplateRef_18_5;
        }
        if (((token === import13.NgFor) && (18 === requestNodeIndex))) {
            return this._NgFor_18_6.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_18_0_0 = this.context.contacts;
        this._NgFor_18_6.check_ngForOf(currVal_18_0_0, throwOnChange, false);
        this._NgFor_18_6.detectChangesInInputProps(this, this._anchor_18, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
    _handle_click_28_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_28_0 = (this.context.addContact(this._el_24, this._el_26) !== false);
        return (true && pd_28_0);
    }
}
export function viewFactory_ContactList0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ContactList === null)) {
        (renderType_ContactList = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, styles_ContactList, {}));
    }
    return new _View_ContactList0(viewUtils, parentInjector, declarationEl);
}
class _View_ContactList1 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_ContactList1, renderType_ContactList, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_9 = import7.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'tr', new import4.InlineArray2(2, 'style', 'margin-bottom: 10px;'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_2 = import4.createRenderElement(this.renderer, this._el_0, 'td', import4.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, ' ', null);
        this._el_5 = import4.createRenderElement(this.renderer, this._el_0, 'td', import4.EMPTY_INLINE_ARRAY, null);
        this._el_6 = import4.createRenderElement(this.renderer, this._el_5, 'button', new import4.InlineArray2(2, 'class', 'btn btn-primary btn-xs'), null);
        this._text_7 = this.renderer.createText(this._el_6, 'Delete', null);
        this._text_8 = this.renderer.createText(this._el_0, '\n            ', null);
        var disposable_0 = this.renderer.listen(this._el_6, 'click', this.eventHandler(this._handle_click_6_0.bind(this)));
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._el_6,
            this._text_7,
            this._text_8
        ], [disposable_0], []);
        return null;
    }
    detectChangesInternal(throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        const currVal_9 = import4.interpolate(1, '', this.context.$implicit.descr, '');
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setText(this._text_3, currVal_9);
            this._expr_9 = currVal_9;
        }
        this.detectViewChildrenChanges(throwOnChange);
    }
    _handle_click_6_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_6_0 = (this.parent.context.removeContact(this.context.$implicit) !== false);
        return (true && pd_6_0);
    }
}
function viewFactory_ContactList1(viewUtils, parentInjector, declarationEl) {
    return new _View_ContactList1(viewUtils, parentInjector, declarationEl);
}
