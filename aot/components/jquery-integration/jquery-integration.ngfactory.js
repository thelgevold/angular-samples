import * as import0 from '../../../components/jquery-integration/jquery-integration';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/linker/element_ref';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
export class Wrapper_JqueryIntegration {
    constructor(p0) {
        this.changed = false;
        this.context = new import0.JqueryIntegration(p0);
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
var renderType_JqueryIntegration_Host = null;
class _View_JqueryIntegration_Host0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_JqueryIntegration_Host0, renderType_JqueryIntegration_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer, 'jquery-integration', import4.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_JqueryIntegration0(this.viewUtils, this.injector(0), this._appEl_0);
        this._JqueryIntegration_0_4 = new Wrapper_JqueryIntegration(new import8.ElementRef(this._el_0));
        this._appEl_0.initComponent(this._JqueryIntegration_0_4.context, [], compView_0);
        compView_0.create(this._JqueryIntegration_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.JqueryIntegration) && (0 === requestNodeIndex))) {
            return this._JqueryIntegration_0_4.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._JqueryIntegration_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._JqueryIntegration_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
}
function viewFactory_JqueryIntegration_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_JqueryIntegration_Host === null)) {
        (renderType_JqueryIntegration_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_JqueryIntegration_Host0(viewUtils, parentInjector, declarationEl);
}
export const JqueryIntegrationNgFactory = new import10.ComponentFactory('jquery-integration', viewFactory_JqueryIntegration_Host0, import0.JqueryIntegration);
const styles_JqueryIntegration = [];
var renderType_JqueryIntegration = null;
class _View_JqueryIntegration0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_JqueryIntegration0, renderType_JqueryIntegration, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = import4.createRenderElement(this.renderer, parentRenderNode, 'h1', import4.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, 'Integrating jQuery with Angular 2.0', null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_3 = import4.createRenderElement(this.renderer, parentRenderNode, 'div', new import4.InlineArray2(2, 'class', 'moving-box'), null);
        this._text_4 = this.renderer.createText(this._el_3, '\n    Drag this box around\n', null);
        this._text_5 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_6 = import4.createRenderElement(this.renderer, parentRenderNode, 'h4', import4.EMPTY_INLINE_ARRAY, null);
        this._el_7 = import4.createRenderElement(this.renderer, this._el_6, 'a', new import4.InlineArray2(2, 'href', 'http://www.syntaxsuccess.com/viewarticle/using-jquery-with-angular-2.0'), null);
        this._text_8 = this.renderer.createText(this._el_7, 'Read more here', null);
        this.init([], [
            this._el_0,
            this._text_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._text_5,
            this._el_6,
            this._el_7,
            this._text_8
        ], [], []);
        return null;
    }
}
export function viewFactory_JqueryIntegration0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_JqueryIntegration === null)) {
        (renderType_JqueryIntegration = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, styles_JqueryIntegration, {}));
    }
    return new _View_JqueryIntegration0(viewUtils, parentInjector, declarationEl);
}
