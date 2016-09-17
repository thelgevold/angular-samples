import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../app.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/common/src/location/location';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '@angular/router/src/directives/router_link';
import * as import12 from '@angular/router/src/directives/router_outlet';
import * as import13 from '@angular/router/src/router';
import * as import14 from '@angular/router/src/router_state';
import * as import15 from '@angular/common/src/location/location_strategy';
import * as import16 from '@angular/router/src/router_outlet_map';
import * as import17 from '@angular/core/src/linker/component_factory_resolver';
import * as import18 from '@angular/core/src/security';
var renderType_AppComponent_Host = null;
class _View_AppComponent_Host0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_AppComponent_Host0, renderType_AppComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('demo-app', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_AppComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._AppComponent_0_4 = new import3.AppComponent(this.parentInjector.get(import8.Location));
        this._appEl_0.initComponent(this._AppComponent_0_4, [], compView_0);
        compView_0.create(this._AppComponent_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import3.AppComponent) && (0 === requestNodeIndex))) {
            return this._AppComponent_0_4;
        }
        return notFoundResult;
    }
}
function viewFactory_AppComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_AppComponent_Host === null)) {
        (renderType_AppComponent_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_AppComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export const AppComponentNgFactory = new import10.ComponentFactory('demo-app', viewFactory_AppComponent_Host0, import3.AppComponent);
const styles_AppComponent = [];
var renderType_AppComponent = null;
class _View_AppComponent0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_AppComponent0, renderType_AppComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'container');
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'nav', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'navbar navbar-default');
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_4 = this.renderer.createElement(this._el_2, 'div', null);
        this.renderer.setElementAttribute(this._el_4, 'class', 'container-fluid');
        this._text_5 = this.renderer.createText(this._el_4, '\n            ', null);
        this._el_6 = this.renderer.createElement(this._el_4, 'div', null);
        this._text_7 = this.renderer.createText(this._el_6, '\n                ', null);
        this._el_8 = this.renderer.createElement(this._el_6, 'ul', null);
        this.renderer.setElementAttribute(this._el_8, 'class', 'nav navbar-nav');
        this._text_9 = this.renderer.createText(this._el_8, '\n                    ', null);
        this._el_10 = this.renderer.createElement(this._el_8, 'li', null);
        this._el_11 = this.renderer.createElement(this._el_10, 'a', null);
        this.renderer.setElementAttribute(this._el_11, 'class', 'link');
        this.renderer.setElementAttribute(this._el_11, 'href', 'http://www.syntaxsuccess.com');
        this._text_12 = this.renderer.createText(this._el_11, 'Home', null);
        this._text_13 = this.renderer.createText(this._el_8, '\n                    ', null);
        this._el_14 = this.renderer.createElement(this._el_8, 'li', null);
        this._el_15 = this.renderer.createElement(this._el_14, 'a', null);
        this.renderer.setElementAttribute(this._el_15, 'class', 'link');
        this._RouterLinkWithHref_15_3 = new import11.RouterLinkWithHref(this.parentInjector.get(import13.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._text_16 = this.renderer.createText(this._el_15, 'About', null);
        this._text_17 = this.renderer.createText(this._el_8, '\n                    ', null);
        this._el_18 = this.renderer.createElement(this._el_8, 'li', null);
        this._el_19 = this.renderer.createElement(this._el_18, 'a', null);
        this.renderer.setElementAttribute(this._el_19, 'class', 'link');
        this._RouterLinkWithHref_19_3 = new import11.RouterLinkWithHref(this.parentInjector.get(import13.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._text_20 = this.renderer.createText(this._el_19, 'Demos', null);
        this._text_21 = this.renderer.createText(this._el_8, '\n                    ', null);
        this._text_22 = this.renderer.createText(this._el_8, '\n                    ', null);
        this._el_23 = this.renderer.createElement(this._el_8, 'li', null);
        this._el_24 = this.renderer.createElement(this._el_23, 'a', null);
        this.renderer.setElementAttribute(this._el_24, 'class', 'link');
        this.renderer.setElementAttribute(this._el_24, 'href', 'components/web-workers/web-worker-demo.html');
        this._text_25 = this.renderer.createText(this._el_24, 'Web Workers', null);
        this._text_26 = this.renderer.createText(this._el_8, '\n                    ', null);
        this._el_27 = this.renderer.createElement(this._el_8, 'li', null);
        this._el_28 = this.renderer.createElement(this._el_27, 'a', null);
        this.renderer.setElementAttribute(this._el_28, 'class', 'link');
        this.renderer.setElementAttribute(this._el_28, 'href', 'upgrade.html');
        this._text_29 = this.renderer.createText(this._el_28, 'NgUpgrade', null);
        this._text_30 = this.renderer.createText(this._el_8, '\n                ', null);
        this._text_31 = this.renderer.createText(this._el_6, '\n            ', null);
        this._text_32 = this.renderer.createText(this._el_4, '\n        ', null);
        this._text_33 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_34 = this.renderer.createText(this._el_0, '\n', null);
        this._text_35 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_36 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_36, 'class', 'container');
        this._text_37 = this.renderer.createText(this._el_36, '\n    ', null);
        this._el_38 = this.renderer.createElement(this._el_36, 'router-outlet', null);
        this.renderer.setElementAttribute(this._el_38, 'name', 'msg');
        this._appEl_38 = new import2.AppElement(38, 36, this, this._el_38);
        this._RouterOutlet_38_5 = new import12.RouterOutlet(this.parentInjector.get(import16.RouterOutletMap), this._appEl_38.vcRef, this.parentInjector.get(import17.ComponentFactoryResolver), 'msg');
        this._text_39 = this.renderer.createText(this._el_36, '\n', null);
        this._text_40 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_41 = this.renderer.createElement(parentRenderNode, 'router-outlet', null);
        this._appEl_41 = new import2.AppElement(41, null, this, this._el_41);
        this._RouterOutlet_41_5 = new import12.RouterOutlet(this.parentInjector.get(import16.RouterOutletMap), this._appEl_41.vcRef, this.parentInjector.get(import17.ComponentFactoryResolver), null);
        this._text_42 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_15, 'click', this.eventHandler(this._handle_click_15_0.bind(this)));
        this._arr_0 = import4.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        var disposable_1 = this.renderer.listen(this._el_19, 'click', this.eventHandler(this._handle_click_19_0.bind(this)));
        this._arr_1 = import4.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
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
        if (((token === import11.RouterLinkWithHref) && ((15 <= requestNodeIndex) && (requestNodeIndex <= 16)))) {
            return this._RouterLinkWithHref_15_3;
        }
        if (((token === import11.RouterLinkWithHref) && ((19 <= requestNodeIndex) && (requestNodeIndex <= 20)))) {
            return this._RouterLinkWithHref_19_3;
        }
        if (((token === import12.RouterOutlet) && (38 === requestNodeIndex))) {
            return this._RouterOutlet_38_5;
        }
        if (((token === import12.RouterOutlet) && (41 === requestNodeIndex))) {
            return this._RouterOutlet_41_5;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        var changes = null;
        changes = null;
        const currVal_2 = this._arr_0('/about');
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this._RouterLinkWithHref_15_3.routerLink = currVal_2;
            if ((changes === null)) {
                (changes = {});
            }
            changes['routerLink'] = new import7.SimpleChange(this._expr_2, currVal_2);
            this._expr_2 = currVal_2;
        }
        if ((changes !== null)) {
            this._RouterLinkWithHref_15_3.ngOnChanges(changes);
        }
        changes = null;
        const currVal_6 = this._arr_1('/demo/spreadsheet');
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this._RouterLinkWithHref_19_3.routerLink = currVal_6;
            if ((changes === null)) {
                (changes = {});
            }
            changes['routerLink'] = new import7.SimpleChange(this._expr_6, currVal_6);
            this._expr_6 = currVal_6;
        }
        if ((changes !== null)) {
            this._RouterLinkWithHref_19_3.ngOnChanges(changes);
        }
        this.detectContentChildrenChanges(throwOnChange);
        const currVal_0 = this.context.getLinkStyle('');
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementClass(this._el_14, 'active', currVal_0);
            this._expr_0 = currVal_0;
        }
        const currVal_3 = this._RouterLinkWithHref_15_3.href;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementProperty(this._el_15, 'href', this.viewUtils.sanitizer.sanitize(import18.SecurityContext.URL, currVal_3));
            this._expr_3 = currVal_3;
        }
        const currVal_4 = this.context.getLinkStyle('/demo');
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementClass(this._el_18, 'active', currVal_4);
            this._expr_4 = currVal_4;
        }
        const currVal_7 = this._RouterLinkWithHref_19_3.href;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementProperty(this._el_19, 'href', this.viewUtils.sanitizer.sanitize(import18.SecurityContext.URL, currVal_7));
            this._expr_7 = currVal_7;
        }
        this.detectViewChildrenChanges(throwOnChange);
    }
    destroyInternal() {
        this._RouterLinkWithHref_15_3.ngOnDestroy();
        this._RouterLinkWithHref_19_3.ngOnDestroy();
        this._RouterOutlet_38_5.ngOnDestroy();
        this._RouterOutlet_41_5.ngOnDestroy();
    }
    _handle_click_15_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this._RouterLinkWithHref_15_3.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_0);
    }
    _handle_click_19_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this._RouterLinkWithHref_19_3.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_0);
    }
}
export function viewFactory_AppComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_AppComponent === null)) {
        (renderType_AppComponent = viewUtils.createRenderComponentType('/Users/tor/Development/angular-2-samples/demo-app.html', 0, import9.ViewEncapsulation.None, styles_AppComponent, {}));
    }
    return new _View_AppComponent0(viewUtils, parentInjector, declarationEl);
}
