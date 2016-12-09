import * as import0 from '../../../../components/algorithms/graph/edge';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../node_modules/@angular/common/src/directives/ng_style.ngfactory';
import * as import9 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import10 from '@angular/core/src/linker/element_ref';
import * as import11 from '@angular/common/src/directives/ng_style';
export class Wrapper_Edge {
    constructor() {
        this._changed = false;
        this.context = new import0.Edge();
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
var renderType_Edge_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
class View_Edge_Host0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_Edge_Host0, renderType_Edge_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'edge', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_Edge0(this.viewUtils, this, 0, this._el_0);
        this._Edge_0_3 = new Wrapper_Edge();
        this.compView_0.create(this._Edge_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._Edge_0_3.context);
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.Edge) && (0 === requestNodeIndex))) {
            return this._Edge_0_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._Edge_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    }
    destroyInternal() {
        this.compView_0.destroy();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
export const EdgeNgFactory = new import7.ComponentFactory('edge', View_Edge_Host0, import0.Edge);
const styles_Edge = [];
var renderType_Edge = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_Edge, {});
export class View_Edge0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_Edge0, renderType_Edge, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'edge'), null);
        this._NgStyle_0_3 = new import8.Wrapper_NgStyle(this.parentView.injectorGet(import9.KeyValueDiffers, this.parentIndex), new import10.ElementRef(this._el_0), this.renderer);
        this.init(null, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import11.NgStyle) && (0 === requestNodeIndex))) {
            return this._NgStyle_0_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_0_0_0 = this.context.style;
        this._NgStyle_0_3.check_ngStyle(currVal_0_0_0, throwOnChange, false);
        this._NgStyle_0_3.ngDoCheck(this, this._el_0, throwOnChange);
    }
}
