var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../components/access-child-components/child';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
var renderType_Child_Host = null;
var _View_Child_Host0 = (function (_super) {
    __extends(_View_Child_Host0, _super);
    function _View_Child_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Child_Host0, renderType_Child_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_Child_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('child', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_Child0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Child_0_4 = new import3.Child();
        this._appEl_0.initComponent(this._Child_0_4, [], compView_0);
        compView_0.create(this._Child_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_Child_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.Child) && (0 === requestNodeIndex))) {
            return this._Child_0_4;
        }
        return notFoundResult;
    };
    return _View_Child_Host0;
}(import1.AppView));
function viewFactory_Child_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Child_Host === null)) {
        (renderType_Child_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_Child_Host0(viewUtils, parentInjector, declarationEl);
}
export var ChildNgFactory = new import9.ComponentFactory('child', viewFactory_Child_Host0, import3.Child);
var styles_Child = [];
var renderType_Child = null;
var _View_Child0 = (function (_super) {
    __extends(_View_Child0, _super);
    function _View_Child0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Child0, renderType_Child, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_Child0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'div', null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this._expr_0 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    _View_Child0.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_0 = import4.interpolate(1, '', this.context.time, '');
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setText(this._text_1, currVal_0);
            this._expr_0 = currVal_0;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_Child0;
}(import1.AppView));
export function viewFactory_Child0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Child === null)) {
        (renderType_Child = viewUtils.createRenderComponentType('/Users/tor/Development/angular-2-samples/components/access-child-components/child.ts class Child - inline template', 0, import8.ViewEncapsulation.None, styles_Child, {}));
    }
    return new _View_Child0(viewUtils, parentInjector, declarationEl);
}
