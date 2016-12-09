import * as import0 from '../../../../components/algorithms/graph/vertex';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_container';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/constants';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '../../../../components/algorithms/graph/edge-service';
import * as import11 from '@angular/core/src/linker/query_list';
import * as import12 from '@angular/core/src/linker/element_ref';
export class Wrapper_Vertex {
    constructor(p0, p1) {
        this._changed = false;
        this.context = new import0.Vertex(p0, p1);
        this._expr_0 = import1.UNINITIALIZED;
    }
    ngOnDetach(view, componentView, el) {
    }
    ngOnDestroy() {
    }
    check_value(currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.value = currValue;
            this._expr_0 = currValue;
        }
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
var renderType_Vertex_Host = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, [], {});
class View_Vertex_Host0 extends import2.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_Vertex_Host0, renderType_Vertex_Host, import7.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import8.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'vertex', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._vc_0 = new import6.ViewContainer(0, null, this, this._el_0);
        this.compView_0 = new View_Vertex0(this.viewUtils, this, 0, this._el_0);
        this._Vertex_0_5 = new Wrapper_Vertex(this.injectorGet(import10.EdgeService, this.parentIndex), this._vc_0.vcRef);
        this.compView_0.create(this._Vertex_0_5.context);
        this._el_1 = this.renderer.createTemplateAnchor(null, null);
        this.init(this._el_1, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import9.ComponentRef_(0, this, this._el_0, this._Vertex_0_5.context);
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.Vertex) && (0 === requestNodeIndex))) {
            return this._Vertex_0_5.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._Vertex_0_5.ngDoCheck(this, this._el_0, throwOnChange);
        this._vc_0.detectChangesInNestedViews(throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    }
    destroyInternal() {
        this._vc_0.destroyNestedViews();
        this.compView_0.destroy();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._vc_0.nativeElement, ctx);
        this._vc_0.visitNestedViewRootNodes(cb, ctx);
        cb(this._el_1, ctx);
    }
}
export const VertexNgFactory = new import9.ComponentFactory('vertex', View_Vertex_Host0, import0.Vertex);
const styles_Vertex = [];
var renderType_Vertex = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, styles_Vertex, {});
export class View_Vertex0 extends import2.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_Vertex0, renderType_Vertex, import7.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import8.ChangeDetectorStatus.CheckAlways);
        this._expr_4 = import1.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._viewQuery_vertex_0 = new import11.QueryList();
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'vertex'), null);
        this._el_1 = import3.createRenderElement(this.renderer, this._el_0, 'span', new import3.InlineArray2(2, 'class', 'vertex-text'), null);
        this._text_2 = this.renderer.createText(this._el_1, '', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_0, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_0));
        this._viewQuery_vertex_0.reset([new import12.ElementRef(this._el_0)]);
        this.context.element = this._viewQuery_vertex_0.first;
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._el_1,
            this._text_2
        ]), [disposable_0]);
        return null;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_4 = import3.inlineInterpolate(1, '', this.context.value, '');
        if (import3.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setText(this._text_2, currVal_4);
            this._expr_4 = currVal_4;
        }
    }
    handleEvent_0(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            const pd_sub_0 = (this.context.setCoordinates() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    }
}
