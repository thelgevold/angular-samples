import * as import0 from '../app.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/common/src/location/location';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from './node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import12 from './node_modules/@angular/router/src/directives/router_outlet.ngfactory';
import * as import13 from '@angular/router/src/router';
import * as import14 from '@angular/router/src/router_state';
import * as import15 from '@angular/common/src/location/location_strategy';
import * as import16 from '@angular/router/src/router_outlet_map';
import * as import17 from '@angular/core/src/linker/component_factory_resolver';
import * as import18 from '@angular/router/src/directives/router_link';
import * as import19 from '@angular/router/src/directives/router_outlet';
export class Wrapper_AppComponent {
    constructor(p0) {
        this.changed = false;
        this.context = new import0.AppComponent(p0);
    }
    detectChangesInInputProps(view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    }
    detectChangesInHostProps(view, el, throwOnChange) {
    }
}
var renderType_AppComponent_Host = null;
class _View_AppComponent_Host0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_AppComponent_Host0, renderType_AppComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer, 'demo-app', import4.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_AppComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._AppComponent_0_4 = new Wrapper_AppComponent(this.parentInjector.get(import8.Location));
        this._appEl_0.initComponent(this._AppComponent_0_4.context, [], compView_0);
        compView_0.create(this._AppComponent_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.AppComponent) && (0 === requestNodeIndex))) {
            return this._AppComponent_0_4.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._AppComponent_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._AppComponent_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
}
function viewFactory_AppComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_AppComponent_Host === null)) {
        (renderType_AppComponent_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_AppComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export const AppComponentNgFactory = new import10.ComponentFactory('demo-app', viewFactory_AppComponent_Host0, import0.AppComponent);
const styles_AppComponent = [];
var renderType_AppComponent = null;
class _View_AppComponent0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_AppComponent0, renderType_AppComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_49 = import7.UNINITIALIZED;
        this._arr_50 = import4.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_51 = import7.UNINITIALIZED;
        this._arr_52 = import4.pureProxy1((p0) => {
            return [p0];
        });
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = import4.createRenderElement(this.renderer, parentRenderNode, 'div', new import4.InlineArray2(2, 'class', 'container'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import4.createRenderElement(this.renderer, this._el_0, 'nav', new import4.InlineArray2(2, 'class', 'navbar navbar-default'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_4 = import4.createRenderElement(this.renderer, this._el_2, 'div', new import4.InlineArray2(2, 'class', 'container-fluid'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n            ', null);
        this._el_6 = import4.createRenderElement(this.renderer, this._el_4, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._text_7 = this.renderer.createText(this._el_6, '\n                ', null);
        this._el_8 = import4.createRenderElement(this.renderer, this._el_6, 'ul', new import4.InlineArray2(2, 'class', 'nav navbar-nav'), null);
        this._text_9 = this.renderer.createText(this._el_8, '\n                    ', null);
        this._el_10 = import4.createRenderElement(this.renderer, this._el_8, 'li', import4.EMPTY_INLINE_ARRAY, null);
        this._el_11 = import4.createRenderElement(this.renderer, this._el_10, 'a', new import4.InlineArray4(4, 'class', 'link', 'href', 'http://www.syntaxsuccess.com'), null);
        this._text_12 = this.renderer.createText(this._el_11, 'Home', null);
        this._text_13 = this.renderer.createText(this._el_8, '\n                    ', null);
        this._el_14 = import4.createRenderElement(this.renderer, this._el_8, 'li', import4.EMPTY_INLINE_ARRAY, null);
        this._el_15 = import4.createRenderElement(this.renderer, this._el_14, 'a', new import4.InlineArray2(2, 'class', 'link'), null);
        this._RouterLinkWithHref_15_3 = new import11.Wrapper_RouterLinkWithHref(this.parentInjector.get(import13.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._text_16 = this.renderer.createText(this._el_15, 'About', null);
        this._text_17 = this.renderer.createText(this._el_8, '\n                    ', null);
        this._el_18 = import4.createRenderElement(this.renderer, this._el_8, 'li', import4.EMPTY_INLINE_ARRAY, null);
        this._el_19 = import4.createRenderElement(this.renderer, this._el_18, 'a', new import4.InlineArray2(2, 'class', 'link'), null);
        this._RouterLinkWithHref_19_3 = new import11.Wrapper_RouterLinkWithHref(this.parentInjector.get(import13.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._text_20 = this.renderer.createText(this._el_19, 'Demos', null);
        this._text_21 = this.renderer.createText(this._el_8, '\n                    ', null);
        this._text_22 = this.renderer.createText(this._el_8, '\n                    ', null);
        this._el_23 = import4.createRenderElement(this.renderer, this._el_8, 'li', import4.EMPTY_INLINE_ARRAY, null);
        this._el_24 = import4.createRenderElement(this.renderer, this._el_23, 'a', new import4.InlineArray4(4, 'class', 'link', 'href', 'components/web-workers/web-worker-demo.html'), null);
        this._text_25 = this.renderer.createText(this._el_24, 'Web Workers', null);
        this._text_26 = this.renderer.createText(this._el_8, '\n                    ', null);
        this._el_27 = import4.createRenderElement(this.renderer, this._el_8, 'li', import4.EMPTY_INLINE_ARRAY, null);
        this._el_28 = import4.createRenderElement(this.renderer, this._el_27, 'a', new import4.InlineArray4(4, 'class', 'link', 'href', 'upgrade.html'), null);
        this._text_29 = this.renderer.createText(this._el_28, 'NgUpgrade', null);
        this._text_30 = this.renderer.createText(this._el_8, '\n                ', null);
        this._text_31 = this.renderer.createText(this._el_6, '\n            ', null);
        this._text_32 = this.renderer.createText(this._el_4, '\n        ', null);
        this._text_33 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_34 = this.renderer.createText(this._el_0, '\n', null);
        this._text_35 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_36 = import4.createRenderElement(this.renderer, parentRenderNode, 'div', new import4.InlineArray2(2, 'class', 'container'), null);
        this._text_37 = this.renderer.createText(this._el_36, '\n    ', null);
        this._el_38 = import4.createRenderElement(this.renderer, this._el_36, 'router-outlet', new import4.InlineArray2(2, 'name', 'msg'), null);
        this._appEl_38 = new import3.AppElement(38, 36, this, this._el_38);
        this._RouterOutlet_38_5 = new import12.Wrapper_RouterOutlet(this.parentInjector.get(import16.RouterOutletMap), this._appEl_38.vcRef, this.parentInjector.get(import17.ComponentFactoryResolver), 'msg');
        this._text_39 = this.renderer.createText(this._el_36, '\n', null);
        this._text_40 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_41 = import4.createRenderElement(this.renderer, parentRenderNode, 'router-outlet', import4.EMPTY_INLINE_ARRAY, null);
        this._appEl_41 = new import3.AppElement(41, null, this, this._el_41);
        this._RouterOutlet_41_5 = new import12.Wrapper_RouterOutlet(this.parentInjector.get(import16.RouterOutletMap), this._appEl_41.vcRef, this.parentInjector.get(import17.ComponentFactoryResolver), null);
        this._text_42 = this.renderer.createText(parentRenderNode, '\n', null);
        var disposable_0 = this.renderer.listen(this._el_15, 'click', this.eventHandler(this._handle_click_15_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_19, 'click', this.eventHandler(this._handle_click_19_0.bind(this)));
        this.init([], [
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
            this._text_31,
            this._text_32,
            this._text_33,
            this._text_34,
            this._text_35,
            this._el_36,
            this._text_37,
            this._el_38,
            this._text_39,
            this._text_40,
            this._el_41,
            this._text_42
        ], [
            disposable_0,
            disposable_1
        ], []);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import18.RouterLinkWithHref) && ((15 <= requestNodeIndex) && (requestNodeIndex <= 16)))) {
            return this._RouterLinkWithHref_15_3.context;
        }
        if (((token === import18.RouterLinkWithHref) && ((19 <= requestNodeIndex) && (requestNodeIndex <= 20)))) {
            return this._RouterLinkWithHref_19_3.context;
        }
        if (((token === import19.RouterOutlet) && (38 === requestNodeIndex))) {
            return this._RouterOutlet_38_5.context;
        }
        if (((token === import19.RouterOutlet) && (41 === requestNodeIndex))) {
            return this._RouterOutlet_41_5.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_15_0_0 = this._arr_50('/about');
        this._RouterLinkWithHref_15_3.check_routerLink(currVal_15_0_0, throwOnChange, false);
        this._RouterLinkWithHref_15_3.detectChangesInInputProps(this, this._el_15, throwOnChange);
        const currVal_19_0_0 = this._arr_52('/demo/spreadsheet');
        this._RouterLinkWithHref_19_3.check_routerLink(currVal_19_0_0, throwOnChange, false);
        this._RouterLinkWithHref_19_3.detectChangesInInputProps(this, this._el_19, throwOnChange);
        this._RouterOutlet_38_5.detectChangesInInputProps(this, this._el_38, throwOnChange);
        this._RouterOutlet_41_5.detectChangesInInputProps(this, this._el_41, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        const currVal_49 = this.context.getLinkStyle('');
        if (import4.checkBinding(throwOnChange, this._expr_49, currVal_49)) {
            this.renderer.setElementClass(this._el_14, 'active', currVal_49);
            this._expr_49 = currVal_49;
        }
        this._RouterLinkWithHref_15_3.detectChangesInHostProps(this, this._el_15, throwOnChange);
        const currVal_51 = this.context.getLinkStyle('/demo');
        if (import4.checkBinding(throwOnChange, this._expr_51, currVal_51)) {
            this.renderer.setElementClass(this._el_18, 'active', currVal_51);
            this._expr_51 = currVal_51;
        }
        this._RouterLinkWithHref_19_3.detectChangesInHostProps(this, this._el_19, throwOnChange);
        this._RouterOutlet_38_5.detectChangesInHostProps(this, this._el_38, throwOnChange);
        this._RouterOutlet_41_5.detectChangesInHostProps(this, this._el_41, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
    destroyInternal() {
        this._RouterLinkWithHref_15_3.context.ngOnDestroy();
        this._RouterLinkWithHref_19_3.context.ngOnDestroy();
        this._RouterOutlet_38_5.context.ngOnDestroy();
        this._RouterOutlet_41_5.context.ngOnDestroy();
    }
    _handle_click_15_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_15_0 = (this._RouterLinkWithHref_15_3.context.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_15_0);
    }
    _handle_click_19_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_19_0 = (this._RouterLinkWithHref_19_3.context.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_19_0);
    }
}
export function viewFactory_AppComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_AppComponent === null)) {
        (renderType_AppComponent = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, styles_AppComponent, {}));
    }
    return new _View_AppComponent0(viewUtils, parentInjector, declarationEl);
}
