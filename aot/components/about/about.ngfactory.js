import * as import0 from '../../../components/about/about';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import11 from '@angular/router/src/router';
import * as import12 from '@angular/router/src/router_state';
import * as import13 from '@angular/common/src/location/location_strategy';
import * as import14 from '@angular/router/src/directives/router_link';
export class Wrapper_About {
    constructor() {
        this.changed = false;
        this.context = new import0.About();
    }
    detectChangesInInputProps(view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    }
    detectChangesInHostProps(view, el, throwOnChange) {
    }
}
var renderType_About_Host = null;
class _View_About_Host0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_About_Host0, renderType_About_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer, 'about', import4.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_About0(this.viewUtils, this.injector(0), this._appEl_0);
        this._About_0_4 = new Wrapper_About();
        this._appEl_0.initComponent(this._About_0_4.context, [], compView_0);
        compView_0.create(this._About_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.About) && (0 === requestNodeIndex))) {
            return this._About_0_4.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._About_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._About_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
}
function viewFactory_About_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_About_Host === null)) {
        (renderType_About_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_About_Host0(viewUtils, parentInjector, declarationEl);
}
export const AboutNgFactory = new import9.ComponentFactory('about', viewFactory_About_Host0, import0.About);
const styles_About = [];
var renderType_About = null;
class _View_About0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_About0, renderType_About, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._arr_27 = import4.pureProxy1((p0) => {
            return [p0];
        });
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = import4.createRenderElement(this.renderer, parentRenderNode, 'div', new import4.InlineArray2(2, 'class', 'container'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import4.createRenderElement(this.renderer, this._el_0, 'h1', import4.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, 'Welcome', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_5 = import4.createRenderElement(this.renderer, this._el_0, 'p', import4.EMPTY_INLINE_ARRAY, null);
        this._text_6 = this.renderer.createText(this._el_5, '\n        This is a live demo of my Angular 2.0 sample components.\n    ', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_8 = import4.createRenderElement(this.renderer, this._el_0, 'p', import4.EMPTY_INLINE_ARRAY, null);
        this._text_9 = this.renderer.createText(this._el_8, '\n        I hope you will find these ', null);
        this._el_10 = import4.createRenderElement(this.renderer, this._el_8, 'a', import4.EMPTY_INLINE_ARRAY, null);
        this._RouterLinkWithHref_10_3 = new import10.Wrapper_RouterLinkWithHref(this.parentInjector.get(import11.Router), this.parentInjector.get(import12.ActivatedRoute), this.parentInjector.get(import13.LocationStrategy));
        this._text_11 = this.renderer.createText(this._el_10, 'demos', null);
        this._text_12 = this.renderer.createText(this._el_8, ' useful and educational. Stay tuned for more progress soon.\n        Don\'t hesitate to tweet me at @helgevold with suggestions for more components.\n    ', null);
        this._text_13 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_14 = import4.createRenderElement(this.renderer, this._el_0, 'p', import4.EMPTY_INLINE_ARRAY, null);
        this._text_15 = this.renderer.createText(this._el_14, '\n        Click ', null);
        this._el_16 = import4.createRenderElement(this.renderer, this._el_14, 'a', new import4.InlineArray2(2, 'href', 'http://www.syntaxsuccess.com/angular-2-articles'), null);
        this._text_17 = this.renderer.createText(this._el_16, 'here', null);
        this._text_18 = this.renderer.createText(this._el_14, ' for a full list of my Angular 2.0 articles.\n    ', null);
        this._text_19 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_20 = import4.createRenderElement(this.renderer, this._el_0, 'p', import4.EMPTY_INLINE_ARRAY, null);
        this._text_21 = this.renderer.createText(this._el_20, '\n        The source code for the full set of components is available on ', null);
        this._el_22 = import4.createRenderElement(this.renderer, this._el_20, 'a', new import4.InlineArray2(2, 'href', 'https://github.com/thelgevold/angular-2-samples'), null);
        this._text_23 = this.renderer.createText(this._el_22, 'GitHub', null);
        this._text_24 = this.renderer.createText(this._el_20, '\n    ', null);
        this._text_25 = this.renderer.createText(this._el_0, '\n\n', null);
        var disposable_0 = this.renderer.listen(this._el_10, 'click', this.eventHandler(this._handle_click_10_0.bind(this)));
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
            this._text_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._text_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._text_24,
            this._text_25
        ], [disposable_0], []);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import14.RouterLinkWithHref) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 11)))) {
            return this._RouterLinkWithHref_10_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_10_0_0 = this._arr_27('/Demo/Spreadsheet');
        this._RouterLinkWithHref_10_3.check_routerLink(currVal_10_0_0, throwOnChange, false);
        this._RouterLinkWithHref_10_3.detectChangesInInputProps(this, this._el_10, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._RouterLinkWithHref_10_3.detectChangesInHostProps(this, this._el_10, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
    destroyInternal() {
        this._RouterLinkWithHref_10_3.context.ngOnDestroy();
    }
    _handle_click_10_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_10_0 = (this._RouterLinkWithHref_10_3.context.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_10_0);
    }
}
export function viewFactory_About0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_About === null)) {
        (renderType_About = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, styles_About, {}));
    }
    return new _View_About0(viewUtils, parentInjector, declarationEl);
}
