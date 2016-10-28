import * as import0 from '../../../components/grid/grid-demo';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from './grid.ngfactory';
import * as import11 from '../../../components/grid/grid';
export class Wrapper_GridDemo {
    constructor() {
        this.changed = false;
        this.context = new import0.GridDemo();
    }
    detectChangesInInputProps(view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    }
    detectChangesInHostProps(view, el, throwOnChange) {
    }
}
var renderType_GridDemo_Host = null;
class _View_GridDemo_Host0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_GridDemo_Host0, renderType_GridDemo_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer, 'ng-component', import4.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_GridDemo0(this.viewUtils, this.injector(0), this._appEl_0);
        this._GridDemo_0_4 = new Wrapper_GridDemo();
        this._appEl_0.initComponent(this._GridDemo_0_4.context, [], compView_0);
        compView_0.create(this._GridDemo_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.GridDemo) && (0 === requestNodeIndex))) {
            return this._GridDemo_0_4.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._GridDemo_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._GridDemo_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
}
function viewFactory_GridDemo_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_GridDemo_Host === null)) {
        (renderType_GridDemo_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_GridDemo_Host0(viewUtils, parentInjector, declarationEl);
}
export const GridDemoNgFactory = new import9.ComponentFactory('ng-component', viewFactory_GridDemo_Host0, import0.GridDemo);
const styles_GridDemo = [];
var renderType_GridDemo = null;
class _View_GridDemo0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_GridDemo0, renderType_GridDemo, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = import4.createRenderElement(this.renderer, parentRenderNode, 'grid', new import4.InlineArray2(2, 'name', 'person grid'), null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = import10.viewFactory_Grid0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Grid_0_4 = new import10.Wrapper_Grid();
        this._appEl_0.initComponent(this._Grid_0_4.context, [], compView_0);
        compView_0.create(this._Grid_0_4.context, [], null);
        this.init([], [this._el_0], [], []);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import11.Grid) && (0 === requestNodeIndex))) {
            return this._Grid_0_4.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_0_0_0 = this.context.columns;
        this._Grid_0_4.check_columns(currVal_0_0_0, throwOnChange, false);
        const currVal_0_0_1 = this.context.people;
        this._Grid_0_4.check_rows(currVal_0_0_1, throwOnChange, false);
        const currVal_0_0_2 = 'person grid';
        this._Grid_0_4.check_name(currVal_0_0_2, throwOnChange, false);
        this._Grid_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._Grid_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
}
export function viewFactory_GridDemo0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_GridDemo === null)) {
        (renderType_GridDemo = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, styles_GridDemo, {}));
    }
    return new _View_GridDemo0(viewUtils, parentInjector, declarationEl);
}
