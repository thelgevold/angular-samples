var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../components/insertion-sort/insertion-sort';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '@angular/common/src/directives/ng_for';
import * as import11 from '@angular/core/src/linker/template_ref';
import * as import12 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import13 from '@angular/common/src/directives/ng_class';
import * as import14 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import15 from '@angular/core/src/linker/element_ref';
var renderType_InsertionSort_Host = null;
var _View_InsertionSort_Host0 = (function (_super) {
    __extends(_View_InsertionSort_Host0, _super);
    function _View_InsertionSort_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_InsertionSort_Host0, renderType_InsertionSort_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_InsertionSort_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('insertion-sort', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_InsertionSort0(this.viewUtils, this.injector(0), this._appEl_0);
        this._InsertionSort_0_4 = new import3.InsertionSort();
        this._appEl_0.initComponent(this._InsertionSort_0_4, [], compView_0);
        compView_0.create(this._InsertionSort_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_InsertionSort_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.InsertionSort) && (0 === requestNodeIndex))) {
            return this._InsertionSort_0_4;
        }
        return notFoundResult;
    };
    return _View_InsertionSort_Host0;
}(import1.AppView));
function viewFactory_InsertionSort_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_InsertionSort_Host === null)) {
        (renderType_InsertionSort_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_InsertionSort_Host0(viewUtils, parentInjector, declarationEl);
}
export var InsertionSortNgFactory = new import9.ComponentFactory('insertion-sort', viewFactory_InsertionSort_Host0, import3.InsertionSort);
var styles_InsertionSort = [];
var renderType_InsertionSort = null;
var _View_InsertionSort0 = (function (_super) {
    __extends(_View_InsertionSort0, _super);
    function _View_InsertionSort0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_InsertionSort0, renderType_InsertionSort, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_InsertionSort0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'table', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'sort');
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'tbody', null);
        this._el_3 = this.renderer.createElement(this._el_2, 'tr', null);
        this._text_4 = this.renderer.createText(this._el_3, '\n        ', null);
        this._anchor_5 = this.renderer.createTemplateAnchor(this._el_3, null);
        this._appEl_5 = new import2.AppElement(5, 3, this, this._anchor_5);
        this._TemplateRef_5_5 = new import11.TemplateRef_(this._appEl_5, viewFactory_InsertionSort1);
        this._NgFor_5_6 = new import10.NgFor(this._appEl_5.vcRef, this._TemplateRef_5_5, this.parentInjector.get(import12.IterableDiffers), this.ref);
        this._text_6 = this.renderer.createText(this._el_3, '\n    ', null);
        this._text_7 = this.renderer.createText(this._el_2, '\n', null);
        this._text_8 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_9 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_9, 'style', 'margin-top: 10px;');
        this._text_10 = this.renderer.createText(this._el_9, '\n    ', null);
        this._el_11 = this.renderer.createElement(this._el_9, 'button', null);
        this._text_12 = this.renderer.createText(this._el_11, 'Sort list', null);
        this._text_13 = this.renderer.createText(this._el_9, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_11, 'click', this.eventHandler(this._handle_click_11_0.bind(this)));
        this.init([], [
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
        ], [disposable_0], []);
        return null;
    };
    _View_InsertionSort0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import11.TemplateRef) && (5 === requestNodeIndex))) {
            return this._TemplateRef_5_5;
        }
        if (((token === import10.NgFor) && (5 === requestNodeIndex))) {
            return this._NgFor_5_6;
        }
        return notFoundResult;
    };
    _View_InsertionSort0.prototype.detectChangesInternal = function (throwOnChange) {
        var changes = null;
        changes = null;
        var currVal_0 = this.context.list.items;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._NgFor_5_6.ngForOf = currVal_0;
            if ((changes === null)) {
                (changes = {});
            }
            changes['ngForOf'] = new import7.SimpleChange(this._expr_0, currVal_0);
            this._expr_0 = currVal_0;
        }
        if ((changes !== null)) {
            this._NgFor_5_6.ngOnChanges(changes);
        }
        if (!throwOnChange) {
            this._NgFor_5_6.ngDoCheck();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_InsertionSort0.prototype._handle_click_11_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.sortList() !== false);
        return (true && pd_0);
    };
    return _View_InsertionSort0;
}(import1.AppView));
export function viewFactory_InsertionSort0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_InsertionSort === null)) {
        (renderType_InsertionSort = viewUtils.createRenderComponentType('/Users/tor/Development/angular-2-samples/components/insertion-sort/insertion-sort.html', 0, import8.ViewEncapsulation.None, styles_InsertionSort, {}));
    }
    return new _View_InsertionSort0(viewUtils, parentInjector, declarationEl);
}
var _View_InsertionSort1 = (function (_super) {
    __extends(_View_InsertionSort1, _super);
    function _View_InsertionSort1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_InsertionSort1, renderType_InsertionSort, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_InsertionSort1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'td', null);
        this._NgClass_0_3 = new import13.NgClass(this.parent.parentInjector.get(import12.IterableDiffers), this.parent.parentInjector.get(import14.KeyValueDiffers), new import15.ElementRef(this._el_0), this.renderer);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'span', null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n        ', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4
        ], [], []);
        return null;
    };
    _View_InsertionSort1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import13.NgClass) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 4)))) {
            return this._NgClass_0_3;
        }
        return notFoundResult;
    };
    _View_InsertionSort1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0 = this.context.$implicit.getClass();
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._NgClass_0_3.ngClass = currVal_0;
            this._expr_0 = currVal_0;
        }
        if (!throwOnChange) {
            this._NgClass_0_3.ngDoCheck();
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_1 = import4.interpolate(1, '', this.context.$implicit.val, '');
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setText(this._text_3, currVal_1);
            this._expr_1 = currVal_1;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_InsertionSort1;
}(import1.AppView));
function viewFactory_InsertionSort1(viewUtils, parentInjector, declarationEl) {
    return new _View_InsertionSort1(viewUtils, parentInjector, declarationEl);
}
