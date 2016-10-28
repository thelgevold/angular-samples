import * as import0 from '../../../../components/algorithms/graph/graph';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '../../../../components/algorithms/graph/edge-service';
import * as import5 from '@angular/core/src/linker/view_utils';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/change_detection';
import * as import9 from '@angular/core/src/linker/component_factory_resolver';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from './vertex.ngfactory';
import * as import13 from '../../../../components/algorithms/graph/vertex';
export class Wrapper_Graph {
    constructor(p0, p1) {
        this.changed = false;
        this.context = new import0.Graph(p0, p1);
    }
    detectChangesInInputProps(view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    }
    detectChangesInHostProps(view, el, throwOnChange) {
    }
}
var renderType_Graph_Host = null;
class _View_Graph_Host0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_Graph_Host0, renderType_Graph_Host, import7.ViewType.HOST, viewUtils, parentInjector, declarationEl, import8.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import5.selectOrCreateRenderHostElement(this.renderer, 'graph', import5.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_Graph0(this.viewUtils, this.injector(0), this._appEl_0);
        this._EdgeService_0_4 = new import4.EdgeService();
        this._Graph_0_5 = new Wrapper_Graph(this.parentInjector.get(import9.ComponentFactoryResolver), this._EdgeService_0_4);
        this._appEl_0.initComponent(this._Graph_0_5.context, [], compView_0);
        compView_0.create(this._Graph_0_5.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import4.EdgeService) && (0 === requestNodeIndex))) {
            return this._EdgeService_0_4;
        }
        if (((token === import0.Graph) && (0 === requestNodeIndex))) {
            return this._Graph_0_5.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._Graph_0_5.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._Graph_0_5.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
}
function viewFactory_Graph_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Graph_Host === null)) {
        (renderType_Graph_Host = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.None, [], {}));
    }
    return new _View_Graph_Host0(viewUtils, parentInjector, declarationEl);
}
export const GraphNgFactory = new import11.ComponentFactory('graph', viewFactory_Graph_Host0, import0.Graph);
const styles_Graph = [];
var renderType_Graph = null;
class _View_Graph0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_Graph0, renderType_Graph, import7.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import8.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = import5.createRenderElement(this.renderer, parentRenderNode, 'div', import5.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import5.createRenderElement(this.renderer, this._el_0, 'h1', import5.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, 'Create a Graph', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_5 = import5.createRenderElement(this.renderer, this._el_0, 'div', new import5.InlineArray4(4, 'class', 'alert alert-info', 'role', 'alert'), null);
        this._text_6 = this.renderer.createText(this._el_5, '\n        Click any pair of nodes to connect them with an edge\n    ', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_8 = import5.createRenderElement(this.renderer, this._el_0, 'vertex', import5.EMPTY_INLINE_ARRAY, null);
        this._appEl_8 = new import3.AppElement(8, 0, this, this._el_8);
        var compView_8 = import12.viewFactory_Vertex0(this.viewUtils, this.injector(8), this._appEl_8);
        this._Vertex_8_5 = new import12.Wrapper_Vertex(this.parentInjector.get(import4.EdgeService), this._appEl_8.vcRef);
        this._appEl_8.initComponent(this._Vertex_8_5.context, [], compView_8);
        compView_8.create(this._Vertex_8_5.context, [], null);
        this._text_9 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_10 = import5.createRenderElement(this.renderer, this._el_0, 'table', new import5.InlineArray2(2, 'class', 'graph-table'), null);
        this._text_11 = this.renderer.createText(this._el_10, '\n        ', null);
        this._el_12 = import5.createRenderElement(this.renderer, this._el_10, 'tbody', import5.EMPTY_INLINE_ARRAY, null);
        this._el_13 = import5.createRenderElement(this.renderer, this._el_12, 'tr', import5.EMPTY_INLINE_ARRAY, null);
        this._text_14 = this.renderer.createText(this._el_13, '\n            ', null);
        this._el_15 = import5.createRenderElement(this.renderer, this._el_13, 'td', import5.EMPTY_INLINE_ARRAY, null);
        this._el_16 = import5.createRenderElement(this.renderer, this._el_15, 'vertex', import5.EMPTY_INLINE_ARRAY, null);
        this._appEl_16 = new import3.AppElement(16, 15, this, this._el_16);
        var compView_16 = import12.viewFactory_Vertex0(this.viewUtils, this.injector(16), this._appEl_16);
        this._Vertex_16_5 = new import12.Wrapper_Vertex(this.parentInjector.get(import4.EdgeService), this._appEl_16.vcRef);
        this._appEl_16.initComponent(this._Vertex_16_5.context, [], compView_16);
        compView_16.create(this._Vertex_16_5.context, [], null);
        this._el_17 = import5.createRenderElement(this.renderer, this._el_13, 'td', import5.EMPTY_INLINE_ARRAY, null);
        this._el_18 = import5.createRenderElement(this.renderer, this._el_17, 'vertex', import5.EMPTY_INLINE_ARRAY, null);
        this._appEl_18 = new import3.AppElement(18, 17, this, this._el_18);
        var compView_18 = import12.viewFactory_Vertex0(this.viewUtils, this.injector(18), this._appEl_18);
        this._Vertex_18_5 = new import12.Wrapper_Vertex(this.parentInjector.get(import4.EdgeService), this._appEl_18.vcRef);
        this._appEl_18.initComponent(this._Vertex_18_5.context, [], compView_18);
        compView_18.create(this._Vertex_18_5.context, [], null);
        this._text_19 = this.renderer.createText(this._el_13, '\n        ', null);
        this._el_20 = import5.createRenderElement(this.renderer, this._el_12, 'tr', import5.EMPTY_INLINE_ARRAY, null);
        this._text_21 = this.renderer.createText(this._el_20, '\n            ', null);
        this._el_22 = import5.createRenderElement(this.renderer, this._el_20, 'td', import5.EMPTY_INLINE_ARRAY, null);
        this._el_23 = import5.createRenderElement(this.renderer, this._el_22, 'vertex', import5.EMPTY_INLINE_ARRAY, null);
        this._appEl_23 = new import3.AppElement(23, 22, this, this._el_23);
        var compView_23 = import12.viewFactory_Vertex0(this.viewUtils, this.injector(23), this._appEl_23);
        this._Vertex_23_5 = new import12.Wrapper_Vertex(this.parentInjector.get(import4.EdgeService), this._appEl_23.vcRef);
        this._appEl_23.initComponent(this._Vertex_23_5.context, [], compView_23);
        compView_23.create(this._Vertex_23_5.context, [], null);
        this._el_24 = import5.createRenderElement(this.renderer, this._el_20, 'td', import5.EMPTY_INLINE_ARRAY, null);
        this._el_25 = import5.createRenderElement(this.renderer, this._el_24, 'vertex', import5.EMPTY_INLINE_ARRAY, null);
        this._appEl_25 = new import3.AppElement(25, 24, this, this._el_25);
        var compView_25 = import12.viewFactory_Vertex0(this.viewUtils, this.injector(25), this._appEl_25);
        this._Vertex_25_5 = new import12.Wrapper_Vertex(this.parentInjector.get(import4.EdgeService), this._appEl_25.vcRef);
        this._appEl_25.initComponent(this._Vertex_25_5.context, [], compView_25);
        compView_25.create(this._Vertex_25_5.context, [], null);
        this._text_26 = this.renderer.createText(this._el_20, '\n        ', null);
        this._text_27 = this.renderer.createText(this._el_12, '\n        ', null);
        this._el_28 = import5.createRenderElement(this.renderer, this._el_12, 'tr', import5.EMPTY_INLINE_ARRAY, null);
        this._text_29 = this.renderer.createText(this._el_28, '\n            ', null);
        this._el_30 = import5.createRenderElement(this.renderer, this._el_28, 'td', import5.EMPTY_INLINE_ARRAY, null);
        this._el_31 = import5.createRenderElement(this.renderer, this._el_30, 'vertex', import5.EMPTY_INLINE_ARRAY, null);
        this._appEl_31 = new import3.AppElement(31, 30, this, this._el_31);
        var compView_31 = import12.viewFactory_Vertex0(this.viewUtils, this.injector(31), this._appEl_31);
        this._Vertex_31_5 = new import12.Wrapper_Vertex(this.parentInjector.get(import4.EdgeService), this._appEl_31.vcRef);
        this._appEl_31.initComponent(this._Vertex_31_5.context, [], compView_31);
        compView_31.create(this._Vertex_31_5.context, [], null);
        this._el_32 = import5.createRenderElement(this.renderer, this._el_28, 'td', import5.EMPTY_INLINE_ARRAY, null);
        this._el_33 = import5.createRenderElement(this.renderer, this._el_32, 'vertex', import5.EMPTY_INLINE_ARRAY, null);
        this._appEl_33 = new import3.AppElement(33, 32, this, this._el_33);
        var compView_33 = import12.viewFactory_Vertex0(this.viewUtils, this.injector(33), this._appEl_33);
        this._Vertex_33_5 = new import12.Wrapper_Vertex(this.parentInjector.get(import4.EdgeService), this._appEl_33.vcRef);
        this._appEl_33.initComponent(this._Vertex_33_5.context, [], compView_33);
        compView_33.create(this._Vertex_33_5.context, [], null);
        this._el_34 = import5.createRenderElement(this.renderer, this._el_28, 'td', import5.EMPTY_INLINE_ARRAY, null);
        this._el_35 = import5.createRenderElement(this.renderer, this._el_34, 'vertex', import5.EMPTY_INLINE_ARRAY, null);
        this._appEl_35 = new import3.AppElement(35, 34, this, this._el_35);
        var compView_35 = import12.viewFactory_Vertex0(this.viewUtils, this.injector(35), this._appEl_35);
        this._Vertex_35_5 = new import12.Wrapper_Vertex(this.parentInjector.get(import4.EdgeService), this._appEl_35.vcRef);
        this._appEl_35.initComponent(this._Vertex_35_5.context, [], compView_35);
        compView_35.create(this._Vertex_35_5.context, [], null);
        this._text_36 = this.renderer.createText(this._el_28, '\n        ', null);
        this._text_37 = this.renderer.createText(this._el_12, '\n    ', null);
        this._text_38 = this.renderer.createText(this._el_0, '\n', null);
        this._text_39 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_40 = import5.createRenderElement(this.renderer, parentRenderNode, 'h4', import5.EMPTY_INLINE_ARRAY, null);
        this._el_41 = import5.createRenderElement(this.renderer, this._el_40, 'a', new import5.InlineArray2(2, 'href', 'http://www.syntaxsuccess.com/viewarticle/loading-components-dynamically-in-angular-2.0'), null);
        this._text_42 = this.renderer.createText(this._el_41, 'Read more here', null);
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
        ], [], []);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import13.Vertex) && (8 === requestNodeIndex))) {
            return this._Vertex_8_5.context;
        }
        if (((token === import13.Vertex) && (16 === requestNodeIndex))) {
            return this._Vertex_16_5.context;
        }
        if (((token === import13.Vertex) && (18 === requestNodeIndex))) {
            return this._Vertex_18_5.context;
        }
        if (((token === import13.Vertex) && (23 === requestNodeIndex))) {
            return this._Vertex_23_5.context;
        }
        if (((token === import13.Vertex) && (25 === requestNodeIndex))) {
            return this._Vertex_25_5.context;
        }
        if (((token === import13.Vertex) && (31 === requestNodeIndex))) {
            return this._Vertex_31_5.context;
        }
        if (((token === import13.Vertex) && (33 === requestNodeIndex))) {
            return this._Vertex_33_5.context;
        }
        if (((token === import13.Vertex) && (35 === requestNodeIndex))) {
            return this._Vertex_35_5.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_8_0_0 = 'A';
        this._Vertex_8_5.check_value(currVal_8_0_0, throwOnChange, false);
        this._Vertex_8_5.detectChangesInInputProps(this, this._el_8, throwOnChange);
        const currVal_16_0_0 = 'B';
        this._Vertex_16_5.check_value(currVal_16_0_0, throwOnChange, false);
        this._Vertex_16_5.detectChangesInInputProps(this, this._el_16, throwOnChange);
        const currVal_18_0_0 = 'C';
        this._Vertex_18_5.check_value(currVal_18_0_0, throwOnChange, false);
        this._Vertex_18_5.detectChangesInInputProps(this, this._el_18, throwOnChange);
        const currVal_23_0_0 = 'E';
        this._Vertex_23_5.check_value(currVal_23_0_0, throwOnChange, false);
        this._Vertex_23_5.detectChangesInInputProps(this, this._el_23, throwOnChange);
        const currVal_25_0_0 = 'F';
        this._Vertex_25_5.check_value(currVal_25_0_0, throwOnChange, false);
        this._Vertex_25_5.detectChangesInInputProps(this, this._el_25, throwOnChange);
        const currVal_31_0_0 = 'G';
        this._Vertex_31_5.check_value(currVal_31_0_0, throwOnChange, false);
        this._Vertex_31_5.detectChangesInInputProps(this, this._el_31, throwOnChange);
        const currVal_33_0_0 = 'H';
        this._Vertex_33_5.check_value(currVal_33_0_0, throwOnChange, false);
        this._Vertex_33_5.detectChangesInInputProps(this, this._el_33, throwOnChange);
        const currVal_35_0_0 = 'I';
        this._Vertex_35_5.check_value(currVal_35_0_0, throwOnChange, false);
        this._Vertex_35_5.detectChangesInInputProps(this, this._el_35, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._Vertex_8_5.detectChangesInHostProps(this, this._el_8, throwOnChange);
        this._Vertex_16_5.detectChangesInHostProps(this, this._el_16, throwOnChange);
        this._Vertex_18_5.detectChangesInHostProps(this, this._el_18, throwOnChange);
        this._Vertex_23_5.detectChangesInHostProps(this, this._el_23, throwOnChange);
        this._Vertex_25_5.detectChangesInHostProps(this, this._el_25, throwOnChange);
        this._Vertex_31_5.detectChangesInHostProps(this, this._el_31, throwOnChange);
        this._Vertex_33_5.detectChangesInHostProps(this, this._el_33, throwOnChange);
        this._Vertex_35_5.detectChangesInHostProps(this, this._el_35, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
}
export function viewFactory_Graph0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Graph === null)) {
        (renderType_Graph = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.None, styles_Graph, {}));
    }
    return new _View_Graph0(viewUtils, parentInjector, declarationEl);
}
