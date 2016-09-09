var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../../components/algorithms/graph/edge';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '@angular/common/src/directives/ng_style';
import * as import11 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import12 from '@angular/core/src/linker/element_ref';
var renderType_Edge_Host = null;
var _View_Edge_Host0 = (function (_super) {
    __extends(_View_Edge_Host0, _super);
    function _View_Edge_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Edge_Host0, renderType_Edge_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_Edge_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('edge', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_Edge0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Edge_0_4 = new import3.Edge();
        this._appEl_0.initComponent(this._Edge_0_4, [], compView_0);
        compView_0.create(this._Edge_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_Edge_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.Edge) && (0 === requestNodeIndex))) {
            return this._Edge_0_4;
        }
        return notFoundResult;
    };
    return _View_Edge_Host0;
}(import1.AppView));
function viewFactory_Edge_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Edge_Host === null)) {
        (renderType_Edge_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_Edge_Host0(viewUtils, parentInjector, declarationEl);
}
export var EdgeNgFactory = new import9.ComponentFactory('edge', viewFactory_Edge_Host0, import3.Edge);
var styles_Edge = [];
var renderType_Edge = null;
var _View_Edge0 = (function (_super) {
    __extends(_View_Edge0, _super);
    function _View_Edge0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Edge0, renderType_Edge, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_Edge0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'edge');
        this._NgStyle_0_3 = new import10.NgStyle(this.parentInjector.get(import11.KeyValueDiffers), new import12.ElementRef(this._el_0), this.renderer);
        this._expr_0 = import7.UNINITIALIZED;
        this.init([], [this._el_0], [], []);
        return null;
    };
    _View_Edge0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import10.NgStyle) && (0 === requestNodeIndex))) {
            return this._NgStyle_0_3;
        }
        return notFoundResult;
    };
    _View_Edge0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0 = this.context.style;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._NgStyle_0_3.ngStyle = currVal_0;
            this._expr_0 = currVal_0;
        }
        if (!throwOnChange) {
            this._NgStyle_0_3.ngDoCheck();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_Edge0;
}(import1.AppView));
export function viewFactory_Edge0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Edge === null)) {
        (renderType_Edge = viewUtils.createRenderComponentType('/Users/tor/Development/angular-2-samples/components/algorithms/graph/edge.ts class Edge - inline template', 0, import8.ViewEncapsulation.None, styles_Edge, {}));
    }
    return new _View_Edge0(viewUtils, parentInjector, declarationEl);
}
