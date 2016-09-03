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
class _View_GridDemo_Host0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_GridDemo_Host0, renderType_GridDemo_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('ng-component', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_GridDemo0(this.viewUtils, this.injector(0), this._appEl_0);
        this._GridDemo_0_4 = new import3.GridDemo();
        this._appEl_0.initComponent(this._GridDemo_0_4, [], compView_0);
        compView_0.create(this._GridDemo_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import3.GridDemo) && (0 === requestNodeIndex))) {
            return this._GridDemo_0_4;
        }
        return notFoundResult;
    }
}
function viewFactory_GridDemo_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_GridDemo_Host === null)) {
        (renderType_GridDemo_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_GridDemo_Host0(viewUtils, parentInjector, declarationEl);
}
export const GridDemoNgFactory = new import9.ComponentFactory('ng-component', viewFactory_GridDemo_Host0, import3.GridDemo);
const styles_GridDemo = [];
var renderType_GridDemo = null;
class _View_GridDemo0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_GridDemo0, renderType_GridDemo, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
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
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import10.Grid) && (0 === requestNodeIndex))) {
            return this._Grid_0_4;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_0 = this.context.columns;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._Grid_0_4.columns = currVal_0;
            this._expr_0 = currVal_0;
        }
        const currVal_1 = this.context.people;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this._Grid_0_4.rows = currVal_1;
            this._expr_1 = currVal_1;
        }
        const currVal_2 = 'person grid';
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this._Grid_0_4.name = currVal_2;
            this._expr_2 = currVal_2;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Grid_0_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
}
export function viewFactory_GridDemo0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_GridDemo === null)) {
        (renderType_GridDemo = viewUtils.createRenderComponentType('/Users/tor/Development/angular-2-samples/components/grid/grid-demo.ts class GridDemo - inline template', 0, import8.ViewEncapsulation.None, styles_GridDemo, {}));
    }
    return new _View_GridDemo0(viewUtils, parentInjector, declarationEl);
}
