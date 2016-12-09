import * as import0 from '../../../components/react-integration/angular-2-host';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
export class Wrapper_Angular2Host {
    constructor() {
        this._changed = false;
        this.context = new import0.Angular2Host();
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
var renderType_Angular2Host_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
class View_Angular2Host_Host0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_Angular2Host_Host0, renderType_Angular2Host_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'angular-2-host', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_Angular2Host0(this.viewUtils, this, 0, this._el_0);
        this._Angular2Host_0_3 = new Wrapper_Angular2Host();
        this.compView_0.create(this._Angular2Host_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._Angular2Host_0_3.context);
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.Angular2Host) && (0 === requestNodeIndex))) {
            return this._Angular2Host_0_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._Angular2Host_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    }
    destroyInternal() {
        this.compView_0.destroy();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
export const Angular2HostNgFactory = new import7.ComponentFactory('angular-2-host', View_Angular2Host_Host0, import0.Angular2Host);
const styles_Angular2Host = [];
var renderType_Angular2Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_Angular2Host, {});
export class View_Angular2Host0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_Angular2Host0, renderType_Angular2Host, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'h1', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, 'Integrating React with Angular 2.0', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_0, 'p', import3.EMPTY_INLINE_ARRAY, null);
        this._text_6 = this.renderer.createText(this._el_5, 'This component integrates a FLUX based React component with Angular 2.0.\n       The treeview supports expanding and collapsing of nodes. Click the "icon" next to the node text to expand or\n       collapse a node.\n    ', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'id', 'react-tree-view'), null);
        this._text_9 = this.renderer.createText(this._el_0, '\n', null);
        this._text_10 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_11 = import3.createRenderElement(this.renderer, parentRenderNode, 'h4', import3.EMPTY_INLINE_ARRAY, null);
        this._el_12 = import3.createRenderElement(this.renderer, this._el_11, 'a', new import3.InlineArray2(2, 'href', 'http://www.syntaxsuccess.com/viewarticle/integrating-react-with-angular-2.0'), null);
        this._text_13 = this.renderer.createText(this._el_12, 'Read more here', null);
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
            this._text_10,
            this._el_11,
            this._el_12,
            this._text_13
        ]), null);
        return null;
    }
}
