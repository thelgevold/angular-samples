import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../demo-page';
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
var renderType_DemoPage_Host = null;
class _View_DemoPage_Host0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_DemoPage_Host0, renderType_DemoPage_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('demo-page', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_DemoPage0(this.viewUtils, this.injector(0), this._appEl_0);
        this._DemoPage_0_4 = new import3.DemoPage(this.parentInjector.get(import8.Location));
        this._appEl_0.initComponent(this._DemoPage_0_4, [], compView_0);
        compView_0.create(this._DemoPage_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import3.DemoPage) && (0 === requestNodeIndex))) {
            return this._DemoPage_0_4;
        }
        return notFoundResult;
    }
}
function viewFactory_DemoPage_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_DemoPage_Host === null)) {
        (renderType_DemoPage_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_DemoPage_Host0(viewUtils, parentInjector, declarationEl);
}
export const DemoPageNgFactory = new import10.ComponentFactory('demo-page', viewFactory_DemoPage_Host0, import3.DemoPage);
const styles_DemoPage = [];
var renderType_DemoPage = null;
class _View_DemoPage0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_DemoPage0, renderType_DemoPage, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'container');
        this._text_1 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'div', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'jumbotron');
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_4 = this.renderer.createElement(this._el_2, 'h1', null);
        this._text_5 = this.renderer.createText(this._el_4, 'Angular 2.0 sample components', null);
        this._text_6 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_7 = this.renderer.createElement(this._el_2, 'p', null);
        this._text_8 = this.renderer.createText(this._el_7, '\n            More documentation about each specific component can be found\n            ', null);
        this._el_9 = this.renderer.createElement(this._el_7, 'a', null);
        this.renderer.setElementAttribute(this._el_9, 'href', 'http://www.syntaxsuccess.com/viewarticle/angular-2.0-examples');
        this._text_10 = this.renderer.createText(this._el_9, 'here', null);
        this._text_11 = this.renderer.createText(this._el_7, '.\n        ', null);
        this._text_12 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_13 = this.renderer.createElement(this._el_2, 'p', null);
        this._text_14 = this.renderer.createText(this._el_13, 'Current version: Angular 2.0', null);
        this._text_15 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_16 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_17 = this.renderer.createElement(this._el_0, 'div', null);
        this._text_18 = this.renderer.createText(this._el_17, '\n        ', null);
        this._el_19 = this.renderer.createElement(this._el_17, 'div', null);
        this.renderer.setElementAttribute(this._el_19, 'class', 'list-group col-md-3');
        this._text_20 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_21 = this.renderer.createElement(this._el_19, 'a', null);
        this.renderer.setElementAttribute(this._el_21, 'class', 'list-group-item');
        this._RouterLinkWithHref_21_3 = new import11.RouterLinkWithHref(this.parentInjector.get(import13.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._text_22 = this.renderer.createText(this._el_21, 'Virtualized Spreadsheet', null);
        this._text_23 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_24 = this.renderer.createElement(this._el_19, 'a', null);
        this.renderer.setElementAttribute(this._el_24, 'class', 'list-group-item');
        this._RouterLinkWithHref_24_3 = new import11.RouterLinkWithHref(this.parentInjector.get(import13.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._text_25 = this.renderer.createText(this._el_24, 'Lazy Loaded Tree View', null);
        this._text_26 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_27 = this.renderer.createElement(this._el_19, 'a', null);
        this.renderer.setElementAttribute(this._el_27, 'class', 'list-group-item');
        this._RouterLinkWithHref_27_3 = new import11.RouterLinkWithHref(this.parentInjector.get(import13.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._text_28 = this.renderer.createText(this._el_27, 'RxJs Streams', null);
        this._text_29 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_30 = this.renderer.createElement(this._el_19, 'a', null);
        this.renderer.setElementAttribute(this._el_30, 'class', 'list-group-item');
        this._RouterLinkWithHref_30_3 = new import11.RouterLinkWithHref(this.parentInjector.get(import13.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._text_31 = this.renderer.createText(this._el_30, 'RxJs Caching', null);
        this._text_32 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_33 = this.renderer.createElement(this._el_19, 'a', null);
        this.renderer.setElementAttribute(this._el_33, 'class', 'list-group-item');
        this._RouterLinkWithHref_33_3 = new import11.RouterLinkWithHref(this.parentInjector.get(import13.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._text_34 = this.renderer.createText(this._el_33, 'React Integration', null);
        this._text_35 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_36 = this.renderer.createElement(this._el_19, 'a', null);
        this.renderer.setElementAttribute(this._el_36, 'class', 'list-group-item');
        this._RouterLinkWithHref_36_3 = new import11.RouterLinkWithHref(this.parentInjector.get(import13.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._text_37 = this.renderer.createText(this._el_36, 'Graph', null);
        this._text_38 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_39 = this.renderer.createElement(this._el_19, 'a', null);
        this.renderer.setElementAttribute(this._el_39, 'class', 'list-group-item');
        this._RouterLinkWithHref_39_3 = new import11.RouterLinkWithHref(this.parentInjector.get(import13.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._text_40 = this.renderer.createText(this._el_39, 'Insertion Sort', null);
        this._text_41 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_42 = this.renderer.createElement(this._el_19, 'a', null);
        this.renderer.setElementAttribute(this._el_42, 'class', 'list-group-item');
        this._RouterLinkWithHref_42_3 = new import11.RouterLinkWithHref(this.parentInjector.get(import13.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._text_43 = this.renderer.createText(this._el_42, 'Redux', null);
        this._text_44 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_45 = this.renderer.createElement(this._el_19, 'a', null);
        this.renderer.setElementAttribute(this._el_45, 'class', 'list-group-item');
        this._RouterLinkWithHref_45_3 = new import11.RouterLinkWithHref(this.parentInjector.get(import13.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._text_46 = this.renderer.createText(this._el_45, 'Buffering in RxJs', null);
        this._text_47 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_48 = this.renderer.createElement(this._el_19, 'a', null);
        this.renderer.setElementAttribute(this._el_48, 'class', 'list-group-item');
        this._RouterLinkWithHref_48_3 = new import11.RouterLinkWithHref(this.parentInjector.get(import13.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._text_49 = this.renderer.createText(this._el_48, 'Dynamic Form', null);
        this._text_50 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_51 = this.renderer.createElement(this._el_19, 'a', null);
        this.renderer.setElementAttribute(this._el_51, 'class', 'list-group-item');
        this._RouterLinkWithHref_51_3 = new import11.RouterLinkWithHref(this.parentInjector.get(import13.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._text_52 = this.renderer.createText(this._el_51, 'Pub Sub', null);
        this._text_53 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_54 = this.renderer.createElement(this._el_19, 'a', null);
        this.renderer.setElementAttribute(this._el_54, 'class', 'list-group-item');
        this._RouterLinkWithHref_54_3 = new import11.RouterLinkWithHref(this.parentInjector.get(import13.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._text_55 = this.renderer.createText(this._el_54, 'Text Editor', null);
        this._text_56 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_57 = this.renderer.createElement(this._el_19, 'a', null);
        this.renderer.setElementAttribute(this._el_57, 'class', 'list-group-item');
        this._RouterLinkWithHref_57_3 = new import11.RouterLinkWithHref(this.parentInjector.get(import13.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._text_58 = this.renderer.createText(this._el_57, 'Form', null);
        this._text_59 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_60 = this.renderer.createElement(this._el_19, 'a', null);
        this.renderer.setElementAttribute(this._el_60, 'class', 'list-group-item');
        this._RouterLinkWithHref_60_3 = new import11.RouterLinkWithHref(this.parentInjector.get(import13.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._text_61 = this.renderer.createText(this._el_60, 'Change Detection', null);
        this._text_62 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_63 = this.renderer.createElement(this._el_19, 'a', null);
        this.renderer.setElementAttribute(this._el_63, 'class', 'list-group-item');
        this._RouterLinkWithHref_63_3 = new import11.RouterLinkWithHref(this.parentInjector.get(import13.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._text_64 = this.renderer.createText(this._el_63, 'Http', null);
        this._text_65 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_66 = this.renderer.createElement(this._el_19, 'a', null);
        this.renderer.setElementAttribute(this._el_66, 'class', 'list-group-item');
        this._RouterLinkWithHref_66_3 = new import11.RouterLinkWithHref(this.parentInjector.get(import13.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._text_67 = this.renderer.createText(this._el_66, 'Input Controls', null);
        this._text_68 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_69 = this.renderer.createElement(this._el_19, 'a', null);
        this.renderer.setElementAttribute(this._el_69, 'class', 'list-group-item');
        this._RouterLinkWithHref_69_3 = new import11.RouterLinkWithHref(this.parentInjector.get(import13.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._text_70 = this.renderer.createText(this._el_69, 'Recursive tree view', null);
        this._text_71 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_72 = this.renderer.createElement(this._el_19, 'a', null);
        this.renderer.setElementAttribute(this._el_72, 'class', 'list-group-item');
        this._RouterLinkWithHref_72_3 = new import11.RouterLinkWithHref(this.parentInjector.get(import13.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._text_73 = this.renderer.createText(this._el_72, 'Data Grid', null);
        this._text_74 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_75 = this.renderer.createElement(this._el_19, 'a', null);
        this.renderer.setElementAttribute(this._el_75, 'class', 'list-group-item');
        this._RouterLinkWithHref_75_3 = new import11.RouterLinkWithHref(this.parentInjector.get(import13.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._text_76 = this.renderer.createText(this._el_75, 'Address Book', null);
        this._text_77 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_78 = this.renderer.createElement(this._el_19, 'a', null);
        this.renderer.setElementAttribute(this._el_78, 'class', 'list-group-item');
        this._RouterLinkWithHref_78_3 = new import11.RouterLinkWithHref(this.parentInjector.get(import13.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._text_79 = this.renderer.createText(this._el_78, 'JQuery Integration', null);
        this._text_80 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_81 = this.renderer.createElement(this._el_19, 'a', null);
        this.renderer.setElementAttribute(this._el_81, 'class', 'list-group-item');
        this._RouterLinkWithHref_81_3 = new import11.RouterLinkWithHref(this.parentInjector.get(import13.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._text_82 = this.renderer.createText(this._el_81, 'Access Child Component', null);
        this._text_83 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_84 = this.renderer.createElement(this._el_19, 'a', null);
        this.renderer.setElementAttribute(this._el_84, 'class', 'list-group-item');
        this._RouterLinkWithHref_84_3 = new import11.RouterLinkWithHref(this.parentInjector.get(import13.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._text_85 = this.renderer.createText(this._el_84, 'Interactive contact list', null);
        this._text_86 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_87 = this.renderer.createElement(this._el_19, 'a', null);
        this.renderer.setElementAttribute(this._el_87, 'class', 'list-group-item');
        this._RouterLinkWithHref_87_3 = new import11.RouterLinkWithHref(this.parentInjector.get(import13.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._text_88 = this.renderer.createText(this._el_87, 'Bound Textbox', null);
        this._text_89 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_90 = this.renderer.createElement(this._el_19, 'a', null);
        this.renderer.setElementAttribute(this._el_90, 'class', 'list-group-item');
        this._RouterLinkWithHref_90_3 = new import11.RouterLinkWithHref(this.parentInjector.get(import13.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._text_91 = this.renderer.createText(this._el_90, 'Input/Output', null);
        this._text_92 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_93 = this.renderer.createElement(this._el_19, 'a', null);
        this.renderer.setElementAttribute(this._el_93, 'class', 'list-group-item');
        this._RouterLinkWithHref_93_3 = new import11.RouterLinkWithHref(this.parentInjector.get(import13.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._text_94 = this.renderer.createText(this._el_93, 'Non Bindable', null);
        this._text_95 = this.renderer.createText(this._el_19, '\n       ', null);
        this._text_96 = this.renderer.createText(this._el_17, '\n\n        ', null);
        this._el_97 = this.renderer.createElement(this._el_17, 'div', null);
        this.renderer.setElementAttribute(this._el_97, 'class', 'col-md-9');
        this._text_98 = this.renderer.createText(this._el_97, '\n            ', null);
        this._el_99 = this.renderer.createElement(this._el_97, 'router-outlet', null);
        this._appEl_99 = new import2.AppElement(99, 97, this, this._el_99);
        this._RouterOutlet_99_5 = new import12.RouterOutlet(this.parentInjector.get(import16.RouterOutletMap), this._appEl_99.vcRef, this.parentInjector.get(import17.ComponentFactoryResolver), null);
        this._text_100 = this.renderer.createText(this._el_97, '\n        ', null);
        this._text_101 = this.renderer.createText(this._el_17, '\n    ', null);
        this._text_102 = this.renderer.createText(this._el_0, '\n\n', null);
        this._expr_1 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_21, 'click', this.eventHandler(this._handle_click_21_0.bind(this)));
        this._arr_0 = import4.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        var disposable_1 = this.renderer.listen(this._el_24, 'click', this.eventHandler(this._handle_click_24_0.bind(this)));
        this._arr_1 = import4.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        this._expr_9 = import7.UNINITIALIZED;
        var disposable_2 = this.renderer.listen(this._el_27, 'click', this.eventHandler(this._handle_click_27_0.bind(this)));
        this._arr_2 = import4.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_10 = import7.UNINITIALIZED;
        this._expr_11 = import7.UNINITIALIZED;
        this._expr_13 = import7.UNINITIALIZED;
        var disposable_3 = this.renderer.listen(this._el_30, 'click', this.eventHandler(this._handle_click_30_0.bind(this)));
        this._arr_3 = import4.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_14 = import7.UNINITIALIZED;
        this._expr_15 = import7.UNINITIALIZED;
        this._expr_17 = import7.UNINITIALIZED;
        var disposable_4 = this.renderer.listen(this._el_33, 'click', this.eventHandler(this._handle_click_33_0.bind(this)));
        this._arr_4 = import4.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_18 = import7.UNINITIALIZED;
        this._expr_19 = import7.UNINITIALIZED;
        this._expr_21 = import7.UNINITIALIZED;
        var disposable_5 = this.renderer.listen(this._el_36, 'click', this.eventHandler(this._handle_click_36_0.bind(this)));
        this._arr_5 = import4.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_22 = import7.UNINITIALIZED;
        this._expr_23 = import7.UNINITIALIZED;
        this._expr_25 = import7.UNINITIALIZED;
        var disposable_6 = this.renderer.listen(this._el_39, 'click', this.eventHandler(this._handle_click_39_0.bind(this)));
        this._arr_6 = import4.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_26 = import7.UNINITIALIZED;
        this._expr_27 = import7.UNINITIALIZED;
        this._expr_29 = import7.UNINITIALIZED;
        var disposable_7 = this.renderer.listen(this._el_42, 'click', this.eventHandler(this._handle_click_42_0.bind(this)));
        this._arr_7 = import4.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_30 = import7.UNINITIALIZED;
        this._expr_31 = import7.UNINITIALIZED;
        this._expr_33 = import7.UNINITIALIZED;
        var disposable_8 = this.renderer.listen(this._el_45, 'click', this.eventHandler(this._handle_click_45_0.bind(this)));
        this._arr_8 = import4.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_34 = import7.UNINITIALIZED;
        this._expr_35 = import7.UNINITIALIZED;
        this._expr_37 = import7.UNINITIALIZED;
        var disposable_9 = this.renderer.listen(this._el_48, 'click', this.eventHandler(this._handle_click_48_0.bind(this)));
        this._arr_9 = import4.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_38 = import7.UNINITIALIZED;
        this._expr_39 = import7.UNINITIALIZED;
        this._expr_41 = import7.UNINITIALIZED;
        var disposable_10 = this.renderer.listen(this._el_51, 'click', this.eventHandler(this._handle_click_51_0.bind(this)));
        this._arr_10 = import4.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_42 = import7.UNINITIALIZED;
        this._expr_43 = import7.UNINITIALIZED;
        this._expr_45 = import7.UNINITIALIZED;
        var disposable_11 = this.renderer.listen(this._el_54, 'click', this.eventHandler(this._handle_click_54_0.bind(this)));
        this._arr_11 = import4.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_46 = import7.UNINITIALIZED;
        this._expr_47 = import7.UNINITIALIZED;
        this._expr_49 = import7.UNINITIALIZED;
        var disposable_12 = this.renderer.listen(this._el_57, 'click', this.eventHandler(this._handle_click_57_0.bind(this)));
        this._arr_12 = import4.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_50 = import7.UNINITIALIZED;
        this._expr_51 = import7.UNINITIALIZED;
        this._expr_53 = import7.UNINITIALIZED;
        var disposable_13 = this.renderer.listen(this._el_60, 'click', this.eventHandler(this._handle_click_60_0.bind(this)));
        this._arr_13 = import4.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_54 = import7.UNINITIALIZED;
        this._expr_55 = import7.UNINITIALIZED;
        this._expr_57 = import7.UNINITIALIZED;
        var disposable_14 = this.renderer.listen(this._el_63, 'click', this.eventHandler(this._handle_click_63_0.bind(this)));
        this._arr_14 = import4.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_58 = import7.UNINITIALIZED;
        this._expr_59 = import7.UNINITIALIZED;
        this._expr_61 = import7.UNINITIALIZED;
        var disposable_15 = this.renderer.listen(this._el_66, 'click', this.eventHandler(this._handle_click_66_0.bind(this)));
        this._arr_15 = import4.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_62 = import7.UNINITIALIZED;
        this._expr_63 = import7.UNINITIALIZED;
        this._expr_65 = import7.UNINITIALIZED;
        var disposable_16 = this.renderer.listen(this._el_69, 'click', this.eventHandler(this._handle_click_69_0.bind(this)));
        this._arr_16 = import4.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_66 = import7.UNINITIALIZED;
        this._expr_67 = import7.UNINITIALIZED;
        this._expr_69 = import7.UNINITIALIZED;
        var disposable_17 = this.renderer.listen(this._el_72, 'click', this.eventHandler(this._handle_click_72_0.bind(this)));
        this._arr_17 = import4.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_70 = import7.UNINITIALIZED;
        this._expr_71 = import7.UNINITIALIZED;
        this._expr_73 = import7.UNINITIALIZED;
        var disposable_18 = this.renderer.listen(this._el_75, 'click', this.eventHandler(this._handle_click_75_0.bind(this)));
        this._arr_18 = import4.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_74 = import7.UNINITIALIZED;
        this._expr_75 = import7.UNINITIALIZED;
        this._expr_77 = import7.UNINITIALIZED;
        var disposable_19 = this.renderer.listen(this._el_78, 'click', this.eventHandler(this._handle_click_78_0.bind(this)));
        this._arr_19 = import4.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_78 = import7.UNINITIALIZED;
        this._expr_79 = import7.UNINITIALIZED;
        this._expr_81 = import7.UNINITIALIZED;
        var disposable_20 = this.renderer.listen(this._el_81, 'click', this.eventHandler(this._handle_click_81_0.bind(this)));
        this._arr_20 = import4.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_82 = import7.UNINITIALIZED;
        this._expr_83 = import7.UNINITIALIZED;
        this._expr_85 = import7.UNINITIALIZED;
        var disposable_21 = this.renderer.listen(this._el_84, 'click', this.eventHandler(this._handle_click_84_0.bind(this)));
        this._arr_21 = import4.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_86 = import7.UNINITIALIZED;
        this._expr_87 = import7.UNINITIALIZED;
        this._expr_89 = import7.UNINITIALIZED;
        var disposable_22 = this.renderer.listen(this._el_87, 'click', this.eventHandler(this._handle_click_87_0.bind(this)));
        this._arr_22 = import4.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_90 = import7.UNINITIALIZED;
        this._expr_91 = import7.UNINITIALIZED;
        this._expr_93 = import7.UNINITIALIZED;
        var disposable_23 = this.renderer.listen(this._el_90, 'click', this.eventHandler(this._handle_click_90_0.bind(this)));
        this._arr_23 = import4.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_94 = import7.UNINITIALIZED;
        this._expr_95 = import7.UNINITIALIZED;
        this._expr_97 = import7.UNINITIALIZED;
        var disposable_24 = this.renderer.listen(this._el_93, 'click', this.eventHandler(this._handle_click_93_0.bind(this)));
        this._arr_24 = import4.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_98 = import7.UNINITIALIZED;
        this._expr_99 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._text_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._text_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._el_19,
            this._text_20,
            this._el_21,
            this._text_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._text_26,
            this._el_27,
            this._text_28,
            this._text_29,
            this._el_30,
            this._text_31,
            this._text_32,
            this._el_33,
            this._text_34,
            this._text_35,
            this._el_36,
            this._text_37,
            this._text_38,
            this._el_39,
            this._text_40,
            this._text_41,
            this._el_42,
            this._text_43,
            this._text_44,
            this._el_45,
            this._text_46,
            this._text_47,
            this._el_48,
            this._text_49,
            this._text_50,
            this._el_51,
            this._text_52,
            this._text_53,
            this._el_54,
            this._text_55,
            this._text_56,
            this._el_57,
            this._text_58,
            this._text_59,
            this._el_60,
            this._text_61,
            this._text_62,
            this._el_63,
            this._text_64,
            this._text_65,
            this._el_66,
            this._text_67,
            this._text_68,
            this._el_69,
            this._text_70,
            this._text_71,
            this._el_72,
            this._text_73,
            this._text_74,
            this._el_75,
            this._text_76,
            this._text_77,
            this._el_78,
            this._text_79,
            this._text_80,
            this._el_81,
            this._text_82,
            this._text_83,
            this._el_84,
            this._text_85,
            this._text_86,
            this._el_87,
            this._text_88,
            this._text_89,
            this._el_90,
            this._text_91,
            this._text_92,
            this._el_93,
            this._text_94,
            this._text_95,
            this._text_96,
            this._el_97,
            this._text_98,
            this._el_99,
            this._text_100,
            this._text_101,
            this._text_102
        ], [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3,
            disposable_4,
            disposable_5,
            disposable_6,
            disposable_7,
            disposable_8,
            disposable_9,
            disposable_10,
            disposable_11,
            disposable_12,
            disposable_13,
            disposable_14,
            disposable_15,
            disposable_16,
            disposable_17,
            disposable_18,
            disposable_19,
            disposable_20,
            disposable_21,
            disposable_22,
            disposable_23,
            disposable_24
        ], []);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import11.RouterLinkWithHref) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 22)))) {
            return this._RouterLinkWithHref_21_3;
        }
        if (((token === import11.RouterLinkWithHref) && ((24 <= requestNodeIndex) && (requestNodeIndex <= 25)))) {
            return this._RouterLinkWithHref_24_3;
        }
        if (((token === import11.RouterLinkWithHref) && ((27 <= requestNodeIndex) && (requestNodeIndex <= 28)))) {
            return this._RouterLinkWithHref_27_3;
        }
        if (((token === import11.RouterLinkWithHref) && ((30 <= requestNodeIndex) && (requestNodeIndex <= 31)))) {
            return this._RouterLinkWithHref_30_3;
        }
        if (((token === import11.RouterLinkWithHref) && ((33 <= requestNodeIndex) && (requestNodeIndex <= 34)))) {
            return this._RouterLinkWithHref_33_3;
        }
        if (((token === import11.RouterLinkWithHref) && ((36 <= requestNodeIndex) && (requestNodeIndex <= 37)))) {
            return this._RouterLinkWithHref_36_3;
        }
        if (((token === import11.RouterLinkWithHref) && ((39 <= requestNodeIndex) && (requestNodeIndex <= 40)))) {
            return this._RouterLinkWithHref_39_3;
        }
        if (((token === import11.RouterLinkWithHref) && ((42 <= requestNodeIndex) && (requestNodeIndex <= 43)))) {
            return this._RouterLinkWithHref_42_3;
        }
        if (((token === import11.RouterLinkWithHref) && ((45 <= requestNodeIndex) && (requestNodeIndex <= 46)))) {
            return this._RouterLinkWithHref_45_3;
        }
        if (((token === import11.RouterLinkWithHref) && ((48 <= requestNodeIndex) && (requestNodeIndex <= 49)))) {
            return this._RouterLinkWithHref_48_3;
        }
        if (((token === import11.RouterLinkWithHref) && ((51 <= requestNodeIndex) && (requestNodeIndex <= 52)))) {
            return this._RouterLinkWithHref_51_3;
        }
        if (((token === import11.RouterLinkWithHref) && ((54 <= requestNodeIndex) && (requestNodeIndex <= 55)))) {
            return this._RouterLinkWithHref_54_3;
        }
        if (((token === import11.RouterLinkWithHref) && ((57 <= requestNodeIndex) && (requestNodeIndex <= 58)))) {
            return this._RouterLinkWithHref_57_3;
        }
        if (((token === import11.RouterLinkWithHref) && ((60 <= requestNodeIndex) && (requestNodeIndex <= 61)))) {
            return this._RouterLinkWithHref_60_3;
        }
        if (((token === import11.RouterLinkWithHref) && ((63 <= requestNodeIndex) && (requestNodeIndex <= 64)))) {
            return this._RouterLinkWithHref_63_3;
        }
        if (((token === import11.RouterLinkWithHref) && ((66 <= requestNodeIndex) && (requestNodeIndex <= 67)))) {
            return this._RouterLinkWithHref_66_3;
        }
        if (((token === import11.RouterLinkWithHref) && ((69 <= requestNodeIndex) && (requestNodeIndex <= 70)))) {
            return this._RouterLinkWithHref_69_3;
        }
        if (((token === import11.RouterLinkWithHref) && ((72 <= requestNodeIndex) && (requestNodeIndex <= 73)))) {
            return this._RouterLinkWithHref_72_3;
        }
        if (((token === import11.RouterLinkWithHref) && ((75 <= requestNodeIndex) && (requestNodeIndex <= 76)))) {
            return this._RouterLinkWithHref_75_3;
        }
        if (((token === import11.RouterLinkWithHref) && ((78 <= requestNodeIndex) && (requestNodeIndex <= 79)))) {
            return this._RouterLinkWithHref_78_3;
        }
        if (((token === import11.RouterLinkWithHref) && ((81 <= requestNodeIndex) && (requestNodeIndex <= 82)))) {
            return this._RouterLinkWithHref_81_3;
        }
        if (((token === import11.RouterLinkWithHref) && ((84 <= requestNodeIndex) && (requestNodeIndex <= 85)))) {
            return this._RouterLinkWithHref_84_3;
        }
        if (((token === import11.RouterLinkWithHref) && ((87 <= requestNodeIndex) && (requestNodeIndex <= 88)))) {
            return this._RouterLinkWithHref_87_3;
        }
        if (((token === import11.RouterLinkWithHref) && ((90 <= requestNodeIndex) && (requestNodeIndex <= 91)))) {
            return this._RouterLinkWithHref_90_3;
        }
        if (((token === import11.RouterLinkWithHref) && ((93 <= requestNodeIndex) && (requestNodeIndex <= 94)))) {
            return this._RouterLinkWithHref_93_3;
        }
        if (((token === import12.RouterOutlet) && (99 === requestNodeIndex))) {
            return this._RouterOutlet_99_5;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        var changes = null;
        changes = null;
        const currVal_2 = this._arr_0('/demo/spreadsheet');
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this._RouterLinkWithHref_21_3.routerLink = currVal_2;
            if ((changes === null)) {
                (changes = {});
            }
            changes['routerLink'] = new import7.SimpleChange(this._expr_2, currVal_2);
            this._expr_2 = currVal_2;
        }
        if ((changes !== null)) {
            this._RouterLinkWithHref_21_3.ngOnChanges(changes);
        }
        changes = null;
        const currVal_6 = this._arr_1('/demo/countries');
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this._RouterLinkWithHref_24_3.routerLink = currVal_6;
            if ((changes === null)) {
                (changes = {});
            }
            changes['routerLink'] = new import7.SimpleChange(this._expr_6, currVal_6);
            this._expr_6 = currVal_6;
        }
        if ((changes !== null)) {
            this._RouterLinkWithHref_24_3.ngOnChanges(changes);
        }
        changes = null;
        const currVal_10 = this._arr_2('/demo/rxjs');
        if (import4.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this._RouterLinkWithHref_27_3.routerLink = currVal_10;
            if ((changes === null)) {
                (changes = {});
            }
            changes['routerLink'] = new import7.SimpleChange(this._expr_10, currVal_10);
            this._expr_10 = currVal_10;
        }
        if ((changes !== null)) {
            this._RouterLinkWithHref_27_3.ngOnChanges(changes);
        }
        changes = null;
        const currVal_14 = this._arr_3('/demo/friends');
        if (import4.checkBinding(throwOnChange, this._expr_14, currVal_14)) {
            this._RouterLinkWithHref_30_3.routerLink = currVal_14;
            if ((changes === null)) {
                (changes = {});
            }
            changes['routerLink'] = new import7.SimpleChange(this._expr_14, currVal_14);
            this._expr_14 = currVal_14;
        }
        if ((changes !== null)) {
            this._RouterLinkWithHref_30_3.ngOnChanges(changes);
        }
        changes = null;
        const currVal_18 = this._arr_4('/demo/react');
        if (import4.checkBinding(throwOnChange, this._expr_18, currVal_18)) {
            this._RouterLinkWithHref_33_3.routerLink = currVal_18;
            if ((changes === null)) {
                (changes = {});
            }
            changes['routerLink'] = new import7.SimpleChange(this._expr_18, currVal_18);
            this._expr_18 = currVal_18;
        }
        if ((changes !== null)) {
            this._RouterLinkWithHref_33_3.ngOnChanges(changes);
        }
        changes = null;
        const currVal_22 = this._arr_5('/demo/graph');
        if (import4.checkBinding(throwOnChange, this._expr_22, currVal_22)) {
            this._RouterLinkWithHref_36_3.routerLink = currVal_22;
            if ((changes === null)) {
                (changes = {});
            }
            changes['routerLink'] = new import7.SimpleChange(this._expr_22, currVal_22);
            this._expr_22 = currVal_22;
        }
        if ((changes !== null)) {
            this._RouterLinkWithHref_36_3.ngOnChanges(changes);
        }
        changes = null;
        const currVal_26 = this._arr_6('/demo/algorithms');
        if (import4.checkBinding(throwOnChange, this._expr_26, currVal_26)) {
            this._RouterLinkWithHref_39_3.routerLink = currVal_26;
            if ((changes === null)) {
                (changes = {});
            }
            changes['routerLink'] = new import7.SimpleChange(this._expr_26, currVal_26);
            this._expr_26 = currVal_26;
        }
        if ((changes !== null)) {
            this._RouterLinkWithHref_39_3.ngOnChanges(changes);
        }
        changes = null;
        const currVal_30 = this._arr_7('/demo/redux');
        if (import4.checkBinding(throwOnChange, this._expr_30, currVal_30)) {
            this._RouterLinkWithHref_42_3.routerLink = currVal_30;
            if ((changes === null)) {
                (changes = {});
            }
            changes['routerLink'] = new import7.SimpleChange(this._expr_30, currVal_30);
            this._expr_30 = currVal_30;
        }
        if ((changes !== null)) {
            this._RouterLinkWithHref_42_3.ngOnChanges(changes);
        }
        changes = null;
        const currVal_34 = this._arr_8('/demo/buffering');
        if (import4.checkBinding(throwOnChange, this._expr_34, currVal_34)) {
            this._RouterLinkWithHref_45_3.routerLink = currVal_34;
            if ((changes === null)) {
                (changes = {});
            }
            changes['routerLink'] = new import7.SimpleChange(this._expr_34, currVal_34);
            this._expr_34 = currVal_34;
        }
        if ((changes !== null)) {
            this._RouterLinkWithHref_45_3.ngOnChanges(changes);
        }
        changes = null;
        const currVal_38 = this._arr_9('/demo/survey');
        if (import4.checkBinding(throwOnChange, this._expr_38, currVal_38)) {
            this._RouterLinkWithHref_48_3.routerLink = currVal_38;
            if ((changes === null)) {
                (changes = {});
            }
            changes['routerLink'] = new import7.SimpleChange(this._expr_38, currVal_38);
            this._expr_38 = currVal_38;
        }
        if ((changes !== null)) {
            this._RouterLinkWithHref_48_3.ngOnChanges(changes);
        }
        changes = null;
        const currVal_42 = this._arr_10('/demo/pub-sub');
        if (import4.checkBinding(throwOnChange, this._expr_42, currVal_42)) {
            this._RouterLinkWithHref_51_3.routerLink = currVal_42;
            if ((changes === null)) {
                (changes = {});
            }
            changes['routerLink'] = new import7.SimpleChange(this._expr_42, currVal_42);
            this._expr_42 = currVal_42;
        }
        if ((changes !== null)) {
            this._RouterLinkWithHref_51_3.ngOnChanges(changes);
        }
        changes = null;
        const currVal_46 = this._arr_11('/demo/text-editor');
        if (import4.checkBinding(throwOnChange, this._expr_46, currVal_46)) {
            this._RouterLinkWithHref_54_3.routerLink = currVal_46;
            if ((changes === null)) {
                (changes = {});
            }
            changes['routerLink'] = new import7.SimpleChange(this._expr_46, currVal_46);
            this._expr_46 = currVal_46;
        }
        if ((changes !== null)) {
            this._RouterLinkWithHref_54_3.ngOnChanges(changes);
        }
        changes = null;
        const currVal_50 = this._arr_12('/demo/form');
        if (import4.checkBinding(throwOnChange, this._expr_50, currVal_50)) {
            this._RouterLinkWithHref_57_3.routerLink = currVal_50;
            if ((changes === null)) {
                (changes = {});
            }
            changes['routerLink'] = new import7.SimpleChange(this._expr_50, currVal_50);
            this._expr_50 = currVal_50;
        }
        if ((changes !== null)) {
            this._RouterLinkWithHref_57_3.ngOnChanges(changes);
        }
        changes = null;
        const currVal_54 = this._arr_13('/demo/change');
        if (import4.checkBinding(throwOnChange, this._expr_54, currVal_54)) {
            this._RouterLinkWithHref_60_3.routerLink = currVal_54;
            if ((changes === null)) {
                (changes = {});
            }
            changes['routerLink'] = new import7.SimpleChange(this._expr_54, currVal_54);
            this._expr_54 = currVal_54;
        }
        if ((changes !== null)) {
            this._RouterLinkWithHref_60_3.ngOnChanges(changes);
        }
        changes = null;
        const currVal_58 = this._arr_14('/demo/http');
        if (import4.checkBinding(throwOnChange, this._expr_58, currVal_58)) {
            this._RouterLinkWithHref_63_3.routerLink = currVal_58;
            if ((changes === null)) {
                (changes = {});
            }
            changes['routerLink'] = new import7.SimpleChange(this._expr_58, currVal_58);
            this._expr_58 = currVal_58;
        }
        if ((changes !== null)) {
            this._RouterLinkWithHref_63_3.ngOnChanges(changes);
        }
        changes = null;
        const currVal_62 = this._arr_15('/demo/input');
        if (import4.checkBinding(throwOnChange, this._expr_62, currVal_62)) {
            this._RouterLinkWithHref_66_3.routerLink = currVal_62;
            if ((changes === null)) {
                (changes = {});
            }
            changes['routerLink'] = new import7.SimpleChange(this._expr_62, currVal_62);
            this._expr_62 = currVal_62;
        }
        if ((changes !== null)) {
            this._RouterLinkWithHref_66_3.ngOnChanges(changes);
        }
        changes = null;
        const currVal_66 = this._arr_16('/demo/treeview');
        if (import4.checkBinding(throwOnChange, this._expr_66, currVal_66)) {
            this._RouterLinkWithHref_69_3.routerLink = currVal_66;
            if ((changes === null)) {
                (changes = {});
            }
            changes['routerLink'] = new import7.SimpleChange(this._expr_66, currVal_66);
            this._expr_66 = currVal_66;
        }
        if ((changes !== null)) {
            this._RouterLinkWithHref_69_3.ngOnChanges(changes);
        }
        changes = null;
        const currVal_70 = this._arr_17('/demo/grid');
        if (import4.checkBinding(throwOnChange, this._expr_70, currVal_70)) {
            this._RouterLinkWithHref_72_3.routerLink = currVal_70;
            if ((changes === null)) {
                (changes = {});
            }
            changes['routerLink'] = new import7.SimpleChange(this._expr_70, currVal_70);
            this._expr_70 = currVal_70;
        }
        if ((changes !== null)) {
            this._RouterLinkWithHref_72_3.ngOnChanges(changes);
        }
        changes = null;
        const currVal_74 = this._arr_18('/demo/address');
        if (import4.checkBinding(throwOnChange, this._expr_74, currVal_74)) {
            this._RouterLinkWithHref_75_3.routerLink = currVal_74;
            if ((changes === null)) {
                (changes = {});
            }
            changes['routerLink'] = new import7.SimpleChange(this._expr_74, currVal_74);
            this._expr_74 = currVal_74;
        }
        if ((changes !== null)) {
            this._RouterLinkWithHref_75_3.ngOnChanges(changes);
        }
        changes = null;
        const currVal_78 = this._arr_19('/demo/jquery');
        if (import4.checkBinding(throwOnChange, this._expr_78, currVal_78)) {
            this._RouterLinkWithHref_78_3.routerLink = currVal_78;
            if ((changes === null)) {
                (changes = {});
            }
            changes['routerLink'] = new import7.SimpleChange(this._expr_78, currVal_78);
            this._expr_78 = currVal_78;
        }
        if ((changes !== null)) {
            this._RouterLinkWithHref_78_3.ngOnChanges(changes);
        }
        changes = null;
        const currVal_82 = this._arr_20('/demo/parent-child');
        if (import4.checkBinding(throwOnChange, this._expr_82, currVal_82)) {
            this._RouterLinkWithHref_81_3.routerLink = currVal_82;
            if ((changes === null)) {
                (changes = {});
            }
            changes['routerLink'] = new import7.SimpleChange(this._expr_82, currVal_82);
            this._expr_82 = currVal_82;
        }
        if ((changes !== null)) {
            this._RouterLinkWithHref_81_3.ngOnChanges(changes);
        }
        changes = null;
        const currVal_86 = this._arr_21('/demo/contact');
        if (import4.checkBinding(throwOnChange, this._expr_86, currVal_86)) {
            this._RouterLinkWithHref_84_3.routerLink = currVal_86;
            if ((changes === null)) {
                (changes = {});
            }
            changes['routerLink'] = new import7.SimpleChange(this._expr_86, currVal_86);
            this._expr_86 = currVal_86;
        }
        if ((changes !== null)) {
            this._RouterLinkWithHref_84_3.ngOnChanges(changes);
        }
        changes = null;
        const currVal_90 = this._arr_22('/demo/textbox');
        if (import4.checkBinding(throwOnChange, this._expr_90, currVal_90)) {
            this._RouterLinkWithHref_87_3.routerLink = currVal_90;
            if ((changes === null)) {
                (changes = {});
            }
            changes['routerLink'] = new import7.SimpleChange(this._expr_90, currVal_90);
            this._expr_90 = currVal_90;
        }
        if ((changes !== null)) {
            this._RouterLinkWithHref_87_3.ngOnChanges(changes);
        }
        changes = null;
        const currVal_94 = this._arr_23('/demo/iodemo');
        if (import4.checkBinding(throwOnChange, this._expr_94, currVal_94)) {
            this._RouterLinkWithHref_90_3.routerLink = currVal_94;
            if ((changes === null)) {
                (changes = {});
            }
            changes['routerLink'] = new import7.SimpleChange(this._expr_94, currVal_94);
            this._expr_94 = currVal_94;
        }
        if ((changes !== null)) {
            this._RouterLinkWithHref_90_3.ngOnChanges(changes);
        }
        changes = null;
        const currVal_98 = this._arr_24('/demo/non-bindable');
        if (import4.checkBinding(throwOnChange, this._expr_98, currVal_98)) {
            this._RouterLinkWithHref_93_3.routerLink = currVal_98;
            if ((changes === null)) {
                (changes = {});
            }
            changes['routerLink'] = new import7.SimpleChange(this._expr_98, currVal_98);
            this._expr_98 = currVal_98;
        }
        if ((changes !== null)) {
            this._RouterLinkWithHref_93_3.ngOnChanges(changes);
        }
        this.detectContentChildrenChanges(throwOnChange);
        const currVal_1 = this.context.getLinkStyle('/demo/spreadsheet');
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementClass(this._el_21, 'active', currVal_1);
            this._expr_1 = currVal_1;
        }
        const currVal_3 = this._RouterLinkWithHref_21_3.href;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementProperty(this._el_21, 'href', this.viewUtils.sanitizer.sanitize(import18.SecurityContext.URL, currVal_3));
            this._expr_3 = currVal_3;
        }
        const currVal_5 = this.context.getLinkStyle('/demo/countries');
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementClass(this._el_24, 'active', currVal_5);
            this._expr_5 = currVal_5;
        }
        const currVal_7 = this._RouterLinkWithHref_24_3.href;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementProperty(this._el_24, 'href', this.viewUtils.sanitizer.sanitize(import18.SecurityContext.URL, currVal_7));
            this._expr_7 = currVal_7;
        }
        const currVal_9 = this.context.getLinkStyle('/demo/rxjs');
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setElementClass(this._el_27, 'active', currVal_9);
            this._expr_9 = currVal_9;
        }
        const currVal_11 = this._RouterLinkWithHref_27_3.href;
        if (import4.checkBinding(throwOnChange, this._expr_11, currVal_11)) {
            this.renderer.setElementProperty(this._el_27, 'href', this.viewUtils.sanitizer.sanitize(import18.SecurityContext.URL, currVal_11));
            this._expr_11 = currVal_11;
        }
        const currVal_13 = this.context.getLinkStyle('/demo/friends');
        if (import4.checkBinding(throwOnChange, this._expr_13, currVal_13)) {
            this.renderer.setElementClass(this._el_30, 'active', currVal_13);
            this._expr_13 = currVal_13;
        }
        const currVal_15 = this._RouterLinkWithHref_30_3.href;
        if (import4.checkBinding(throwOnChange, this._expr_15, currVal_15)) {
            this.renderer.setElementProperty(this._el_30, 'href', this.viewUtils.sanitizer.sanitize(import18.SecurityContext.URL, currVal_15));
            this._expr_15 = currVal_15;
        }
        const currVal_17 = this.context.getLinkStyle('/demo/react');
        if (import4.checkBinding(throwOnChange, this._expr_17, currVal_17)) {
            this.renderer.setElementClass(this._el_33, 'active', currVal_17);
            this._expr_17 = currVal_17;
        }
        const currVal_19 = this._RouterLinkWithHref_33_3.href;
        if (import4.checkBinding(throwOnChange, this._expr_19, currVal_19)) {
            this.renderer.setElementProperty(this._el_33, 'href', this.viewUtils.sanitizer.sanitize(import18.SecurityContext.URL, currVal_19));
            this._expr_19 = currVal_19;
        }
        const currVal_21 = this.context.getLinkStyle('/demo/graph');
        if (import4.checkBinding(throwOnChange, this._expr_21, currVal_21)) {
            this.renderer.setElementClass(this._el_36, 'active', currVal_21);
            this._expr_21 = currVal_21;
        }
        const currVal_23 = this._RouterLinkWithHref_36_3.href;
        if (import4.checkBinding(throwOnChange, this._expr_23, currVal_23)) {
            this.renderer.setElementProperty(this._el_36, 'href', this.viewUtils.sanitizer.sanitize(import18.SecurityContext.URL, currVal_23));
            this._expr_23 = currVal_23;
        }
        const currVal_25 = this.context.getLinkStyle('/demo/algorithms');
        if (import4.checkBinding(throwOnChange, this._expr_25, currVal_25)) {
            this.renderer.setElementClass(this._el_39, 'active', currVal_25);
            this._expr_25 = currVal_25;
        }
        const currVal_27 = this._RouterLinkWithHref_39_3.href;
        if (import4.checkBinding(throwOnChange, this._expr_27, currVal_27)) {
            this.renderer.setElementProperty(this._el_39, 'href', this.viewUtils.sanitizer.sanitize(import18.SecurityContext.URL, currVal_27));
            this._expr_27 = currVal_27;
        }
        const currVal_29 = this.context.getLinkStyle('/demo/redux');
        if (import4.checkBinding(throwOnChange, this._expr_29, currVal_29)) {
            this.renderer.setElementClass(this._el_42, 'active', currVal_29);
            this._expr_29 = currVal_29;
        }
        const currVal_31 = this._RouterLinkWithHref_42_3.href;
        if (import4.checkBinding(throwOnChange, this._expr_31, currVal_31)) {
            this.renderer.setElementProperty(this._el_42, 'href', this.viewUtils.sanitizer.sanitize(import18.SecurityContext.URL, currVal_31));
            this._expr_31 = currVal_31;
        }
        const currVal_33 = this.context.getLinkStyle('/demo/buffering');
        if (import4.checkBinding(throwOnChange, this._expr_33, currVal_33)) {
            this.renderer.setElementClass(this._el_45, 'active', currVal_33);
            this._expr_33 = currVal_33;
        }
        const currVal_35 = this._RouterLinkWithHref_45_3.href;
        if (import4.checkBinding(throwOnChange, this._expr_35, currVal_35)) {
            this.renderer.setElementProperty(this._el_45, 'href', this.viewUtils.sanitizer.sanitize(import18.SecurityContext.URL, currVal_35));
            this._expr_35 = currVal_35;
        }
        const currVal_37 = this.context.getLinkStyle('/demo/survey');
        if (import4.checkBinding(throwOnChange, this._expr_37, currVal_37)) {
            this.renderer.setElementClass(this._el_48, 'active', currVal_37);
            this._expr_37 = currVal_37;
        }
        const currVal_39 = this._RouterLinkWithHref_48_3.href;
        if (import4.checkBinding(throwOnChange, this._expr_39, currVal_39)) {
            this.renderer.setElementProperty(this._el_48, 'href', this.viewUtils.sanitizer.sanitize(import18.SecurityContext.URL, currVal_39));
            this._expr_39 = currVal_39;
        }
        const currVal_41 = this.context.getLinkStyle('/demo/pub-sub');
        if (import4.checkBinding(throwOnChange, this._expr_41, currVal_41)) {
            this.renderer.setElementClass(this._el_51, 'active', currVal_41);
            this._expr_41 = currVal_41;
        }
        const currVal_43 = this._RouterLinkWithHref_51_3.href;
        if (import4.checkBinding(throwOnChange, this._expr_43, currVal_43)) {
            this.renderer.setElementProperty(this._el_51, 'href', this.viewUtils.sanitizer.sanitize(import18.SecurityContext.URL, currVal_43));
            this._expr_43 = currVal_43;
        }
        const currVal_45 = this.context.getLinkStyle('/demo/text-editor');
        if (import4.checkBinding(throwOnChange, this._expr_45, currVal_45)) {
            this.renderer.setElementClass(this._el_54, 'active', currVal_45);
            this._expr_45 = currVal_45;
        }
        const currVal_47 = this._RouterLinkWithHref_54_3.href;
        if (import4.checkBinding(throwOnChange, this._expr_47, currVal_47)) {
            this.renderer.setElementProperty(this._el_54, 'href', this.viewUtils.sanitizer.sanitize(import18.SecurityContext.URL, currVal_47));
            this._expr_47 = currVal_47;
        }
        const currVal_49 = this.context.getLinkStyle('/demo/form');
        if (import4.checkBinding(throwOnChange, this._expr_49, currVal_49)) {
            this.renderer.setElementClass(this._el_57, 'active', currVal_49);
            this._expr_49 = currVal_49;
        }
        const currVal_51 = this._RouterLinkWithHref_57_3.href;
        if (import4.checkBinding(throwOnChange, this._expr_51, currVal_51)) {
            this.renderer.setElementProperty(this._el_57, 'href', this.viewUtils.sanitizer.sanitize(import18.SecurityContext.URL, currVal_51));
            this._expr_51 = currVal_51;
        }
        const currVal_53 = this.context.getLinkStyle('/demo/change');
        if (import4.checkBinding(throwOnChange, this._expr_53, currVal_53)) {
            this.renderer.setElementClass(this._el_60, 'active', currVal_53);
            this._expr_53 = currVal_53;
        }
        const currVal_55 = this._RouterLinkWithHref_60_3.href;
        if (import4.checkBinding(throwOnChange, this._expr_55, currVal_55)) {
            this.renderer.setElementProperty(this._el_60, 'href', this.viewUtils.sanitizer.sanitize(import18.SecurityContext.URL, currVal_55));
            this._expr_55 = currVal_55;
        }
        const currVal_57 = this.context.getLinkStyle('/demo/http');
        if (import4.checkBinding(throwOnChange, this._expr_57, currVal_57)) {
            this.renderer.setElementClass(this._el_63, 'active', currVal_57);
            this._expr_57 = currVal_57;
        }
        const currVal_59 = this._RouterLinkWithHref_63_3.href;
        if (import4.checkBinding(throwOnChange, this._expr_59, currVal_59)) {
            this.renderer.setElementProperty(this._el_63, 'href', this.viewUtils.sanitizer.sanitize(import18.SecurityContext.URL, currVal_59));
            this._expr_59 = currVal_59;
        }
        const currVal_61 = this.context.getLinkStyle('/demo/input');
        if (import4.checkBinding(throwOnChange, this._expr_61, currVal_61)) {
            this.renderer.setElementClass(this._el_66, 'active', currVal_61);
            this._expr_61 = currVal_61;
        }
        const currVal_63 = this._RouterLinkWithHref_66_3.href;
        if (import4.checkBinding(throwOnChange, this._expr_63, currVal_63)) {
            this.renderer.setElementProperty(this._el_66, 'href', this.viewUtils.sanitizer.sanitize(import18.SecurityContext.URL, currVal_63));
            this._expr_63 = currVal_63;
        }
        const currVal_65 = this.context.getLinkStyle('/demo/treeview');
        if (import4.checkBinding(throwOnChange, this._expr_65, currVal_65)) {
            this.renderer.setElementClass(this._el_69, 'active', currVal_65);
            this._expr_65 = currVal_65;
        }
        const currVal_67 = this._RouterLinkWithHref_69_3.href;
        if (import4.checkBinding(throwOnChange, this._expr_67, currVal_67)) {
            this.renderer.setElementProperty(this._el_69, 'href', this.viewUtils.sanitizer.sanitize(import18.SecurityContext.URL, currVal_67));
            this._expr_67 = currVal_67;
        }
        const currVal_69 = this.context.getLinkStyle('/demo/grid');
        if (import4.checkBinding(throwOnChange, this._expr_69, currVal_69)) {
            this.renderer.setElementClass(this._el_72, 'active', currVal_69);
            this._expr_69 = currVal_69;
        }
        const currVal_71 = this._RouterLinkWithHref_72_3.href;
        if (import4.checkBinding(throwOnChange, this._expr_71, currVal_71)) {
            this.renderer.setElementProperty(this._el_72, 'href', this.viewUtils.sanitizer.sanitize(import18.SecurityContext.URL, currVal_71));
            this._expr_71 = currVal_71;
        }
        const currVal_73 = this.context.getLinkStyle('/demo/address');
        if (import4.checkBinding(throwOnChange, this._expr_73, currVal_73)) {
            this.renderer.setElementClass(this._el_75, 'active', currVal_73);
            this._expr_73 = currVal_73;
        }
        const currVal_75 = this._RouterLinkWithHref_75_3.href;
        if (import4.checkBinding(throwOnChange, this._expr_75, currVal_75)) {
            this.renderer.setElementProperty(this._el_75, 'href', this.viewUtils.sanitizer.sanitize(import18.SecurityContext.URL, currVal_75));
            this._expr_75 = currVal_75;
        }
        const currVal_77 = this.context.getLinkStyle('/demo/jquery');
        if (import4.checkBinding(throwOnChange, this._expr_77, currVal_77)) {
            this.renderer.setElementClass(this._el_78, 'active', currVal_77);
            this._expr_77 = currVal_77;
        }
        const currVal_79 = this._RouterLinkWithHref_78_3.href;
        if (import4.checkBinding(throwOnChange, this._expr_79, currVal_79)) {
            this.renderer.setElementProperty(this._el_78, 'href', this.viewUtils.sanitizer.sanitize(import18.SecurityContext.URL, currVal_79));
            this._expr_79 = currVal_79;
        }
        const currVal_81 = this.context.getLinkStyle('/demo/parent-child');
        if (import4.checkBinding(throwOnChange, this._expr_81, currVal_81)) {
            this.renderer.setElementClass(this._el_81, 'active', currVal_81);
            this._expr_81 = currVal_81;
        }
        const currVal_83 = this._RouterLinkWithHref_81_3.href;
        if (import4.checkBinding(throwOnChange, this._expr_83, currVal_83)) {
            this.renderer.setElementProperty(this._el_81, 'href', this.viewUtils.sanitizer.sanitize(import18.SecurityContext.URL, currVal_83));
            this._expr_83 = currVal_83;
        }
        const currVal_85 = this.context.getLinkStyle('/demo/contact');
        if (import4.checkBinding(throwOnChange, this._expr_85, currVal_85)) {
            this.renderer.setElementClass(this._el_84, 'active', currVal_85);
            this._expr_85 = currVal_85;
        }
        const currVal_87 = this._RouterLinkWithHref_84_3.href;
        if (import4.checkBinding(throwOnChange, this._expr_87, currVal_87)) {
            this.renderer.setElementProperty(this._el_84, 'href', this.viewUtils.sanitizer.sanitize(import18.SecurityContext.URL, currVal_87));
            this._expr_87 = currVal_87;
        }
        const currVal_89 = this.context.getLinkStyle('/demo/textbox');
        if (import4.checkBinding(throwOnChange, this._expr_89, currVal_89)) {
            this.renderer.setElementClass(this._el_87, 'active', currVal_89);
            this._expr_89 = currVal_89;
        }
        const currVal_91 = this._RouterLinkWithHref_87_3.href;
        if (import4.checkBinding(throwOnChange, this._expr_91, currVal_91)) {
            this.renderer.setElementProperty(this._el_87, 'href', this.viewUtils.sanitizer.sanitize(import18.SecurityContext.URL, currVal_91));
            this._expr_91 = currVal_91;
        }
        const currVal_93 = this.context.getLinkStyle('/demo/iodemo');
        if (import4.checkBinding(throwOnChange, this._expr_93, currVal_93)) {
            this.renderer.setElementClass(this._el_90, 'active', currVal_93);
            this._expr_93 = currVal_93;
        }
        const currVal_95 = this._RouterLinkWithHref_90_3.href;
        if (import4.checkBinding(throwOnChange, this._expr_95, currVal_95)) {
            this.renderer.setElementProperty(this._el_90, 'href', this.viewUtils.sanitizer.sanitize(import18.SecurityContext.URL, currVal_95));
            this._expr_95 = currVal_95;
        }
        const currVal_97 = this.context.getLinkStyle('/demo/non-bindable');
        if (import4.checkBinding(throwOnChange, this._expr_97, currVal_97)) {
            this.renderer.setElementClass(this._el_93, 'active', currVal_97);
            this._expr_97 = currVal_97;
        }
        const currVal_99 = this._RouterLinkWithHref_93_3.href;
        if (import4.checkBinding(throwOnChange, this._expr_99, currVal_99)) {
            this.renderer.setElementProperty(this._el_93, 'href', this.viewUtils.sanitizer.sanitize(import18.SecurityContext.URL, currVal_99));
            this._expr_99 = currVal_99;
        }
        this.detectViewChildrenChanges(throwOnChange);
    }
    destroyInternal() {
        this._RouterLinkWithHref_21_3.ngOnDestroy();
        this._RouterLinkWithHref_24_3.ngOnDestroy();
        this._RouterLinkWithHref_27_3.ngOnDestroy();
        this._RouterLinkWithHref_30_3.ngOnDestroy();
        this._RouterLinkWithHref_33_3.ngOnDestroy();
        this._RouterLinkWithHref_36_3.ngOnDestroy();
        this._RouterLinkWithHref_39_3.ngOnDestroy();
        this._RouterLinkWithHref_42_3.ngOnDestroy();
        this._RouterLinkWithHref_45_3.ngOnDestroy();
        this._RouterLinkWithHref_48_3.ngOnDestroy();
        this._RouterLinkWithHref_51_3.ngOnDestroy();
        this._RouterLinkWithHref_54_3.ngOnDestroy();
        this._RouterLinkWithHref_57_3.ngOnDestroy();
        this._RouterLinkWithHref_60_3.ngOnDestroy();
        this._RouterLinkWithHref_63_3.ngOnDestroy();
        this._RouterLinkWithHref_66_3.ngOnDestroy();
        this._RouterLinkWithHref_69_3.ngOnDestroy();
        this._RouterLinkWithHref_72_3.ngOnDestroy();
        this._RouterLinkWithHref_75_3.ngOnDestroy();
        this._RouterLinkWithHref_78_3.ngOnDestroy();
        this._RouterLinkWithHref_81_3.ngOnDestroy();
        this._RouterLinkWithHref_84_3.ngOnDestroy();
        this._RouterLinkWithHref_87_3.ngOnDestroy();
        this._RouterLinkWithHref_90_3.ngOnDestroy();
        this._RouterLinkWithHref_93_3.ngOnDestroy();
        this._RouterOutlet_99_5.ngOnDestroy();
    }
    _handle_click_21_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this._RouterLinkWithHref_21_3.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_0);
    }
    _handle_click_24_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this._RouterLinkWithHref_24_3.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_0);
    }
    _handle_click_27_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this._RouterLinkWithHref_27_3.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_0);
    }
    _handle_click_30_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this._RouterLinkWithHref_30_3.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_0);
    }
    _handle_click_33_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this._RouterLinkWithHref_33_3.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_0);
    }
    _handle_click_36_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this._RouterLinkWithHref_36_3.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_0);
    }
    _handle_click_39_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this._RouterLinkWithHref_39_3.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_0);
    }
    _handle_click_42_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this._RouterLinkWithHref_42_3.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_0);
    }
    _handle_click_45_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this._RouterLinkWithHref_45_3.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_0);
    }
    _handle_click_48_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this._RouterLinkWithHref_48_3.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_0);
    }
    _handle_click_51_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this._RouterLinkWithHref_51_3.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_0);
    }
    _handle_click_54_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this._RouterLinkWithHref_54_3.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_0);
    }
    _handle_click_57_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this._RouterLinkWithHref_57_3.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_0);
    }
    _handle_click_60_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this._RouterLinkWithHref_60_3.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_0);
    }
    _handle_click_63_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this._RouterLinkWithHref_63_3.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_0);
    }
    _handle_click_66_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this._RouterLinkWithHref_66_3.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_0);
    }
    _handle_click_69_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this._RouterLinkWithHref_69_3.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_0);
    }
    _handle_click_72_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this._RouterLinkWithHref_72_3.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_0);
    }
    _handle_click_75_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this._RouterLinkWithHref_75_3.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_0);
    }
    _handle_click_78_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this._RouterLinkWithHref_78_3.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_0);
    }
    _handle_click_81_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this._RouterLinkWithHref_81_3.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_0);
    }
    _handle_click_84_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this._RouterLinkWithHref_84_3.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_0);
    }
    _handle_click_87_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this._RouterLinkWithHref_87_3.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_0);
    }
    _handle_click_90_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this._RouterLinkWithHref_90_3.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_0);
    }
    _handle_click_93_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this._RouterLinkWithHref_93_3.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_0);
    }
}
export function viewFactory_DemoPage0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_DemoPage === null)) {
        (renderType_DemoPage = viewUtils.createRenderComponentType('/Users/tor/Development/angular-2-samples/demo-page.html', 0, import9.ViewEncapsulation.None, styles_DemoPage, {}));
    }
    return new _View_DemoPage0(viewUtils, parentInjector, declarationEl);
}
