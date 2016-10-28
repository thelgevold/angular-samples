import * as import0 from '../../../components/http/http';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/http/src/http';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '../../node_modules/@angular/common/src/directives/ng_class.ngfactory';
import * as import12 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import13 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import14 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import15 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import16 from '@angular/core/src/linker/element_ref';
import * as import17 from '@angular/core/src/linker/template_ref';
import * as import18 from '@angular/common/src/directives/ng_class';
import * as import19 from '@angular/common/src/directives/ng_for';
import * as import20 from '@angular/common/src/directives/ng_if';
export class Wrapper_HttpSample {
    constructor(p0) {
        this.changed = false;
        this.context = new import0.HttpSample(p0);
    }
    detectChangesInInputProps(view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    }
    detectChangesInHostProps(view, el, throwOnChange) {
    }
}
var renderType_HttpSample_Host = null;
class _View_HttpSample_Host0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_HttpSample_Host0, renderType_HttpSample_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer, 'ng-component', import4.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_HttpSample0(this.viewUtils, this.injector(0), this._appEl_0);
        this._HttpSample_0_4 = new Wrapper_HttpSample(this.parentInjector.get(import8.Http));
        this._appEl_0.initComponent(this._HttpSample_0_4.context, [], compView_0);
        compView_0.create(this._HttpSample_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.HttpSample) && (0 === requestNodeIndex))) {
            return this._HttpSample_0_4.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._HttpSample_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._HttpSample_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
}
function viewFactory_HttpSample_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_HttpSample_Host === null)) {
        (renderType_HttpSample_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_HttpSample_Host0(viewUtils, parentInjector, declarationEl);
}
export const HttpSampleNgFactory = new import10.ComponentFactory('ng-component', viewFactory_HttpSample_Host0, import0.HttpSample);
const styles_HttpSample = [];
var renderType_HttpSample = null;
class _View_HttpSample0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_HttpSample0, renderType_HttpSample, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._map_118 = import4.pureProxy1((p0) => {
            return { active: p0 };
        });
        this._map_119 = import4.pureProxy1((p0) => {
            return { active: p0 };
        });
        this._map_120 = import4.pureProxy1((p0) => {
            return { active: p0 };
        });
        this._map_121 = import4.pureProxy1((p0) => {
            return { active: p0 };
        });
        this._expr_122 = import7.UNINITIALIZED;
        this._expr_123 = import7.UNINITIALIZED;
        this._expr_124 = import7.UNINITIALIZED;
        this._expr_125 = import7.UNINITIALIZED;
        this._expr_126 = import7.UNINITIALIZED;
        this._expr_127 = import7.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = import4.createRenderElement(this.renderer, parentRenderNode, 'h1', import4.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, 'Making Http Requests', null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_3 = import4.createRenderElement(this.renderer, parentRenderNode, 'div', new import4.InlineArray4(4, 'class', 'alert alert-success', 'role', 'alert'), null);
        this._text_4 = this.renderer.createText(this._el_3, '\n    Click a country to display that country\'s capitol. Observables in flight will be cancelled prior to loading new data.\n', null);
        this._text_5 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_6 = import4.createRenderElement(this.renderer, parentRenderNode, 'table', new import4.InlineArray2(2, 'class', 'table'), null);
        this._text_7 = this.renderer.createText(this._el_6, '\n    ', null);
        this._el_8 = import4.createRenderElement(this.renderer, this._el_6, 'tbody', import4.EMPTY_INLINE_ARRAY, null);
        this._el_9 = import4.createRenderElement(this.renderer, this._el_8, 'tr', import4.EMPTY_INLINE_ARRAY, null);
        this._NgClass_9_3 = new import11.Wrapper_NgClass(this.parentInjector.get(import14.IterableDiffers), this.parentInjector.get(import15.KeyValueDiffers), new import16.ElementRef(this._el_9), this.renderer);
        this._el_10 = import4.createRenderElement(this.renderer, this._el_9, 'td', import4.EMPTY_INLINE_ARRAY, null);
        this._text_11 = this.renderer.createText(this._el_10, 'USA', null);
        this._text_12 = this.renderer.createText(this._el_8, '\n    ', null);
        this._el_13 = import4.createRenderElement(this.renderer, this._el_8, 'tr', import4.EMPTY_INLINE_ARRAY, null);
        this._NgClass_13_3 = new import11.Wrapper_NgClass(this.parentInjector.get(import14.IterableDiffers), this.parentInjector.get(import15.KeyValueDiffers), new import16.ElementRef(this._el_13), this.renderer);
        this._el_14 = import4.createRenderElement(this.renderer, this._el_13, 'td', import4.EMPTY_INLINE_ARRAY, null);
        this._text_15 = this.renderer.createText(this._el_14, 'Denmark', null);
        this._text_16 = this.renderer.createText(this._el_8, '\n    ', null);
        this._el_17 = import4.createRenderElement(this.renderer, this._el_8, 'tr', import4.EMPTY_INLINE_ARRAY, null);
        this._NgClass_17_3 = new import11.Wrapper_NgClass(this.parentInjector.get(import14.IterableDiffers), this.parentInjector.get(import15.KeyValueDiffers), new import16.ElementRef(this._el_17), this.renderer);
        this._el_18 = import4.createRenderElement(this.renderer, this._el_17, 'td', import4.EMPTY_INLINE_ARRAY, null);
        this._text_19 = this.renderer.createText(this._el_18, 'Germany', null);
        this._text_20 = this.renderer.createText(this._el_8, '\n    ', null);
        this._el_21 = import4.createRenderElement(this.renderer, this._el_8, 'tr', import4.EMPTY_INLINE_ARRAY, null);
        this._NgClass_21_3 = new import11.Wrapper_NgClass(this.parentInjector.get(import14.IterableDiffers), this.parentInjector.get(import15.KeyValueDiffers), new import16.ElementRef(this._el_21), this.renderer);
        this._el_22 = import4.createRenderElement(this.renderer, this._el_21, 'td', import4.EMPTY_INLINE_ARRAY, null);
        this._text_23 = this.renderer.createText(this._el_22, 'Argentina', null);
        this._text_24 = this.renderer.createText(this._el_8, '\n', null);
        this._text_25 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_26 = import4.createRenderElement(this.renderer, parentRenderNode, 'div', new import4.InlineArray2(2, 'style', 'margin-left: 10px;'), null);
        this._text_27 = this.renderer.createText(this._el_26, 'The capitol is ', null);
        this._el_28 = import4.createRenderElement(this.renderer, this._el_26, 'strong', import4.EMPTY_INLINE_ARRAY, null);
        this._text_29 = this.renderer.createText(this._el_28, '', null);
        this._text_30 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_31 = import4.createRenderElement(this.renderer, parentRenderNode, 'br', import4.EMPTY_INLINE_ARRAY, null);
        this._text_32 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_33 = import4.createRenderElement(this.renderer, parentRenderNode, 'div', new import4.InlineArray4(4, 'class', 'alert alert-success', 'role', 'alert'), null);
        this._text_34 = this.renderer.createText(this._el_33, '\n    List of friends using Observables\n', null);
        this._text_35 = this.renderer.createText(parentRenderNode, '\n', null);
        this._anchor_36 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._appEl_36 = new import3.AppElement(36, null, this, this._anchor_36);
        this._TemplateRef_36_5 = new import17.TemplateRef_(this._appEl_36, viewFactory_HttpSample1);
        this._NgFor_36_6 = new import12.Wrapper_NgFor(this._appEl_36.vcRef, this._TemplateRef_36_5, this.parentInjector.get(import14.IterableDiffers), this.ref);
        this._text_37 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_38 = import4.createRenderElement(this.renderer, parentRenderNode, 'br', import4.EMPTY_INLINE_ARRAY, null);
        this._text_39 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_40 = import4.createRenderElement(this.renderer, parentRenderNode, 'div', new import4.InlineArray4(4, 'class', 'alert alert-success', 'role', 'alert'), null);
        this._text_41 = this.renderer.createText(this._el_40, '\n    List of friends loaded using Promises\n', null);
        this._text_42 = this.renderer.createText(parentRenderNode, '\n', null);
        this._anchor_43 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._appEl_43 = new import3.AppElement(43, null, this, this._anchor_43);
        this._TemplateRef_43_5 = new import17.TemplateRef_(this._appEl_43, viewFactory_HttpSample2);
        this._NgFor_43_6 = new import12.Wrapper_NgFor(this._appEl_43.vcRef, this._TemplateRef_43_5, this.parentInjector.get(import14.IterableDiffers), this.ref);
        this._text_44 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_45 = import4.createRenderElement(this.renderer, parentRenderNode, 'br', import4.EMPTY_INLINE_ARRAY, null);
        this._text_46 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_47 = import4.createRenderElement(this.renderer, parentRenderNode, 'div', new import4.InlineArray4(4, 'class', 'alert alert-success', 'role', 'alert'), null);
        this._text_48 = this.renderer.createText(this._el_47, '\n    List of friends and customer loaded successfully in parallel\n', null);
        this._text_49 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_50 = import4.createRenderElement(this.renderer, parentRenderNode, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._text_51 = this.renderer.createText(this._el_50, 'Friends:', null);
        this._text_52 = this.renderer.createText(parentRenderNode, '\n', null);
        this._anchor_53 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._appEl_53 = new import3.AppElement(53, null, this, this._anchor_53);
        this._TemplateRef_53_5 = new import17.TemplateRef_(this._appEl_53, viewFactory_HttpSample3);
        this._NgFor_53_6 = new import12.Wrapper_NgFor(this._appEl_53.vcRef, this._TemplateRef_53_5, this.parentInjector.get(import14.IterableDiffers), this.ref);
        this._text_54 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_55 = import4.createRenderElement(this.renderer, parentRenderNode, 'br', import4.EMPTY_INLINE_ARRAY, null);
        this._text_56 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_57 = import4.createRenderElement(this.renderer, parentRenderNode, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._text_58 = this.renderer.createText(this._el_57, 'Customer:', null);
        this._text_59 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_60 = import4.createRenderElement(this.renderer, parentRenderNode, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._text_61 = this.renderer.createText(this._el_60, '', null);
        this._text_62 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_63 = import4.createRenderElement(this.renderer, parentRenderNode, 'br', import4.EMPTY_INLINE_ARRAY, null);
        this._text_64 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_65 = import4.createRenderElement(this.renderer, parentRenderNode, 'div', new import4.InlineArray4(4, 'class', 'alert alert-success', 'role', 'alert'), null);
        this._text_66 = this.renderer.createText(this._el_65, '\n    Loaded a contract after first loading a customer\n', null);
        this._text_67 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_68 = import4.createRenderElement(this.renderer, parentRenderNode, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._text_69 = this.renderer.createText(this._el_68, '\n    ', null);
        this._el_70 = import4.createRenderElement(this.renderer, this._el_68, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._text_71 = this.renderer.createText(this._el_70, '', null);
        this._text_72 = this.renderer.createText(this._el_68, '\n    ', null);
        this._el_73 = import4.createRenderElement(this.renderer, this._el_68, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._text_74 = this.renderer.createText(this._el_73, '', null);
        this._text_75 = this.renderer.createText(this._el_68, '\n', null);
        this._text_76 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_77 = import4.createRenderElement(this.renderer, parentRenderNode, 'br', import4.EMPTY_INLINE_ARRAY, null);
        this._text_78 = this.renderer.createText(parentRenderNode, '\n', null);
        this._anchor_79 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._appEl_79 = new import3.AppElement(79, null, this, this._anchor_79);
        this._TemplateRef_79_5 = new import17.TemplateRef_(this._appEl_79, viewFactory_HttpSample4);
        this._NgIf_79_6 = new import13.Wrapper_NgIf(this._appEl_79.vcRef, this._TemplateRef_79_5);
        this._text_80 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_81 = import4.createRenderElement(this.renderer, parentRenderNode, 'div', new import4.InlineArray4(4, 'class', 'alert alert-success', 'role', 'alert'), null);
        this._text_82 = this.renderer.createText(this._el_81, '\n    Making a post request\n', null);
        this._text_83 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_84 = import4.createRenderElement(this.renderer, parentRenderNode, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._text_85 = this.renderer.createText(this._el_84, '\n    ', null);
        this._el_86 = import4.createRenderElement(this.renderer, this._el_84, 'button', import4.EMPTY_INLINE_ARRAY, null);
        this._text_87 = this.renderer.createText(this._el_86, 'Post Data', null);
        this._text_88 = this.renderer.createText(this._el_84, '\n\n    ', null);
        this._el_89 = import4.createRenderElement(this.renderer, this._el_84, 'p', import4.EMPTY_INLINE_ARRAY, null);
        this._text_90 = this.renderer.createText(this._el_89, 'Posted the following values:', null);
        this._text_91 = this.renderer.createText(this._el_84, '\n    ', null);
        this._el_92 = import4.createRenderElement(this.renderer, this._el_84, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._text_93 = this.renderer.createText(this._el_92, '', null);
        this._text_94 = this.renderer.createText(this._el_84, '\n    ', null);
        this._el_95 = import4.createRenderElement(this.renderer, this._el_84, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._text_96 = this.renderer.createText(this._el_95, '', null);
        this._text_97 = this.renderer.createText(this._el_84, '\n', null);
        this._text_98 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_99 = import4.createRenderElement(this.renderer, parentRenderNode, 'h4', import4.EMPTY_INLINE_ARRAY, null);
        this._el_100 = import4.createRenderElement(this.renderer, this._el_99, 'a', new import4.InlineArray2(2, 'href', 'http://www.syntaxsuccess.com/viewarticle/angular-2.0-and-http'), null);
        this._text_101 = this.renderer.createText(this._el_100, 'Read more here', null);
        var disposable_0 = this.renderer.listen(this._el_9, 'click', this.eventHandler(this._handle_click_9_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_13, 'click', this.eventHandler(this._handle_click_13_0.bind(this)));
        var disposable_2 = this.renderer.listen(this._el_17, 'click', this.eventHandler(this._handle_click_17_0.bind(this)));
        var disposable_3 = this.renderer.listen(this._el_21, 'click', this.eventHandler(this._handle_click_21_0.bind(this)));
        var disposable_4 = this.renderer.listen(this._el_86, 'click', this.eventHandler(this._handle_click_86_0.bind(this)));
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
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import18.NgClass) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 11)))) {
            return this._NgClass_9_3.context;
        }
        if (((token === import18.NgClass) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 15)))) {
            return this._NgClass_13_3.context;
        }
        if (((token === import18.NgClass) && ((17 <= requestNodeIndex) && (requestNodeIndex <= 19)))) {
            return this._NgClass_17_3.context;
        }
        if (((token === import18.NgClass) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 23)))) {
            return this._NgClass_21_3.context;
        }
        if (((token === import17.TemplateRef) && (36 === requestNodeIndex))) {
            return this._TemplateRef_36_5;
        }
        if (((token === import19.NgFor) && (36 === requestNodeIndex))) {
            return this._NgFor_36_6.context;
        }
        if (((token === import17.TemplateRef) && (43 === requestNodeIndex))) {
            return this._TemplateRef_43_5;
        }
        if (((token === import19.NgFor) && (43 === requestNodeIndex))) {
            return this._NgFor_43_6.context;
        }
        if (((token === import17.TemplateRef) && (53 === requestNodeIndex))) {
            return this._TemplateRef_53_5;
        }
        if (((token === import19.NgFor) && (53 === requestNodeIndex))) {
            return this._NgFor_53_6.context;
        }
        if (((token === import17.TemplateRef) && (79 === requestNodeIndex))) {
            return this._TemplateRef_79_5;
        }
        if (((token === import20.NgIf) && (79 === requestNodeIndex))) {
            return this._NgIf_79_6.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_9_0_0 = this._map_118(this.context.isActive('usa'));
        this._NgClass_9_3.check_ngClass(currVal_9_0_0, throwOnChange, false);
        this._NgClass_9_3.detectChangesInInputProps(this, this._el_9, throwOnChange);
        const currVal_13_0_0 = this._map_119(this.context.isActive('denmark'));
        this._NgClass_13_3.check_ngClass(currVal_13_0_0, throwOnChange, false);
        this._NgClass_13_3.detectChangesInInputProps(this, this._el_13, throwOnChange);
        const currVal_17_0_0 = this._map_120(this.context.isActive('germany'));
        this._NgClass_17_3.check_ngClass(currVal_17_0_0, throwOnChange, false);
        this._NgClass_17_3.detectChangesInInputProps(this, this._el_17, throwOnChange);
        const currVal_21_0_0 = this._map_121(this.context.isActive('argentina'));
        this._NgClass_21_3.check_ngClass(currVal_21_0_0, throwOnChange, false);
        this._NgClass_21_3.detectChangesInInputProps(this, this._el_21, throwOnChange);
        const currVal_36_0_0 = this.context.result.friends;
        this._NgFor_36_6.check_ngForOf(currVal_36_0_0, throwOnChange, false);
        this._NgFor_36_6.detectChangesInInputProps(this, this._anchor_36, throwOnChange);
        const currVal_43_0_0 = this.context.friendsAsPromise.friends;
        this._NgFor_43_6.check_ngForOf(currVal_43_0_0, throwOnChange, false);
        this._NgFor_43_6.detectChangesInInputProps(this, this._anchor_43, throwOnChange);
        const currVal_53_0_0 = this.context.combined.friends;
        this._NgFor_53_6.check_ngForOf(currVal_53_0_0, throwOnChange, false);
        this._NgFor_53_6.detectChangesInInputProps(this, this._anchor_53, throwOnChange);
        const currVal_79_0_0 = this.context.error;
        this._NgIf_79_6.check_ngIf(currVal_79_0_0, throwOnChange, false);
        this._NgIf_79_6.detectChangesInInputProps(this, this._anchor_79, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._NgClass_9_3.detectChangesInHostProps(this, this._el_9, throwOnChange);
        this._NgClass_13_3.detectChangesInHostProps(this, this._el_13, throwOnChange);
        this._NgClass_17_3.detectChangesInHostProps(this, this._el_17, throwOnChange);
        this._NgClass_21_3.detectChangesInHostProps(this, this._el_21, throwOnChange);
        const currVal_122 = import4.interpolate(1, '', this.context.capitol, '');
        if (import4.checkBinding(throwOnChange, this._expr_122, currVal_122)) {
            this.renderer.setText(this._text_29, currVal_122);
            this._expr_122 = currVal_122;
        }
        const currVal_123 = import4.interpolate(1, '', this.context.combined.customer.name, '');
        if (import4.checkBinding(throwOnChange, this._expr_123, currVal_123)) {
            this.renderer.setText(this._text_61, currVal_123);
            this._expr_123 = currVal_123;
        }
        const currVal_124 = import4.interpolate(1, 'Customer: ', ((this.context.customer == null) ? null : this.context.customer.name), '');
        if (import4.checkBinding(throwOnChange, this._expr_124, currVal_124)) {
            this.renderer.setText(this._text_71, currVal_124);
            this._expr_124 = currVal_124;
        }
        const currVal_125 = import4.interpolate(1, 'Product: ', ((this.context.contract == null) ? null : this.context.contract.product), '');
        if (import4.checkBinding(throwOnChange, this._expr_125, currVal_125)) {
            this.renderer.setText(this._text_74, currVal_125);
            this._expr_125 = currVal_125;
        }
        const currVal_126 = import4.interpolate(1, '', this.context.postResponse.firstName, '');
        if (import4.checkBinding(throwOnChange, this._expr_126, currVal_126)) {
            this.renderer.setText(this._text_93, currVal_126);
            this._expr_126 = currVal_126;
        }
        const currVal_127 = import4.interpolate(1, '', this.context.postResponse.lastName, '');
        if (import4.checkBinding(throwOnChange, this._expr_127, currVal_127)) {
            this.renderer.setText(this._text_96, currVal_127);
            this._expr_127 = currVal_127;
        }
        this.detectViewChildrenChanges(throwOnChange);
    }
    _handle_click_9_0($event) {
        this.markPathToRootAsCheckOnce();
        this.context.country.next('usa');
        const pd_9_0 = ((this.context.activeCountry = 'usa') !== false);
        return (true && pd_9_0);
    }
    _handle_click_13_0($event) {
        this.markPathToRootAsCheckOnce();
        this.context.country.next('denmark');
        const pd_13_0 = ((this.context.activeCountry = 'denmark') !== false);
        return (true && pd_13_0);
    }
    _handle_click_17_0($event) {
        this.markPathToRootAsCheckOnce();
        this.context.country.next('germany');
        const pd_17_0 = ((this.context.activeCountry = 'germany') !== false);
        return (true && pd_17_0);
    }
    _handle_click_21_0($event) {
        this.markPathToRootAsCheckOnce();
        this.context.country.next('argentina');
        const pd_21_0 = ((this.context.activeCountry = 'argentina') !== false);
        return (true && pd_21_0);
    }
    _handle_click_86_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_86_0 = (this.context.postData() !== false);
        return (true && pd_86_0);
    }
}
export function viewFactory_HttpSample0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_HttpSample === null)) {
        (renderType_HttpSample = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, styles_HttpSample, {}));
    }
    return new _View_HttpSample0(viewUtils, parentInjector, declarationEl);
}
class _View_HttpSample1 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_HttpSample1, renderType_HttpSample, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_2 = import7.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    }
    detectChangesInternal(throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        const currVal_2 = import4.interpolate(1, '\n    ', this.context.$implicit, '\n');
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
        this.detectViewChildrenChanges(throwOnChange);
    }
}
function viewFactory_HttpSample1(viewUtils, parentInjector, declarationEl) {
    return new _View_HttpSample1(viewUtils, parentInjector, declarationEl);
}
class _View_HttpSample2 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_HttpSample2, renderType_HttpSample, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_2 = import7.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    }
    detectChangesInternal(throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        const currVal_2 = import4.interpolate(1, '\n    ', this.context.$implicit, '\n');
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
        this.detectViewChildrenChanges(throwOnChange);
    }
}
function viewFactory_HttpSample2(viewUtils, parentInjector, declarationEl) {
    return new _View_HttpSample2(viewUtils, parentInjector, declarationEl);
}
class _View_HttpSample3 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_HttpSample3, renderType_HttpSample, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_2 = import7.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    }
    detectChangesInternal(throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        const currVal_2 = import4.interpolate(1, '\n    ', this.context.$implicit, '\n');
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
        this.detectViewChildrenChanges(throwOnChange);
    }
}
function viewFactory_HttpSample3(viewUtils, parentInjector, declarationEl) {
    return new _View_HttpSample3(viewUtils, parentInjector, declarationEl);
}
class _View_HttpSample4 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_HttpSample4, renderType_HttpSample, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import4.createRenderElement(this.renderer, this._el_0, 'div', new import4.InlineArray4(4, 'class', 'alert alert-danger', 'role', 'alert'), null);
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
    }
}
function viewFactory_HttpSample4(viewUtils, parentInjector, declarationEl) {
    return new _View_HttpSample4(viewUtils, parentInjector, declarationEl);
}
