import * as import0 from '../demo-page';
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
export class Wrapper_DemoPage {
    constructor(p0) {
        this.changed = false;
        this.context = new import0.DemoPage(p0);
    }
    detectChangesInInputProps(view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    }
    detectChangesInHostProps(view, el, throwOnChange) {
    }
}
var renderType_DemoPage_Host = null;
class _View_DemoPage_Host0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_DemoPage_Host0, renderType_DemoPage_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer, 'demo-page', import4.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_DemoPage0(this.viewUtils, this.injector(0), this._appEl_0);
        this._DemoPage_0_4 = new Wrapper_DemoPage(this.parentInjector.get(import8.Location));
        this._appEl_0.initComponent(this._DemoPage_0_4.context, [], compView_0);
        compView_0.create(this._DemoPage_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.DemoPage) && (0 === requestNodeIndex))) {
            return this._DemoPage_0_4.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._DemoPage_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._DemoPage_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
}
function viewFactory_DemoPage_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_DemoPage_Host === null)) {
        (renderType_DemoPage_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_DemoPage_Host0(viewUtils, parentInjector, declarationEl);
}
export const DemoPageNgFactory = new import10.ComponentFactory('demo-page', viewFactory_DemoPage_Host0, import0.DemoPage);
const styles_DemoPage = [];
var renderType_DemoPage = null;
class _View_DemoPage0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_DemoPage0, renderType_DemoPage, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_130 = import7.UNINITIALIZED;
        this._arr_131 = import4.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_132 = import7.UNINITIALIZED;
        this._arr_133 = import4.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_134 = import7.UNINITIALIZED;
        this._arr_135 = import4.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_136 = import7.UNINITIALIZED;
        this._arr_137 = import4.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_138 = import7.UNINITIALIZED;
        this._arr_139 = import4.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_140 = import7.UNINITIALIZED;
        this._arr_141 = import4.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_142 = import7.UNINITIALIZED;
        this._arr_143 = import4.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_144 = import7.UNINITIALIZED;
        this._arr_145 = import4.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_146 = import7.UNINITIALIZED;
        this._arr_147 = import4.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_148 = import7.UNINITIALIZED;
        this._arr_149 = import4.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_150 = import7.UNINITIALIZED;
        this._arr_151 = import4.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_152 = import7.UNINITIALIZED;
        this._arr_153 = import4.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_154 = import7.UNINITIALIZED;
        this._arr_155 = import4.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_156 = import7.UNINITIALIZED;
        this._arr_157 = import4.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_158 = import7.UNINITIALIZED;
        this._arr_159 = import4.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_160 = import7.UNINITIALIZED;
        this._arr_161 = import4.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_162 = import7.UNINITIALIZED;
        this._arr_163 = import4.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_164 = import7.UNINITIALIZED;
        this._arr_165 = import4.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_166 = import7.UNINITIALIZED;
        this._arr_167 = import4.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_168 = import7.UNINITIALIZED;
        this._arr_169 = import4.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_170 = import7.UNINITIALIZED;
        this._arr_171 = import4.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_172 = import7.UNINITIALIZED;
        this._arr_173 = import4.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_174 = import7.UNINITIALIZED;
        this._arr_175 = import4.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_176 = import7.UNINITIALIZED;
        this._arr_177 = import4.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_178 = import7.UNINITIALIZED;
        this._arr_179 = import4.pureProxy1((p0) => {
            return [p0];
        });
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = import4.createRenderElement(this.renderer, parentRenderNode, 'div', new import4.InlineArray2(2, 'class', 'container'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_2 = import4.createRenderElement(this.renderer, this._el_0, 'div', new import4.InlineArray2(2, 'class', 'jumbotron'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_4 = import4.createRenderElement(this.renderer, this._el_2, 'h1', import4.EMPTY_INLINE_ARRAY, null);
        this._text_5 = this.renderer.createText(this._el_4, 'Angular 2.0 sample components', null);
        this._text_6 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_7 = import4.createRenderElement(this.renderer, this._el_2, 'p', import4.EMPTY_INLINE_ARRAY, null);
        this._text_8 = this.renderer.createText(this._el_7, '\n            More documentation about each specific component can be found\n            ', null);
        this._el_9 = import4.createRenderElement(this.renderer, this._el_7, 'a', new import4.InlineArray2(2, 'href', 'http://www.syntaxsuccess.com/viewarticle/angular-2.0-examples'), null);
        this._text_10 = this.renderer.createText(this._el_9, 'here', null);
        this._text_11 = this.renderer.createText(this._el_7, '.\n        ', null);
        this._text_12 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_13 = import4.createRenderElement(this.renderer, this._el_2, 'p', import4.EMPTY_INLINE_ARRAY, null);
        this._text_14 = this.renderer.createText(this._el_13, 'Current version: Angular 2.2.beta.1', null);
        this._text_15 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_16 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_17 = import4.createRenderElement(this.renderer, this._el_0, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._text_18 = this.renderer.createText(this._el_17, '\n        ', null);
        this._el_19 = import4.createRenderElement(this.renderer, this._el_17, 'div', new import4.InlineArray2(2, 'class', 'list-group col-md-3'), null);
        this._text_20 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_21 = import4.createRenderElement(this.renderer, this._el_19, 'a', new import4.InlineArray2(2, 'class', 'list-group-item'), null);
        this._RouterLinkWithHref_21_3 = new import11.Wrapper_RouterLinkWithHref(this.parentInjector.get(import13.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._text_22 = this.renderer.createText(this._el_21, 'Virtualized Spreadsheet', null);
        this._text_23 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_24 = import4.createRenderElement(this.renderer, this._el_19, 'a', new import4.InlineArray2(2, 'class', 'list-group-item'), null);
        this._RouterLinkWithHref_24_3 = new import11.Wrapper_RouterLinkWithHref(this.parentInjector.get(import13.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._text_25 = this.renderer.createText(this._el_24, 'Lazy Loaded Tree View', null);
        this._text_26 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_27 = import4.createRenderElement(this.renderer, this._el_19, 'a', new import4.InlineArray2(2, 'class', 'list-group-item'), null);
        this._RouterLinkWithHref_27_3 = new import11.Wrapper_RouterLinkWithHref(this.parentInjector.get(import13.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._text_28 = this.renderer.createText(this._el_27, 'RxJs Streams', null);
        this._text_29 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_30 = import4.createRenderElement(this.renderer, this._el_19, 'a', new import4.InlineArray2(2, 'class', 'list-group-item'), null);
        this._RouterLinkWithHref_30_3 = new import11.Wrapper_RouterLinkWithHref(this.parentInjector.get(import13.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._text_31 = this.renderer.createText(this._el_30, 'RxJs Caching', null);
        this._text_32 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_33 = import4.createRenderElement(this.renderer, this._el_19, 'a', new import4.InlineArray2(2, 'class', 'list-group-item'), null);
        this._RouterLinkWithHref_33_3 = new import11.Wrapper_RouterLinkWithHref(this.parentInjector.get(import13.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._text_34 = this.renderer.createText(this._el_33, 'React Integration', null);
        this._text_35 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_36 = import4.createRenderElement(this.renderer, this._el_19, 'a', new import4.InlineArray2(2, 'class', 'list-group-item'), null);
        this._RouterLinkWithHref_36_3 = new import11.Wrapper_RouterLinkWithHref(this.parentInjector.get(import13.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._text_37 = this.renderer.createText(this._el_36, 'Graph', null);
        this._text_38 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_39 = import4.createRenderElement(this.renderer, this._el_19, 'a', new import4.InlineArray2(2, 'class', 'list-group-item'), null);
        this._RouterLinkWithHref_39_3 = new import11.Wrapper_RouterLinkWithHref(this.parentInjector.get(import13.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._text_40 = this.renderer.createText(this._el_39, 'Insertion Sort', null);
        this._text_41 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_42 = import4.createRenderElement(this.renderer, this._el_19, 'a', new import4.InlineArray2(2, 'class', 'list-group-item'), null);
        this._RouterLinkWithHref_42_3 = new import11.Wrapper_RouterLinkWithHref(this.parentInjector.get(import13.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._text_43 = this.renderer.createText(this._el_42, 'Redux', null);
        this._text_44 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_45 = import4.createRenderElement(this.renderer, this._el_19, 'a', new import4.InlineArray2(2, 'class', 'list-group-item'), null);
        this._RouterLinkWithHref_45_3 = new import11.Wrapper_RouterLinkWithHref(this.parentInjector.get(import13.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._text_46 = this.renderer.createText(this._el_45, 'Buffering in RxJs', null);
        this._text_47 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_48 = import4.createRenderElement(this.renderer, this._el_19, 'a', new import4.InlineArray2(2, 'class', 'list-group-item'), null);
        this._RouterLinkWithHref_48_3 = new import11.Wrapper_RouterLinkWithHref(this.parentInjector.get(import13.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._text_49 = this.renderer.createText(this._el_48, 'Dynamic Form', null);
        this._text_50 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_51 = import4.createRenderElement(this.renderer, this._el_19, 'a', new import4.InlineArray2(2, 'class', 'list-group-item'), null);
        this._RouterLinkWithHref_51_3 = new import11.Wrapper_RouterLinkWithHref(this.parentInjector.get(import13.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._text_52 = this.renderer.createText(this._el_51, 'Pub Sub', null);
        this._text_53 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_54 = import4.createRenderElement(this.renderer, this._el_19, 'a', new import4.InlineArray2(2, 'class', 'list-group-item'), null);
        this._RouterLinkWithHref_54_3 = new import11.Wrapper_RouterLinkWithHref(this.parentInjector.get(import13.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._text_55 = this.renderer.createText(this._el_54, 'Text Editor', null);
        this._text_56 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_57 = import4.createRenderElement(this.renderer, this._el_19, 'a', new import4.InlineArray2(2, 'class', 'list-group-item'), null);
        this._RouterLinkWithHref_57_3 = new import11.Wrapper_RouterLinkWithHref(this.parentInjector.get(import13.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._text_58 = this.renderer.createText(this._el_57, 'Form', null);
        this._text_59 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_60 = import4.createRenderElement(this.renderer, this._el_19, 'a', new import4.InlineArray2(2, 'class', 'list-group-item'), null);
        this._RouterLinkWithHref_60_3 = new import11.Wrapper_RouterLinkWithHref(this.parentInjector.get(import13.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._text_61 = this.renderer.createText(this._el_60, 'Change Detection', null);
        this._text_62 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_63 = import4.createRenderElement(this.renderer, this._el_19, 'a', new import4.InlineArray2(2, 'class', 'list-group-item'), null);
        this._RouterLinkWithHref_63_3 = new import11.Wrapper_RouterLinkWithHref(this.parentInjector.get(import13.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._text_64 = this.renderer.createText(this._el_63, 'Http', null);
        this._text_65 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_66 = import4.createRenderElement(this.renderer, this._el_19, 'a', new import4.InlineArray2(2, 'class', 'list-group-item'), null);
        this._RouterLinkWithHref_66_3 = new import11.Wrapper_RouterLinkWithHref(this.parentInjector.get(import13.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._text_67 = this.renderer.createText(this._el_66, 'Input Controls', null);
        this._text_68 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_69 = import4.createRenderElement(this.renderer, this._el_19, 'a', new import4.InlineArray2(2, 'class', 'list-group-item'), null);
        this._RouterLinkWithHref_69_3 = new import11.Wrapper_RouterLinkWithHref(this.parentInjector.get(import13.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._text_70 = this.renderer.createText(this._el_69, 'Recursive tree view', null);
        this._text_71 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_72 = import4.createRenderElement(this.renderer, this._el_19, 'a', new import4.InlineArray2(2, 'class', 'list-group-item'), null);
        this._RouterLinkWithHref_72_3 = new import11.Wrapper_RouterLinkWithHref(this.parentInjector.get(import13.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._text_73 = this.renderer.createText(this._el_72, 'Data Grid', null);
        this._text_74 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_75 = import4.createRenderElement(this.renderer, this._el_19, 'a', new import4.InlineArray2(2, 'class', 'list-group-item'), null);
        this._RouterLinkWithHref_75_3 = new import11.Wrapper_RouterLinkWithHref(this.parentInjector.get(import13.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._text_76 = this.renderer.createText(this._el_75, 'Address Book', null);
        this._text_77 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_78 = import4.createRenderElement(this.renderer, this._el_19, 'a', new import4.InlineArray2(2, 'class', 'list-group-item'), null);
        this._RouterLinkWithHref_78_3 = new import11.Wrapper_RouterLinkWithHref(this.parentInjector.get(import13.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._text_79 = this.renderer.createText(this._el_78, 'JQuery Integration', null);
        this._text_80 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_81 = import4.createRenderElement(this.renderer, this._el_19, 'a', new import4.InlineArray2(2, 'class', 'list-group-item'), null);
        this._RouterLinkWithHref_81_3 = new import11.Wrapper_RouterLinkWithHref(this.parentInjector.get(import13.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._text_82 = this.renderer.createText(this._el_81, 'Access Child Component', null);
        this._text_83 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_84 = import4.createRenderElement(this.renderer, this._el_19, 'a', new import4.InlineArray2(2, 'class', 'list-group-item'), null);
        this._RouterLinkWithHref_84_3 = new import11.Wrapper_RouterLinkWithHref(this.parentInjector.get(import13.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._text_85 = this.renderer.createText(this._el_84, 'Interactive contact list', null);
        this._text_86 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_87 = import4.createRenderElement(this.renderer, this._el_19, 'a', new import4.InlineArray2(2, 'class', 'list-group-item'), null);
        this._RouterLinkWithHref_87_3 = new import11.Wrapper_RouterLinkWithHref(this.parentInjector.get(import13.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._text_88 = this.renderer.createText(this._el_87, 'Bound Textbox', null);
        this._text_89 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_90 = import4.createRenderElement(this.renderer, this._el_19, 'a', new import4.InlineArray2(2, 'class', 'list-group-item'), null);
        this._RouterLinkWithHref_90_3 = new import11.Wrapper_RouterLinkWithHref(this.parentInjector.get(import13.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._text_91 = this.renderer.createText(this._el_90, 'Input/Output', null);
        this._text_92 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_93 = import4.createRenderElement(this.renderer, this._el_19, 'a', new import4.InlineArray2(2, 'class', 'list-group-item'), null);
        this._RouterLinkWithHref_93_3 = new import11.Wrapper_RouterLinkWithHref(this.parentInjector.get(import13.Router), this.parentInjector.get(import14.ActivatedRoute), this.parentInjector.get(import15.LocationStrategy));
        this._text_94 = this.renderer.createText(this._el_93, 'Non Bindable', null);
        this._text_95 = this.renderer.createText(this._el_19, '\n       ', null);
        this._text_96 = this.renderer.createText(this._el_17, '\n\n        ', null);
        this._el_97 = import4.createRenderElement(this.renderer, this._el_17, 'div', new import4.InlineArray2(2, 'class', 'col-md-9'), null);
        this._text_98 = this.renderer.createText(this._el_97, '\n            ', null);
        this._el_99 = import4.createRenderElement(this.renderer, this._el_97, 'router-outlet', import4.EMPTY_INLINE_ARRAY, null);
        this._appEl_99 = new import3.AppElement(99, 97, this, this._el_99);
        this._RouterOutlet_99_5 = new import12.Wrapper_RouterOutlet(this.parentInjector.get(import16.RouterOutletMap), this._appEl_99.vcRef, this.parentInjector.get(import17.ComponentFactoryResolver), null);
        this._text_100 = this.renderer.createText(this._el_97, '\n        ', null);
        this._text_101 = this.renderer.createText(this._el_17, '\n    ', null);
        this._text_102 = this.renderer.createText(this._el_0, '\n\n', null);
        var disposable_0 = this.renderer.listen(this._el_21, 'click', this.eventHandler(this._handle_click_21_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_24, 'click', this.eventHandler(this._handle_click_24_0.bind(this)));
        var disposable_2 = this.renderer.listen(this._el_27, 'click', this.eventHandler(this._handle_click_27_0.bind(this)));
        var disposable_3 = this.renderer.listen(this._el_30, 'click', this.eventHandler(this._handle_click_30_0.bind(this)));
        var disposable_4 = this.renderer.listen(this._el_33, 'click', this.eventHandler(this._handle_click_33_0.bind(this)));
        var disposable_5 = this.renderer.listen(this._el_36, 'click', this.eventHandler(this._handle_click_36_0.bind(this)));
        var disposable_6 = this.renderer.listen(this._el_39, 'click', this.eventHandler(this._handle_click_39_0.bind(this)));
        var disposable_7 = this.renderer.listen(this._el_42, 'click', this.eventHandler(this._handle_click_42_0.bind(this)));
        var disposable_8 = this.renderer.listen(this._el_45, 'click', this.eventHandler(this._handle_click_45_0.bind(this)));
        var disposable_9 = this.renderer.listen(this._el_48, 'click', this.eventHandler(this._handle_click_48_0.bind(this)));
        var disposable_10 = this.renderer.listen(this._el_51, 'click', this.eventHandler(this._handle_click_51_0.bind(this)));
        var disposable_11 = this.renderer.listen(this._el_54, 'click', this.eventHandler(this._handle_click_54_0.bind(this)));
        var disposable_12 = this.renderer.listen(this._el_57, 'click', this.eventHandler(this._handle_click_57_0.bind(this)));
        var disposable_13 = this.renderer.listen(this._el_60, 'click', this.eventHandler(this._handle_click_60_0.bind(this)));
        var disposable_14 = this.renderer.listen(this._el_63, 'click', this.eventHandler(this._handle_click_63_0.bind(this)));
        var disposable_15 = this.renderer.listen(this._el_66, 'click', this.eventHandler(this._handle_click_66_0.bind(this)));
        var disposable_16 = this.renderer.listen(this._el_69, 'click', this.eventHandler(this._handle_click_69_0.bind(this)));
        var disposable_17 = this.renderer.listen(this._el_72, 'click', this.eventHandler(this._handle_click_72_0.bind(this)));
        var disposable_18 = this.renderer.listen(this._el_75, 'click', this.eventHandler(this._handle_click_75_0.bind(this)));
        var disposable_19 = this.renderer.listen(this._el_78, 'click', this.eventHandler(this._handle_click_78_0.bind(this)));
        var disposable_20 = this.renderer.listen(this._el_81, 'click', this.eventHandler(this._handle_click_81_0.bind(this)));
        var disposable_21 = this.renderer.listen(this._el_84, 'click', this.eventHandler(this._handle_click_84_0.bind(this)));
        var disposable_22 = this.renderer.listen(this._el_87, 'click', this.eventHandler(this._handle_click_87_0.bind(this)));
        var disposable_23 = this.renderer.listen(this._el_90, 'click', this.eventHandler(this._handle_click_90_0.bind(this)));
        var disposable_24 = this.renderer.listen(this._el_93, 'click', this.eventHandler(this._handle_click_93_0.bind(this)));
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
        if (((token === import18.RouterLinkWithHref) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 22)))) {
            return this._RouterLinkWithHref_21_3.context;
        }
        if (((token === import18.RouterLinkWithHref) && ((24 <= requestNodeIndex) && (requestNodeIndex <= 25)))) {
            return this._RouterLinkWithHref_24_3.context;
        }
        if (((token === import18.RouterLinkWithHref) && ((27 <= requestNodeIndex) && (requestNodeIndex <= 28)))) {
            return this._RouterLinkWithHref_27_3.context;
        }
        if (((token === import18.RouterLinkWithHref) && ((30 <= requestNodeIndex) && (requestNodeIndex <= 31)))) {
            return this._RouterLinkWithHref_30_3.context;
        }
        if (((token === import18.RouterLinkWithHref) && ((33 <= requestNodeIndex) && (requestNodeIndex <= 34)))) {
            return this._RouterLinkWithHref_33_3.context;
        }
        if (((token === import18.RouterLinkWithHref) && ((36 <= requestNodeIndex) && (requestNodeIndex <= 37)))) {
            return this._RouterLinkWithHref_36_3.context;
        }
        if (((token === import18.RouterLinkWithHref) && ((39 <= requestNodeIndex) && (requestNodeIndex <= 40)))) {
            return this._RouterLinkWithHref_39_3.context;
        }
        if (((token === import18.RouterLinkWithHref) && ((42 <= requestNodeIndex) && (requestNodeIndex <= 43)))) {
            return this._RouterLinkWithHref_42_3.context;
        }
        if (((token === import18.RouterLinkWithHref) && ((45 <= requestNodeIndex) && (requestNodeIndex <= 46)))) {
            return this._RouterLinkWithHref_45_3.context;
        }
        if (((token === import18.RouterLinkWithHref) && ((48 <= requestNodeIndex) && (requestNodeIndex <= 49)))) {
            return this._RouterLinkWithHref_48_3.context;
        }
        if (((token === import18.RouterLinkWithHref) && ((51 <= requestNodeIndex) && (requestNodeIndex <= 52)))) {
            return this._RouterLinkWithHref_51_3.context;
        }
        if (((token === import18.RouterLinkWithHref) && ((54 <= requestNodeIndex) && (requestNodeIndex <= 55)))) {
            return this._RouterLinkWithHref_54_3.context;
        }
        if (((token === import18.RouterLinkWithHref) && ((57 <= requestNodeIndex) && (requestNodeIndex <= 58)))) {
            return this._RouterLinkWithHref_57_3.context;
        }
        if (((token === import18.RouterLinkWithHref) && ((60 <= requestNodeIndex) && (requestNodeIndex <= 61)))) {
            return this._RouterLinkWithHref_60_3.context;
        }
        if (((token === import18.RouterLinkWithHref) && ((63 <= requestNodeIndex) && (requestNodeIndex <= 64)))) {
            return this._RouterLinkWithHref_63_3.context;
        }
        if (((token === import18.RouterLinkWithHref) && ((66 <= requestNodeIndex) && (requestNodeIndex <= 67)))) {
            return this._RouterLinkWithHref_66_3.context;
        }
        if (((token === import18.RouterLinkWithHref) && ((69 <= requestNodeIndex) && (requestNodeIndex <= 70)))) {
            return this._RouterLinkWithHref_69_3.context;
        }
        if (((token === import18.RouterLinkWithHref) && ((72 <= requestNodeIndex) && (requestNodeIndex <= 73)))) {
            return this._RouterLinkWithHref_72_3.context;
        }
        if (((token === import18.RouterLinkWithHref) && ((75 <= requestNodeIndex) && (requestNodeIndex <= 76)))) {
            return this._RouterLinkWithHref_75_3.context;
        }
        if (((token === import18.RouterLinkWithHref) && ((78 <= requestNodeIndex) && (requestNodeIndex <= 79)))) {
            return this._RouterLinkWithHref_78_3.context;
        }
        if (((token === import18.RouterLinkWithHref) && ((81 <= requestNodeIndex) && (requestNodeIndex <= 82)))) {
            return this._RouterLinkWithHref_81_3.context;
        }
        if (((token === import18.RouterLinkWithHref) && ((84 <= requestNodeIndex) && (requestNodeIndex <= 85)))) {
            return this._RouterLinkWithHref_84_3.context;
        }
        if (((token === import18.RouterLinkWithHref) && ((87 <= requestNodeIndex) && (requestNodeIndex <= 88)))) {
            return this._RouterLinkWithHref_87_3.context;
        }
        if (((token === import18.RouterLinkWithHref) && ((90 <= requestNodeIndex) && (requestNodeIndex <= 91)))) {
            return this._RouterLinkWithHref_90_3.context;
        }
        if (((token === import18.RouterLinkWithHref) && ((93 <= requestNodeIndex) && (requestNodeIndex <= 94)))) {
            return this._RouterLinkWithHref_93_3.context;
        }
        if (((token === import19.RouterOutlet) && (99 === requestNodeIndex))) {
            return this._RouterOutlet_99_5.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_21_0_0 = this._arr_131('/demo/spreadsheet');
        this._RouterLinkWithHref_21_3.check_routerLink(currVal_21_0_0, throwOnChange, false);
        this._RouterLinkWithHref_21_3.detectChangesInInputProps(this, this._el_21, throwOnChange);
        const currVal_24_0_0 = this._arr_133('/demo/countries');
        this._RouterLinkWithHref_24_3.check_routerLink(currVal_24_0_0, throwOnChange, false);
        this._RouterLinkWithHref_24_3.detectChangesInInputProps(this, this._el_24, throwOnChange);
        const currVal_27_0_0 = this._arr_135('/demo/rxjs');
        this._RouterLinkWithHref_27_3.check_routerLink(currVal_27_0_0, throwOnChange, false);
        this._RouterLinkWithHref_27_3.detectChangesInInputProps(this, this._el_27, throwOnChange);
        const currVal_30_0_0 = this._arr_137('/demo/friends');
        this._RouterLinkWithHref_30_3.check_routerLink(currVal_30_0_0, throwOnChange, false);
        this._RouterLinkWithHref_30_3.detectChangesInInputProps(this, this._el_30, throwOnChange);
        const currVal_33_0_0 = this._arr_139('/demo/react');
        this._RouterLinkWithHref_33_3.check_routerLink(currVal_33_0_0, throwOnChange, false);
        this._RouterLinkWithHref_33_3.detectChangesInInputProps(this, this._el_33, throwOnChange);
        const currVal_36_0_0 = this._arr_141('/demo/graph');
        this._RouterLinkWithHref_36_3.check_routerLink(currVal_36_0_0, throwOnChange, false);
        this._RouterLinkWithHref_36_3.detectChangesInInputProps(this, this._el_36, throwOnChange);
        const currVal_39_0_0 = this._arr_143('/demo/algorithms');
        this._RouterLinkWithHref_39_3.check_routerLink(currVal_39_0_0, throwOnChange, false);
        this._RouterLinkWithHref_39_3.detectChangesInInputProps(this, this._el_39, throwOnChange);
        const currVal_42_0_0 = this._arr_145('/demo/redux');
        this._RouterLinkWithHref_42_3.check_routerLink(currVal_42_0_0, throwOnChange, false);
        this._RouterLinkWithHref_42_3.detectChangesInInputProps(this, this._el_42, throwOnChange);
        const currVal_45_0_0 = this._arr_147('/demo/buffering');
        this._RouterLinkWithHref_45_3.check_routerLink(currVal_45_0_0, throwOnChange, false);
        this._RouterLinkWithHref_45_3.detectChangesInInputProps(this, this._el_45, throwOnChange);
        const currVal_48_0_0 = this._arr_149('/demo/survey');
        this._RouterLinkWithHref_48_3.check_routerLink(currVal_48_0_0, throwOnChange, false);
        this._RouterLinkWithHref_48_3.detectChangesInInputProps(this, this._el_48, throwOnChange);
        const currVal_51_0_0 = this._arr_151('/demo/pub-sub');
        this._RouterLinkWithHref_51_3.check_routerLink(currVal_51_0_0, throwOnChange, false);
        this._RouterLinkWithHref_51_3.detectChangesInInputProps(this, this._el_51, throwOnChange);
        const currVal_54_0_0 = this._arr_153('/demo/text-editor');
        this._RouterLinkWithHref_54_3.check_routerLink(currVal_54_0_0, throwOnChange, false);
        this._RouterLinkWithHref_54_3.detectChangesInInputProps(this, this._el_54, throwOnChange);
        const currVal_57_0_0 = this._arr_155('/demo/form');
        this._RouterLinkWithHref_57_3.check_routerLink(currVal_57_0_0, throwOnChange, false);
        this._RouterLinkWithHref_57_3.detectChangesInInputProps(this, this._el_57, throwOnChange);
        const currVal_60_0_0 = this._arr_157('/demo/change');
        this._RouterLinkWithHref_60_3.check_routerLink(currVal_60_0_0, throwOnChange, false);
        this._RouterLinkWithHref_60_3.detectChangesInInputProps(this, this._el_60, throwOnChange);
        const currVal_63_0_0 = this._arr_159('/demo/http');
        this._RouterLinkWithHref_63_3.check_routerLink(currVal_63_0_0, throwOnChange, false);
        this._RouterLinkWithHref_63_3.detectChangesInInputProps(this, this._el_63, throwOnChange);
        const currVal_66_0_0 = this._arr_161('/demo/input');
        this._RouterLinkWithHref_66_3.check_routerLink(currVal_66_0_0, throwOnChange, false);
        this._RouterLinkWithHref_66_3.detectChangesInInputProps(this, this._el_66, throwOnChange);
        const currVal_69_0_0 = this._arr_163('/demo/treeview');
        this._RouterLinkWithHref_69_3.check_routerLink(currVal_69_0_0, throwOnChange, false);
        this._RouterLinkWithHref_69_3.detectChangesInInputProps(this, this._el_69, throwOnChange);
        const currVal_72_0_0 = this._arr_165('/demo/grid');
        this._RouterLinkWithHref_72_3.check_routerLink(currVal_72_0_0, throwOnChange, false);
        this._RouterLinkWithHref_72_3.detectChangesInInputProps(this, this._el_72, throwOnChange);
        const currVal_75_0_0 = this._arr_167('/demo/address');
        this._RouterLinkWithHref_75_3.check_routerLink(currVal_75_0_0, throwOnChange, false);
        this._RouterLinkWithHref_75_3.detectChangesInInputProps(this, this._el_75, throwOnChange);
        const currVal_78_0_0 = this._arr_169('/demo/jquery');
        this._RouterLinkWithHref_78_3.check_routerLink(currVal_78_0_0, throwOnChange, false);
        this._RouterLinkWithHref_78_3.detectChangesInInputProps(this, this._el_78, throwOnChange);
        const currVal_81_0_0 = this._arr_171('/demo/parent-child');
        this._RouterLinkWithHref_81_3.check_routerLink(currVal_81_0_0, throwOnChange, false);
        this._RouterLinkWithHref_81_3.detectChangesInInputProps(this, this._el_81, throwOnChange);
        const currVal_84_0_0 = this._arr_173('/demo/contact');
        this._RouterLinkWithHref_84_3.check_routerLink(currVal_84_0_0, throwOnChange, false);
        this._RouterLinkWithHref_84_3.detectChangesInInputProps(this, this._el_84, throwOnChange);
        const currVal_87_0_0 = this._arr_175('/demo/textbox');
        this._RouterLinkWithHref_87_3.check_routerLink(currVal_87_0_0, throwOnChange, false);
        this._RouterLinkWithHref_87_3.detectChangesInInputProps(this, this._el_87, throwOnChange);
        const currVal_90_0_0 = this._arr_177('/demo/iodemo');
        this._RouterLinkWithHref_90_3.check_routerLink(currVal_90_0_0, throwOnChange, false);
        this._RouterLinkWithHref_90_3.detectChangesInInputProps(this, this._el_90, throwOnChange);
        const currVal_93_0_0 = this._arr_179('/demo/non-bindable');
        this._RouterLinkWithHref_93_3.check_routerLink(currVal_93_0_0, throwOnChange, false);
        this._RouterLinkWithHref_93_3.detectChangesInInputProps(this, this._el_93, throwOnChange);
        this._RouterOutlet_99_5.detectChangesInInputProps(this, this._el_99, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        const currVal_130 = this.context.getLinkStyle('/demo/spreadsheet');
        if (import4.checkBinding(throwOnChange, this._expr_130, currVal_130)) {
            this.renderer.setElementClass(this._el_21, 'active', currVal_130);
            this._expr_130 = currVal_130;
        }
        this._RouterLinkWithHref_21_3.detectChangesInHostProps(this, this._el_21, throwOnChange);
        const currVal_132 = this.context.getLinkStyle('/demo/countries');
        if (import4.checkBinding(throwOnChange, this._expr_132, currVal_132)) {
            this.renderer.setElementClass(this._el_24, 'active', currVal_132);
            this._expr_132 = currVal_132;
        }
        this._RouterLinkWithHref_24_3.detectChangesInHostProps(this, this._el_24, throwOnChange);
        const currVal_134 = this.context.getLinkStyle('/demo/rxjs');
        if (import4.checkBinding(throwOnChange, this._expr_134, currVal_134)) {
            this.renderer.setElementClass(this._el_27, 'active', currVal_134);
            this._expr_134 = currVal_134;
        }
        this._RouterLinkWithHref_27_3.detectChangesInHostProps(this, this._el_27, throwOnChange);
        const currVal_136 = this.context.getLinkStyle('/demo/friends');
        if (import4.checkBinding(throwOnChange, this._expr_136, currVal_136)) {
            this.renderer.setElementClass(this._el_30, 'active', currVal_136);
            this._expr_136 = currVal_136;
        }
        this._RouterLinkWithHref_30_3.detectChangesInHostProps(this, this._el_30, throwOnChange);
        const currVal_138 = this.context.getLinkStyle('/demo/react');
        if (import4.checkBinding(throwOnChange, this._expr_138, currVal_138)) {
            this.renderer.setElementClass(this._el_33, 'active', currVal_138);
            this._expr_138 = currVal_138;
        }
        this._RouterLinkWithHref_33_3.detectChangesInHostProps(this, this._el_33, throwOnChange);
        const currVal_140 = this.context.getLinkStyle('/demo/graph');
        if (import4.checkBinding(throwOnChange, this._expr_140, currVal_140)) {
            this.renderer.setElementClass(this._el_36, 'active', currVal_140);
            this._expr_140 = currVal_140;
        }
        this._RouterLinkWithHref_36_3.detectChangesInHostProps(this, this._el_36, throwOnChange);
        const currVal_142 = this.context.getLinkStyle('/demo/algorithms');
        if (import4.checkBinding(throwOnChange, this._expr_142, currVal_142)) {
            this.renderer.setElementClass(this._el_39, 'active', currVal_142);
            this._expr_142 = currVal_142;
        }
        this._RouterLinkWithHref_39_3.detectChangesInHostProps(this, this._el_39, throwOnChange);
        const currVal_144 = this.context.getLinkStyle('/demo/redux');
        if (import4.checkBinding(throwOnChange, this._expr_144, currVal_144)) {
            this.renderer.setElementClass(this._el_42, 'active', currVal_144);
            this._expr_144 = currVal_144;
        }
        this._RouterLinkWithHref_42_3.detectChangesInHostProps(this, this._el_42, throwOnChange);
        const currVal_146 = this.context.getLinkStyle('/demo/buffering');
        if (import4.checkBinding(throwOnChange, this._expr_146, currVal_146)) {
            this.renderer.setElementClass(this._el_45, 'active', currVal_146);
            this._expr_146 = currVal_146;
        }
        this._RouterLinkWithHref_45_3.detectChangesInHostProps(this, this._el_45, throwOnChange);
        const currVal_148 = this.context.getLinkStyle('/demo/survey');
        if (import4.checkBinding(throwOnChange, this._expr_148, currVal_148)) {
            this.renderer.setElementClass(this._el_48, 'active', currVal_148);
            this._expr_148 = currVal_148;
        }
        this._RouterLinkWithHref_48_3.detectChangesInHostProps(this, this._el_48, throwOnChange);
        const currVal_150 = this.context.getLinkStyle('/demo/pub-sub');
        if (import4.checkBinding(throwOnChange, this._expr_150, currVal_150)) {
            this.renderer.setElementClass(this._el_51, 'active', currVal_150);
            this._expr_150 = currVal_150;
        }
        this._RouterLinkWithHref_51_3.detectChangesInHostProps(this, this._el_51, throwOnChange);
        const currVal_152 = this.context.getLinkStyle('/demo/text-editor');
        if (import4.checkBinding(throwOnChange, this._expr_152, currVal_152)) {
            this.renderer.setElementClass(this._el_54, 'active', currVal_152);
            this._expr_152 = currVal_152;
        }
        this._RouterLinkWithHref_54_3.detectChangesInHostProps(this, this._el_54, throwOnChange);
        const currVal_154 = this.context.getLinkStyle('/demo/form');
        if (import4.checkBinding(throwOnChange, this._expr_154, currVal_154)) {
            this.renderer.setElementClass(this._el_57, 'active', currVal_154);
            this._expr_154 = currVal_154;
        }
        this._RouterLinkWithHref_57_3.detectChangesInHostProps(this, this._el_57, throwOnChange);
        const currVal_156 = this.context.getLinkStyle('/demo/change');
        if (import4.checkBinding(throwOnChange, this._expr_156, currVal_156)) {
            this.renderer.setElementClass(this._el_60, 'active', currVal_156);
            this._expr_156 = currVal_156;
        }
        this._RouterLinkWithHref_60_3.detectChangesInHostProps(this, this._el_60, throwOnChange);
        const currVal_158 = this.context.getLinkStyle('/demo/http');
        if (import4.checkBinding(throwOnChange, this._expr_158, currVal_158)) {
            this.renderer.setElementClass(this._el_63, 'active', currVal_158);
            this._expr_158 = currVal_158;
        }
        this._RouterLinkWithHref_63_3.detectChangesInHostProps(this, this._el_63, throwOnChange);
        const currVal_160 = this.context.getLinkStyle('/demo/input');
        if (import4.checkBinding(throwOnChange, this._expr_160, currVal_160)) {
            this.renderer.setElementClass(this._el_66, 'active', currVal_160);
            this._expr_160 = currVal_160;
        }
        this._RouterLinkWithHref_66_3.detectChangesInHostProps(this, this._el_66, throwOnChange);
        const currVal_162 = this.context.getLinkStyle('/demo/treeview');
        if (import4.checkBinding(throwOnChange, this._expr_162, currVal_162)) {
            this.renderer.setElementClass(this._el_69, 'active', currVal_162);
            this._expr_162 = currVal_162;
        }
        this._RouterLinkWithHref_69_3.detectChangesInHostProps(this, this._el_69, throwOnChange);
        const currVal_164 = this.context.getLinkStyle('/demo/grid');
        if (import4.checkBinding(throwOnChange, this._expr_164, currVal_164)) {
            this.renderer.setElementClass(this._el_72, 'active', currVal_164);
            this._expr_164 = currVal_164;
        }
        this._RouterLinkWithHref_72_3.detectChangesInHostProps(this, this._el_72, throwOnChange);
        const currVal_166 = this.context.getLinkStyle('/demo/address');
        if (import4.checkBinding(throwOnChange, this._expr_166, currVal_166)) {
            this.renderer.setElementClass(this._el_75, 'active', currVal_166);
            this._expr_166 = currVal_166;
        }
        this._RouterLinkWithHref_75_3.detectChangesInHostProps(this, this._el_75, throwOnChange);
        const currVal_168 = this.context.getLinkStyle('/demo/jquery');
        if (import4.checkBinding(throwOnChange, this._expr_168, currVal_168)) {
            this.renderer.setElementClass(this._el_78, 'active', currVal_168);
            this._expr_168 = currVal_168;
        }
        this._RouterLinkWithHref_78_3.detectChangesInHostProps(this, this._el_78, throwOnChange);
        const currVal_170 = this.context.getLinkStyle('/demo/parent-child');
        if (import4.checkBinding(throwOnChange, this._expr_170, currVal_170)) {
            this.renderer.setElementClass(this._el_81, 'active', currVal_170);
            this._expr_170 = currVal_170;
        }
        this._RouterLinkWithHref_81_3.detectChangesInHostProps(this, this._el_81, throwOnChange);
        const currVal_172 = this.context.getLinkStyle('/demo/contact');
        if (import4.checkBinding(throwOnChange, this._expr_172, currVal_172)) {
            this.renderer.setElementClass(this._el_84, 'active', currVal_172);
            this._expr_172 = currVal_172;
        }
        this._RouterLinkWithHref_84_3.detectChangesInHostProps(this, this._el_84, throwOnChange);
        const currVal_174 = this.context.getLinkStyle('/demo/textbox');
        if (import4.checkBinding(throwOnChange, this._expr_174, currVal_174)) {
            this.renderer.setElementClass(this._el_87, 'active', currVal_174);
            this._expr_174 = currVal_174;
        }
        this._RouterLinkWithHref_87_3.detectChangesInHostProps(this, this._el_87, throwOnChange);
        const currVal_176 = this.context.getLinkStyle('/demo/iodemo');
        if (import4.checkBinding(throwOnChange, this._expr_176, currVal_176)) {
            this.renderer.setElementClass(this._el_90, 'active', currVal_176);
            this._expr_176 = currVal_176;
        }
        this._RouterLinkWithHref_90_3.detectChangesInHostProps(this, this._el_90, throwOnChange);
        const currVal_178 = this.context.getLinkStyle('/demo/non-bindable');
        if (import4.checkBinding(throwOnChange, this._expr_178, currVal_178)) {
            this.renderer.setElementClass(this._el_93, 'active', currVal_178);
            this._expr_178 = currVal_178;
        }
        this._RouterLinkWithHref_93_3.detectChangesInHostProps(this, this._el_93, throwOnChange);
        this._RouterOutlet_99_5.detectChangesInHostProps(this, this._el_99, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
    destroyInternal() {
        this._RouterLinkWithHref_21_3.context.ngOnDestroy();
        this._RouterLinkWithHref_24_3.context.ngOnDestroy();
        this._RouterLinkWithHref_27_3.context.ngOnDestroy();
        this._RouterLinkWithHref_30_3.context.ngOnDestroy();
        this._RouterLinkWithHref_33_3.context.ngOnDestroy();
        this._RouterLinkWithHref_36_3.context.ngOnDestroy();
        this._RouterLinkWithHref_39_3.context.ngOnDestroy();
        this._RouterLinkWithHref_42_3.context.ngOnDestroy();
        this._RouterLinkWithHref_45_3.context.ngOnDestroy();
        this._RouterLinkWithHref_48_3.context.ngOnDestroy();
        this._RouterLinkWithHref_51_3.context.ngOnDestroy();
        this._RouterLinkWithHref_54_3.context.ngOnDestroy();
        this._RouterLinkWithHref_57_3.context.ngOnDestroy();
        this._RouterLinkWithHref_60_3.context.ngOnDestroy();
        this._RouterLinkWithHref_63_3.context.ngOnDestroy();
        this._RouterLinkWithHref_66_3.context.ngOnDestroy();
        this._RouterLinkWithHref_69_3.context.ngOnDestroy();
        this._RouterLinkWithHref_72_3.context.ngOnDestroy();
        this._RouterLinkWithHref_75_3.context.ngOnDestroy();
        this._RouterLinkWithHref_78_3.context.ngOnDestroy();
        this._RouterLinkWithHref_81_3.context.ngOnDestroy();
        this._RouterLinkWithHref_84_3.context.ngOnDestroy();
        this._RouterLinkWithHref_87_3.context.ngOnDestroy();
        this._RouterLinkWithHref_90_3.context.ngOnDestroy();
        this._RouterLinkWithHref_93_3.context.ngOnDestroy();
        this._RouterOutlet_99_5.context.ngOnDestroy();
    }
    _handle_click_21_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_21_0 = (this._RouterLinkWithHref_21_3.context.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_21_0);
    }
    _handle_click_24_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_24_0 = (this._RouterLinkWithHref_24_3.context.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_24_0);
    }
    _handle_click_27_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_27_0 = (this._RouterLinkWithHref_27_3.context.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_27_0);
    }
    _handle_click_30_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_30_0 = (this._RouterLinkWithHref_30_3.context.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_30_0);
    }
    _handle_click_33_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_33_0 = (this._RouterLinkWithHref_33_3.context.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_33_0);
    }
    _handle_click_36_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_36_0 = (this._RouterLinkWithHref_36_3.context.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_36_0);
    }
    _handle_click_39_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_39_0 = (this._RouterLinkWithHref_39_3.context.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_39_0);
    }
    _handle_click_42_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_42_0 = (this._RouterLinkWithHref_42_3.context.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_42_0);
    }
    _handle_click_45_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_45_0 = (this._RouterLinkWithHref_45_3.context.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_45_0);
    }
    _handle_click_48_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_48_0 = (this._RouterLinkWithHref_48_3.context.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_48_0);
    }
    _handle_click_51_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_51_0 = (this._RouterLinkWithHref_51_3.context.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_51_0);
    }
    _handle_click_54_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_54_0 = (this._RouterLinkWithHref_54_3.context.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_54_0);
    }
    _handle_click_57_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_57_0 = (this._RouterLinkWithHref_57_3.context.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_57_0);
    }
    _handle_click_60_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_60_0 = (this._RouterLinkWithHref_60_3.context.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_60_0);
    }
    _handle_click_63_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_63_0 = (this._RouterLinkWithHref_63_3.context.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_63_0);
    }
    _handle_click_66_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_66_0 = (this._RouterLinkWithHref_66_3.context.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_66_0);
    }
    _handle_click_69_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_69_0 = (this._RouterLinkWithHref_69_3.context.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_69_0);
    }
    _handle_click_72_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_72_0 = (this._RouterLinkWithHref_72_3.context.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_72_0);
    }
    _handle_click_75_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_75_0 = (this._RouterLinkWithHref_75_3.context.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_75_0);
    }
    _handle_click_78_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_78_0 = (this._RouterLinkWithHref_78_3.context.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_78_0);
    }
    _handle_click_81_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_81_0 = (this._RouterLinkWithHref_81_3.context.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_81_0);
    }
    _handle_click_84_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_84_0 = (this._RouterLinkWithHref_84_3.context.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_84_0);
    }
    _handle_click_87_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_87_0 = (this._RouterLinkWithHref_87_3.context.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_87_0);
    }
    _handle_click_90_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_90_0 = (this._RouterLinkWithHref_90_3.context.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_90_0);
    }
    _handle_click_93_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_93_0 = (this._RouterLinkWithHref_93_3.context.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_93_0);
    }
}
export function viewFactory_DemoPage0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_DemoPage === null)) {
        (renderType_DemoPage = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, styles_DemoPage, {}));
    }
    return new _View_DemoPage0(viewUtils, parentInjector, declarationEl);
}
