import * as import0 from '../../../components/grid/grid-demo';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../components/grid/grid';
import * as import9 from './grid.ngfactory';
export class Wrapper_GridDemo {
    constructor() {
        this._changed = false;
        this.context = new import0.GridDemo();
    }
    ngOnDetach(view, componentView, el) {
    }
    ngOnDestroy() {
    }
    ngDoCheck(view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    }
    checkHost(view, componentView, el, throwOnChange) {
    }
    handleEvent(eventName, $event) {
        var result = true;
        return result;
    }
    subscribe(view, _eventHandler) {
        this._eventHandler = _eventHandler;
    }
}
var renderType_GridDemo_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
class View_GridDemo_Host0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_GridDemo_Host0, renderType_GridDemo_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'ng-component', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_GridDemo0(this.viewUtils, this, 0, this._el_0);
        this._GridDemo_0_3 = new Wrapper_GridDemo();
        this.compView_0.create(this._GridDemo_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._GridDemo_0_3.context);
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.GridDemo) && (0 === requestNodeIndex))) {
            return this._GridDemo_0_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._GridDemo_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    }
    destroyInternal() {
        this.compView_0.destroy();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
export const GridDemoNgFactory = new import7.ComponentFactory('ng-component', View_GridDemo_Host0, import0.GridDemo);
const styles_GridDemo = [];
var renderType_GridDemo = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_GridDemo, {});
export class View_GridDemo0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_GridDemo0, renderType_GridDemo, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'grid', new import3.InlineArray2(2, 'name', 'person grid'), null);
        this.compView_0 = new import9.View_Grid0(this.viewUtils, this, 0, this._el_0);
        this._Grid_0_3 = new import9.Wrapper_Grid();
        this.compView_0.create(this._Grid_0_3.context);
        this.init(null, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import8.Grid) && (0 === requestNodeIndex))) {
            return this._Grid_0_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_0_0_0 = this.context.columns;
        this._Grid_0_3.check_columns(currVal_0_0_0, throwOnChange, false);
        const currVal_0_0_1 = this.context.people;
        this._Grid_0_3.check_rows(currVal_0_0_1, throwOnChange, false);
        const currVal_0_0_2 = 'person grid';
        this._Grid_0_3.check_name(currVal_0_0_2, throwOnChange, false);
        this._Grid_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    }
    destroyInternal() {
        this.compView_0.destroy();
    }
}
