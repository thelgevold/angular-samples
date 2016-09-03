import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../../components/algorithms/graph/vertex';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '../../../../components/algorithms/graph/edge-service';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '@angular/core/src/linker/query_list';
import * as import12 from '@angular/core/src/linker/element_ref';
var renderType_Vertex_Host = null;
class _View_Vertex_Host0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_Vertex_Host0, renderType_Vertex_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('vertex', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_Vertex0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Vertex_0_5 = new import3.Vertex(this.parentInjector.get(import8.EdgeService), this._appEl_0.vcRef);
        this._appEl_0.initComponent(this._Vertex_0_5, [], compView_0);
        compView_0.create(this._Vertex_0_5, this.projectableNodes, null);
        this.init([].concat([this._appEl_0]), [this._el_0], [], []);
        return this._appEl_0;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import3.Vertex) && (0 === requestNodeIndex))) {
            return this._Vertex_0_5;
        }
        return notFoundResult;
    }
}
function viewFactory_Vertex_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Vertex_Host === null)) {
        (renderType_Vertex_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_Vertex_Host0(viewUtils, parentInjector, declarationEl);
}
export const VertexNgFactory = new import10.ComponentFactory('vertex', viewFactory_Vertex_Host0, import3.Vertex);
const styles_Vertex = [];
var renderType_Vertex = null;
class _View_Vertex0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_Vertex0, renderType_Vertex, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._viewQuery_vertex_0 = new import11.QueryList();
        this._el_0 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'vertex');
        this._el_1 = this.renderer.createElement(this._el_0, 'span', null);
        this.renderer.setElementAttribute(this._el_1, 'class', 'vertex-text');
        this._text_2 = this.renderer.createText(this._el_1, '', null);
        var disposable_0 = this.renderer.listen(this._el_0, 'click', this.eventHandler(this._handle_click_0_0.bind(this)));
        this._expr_1 = import7.UNINITIALIZED;
        this._viewQuery_vertex_0.reset([new import12.ElementRef(this._el_0)]);
        this.context.element = this._viewQuery_vertex_0.first;
        this.init([], [
            this._el_0,
            this._el_1,
            this._text_2
        ], [disposable_0], []);
        return null;
    }
    detectChangesInternal(throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        const currVal_1 = import4.interpolate(1, '', this.context.value, '');
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setText(this._text_2, currVal_1);
            this._expr_1 = currVal_1;
        }
        this.detectViewChildrenChanges(throwOnChange);
    }
    _handle_click_0_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this.context.setCoordinates() !== false);
        return (true && pd_0);
    }
}
export function viewFactory_Vertex0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Vertex === null)) {
        (renderType_Vertex = viewUtils.createRenderComponentType('/Users/tor/Development/angular-2-samples/components/algorithms/graph/vertex.ts class Vertex - inline template', 0, import9.ViewEncapsulation.None, styles_Vertex, {}));
    }
    return new _View_Vertex0(viewUtils, parentInjector, declarationEl);
}
