var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../components/grid/grid-demo';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '../../../components/grid/grid';
import * as import11 from './grid.ngfactory';
var renderType_GridDemo_Host = null;
var _View_GridDemo_Host0 = (function (_super) {
    __extends(_View_GridDemo_Host0, _super);
    function _View_GridDemo_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_GridDemo_Host0, renderType_GridDemo_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_GridDemo_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('ng-component', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_GridDemo0(this.viewUtils, this.injector(0), this._appEl_0);
        this._GridDemo_0_4 = new import3.GridDemo();
        this._appEl_0.initComponent(this._GridDemo_0_4, [], compView_0);
        compView_0.create(this._GridDemo_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_GridDemo_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.GridDemo) && (0 === requestNodeIndex))) {
            return this._GridDemo_0_4;
        }
        return notFoundResult;
    };
    return _View_GridDemo_Host0;
}(import1.AppView));
function viewFactory_GridDemo_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_GridDemo_Host === null)) {
        (renderType_GridDemo_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_GridDemo_Host0(viewUtils, parentInjector, declarationEl);
}
export var GridDemoNgFactory = new import9.ComponentFactory('ng-component', viewFactory_GridDemo_Host0, import3.GridDemo);
var styles_GridDemo = [];
var renderType_GridDemo = null;
var _View_GridDemo0 = (function (_super) {
    __extends(_View_GridDemo0, _super);
    function _View_GridDemo0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_GridDemo0, renderType_GridDemo, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_GridDemo0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'grid', null);
        this.renderer.setElementAttribute(this._el_0, 'name', 'person grid');
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = import11.viewFactory_Grid0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Grid_0_4 = new import10.Grid();
        this._appEl_0.initComponent(this._Grid_0_4, [], compView_0);
        compView_0.create(this._Grid_0_4, [], null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this.init([], [this._el_0], [], []);
        return null;
    };
    _View_GridDemo0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import10.Grid) && (0 === requestNodeIndex))) {
            return this._Grid_0_4;
        }
        return notFoundResult;
    };
    _View_GridDemo0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0 = this.context.columns;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._Grid_0_4.columns = currVal_0;
            this._expr_0 = currVal_0;
        }
        var currVal_1 = this.context.people;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this._Grid_0_4.rows = currVal_1;
            this._expr_1 = currVal_1;
        }
        var currVal_2 = 'person grid';
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this._Grid_0_4.name = currVal_2;
            this._expr_2 = currVal_2;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Grid_0_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_GridDemo0;
}(import1.AppView));
export function viewFactory_GridDemo0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_GridDemo === null)) {
        (renderType_GridDemo = viewUtils.createRenderComponentType('/Users/tor/Development/angular-2-samples/components/grid/grid-demo.ts class GridDemo - inline template', 0, import8.ViewEncapsulation.None, styles_GridDemo, {}));
    }
    return new _View_GridDemo0(viewUtils, parentInjector, declarationEl);
}
