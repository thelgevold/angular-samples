var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../../components/insertion-sort/insertion-sort';
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
import * as import14 from '../../node_modules/@angular/common/src/directives/ng_class.ngfactory';
import * as import15 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import16 from '@angular/core/src/linker/element_ref';
import * as import17 from '@angular/common/src/directives/ng_class';
export var Wrapper_InsertionSort = (function () {
    function Wrapper_InsertionSort() {
        this._changed = false;
        this.context = new import0.InsertionSort();
        this._expr_0 = import1.UNINITIALIZED;
    }
    Wrapper_InsertionSort.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_InsertionSort.prototype.ngOnDestroy = function () {
    };
    Wrapper_InsertionSort.prototype.check_list = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.list = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_InsertionSort.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_InsertionSort.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_InsertionSort.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_InsertionSort.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_InsertionSort;
}());
var renderType_InsertionSort_Host = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, [], {});
var View_InsertionSort_Host0 = (function (_super) {
    __extends(View_InsertionSort_Host0, _super);
    function View_InsertionSort_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_InsertionSort_Host0, renderType_InsertionSort_Host, import6.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways);
    }
    View_InsertionSort_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'insertion-sort', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_InsertionSort0(this.viewUtils, this, 0, this._el_0);
        this._InsertionSort_0_3 = new Wrapper_InsertionSort();
        this.compView_0.create(this._InsertionSort_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import8.ComponentRef_(0, this, this._el_0, this._InsertionSort_0_3.context);
    };
    View_InsertionSort_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.InsertionSort) && (0 === requestNodeIndex))) {
            return this._InsertionSort_0_3.context;
        }
        return notFoundResult;
    };
    View_InsertionSort_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._InsertionSort_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    };
    View_InsertionSort_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_InsertionSort_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_InsertionSort_Host0;
}(import2.AppView));
export var InsertionSortNgFactory = new import8.ComponentFactory('insertion-sort', View_InsertionSort_Host0, import0.InsertionSort);
var styles_InsertionSort = [];
var renderType_InsertionSort = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, styles_InsertionSort, {});
export var View_InsertionSort0 = (function (_super) {
    __extends(View_InsertionSort0, _super);
    function View_InsertionSort0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_InsertionSort0, renderType_InsertionSort, import6.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways);
    }
    View_InsertionSort0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'table', new import3.InlineArray2(2, 'class', 'sort'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'tbody', import3.EMPTY_INLINE_ARRAY, null);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_2, 'tr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_4 = this.renderer.createText(this._el_3, '\n        ', null);
        this._anchor_5 = this.renderer.createTemplateAnchor(this._el_3, null);
        this._vc_5 = new import9.ViewContainer(5, 3, this, this._anchor_5);
        this._TemplateRef_5_5 = new import11.TemplateRef_(this, 5, this._anchor_5);
        this._NgFor_5_6 = new import10.Wrapper_NgFor(this._vc_5.vcRef, this._TemplateRef_5_5, this.parentView.injectorGet(import12.IterableDiffers, this.parentIndex), this.ref);
        this._text_6 = this.renderer.createText(this._el_3, '\n    ', null);
        this._text_7 = this.renderer.createText(this._el_2, '\n', null);
        this._text_8 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_9 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'style', 'margin-top: 10px;'), null);
        this._text_10 = this.renderer.createText(this._el_9, '\n    ', null);
        this._el_11 = import3.createRenderElement(this.renderer, this._el_9, 'button', import3.EMPTY_INLINE_ARRAY, null);
        this._text_12 = this.renderer.createText(this._el_11, 'Sort list', null);
        this._text_13 = this.renderer.createText(this._el_9, '\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_11, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_11));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._el_3,
            this._text_4,
            this._anchor_5,
            this._text_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._text_13
        ]), [disposable_0]);
        return null;
    };
    View_InsertionSort0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import11.TemplateRef) && (5 === requestNodeIndex))) {
            return this._TemplateRef_5_5;
        }
        if (((token === import13.NgFor) && (5 === requestNodeIndex))) {
            return this._NgFor_5_6.context;
        }
        return notFoundResult;
    };
    View_InsertionSort0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_5_0_0 = this.context.list.items;
        this._NgFor_5_6.check_ngForOf(currVal_5_0_0, throwOnChange, false);
        this._NgFor_5_6.ngDoCheck(this, this._anchor_5, throwOnChange);
        this._vc_5.detectChangesInNestedViews(throwOnChange);
    };
    View_InsertionSort0.prototype.destroyInternal = function () {
        this._vc_5.destroyNestedViews();
    };
    View_InsertionSort0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 5)) {
            return new View_InsertionSort1(this.viewUtils, this, 5, this._anchor_5, this._vc_5);
        }
        return null;
    };
    View_InsertionSort0.prototype.handleEvent_11 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.sortList() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_InsertionSort0;
}(import2.AppView));
var View_InsertionSort1 = (function (_super) {
    __extends(View_InsertionSort1, _super);
    function View_InsertionSort1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_InsertionSort1, renderType_InsertionSort, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_6 = import1.UNINITIALIZED;
    }
    View_InsertionSort1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._NgClass_0_3 = new import14.Wrapper_NgClass(this.parentView.parentView.injectorGet(import12.IterableDiffers, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import15.KeyValueDiffers, this.parentView.parentIndex), new import16.ElementRef(this._el_0), this.renderer);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'span', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n        ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4
        ]), null);
        return null;
    };
    View_InsertionSort1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import17.NgClass) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 4)))) {
            return this._NgClass_0_3.context;
        }
        return notFoundResult;
    };
    View_InsertionSort1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = this.context.$implicit.getClass();
        this._NgClass_0_3.check_ngClass(currVal_0_0_0, throwOnChange, false);
        this._NgClass_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        var currVal_6 = import3.inlineInterpolate(1, '', this.context.$implicit.val, '');
        if (import3.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setText(this._text_3, currVal_6);
            this._expr_6 = currVal_6;
        }
    };
    View_InsertionSort1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_InsertionSort1;
}(import2.AppView));
