var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../components/jquery-integration/jquery-integration';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/linker/element_ref';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
var renderType_JqueryIntegration_Host = null;
var _View_JqueryIntegration_Host0 = (function (_super) {
    __extends(_View_JqueryIntegration_Host0, _super);
    function _View_JqueryIntegration_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_JqueryIntegration_Host0, renderType_JqueryIntegration_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_JqueryIntegration_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('jquery-integration', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_JqueryIntegration0(this.viewUtils, this.injector(0), this._appEl_0);
        this._JqueryIntegration_0_4 = new import3.JqueryIntegration(new import8.ElementRef(this._el_0));
        this._appEl_0.initComponent(this._JqueryIntegration_0_4, [], compView_0);
        compView_0.create(this._JqueryIntegration_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_JqueryIntegration_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.JqueryIntegration) && (0 === requestNodeIndex))) {
            return this._JqueryIntegration_0_4;
        }
        return notFoundResult;
    };
    _View_JqueryIntegration_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._JqueryIntegration_0_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_JqueryIntegration_Host0;
}(import1.AppView));
function viewFactory_JqueryIntegration_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_JqueryIntegration_Host === null)) {
        (renderType_JqueryIntegration_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_JqueryIntegration_Host0(viewUtils, parentInjector, declarationEl);
}
export var JqueryIntegrationNgFactory = new import10.ComponentFactory('jquery-integration', viewFactory_JqueryIntegration_Host0, import3.JqueryIntegration);
var styles_JqueryIntegration = [];
var renderType_JqueryIntegration = null;
var _View_JqueryIntegration0 = (function (_super) {
    __extends(_View_JqueryIntegration0, _super);
    function _View_JqueryIntegration0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_JqueryIntegration0, renderType_JqueryIntegration, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_JqueryIntegration0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'h1', null);
        this._text_1 = this.renderer.createText(this._el_0, 'Integrating jQuery with Angular 2.0', null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_3 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_3, 'class', 'moving-box');
        this._text_4 = this.renderer.createText(this._el_3, '\n    Drag this box around\n', null);
        this._text_5 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_6 = this.renderer.createElement(parentRenderNode, 'h4', null);
        this._el_7 = this.renderer.createElement(this._el_6, 'a', null);
        this.renderer.setElementAttribute(this._el_7, 'href', 'http://www.syntaxsuccess.com/viewarticle/using-jquery-with-angular-2.0');
        this._text_8 = this.renderer.createText(this._el_7, 'Read more here', null);
        this.init([], [
            this._el_0,
            this._text_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._text_5,
            this._el_6,
            this._el_7,
            this._text_8
        ], [], []);
        return null;
    };
    return _View_JqueryIntegration0;
}(import1.AppView));
export function viewFactory_JqueryIntegration0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_JqueryIntegration === null)) {
        (renderType_JqueryIntegration = viewUtils.createRenderComponentType('/Users/tor/Development/angular-2-samples/components/jquery-integration/jquery-integration.html', 0, import9.ViewEncapsulation.None, styles_JqueryIntegration, {}));
    }
    return new _View_JqueryIntegration0(viewUtils, parentInjector, declarationEl);
}
