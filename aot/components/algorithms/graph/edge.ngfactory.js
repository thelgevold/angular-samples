import * as import0 from '../../../../components/algorithms/graph/edge';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '../../../node_modules/@angular/common/src/directives/ng_style.ngfactory';
import * as import11 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import12 from '@angular/core/src/linker/element_ref';
import * as import13 from '@angular/common/src/directives/ng_style';
export class Wrapper_Edge {
    constructor() {
        this.changed = false;
        this.context = new import0.Edge();
    }
    detectChangesInInputProps(view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    }
    detectChangesInHostProps(view, el, throwOnChange) {
    }
}
var renderType_Edge_Host = null;
class _View_Edge_Host0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_Edge_Host0, renderType_Edge_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer, 'edge', import4.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_Edge0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Edge_0_4 = new Wrapper_Edge();
        this._appEl_0.initComponent(this._Edge_0_4.context, [], compView_0);
        compView_0.create(this._Edge_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.Edge) && (0 === requestNodeIndex))) {
            return this._Edge_0_4.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._Edge_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._Edge_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
}
function viewFactory_Edge_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Edge_Host === null)) {
        (renderType_Edge_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_Edge_Host0(viewUtils, parentInjector, declarationEl);
}
export const EdgeNgFactory = new import9.ComponentFactory('edge', viewFactory_Edge_Host0, import0.Edge);
const styles_Edge = [];
var renderType_Edge = null;
class _View_Edge0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_Edge0, renderType_Edge, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = import4.createRenderElement(this.renderer, parentRenderNode, 'div', new import4.InlineArray2(2, 'class', 'edge'), null);
        this._NgStyle_0_3 = new import10.Wrapper_NgStyle(this.parentInjector.get(import11.KeyValueDiffers), new import12.ElementRef(this._el_0), this.renderer);
        this.init([], [this._el_0], [], []);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import13.NgStyle) && (0 === requestNodeIndex))) {
            return this._NgStyle_0_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_0_0_0 = this.context.style;
        this._NgStyle_0_3.check_ngStyle(currVal_0_0_0, throwOnChange, false);
        this._NgStyle_0_3.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._NgStyle_0_3.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
}
export function viewFactory_Edge0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Edge === null)) {
        (renderType_Edge = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, styles_Edge, {}));
    }
    return new _View_Edge0(viewUtils, parentInjector, declarationEl);
}
