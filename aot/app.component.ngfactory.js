import * as import0 from '../app.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/common/src/location/location';
import * as import9 from './node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import10 from '@angular/core/src/linker/view_container';
import * as import11 from './node_modules/@angular/router/src/directives/router_outlet.ngfactory';
import * as import12 from '@angular/core/src/change_detection/change_detection_util';
import * as import13 from '@angular/router/src/router';
import * as import14 from '@angular/router/src/router_state';
import * as import15 from '@angular/common/src/location/location_strategy';
import * as import16 from '@angular/router/src/router_outlet_map';
import * as import17 from '@angular/core/src/linker/component_factory_resolver';
import * as import18 from '@angular/router/src/directives/router_link';
import * as import19 from '@angular/router/src/directives/router_outlet';
export class Wrapper_AppComponent {
    constructor(p0) {
        this._changed = false;
        this.context = new import0.AppComponent(p0);
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
var renderType_AppComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
class View_AppComponent_Host0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_AppComponent_Host0, renderType_AppComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'demo-app', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_AppComponent0(this.viewUtils, this, 0, this._el_0);
        this._AppComponent_0_3 = new Wrapper_AppComponent(this.injectorGet(import8.Location, this.parentIndex));
        this.compView_0.create(this._AppComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._AppComponent_0_3.context);
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.AppComponent) && (0 === requestNodeIndex))) {
            return this._AppComponent_0_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._AppComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    }
    destroyInternal() {
        this.compView_0.destroy();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
export const AppComponentNgFactory = new import7.ComponentFactory('demo-app', View_AppComponent_Host0, import0.AppComponent);
const styles_AppComponent = [];
var renderType_AppComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_AppComponent, {});
export class View_AppComponent0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_AppComponent0, renderType_AppComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
        this._expr_53 = import12.UNINITIALIZED;
        this._arr_54 = import3.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_55 = import12.UNINITIALIZED;
        this._arr_56 = import3.pureProxy1((p0) => {
            return [p0];
        });
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'container'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'nav', new import3.InlineArray2(2, 'class', 'navbar navbar-default'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'div', new import3.InlineArray2(2, 'class', 'container-fluid'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n            ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_4, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_7 = this.renderer.createText(this._el_6, '\n                ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_6, 'ul', new import3.InlineArray2(2, 'class', 'nav navbar-nav'), null);
        this._text_9 = this.renderer.createText(this._el_8, '\n                    ', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_8, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._el_11 = import3.createRenderElement(this.renderer, this._el_10, 'a', new import3.InlineArray4(4, 'class', 'link', 'href', 'http://www.syntaxsuccess.com'), null);
        this._text_12 = this.renderer.createText(this._el_11, 'Home', null);
        this._text_13 = this.renderer.createText(this._el_8, '\n                    ', null);
        this._el_14 = import3.createRenderElement(this.renderer, this._el_8, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._el_15 = import3.createRenderElement(this.renderer, this._el_14, 'a', new import3.InlineArray2(2, 'class', 'link'), null);
        this._RouterLinkWithHref_15_3 = new import9.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import13.Router, this.parentIndex), this.parentView.injectorGet(import14.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import15.LocationStrategy, this.parentIndex));
        this._text_16 = this.renderer.createText(this._el_15, 'About', null);
        this._text_17 = this.renderer.createText(this._el_8, '\n                    ', null);
        this._el_18 = import3.createRenderElement(this.renderer, this._el_8, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._el_19 = import3.createRenderElement(this.renderer, this._el_18, 'a', new import3.InlineArray2(2, 'class', 'link'), null);
        this._RouterLinkWithHref_19_3 = new import9.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import13.Router, this.parentIndex), this.parentView.injectorGet(import14.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import15.LocationStrategy, this.parentIndex));
        this._text_20 = this.renderer.createText(this._el_19, 'Demos', null);
        this._text_21 = this.renderer.createText(this._el_8, '\n                    ', null);
        this._text_22 = this.renderer.createText(this._el_8, '\n                    ', null);
        this._el_23 = import3.createRenderElement(this.renderer, this._el_8, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._el_24 = import3.createRenderElement(this.renderer, this._el_23, 'a', new import3.InlineArray4(4, 'class', 'link', 'href', 'components/web-workers/web-worker-demo.html'), null);
        this._text_25 = this.renderer.createText(this._el_24, 'Web Workers', null);
        this._text_26 = this.renderer.createText(this._el_8, '\n                    ', null);
        this._el_27 = import3.createRenderElement(this.renderer, this._el_8, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._el_28 = import3.createRenderElement(this.renderer, this._el_27, 'a', new import3.InlineArray4(4, 'class', 'link', 'href', 'upgrade.html'), null);
        this._text_29 = this.renderer.createText(this._el_28, 'NgUpgrade', null);
        this._text_30 = this.renderer.createText(this._el_8, '\n                    ', null);
        this._el_31 = import3.createRenderElement(this.renderer, this._el_8, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._el_32 = import3.createRenderElement(this.renderer, this._el_31, 'a', new import3.InlineArray4(4, 'class', 'link', 'href', 'i18n.html'), null);
        this._text_33 = this.renderer.createText(this._el_32, 'i18n', null);
        this._text_34 = this.renderer.createText(this._el_8, '\n                ', null);
        this._text_35 = this.renderer.createText(this._el_6, '\n            ', null);
        this._text_36 = this.renderer.createText(this._el_4, '\n        ', null);
        this._text_37 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_38 = this.renderer.createText(this._el_0, '\n', null);
        this._text_39 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_40 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'container'), null);
        this._text_41 = this.renderer.createText(this._el_40, '\n    ', null);
        this._el_42 = import3.createRenderElement(this.renderer, this._el_40, 'router-outlet', new import3.InlineArray2(2, 'name', 'msg'), null);
        this._vc_42 = new import10.ViewContainer(42, 40, this, this._el_42);
        this._RouterOutlet_42_5 = new import11.Wrapper_RouterOutlet(this.parentView.injectorGet(import16.RouterOutletMap, this.parentIndex), this._vc_42.vcRef, this.parentView.injectorGet(import17.ComponentFactoryResolver, this.parentIndex), 'msg');
        this._text_43 = this.renderer.createText(this._el_40, '\n', null);
        this._text_44 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_45 = import3.createRenderElement(this.renderer, parentRenderNode, 'router-outlet', import3.EMPTY_INLINE_ARRAY, null);
        this._vc_45 = new import10.ViewContainer(45, null, this, this._el_45);
        this._RouterOutlet_45_5 = new import11.Wrapper_RouterOutlet(this.parentView.injectorGet(import16.RouterOutletMap, this.parentIndex), this._vc_45.vcRef, this.parentView.injectorGet(import17.ComponentFactoryResolver, this.parentIndex), null);
        this._text_46 = this.renderer.createText(parentRenderNode, '\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_15, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_15));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_19, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_19));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._el_10,
            this._el_11,
            this._text_12,
            this._text_13,
            this._el_14,
            this._el_15,
            this._text_16,
            this._text_17,
            this._el_18,
            this._el_19,
            this._text_20,
            this._text_21,
            this._text_22,
            this._el_23,
            this._el_24,
            this._text_25,
            this._text_26,
            this._el_27,
            this._el_28,
            this._text_29,
            this._text_30,
            this._el_31,
            this._el_32,
            this._text_33,
            this._text_34,
            this._text_35,
            this._text_36,
            this._text_37,
            this._text_38,
            this._text_39,
            this._el_40,
            this._text_41,
            this._el_42,
            this._text_43,
            this._text_44,
            this._el_45,
            this._text_46
        ]), [
            disposable_0,
            disposable_1
        ]);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import18.RouterLinkWithHref) && ((15 <= requestNodeIndex) && (requestNodeIndex <= 16)))) {
            return this._RouterLinkWithHref_15_3.context;
        }
        if (((token === import18.RouterLinkWithHref) && ((19 <= requestNodeIndex) && (requestNodeIndex <= 20)))) {
            return this._RouterLinkWithHref_19_3.context;
        }
        if (((token === import19.RouterOutlet) && (42 === requestNodeIndex))) {
            return this._RouterOutlet_42_5.context;
        }
        if (((token === import19.RouterOutlet) && (45 === requestNodeIndex))) {
            return this._RouterOutlet_45_5.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_15_0_0 = this._arr_54('/about');
        this._RouterLinkWithHref_15_3.check_routerLink(currVal_15_0_0, throwOnChange, false);
        this._RouterLinkWithHref_15_3.ngDoCheck(this, this._el_15, throwOnChange);
        const currVal_19_0_0 = this._arr_56('/demo/spreadsheet');
        this._RouterLinkWithHref_19_3.check_routerLink(currVal_19_0_0, throwOnChange, false);
        this._RouterLinkWithHref_19_3.ngDoCheck(this, this._el_19, throwOnChange);
        this._RouterOutlet_42_5.ngDoCheck(this, this._el_42, throwOnChange);
        this._RouterOutlet_45_5.ngDoCheck(this, this._el_45, throwOnChange);
        this._vc_42.detectChangesInNestedViews(throwOnChange);
        this._vc_45.detectChangesInNestedViews(throwOnChange);
        const currVal_53 = this.context.getLinkStyle('');
        if (import3.checkBinding(throwOnChange, this._expr_53, currVal_53)) {
            this.renderer.setElementClass(this._el_14, 'active', currVal_53);
            this._expr_53 = currVal_53;
        }
        this._RouterLinkWithHref_15_3.checkHost(this, this, this._el_15, throwOnChange);
        const currVal_55 = this.context.getLinkStyle('/demo');
        if (import3.checkBinding(throwOnChange, this._expr_55, currVal_55)) {
            this.renderer.setElementClass(this._el_18, 'active', currVal_55);
            this._expr_55 = currVal_55;
        }
        this._RouterLinkWithHref_19_3.checkHost(this, this, this._el_19, throwOnChange);
    }
    destroyInternal() {
        this._vc_42.destroyNestedViews();
        this._vc_45.destroyNestedViews();
        this._RouterLinkWithHref_15_3.ngOnDestroy();
        this._RouterLinkWithHref_19_3.ngOnDestroy();
        this._RouterOutlet_42_5.ngOnDestroy();
        this._RouterOutlet_45_5.ngOnDestroy();
    }
    handleEvent_15(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_15_3.handleEvent(eventName, $event) && result);
        return result;
    }
    handleEvent_19(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_19_3.handleEvent(eventName, $event) && result);
        return result;
    }
}
