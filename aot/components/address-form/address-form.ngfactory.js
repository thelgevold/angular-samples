import * as import0 from '../../../components/address-form/address-form';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../node_modules/@angular/forms/src/directives/reactive_directives/form_group_directive.ngfactory';
import * as import9 from '../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import10 from '../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory';
import * as import11 from '../../node_modules/@angular/forms/src/directives/reactive_directives/form_control_name.ngfactory';
import * as import12 from '@angular/core/src/linker/view_container';
import * as import13 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import14 from '../../node_modules/@angular/forms/src/directives/select_control_value_accessor.ngfactory';
import * as import15 from '../../node_modules/@angular/forms/src/directives/select_multiple_control_value_accessor.ngfactory';
import * as import16 from '@angular/core/src/change_detection/change_detection_util';
import * as import17 from '@angular/core/src/linker/element_ref';
import * as import18 from '@angular/core/src/linker/template_ref';
import * as import19 from '@angular/forms/src/directives/default_value_accessor';
import * as import20 from '@angular/forms/src/directives/control_value_accessor';
import * as import21 from '@angular/forms/src/directives/reactive_directives/form_control_name';
import * as import22 from '@angular/forms/src/directives/ng_control';
import * as import23 from '@angular/forms/src/directives/ng_control_status';
import * as import24 from '@angular/common/src/directives/ng_if';
import * as import25 from '@angular/forms/src/directives/select_control_value_accessor';
import * as import26 from '@angular/forms/src/directives/select_multiple_control_value_accessor';
import * as import27 from '@angular/forms/src/directives/reactive_directives/form_group_directive';
import * as import28 from '@angular/forms/src/directives/control_container';
export class Wrapper_AddressForm {
    constructor() {
        this._changed = false;
        this.context = new import0.AddressForm();
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
var renderType_AddressForm_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
class View_AddressForm_Host0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_AddressForm_Host0, renderType_AddressForm_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'address-form', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_AddressForm0(this.viewUtils, this, 0, this._el_0);
        this._AddressForm_0_3 = new Wrapper_AddressForm();
        this.compView_0.create(this._AddressForm_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._AddressForm_0_3.context);
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.AddressForm) && (0 === requestNodeIndex))) {
            return this._AddressForm_0_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._AddressForm_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    }
    destroyInternal() {
        this.compView_0.destroy();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
export const AddressFormNgFactory = new import7.ComponentFactory('address-form', View_AddressForm_Host0, import0.AddressForm);
const styles_AddressForm = [];
var renderType_AddressForm = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_AddressForm, {});
export class View_AddressForm0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_AddressForm0, renderType_AddressForm, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
        this._expr_110 = import16.UNINITIALIZED;
        this._expr_111 = import16.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'h1', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, 'Address Form', null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_3 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray4(4, 'class', 'alert alert-info', 'role', 'alert'), null);
        this._text_4 = this.renderer.createText(this._el_3, '\n    Error messages per field and disabled save button until entire form is valid.\n', null);
        this._text_5 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_6 = import3.createRenderElement(this.renderer, parentRenderNode, 'form', import3.EMPTY_INLINE_ARRAY, null);
        this._FormGroupDirective_6_3 = new import8.Wrapper_FormGroupDirective(null, null);
        this._ControlContainer_6_4 = this._FormGroupDirective_6_3.context;
        this._NgControlStatusGroup_6_5 = new import9.Wrapper_NgControlStatusGroup(this._ControlContainer_6_4);
        this._text_7 = this.renderer.createText(this._el_6, '\n    ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_6, 'div', new import3.InlineArray2(2, 'class', 'form-row'), null);
        this._text_9 = this.renderer.createText(this._el_8, '\n        ', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_8, 'div', new import3.InlineArray2(2, 'class', 'formHeading'), null);
        this._text_11 = this.renderer.createText(this._el_10, 'First Name', null);
        this._text_12 = this.renderer.createText(this._el_8, '\n        ', null);
        this._el_13 = import3.createRenderElement(this.renderer, this._el_8, 'input', new import3.InlineArray8(6, 'formControlName', 'firstName', 'id', 'firstName', 'type', 'text'), null);
        this._DefaultValueAccessor_13_3 = new import10.Wrapper_DefaultValueAccessor(this.renderer, new import17.ElementRef(this._el_13));
        this._NG_VALUE_ACCESSOR_13_4 = [this._DefaultValueAccessor_13_3.context];
        this._FormControlName_13_5 = new import11.Wrapper_FormControlName(this._ControlContainer_6_4, null, null, this._NG_VALUE_ACCESSOR_13_4);
        this._NgControl_13_6 = this._FormControlName_13_5.context;
        this._NgControlStatus_13_7 = new import9.Wrapper_NgControlStatus(this._NgControl_13_6);
        this._text_14 = this.renderer.createText(this._el_8, '\n        ', null);
        this._anchor_15 = this.renderer.createTemplateAnchor(this._el_8, null);
        this._vc_15 = new import12.ViewContainer(15, 8, this, this._anchor_15);
        this._TemplateRef_15_5 = new import18.TemplateRef_(this, 15, this._anchor_15);
        this._NgIf_15_6 = new import13.Wrapper_NgIf(this._vc_15.vcRef, this._TemplateRef_15_5);
        this._text_16 = this.renderer.createText(this._el_8, '\n    ', null);
        this._text_17 = this.renderer.createText(this._el_6, '\n\n    ', null);
        this._el_18 = import3.createRenderElement(this.renderer, this._el_6, 'div', new import3.InlineArray2(2, 'class', 'form-row'), null);
        this._text_19 = this.renderer.createText(this._el_18, '\n        ', null);
        this._el_20 = import3.createRenderElement(this.renderer, this._el_18, 'div', new import3.InlineArray2(2, 'class', 'formHeading'), null);
        this._text_21 = this.renderer.createText(this._el_20, 'Street Address', null);
        this._text_22 = this.renderer.createText(this._el_18, '\n        ', null);
        this._el_23 = import3.createRenderElement(this.renderer, this._el_18, 'input', new import3.InlineArray8(6, 'formControlName', 'streetAddress', 'id', 'streetAddress', 'type', 'text'), null);
        this._DefaultValueAccessor_23_3 = new import10.Wrapper_DefaultValueAccessor(this.renderer, new import17.ElementRef(this._el_23));
        this._NG_VALUE_ACCESSOR_23_4 = [this._DefaultValueAccessor_23_3.context];
        this._FormControlName_23_5 = new import11.Wrapper_FormControlName(this._ControlContainer_6_4, null, null, this._NG_VALUE_ACCESSOR_23_4);
        this._NgControl_23_6 = this._FormControlName_23_5.context;
        this._NgControlStatus_23_7 = new import9.Wrapper_NgControlStatus(this._NgControl_23_6);
        this._text_24 = this.renderer.createText(this._el_18, '\n        ', null);
        this._anchor_25 = this.renderer.createTemplateAnchor(this._el_18, null);
        this._vc_25 = new import12.ViewContainer(25, 18, this, this._anchor_25);
        this._TemplateRef_25_5 = new import18.TemplateRef_(this, 25, this._anchor_25);
        this._NgIf_25_6 = new import13.Wrapper_NgIf(this._vc_25.vcRef, this._TemplateRef_25_5);
        this._text_26 = this.renderer.createText(this._el_18, '\n    ', null);
        this._text_27 = this.renderer.createText(this._el_6, '\n\n    ', null);
        this._el_28 = import3.createRenderElement(this.renderer, this._el_6, 'div', new import3.InlineArray2(2, 'class', 'form-row'), null);
        this._text_29 = this.renderer.createText(this._el_28, '\n        ', null);
        this._el_30 = import3.createRenderElement(this.renderer, this._el_28, 'div', new import3.InlineArray2(2, 'class', 'formHeading'), null);
        this._text_31 = this.renderer.createText(this._el_30, 'Zip Code', null);
        this._text_32 = this.renderer.createText(this._el_28, '\n        ', null);
        this._el_33 = import3.createRenderElement(this.renderer, this._el_28, 'input', new import3.InlineArray8(6, 'formControlName', 'zip', 'id', 'zip', 'type', 'text'), null);
        this._DefaultValueAccessor_33_3 = new import10.Wrapper_DefaultValueAccessor(this.renderer, new import17.ElementRef(this._el_33));
        this._NG_VALUE_ACCESSOR_33_4 = [this._DefaultValueAccessor_33_3.context];
        this._FormControlName_33_5 = new import11.Wrapper_FormControlName(this._ControlContainer_6_4, null, null, this._NG_VALUE_ACCESSOR_33_4);
        this._NgControl_33_6 = this._FormControlName_33_5.context;
        this._NgControlStatus_33_7 = new import9.Wrapper_NgControlStatus(this._NgControl_33_6);
        this._text_34 = this.renderer.createText(this._el_28, '\n        ', null);
        this._anchor_35 = this.renderer.createTemplateAnchor(this._el_28, null);
        this._vc_35 = new import12.ViewContainer(35, 28, this, this._anchor_35);
        this._TemplateRef_35_5 = new import18.TemplateRef_(this, 35, this._anchor_35);
        this._NgIf_35_6 = new import13.Wrapper_NgIf(this._vc_35.vcRef, this._TemplateRef_35_5);
        this._text_36 = this.renderer.createText(this._el_28, '\n    ', null);
        this._text_37 = this.renderer.createText(this._el_6, '\n\n    ', null);
        this._el_38 = import3.createRenderElement(this.renderer, this._el_6, 'div', new import3.InlineArray2(2, 'class', 'form-row'), null);
        this._text_39 = this.renderer.createText(this._el_38, '\n        ', null);
        this._el_40 = import3.createRenderElement(this.renderer, this._el_38, 'div', new import3.InlineArray2(2, 'class', 'formHeading'), null);
        this._text_41 = this.renderer.createText(this._el_40, 'Address Type', null);
        this._text_42 = this.renderer.createText(this._el_38, '\n        ', null);
        this._el_43 = import3.createRenderElement(this.renderer, this._el_38, 'select', new import3.InlineArray4(4, 'formControlName', 'type', 'id', 'type'), null);
        this._SelectControlValueAccessor_43_3 = new import14.Wrapper_SelectControlValueAccessor(this.renderer, new import17.ElementRef(this._el_43));
        this._NG_VALUE_ACCESSOR_43_4 = [this._SelectControlValueAccessor_43_3.context];
        this._FormControlName_43_5 = new import11.Wrapper_FormControlName(this._ControlContainer_6_4, null, null, this._NG_VALUE_ACCESSOR_43_4);
        this._NgControl_43_6 = this._FormControlName_43_5.context;
        this._NgControlStatus_43_7 = new import9.Wrapper_NgControlStatus(this._NgControl_43_6);
        this._text_44 = this.renderer.createText(this._el_43, '\n            ', null);
        this._el_45 = import3.createRenderElement(this.renderer, this._el_43, 'option', import3.EMPTY_INLINE_ARRAY, null);
        this._NgSelectOption_45_3 = new import14.Wrapper_NgSelectOption(new import17.ElementRef(this._el_45), this.renderer, this._SelectControlValueAccessor_43_3.context);
        this._NgSelectMultipleOption_45_4 = new import15.Wrapper_NgSelectMultipleOption(new import17.ElementRef(this._el_45), this.renderer, null);
        this._text_46 = this.renderer.createText(this._el_45, 'Home Address', null);
        this._text_47 = this.renderer.createText(this._el_43, '\n            ', null);
        this._el_48 = import3.createRenderElement(this.renderer, this._el_43, 'option', import3.EMPTY_INLINE_ARRAY, null);
        this._NgSelectOption_48_3 = new import14.Wrapper_NgSelectOption(new import17.ElementRef(this._el_48), this.renderer, this._SelectControlValueAccessor_43_3.context);
        this._NgSelectMultipleOption_48_4 = new import15.Wrapper_NgSelectMultipleOption(new import17.ElementRef(this._el_48), this.renderer, null);
        this._text_49 = this.renderer.createText(this._el_48, 'Billing Address', null);
        this._text_50 = this.renderer.createText(this._el_43, '\n        ', null);
        this._text_51 = this.renderer.createText(this._el_38, '\n    ', null);
        this._text_52 = this.renderer.createText(this._el_6, '\n    ', null);
        this._el_53 = import3.createRenderElement(this.renderer, this._el_6, 'div', new import3.InlineArray2(2, 'class', 'form-row'), null);
        this._text_54 = this.renderer.createText(this._el_53, '\n        ', null);
        this._el_55 = import3.createRenderElement(this.renderer, this._el_53, 'button', new import3.InlineArray2(2, 'type', 'submit'), null);
        this._text_56 = this.renderer.createText(this._el_55, 'Save', null);
        this._text_57 = this.renderer.createText(this._el_53, '\n    ', null);
        this._text_58 = this.renderer.createText(this._el_6, '\n\n', null);
        this._text_59 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_60 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'form-row'), null);
        this._text_61 = this.renderer.createText(this._el_60, '\n    ', null);
        this._anchor_62 = this.renderer.createTemplateAnchor(this._el_60, null);
        this._vc_62 = new import12.ViewContainer(62, 60, this, this._anchor_62);
        this._TemplateRef_62_5 = new import18.TemplateRef_(this, 62, this._anchor_62);
        this._NgIf_62_6 = new import13.Wrapper_NgIf(this._vc_62.vcRef, this._TemplateRef_62_5);
        this._text_63 = this.renderer.createText(this._el_60, '\n    ', null);
        this._el_64 = import3.createRenderElement(this.renderer, this._el_60, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_65 = this.renderer.createText(this._el_64, '', null);
        this._text_66 = this.renderer.createText(this._el_60, '\n', null);
        this._text_67 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_68 = import3.createRenderElement(this.renderer, parentRenderNode, 'h4', import3.EMPTY_INLINE_ARRAY, null);
        this._el_69 = import3.createRenderElement(this.renderer, this._el_68, 'a', new import3.InlineArray2(2, 'href', 'http://www.syntaxsuccess.com/viewarticle/forms-and-validation-in-angular-2.0'), null);
        this._text_70 = this.renderer.createText(this._el_69, 'Read more here', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_6, new import3.InlineArray8(6, 'ngSubmit', null, 'submit', null, 'reset', null), this.eventHandler(this.handleEvent_6));
        this._FormGroupDirective_6_3.subscribe(this, this.eventHandler(this.handleEvent_6), true);
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_13, new import3.InlineArray4(4, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_13));
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_23, new import3.InlineArray4(4, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_23));
        var disposable_3 = import3.subscribeToRenderElement(this, this._el_33, new import3.InlineArray4(4, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_33));
        var disposable_4 = import3.subscribeToRenderElement(this, this._el_43, new import3.InlineArray4(4, 'change', null, 'blur', null), this.eventHandler(this.handleEvent_43));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._anchor_15,
            this._text_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._anchor_25,
            this._text_26,
            this._text_27,
            this._el_28,
            this._text_29,
            this._el_30,
            this._text_31,
            this._text_32,
            this._el_33,
            this._text_34,
            this._anchor_35,
            this._text_36,
            this._text_37,
            this._el_38,
            this._text_39,
            this._el_40,
            this._text_41,
            this._text_42,
            this._el_43,
            this._text_44,
            this._el_45,
            this._text_46,
            this._text_47,
            this._el_48,
            this._text_49,
            this._text_50,
            this._text_51,
            this._text_52,
            this._el_53,
            this._text_54,
            this._el_55,
            this._text_56,
            this._text_57,
            this._text_58,
            this._text_59,
            this._el_60,
            this._text_61,
            this._anchor_62,
            this._text_63,
            this._el_64,
            this._text_65,
            this._text_66,
            this._text_67,
            this._el_68,
            this._el_69,
            this._text_70
        ]), [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3,
            disposable_4
        ]);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import19.DefaultValueAccessor) && (13 === requestNodeIndex))) {
            return this._DefaultValueAccessor_13_3.context;
        }
        if (((token === import20.NG_VALUE_ACCESSOR) && (13 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_13_4;
        }
        if (((token === import21.FormControlName) && (13 === requestNodeIndex))) {
            return this._FormControlName_13_5.context;
        }
        if (((token === import22.NgControl) && (13 === requestNodeIndex))) {
            return this._NgControl_13_6;
        }
        if (((token === import23.NgControlStatus) && (13 === requestNodeIndex))) {
            return this._NgControlStatus_13_7.context;
        }
        if (((token === import18.TemplateRef) && (15 === requestNodeIndex))) {
            return this._TemplateRef_15_5;
        }
        if (((token === import24.NgIf) && (15 === requestNodeIndex))) {
            return this._NgIf_15_6.context;
        }
        if (((token === import19.DefaultValueAccessor) && (23 === requestNodeIndex))) {
            return this._DefaultValueAccessor_23_3.context;
        }
        if (((token === import20.NG_VALUE_ACCESSOR) && (23 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_23_4;
        }
        if (((token === import21.FormControlName) && (23 === requestNodeIndex))) {
            return this._FormControlName_23_5.context;
        }
        if (((token === import22.NgControl) && (23 === requestNodeIndex))) {
            return this._NgControl_23_6;
        }
        if (((token === import23.NgControlStatus) && (23 === requestNodeIndex))) {
            return this._NgControlStatus_23_7.context;
        }
        if (((token === import18.TemplateRef) && (25 === requestNodeIndex))) {
            return this._TemplateRef_25_5;
        }
        if (((token === import24.NgIf) && (25 === requestNodeIndex))) {
            return this._NgIf_25_6.context;
        }
        if (((token === import19.DefaultValueAccessor) && (33 === requestNodeIndex))) {
            return this._DefaultValueAccessor_33_3.context;
        }
        if (((token === import20.NG_VALUE_ACCESSOR) && (33 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_33_4;
        }
        if (((token === import21.FormControlName) && (33 === requestNodeIndex))) {
            return this._FormControlName_33_5.context;
        }
        if (((token === import22.NgControl) && (33 === requestNodeIndex))) {
            return this._NgControl_33_6;
        }
        if (((token === import23.NgControlStatus) && (33 === requestNodeIndex))) {
            return this._NgControlStatus_33_7.context;
        }
        if (((token === import18.TemplateRef) && (35 === requestNodeIndex))) {
            return this._TemplateRef_35_5;
        }
        if (((token === import24.NgIf) && (35 === requestNodeIndex))) {
            return this._NgIf_35_6.context;
        }
        if (((token === import25.NgSelectOption) && ((45 <= requestNodeIndex) && (requestNodeIndex <= 46)))) {
            return this._NgSelectOption_45_3.context;
        }
        if (((token === import26.NgSelectMultipleOption) && ((45 <= requestNodeIndex) && (requestNodeIndex <= 46)))) {
            return this._NgSelectMultipleOption_45_4.context;
        }
        if (((token === import25.NgSelectOption) && ((48 <= requestNodeIndex) && (requestNodeIndex <= 49)))) {
            return this._NgSelectOption_48_3.context;
        }
        if (((token === import26.NgSelectMultipleOption) && ((48 <= requestNodeIndex) && (requestNodeIndex <= 49)))) {
            return this._NgSelectMultipleOption_48_4.context;
        }
        if (((token === import25.SelectControlValueAccessor) && ((43 <= requestNodeIndex) && (requestNodeIndex <= 50)))) {
            return this._SelectControlValueAccessor_43_3.context;
        }
        if (((token === import20.NG_VALUE_ACCESSOR) && ((43 <= requestNodeIndex) && (requestNodeIndex <= 50)))) {
            return this._NG_VALUE_ACCESSOR_43_4;
        }
        if (((token === import21.FormControlName) && ((43 <= requestNodeIndex) && (requestNodeIndex <= 50)))) {
            return this._FormControlName_43_5.context;
        }
        if (((token === import22.NgControl) && ((43 <= requestNodeIndex) && (requestNodeIndex <= 50)))) {
            return this._NgControl_43_6;
        }
        if (((token === import23.NgControlStatus) && ((43 <= requestNodeIndex) && (requestNodeIndex <= 50)))) {
            return this._NgControlStatus_43_7.context;
        }
        if (((token === import27.FormGroupDirective) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 58)))) {
            return this._FormGroupDirective_6_3.context;
        }
        if (((token === import28.ControlContainer) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 58)))) {
            return this._ControlContainer_6_4;
        }
        if (((token === import23.NgControlStatusGroup) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 58)))) {
            return this._NgControlStatusGroup_6_5.context;
        }
        if (((token === import18.TemplateRef) && (62 === requestNodeIndex))) {
            return this._TemplateRef_62_5;
        }
        if (((token === import24.NgIf) && (62 === requestNodeIndex))) {
            return this._NgIf_62_6.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_6_0_0 = this.context.form;
        this._FormGroupDirective_6_3.check_form(currVal_6_0_0, throwOnChange, false);
        this._FormGroupDirective_6_3.ngDoCheck(this, this._el_6, throwOnChange);
        this._NgControlStatusGroup_6_5.ngDoCheck(this, this._el_6, throwOnChange);
        this._DefaultValueAccessor_13_3.ngDoCheck(this, this._el_13, throwOnChange);
        const currVal_13_1_0 = 'firstName';
        this._FormControlName_13_5.check_name(currVal_13_1_0, throwOnChange, false);
        this._FormControlName_13_5.ngDoCheck(this, this._el_13, throwOnChange);
        this._NgControlStatus_13_7.ngDoCheck(this, this._el_13, throwOnChange);
        const currVal_15_0_0 = (this.context.form.controls.firstName.touched && !this.context.form.controls.firstName.valid);
        this._NgIf_15_6.check_ngIf(currVal_15_0_0, throwOnChange, false);
        this._NgIf_15_6.ngDoCheck(this, this._anchor_15, throwOnChange);
        this._DefaultValueAccessor_23_3.ngDoCheck(this, this._el_23, throwOnChange);
        const currVal_23_1_0 = 'streetAddress';
        this._FormControlName_23_5.check_name(currVal_23_1_0, throwOnChange, false);
        this._FormControlName_23_5.ngDoCheck(this, this._el_23, throwOnChange);
        this._NgControlStatus_23_7.ngDoCheck(this, this._el_23, throwOnChange);
        const currVal_25_0_0 = (this.context.form.controls.streetAddress.touched && !this.context.form.controls.streetAddress.valid);
        this._NgIf_25_6.check_ngIf(currVal_25_0_0, throwOnChange, false);
        this._NgIf_25_6.ngDoCheck(this, this._anchor_25, throwOnChange);
        this._DefaultValueAccessor_33_3.ngDoCheck(this, this._el_33, throwOnChange);
        const currVal_33_1_0 = 'zip';
        this._FormControlName_33_5.check_name(currVal_33_1_0, throwOnChange, false);
        this._FormControlName_33_5.ngDoCheck(this, this._el_33, throwOnChange);
        this._NgControlStatus_33_7.ngDoCheck(this, this._el_33, throwOnChange);
        const currVal_35_0_0 = (this.context.form.controls.zip.touched && !this.context.form.controls.zip.valid);
        this._NgIf_35_6.check_ngIf(currVal_35_0_0, throwOnChange, false);
        this._NgIf_35_6.ngDoCheck(this, this._anchor_35, throwOnChange);
        this._SelectControlValueAccessor_43_3.ngDoCheck(this, this._el_43, throwOnChange);
        const currVal_43_1_0 = 'type';
        this._FormControlName_43_5.check_name(currVal_43_1_0, throwOnChange, false);
        this._FormControlName_43_5.ngDoCheck(this, this._el_43, throwOnChange);
        this._NgControlStatus_43_7.ngDoCheck(this, this._el_43, throwOnChange);
        const currVal_45_0_0 = 'home';
        this._NgSelectOption_45_3.check_value(currVal_45_0_0, throwOnChange, false);
        this._NgSelectOption_45_3.ngDoCheck(this, this._el_45, throwOnChange);
        const currVal_45_1_0 = 'home';
        this._NgSelectMultipleOption_45_4.check_value(currVal_45_1_0, throwOnChange, false);
        this._NgSelectMultipleOption_45_4.ngDoCheck(this, this._el_45, throwOnChange);
        const currVal_48_0_0 = 'billing';
        this._NgSelectOption_48_3.check_value(currVal_48_0_0, throwOnChange, false);
        this._NgSelectOption_48_3.ngDoCheck(this, this._el_48, throwOnChange);
        const currVal_48_1_0 = 'billing';
        this._NgSelectMultipleOption_48_4.check_value(currVal_48_1_0, throwOnChange, false);
        this._NgSelectMultipleOption_48_4.ngDoCheck(this, this._el_48, throwOnChange);
        const currVal_62_0_0 = this.context.payLoad;
        this._NgIf_62_6.check_ngIf(currVal_62_0_0, throwOnChange, false);
        this._NgIf_62_6.ngDoCheck(this, this._anchor_62, throwOnChange);
        this._vc_15.detectChangesInNestedViews(throwOnChange);
        this._vc_25.detectChangesInNestedViews(throwOnChange);
        this._vc_35.detectChangesInNestedViews(throwOnChange);
        this._vc_62.detectChangesInNestedViews(throwOnChange);
        this._NgControlStatusGroup_6_5.checkHost(this, this, this._el_6, throwOnChange);
        this._NgControlStatus_13_7.checkHost(this, this, this._el_13, throwOnChange);
        this._NgControlStatus_23_7.checkHost(this, this, this._el_23, throwOnChange);
        this._NgControlStatus_33_7.checkHost(this, this, this._el_33, throwOnChange);
        this._NgControlStatus_43_7.checkHost(this, this, this._el_43, throwOnChange);
        const currVal_110 = !this.context.form.valid;
        if (import3.checkBinding(throwOnChange, this._expr_110, currVal_110)) {
            this.renderer.setElementProperty(this._el_55, 'disabled', currVal_110);
            this._expr_110 = currVal_110;
        }
        const currVal_111 = import3.inlineInterpolate(1, '\n        ', this.context.payLoad, '\n    ');
        if (import3.checkBinding(throwOnChange, this._expr_111, currVal_111)) {
            this.renderer.setText(this._text_65, currVal_111);
            this._expr_111 = currVal_111;
        }
    }
    destroyInternal() {
        this._vc_15.destroyNestedViews();
        this._vc_25.destroyNestedViews();
        this._vc_35.destroyNestedViews();
        this._vc_62.destroyNestedViews();
        this._FormControlName_13_5.ngOnDestroy();
        this._FormControlName_23_5.ngOnDestroy();
        this._FormControlName_33_5.ngOnDestroy();
        this._NgSelectOption_45_3.ngOnDestroy();
        this._NgSelectMultipleOption_45_4.ngOnDestroy();
        this._NgSelectOption_48_3.ngOnDestroy();
        this._NgSelectMultipleOption_48_4.ngOnDestroy();
        this._FormControlName_43_5.ngOnDestroy();
        this._FormGroupDirective_6_3.ngOnDestroy();
    }
    createEmbeddedViewInternal(nodeIndex) {
        if ((nodeIndex == 15)) {
            return new View_AddressForm1(this.viewUtils, this, 15, this._anchor_15, this._vc_15);
        }
        if ((nodeIndex == 25)) {
            return new View_AddressForm2(this.viewUtils, this, 25, this._anchor_25, this._vc_25);
        }
        if ((nodeIndex == 35)) {
            return new View_AddressForm3(this.viewUtils, this, 35, this._anchor_35, this._vc_35);
        }
        if ((nodeIndex == 62)) {
            return new View_AddressForm4(this.viewUtils, this, 62, this._anchor_62, this._vc_62);
        }
        return null;
    }
    handleEvent_6(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._FormGroupDirective_6_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngSubmit')) {
            const pd_sub_0 = (this.context.onSubmit() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    }
    handleEvent_13(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_13_3.handleEvent(eventName, $event) && result);
        return result;
    }
    handleEvent_23(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_23_3.handleEvent(eventName, $event) && result);
        return result;
    }
    handleEvent_33(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_33_3.handleEvent(eventName, $event) && result);
        return result;
    }
    handleEvent_43(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._SelectControlValueAccessor_43_3.handleEvent(eventName, $event) && result);
        return result;
    }
}
class View_AddressForm1 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        super(View_AddressForm1, renderType_AddressForm, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'errorMessage'), null);
        this._text_1 = this.renderer.createText(this._el_0, 'First Name is required', null);
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
class View_AddressForm2 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        super(View_AddressForm2, renderType_AddressForm, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'errorMessage'), null);
        this._text_1 = this.renderer.createText(this._el_0, 'Street Address is required', null);
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
class View_AddressForm3 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        super(View_AddressForm3, renderType_AddressForm, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'errorMessage'), null);
        this._text_1 = this.renderer.createText(this._el_0, 'Zip code has to be 5 digits long', null);
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
class View_AddressForm4 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        super(View_AddressForm4, renderType_AddressForm, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
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
