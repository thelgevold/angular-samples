import * as import0 from '../../../components/grid/grid';
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
export class Wrapper_Grid {
    constructor() {
        this._changed = false;
        this.context = new import0.Grid();
        this._expr_0 = import1.UNINITIALIZED;
        this._expr_1 = import1.UNINITIALIZED;
        this._expr_2 = import1.UNINITIALIZED;
    }
    ngOnDetach(view, componentView, el) {
    }
    ngOnDestroy() {
    }
    check_columns(currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.columns = currValue;
            this._expr_0 = currValue;
        }
    }
    check_rows(currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context.rows = currValue;
            this._expr_1 = currValue;
        }
    }
    check_name(currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_2, currValue))) {
            this._changed = true;
            this.context.name = currValue;
            this._expr_2 = currValue;
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
    subscribe(view, _eventHandler) {
        this._eventHandler = _eventHandler;
    }
}
var renderType_Grid_Host = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, [], {});
class View_Grid_Host0 extends import2.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_Grid_Host0, renderType_Grid_Host, import6.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'grid', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_Grid0(this.viewUtils, this, 0, this._el_0);
        this._Grid_0_3 = new Wrapper_Grid();
        this.compView_0.create(this._Grid_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import8.ComponentRef_(0, this, this._el_0, this._Grid_0_3.context);
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.Grid) && (0 === requestNodeIndex))) {
            return this._Grid_0_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._Grid_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    }
    destroyInternal() {
        this.compView_0.destroy();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
export const GridNgFactory = new import8.ComponentFactory('grid', View_Grid_Host0, import0.Grid);
const styles_Grid = [];
var renderType_Grid = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, styles_Grid, {});
export class View_Grid0 extends import2.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_Grid0, renderType_Grid, import6.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'h1', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, 'Sortable Grid', null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_3 = import3.createRenderElement(this.renderer, parentRenderNode, 'table', new import3.InlineArray2(2, 'class', 'table table-striped'), null);
        this._text_4 = this.renderer.createText(this._el_3, '\n    ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_3, 'tbody', import3.EMPTY_INLINE_ARRAY, null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_5, 'tr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_7 = this.renderer.createText(this._el_6, '\n        ', null);
        this._anchor_8 = this.renderer.createTemplateAnchor(this._el_6, null);
        this._vc_8 = new import9.ViewContainer(8, 6, this, this._anchor_8);
        this._TemplateRef_8_5 = new import11.TemplateRef_(this, 8, this._anchor_8);
        this._NgFor_8_6 = new import10.Wrapper_NgFor(this._vc_8.vcRef, this._TemplateRef_8_5, this.parentView.injectorGet(import12.IterableDiffers, this.parentIndex), this.ref);
        this._text_9 = this.renderer.createText(this._el_6, '\n    ', null);
        this._text_10 = this.renderer.createText(this._el_5, '\n    ', null);
        this._anchor_11 = this.renderer.createTemplateAnchor(this._el_5, null);
        this._vc_11 = new import9.ViewContainer(11, 5, this, this._anchor_11);
        this._TemplateRef_11_5 = new import11.TemplateRef_(this, 11, this._anchor_11);
        this._NgFor_11_6 = new import10.Wrapper_NgFor(this._vc_11.vcRef, this._TemplateRef_11_5, this.parentView.injectorGet(import12.IterableDiffers, this.parentIndex), this.ref);
        this._text_12 = this.renderer.createText(this._el_5, '\n', null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._el_6,
            this._text_7,
            this._anchor_8,
            this._text_9,
            this._text_10,
            this._anchor_11,
            this._text_12
        ]), null);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import11.TemplateRef) && (8 === requestNodeIndex))) {
            return this._TemplateRef_8_5;
        }
        if (((token === import13.NgFor) && (8 === requestNodeIndex))) {
            return this._NgFor_8_6.context;
        }
        if (((token === import11.TemplateRef) && (11 === requestNodeIndex))) {
            return this._TemplateRef_11_5;
        }
        if (((token === import13.NgFor) && (11 === requestNodeIndex))) {
            return this._NgFor_11_6.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_8_0_0 = this.context.columns;
        this._NgFor_8_6.check_ngForOf(currVal_8_0_0, throwOnChange, false);
        this._NgFor_8_6.ngDoCheck(this, this._anchor_8, throwOnChange);
        const currVal_11_0_0 = this.context.rows;
        this._NgFor_11_6.check_ngForOf(currVal_11_0_0, throwOnChange, false);
        this._NgFor_11_6.ngDoCheck(this, this._anchor_11, throwOnChange);
        this._vc_8.detectChangesInNestedViews(throwOnChange);
        this._vc_11.detectChangesInNestedViews(throwOnChange);
    }
    destroyInternal() {
        this._vc_8.destroyNestedViews();
        this._vc_11.destroyNestedViews();
    }
    createEmbeddedViewInternal(nodeIndex) {
        if ((nodeIndex == 8)) {
            return new View_Grid1(this.viewUtils, this, 8, this._anchor_8, this._vc_8);
        }
        if ((nodeIndex == 11)) {
            return new View_Grid2(this.viewUtils, this, 11, this._anchor_11, this._vc_11);
        }
        return null;
    }
}
class View_Grid1 extends import2.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        super(View_Grid1, renderType_Grid, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_3 = import1.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._el_1 = import3.createRenderElement(this.renderer, this._el_0, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._text_2 = this.renderer.createText(this._el_1, '', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_1, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_1));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._el_1,
            this._text_2
        ]), [disposable_0]);
        return null;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_3 = import3.inlineInterpolate(1, '', this.context.$implicit.descr, '');
        if (import3.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setText(this._text_2, currVal_3);
            this._expr_3 = currVal_3;
        }
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
    handleEvent_1(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            const pd_sub_0 = (this.parentView.context.sort(this.context.$implicit.name) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    }
}
class View_Grid2 extends import2.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        super(View_Grid2, renderType_Grid, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'tr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n        ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_2 = new import9.ViewContainer(2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new import11.TemplateRef_(this, 2, this._anchor_2);
        this._NgFor_2_6 = new import10.Wrapper_NgFor(this._vc_2.vcRef, this._TemplateRef_2_5, this.parentView.parentView.injectorGet(import12.IterableDiffers, this.parentView.parentIndex), this.parentView.ref);
        this._text_3 = this.renderer.createText(this._el_0, '\n    ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3
        ]), null);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import11.TemplateRef) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === import13.NgFor) && (2 === requestNodeIndex))) {
            return this._NgFor_2_6.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_2_0_0 = this.parentView.context.columns;
        this._NgFor_2_6.check_ngForOf(currVal_2_0_0, throwOnChange, false);
        this._NgFor_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
    }
    destroyInternal() {
        this._vc_2.destroyNestedViews();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
    createEmbeddedViewInternal(nodeIndex) {
        if ((nodeIndex == 2)) {
            return new View_Grid3(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        return null;
    }
}
class View_Grid3 extends import2.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        super(View_Grid3, renderType_Grid, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_2 = import1.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_2 = import3.inlineInterpolate(1, '', this.parentView.context.$implicit[this.context.$implicit.name], '');
        if (import3.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
