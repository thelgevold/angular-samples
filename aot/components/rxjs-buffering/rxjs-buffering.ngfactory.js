var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../components/rxjs-buffering/rxjs-buffering';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '@angular/common/src/directives/ng_for';
import * as import11 from '@angular/common/src/directives/ng_if';
import * as import12 from '@angular/core/src/linker/template_ref';
import * as import13 from '@angular/core/src/change_detection/differs/iterable_differs';
var renderType_RxJsBuffering_Host = null;
var _View_RxJsBuffering_Host0 = (function (_super) {
    __extends(_View_RxJsBuffering_Host0, _super);
    function _View_RxJsBuffering_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_RxJsBuffering_Host0, renderType_RxJsBuffering_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_RxJsBuffering_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('ng-component', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_RxJsBuffering0(this.viewUtils, this.injector(0), this._appEl_0);
        this._RxJsBuffering_0_4 = new import3.RxJsBuffering();
        this._appEl_0.initComponent(this._RxJsBuffering_0_4, [], compView_0);
        compView_0.create(this._RxJsBuffering_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_RxJsBuffering_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.RxJsBuffering) && (0 === requestNodeIndex))) {
            return this._RxJsBuffering_0_4;
        }
        return notFoundResult;
    };
    _View_RxJsBuffering_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._RxJsBuffering_0_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_RxJsBuffering_Host0;
}(import1.AppView));
function viewFactory_RxJsBuffering_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_RxJsBuffering_Host === null)) {
        (renderType_RxJsBuffering_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_RxJsBuffering_Host0(viewUtils, parentInjector, declarationEl);
}
export var RxJsBufferingNgFactory = new import9.ComponentFactory('ng-component', viewFactory_RxJsBuffering_Host0, import3.RxJsBuffering);
var styles_RxJsBuffering = [];
var renderType_RxJsBuffering = null;
var _View_RxJsBuffering0 = (function (_super) {
    __extends(_View_RxJsBuffering0, _super);
    function _View_RxJsBuffering0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_RxJsBuffering0, renderType_RxJsBuffering, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_RxJsBuffering0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n    ', null);
        this._el_1 = this.renderer.createElement(parentRenderNode, 'h3', null);
        this._text_2 = this.renderer.createText(this._el_1, 'Click three numbers to add', null);
        this._text_3 = this.renderer.createText(parentRenderNode, '\n    ', null);
        this._anchor_4 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._appEl_4 = new import2.AppElement(4, null, this, this._anchor_4);
        this._TemplateRef_4_5 = new import12.TemplateRef_(this._appEl_4, viewFactory_RxJsBuffering1);
        this._NgFor_4_6 = new import10.NgFor(this._appEl_4.vcRef, this._TemplateRef_4_5, this.parentInjector.get(import13.IterableDiffers), this.ref);
        this._text_5 = this.renderer.createText(parentRenderNode, '\n    ', null);
        this._anchor_6 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._appEl_6 = new import2.AppElement(6, null, this, this._anchor_6);
        this._TemplateRef_6_5 = new import12.TemplateRef_(this._appEl_6, viewFactory_RxJsBuffering2);
        this._NgIf_6_6 = new import11.NgIf(this._appEl_6.vcRef, this._TemplateRef_6_5);
        this._text_7 = this.renderer.createText(parentRenderNode, '\n  ', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this.init([], [
            this._text_0,
            this._el_1,
            this._text_2,
            this._text_3,
            this._anchor_4,
            this._text_5,
            this._anchor_6,
            this._text_7
        ], [], []);
        return null;
    };
    _View_RxJsBuffering0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import12.TemplateRef) && (4 === requestNodeIndex))) {
            return this._TemplateRef_4_5;
        }
        if (((token === import10.NgFor) && (4 === requestNodeIndex))) {
            return this._NgFor_4_6;
        }
        if (((token === import12.TemplateRef) && (6 === requestNodeIndex))) {
            return this._TemplateRef_6_5;
        }
        if (((token === import11.NgIf) && (6 === requestNodeIndex))) {
            return this._NgIf_6_6;
        }
        return notFoundResult;
    };
    _View_RxJsBuffering0.prototype.detectChangesInternal = function (throwOnChange) {
        var changes = null;
        changes = null;
        var currVal_0 = this.context.numbers;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._NgFor_4_6.ngForOf = currVal_0;
            if ((changes === null)) {
                (changes = {});
            }
            changes['ngForOf'] = new import7.SimpleChange(this._expr_0, currVal_0);
            this._expr_0 = currVal_0;
        }
        if ((changes !== null)) {
            this._NgFor_4_6.ngOnChanges(changes);
        }
        if (!throwOnChange) {
            this._NgFor_4_6.ngDoCheck();
        }
        var currVal_1 = this.context.showSum;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this._NgIf_6_6.ngIf = currVal_1;
            this._expr_1 = currVal_1;
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_RxJsBuffering0;
}(import1.AppView));
export function viewFactory_RxJsBuffering0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_RxJsBuffering === null)) {
        (renderType_RxJsBuffering = viewUtils.createRenderComponentType('/Users/tor/Development/angular-2-samples/components/rxjs-buffering/rxjs-buffering.ts class RxJsBuffering - inline template', 0, import8.ViewEncapsulation.None, styles_RxJsBuffering, {}));
    }
    return new _View_RxJsBuffering0(viewUtils, parentInjector, declarationEl);
}
var _View_RxJsBuffering1 = (function (_super) {
    __extends(_View_RxJsBuffering1, _super);
    function _View_RxJsBuffering1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_RxJsBuffering1, renderType_RxJsBuffering, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_RxJsBuffering1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'box');
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        var disposable_0 = this.renderer.listen(this._el_0, 'click', this.eventHandler(this._handle_click_0_0.bind(this)));
        this._expr_1 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [disposable_0], []);
        return null;
    };
    _View_RxJsBuffering1.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_1 = import4.interpolate(1, '', this.context.$implicit, '');
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setText(this._text_1, currVal_1);
            this._expr_1 = currVal_1;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_RxJsBuffering1.prototype._handle_click_0_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.parent.context.add(this.context.$implicit) !== false);
        return (true && pd_0);
    };
    return _View_RxJsBuffering1;
}(import1.AppView));
function viewFactory_RxJsBuffering1(viewUtils, parentInjector, declarationEl) {
    return new _View_RxJsBuffering1(viewUtils, parentInjector, declarationEl);
}
var _View_RxJsBuffering2 = (function (_super) {
    __extends(_View_RxJsBuffering2, _super);
    function _View_RxJsBuffering2(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_RxJsBuffering2, renderType_RxJsBuffering, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_RxJsBuffering2.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'sum');
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this._expr_0 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    _View_RxJsBuffering2.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_0 = import4.interpolate(1, 'SUM: ', this.parent.context.calculation.sum, '');
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setText(this._text_1, currVal_0);
            this._expr_0 = currVal_0;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_RxJsBuffering2;
}(import1.AppView));
function viewFactory_RxJsBuffering2(viewUtils, parentInjector, declarationEl) {
    return new _View_RxJsBuffering2(viewUtils, parentInjector, declarationEl);
}
