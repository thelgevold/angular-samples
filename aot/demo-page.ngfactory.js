import * as import0 from '../demo-page';
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
export class Wrapper_DemoPage {
    constructor(p0) {
        this._changed = false;
        this.context = new import0.DemoPage(p0);
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
var renderType_DemoPage_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
class View_DemoPage_Host0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_DemoPage_Host0, renderType_DemoPage_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'demo-page', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_DemoPage0(this.viewUtils, this, 0, this._el_0);
        this._DemoPage_0_3 = new Wrapper_DemoPage(this.injectorGet(import8.Location, this.parentIndex));
        this.compView_0.create(this._DemoPage_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._DemoPage_0_3.context);
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.DemoPage) && (0 === requestNodeIndex))) {
            return this._DemoPage_0_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._DemoPage_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    }
    destroyInternal() {
        this.compView_0.destroy();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
export const DemoPageNgFactory = new import7.ComponentFactory('demo-page', View_DemoPage_Host0, import0.DemoPage);
const styles_DemoPage = [];
var renderType_DemoPage = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_DemoPage, {});
export class View_DemoPage0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_DemoPage0, renderType_DemoPage, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
        this._expr_130 = import12.UNINITIALIZED;
        this._arr_131 = import3.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_132 = import12.UNINITIALIZED;
        this._arr_133 = import3.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_134 = import12.UNINITIALIZED;
        this._arr_135 = import3.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_136 = import12.UNINITIALIZED;
        this._arr_137 = import3.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_138 = import12.UNINITIALIZED;
        this._arr_139 = import3.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_140 = import12.UNINITIALIZED;
        this._arr_141 = import3.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_142 = import12.UNINITIALIZED;
        this._arr_143 = import3.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_144 = import12.UNINITIALIZED;
        this._arr_145 = import3.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_146 = import12.UNINITIALIZED;
        this._arr_147 = import3.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_148 = import12.UNINITIALIZED;
        this._arr_149 = import3.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_150 = import12.UNINITIALIZED;
        this._arr_151 = import3.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_152 = import12.UNINITIALIZED;
        this._arr_153 = import3.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_154 = import12.UNINITIALIZED;
        this._arr_155 = import3.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_156 = import12.UNINITIALIZED;
        this._arr_157 = import3.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_158 = import12.UNINITIALIZED;
        this._arr_159 = import3.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_160 = import12.UNINITIALIZED;
        this._arr_161 = import3.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_162 = import12.UNINITIALIZED;
        this._arr_163 = import3.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_164 = import12.UNINITIALIZED;
        this._arr_165 = import3.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_166 = import12.UNINITIALIZED;
        this._arr_167 = import3.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_168 = import12.UNINITIALIZED;
        this._arr_169 = import3.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_170 = import12.UNINITIALIZED;
        this._arr_171 = import3.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_172 = import12.UNINITIALIZED;
        this._arr_173 = import3.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_174 = import12.UNINITIALIZED;
        this._arr_175 = import3.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_176 = import12.UNINITIALIZED;
        this._arr_177 = import3.pureProxy1((p0) => {
            return [p0];
        });
        this._expr_178 = import12.UNINITIALIZED;
        this._arr_179 = import3.pureProxy1((p0) => {
            return [p0];
        });
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'container'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'jumbotron'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'h1', import3.EMPTY_INLINE_ARRAY, null);
        this._text_5 = this.renderer.createText(this._el_4, 'Angular sample components', null);
        this._text_6 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_2, 'p', import3.EMPTY_INLINE_ARRAY, null);
        this._text_8 = this.renderer.createText(this._el_7, '\n            More documentation about each specific component can be found\n            ', null);
        this._el_9 = import3.createRenderElement(this.renderer, this._el_7, 'a', new import3.InlineArray2(2, 'href', 'http://www.syntaxsuccess.com/viewarticle/angular-2.0-examples'), null);
        this._text_10 = this.renderer.createText(this._el_9, 'here', null);
        this._text_11 = this.renderer.createText(this._el_7, '.\n        ', null);
        this._text_12 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_13 = import3.createRenderElement(this.renderer, this._el_2, 'p', import3.EMPTY_INLINE_ARRAY, null);
        this._text_14 = this.renderer.createText(this._el_13, 'Current version: Angular 2.3.0', null);
        this._text_15 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_16 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_17 = import3.createRenderElement(this.renderer, this._el_0, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_18 = this.renderer.createText(this._el_17, '\n        ', null);
        this._el_19 = import3.createRenderElement(this.renderer, this._el_17, 'div', new import3.InlineArray2(2, 'class', 'list-group col-md-3'), null);
        this._text_20 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_21 = import3.createRenderElement(this.renderer, this._el_19, 'a', new import3.InlineArray2(2, 'class', 'list-group-item'), null);
        this._RouterLinkWithHref_21_3 = new import9.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import13.Router, this.parentIndex), this.parentView.injectorGet(import14.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import15.LocationStrategy, this.parentIndex));
        this._text_22 = this.renderer.createText(this._el_21, 'Virtualized Spreadsheet', null);
        this._text_23 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_24 = import3.createRenderElement(this.renderer, this._el_19, 'a', new import3.InlineArray2(2, 'class', 'list-group-item'), null);
        this._RouterLinkWithHref_24_3 = new import9.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import13.Router, this.parentIndex), this.parentView.injectorGet(import14.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import15.LocationStrategy, this.parentIndex));
        this._text_25 = this.renderer.createText(this._el_24, 'Lazy Loaded Tree View', null);
        this._text_26 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_27 = import3.createRenderElement(this.renderer, this._el_19, 'a', new import3.InlineArray2(2, 'class', 'list-group-item'), null);
        this._RouterLinkWithHref_27_3 = new import9.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import13.Router, this.parentIndex), this.parentView.injectorGet(import14.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import15.LocationStrategy, this.parentIndex));
        this._text_28 = this.renderer.createText(this._el_27, 'RxJs Streams', null);
        this._text_29 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_30 = import3.createRenderElement(this.renderer, this._el_19, 'a', new import3.InlineArray2(2, 'class', 'list-group-item'), null);
        this._RouterLinkWithHref_30_3 = new import9.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import13.Router, this.parentIndex), this.parentView.injectorGet(import14.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import15.LocationStrategy, this.parentIndex));
        this._text_31 = this.renderer.createText(this._el_30, 'RxJs Caching', null);
        this._text_32 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_33 = import3.createRenderElement(this.renderer, this._el_19, 'a', new import3.InlineArray2(2, 'class', 'list-group-item'), null);
        this._RouterLinkWithHref_33_3 = new import9.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import13.Router, this.parentIndex), this.parentView.injectorGet(import14.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import15.LocationStrategy, this.parentIndex));
        this._text_34 = this.renderer.createText(this._el_33, 'React Integration', null);
        this._text_35 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_36 = import3.createRenderElement(this.renderer, this._el_19, 'a', new import3.InlineArray2(2, 'class', 'list-group-item'), null);
        this._RouterLinkWithHref_36_3 = new import9.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import13.Router, this.parentIndex), this.parentView.injectorGet(import14.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import15.LocationStrategy, this.parentIndex));
        this._text_37 = this.renderer.createText(this._el_36, 'Graph', null);
        this._text_38 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_39 = import3.createRenderElement(this.renderer, this._el_19, 'a', new import3.InlineArray2(2, 'class', 'list-group-item'), null);
        this._RouterLinkWithHref_39_3 = new import9.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import13.Router, this.parentIndex), this.parentView.injectorGet(import14.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import15.LocationStrategy, this.parentIndex));
        this._text_40 = this.renderer.createText(this._el_39, 'Insertion Sort', null);
        this._text_41 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_42 = import3.createRenderElement(this.renderer, this._el_19, 'a', new import3.InlineArray2(2, 'class', 'list-group-item'), null);
        this._RouterLinkWithHref_42_3 = new import9.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import13.Router, this.parentIndex), this.parentView.injectorGet(import14.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import15.LocationStrategy, this.parentIndex));
        this._text_43 = this.renderer.createText(this._el_42, 'Redux', null);
        this._text_44 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_45 = import3.createRenderElement(this.renderer, this._el_19, 'a', new import3.InlineArray2(2, 'class', 'list-group-item'), null);
        this._RouterLinkWithHref_45_3 = new import9.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import13.Router, this.parentIndex), this.parentView.injectorGet(import14.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import15.LocationStrategy, this.parentIndex));
        this._text_46 = this.renderer.createText(this._el_45, 'Buffering in RxJs', null);
        this._text_47 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_48 = import3.createRenderElement(this.renderer, this._el_19, 'a', new import3.InlineArray2(2, 'class', 'list-group-item'), null);
        this._RouterLinkWithHref_48_3 = new import9.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import13.Router, this.parentIndex), this.parentView.injectorGet(import14.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import15.LocationStrategy, this.parentIndex));
        this._text_49 = this.renderer.createText(this._el_48, 'Dynamic Form', null);
        this._text_50 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_51 = import3.createRenderElement(this.renderer, this._el_19, 'a', new import3.InlineArray2(2, 'class', 'list-group-item'), null);
        this._RouterLinkWithHref_51_3 = new import9.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import13.Router, this.parentIndex), this.parentView.injectorGet(import14.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import15.LocationStrategy, this.parentIndex));
        this._text_52 = this.renderer.createText(this._el_51, 'Pub Sub', null);
        this._text_53 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_54 = import3.createRenderElement(this.renderer, this._el_19, 'a', new import3.InlineArray2(2, 'class', 'list-group-item'), null);
        this._RouterLinkWithHref_54_3 = new import9.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import13.Router, this.parentIndex), this.parentView.injectorGet(import14.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import15.LocationStrategy, this.parentIndex));
        this._text_55 = this.renderer.createText(this._el_54, 'Text Editor', null);
        this._text_56 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_57 = import3.createRenderElement(this.renderer, this._el_19, 'a', new import3.InlineArray2(2, 'class', 'list-group-item'), null);
        this._RouterLinkWithHref_57_3 = new import9.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import13.Router, this.parentIndex), this.parentView.injectorGet(import14.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import15.LocationStrategy, this.parentIndex));
        this._text_58 = this.renderer.createText(this._el_57, 'Form', null);
        this._text_59 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_60 = import3.createRenderElement(this.renderer, this._el_19, 'a', new import3.InlineArray2(2, 'class', 'list-group-item'), null);
        this._RouterLinkWithHref_60_3 = new import9.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import13.Router, this.parentIndex), this.parentView.injectorGet(import14.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import15.LocationStrategy, this.parentIndex));
        this._text_61 = this.renderer.createText(this._el_60, 'Change Detection', null);
        this._text_62 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_63 = import3.createRenderElement(this.renderer, this._el_19, 'a', new import3.InlineArray2(2, 'class', 'list-group-item'), null);
        this._RouterLinkWithHref_63_3 = new import9.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import13.Router, this.parentIndex), this.parentView.injectorGet(import14.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import15.LocationStrategy, this.parentIndex));
        this._text_64 = this.renderer.createText(this._el_63, 'Http', null);
        this._text_65 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_66 = import3.createRenderElement(this.renderer, this._el_19, 'a', new import3.InlineArray2(2, 'class', 'list-group-item'), null);
        this._RouterLinkWithHref_66_3 = new import9.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import13.Router, this.parentIndex), this.parentView.injectorGet(import14.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import15.LocationStrategy, this.parentIndex));
        this._text_67 = this.renderer.createText(this._el_66, 'Input Controls', null);
        this._text_68 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_69 = import3.createRenderElement(this.renderer, this._el_19, 'a', new import3.InlineArray2(2, 'class', 'list-group-item'), null);
        this._RouterLinkWithHref_69_3 = new import9.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import13.Router, this.parentIndex), this.parentView.injectorGet(import14.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import15.LocationStrategy, this.parentIndex));
        this._text_70 = this.renderer.createText(this._el_69, 'Recursive tree view', null);
        this._text_71 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_72 = import3.createRenderElement(this.renderer, this._el_19, 'a', new import3.InlineArray2(2, 'class', 'list-group-item'), null);
        this._RouterLinkWithHref_72_3 = new import9.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import13.Router, this.parentIndex), this.parentView.injectorGet(import14.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import15.LocationStrategy, this.parentIndex));
        this._text_73 = this.renderer.createText(this._el_72, 'Data Grid', null);
        this._text_74 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_75 = import3.createRenderElement(this.renderer, this._el_19, 'a', new import3.InlineArray2(2, 'class', 'list-group-item'), null);
        this._RouterLinkWithHref_75_3 = new import9.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import13.Router, this.parentIndex), this.parentView.injectorGet(import14.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import15.LocationStrategy, this.parentIndex));
        this._text_76 = this.renderer.createText(this._el_75, 'Address Book', null);
        this._text_77 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_78 = import3.createRenderElement(this.renderer, this._el_19, 'a', new import3.InlineArray2(2, 'class', 'list-group-item'), null);
        this._RouterLinkWithHref_78_3 = new import9.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import13.Router, this.parentIndex), this.parentView.injectorGet(import14.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import15.LocationStrategy, this.parentIndex));
        this._text_79 = this.renderer.createText(this._el_78, 'JQuery Integration', null);
        this._text_80 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_81 = import3.createRenderElement(this.renderer, this._el_19, 'a', new import3.InlineArray2(2, 'class', 'list-group-item'), null);
        this._RouterLinkWithHref_81_3 = new import9.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import13.Router, this.parentIndex), this.parentView.injectorGet(import14.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import15.LocationStrategy, this.parentIndex));
        this._text_82 = this.renderer.createText(this._el_81, 'Access Child Component', null);
        this._text_83 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_84 = import3.createRenderElement(this.renderer, this._el_19, 'a', new import3.InlineArray2(2, 'class', 'list-group-item'), null);
        this._RouterLinkWithHref_84_3 = new import9.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import13.Router, this.parentIndex), this.parentView.injectorGet(import14.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import15.LocationStrategy, this.parentIndex));
        this._text_85 = this.renderer.createText(this._el_84, 'Interactive contact list', null);
        this._text_86 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_87 = import3.createRenderElement(this.renderer, this._el_19, 'a', new import3.InlineArray2(2, 'class', 'list-group-item'), null);
        this._RouterLinkWithHref_87_3 = new import9.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import13.Router, this.parentIndex), this.parentView.injectorGet(import14.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import15.LocationStrategy, this.parentIndex));
        this._text_88 = this.renderer.createText(this._el_87, 'Bound Textbox', null);
        this._text_89 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_90 = import3.createRenderElement(this.renderer, this._el_19, 'a', new import3.InlineArray2(2, 'class', 'list-group-item'), null);
        this._RouterLinkWithHref_90_3 = new import9.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import13.Router, this.parentIndex), this.parentView.injectorGet(import14.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import15.LocationStrategy, this.parentIndex));
        this._text_91 = this.renderer.createText(this._el_90, 'Input/Output', null);
        this._text_92 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_93 = import3.createRenderElement(this.renderer, this._el_19, 'a', new import3.InlineArray2(2, 'class', 'list-group-item'), null);
        this._RouterLinkWithHref_93_3 = new import9.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import13.Router, this.parentIndex), this.parentView.injectorGet(import14.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import15.LocationStrategy, this.parentIndex));
        this._text_94 = this.renderer.createText(this._el_93, 'Non Bindable', null);
        this._text_95 = this.renderer.createText(this._el_19, '\n       ', null);
        this._text_96 = this.renderer.createText(this._el_17, '\n\n        ', null);
        this._el_97 = import3.createRenderElement(this.renderer, this._el_17, 'div', new import3.InlineArray2(2, 'class', 'col-md-9'), null);
        this._text_98 = this.renderer.createText(this._el_97, '\n            ', null);
        this._el_99 = import3.createRenderElement(this.renderer, this._el_97, 'router-outlet', import3.EMPTY_INLINE_ARRAY, null);
        this._vc_99 = new import10.ViewContainer(99, 97, this, this._el_99);
        this._RouterOutlet_99_5 = new import11.Wrapper_RouterOutlet(this.parentView.injectorGet(import16.RouterOutletMap, this.parentIndex), this._vc_99.vcRef, this.parentView.injectorGet(import17.ComponentFactoryResolver, this.parentIndex), null);
        this._text_100 = this.renderer.createText(this._el_97, '\n        ', null);
        this._text_101 = this.renderer.createText(this._el_17, '\n    ', null);
        this._text_102 = this.renderer.createText(this._el_0, '\n\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_21, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_21));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_24, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_24));
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_27, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_27));
        var disposable_3 = import3.subscribeToRenderElement(this, this._el_30, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_30));
        var disposable_4 = import3.subscribeToRenderElement(this, this._el_33, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_33));
        var disposable_5 = import3.subscribeToRenderElement(this, this._el_36, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_36));
        var disposable_6 = import3.subscribeToRenderElement(this, this._el_39, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_39));
        var disposable_7 = import3.subscribeToRenderElement(this, this._el_42, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_42));
        var disposable_8 = import3.subscribeToRenderElement(this, this._el_45, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_45));
        var disposable_9 = import3.subscribeToRenderElement(this, this._el_48, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_48));
        var disposable_10 = import3.subscribeToRenderElement(this, this._el_51, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_51));
        var disposable_11 = import3.subscribeToRenderElement(this, this._el_54, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_54));
        var disposable_12 = import3.subscribeToRenderElement(this, this._el_57, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_57));
        var disposable_13 = import3.subscribeToRenderElement(this, this._el_60, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_60));
        var disposable_14 = import3.subscribeToRenderElement(this, this._el_63, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_63));
        var disposable_15 = import3.subscribeToRenderElement(this, this._el_66, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_66));
        var disposable_16 = import3.subscribeToRenderElement(this, this._el_69, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_69));
        var disposable_17 = import3.subscribeToRenderElement(this, this._el_72, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_72));
        var disposable_18 = import3.subscribeToRenderElement(this, this._el_75, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_75));
        var disposable_19 = import3.subscribeToRenderElement(this, this._el_78, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_78));
        var disposable_20 = import3.subscribeToRenderElement(this, this._el_81, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_81));
        var disposable_21 = import3.subscribeToRenderElement(this, this._el_84, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_84));
        var disposable_22 = import3.subscribeToRenderElement(this, this._el_87, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_87));
        var disposable_23 = import3.subscribeToRenderElement(this, this._el_90, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_90));
        var disposable_24 = import3.subscribeToRenderElement(this, this._el_93, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_93));
        this.init(null, (this.renderer.directRenderer ? null : [
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
        ]), [
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
        ]);
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
        this._RouterLinkWithHref_21_3.ngDoCheck(this, this._el_21, throwOnChange);
        const currVal_24_0_0 = this._arr_133('/demo/countries');
        this._RouterLinkWithHref_24_3.check_routerLink(currVal_24_0_0, throwOnChange, false);
        this._RouterLinkWithHref_24_3.ngDoCheck(this, this._el_24, throwOnChange);
        const currVal_27_0_0 = this._arr_135('/demo/rxjs');
        this._RouterLinkWithHref_27_3.check_routerLink(currVal_27_0_0, throwOnChange, false);
        this._RouterLinkWithHref_27_3.ngDoCheck(this, this._el_27, throwOnChange);
        const currVal_30_0_0 = this._arr_137('/demo/friends');
        this._RouterLinkWithHref_30_3.check_routerLink(currVal_30_0_0, throwOnChange, false);
        this._RouterLinkWithHref_30_3.ngDoCheck(this, this._el_30, throwOnChange);
        const currVal_33_0_0 = this._arr_139('/demo/react');
        this._RouterLinkWithHref_33_3.check_routerLink(currVal_33_0_0, throwOnChange, false);
        this._RouterLinkWithHref_33_3.ngDoCheck(this, this._el_33, throwOnChange);
        const currVal_36_0_0 = this._arr_141('/demo/graph');
        this._RouterLinkWithHref_36_3.check_routerLink(currVal_36_0_0, throwOnChange, false);
        this._RouterLinkWithHref_36_3.ngDoCheck(this, this._el_36, throwOnChange);
        const currVal_39_0_0 = this._arr_143('/demo/algorithms');
        this._RouterLinkWithHref_39_3.check_routerLink(currVal_39_0_0, throwOnChange, false);
        this._RouterLinkWithHref_39_3.ngDoCheck(this, this._el_39, throwOnChange);
        const currVal_42_0_0 = this._arr_145('/demo/redux');
        this._RouterLinkWithHref_42_3.check_routerLink(currVal_42_0_0, throwOnChange, false);
        this._RouterLinkWithHref_42_3.ngDoCheck(this, this._el_42, throwOnChange);
        const currVal_45_0_0 = this._arr_147('/demo/buffering');
        this._RouterLinkWithHref_45_3.check_routerLink(currVal_45_0_0, throwOnChange, false);
        this._RouterLinkWithHref_45_3.ngDoCheck(this, this._el_45, throwOnChange);
        const currVal_48_0_0 = this._arr_149('/demo/survey');
        this._RouterLinkWithHref_48_3.check_routerLink(currVal_48_0_0, throwOnChange, false);
        this._RouterLinkWithHref_48_3.ngDoCheck(this, this._el_48, throwOnChange);
        const currVal_51_0_0 = this._arr_151('/demo/pub-sub');
        this._RouterLinkWithHref_51_3.check_routerLink(currVal_51_0_0, throwOnChange, false);
        this._RouterLinkWithHref_51_3.ngDoCheck(this, this._el_51, throwOnChange);
        const currVal_54_0_0 = this._arr_153('/demo/text-editor');
        this._RouterLinkWithHref_54_3.check_routerLink(currVal_54_0_0, throwOnChange, false);
        this._RouterLinkWithHref_54_3.ngDoCheck(this, this._el_54, throwOnChange);
        const currVal_57_0_0 = this._arr_155('/demo/form');
        this._RouterLinkWithHref_57_3.check_routerLink(currVal_57_0_0, throwOnChange, false);
        this._RouterLinkWithHref_57_3.ngDoCheck(this, this._el_57, throwOnChange);
        const currVal_60_0_0 = this._arr_157('/demo/change');
        this._RouterLinkWithHref_60_3.check_routerLink(currVal_60_0_0, throwOnChange, false);
        this._RouterLinkWithHref_60_3.ngDoCheck(this, this._el_60, throwOnChange);
        const currVal_63_0_0 = this._arr_159('/demo/http');
        this._RouterLinkWithHref_63_3.check_routerLink(currVal_63_0_0, throwOnChange, false);
        this._RouterLinkWithHref_63_3.ngDoCheck(this, this._el_63, throwOnChange);
        const currVal_66_0_0 = this._arr_161('/demo/input');
        this._RouterLinkWithHref_66_3.check_routerLink(currVal_66_0_0, throwOnChange, false);
        this._RouterLinkWithHref_66_3.ngDoCheck(this, this._el_66, throwOnChange);
        const currVal_69_0_0 = this._arr_163('/demo/treeview');
        this._RouterLinkWithHref_69_3.check_routerLink(currVal_69_0_0, throwOnChange, false);
        this._RouterLinkWithHref_69_3.ngDoCheck(this, this._el_69, throwOnChange);
        const currVal_72_0_0 = this._arr_165('/demo/grid');
        this._RouterLinkWithHref_72_3.check_routerLink(currVal_72_0_0, throwOnChange, false);
        this._RouterLinkWithHref_72_3.ngDoCheck(this, this._el_72, throwOnChange);
        const currVal_75_0_0 = this._arr_167('/demo/address');
        this._RouterLinkWithHref_75_3.check_routerLink(currVal_75_0_0, throwOnChange, false);
        this._RouterLinkWithHref_75_3.ngDoCheck(this, this._el_75, throwOnChange);
        const currVal_78_0_0 = this._arr_169('/demo/jquery');
        this._RouterLinkWithHref_78_3.check_routerLink(currVal_78_0_0, throwOnChange, false);
        this._RouterLinkWithHref_78_3.ngDoCheck(this, this._el_78, throwOnChange);
        const currVal_81_0_0 = this._arr_171('/demo/parent-child');
        this._RouterLinkWithHref_81_3.check_routerLink(currVal_81_0_0, throwOnChange, false);
        this._RouterLinkWithHref_81_3.ngDoCheck(this, this._el_81, throwOnChange);
        const currVal_84_0_0 = this._arr_173('/demo/contact');
        this._RouterLinkWithHref_84_3.check_routerLink(currVal_84_0_0, throwOnChange, false);
        this._RouterLinkWithHref_84_3.ngDoCheck(this, this._el_84, throwOnChange);
        const currVal_87_0_0 = this._arr_175('/demo/textbox');
        this._RouterLinkWithHref_87_3.check_routerLink(currVal_87_0_0, throwOnChange, false);
        this._RouterLinkWithHref_87_3.ngDoCheck(this, this._el_87, throwOnChange);
        const currVal_90_0_0 = this._arr_177('/demo/iodemo');
        this._RouterLinkWithHref_90_3.check_routerLink(currVal_90_0_0, throwOnChange, false);
        this._RouterLinkWithHref_90_3.ngDoCheck(this, this._el_90, throwOnChange);
        const currVal_93_0_0 = this._arr_179('/demo/non-bindable');
        this._RouterLinkWithHref_93_3.check_routerLink(currVal_93_0_0, throwOnChange, false);
        this._RouterLinkWithHref_93_3.ngDoCheck(this, this._el_93, throwOnChange);
        this._RouterOutlet_99_5.ngDoCheck(this, this._el_99, throwOnChange);
        this._vc_99.detectChangesInNestedViews(throwOnChange);
        const currVal_130 = this.context.getLinkStyle('/demo/spreadsheet');
        if (import3.checkBinding(throwOnChange, this._expr_130, currVal_130)) {
            this.renderer.setElementClass(this._el_21, 'active', currVal_130);
            this._expr_130 = currVal_130;
        }
        this._RouterLinkWithHref_21_3.checkHost(this, this, this._el_21, throwOnChange);
        const currVal_132 = this.context.getLinkStyle('/demo/countries');
        if (import3.checkBinding(throwOnChange, this._expr_132, currVal_132)) {
            this.renderer.setElementClass(this._el_24, 'active', currVal_132);
            this._expr_132 = currVal_132;
        }
        this._RouterLinkWithHref_24_3.checkHost(this, this, this._el_24, throwOnChange);
        const currVal_134 = this.context.getLinkStyle('/demo/rxjs');
        if (import3.checkBinding(throwOnChange, this._expr_134, currVal_134)) {
            this.renderer.setElementClass(this._el_27, 'active', currVal_134);
            this._expr_134 = currVal_134;
        }
        this._RouterLinkWithHref_27_3.checkHost(this, this, this._el_27, throwOnChange);
        const currVal_136 = this.context.getLinkStyle('/demo/friends');
        if (import3.checkBinding(throwOnChange, this._expr_136, currVal_136)) {
            this.renderer.setElementClass(this._el_30, 'active', currVal_136);
            this._expr_136 = currVal_136;
        }
        this._RouterLinkWithHref_30_3.checkHost(this, this, this._el_30, throwOnChange);
        const currVal_138 = this.context.getLinkStyle('/demo/react');
        if (import3.checkBinding(throwOnChange, this._expr_138, currVal_138)) {
            this.renderer.setElementClass(this._el_33, 'active', currVal_138);
            this._expr_138 = currVal_138;
        }
        this._RouterLinkWithHref_33_3.checkHost(this, this, this._el_33, throwOnChange);
        const currVal_140 = this.context.getLinkStyle('/demo/graph');
        if (import3.checkBinding(throwOnChange, this._expr_140, currVal_140)) {
            this.renderer.setElementClass(this._el_36, 'active', currVal_140);
            this._expr_140 = currVal_140;
        }
        this._RouterLinkWithHref_36_3.checkHost(this, this, this._el_36, throwOnChange);
        const currVal_142 = this.context.getLinkStyle('/demo/algorithms');
        if (import3.checkBinding(throwOnChange, this._expr_142, currVal_142)) {
            this.renderer.setElementClass(this._el_39, 'active', currVal_142);
            this._expr_142 = currVal_142;
        }
        this._RouterLinkWithHref_39_3.checkHost(this, this, this._el_39, throwOnChange);
        const currVal_144 = this.context.getLinkStyle('/demo/redux');
        if (import3.checkBinding(throwOnChange, this._expr_144, currVal_144)) {
            this.renderer.setElementClass(this._el_42, 'active', currVal_144);
            this._expr_144 = currVal_144;
        }
        this._RouterLinkWithHref_42_3.checkHost(this, this, this._el_42, throwOnChange);
        const currVal_146 = this.context.getLinkStyle('/demo/buffering');
        if (import3.checkBinding(throwOnChange, this._expr_146, currVal_146)) {
            this.renderer.setElementClass(this._el_45, 'active', currVal_146);
            this._expr_146 = currVal_146;
        }
        this._RouterLinkWithHref_45_3.checkHost(this, this, this._el_45, throwOnChange);
        const currVal_148 = this.context.getLinkStyle('/demo/survey');
        if (import3.checkBinding(throwOnChange, this._expr_148, currVal_148)) {
            this.renderer.setElementClass(this._el_48, 'active', currVal_148);
            this._expr_148 = currVal_148;
        }
        this._RouterLinkWithHref_48_3.checkHost(this, this, this._el_48, throwOnChange);
        const currVal_150 = this.context.getLinkStyle('/demo/pub-sub');
        if (import3.checkBinding(throwOnChange, this._expr_150, currVal_150)) {
            this.renderer.setElementClass(this._el_51, 'active', currVal_150);
            this._expr_150 = currVal_150;
        }
        this._RouterLinkWithHref_51_3.checkHost(this, this, this._el_51, throwOnChange);
        const currVal_152 = this.context.getLinkStyle('/demo/text-editor');
        if (import3.checkBinding(throwOnChange, this._expr_152, currVal_152)) {
            this.renderer.setElementClass(this._el_54, 'active', currVal_152);
            this._expr_152 = currVal_152;
        }
        this._RouterLinkWithHref_54_3.checkHost(this, this, this._el_54, throwOnChange);
        const currVal_154 = this.context.getLinkStyle('/demo/form');
        if (import3.checkBinding(throwOnChange, this._expr_154, currVal_154)) {
            this.renderer.setElementClass(this._el_57, 'active', currVal_154);
            this._expr_154 = currVal_154;
        }
        this._RouterLinkWithHref_57_3.checkHost(this, this, this._el_57, throwOnChange);
        const currVal_156 = this.context.getLinkStyle('/demo/change');
        if (import3.checkBinding(throwOnChange, this._expr_156, currVal_156)) {
            this.renderer.setElementClass(this._el_60, 'active', currVal_156);
            this._expr_156 = currVal_156;
        }
        this._RouterLinkWithHref_60_3.checkHost(this, this, this._el_60, throwOnChange);
        const currVal_158 = this.context.getLinkStyle('/demo/http');
        if (import3.checkBinding(throwOnChange, this._expr_158, currVal_158)) {
            this.renderer.setElementClass(this._el_63, 'active', currVal_158);
            this._expr_158 = currVal_158;
        }
        this._RouterLinkWithHref_63_3.checkHost(this, this, this._el_63, throwOnChange);
        const currVal_160 = this.context.getLinkStyle('/demo/input');
        if (import3.checkBinding(throwOnChange, this._expr_160, currVal_160)) {
            this.renderer.setElementClass(this._el_66, 'active', currVal_160);
            this._expr_160 = currVal_160;
        }
        this._RouterLinkWithHref_66_3.checkHost(this, this, this._el_66, throwOnChange);
        const currVal_162 = this.context.getLinkStyle('/demo/treeview');
        if (import3.checkBinding(throwOnChange, this._expr_162, currVal_162)) {
            this.renderer.setElementClass(this._el_69, 'active', currVal_162);
            this._expr_162 = currVal_162;
        }
        this._RouterLinkWithHref_69_3.checkHost(this, this, this._el_69, throwOnChange);
        const currVal_164 = this.context.getLinkStyle('/demo/grid');
        if (import3.checkBinding(throwOnChange, this._expr_164, currVal_164)) {
            this.renderer.setElementClass(this._el_72, 'active', currVal_164);
            this._expr_164 = currVal_164;
        }
        this._RouterLinkWithHref_72_3.checkHost(this, this, this._el_72, throwOnChange);
        const currVal_166 = this.context.getLinkStyle('/demo/address');
        if (import3.checkBinding(throwOnChange, this._expr_166, currVal_166)) {
            this.renderer.setElementClass(this._el_75, 'active', currVal_166);
            this._expr_166 = currVal_166;
        }
        this._RouterLinkWithHref_75_3.checkHost(this, this, this._el_75, throwOnChange);
        const currVal_168 = this.context.getLinkStyle('/demo/jquery');
        if (import3.checkBinding(throwOnChange, this._expr_168, currVal_168)) {
            this.renderer.setElementClass(this._el_78, 'active', currVal_168);
            this._expr_168 = currVal_168;
        }
        this._RouterLinkWithHref_78_3.checkHost(this, this, this._el_78, throwOnChange);
        const currVal_170 = this.context.getLinkStyle('/demo/parent-child');
        if (import3.checkBinding(throwOnChange, this._expr_170, currVal_170)) {
            this.renderer.setElementClass(this._el_81, 'active', currVal_170);
            this._expr_170 = currVal_170;
        }
        this._RouterLinkWithHref_81_3.checkHost(this, this, this._el_81, throwOnChange);
        const currVal_172 = this.context.getLinkStyle('/demo/contact');
        if (import3.checkBinding(throwOnChange, this._expr_172, currVal_172)) {
            this.renderer.setElementClass(this._el_84, 'active', currVal_172);
            this._expr_172 = currVal_172;
        }
        this._RouterLinkWithHref_84_3.checkHost(this, this, this._el_84, throwOnChange);
        const currVal_174 = this.context.getLinkStyle('/demo/textbox');
        if (import3.checkBinding(throwOnChange, this._expr_174, currVal_174)) {
            this.renderer.setElementClass(this._el_87, 'active', currVal_174);
            this._expr_174 = currVal_174;
        }
        this._RouterLinkWithHref_87_3.checkHost(this, this, this._el_87, throwOnChange);
        const currVal_176 = this.context.getLinkStyle('/demo/iodemo');
        if (import3.checkBinding(throwOnChange, this._expr_176, currVal_176)) {
            this.renderer.setElementClass(this._el_90, 'active', currVal_176);
            this._expr_176 = currVal_176;
        }
        this._RouterLinkWithHref_90_3.checkHost(this, this, this._el_90, throwOnChange);
        const currVal_178 = this.context.getLinkStyle('/demo/non-bindable');
        if (import3.checkBinding(throwOnChange, this._expr_178, currVal_178)) {
            this.renderer.setElementClass(this._el_93, 'active', currVal_178);
            this._expr_178 = currVal_178;
        }
        this._RouterLinkWithHref_93_3.checkHost(this, this, this._el_93, throwOnChange);
    }
    destroyInternal() {
        this._vc_99.destroyNestedViews();
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
    handleEvent_21(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_21_3.handleEvent(eventName, $event) && result);
        return result;
    }
    handleEvent_24(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_24_3.handleEvent(eventName, $event) && result);
        return result;
    }
    handleEvent_27(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_27_3.handleEvent(eventName, $event) && result);
        return result;
    }
    handleEvent_30(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_30_3.handleEvent(eventName, $event) && result);
        return result;
    }
    handleEvent_33(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_33_3.handleEvent(eventName, $event) && result);
        return result;
    }
    handleEvent_36(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_36_3.handleEvent(eventName, $event) && result);
        return result;
    }
    handleEvent_39(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_39_3.handleEvent(eventName, $event) && result);
        return result;
    }
    handleEvent_42(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_42_3.handleEvent(eventName, $event) && result);
        return result;
    }
    handleEvent_45(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_45_3.handleEvent(eventName, $event) && result);
        return result;
    }
    handleEvent_48(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_48_3.handleEvent(eventName, $event) && result);
        return result;
    }
    handleEvent_51(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_51_3.handleEvent(eventName, $event) && result);
        return result;
    }
    handleEvent_54(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_54_3.handleEvent(eventName, $event) && result);
        return result;
    }
    handleEvent_57(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_57_3.handleEvent(eventName, $event) && result);
        return result;
    }
    handleEvent_60(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_60_3.handleEvent(eventName, $event) && result);
        return result;
    }
    handleEvent_63(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_63_3.handleEvent(eventName, $event) && result);
        return result;
    }
    handleEvent_66(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_66_3.handleEvent(eventName, $event) && result);
        return result;
    }
    handleEvent_69(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_69_3.handleEvent(eventName, $event) && result);
        return result;
    }
    handleEvent_72(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_72_3.handleEvent(eventName, $event) && result);
        return result;
    }
    handleEvent_75(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_75_3.handleEvent(eventName, $event) && result);
        return result;
    }
    handleEvent_78(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_78_3.handleEvent(eventName, $event) && result);
        return result;
    }
    handleEvent_81(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_81_3.handleEvent(eventName, $event) && result);
        return result;
    }
    handleEvent_84(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_84_3.handleEvent(eventName, $event) && result);
        return result;
    }
    handleEvent_87(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_87_3.handleEvent(eventName, $event) && result);
        return result;
    }
    handleEvent_90(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_90_3.handleEvent(eventName, $event) && result);
        return result;
    }
    handleEvent_93(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_93_3.handleEvent(eventName, $event) && result);
        return result;
    }
}
