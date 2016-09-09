var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../components/react-integration/angular-2-host';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
var renderType_Angular2Host_Host = null;
var _View_Angular2Host_Host0 = (function (_super) {
    __extends(_View_Angular2Host_Host0, _super);
    function _View_Angular2Host_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Angular2Host_Host0, renderType_Angular2Host_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_Angular2Host_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('angular-2-host', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_Angular2Host0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Angular2Host_0_4 = new import3.Angular2Host();
        this._appEl_0.initComponent(this._Angular2Host_0_4, [], compView_0);
        compView_0.create(this._Angular2Host_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_Angular2Host_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.Angular2Host) && (0 === requestNodeIndex))) {
            return this._Angular2Host_0_4;
        }
        return notFoundResult;
    };
    _View_Angular2Host_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Angular2Host_0_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_Angular2Host_Host0;
}(import1.AppView));
function viewFactory_Angular2Host_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Angular2Host_Host === null)) {
        (renderType_Angular2Host_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_Angular2Host_Host0(viewUtils, parentInjector, declarationEl);
}
export var Angular2HostNgFactory = new import9.ComponentFactory('angular-2-host', viewFactory_Angular2Host_Host0, import3.Angular2Host);
var styles_Angular2Host = [];
var renderType_Angular2Host = null;
var _View_Angular2Host0 = (function (_super) {
    __extends(_View_Angular2Host0, _super);
    function _View_Angular2Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Angular2Host0, renderType_Angular2Host, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_Angular2Host0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'div', null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'h1', null);
        this._text_3 = this.renderer.createText(this._el_2, 'Integrating React with Angular 2.0', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_5 = this.renderer.createElement(this._el_0, 'p', null);
        this._text_6 = this.renderer.createText(this._el_5, 'This component integrates a FLUX based React component with Angular 2.0.\n       The treeview supports expanding and collapsing of nodes. Click the "icon" next to the node text to expand or\n       collapse a node.\n    ', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_8 = this.renderer.createElement(this._el_0, 'div', null);
        this.renderer.setElementAttribute(this._el_8, 'id', 'react-tree-view');
        this._text_9 = this.renderer.createText(this._el_0, '\n', null);
        this._text_10 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_11 = this.renderer.createElement(parentRenderNode, 'h4', null);
        this._el_12 = this.renderer.createElement(this._el_11, 'a', null);
        this.renderer.setElementAttribute(this._el_12, 'href', 'http://www.syntaxsuccess.com/viewarticle/integrating-react-with-angular-2.0');
        this._text_13 = this.renderer.createText(this._el_12, 'Read more here', null);
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._text_10,
            this._el_11,
            this._el_12,
            this._text_13
        ], [], []);
        return null;
    };
    return _View_Angular2Host0;
}(import1.AppView));
export function viewFactory_Angular2Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Angular2Host === null)) {
        (renderType_Angular2Host = viewUtils.createRenderComponentType('/Users/tor/Development/angular-2-samples/components/react-integration/angular-2-host.html', 0, import8.ViewEncapsulation.None, styles_Angular2Host, {}));
    }
    return new _View_Angular2Host0(viewUtils, parentInjector, declarationEl);
}
