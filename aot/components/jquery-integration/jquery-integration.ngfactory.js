import * as import0 from '../../../components/jquery-integration/jquery-integration';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/core/src/linker/element_ref';
export class Wrapper_JqueryIntegration {
    constructor(p0) {
        this._changed = false;
        this.context = new import0.JqueryIntegration(p0);
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
var renderType_JqueryIntegration_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
class View_JqueryIntegration_Host0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_JqueryIntegration_Host0, renderType_JqueryIntegration_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'jquery-integration', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_JqueryIntegration0(this.viewUtils, this, 0, this._el_0);
        this._JqueryIntegration_0_3 = new Wrapper_JqueryIntegration(new import8.ElementRef(this._el_0));
        this.compView_0.create(this._JqueryIntegration_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._JqueryIntegration_0_3.context);
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.JqueryIntegration) && (0 === requestNodeIndex))) {
            return this._JqueryIntegration_0_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._JqueryIntegration_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    }
    destroyInternal() {
        this.compView_0.destroy();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
export const JqueryIntegrationNgFactory = new import7.ComponentFactory('jquery-integration', View_JqueryIntegration_Host0, import0.JqueryIntegration);
const styles_JqueryIntegration = [];
var renderType_JqueryIntegration = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_JqueryIntegration, {});
export class View_JqueryIntegration0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_JqueryIntegration0, renderType_JqueryIntegration, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'h1', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, 'Integrating jQuery with Angular 2.0', null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_3 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'moving-box'), null);
        this._text_4 = this.renderer.createText(this._el_3, '\n    Drag this box around\n', null);
        this._text_5 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_6 = import3.createRenderElement(this.renderer, parentRenderNode, 'h4', import3.EMPTY_INLINE_ARRAY, null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_6, 'a', new import3.InlineArray2(2, 'href', 'http://www.syntaxsuccess.com/viewarticle/using-jquery-with-angular-2.0'), null);
        this._text_8 = this.renderer.createText(this._el_7, 'Read more here', null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._text_5,
            this._el_6,
            this._el_7,
            this._text_8
        ]), null);
        return null;
    }
}
