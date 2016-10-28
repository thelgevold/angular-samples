import * as import0 from '../../../../components/algorithms/graph/vertex';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view_utils';
import * as import3 from '@angular/core/src/linker/view';
import * as import5 from '@angular/core/src/linker/element';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '../../../../components/algorithms/graph/edge-service';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '@angular/core/src/linker/query_list';
import * as import12 from '@angular/core/src/linker/element_ref';
export class Wrapper_Vertex {
    constructor(p0, p1) {
        this.changed = false;
        this.context = new import0.Vertex(p0, p1);
        this._expr_0 = import1.UNINITIALIZED;
    }
    check_value(currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this.changed = true;
            this.context.value = currValue;
            this._expr_0 = currValue;
        }
    }
    detectChangesInInputProps(view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    }
    detectChangesInHostProps(view, el, throwOnChange) {
    }
}
var renderType_Vertex_Host = null;
class _View_Vertex_Host0 extends import3.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_Vertex_Host0, renderType_Vertex_Host, import7.ViewType.HOST, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import2.selectOrCreateRenderHostElement(this.renderer, 'vertex', import2.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import5.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_Vertex0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Vertex_0_5 = new Wrapper_Vertex(this.parentInjector.get(import8.EdgeService), this._appEl_0.vcRef);
        this._appEl_0.initComponent(this._Vertex_0_5.context, [], compView_0);
        compView_0.create(this._Vertex_0_5.context, this.projectableNodes, null);
        this.init([].concat([this._appEl_0]), [this._el_0], [], []);
        return this._appEl_0;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.Vertex) && (0 === requestNodeIndex))) {
            return this._Vertex_0_5.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._Vertex_0_5.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._Vertex_0_5.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
}
function viewFactory_Vertex_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Vertex_Host === null)) {
        (renderType_Vertex_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_Vertex_Host0(viewUtils, parentInjector, declarationEl);
}
export const VertexNgFactory = new import10.ComponentFactory('vertex', viewFactory_Vertex_Host0, import0.Vertex);
const styles_Vertex = [];
var renderType_Vertex = null;
class _View_Vertex0 extends import3.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_Vertex0, renderType_Vertex, import7.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
        this._expr_4 = import1.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._viewQuery_vertex_0 = new import11.QueryList();
        this._el_0 = import2.createRenderElement(this.renderer, parentRenderNode, 'div', new import2.InlineArray2(2, 'class', 'vertex'), null);
        this._el_1 = import2.createRenderElement(this.renderer, this._el_0, 'span', new import2.InlineArray2(2, 'class', 'vertex-text'), null);
        this._text_2 = this.renderer.createText(this._el_1, '', null);
        var disposable_0 = this.renderer.listen(this._el_0, 'click', this.eventHandler(this._handle_click_0_0.bind(this)));
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
        const currVal_4 = import2.interpolate(1, '', this.context.value, '');
        if (import2.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setText(this._text_2, currVal_4);
            this._expr_4 = currVal_4;
        }
        this.detectViewChildrenChanges(throwOnChange);
    }
    _handle_click_0_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0_0 = (this.context.setCoordinates() !== false);
        return (true && pd_0_0);
    }
}
export function viewFactory_Vertex0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Vertex === null)) {
        (renderType_Vertex = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, styles_Vertex, {}));
    }
    return new _View_Vertex0(viewUtils, parentInjector, declarationEl);
}
