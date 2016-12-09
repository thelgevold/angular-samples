import * as import0 from '../../../../components/algorithms/graph/graph';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '../../../../components/algorithms/graph/edge-service';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '@angular/core/src/linker/component_factory_resolver';
import * as import10 from '@angular/core/src/linker/view_container';
import * as import11 from '../../../../components/algorithms/graph/vertex';
import * as import12 from './vertex.ngfactory';
export class Wrapper_Graph {
    constructor(p0, p1) {
        this._changed = false;
        this.context = new import0.Graph(p0, p1);
    }
    ngOnDetach(view, componentView, el) {
    }
    ngOnDestroy() {
    }
    ngDoCheck(view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
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
var renderType_Graph_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
class View_Graph_Host0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_Graph_Host0, renderType_Graph_Host, import6.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'graph', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_Graph0(this.viewUtils, this, 0, this._el_0);
        this._EdgeService_0_3 = new import5.EdgeService();
        this._Graph_0_4 = new Wrapper_Graph(this.injectorGet(import9.ComponentFactoryResolver, this.parentIndex), this._EdgeService_0_3);
        this.compView_0.create(this._Graph_0_4.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import8.ComponentRef_(0, this, this._el_0, this._Graph_0_4.context);
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import5.EdgeService) && (0 === requestNodeIndex))) {
            return this._EdgeService_0_3;
        }
        if (((token === import0.Graph) && (0 === requestNodeIndex))) {
            return this._Graph_0_4.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._Graph_0_4.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    }
    destroyInternal() {
        this.compView_0.destroy();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
export const GraphNgFactory = new import8.ComponentFactory('graph', View_Graph_Host0, import0.Graph);
const styles_Graph = [];
var renderType_Graph = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_Graph, {});
export class View_Graph0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_Graph0, renderType_Graph, import6.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'h1', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, 'Create a Graph', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray4(4, 'class', 'alert alert-info', 'role', 'alert'), null);
        this._text_6 = this.renderer.createText(this._el_5, '\n        Click any pair of nodes to connect them with an edge\n    ', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_0, 'vertex', import3.EMPTY_INLINE_ARRAY, null);
        this._vc_8 = new import10.ViewContainer(8, 0, this, this._el_8);
        this.compView_8 = new import12.View_Vertex0(this.viewUtils, this, 8, this._el_8);
        this._Vertex_8_5 = new import12.Wrapper_Vertex(this.parentView.injectorGet(import5.EdgeService, this.parentIndex), this._vc_8.vcRef);
        this.compView_8.create(this._Vertex_8_5.context);
        this._text_9 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_0, 'table', new import3.InlineArray2(2, 'class', 'graph-table'), null);
        this._text_11 = this.renderer.createText(this._el_10, '\n        ', null);
        this._el_12 = import3.createRenderElement(this.renderer, this._el_10, 'tbody', import3.EMPTY_INLINE_ARRAY, null);
        this._el_13 = import3.createRenderElement(this.renderer, this._el_12, 'tr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_14 = this.renderer.createText(this._el_13, '\n            ', null);
        this._el_15 = import3.createRenderElement(this.renderer, this._el_13, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._el_16 = import3.createRenderElement(this.renderer, this._el_15, 'vertex', import3.EMPTY_INLINE_ARRAY, null);
        this._vc_16 = new import10.ViewContainer(16, 15, this, this._el_16);
        this.compView_16 = new import12.View_Vertex0(this.viewUtils, this, 16, this._el_16);
        this._Vertex_16_5 = new import12.Wrapper_Vertex(this.parentView.injectorGet(import5.EdgeService, this.parentIndex), this._vc_16.vcRef);
        this.compView_16.create(this._Vertex_16_5.context);
        this._el_17 = import3.createRenderElement(this.renderer, this._el_13, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._el_18 = import3.createRenderElement(this.renderer, this._el_17, 'vertex', import3.EMPTY_INLINE_ARRAY, null);
        this._vc_18 = new import10.ViewContainer(18, 17, this, this._el_18);
        this.compView_18 = new import12.View_Vertex0(this.viewUtils, this, 18, this._el_18);
        this._Vertex_18_5 = new import12.Wrapper_Vertex(this.parentView.injectorGet(import5.EdgeService, this.parentIndex), this._vc_18.vcRef);
        this.compView_18.create(this._Vertex_18_5.context);
        this._text_19 = this.renderer.createText(this._el_13, '\n        ', null);
        this._el_20 = import3.createRenderElement(this.renderer, this._el_12, 'tr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_21 = this.renderer.createText(this._el_20, '\n            ', null);
        this._el_22 = import3.createRenderElement(this.renderer, this._el_20, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._el_23 = import3.createRenderElement(this.renderer, this._el_22, 'vertex', import3.EMPTY_INLINE_ARRAY, null);
        this._vc_23 = new import10.ViewContainer(23, 22, this, this._el_23);
        this.compView_23 = new import12.View_Vertex0(this.viewUtils, this, 23, this._el_23);
        this._Vertex_23_5 = new import12.Wrapper_Vertex(this.parentView.injectorGet(import5.EdgeService, this.parentIndex), this._vc_23.vcRef);
        this.compView_23.create(this._Vertex_23_5.context);
        this._el_24 = import3.createRenderElement(this.renderer, this._el_20, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._el_25 = import3.createRenderElement(this.renderer, this._el_24, 'vertex', import3.EMPTY_INLINE_ARRAY, null);
        this._vc_25 = new import10.ViewContainer(25, 24, this, this._el_25);
        this.compView_25 = new import12.View_Vertex0(this.viewUtils, this, 25, this._el_25);
        this._Vertex_25_5 = new import12.Wrapper_Vertex(this.parentView.injectorGet(import5.EdgeService, this.parentIndex), this._vc_25.vcRef);
        this.compView_25.create(this._Vertex_25_5.context);
        this._text_26 = this.renderer.createText(this._el_20, '\n        ', null);
        this._text_27 = this.renderer.createText(this._el_12, '\n        ', null);
        this._el_28 = import3.createRenderElement(this.renderer, this._el_12, 'tr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_29 = this.renderer.createText(this._el_28, '\n            ', null);
        this._el_30 = import3.createRenderElement(this.renderer, this._el_28, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._el_31 = import3.createRenderElement(this.renderer, this._el_30, 'vertex', import3.EMPTY_INLINE_ARRAY, null);
        this._vc_31 = new import10.ViewContainer(31, 30, this, this._el_31);
        this.compView_31 = new import12.View_Vertex0(this.viewUtils, this, 31, this._el_31);
        this._Vertex_31_5 = new import12.Wrapper_Vertex(this.parentView.injectorGet(import5.EdgeService, this.parentIndex), this._vc_31.vcRef);
        this.compView_31.create(this._Vertex_31_5.context);
        this._el_32 = import3.createRenderElement(this.renderer, this._el_28, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._el_33 = import3.createRenderElement(this.renderer, this._el_32, 'vertex', import3.EMPTY_INLINE_ARRAY, null);
        this._vc_33 = new import10.ViewContainer(33, 32, this, this._el_33);
        this.compView_33 = new import12.View_Vertex0(this.viewUtils, this, 33, this._el_33);
        this._Vertex_33_5 = new import12.Wrapper_Vertex(this.parentView.injectorGet(import5.EdgeService, this.parentIndex), this._vc_33.vcRef);
        this.compView_33.create(this._Vertex_33_5.context);
        this._el_34 = import3.createRenderElement(this.renderer, this._el_28, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._el_35 = import3.createRenderElement(this.renderer, this._el_34, 'vertex', import3.EMPTY_INLINE_ARRAY, null);
        this._vc_35 = new import10.ViewContainer(35, 34, this, this._el_35);
        this.compView_35 = new import12.View_Vertex0(this.viewUtils, this, 35, this._el_35);
        this._Vertex_35_5 = new import12.Wrapper_Vertex(this.parentView.injectorGet(import5.EdgeService, this.parentIndex), this._vc_35.vcRef);
        this.compView_35.create(this._Vertex_35_5.context);
        this._text_36 = this.renderer.createText(this._el_28, '\n        ', null);
        this._text_37 = this.renderer.createText(this._el_12, '\n    ', null);
        this._text_38 = this.renderer.createText(this._el_0, '\n', null);
        this._text_39 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_40 = import3.createRenderElement(this.renderer, parentRenderNode, 'h4', import3.EMPTY_INLINE_ARRAY, null);
        this._el_41 = import3.createRenderElement(this.renderer, this._el_40, 'a', new import3.InlineArray2(2, 'href', 'http://www.syntaxsuccess.com/viewarticle/loading-components-dynamically-in-angular-2.0'), null);
        this._text_42 = this.renderer.createText(this._el_41, 'Read more here', null);
        this.init(null, (this.renderer.directRenderer ? null : [
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
            this._el_10,
            this._text_11,
            this._el_12,
            this._el_13,
            this._text_14,
            this._el_15,
            this._el_16,
            this._el_17,
            this._el_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._el_22,
            this._el_23,
            this._el_24,
            this._el_25,
            this._text_26,
            this._text_27,
            this._el_28,
            this._text_29,
            this._el_30,
            this._el_31,
            this._el_32,
            this._el_33,
            this._el_34,
            this._el_35,
            this._text_36,
            this._text_37,
            this._text_38,
            this._text_39,
            this._el_40,
            this._el_41,
            this._text_42
        ]), null);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import11.Vertex) && (8 === requestNodeIndex))) {
            return this._Vertex_8_5.context;
        }
        if (((token === import11.Vertex) && (16 === requestNodeIndex))) {
            return this._Vertex_16_5.context;
        }
        if (((token === import11.Vertex) && (18 === requestNodeIndex))) {
            return this._Vertex_18_5.context;
        }
        if (((token === import11.Vertex) && (23 === requestNodeIndex))) {
            return this._Vertex_23_5.context;
        }
        if (((token === import11.Vertex) && (25 === requestNodeIndex))) {
            return this._Vertex_25_5.context;
        }
        if (((token === import11.Vertex) && (31 === requestNodeIndex))) {
            return this._Vertex_31_5.context;
        }
        if (((token === import11.Vertex) && (33 === requestNodeIndex))) {
            return this._Vertex_33_5.context;
        }
        if (((token === import11.Vertex) && (35 === requestNodeIndex))) {
            return this._Vertex_35_5.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_8_0_0 = 'A';
        this._Vertex_8_5.check_value(currVal_8_0_0, throwOnChange, false);
        this._Vertex_8_5.ngDoCheck(this, this._el_8, throwOnChange);
        const currVal_16_0_0 = 'B';
        this._Vertex_16_5.check_value(currVal_16_0_0, throwOnChange, false);
        this._Vertex_16_5.ngDoCheck(this, this._el_16, throwOnChange);
        const currVal_18_0_0 = 'C';
        this._Vertex_18_5.check_value(currVal_18_0_0, throwOnChange, false);
        this._Vertex_18_5.ngDoCheck(this, this._el_18, throwOnChange);
        const currVal_23_0_0 = 'E';
        this._Vertex_23_5.check_value(currVal_23_0_0, throwOnChange, false);
        this._Vertex_23_5.ngDoCheck(this, this._el_23, throwOnChange);
        const currVal_25_0_0 = 'F';
        this._Vertex_25_5.check_value(currVal_25_0_0, throwOnChange, false);
        this._Vertex_25_5.ngDoCheck(this, this._el_25, throwOnChange);
        const currVal_31_0_0 = 'G';
        this._Vertex_31_5.check_value(currVal_31_0_0, throwOnChange, false);
        this._Vertex_31_5.ngDoCheck(this, this._el_31, throwOnChange);
        const currVal_33_0_0 = 'H';
        this._Vertex_33_5.check_value(currVal_33_0_0, throwOnChange, false);
        this._Vertex_33_5.ngDoCheck(this, this._el_33, throwOnChange);
        const currVal_35_0_0 = 'I';
        this._Vertex_35_5.check_value(currVal_35_0_0, throwOnChange, false);
        this._Vertex_35_5.ngDoCheck(this, this._el_35, throwOnChange);
        this._vc_8.detectChangesInNestedViews(throwOnChange);
        this._vc_16.detectChangesInNestedViews(throwOnChange);
        this._vc_18.detectChangesInNestedViews(throwOnChange);
        this._vc_23.detectChangesInNestedViews(throwOnChange);
        this._vc_25.detectChangesInNestedViews(throwOnChange);
        this._vc_31.detectChangesInNestedViews(throwOnChange);
        this._vc_33.detectChangesInNestedViews(throwOnChange);
        this._vc_35.detectChangesInNestedViews(throwOnChange);
        this.compView_8.detectChanges(throwOnChange);
        this.compView_16.detectChanges(throwOnChange);
        this.compView_18.detectChanges(throwOnChange);
        this.compView_23.detectChanges(throwOnChange);
        this.compView_25.detectChanges(throwOnChange);
        this.compView_31.detectChanges(throwOnChange);
        this.compView_33.detectChanges(throwOnChange);
        this.compView_35.detectChanges(throwOnChange);
    }
    destroyInternal() {
        this._vc_8.destroyNestedViews();
        this._vc_16.destroyNestedViews();
        this._vc_18.destroyNestedViews();
        this._vc_23.destroyNestedViews();
        this._vc_25.destroyNestedViews();
        this._vc_31.destroyNestedViews();
        this._vc_33.destroyNestedViews();
        this._vc_35.destroyNestedViews();
        this.compView_8.destroy();
        this.compView_16.destroy();
        this.compView_18.destroy();
        this.compView_23.destroy();
        this.compView_25.destroy();
        this.compView_31.destroy();
        this.compView_33.destroy();
        this.compView_35.destroy();
    }
}
