var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../components/non-bindable/non-bindable';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
var renderType_IgnoreBindings_Host = null;
var _View_IgnoreBindings_Host0 = (function (_super) {
    __extends(_View_IgnoreBindings_Host0, _super);
    function _View_IgnoreBindings_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_IgnoreBindings_Host0, renderType_IgnoreBindings_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_IgnoreBindings_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('ignore-bindings', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_IgnoreBindings0(this.viewUtils, this.injector(0), this._appEl_0);
        this._IgnoreBindings_0_4 = new import3.IgnoreBindings();
        this._appEl_0.initComponent(this._IgnoreBindings_0_4, [], compView_0);
        compView_0.create(this._IgnoreBindings_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_IgnoreBindings_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.IgnoreBindings) && (0 === requestNodeIndex))) {
            return this._IgnoreBindings_0_4;
        }
        return notFoundResult;
    };
    return _View_IgnoreBindings_Host0;
}(import1.AppView));
function viewFactory_IgnoreBindings_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_IgnoreBindings_Host === null)) {
        (renderType_IgnoreBindings_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_IgnoreBindings_Host0(viewUtils, parentInjector, declarationEl);
}
export var IgnoreBindingsNgFactory = new import9.ComponentFactory('ignore-bindings', viewFactory_IgnoreBindings_Host0, import3.IgnoreBindings);
var styles_IgnoreBindings = [];
var renderType_IgnoreBindings = null;
var _View_IgnoreBindings0 = (function (_super) {
    __extends(_View_IgnoreBindings0, _super);
    function _View_IgnoreBindings0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_IgnoreBindings0, renderType_IgnoreBindings, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_IgnoreBindings0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'h1', null);
        this._text_1 = this.renderer.createText(this._el_0, 'Ignoring Bindings', null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_3 = this.renderer.createElement(parentRenderNode, 'div', null);
        this._text_4 = this.renderer.createText(this._el_3, 'Ignored Binding:\n    ', null);
        this._el_5 = this.renderer.createElement(this._el_3, 'div', null);
        this.renderer.setElementAttribute(this._el_5, 'ngNonBindable', '');
        this._text_6 = this.renderer.createText(this._el_5, '{{10 * 10}}', null);
        this._text_7 = this.renderer.createText(this._el_3, '\n', null);
        this._text_8 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_9 = this.renderer.createElement(parentRenderNode, 'div', null);
        this._text_10 = this.renderer.createText(this._el_9, '\n    Executed Binding:\n    ', null);
        this._el_11 = this.renderer.createElement(this._el_9, 'div', null);
        this._text_12 = this.renderer.createText(this._el_11, '', null);
        this._text_13 = this.renderer.createText(this._el_9, '\n', null);
        this._text_14 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._text_13,
            this._text_14
        ], [], []);
        return null;
    };
    _View_IgnoreBindings0.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_0 = import4.interpolate(1, '', (10 * 10), '');
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setText(this._text_12, currVal_0);
            this._expr_0 = currVal_0;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_IgnoreBindings0;
}(import1.AppView));
export function viewFactory_IgnoreBindings0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_IgnoreBindings === null)) {
        (renderType_IgnoreBindings = viewUtils.createRenderComponentType('/Users/tor/Development/angular-2-samples/components/non-bindable/non-bindable.html', 0, import8.ViewEncapsulation.None, styles_IgnoreBindings, {}));
    }
    return new _View_IgnoreBindings0(viewUtils, parentInjector, declarationEl);
}
