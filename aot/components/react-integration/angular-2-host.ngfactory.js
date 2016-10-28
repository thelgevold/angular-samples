import * as import0 from '../../../components/react-integration/angular-2-host';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
export class Wrapper_Angular2Host {
    constructor() {
        this.changed = false;
        this.context = new import0.Angular2Host();
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
var renderType_Angular2Host_Host = null;
class _View_Angular2Host_Host0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_Angular2Host_Host0, renderType_Angular2Host_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer, 'angular-2-host', import4.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_Angular2Host0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Angular2Host_0_4 = new Wrapper_Angular2Host();
        this._appEl_0.initComponent(this._Angular2Host_0_4.context, [], compView_0);
        compView_0.create(this._Angular2Host_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.Angular2Host) && (0 === requestNodeIndex))) {
            return this._Angular2Host_0_4.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._Angular2Host_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._Angular2Host_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
}
function viewFactory_Angular2Host_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Angular2Host_Host === null)) {
        (renderType_Angular2Host_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_Angular2Host_Host0(viewUtils, parentInjector, declarationEl);
}
export const Angular2HostNgFactory = new import9.ComponentFactory('angular-2-host', viewFactory_Angular2Host_Host0, import0.Angular2Host);
const styles_Angular2Host = [];
var renderType_Angular2Host = null;
class _View_Angular2Host0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_Angular2Host0, renderType_Angular2Host, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = import4.createRenderElement(this.renderer, parentRenderNode, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import4.createRenderElement(this.renderer, this._el_0, 'h1', import4.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, 'Integrating React with Angular 2.0', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_5 = import4.createRenderElement(this.renderer, this._el_0, 'p', import4.EMPTY_INLINE_ARRAY, null);
        this._text_6 = this.renderer.createText(this._el_5, 'This component integrates a FLUX based React component with Angular 2.0.\n       The treeview supports expanding and collapsing of nodes. Click the "icon" next to the node text to expand or\n       collapse a node.\n    ', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_8 = import4.createRenderElement(this.renderer, this._el_0, 'div', new import4.InlineArray2(2, 'id', 'react-tree-view'), null);
        this._text_9 = this.renderer.createText(this._el_0, '\n', null);
        this._text_10 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_11 = import4.createRenderElement(this.renderer, parentRenderNode, 'h4', import4.EMPTY_INLINE_ARRAY, null);
        this._el_12 = import4.createRenderElement(this.renderer, this._el_11, 'a', new import4.InlineArray2(2, 'href', 'http://www.syntaxsuccess.com/viewarticle/integrating-react-with-angular-2.0'), null);
        this._text_13 = this.renderer.createText(this._el_12, 'Read more here', null);
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
            this._text_10,
            this._el_11,
            this._el_12,
            this._text_13
        ], [], []);
        return null;
    }
}
export function viewFactory_Angular2Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Angular2Host === null)) {
        (renderType_Angular2Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, styles_Angular2Host, {}));
    }
    return new _View_Angular2Host0(viewUtils, parentInjector, declarationEl);
}
