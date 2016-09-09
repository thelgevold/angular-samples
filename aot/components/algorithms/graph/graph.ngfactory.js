var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../../components/algorithms/graph/edge-service';
import * as import4 from '../../../../components/algorithms/graph/graph';
import * as import5 from '@angular/core/src/linker/view_utils';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/change_detection';
import * as import9 from '@angular/core/src/linker/component_factory_resolver';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from '../../../../components/algorithms/graph/vertex';
import * as import13 from './vertex.ngfactory';
var renderType_Graph_Host = null;
var _View_Graph_Host0 = (function (_super) {
    __extends(_View_Graph_Host0, _super);
    function _View_Graph_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Graph_Host0, renderType_Graph_Host, import7.ViewType.HOST, viewUtils, parentInjector, declarationEl, import8.ChangeDetectorStatus.CheckAlways);
    }
    _View_Graph_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('graph', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_Graph0(this.viewUtils, this.injector(0), this._appEl_0);
        this._EdgeService_0_4 = new import3.EdgeService();
        this._Graph_0_5 = new import4.Graph(this.parentInjector.get(import9.ComponentFactoryResolver), this._EdgeService_0_4);
        this._appEl_0.initComponent(this._Graph_0_5, [], compView_0);
        compView_0.create(this._Graph_0_5, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_Graph_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.EdgeService) && (0 === requestNodeIndex))) {
            return this._EdgeService_0_4;
        }
        if (((token === import4.Graph) && (0 === requestNodeIndex))) {
            return this._Graph_0_5;
        }
        return notFoundResult;
    };
    _View_Graph_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Graph_0_5.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_Graph_Host0;
}(import1.AppView));
function viewFactory_Graph_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Graph_Host === null)) {
        (renderType_Graph_Host = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.None, [], {}));
    }
    return new _View_Graph_Host0(viewUtils, parentInjector, declarationEl);
}
export var GraphNgFactory = new import11.ComponentFactory('graph', viewFactory_Graph_Host0, import4.Graph);
var styles_Graph = [];
var renderType_Graph = null;
var _View_Graph0 = (function (_super) {
    __extends(_View_Graph0, _super);
    function _View_Graph0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Graph0, renderType_Graph, import7.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import8.ChangeDetectorStatus.CheckAlways);
    }
    _View_Graph0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'div', null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'h1', null);
        this._text_3 = this.renderer.createText(this._el_2, 'Create a Graph', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_5 = this.renderer.createElement(this._el_0, 'div', null);
        this.renderer.setElementAttribute(this._el_5, 'class', 'alert alert-info');
        this.renderer.setElementAttribute(this._el_5, 'role', 'alert');
        this._text_6 = this.renderer.createText(this._el_5, '\n        Click any pair of nodes to connect them with an edge\n    ', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_8 = this.renderer.createElement(this._el_0, 'vertex', null);
        this._appEl_8 = new import2.AppElement(8, 0, this, this._el_8);
        var compView_8 = import13.viewFactory_Vertex0(this.viewUtils, this.injector(8), this._appEl_8);
        this._Vertex_8_5 = new import12.Vertex(this.parentInjector.get(import3.EdgeService), this._appEl_8.vcRef);
        this._appEl_8.initComponent(this._Vertex_8_5, [], compView_8);
        compView_8.create(this._Vertex_8_5, [], null);
        this._text_9 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_10 = this.renderer.createElement(this._el_0, 'table', null);
        this.renderer.setElementAttribute(this._el_10, 'class', 'graph-table');
        this._text_11 = this.renderer.createText(this._el_10, '\n        ', null);
        this._el_12 = this.renderer.createElement(this._el_10, 'tbody', null);
        this._el_13 = this.renderer.createElement(this._el_12, 'tr', null);
        this._text_14 = this.renderer.createText(this._el_13, '\n            ', null);
        this._el_15 = this.renderer.createElement(this._el_13, 'td', null);
        this._el_16 = this.renderer.createElement(this._el_15, 'vertex', null);
        this._appEl_16 = new import2.AppElement(16, 15, this, this._el_16);
        var compView_16 = import13.viewFactory_Vertex0(this.viewUtils, this.injector(16), this._appEl_16);
        this._Vertex_16_5 = new import12.Vertex(this.parentInjector.get(import3.EdgeService), this._appEl_16.vcRef);
        this._appEl_16.initComponent(this._Vertex_16_5, [], compView_16);
        compView_16.create(this._Vertex_16_5, [], null);
        this._el_17 = this.renderer.createElement(this._el_13, 'td', null);
        this._el_18 = this.renderer.createElement(this._el_17, 'vertex', null);
        this._appEl_18 = new import2.AppElement(18, 17, this, this._el_18);
        var compView_18 = import13.viewFactory_Vertex0(this.viewUtils, this.injector(18), this._appEl_18);
        this._Vertex_18_5 = new import12.Vertex(this.parentInjector.get(import3.EdgeService), this._appEl_18.vcRef);
        this._appEl_18.initComponent(this._Vertex_18_5, [], compView_18);
        compView_18.create(this._Vertex_18_5, [], null);
        this._text_19 = this.renderer.createText(this._el_13, '\n        ', null);
        this._el_20 = this.renderer.createElement(this._el_12, 'tr', null);
        this._text_21 = this.renderer.createText(this._el_20, '\n            ', null);
        this._el_22 = this.renderer.createElement(this._el_20, 'td', null);
        this._el_23 = this.renderer.createElement(this._el_22, 'vertex', null);
        this._appEl_23 = new import2.AppElement(23, 22, this, this._el_23);
        var compView_23 = import13.viewFactory_Vertex0(this.viewUtils, this.injector(23), this._appEl_23);
        this._Vertex_23_5 = new import12.Vertex(this.parentInjector.get(import3.EdgeService), this._appEl_23.vcRef);
        this._appEl_23.initComponent(this._Vertex_23_5, [], compView_23);
        compView_23.create(this._Vertex_23_5, [], null);
        this._el_24 = this.renderer.createElement(this._el_20, 'td', null);
        this._el_25 = this.renderer.createElement(this._el_24, 'vertex', null);
        this._appEl_25 = new import2.AppElement(25, 24, this, this._el_25);
        var compView_25 = import13.viewFactory_Vertex0(this.viewUtils, this.injector(25), this._appEl_25);
        this._Vertex_25_5 = new import12.Vertex(this.parentInjector.get(import3.EdgeService), this._appEl_25.vcRef);
        this._appEl_25.initComponent(this._Vertex_25_5, [], compView_25);
        compView_25.create(this._Vertex_25_5, [], null);
        this._text_26 = this.renderer.createText(this._el_20, '\n        ', null);
        this._text_27 = this.renderer.createText(this._el_12, '\n        ', null);
        this._el_28 = this.renderer.createElement(this._el_12, 'tr', null);
        this._text_29 = this.renderer.createText(this._el_28, '\n            ', null);
        this._el_30 = this.renderer.createElement(this._el_28, 'td', null);
        this._el_31 = this.renderer.createElement(this._el_30, 'vertex', null);
        this._appEl_31 = new import2.AppElement(31, 30, this, this._el_31);
        var compView_31 = import13.viewFactory_Vertex0(this.viewUtils, this.injector(31), this._appEl_31);
        this._Vertex_31_5 = new import12.Vertex(this.parentInjector.get(import3.EdgeService), this._appEl_31.vcRef);
        this._appEl_31.initComponent(this._Vertex_31_5, [], compView_31);
        compView_31.create(this._Vertex_31_5, [], null);
        this._el_32 = this.renderer.createElement(this._el_28, 'td', null);
        this._el_33 = this.renderer.createElement(this._el_32, 'vertex', null);
        this._appEl_33 = new import2.AppElement(33, 32, this, this._el_33);
        var compView_33 = import13.viewFactory_Vertex0(this.viewUtils, this.injector(33), this._appEl_33);
        this._Vertex_33_5 = new import12.Vertex(this.parentInjector.get(import3.EdgeService), this._appEl_33.vcRef);
        this._appEl_33.initComponent(this._Vertex_33_5, [], compView_33);
        compView_33.create(this._Vertex_33_5, [], null);
        this._el_34 = this.renderer.createElement(this._el_28, 'td', null);
        this._el_35 = this.renderer.createElement(this._el_34, 'vertex', null);
        this._appEl_35 = new import2.AppElement(35, 34, this, this._el_35);
        var compView_35 = import13.viewFactory_Vertex0(this.viewUtils, this.injector(35), this._appEl_35);
        this._Vertex_35_5 = new import12.Vertex(this.parentInjector.get(import3.EdgeService), this._appEl_35.vcRef);
        this._appEl_35.initComponent(this._Vertex_35_5, [], compView_35);
        compView_35.create(this._Vertex_35_5, [], null);
        this._text_36 = this.renderer.createText(this._el_28, '\n        ', null);
        this._text_37 = this.renderer.createText(this._el_12, '\n    ', null);
        this._text_38 = this.renderer.createText(this._el_0, '\n', null);
        this._text_39 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_40 = this.renderer.createElement(parentRenderNode, 'h4', null);
        this._el_41 = this.renderer.createElement(this._el_40, 'a', null);
        this.renderer.setElementAttribute(this._el_41, 'href', 'http://www.syntaxsuccess.com/viewarticle/loading-components-dynamically-in-angular-2.0');
        this._text_42 = this.renderer.createText(this._el_41, 'Read more here', null);
        this._expr_0 = import8.UNINITIALIZED;
        this._expr_1 = import8.UNINITIALIZED;
        this._expr_2 = import8.UNINITIALIZED;
        this._expr_3 = import8.UNINITIALIZED;
        this._expr_4 = import8.UNINITIALIZED;
        this._expr_5 = import8.UNINITIALIZED;
        this._expr_6 = import8.UNINITIALIZED;
        this._expr_7 = import8.UNINITIALIZED;
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
    };
    _View_Graph0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import12.Vertex) && (8 === requestNodeIndex))) {
            return this._Vertex_8_5;
        }
        if (((token === import12.Vertex) && (16 === requestNodeIndex))) {
            return this._Vertex_16_5;
        }
        if (((token === import12.Vertex) && (18 === requestNodeIndex))) {
            return this._Vertex_18_5;
        }
        if (((token === import12.Vertex) && (23 === requestNodeIndex))) {
            return this._Vertex_23_5;
        }
        if (((token === import12.Vertex) && (25 === requestNodeIndex))) {
            return this._Vertex_25_5;
        }
        if (((token === import12.Vertex) && (31 === requestNodeIndex))) {
            return this._Vertex_31_5;
        }
        if (((token === import12.Vertex) && (33 === requestNodeIndex))) {
            return this._Vertex_33_5;
        }
        if (((token === import12.Vertex) && (35 === requestNodeIndex))) {
            return this._Vertex_35_5;
        }
        return notFoundResult;
    };
    _View_Graph0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0 = 'A';
        if (import5.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._Vertex_8_5.value = currVal_0;
            this._expr_0 = currVal_0;
        }
        var currVal_1 = 'B';
        if (import5.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this._Vertex_16_5.value = currVal_1;
            this._expr_1 = currVal_1;
        }
        var currVal_2 = 'C';
        if (import5.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this._Vertex_18_5.value = currVal_2;
            this._expr_2 = currVal_2;
        }
        var currVal_3 = 'E';
        if (import5.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this._Vertex_23_5.value = currVal_3;
            this._expr_3 = currVal_3;
        }
        var currVal_4 = 'F';
        if (import5.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this._Vertex_25_5.value = currVal_4;
            this._expr_4 = currVal_4;
        }
        var currVal_5 = 'G';
        if (import5.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this._Vertex_31_5.value = currVal_5;
            this._expr_5 = currVal_5;
        }
        var currVal_6 = 'H';
        if (import5.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this._Vertex_33_5.value = currVal_6;
            this._expr_6 = currVal_6;
        }
        var currVal_7 = 'I';
        if (import5.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this._Vertex_35_5.value = currVal_7;
            this._expr_7 = currVal_7;
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_Graph0;
}(import1.AppView));
export function viewFactory_Graph0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Graph === null)) {
        (renderType_Graph = viewUtils.createRenderComponentType('/Users/tor/Development/angular-2-samples/components/algorithms/graph/graph.html', 0, import10.ViewEncapsulation.None, styles_Graph, {}));
    }
    return new _View_Graph0(viewUtils, parentInjector, declarationEl);
}
