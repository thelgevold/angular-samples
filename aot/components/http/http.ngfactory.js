var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../components/http/http';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/http/src/http';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '@angular/common/src/directives/ng_class';
import * as import12 from '@angular/common/src/directives/ng_for';
import * as import13 from '@angular/common/src/directives/ng_if';
import * as import14 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import15 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import16 from '@angular/core/src/linker/element_ref';
import * as import17 from '@angular/core/src/linker/template_ref';
var renderType_HttpSample_Host = null;
var _View_HttpSample_Host0 = (function (_super) {
    __extends(_View_HttpSample_Host0, _super);
    function _View_HttpSample_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_HttpSample_Host0, renderType_HttpSample_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_HttpSample_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('ng-component', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_HttpSample0(this.viewUtils, this.injector(0), this._appEl_0);
        this._HttpSample_0_4 = new import3.HttpSample(this.parentInjector.get(import8.Http));
        this._appEl_0.initComponent(this._HttpSample_0_4, [], compView_0);
        compView_0.create(this._HttpSample_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_HttpSample_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.HttpSample) && (0 === requestNodeIndex))) {
            return this._HttpSample_0_4;
        }
        return notFoundResult;
    };
    return _View_HttpSample_Host0;
}(import1.AppView));
function viewFactory_HttpSample_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_HttpSample_Host === null)) {
        (renderType_HttpSample_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_HttpSample_Host0(viewUtils, parentInjector, declarationEl);
}
export var HttpSampleNgFactory = new import10.ComponentFactory('ng-component', viewFactory_HttpSample_Host0, import3.HttpSample);
var styles_HttpSample = [];
var renderType_HttpSample = null;
var _View_HttpSample0 = (function (_super) {
    __extends(_View_HttpSample0, _super);
    function _View_HttpSample0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_HttpSample0, renderType_HttpSample, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_HttpSample0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'h1', null);
        this._text_1 = this.renderer.createText(this._el_0, 'Making Http Requests', null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_3 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_3, 'class', 'alert alert-success');
        this.renderer.setElementAttribute(this._el_3, 'role', 'alert');
        this._text_4 = this.renderer.createText(this._el_3, '\n    Click a country to display that country\'s capitol. Observables in flight will be cancelled prior to loading new data.\n', null);
        this._text_5 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_6 = this.renderer.createElement(parentRenderNode, 'table', null);
        this.renderer.setElementAttribute(this._el_6, 'class', 'table');
        this._text_7 = this.renderer.createText(this._el_6, '\n    ', null);
        this._el_8 = this.renderer.createElement(this._el_6, 'tbody', null);
        this._el_9 = this.renderer.createElement(this._el_8, 'tr', null);
        this._NgClass_9_3 = new import11.NgClass(this.parentInjector.get(import14.IterableDiffers), this.parentInjector.get(import15.KeyValueDiffers), new import16.ElementRef(this._el_9), this.renderer);
        this._el_10 = this.renderer.createElement(this._el_9, 'td', null);
        this._text_11 = this.renderer.createText(this._el_10, 'USA', null);
        this._text_12 = this.renderer.createText(this._el_8, '\n    ', null);
        this._el_13 = this.renderer.createElement(this._el_8, 'tr', null);
        this._NgClass_13_3 = new import11.NgClass(this.parentInjector.get(import14.IterableDiffers), this.parentInjector.get(import15.KeyValueDiffers), new import16.ElementRef(this._el_13), this.renderer);
        this._el_14 = this.renderer.createElement(this._el_13, 'td', null);
        this._text_15 = this.renderer.createText(this._el_14, 'Denmark', null);
        this._text_16 = this.renderer.createText(this._el_8, '\n    ', null);
        this._el_17 = this.renderer.createElement(this._el_8, 'tr', null);
        this._NgClass_17_3 = new import11.NgClass(this.parentInjector.get(import14.IterableDiffers), this.parentInjector.get(import15.KeyValueDiffers), new import16.ElementRef(this._el_17), this.renderer);
        this._el_18 = this.renderer.createElement(this._el_17, 'td', null);
        this._text_19 = this.renderer.createText(this._el_18, 'Germany', null);
        this._text_20 = this.renderer.createText(this._el_8, '\n    ', null);
        this._el_21 = this.renderer.createElement(this._el_8, 'tr', null);
        this._NgClass_21_3 = new import11.NgClass(this.parentInjector.get(import14.IterableDiffers), this.parentInjector.get(import15.KeyValueDiffers), new import16.ElementRef(this._el_21), this.renderer);
        this._el_22 = this.renderer.createElement(this._el_21, 'td', null);
        this._text_23 = this.renderer.createText(this._el_22, 'Argentina', null);
        this._text_24 = this.renderer.createText(this._el_8, '\n', null);
        this._text_25 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_26 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_26, 'style', 'margin-left: 10px;');
        this._text_27 = this.renderer.createText(this._el_26, 'The capitol is ', null);
        this._el_28 = this.renderer.createElement(this._el_26, 'strong', null);
        this._text_29 = this.renderer.createText(this._el_28, '', null);
        this._text_30 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_31 = this.renderer.createElement(parentRenderNode, 'br', null);
        this._text_32 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_33 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_33, 'class', 'alert alert-success');
        this.renderer.setElementAttribute(this._el_33, 'role', 'alert');
        this._text_34 = this.renderer.createText(this._el_33, '\n    List of friends using Observables\n', null);
        this._text_35 = this.renderer.createText(parentRenderNode, '\n', null);
        this._anchor_36 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._appEl_36 = new import2.AppElement(36, null, this, this._anchor_36);
        this._TemplateRef_36_5 = new import17.TemplateRef_(this._appEl_36, viewFactory_HttpSample1);
        this._NgFor_36_6 = new import12.NgFor(this._appEl_36.vcRef, this._TemplateRef_36_5, this.parentInjector.get(import14.IterableDiffers), this.ref);
        this._text_37 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_38 = this.renderer.createElement(parentRenderNode, 'br', null);
        this._text_39 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_40 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_40, 'class', 'alert alert-success');
        this.renderer.setElementAttribute(this._el_40, 'role', 'alert');
        this._text_41 = this.renderer.createText(this._el_40, '\n    List of friends loaded using Promises\n', null);
        this._text_42 = this.renderer.createText(parentRenderNode, '\n', null);
        this._anchor_43 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._appEl_43 = new import2.AppElement(43, null, this, this._anchor_43);
        this._TemplateRef_43_5 = new import17.TemplateRef_(this._appEl_43, viewFactory_HttpSample2);
        this._NgFor_43_6 = new import12.NgFor(this._appEl_43.vcRef, this._TemplateRef_43_5, this.parentInjector.get(import14.IterableDiffers), this.ref);
        this._text_44 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_45 = this.renderer.createElement(parentRenderNode, 'br', null);
        this._text_46 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_47 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_47, 'class', 'alert alert-success');
        this.renderer.setElementAttribute(this._el_47, 'role', 'alert');
        this._text_48 = this.renderer.createText(this._el_47, '\n    List of friends and customer loaded successfully in parallel\n', null);
        this._text_49 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_50 = this.renderer.createElement(parentRenderNode, 'div', null);
        this._text_51 = this.renderer.createText(this._el_50, 'Friends:', null);
        this._text_52 = this.renderer.createText(parentRenderNode, '\n', null);
        this._anchor_53 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._appEl_53 = new import2.AppElement(53, null, this, this._anchor_53);
        this._TemplateRef_53_5 = new import17.TemplateRef_(this._appEl_53, viewFactory_HttpSample3);
        this._NgFor_53_6 = new import12.NgFor(this._appEl_53.vcRef, this._TemplateRef_53_5, this.parentInjector.get(import14.IterableDiffers), this.ref);
        this._text_54 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_55 = this.renderer.createElement(parentRenderNode, 'br', null);
        this._text_56 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_57 = this.renderer.createElement(parentRenderNode, 'div', null);
        this._text_58 = this.renderer.createText(this._el_57, 'Customer:', null);
        this._text_59 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_60 = this.renderer.createElement(parentRenderNode, 'div', null);
        this._text_61 = this.renderer.createText(this._el_60, '', null);
        this._text_62 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_63 = this.renderer.createElement(parentRenderNode, 'br', null);
        this._text_64 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_65 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_65, 'class', 'alert alert-success');
        this.renderer.setElementAttribute(this._el_65, 'role', 'alert');
        this._text_66 = this.renderer.createText(this._el_65, '\n    Loaded a contract after first loading a customer\n', null);
        this._text_67 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_68 = this.renderer.createElement(parentRenderNode, 'div', null);
        this._text_69 = this.renderer.createText(this._el_68, '\n    ', null);
        this._el_70 = this.renderer.createElement(this._el_68, 'div', null);
        this._text_71 = this.renderer.createText(this._el_70, '', null);
        this._text_72 = this.renderer.createText(this._el_68, '\n    ', null);
        this._el_73 = this.renderer.createElement(this._el_68, 'div', null);
        this._text_74 = this.renderer.createText(this._el_73, '', null);
        this._text_75 = this.renderer.createText(this._el_68, '\n', null);
        this._text_76 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_77 = this.renderer.createElement(parentRenderNode, 'br', null);
        this._text_78 = this.renderer.createText(parentRenderNode, '\n', null);
        this._anchor_79 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._appEl_79 = new import2.AppElement(79, null, this, this._anchor_79);
        this._TemplateRef_79_5 = new import17.TemplateRef_(this._appEl_79, viewFactory_HttpSample4);
        this._NgIf_79_6 = new import13.NgIf(this._appEl_79.vcRef, this._TemplateRef_79_5);
        this._text_80 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_81 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_81, 'class', 'alert alert-success');
        this.renderer.setElementAttribute(this._el_81, 'role', 'alert');
        this._text_82 = this.renderer.createText(this._el_81, '\n    Making a post request\n', null);
        this._text_83 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_84 = this.renderer.createElement(parentRenderNode, 'div', null);
        this._text_85 = this.renderer.createText(this._el_84, '\n    ', null);
        this._el_86 = this.renderer.createElement(this._el_84, 'button', null);
        this._text_87 = this.renderer.createText(this._el_86, 'Post Data', null);
        this._text_88 = this.renderer.createText(this._el_84, '\n\n    ', null);
        this._el_89 = this.renderer.createElement(this._el_84, 'p', null);
        this._text_90 = this.renderer.createText(this._el_89, 'Posted the following values:', null);
        this._text_91 = this.renderer.createText(this._el_84, '\n    ', null);
        this._el_92 = this.renderer.createElement(this._el_84, 'div', null);
        this._text_93 = this.renderer.createText(this._el_92, '', null);
        this._text_94 = this.renderer.createText(this._el_84, '\n    ', null);
        this._el_95 = this.renderer.createElement(this._el_84, 'div', null);
        this._text_96 = this.renderer.createText(this._el_95, '', null);
        this._text_97 = this.renderer.createText(this._el_84, '\n', null);
        this._text_98 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_99 = this.renderer.createElement(parentRenderNode, 'h4', null);
        this._el_100 = this.renderer.createElement(this._el_99, 'a', null);
        this.renderer.setElementAttribute(this._el_100, 'href', 'http://www.syntaxsuccess.com/viewarticle/angular-2.0-and-http');
        this._text_101 = this.renderer.createText(this._el_100, 'Read more here', null);
        var disposable_0 = this.renderer.listen(this._el_9, 'click', this.eventHandler(this._handle_click_9_0.bind(this)));
        this._map_0 = import4.pureProxy1(function (p0) {
            return { active: p0 };
        });
        this._expr_1 = import7.UNINITIALIZED;
        var disposable_1 = this.renderer.listen(this._el_13, 'click', this.eventHandler(this._handle_click_13_0.bind(this)));
        this._map_1 = import4.pureProxy1(function (p0) {
            return { active: p0 };
        });
        this._expr_3 = import7.UNINITIALIZED;
        var disposable_2 = this.renderer.listen(this._el_17, 'click', this.eventHandler(this._handle_click_17_0.bind(this)));
        this._map_2 = import4.pureProxy1(function (p0) {
            return { active: p0 };
        });
        this._expr_5 = import7.UNINITIALIZED;
        var disposable_3 = this.renderer.listen(this._el_21, 'click', this.eventHandler(this._handle_click_21_0.bind(this)));
        this._map_3 = import4.pureProxy1(function (p0) {
            return { active: p0 };
        });
        this._expr_7 = import7.UNINITIALIZED;
        this._expr_8 = import7.UNINITIALIZED;
        this._expr_9 = import7.UNINITIALIZED;
        this._expr_10 = import7.UNINITIALIZED;
        this._expr_11 = import7.UNINITIALIZED;
        this._expr_12 = import7.UNINITIALIZED;
        this._expr_13 = import7.UNINITIALIZED;
        this._expr_14 = import7.UNINITIALIZED;
        this._expr_15 = import7.UNINITIALIZED;
        var disposable_4 = this.renderer.listen(this._el_86, 'click', this.eventHandler(this._handle_click_86_0.bind(this)));
        this._expr_17 = import7.UNINITIALIZED;
        this._expr_18 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._el_8,
            this._el_9,
            this._el_10,
            this._text_11,
            this._text_12,
            this._el_13,
            this._el_14,
            this._text_15,
            this._text_16,
            this._el_17,
            this._el_18,
            this._text_19,
            this._text_20,
            this._el_21,
            this._el_22,
            this._text_23,
            this._text_24,
            this._text_25,
            this._el_26,
            this._text_27,
            this._el_28,
            this._text_29,
            this._text_30,
            this._el_31,
            this._text_32,
            this._el_33,
            this._text_34,
            this._text_35,
            this._anchor_36,
            this._text_37,
            this._el_38,
            this._text_39,
            this._el_40,
            this._text_41,
            this._text_42,
            this._anchor_43,
            this._text_44,
            this._el_45,
            this._text_46,
            this._el_47,
            this._text_48,
            this._text_49,
            this._el_50,
            this._text_51,
            this._text_52,
            this._anchor_53,
            this._text_54,
            this._el_55,
            this._text_56,
            this._el_57,
            this._text_58,
            this._text_59,
            this._el_60,
            this._text_61,
            this._text_62,
            this._el_63,
            this._text_64,
            this._el_65,
            this._text_66,
            this._text_67,
            this._el_68,
            this._text_69,
            this._el_70,
            this._text_71,
            this._text_72,
            this._el_73,
            this._text_74,
            this._text_75,
            this._text_76,
            this._el_77,
            this._text_78,
            this._anchor_79,
            this._text_80,
            this._el_81,
            this._text_82,
            this._text_83,
            this._el_84,
            this._text_85,
            this._el_86,
            this._text_87,
            this._text_88,
            this._el_89,
            this._text_90,
            this._text_91,
            this._el_92,
            this._text_93,
            this._text_94,
            this._el_95,
            this._text_96,
            this._text_97,
            this._text_98,
            this._el_99,
            this._el_100,
            this._text_101
        ], [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3,
            disposable_4
        ], []);
        return null;
    };
    _View_HttpSample0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import11.NgClass) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 11)))) {
            return this._NgClass_9_3;
        }
        if (((token === import11.NgClass) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 15)))) {
            return this._NgClass_13_3;
        }
        if (((token === import11.NgClass) && ((17 <= requestNodeIndex) && (requestNodeIndex <= 19)))) {
            return this._NgClass_17_3;
        }
        if (((token === import11.NgClass) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 23)))) {
            return this._NgClass_21_3;
        }
        if (((token === import17.TemplateRef) && (36 === requestNodeIndex))) {
            return this._TemplateRef_36_5;
        }
        if (((token === import12.NgFor) && (36 === requestNodeIndex))) {
            return this._NgFor_36_6;
        }
        if (((token === import17.TemplateRef) && (43 === requestNodeIndex))) {
            return this._TemplateRef_43_5;
        }
        if (((token === import12.NgFor) && (43 === requestNodeIndex))) {
            return this._NgFor_43_6;
        }
        if (((token === import17.TemplateRef) && (53 === requestNodeIndex))) {
            return this._TemplateRef_53_5;
        }
        if (((token === import12.NgFor) && (53 === requestNodeIndex))) {
            return this._NgFor_53_6;
        }
        if (((token === import17.TemplateRef) && (79 === requestNodeIndex))) {
            return this._TemplateRef_79_5;
        }
        if (((token === import13.NgIf) && (79 === requestNodeIndex))) {
            return this._NgIf_79_6;
        }
        return notFoundResult;
    };
    _View_HttpSample0.prototype.detectChangesInternal = function (throwOnChange) {
        var changes = null;
        var currVal_1 = this._map_0(this.context.isActive('usa'));
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this._NgClass_9_3.ngClass = currVal_1;
            this._expr_1 = currVal_1;
        }
        if (!throwOnChange) {
            this._NgClass_9_3.ngDoCheck();
        }
        var currVal_3 = this._map_1(this.context.isActive('denmark'));
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this._NgClass_13_3.ngClass = currVal_3;
            this._expr_3 = currVal_3;
        }
        if (!throwOnChange) {
            this._NgClass_13_3.ngDoCheck();
        }
        var currVal_5 = this._map_2(this.context.isActive('germany'));
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this._NgClass_17_3.ngClass = currVal_5;
            this._expr_5 = currVal_5;
        }
        if (!throwOnChange) {
            this._NgClass_17_3.ngDoCheck();
        }
        var currVal_7 = this._map_3(this.context.isActive('argentina'));
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this._NgClass_21_3.ngClass = currVal_7;
            this._expr_7 = currVal_7;
        }
        if (!throwOnChange) {
            this._NgClass_21_3.ngDoCheck();
        }
        changes = null;
        var currVal_9 = this.context.result.friends;
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this._NgFor_36_6.ngForOf = currVal_9;
            if ((changes === null)) {
                (changes = {});
            }
            changes['ngForOf'] = new import7.SimpleChange(this._expr_9, currVal_9);
            this._expr_9 = currVal_9;
        }
        if ((changes !== null)) {
            this._NgFor_36_6.ngOnChanges(changes);
        }
        if (!throwOnChange) {
            this._NgFor_36_6.ngDoCheck();
        }
        changes = null;
        var currVal_10 = this.context.friendsAsPromise.friends;
        if (import4.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this._NgFor_43_6.ngForOf = currVal_10;
            if ((changes === null)) {
                (changes = {});
            }
            changes['ngForOf'] = new import7.SimpleChange(this._expr_10, currVal_10);
            this._expr_10 = currVal_10;
        }
        if ((changes !== null)) {
            this._NgFor_43_6.ngOnChanges(changes);
        }
        if (!throwOnChange) {
            this._NgFor_43_6.ngDoCheck();
        }
        changes = null;
        var currVal_11 = this.context.combined.friends;
        if (import4.checkBinding(throwOnChange, this._expr_11, currVal_11)) {
            this._NgFor_53_6.ngForOf = currVal_11;
            if ((changes === null)) {
                (changes = {});
            }
            changes['ngForOf'] = new import7.SimpleChange(this._expr_11, currVal_11);
            this._expr_11 = currVal_11;
        }
        if ((changes !== null)) {
            this._NgFor_53_6.ngOnChanges(changes);
        }
        if (!throwOnChange) {
            this._NgFor_53_6.ngDoCheck();
        }
        var currVal_15 = this.context.error;
        if (import4.checkBinding(throwOnChange, this._expr_15, currVal_15)) {
            this._NgIf_79_6.ngIf = currVal_15;
            this._expr_15 = currVal_15;
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_8 = import4.interpolate(1, '', this.context.capitol, '');
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setText(this._text_29, currVal_8);
            this._expr_8 = currVal_8;
        }
        var currVal_12 = import4.interpolate(1, '', this.context.combined.customer.name, '');
        if (import4.checkBinding(throwOnChange, this._expr_12, currVal_12)) {
            this.renderer.setText(this._text_61, currVal_12);
            this._expr_12 = currVal_12;
        }
        var currVal_13 = import4.interpolate(1, 'Customer: ', ((this.context.customer == null) ? null : this.context.customer.name), '');
        if (import4.checkBinding(throwOnChange, this._expr_13, currVal_13)) {
            this.renderer.setText(this._text_71, currVal_13);
            this._expr_13 = currVal_13;
        }
        var currVal_14 = import4.interpolate(1, 'Product: ', ((this.context.contract == null) ? null : this.context.contract.product), '');
        if (import4.checkBinding(throwOnChange, this._expr_14, currVal_14)) {
            this.renderer.setText(this._text_74, currVal_14);
            this._expr_14 = currVal_14;
        }
        var currVal_17 = import4.interpolate(1, '', this.context.postResponse.firstName, '');
        if (import4.checkBinding(throwOnChange, this._expr_17, currVal_17)) {
            this.renderer.setText(this._text_93, currVal_17);
            this._expr_17 = currVal_17;
        }
        var currVal_18 = import4.interpolate(1, '', this.context.postResponse.lastName, '');
        if (import4.checkBinding(throwOnChange, this._expr_18, currVal_18)) {
            this.renderer.setText(this._text_96, currVal_18);
            this._expr_18 = currVal_18;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_HttpSample0.prototype._handle_click_9_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        this.context.country.next('usa');
        var pd_0 = ((this.context.activeCountry = 'usa') !== false);
        return (true && pd_0);
    };
    _View_HttpSample0.prototype._handle_click_13_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        this.context.country.next('denmark');
        var pd_0 = ((this.context.activeCountry = 'denmark') !== false);
        return (true && pd_0);
    };
    _View_HttpSample0.prototype._handle_click_17_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        this.context.country.next('germany');
        var pd_0 = ((this.context.activeCountry = 'germany') !== false);
        return (true && pd_0);
    };
    _View_HttpSample0.prototype._handle_click_21_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        this.context.country.next('argentina');
        var pd_0 = ((this.context.activeCountry = 'argentina') !== false);
        return (true && pd_0);
    };
    _View_HttpSample0.prototype._handle_click_86_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.postData() !== false);
        return (true && pd_0);
    };
    return _View_HttpSample0;
}(import1.AppView));
export function viewFactory_HttpSample0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_HttpSample === null)) {
        (renderType_HttpSample = viewUtils.createRenderComponentType('/Users/tor/Development/angular-2-samples/components/http/http.html', 0, import9.ViewEncapsulation.None, styles_HttpSample, {}));
    }
    return new _View_HttpSample0(viewUtils, parentInjector, declarationEl);
}
var _View_HttpSample1 = (function (_super) {
    __extends(_View_HttpSample1, _super);
    function _View_HttpSample1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_HttpSample1, renderType_HttpSample, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_HttpSample1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this._expr_0 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    _View_HttpSample1.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_0 = import4.interpolate(1, '\n    ', this.context.$implicit, '\n');
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setText(this._text_1, currVal_0);
            this._expr_0 = currVal_0;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_HttpSample1;
}(import1.AppView));
function viewFactory_HttpSample1(viewUtils, parentInjector, declarationEl) {
    return new _View_HttpSample1(viewUtils, parentInjector, declarationEl);
}
var _View_HttpSample2 = (function (_super) {
    __extends(_View_HttpSample2, _super);
    function _View_HttpSample2(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_HttpSample2, renderType_HttpSample, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_HttpSample2.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this._expr_0 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    _View_HttpSample2.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_0 = import4.interpolate(1, '\n    ', this.context.$implicit, '\n');
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setText(this._text_1, currVal_0);
            this._expr_0 = currVal_0;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_HttpSample2;
}(import1.AppView));
function viewFactory_HttpSample2(viewUtils, parentInjector, declarationEl) {
    return new _View_HttpSample2(viewUtils, parentInjector, declarationEl);
}
var _View_HttpSample3 = (function (_super) {
    __extends(_View_HttpSample3, _super);
    function _View_HttpSample3(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_HttpSample3, renderType_HttpSample, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_HttpSample3.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this._expr_0 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    _View_HttpSample3.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_0 = import4.interpolate(1, '\n    ', this.context.$implicit, '\n');
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setText(this._text_1, currVal_0);
            this._expr_0 = currVal_0;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_HttpSample3;
}(import1.AppView));
function viewFactory_HttpSample3(viewUtils, parentInjector, declarationEl) {
    return new _View_HttpSample3(viewUtils, parentInjector, declarationEl);
}
var _View_HttpSample4 = (function (_super) {
    __extends(_View_HttpSample4, _super);
    function _View_HttpSample4(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_HttpSample4, renderType_HttpSample, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_HttpSample4.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'div', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'alert alert-danger');
        this.renderer.setElementAttribute(this._el_2, 'role', 'alert');
        this._text_3 = this.renderer.createText(this._el_2, '\n        There was an error loading the list of friends (Intentional error testing)\n    ', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4
        ], [], []);
        return null;
    };
    return _View_HttpSample4;
}(import1.AppView));
function viewFactory_HttpSample4(viewUtils, parentInjector, declarationEl) {
    return new _View_HttpSample4(viewUtils, parentInjector, declarationEl);
}
