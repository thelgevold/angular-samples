import * as import0 from '../../../components/spreadsheet/spreadsheet';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '@angular/core/src/linker/view_container';
import * as import10 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import11 from '@angular/core/src/linker/template_ref';
import * as import12 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import13 from '@angular/common/src/directives/ng_for';
export class Wrapper_Spreadsheet {
    constructor() {
        this._changed = false;
        this.context = new import0.Spreadsheet();
        this._expr_0 = import1.UNINITIALIZED;
        this._expr_1 = import1.UNINITIALIZED;
    }
    ngOnDetach(view, componentView, el) {
    }
    ngOnDestroy() {
    }
    check_rows(currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.rows = currValue;
            this._expr_0 = currValue;
        }
    }
    check_columns(currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context.columns = currValue;
            this._expr_1 = currValue;
        }
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
var renderType_Spreadsheet_Host = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, [], {});
class View_Spreadsheet_Host0 extends import2.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_Spreadsheet_Host0, renderType_Spreadsheet_Host, import6.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'spreadsheet', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_Spreadsheet0(this.viewUtils, this, 0, this._el_0);
        this._Spreadsheet_0_3 = new Wrapper_Spreadsheet();
        this.compView_0.create(this._Spreadsheet_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import8.ComponentRef_(0, this, this._el_0, this._Spreadsheet_0_3.context);
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.Spreadsheet) && (0 === requestNodeIndex))) {
            return this._Spreadsheet_0_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._Spreadsheet_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
        if (!throwOnChange) {
            this._Spreadsheet_0_3.context.ngAfterViewChecked();
        }
    }
    destroyInternal() {
        this.compView_0.destroy();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
export const SpreadsheetNgFactory = new import8.ComponentFactory('spreadsheet', View_Spreadsheet_Host0, import0.Spreadsheet);
const styles_Spreadsheet = [];
var renderType_Spreadsheet = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, styles_Spreadsheet, {});
export class View_Spreadsheet0 extends import2.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_Spreadsheet0, renderType_Spreadsheet, import6.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'h1', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, 'Virtualized Spreadsheet', null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_3 = import3.createRenderElement(this.renderer, parentRenderNode, 'table', new import3.InlineArray2(2, 'id', 'spreadsheet'), null);
        this._text_4 = this.renderer.createText(this._el_3, '\n    ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_3, 'tbody', import3.EMPTY_INLINE_ARRAY, null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_5, 'tr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_7 = this.renderer.createText(this._el_6, '\n        ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_6, 'td', new import3.InlineArray2(2, 'class', 'row-number-column'), null);
        this._text_9 = this.renderer.createText(this._el_6, '\n        ', null);
        this._anchor_10 = this.renderer.createTemplateAnchor(this._el_6, null);
        this._vc_10 = new import9.ViewContainer(10, 6, this, this._anchor_10);
        this._TemplateRef_10_5 = new import11.TemplateRef_(this, 10, this._anchor_10);
        this._NgFor_10_6 = new import10.Wrapper_NgFor(this._vc_10.vcRef, this._TemplateRef_10_5, this.parentView.injectorGet(import12.IterableDiffers, this.parentIndex), this.ref);
        this._text_11 = this.renderer.createText(this._el_6, '\n    ', null);
        this._text_12 = this.renderer.createText(this._el_5, '\n    ', null);
        this._anchor_13 = this.renderer.createTemplateAnchor(this._el_5, null);
        this._vc_13 = new import9.ViewContainer(13, 5, this, this._anchor_13);
        this._TemplateRef_13_5 = new import11.TemplateRef_(this, 13, this._anchor_13);
        this._NgFor_13_6 = new import10.Wrapper_NgFor(this._vc_13.vcRef, this._TemplateRef_13_5, this.parentView.injectorGet(import12.IterableDiffers, this.parentIndex), this.ref);
        this._text_14 = this.renderer.createText(this._el_5, '\n', null);
        this._text_15 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_16 = import3.createRenderElement(this.renderer, parentRenderNode, 'h4', import3.EMPTY_INLINE_ARRAY, null);
        this._el_17 = import3.createRenderElement(this.renderer, this._el_16, 'a', new import3.InlineArray2(2, 'href', 'http://www.syntaxsuccess.com/viewarticle/virtualized-spreadsheet-component-in-angular-2.0'), null);
        this._text_18 = this.renderer.createText(this._el_17, 'Read more here', null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._el_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._anchor_10,
            this._text_11,
            this._text_12,
            this._anchor_13,
            this._text_14,
            this._text_15,
            this._el_16,
            this._el_17,
            this._text_18
        ]), null);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import11.TemplateRef) && (10 === requestNodeIndex))) {
            return this._TemplateRef_10_5;
        }
        if (((token === import13.NgFor) && (10 === requestNodeIndex))) {
            return this._NgFor_10_6.context;
        }
        if (((token === import11.TemplateRef) && (13 === requestNodeIndex))) {
            return this._TemplateRef_13_5;
        }
        if (((token === import13.NgFor) && (13 === requestNodeIndex))) {
            return this._NgFor_13_6.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_10_0_0 = this.context.header;
        this._NgFor_10_6.check_ngForOf(currVal_10_0_0, throwOnChange, false);
        this._NgFor_10_6.ngDoCheck(this, this._anchor_10, throwOnChange);
        const currVal_13_0_0 = this.context.visibleRows;
        this._NgFor_13_6.check_ngForOf(currVal_13_0_0, throwOnChange, false);
        this._NgFor_13_6.ngDoCheck(this, this._anchor_13, throwOnChange);
        this._vc_10.detectChangesInNestedViews(throwOnChange);
        this._vc_13.detectChangesInNestedViews(throwOnChange);
    }
    destroyInternal() {
        this._vc_10.destroyNestedViews();
        this._vc_13.destroyNestedViews();
    }
    createEmbeddedViewInternal(nodeIndex) {
        if ((nodeIndex == 10)) {
            return new View_Spreadsheet1(this.viewUtils, this, 10, this._anchor_10, this._vc_10);
        }
        if ((nodeIndex == 13)) {
            return new View_Spreadsheet2(this.viewUtils, this, 13, this._anchor_13, this._vc_13);
        }
        return null;
    }
}
class View_Spreadsheet1 extends import2.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        super(View_Spreadsheet1, renderType_Spreadsheet, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_2 = import1.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'td', new import3.InlineArray2(2, 'class', 'columnHeader'), null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_2 = import3.inlineInterpolate(1, '', this.context.$implicit, '');
        if (import3.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
class View_Spreadsheet2 extends import2.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        super(View_Spreadsheet2, renderType_Spreadsheet, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_10 = import1.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'tr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'td', new import3.InlineArray2(2, 'class', 'row-number-column'), null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n        ', null);
        this._anchor_5 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_5 = new import9.ViewContainer(5, 0, this, this._anchor_5);
        this._TemplateRef_5_5 = new import11.TemplateRef_(this, 5, this._anchor_5);
        this._NgFor_5_6 = new import10.Wrapper_NgFor(this._vc_5.vcRef, this._TemplateRef_5_5, this.parentView.parentView.injectorGet(import12.IterableDiffers, this.parentView.parentIndex), this.parentView.ref);
        this._text_6 = this.renderer.createText(this._el_0, '\n    ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._anchor_5,
            this._text_6
        ]), null);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import11.TemplateRef) && (5 === requestNodeIndex))) {
            return this._TemplateRef_5_5;
        }
        if (((token === import13.NgFor) && (5 === requestNodeIndex))) {
            return this._NgFor_5_6.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_5_0_0 = this.context.$implicit.columns;
        this._NgFor_5_6.check_ngForOf(currVal_5_0_0, throwOnChange, false);
        this._NgFor_5_6.ngDoCheck(this, this._anchor_5, throwOnChange);
        this._vc_5.detectChangesInNestedViews(throwOnChange);
        const currVal_10 = import3.inlineInterpolate(1, '', this.context.$implicit.rowIndex, '');
        if (import3.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this.renderer.setText(this._text_3, currVal_10);
            this._expr_10 = currVal_10;
        }
    }
    destroyInternal() {
        this._vc_5.destroyNestedViews();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
    createEmbeddedViewInternal(nodeIndex) {
        if ((nodeIndex == 5)) {
            return new View_Spreadsheet3(this.viewUtils, this, 5, this._anchor_5, this._vc_5);
        }
        return null;
    }
}
class View_Spreadsheet3 extends import2.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        super(View_Spreadsheet3, renderType_Spreadsheet, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_4 = import1.UNINITIALIZED;
        this._expr_5 = import1.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'input', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_0, '\n        ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_2, new import3.InlineArray8(6, 'input', null, 'click', null, 'keyup', null), this.eventHandler(this.handleEvent_2));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ]), [disposable_0]);
        return null;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_4 = import3.inlineInterpolate(2, '', this.context.$implicit.rowIndex, '-', this.context.$implicit.columnIndex, '');
        if (import3.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementProperty(this._el_2, 'id', currVal_4);
            this._expr_4 = currVal_4;
        }
        const currVal_5 = this.context.$implicit.cellValue;
        if (import3.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementProperty(this._el_2, 'value', currVal_5);
            this._expr_5 = currVal_5;
        }
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
    handleEvent_2(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'input')) {
            const pd_sub_0 = ((this.context.$implicit.cellValue = $event.target.value) !== false);
            result = (pd_sub_0 && result);
        }
        if ((eventName == 'click')) {
            const pd_sub_1 = (this.parentView.parentView.context.model.selectColumn(this.context.$implicit) !== false);
            result = (pd_sub_1 && result);
        }
        if ((eventName == 'keyup')) {
            const pd_sub_2 = (this.parentView.parentView.context.navigate($event) !== false);
            result = (pd_sub_2 && result);
        }
        return result;
    }
}
