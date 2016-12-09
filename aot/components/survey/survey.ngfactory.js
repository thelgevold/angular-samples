import * as import0 from '../../../components/survey/survey';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '../../node_modules/@angular/forms/src/directives/reactive_directives/form_group_directive.ngfactory';
import * as import10 from '../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import11 from '@angular/core/src/linker/view_container';
import * as import12 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import13 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import14 from '@angular/core/src/linker/template_ref';
import * as import15 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import16 from '@angular/common/src/directives/ng_for';
import * as import17 from '@angular/forms/src/directives/reactive_directives/form_group_directive';
import * as import18 from '@angular/forms/src/directives/control_container';
import * as import19 from '@angular/forms/src/directives/ng_control_status';
import * as import20 from '@angular/common/src/directives/ng_if';
import * as import21 from '../../node_modules/@angular/common/src/directives/ng_switch.ngfactory';
import * as import22 from '@angular/common/src/directives/ng_switch';
import * as import23 from '../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory';
import * as import24 from '../../node_modules/@angular/forms/src/directives/reactive_directives/form_control_name.ngfactory';
import * as import25 from '@angular/core/src/linker/element_ref';
import * as import26 from '@angular/forms/src/directives/default_value_accessor';
import * as import27 from '@angular/forms/src/directives/control_value_accessor';
import * as import28 from '@angular/forms/src/directives/reactive_directives/form_control_name';
import * as import29 from '@angular/forms/src/directives/ng_control';
import * as import30 from '../../node_modules/@angular/forms/src/directives/select_control_value_accessor.ngfactory';
import * as import31 from '@angular/forms/src/directives/select_control_value_accessor';
import * as import32 from '../../node_modules/@angular/forms/src/directives/select_multiple_control_value_accessor.ngfactory';
import * as import33 from '@angular/forms/src/directives/select_multiple_control_value_accessor';
export class Wrapper_Survey {
    constructor() {
        this._changed = false;
        this.context = new import0.Survey();
        this._expr_0 = import1.UNINITIALIZED;
    }
    ngOnDetach(view, componentView, el) {
    }
    ngOnDestroy() {
    }
    check_model(currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.model = currValue;
            this._expr_0 = currValue;
        }
    }
    ngDoCheck(view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
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
var renderType_Survey_Host = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, [], {});
class View_Survey_Host0 extends import2.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_Survey_Host0, renderType_Survey_Host, import6.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'survey', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_Survey0(this.viewUtils, this, 0, this._el_0);
        this._Survey_0_3 = new Wrapper_Survey();
        this.compView_0.create(this._Survey_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import8.ComponentRef_(0, this, this._el_0, this._Survey_0_3.context);
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.Survey) && (0 === requestNodeIndex))) {
            return this._Survey_0_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._Survey_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    }
    destroyInternal() {
        this.compView_0.destroy();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
export const SurveyNgFactory = new import8.ComponentFactory('survey', View_Survey_Host0, import0.Survey);
const styles_Survey = [];
var renderType_Survey = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, styles_Survey, {});
export class View_Survey0 extends import2.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_Survey0, renderType_Survey, import6.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_34 = import1.UNINITIALIZED;
        this._expr_35 = import1.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'form', import3.EMPTY_INLINE_ARRAY, null);
        this._FormGroupDirective_2_3 = new import9.Wrapper_FormGroupDirective(null, null);
        this._ControlContainer_2_4 = this._FormGroupDirective_2_3.context;
        this._NgControlStatusGroup_2_5 = new import10.Wrapper_NgControlStatusGroup(this._ControlContainer_2_4);
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._anchor_4 = this.renderer.createTemplateAnchor(this._el_2, null);
        this._vc_4 = new import11.ViewContainer(4, 2, this, this._anchor_4);
        this._TemplateRef_4_5 = new import14.TemplateRef_(this, 4, this._anchor_4);
        this._NgFor_4_6 = new import12.Wrapper_NgFor(this._vc_4.vcRef, this._TemplateRef_4_5, this.parentView.injectorGet(import15.IterableDiffers, this.parentIndex), this.ref);
        this._text_5 = this.renderer.createText(this._el_2, '\n\n        ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_2, 'div', new import3.InlineArray2(2, 'class', 'form-row'), null);
        this._text_7 = this.renderer.createText(this._el_6, '\n            ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_6, 'button', new import3.InlineArray2(2, 'type', 'submit'), null);
        this._text_9 = this.renderer.createText(this._el_8, 'Save', null);
        this._text_10 = this.renderer.createText(this._el_6, '\n        ', null);
        this._text_11 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_12 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_13 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'form-row'), null);
        this._text_14 = this.renderer.createText(this._el_13, '\n        ', null);
        this._anchor_15 = this.renderer.createTemplateAnchor(this._el_13, null);
        this._vc_15 = new import11.ViewContainer(15, 13, this, this._anchor_15);
        this._TemplateRef_15_5 = new import14.TemplateRef_(this, 15, this._anchor_15);
        this._NgIf_15_6 = new import13.Wrapper_NgIf(this._vc_15.vcRef, this._TemplateRef_15_5);
        this._text_16 = this.renderer.createText(this._el_13, '\n        ', null);
        this._el_17 = import3.createRenderElement(this.renderer, this._el_13, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_18 = this.renderer.createText(this._el_17, '', null);
        this._text_19 = this.renderer.createText(this._el_13, '\n    ', null);
        this._text_20 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_21 = import3.createRenderElement(this.renderer, this._el_0, 'h4', import3.EMPTY_INLINE_ARRAY, null);
        this._el_22 = import3.createRenderElement(this.renderer, this._el_21, 'a', new import3.InlineArray2(2, 'href', 'http://www.syntaxsuccess.com/viewarticle/dynamic-form-in-angular-2.0'), null);
        this._text_23 = this.renderer.createText(this._el_22, 'Read more here', null);
        this._text_24 = this.renderer.createText(this._el_0, '\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_2, new import3.InlineArray8(6, 'ngSubmit', null, 'submit', null, 'reset', null), this.eventHandler(this.handleEvent_2));
        this._FormGroupDirective_2_3.subscribe(this, this.eventHandler(this.handleEvent_2), true);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._anchor_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._text_10,
            this._text_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._anchor_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._text_19,
            this._text_20,
            this._el_21,
            this._el_22,
            this._text_23,
            this._text_24
        ]), [disposable_0]);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import14.TemplateRef) && (4 === requestNodeIndex))) {
            return this._TemplateRef_4_5;
        }
        if (((token === import16.NgFor) && (4 === requestNodeIndex))) {
            return this._NgFor_4_6.context;
        }
        if (((token === import17.FormGroupDirective) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 11)))) {
            return this._FormGroupDirective_2_3.context;
        }
        if (((token === import18.ControlContainer) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 11)))) {
            return this._ControlContainer_2_4;
        }
        if (((token === import19.NgControlStatusGroup) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 11)))) {
            return this._NgControlStatusGroup_2_5.context;
        }
        if (((token === import14.TemplateRef) && (15 === requestNodeIndex))) {
            return this._TemplateRef_15_5;
        }
        if (((token === import20.NgIf) && (15 === requestNodeIndex))) {
            return this._NgIf_15_6.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_2_0_0 = this.context.form;
        this._FormGroupDirective_2_3.check_form(currVal_2_0_0, throwOnChange, false);
        this._FormGroupDirective_2_3.ngDoCheck(this, this._el_2, throwOnChange);
        this._NgControlStatusGroup_2_5.ngDoCheck(this, this._el_2, throwOnChange);
        const currVal_4_0_0 = this.context.model.questions;
        this._NgFor_4_6.check_ngForOf(currVal_4_0_0, throwOnChange, false);
        this._NgFor_4_6.ngDoCheck(this, this._anchor_4, throwOnChange);
        const currVal_15_0_0 = this.context.payLoad;
        this._NgIf_15_6.check_ngIf(currVal_15_0_0, throwOnChange, false);
        this._NgIf_15_6.ngDoCheck(this, this._anchor_15, throwOnChange);
        this._vc_4.detectChangesInNestedViews(throwOnChange);
        this._vc_15.detectChangesInNestedViews(throwOnChange);
        this._NgControlStatusGroup_2_5.checkHost(this, this, this._el_2, throwOnChange);
        const currVal_34 = !this.context.form.valid;
        if (import3.checkBinding(throwOnChange, this._expr_34, currVal_34)) {
            this.renderer.setElementProperty(this._el_8, 'disabled', currVal_34);
            this._expr_34 = currVal_34;
        }
        const currVal_35 = import3.inlineInterpolate(1, '\n            ', this.context.payLoad, '\n        ');
        if (import3.checkBinding(throwOnChange, this._expr_35, currVal_35)) {
            this.renderer.setText(this._text_18, currVal_35);
            this._expr_35 = currVal_35;
        }
    }
    destroyInternal() {
        this._vc_4.destroyNestedViews();
        this._vc_15.destroyNestedViews();
        this._FormGroupDirective_2_3.ngOnDestroy();
    }
    createEmbeddedViewInternal(nodeIndex) {
        if ((nodeIndex == 4)) {
            return new View_Survey1(this.viewUtils, this, 4, this._anchor_4, this._vc_4);
        }
        if ((nodeIndex == 15)) {
            return new View_Survey6(this.viewUtils, this, 15, this._anchor_15, this._vc_15);
        }
        return null;
    }
    handleEvent_2(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._FormGroupDirective_2_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngSubmit')) {
            const pd_sub_0 = (this.context.onSubmit() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    }
}
class View_Survey1 extends import2.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        super(View_Survey1, renderType_Survey, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_24 = import1.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'form-row'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'formHeading'), null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n\n            ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_0, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._NgSwitch_5_3 = new import21.Wrapper_NgSwitch();
        this._text_6 = this.renderer.createText(this._el_5, '\n                ', null);
        this._anchor_7 = this.renderer.createTemplateAnchor(this._el_5, null);
        this._vc_7 = new import11.ViewContainer(7, 5, this, this._anchor_7);
        this._TemplateRef_7_5 = new import14.TemplateRef_(this, 7, this._anchor_7);
        this._NgSwitchCase_7_6 = new import21.Wrapper_NgSwitchCase(this._vc_7.vcRef, this._TemplateRef_7_5, this._NgSwitch_5_3.context);
        this._text_8 = this.renderer.createText(this._el_5, '\n                ', null);
        this._anchor_9 = this.renderer.createTemplateAnchor(this._el_5, null);
        this._vc_9 = new import11.ViewContainer(9, 5, this, this._anchor_9);
        this._TemplateRef_9_5 = new import14.TemplateRef_(this, 9, this._anchor_9);
        this._NgSwitchCase_9_6 = new import21.Wrapper_NgSwitchCase(this._vc_9.vcRef, this._TemplateRef_9_5, this._NgSwitch_5_3.context);
        this._text_10 = this.renderer.createText(this._el_5, '\n            ', null);
        this._text_11 = this.renderer.createText(this._el_0, '\n\n            ', null);
        this._anchor_12 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_12 = new import11.ViewContainer(12, 0, this, this._anchor_12);
        this._TemplateRef_12_5 = new import14.TemplateRef_(this, 12, this._anchor_12);
        this._NgIf_12_6 = new import13.Wrapper_NgIf(this._vc_12.vcRef, this._TemplateRef_12_5);
        this._text_13 = this.renderer.createText(this._el_0, '\n        ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._anchor_7,
            this._text_8,
            this._anchor_9,
            this._text_10,
            this._text_11,
            this._anchor_12,
            this._text_13
        ]), null);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import14.TemplateRef) && (7 === requestNodeIndex))) {
            return this._TemplateRef_7_5;
        }
        if (((token === import22.NgSwitchCase) && (7 === requestNodeIndex))) {
            return this._NgSwitchCase_7_6.context;
        }
        if (((token === import14.TemplateRef) && (9 === requestNodeIndex))) {
            return this._TemplateRef_9_5;
        }
        if (((token === import22.NgSwitchCase) && (9 === requestNodeIndex))) {
            return this._NgSwitchCase_9_6.context;
        }
        if (((token === import22.NgSwitch) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 10)))) {
            return this._NgSwitch_5_3.context;
        }
        if (((token === import14.TemplateRef) && (12 === requestNodeIndex))) {
            return this._TemplateRef_12_5;
        }
        if (((token === import20.NgIf) && (12 === requestNodeIndex))) {
            return this._NgIf_12_6.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_5_0_0 = this.context.$implicit.controlType;
        this._NgSwitch_5_3.check_ngSwitch(currVal_5_0_0, throwOnChange, false);
        this._NgSwitch_5_3.ngDoCheck(this, this._el_5, throwOnChange);
        const currVal_7_0_0 = 'textbox';
        this._NgSwitchCase_7_6.check_ngSwitchCase(currVal_7_0_0, throwOnChange, false);
        this._NgSwitchCase_7_6.ngDoCheck(this, this._anchor_7, throwOnChange);
        const currVal_9_0_0 = 'dropdown';
        this._NgSwitchCase_9_6.check_ngSwitchCase(currVal_9_0_0, throwOnChange, false);
        this._NgSwitchCase_9_6.ngDoCheck(this, this._anchor_9, throwOnChange);
        const currVal_12_0_0 = !this.parentView.context.form.controls[this.context.$implicit.key].valid;
        this._NgIf_12_6.check_ngIf(currVal_12_0_0, throwOnChange, false);
        this._NgIf_12_6.ngDoCheck(this, this._anchor_12, throwOnChange);
        this._vc_7.detectChangesInNestedViews(throwOnChange);
        this._vc_9.detectChangesInNestedViews(throwOnChange);
        this._vc_12.detectChangesInNestedViews(throwOnChange);
        const currVal_24 = import3.inlineInterpolate(1, '', this.context.$implicit.text, '');
        if (import3.checkBinding(throwOnChange, this._expr_24, currVal_24)) {
            this.renderer.setText(this._text_3, currVal_24);
            this._expr_24 = currVal_24;
        }
    }
    destroyInternal() {
        this._vc_7.destroyNestedViews();
        this._vc_9.destroyNestedViews();
        this._vc_12.destroyNestedViews();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
    createEmbeddedViewInternal(nodeIndex) {
        if ((nodeIndex == 7)) {
            return new View_Survey2(this.viewUtils, this, 7, this._anchor_7, this._vc_7);
        }
        if ((nodeIndex == 9)) {
            return new View_Survey3(this.viewUtils, this, 9, this._anchor_9, this._vc_9);
        }
        if ((nodeIndex == 12)) {
            return new View_Survey5(this.viewUtils, this, 12, this._anchor_12, this._vc_12);
        }
        return null;
    }
}
class View_Survey2 extends import2.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        super(View_Survey2, renderType_Survey, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_7 = import1.UNINITIALIZED;
        this._expr_8 = import1.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._el_1 = import3.createRenderElement(this.renderer, this._el_0, 'input', import3.EMPTY_INLINE_ARRAY, null);
        this._DefaultValueAccessor_1_3 = new import23.Wrapper_DefaultValueAccessor(this.renderer, new import25.ElementRef(this._el_1));
        this._NG_VALUE_ACCESSOR_1_4 = [this._DefaultValueAccessor_1_3.context];
        this._FormControlName_1_5 = new import24.Wrapper_FormControlName(this.parentView.parentView._ControlContainer_2_4, null, null, this._NG_VALUE_ACCESSOR_1_4);
        this._NgControl_1_6 = this._FormControlName_1_5.context;
        this._NgControlStatus_1_7 = new import10.Wrapper_NgControlStatus(this._NgControl_1_6);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_1, new import3.InlineArray4(4, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_1));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._el_1
        ]), [disposable_0]);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import26.DefaultValueAccessor) && (1 === requestNodeIndex))) {
            return this._DefaultValueAccessor_1_3.context;
        }
        if (((token === import27.NG_VALUE_ACCESSOR) && (1 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_1_4;
        }
        if (((token === import28.FormControlName) && (1 === requestNodeIndex))) {
            return this._FormControlName_1_5.context;
        }
        if (((token === import29.NgControl) && (1 === requestNodeIndex))) {
            return this._NgControl_1_6;
        }
        if (((token === import19.NgControlStatus) && (1 === requestNodeIndex))) {
            return this._NgControlStatus_1_7.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._DefaultValueAccessor_1_3.ngDoCheck(this, this._el_1, throwOnChange);
        const currVal_1_1_0 = this.parentView.context.$implicit.key;
        this._FormControlName_1_5.check_name(currVal_1_1_0, throwOnChange, false);
        this._FormControlName_1_5.ngDoCheck(this, this._el_1, throwOnChange);
        this._NgControlStatus_1_7.ngDoCheck(this, this._el_1, throwOnChange);
        const currVal_7 = import3.inlineInterpolate(1, '', this.parentView.context.$implicit.type, '');
        if (import3.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementProperty(this._el_1, 'type', currVal_7);
            this._expr_7 = currVal_7;
        }
        const currVal_8 = import3.inlineInterpolate(1, '', this.parentView.context.$implicit.key, '');
        if (import3.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setElementProperty(this._el_1, 'id', currVal_8);
            this._expr_8 = currVal_8;
        }
        this._NgControlStatus_1_7.checkHost(this, this, this._el_1, throwOnChange);
    }
    destroyInternal() {
        this._FormControlName_1_5.ngOnDestroy();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
    handleEvent_1(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_1_3.handleEvent(eventName, $event) && result);
        return result;
    }
}
class View_Survey3 extends import2.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        super(View_Survey3, renderType_Survey, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'select', import3.EMPTY_INLINE_ARRAY, null);
        this._SelectControlValueAccessor_2_3 = new import30.Wrapper_SelectControlValueAccessor(this.renderer, new import25.ElementRef(this._el_2));
        this._NG_VALUE_ACCESSOR_2_4 = [this._SelectControlValueAccessor_2_3.context];
        this._FormControlName_2_5 = new import24.Wrapper_FormControlName(this.parentView.parentView._ControlContainer_2_4, null, null, this._NG_VALUE_ACCESSOR_2_4);
        this._NgControl_2_6 = this._FormControlName_2_5.context;
        this._NgControlStatus_2_7 = new import10.Wrapper_NgControlStatus(this._NgControl_2_6);
        this._text_3 = this.renderer.createText(this._el_2, '\n                        ', null);
        this._anchor_4 = this.renderer.createTemplateAnchor(this._el_2, null);
        this._vc_4 = new import11.ViewContainer(4, 2, this, this._anchor_4);
        this._TemplateRef_4_5 = new import14.TemplateRef_(this, 4, this._anchor_4);
        this._NgFor_4_6 = new import12.Wrapper_NgFor(this._vc_4.vcRef, this._TemplateRef_4_5, this.parentView.parentView.parentView.injectorGet(import15.IterableDiffers, this.parentView.parentView.parentIndex), this.parentView.parentView.ref);
        this._text_5 = this.renderer.createText(this._el_2, '\n                    ', null);
        this._text_6 = this.renderer.createText(this._el_0, '\n                ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_2, new import3.InlineArray4(4, 'change', null, 'blur', null), this.eventHandler(this.handleEvent_2));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._anchor_4,
            this._text_5,
            this._text_6
        ]), [disposable_0]);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import14.TemplateRef) && (4 === requestNodeIndex))) {
            return this._TemplateRef_4_5;
        }
        if (((token === import16.NgFor) && (4 === requestNodeIndex))) {
            return this._NgFor_4_6.context;
        }
        if (((token === import31.SelectControlValueAccessor) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._SelectControlValueAccessor_2_3.context;
        }
        if (((token === import27.NG_VALUE_ACCESSOR) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._NG_VALUE_ACCESSOR_2_4;
        }
        if (((token === import28.FormControlName) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._FormControlName_2_5.context;
        }
        if (((token === import29.NgControl) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._NgControl_2_6;
        }
        if (((token === import19.NgControlStatus) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._NgControlStatus_2_7.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._SelectControlValueAccessor_2_3.ngDoCheck(this, this._el_2, throwOnChange);
        const currVal_2_1_0 = this.parentView.context.$implicit.key;
        this._FormControlName_2_5.check_name(currVal_2_1_0, throwOnChange, false);
        this._FormControlName_2_5.ngDoCheck(this, this._el_2, throwOnChange);
        this._NgControlStatus_2_7.ngDoCheck(this, this._el_2, throwOnChange);
        const currVal_4_0_0 = this.parentView.context.$implicit.options;
        this._NgFor_4_6.check_ngForOf(currVal_4_0_0, throwOnChange, false);
        this._NgFor_4_6.ngDoCheck(this, this._anchor_4, throwOnChange);
        this._vc_4.detectChangesInNestedViews(throwOnChange);
        this._NgControlStatus_2_7.checkHost(this, this, this._el_2, throwOnChange);
    }
    destroyInternal() {
        this._vc_4.destroyNestedViews();
        this._FormControlName_2_5.ngOnDestroy();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
    createEmbeddedViewInternal(nodeIndex) {
        if ((nodeIndex == 4)) {
            return new View_Survey4(this.viewUtils, this, 4, this._anchor_4, this._vc_4);
        }
        return null;
    }
    handleEvent_2(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._SelectControlValueAccessor_2_3.handleEvent(eventName, $event) && result);
        return result;
    }
}
class View_Survey4 extends import2.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        super(View_Survey4, renderType_Survey, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_4 = import1.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'option', import3.EMPTY_INLINE_ARRAY, null);
        this._NgSelectOption_0_3 = new import30.Wrapper_NgSelectOption(new import25.ElementRef(this._el_0), this.renderer, this.parentView._SelectControlValueAccessor_2_3.context);
        this._NgSelectMultipleOption_0_4 = new import32.Wrapper_NgSelectMultipleOption(new import25.ElementRef(this._el_0), this.renderer, null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import31.NgSelectOption) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._NgSelectOption_0_3.context;
        }
        if (((token === import33.NgSelectMultipleOption) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._NgSelectMultipleOption_0_4.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_0_0_0 = this.context.$implicit.key;
        this._NgSelectOption_0_3.check_value(currVal_0_0_0, throwOnChange, false);
        this._NgSelectOption_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        const currVal_0_1_0 = this.context.$implicit.key;
        this._NgSelectMultipleOption_0_4.check_value(currVal_0_1_0, throwOnChange, false);
        this._NgSelectMultipleOption_0_4.ngDoCheck(this, this._el_0, throwOnChange);
        const currVal_4 = import3.inlineInterpolate(1, '', this.context.$implicit.value, '');
        if (import3.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setText(this._text_1, currVal_4);
            this._expr_4 = currVal_4;
        }
    }
    destroyInternal() {
        this._NgSelectOption_0_3.ngOnDestroy();
        this._NgSelectMultipleOption_0_4.ngOnDestroy();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
class View_Survey5 extends import2.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        super(View_Survey5, renderType_Survey, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'errorMessage'), null);
        this._text_1 = this.renderer.createText(this._el_0, '*required', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
class View_Survey6 extends import2.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        super(View_Survey6, renderType_Survey, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._el_1 = import3.createRenderElement(this.renderer, this._el_0, 'strong', import3.EMPTY_INLINE_ARRAY, null);
        this._text_2 = this.renderer.createText(this._el_1, 'The form contains the following values', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._el_1,
            this._text_2
        ]), null);
        return null;
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
