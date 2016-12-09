import * as import0 from '../../../components/about/about';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import9 from '@angular/router/src/router';
import * as import10 from '@angular/router/src/router_state';
import * as import11 from '@angular/common/src/location/location_strategy';
import * as import12 from '@angular/router/src/directives/router_link';
export class Wrapper_About {
    constructor() {
        this._changed = false;
        this.context = new import0.About();
    }
    ngOnDetach(view, componentView, el) {
    }
    ngOnDestroy() {
    }
    ngDoCheck(view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
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
var renderType_About_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
class View_About_Host0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_About_Host0, renderType_About_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'about', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_About0(this.viewUtils, this, 0, this._el_0);
        this._About_0_3 = new Wrapper_About();
        this.compView_0.create(this._About_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._About_0_3.context);
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.About) && (0 === requestNodeIndex))) {
            return this._About_0_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._About_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    }
    destroyInternal() {
        this.compView_0.destroy();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
export const AboutNgFactory = new import7.ComponentFactory('about', View_About_Host0, import0.About);
const styles_About = [];
var renderType_About = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_About, {});
export class View_About0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_About0, renderType_About, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
        this._arr_27 = import3.pureProxy1((p0) => {
            return [p0];
        });
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'container'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'h1', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, 'Welcome', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_0, 'p', import3.EMPTY_INLINE_ARRAY, null);
        this._text_6 = this.renderer.createText(this._el_5, '\n        This is a live demo of my Angular 2.0 sample components.\n    ', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_0, 'p', import3.EMPTY_INLINE_ARRAY, null);
        this._text_9 = this.renderer.createText(this._el_8, '\n        I hope you will find these ', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_8, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._RouterLinkWithHref_10_3 = new import8.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import9.Router, this.parentIndex), this.parentView.injectorGet(import10.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import11.LocationStrategy, this.parentIndex));
        this._text_11 = this.renderer.createText(this._el_10, 'demos', null);
        this._text_12 = this.renderer.createText(this._el_8, ' useful and educational. Stay tuned for more progress soon.\n        Don\'t hesitate to tweet me at @helgevold with suggestions for more components.\n    ', null);
        this._text_13 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_14 = import3.createRenderElement(this.renderer, this._el_0, 'p', import3.EMPTY_INLINE_ARRAY, null);
        this._text_15 = this.renderer.createText(this._el_14, '\n        Click ', null);
        this._el_16 = import3.createRenderElement(this.renderer, this._el_14, 'a', new import3.InlineArray2(2, 'href', 'http://www.syntaxsuccess.com/angular-2-articles'), null);
        this._text_17 = this.renderer.createText(this._el_16, 'here', null);
        this._text_18 = this.renderer.createText(this._el_14, ' for a full list of my Angular 2.0 articles.\n    ', null);
        this._text_19 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_20 = import3.createRenderElement(this.renderer, this._el_0, 'p', import3.EMPTY_INLINE_ARRAY, null);
        this._text_21 = this.renderer.createText(this._el_20, '\n        The source code for the full set of components is available on ', null);
        this._el_22 = import3.createRenderElement(this.renderer, this._el_20, 'a', new import3.InlineArray2(2, 'href', 'https://github.com/thelgevold/angular-2-samples'), null);
        this._text_23 = this.renderer.createText(this._el_22, 'GitHub', null);
        this._text_24 = this.renderer.createText(this._el_20, '\n    ', null);
        this._text_25 = this.renderer.createText(this._el_0, '\n\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_10, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_10));
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
        ]), [disposable_0]);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import12.RouterLinkWithHref) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 11)))) {
            return this._RouterLinkWithHref_10_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_10_0_0 = this._arr_27('/Demo/Spreadsheet');
        this._RouterLinkWithHref_10_3.check_routerLink(currVal_10_0_0, throwOnChange, false);
        this._RouterLinkWithHref_10_3.ngDoCheck(this, this._el_10, throwOnChange);
        this._RouterLinkWithHref_10_3.checkHost(this, this, this._el_10, throwOnChange);
    }
    destroyInternal() {
        this._RouterLinkWithHref_10_3.ngOnDestroy();
    }
    handleEvent_10(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_10_3.handleEvent(eventName, $event) && result);
        return result;
    }
}
