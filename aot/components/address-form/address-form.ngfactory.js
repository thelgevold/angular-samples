import * as import0 from '../../../components/address-form/address-form';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '../../node_modules/@angular/forms/src/directives/reactive_directives/form_group_directive.ngfactory';
import * as import11 from '../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import12 from '../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory';
import * as import13 from '../../node_modules/@angular/forms/src/directives/reactive_directives/form_control_name.ngfactory';
import * as import14 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import15 from '../../node_modules/@angular/forms/src/directives/select_control_value_accessor.ngfactory';
import * as import16 from '../../node_modules/@angular/forms/src/directives/select_multiple_control_value_accessor.ngfactory';
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
        this.changed = false;
        this.context = new import0.AddressForm();
    }
    detectChangesInInputProps(view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    }
    detectChangesInHostProps(view, el, throwOnChange) {
    }
}
var renderType_AddressForm_Host = null;
class _View_AddressForm_Host0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_AddressForm_Host0, renderType_AddressForm_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer, 'address-form', import4.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_AddressForm0(this.viewUtils, this.injector(0), this._appEl_0);
        this._AddressForm_0_4 = new Wrapper_AddressForm();
        this._appEl_0.initComponent(this._AddressForm_0_4.context, [], compView_0);
        compView_0.create(this._AddressForm_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.AddressForm) && (0 === requestNodeIndex))) {
            return this._AddressForm_0_4.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._AddressForm_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._AddressForm_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
}
function viewFactory_AddressForm_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_AddressForm_Host === null)) {
        (renderType_AddressForm_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_AddressForm_Host0(viewUtils, parentInjector, declarationEl);
}
export const AddressFormNgFactory = new import9.ComponentFactory('address-form', viewFactory_AddressForm_Host0, import0.AddressForm);
const styles_AddressForm = [];
var renderType_AddressForm = null;
class _View_AddressForm0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_AddressForm0, renderType_AddressForm, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_110 = import7.UNINITIALIZED;
        this._expr_111 = import7.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = import4.createRenderElement(this.renderer, parentRenderNode, 'h1', import4.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, 'Address Form', null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_3 = import4.createRenderElement(this.renderer, parentRenderNode, 'div', new import4.InlineArray4(4, 'class', 'alert alert-info', 'role', 'alert'), null);
        this._text_4 = this.renderer.createText(this._el_3, '\n    Error messages per field and disabled save button until entire form is valid.\n', null);
        this._text_5 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_6 = import4.createRenderElement(this.renderer, parentRenderNode, 'form', import4.EMPTY_INLINE_ARRAY, null);
        this._FormGroupDirective_6_3 = new import10.Wrapper_FormGroupDirective(null, null);
        this._ControlContainer_6_4 = this._FormGroupDirective_6_3.context;
        this._NgControlStatusGroup_6_5 = new import11.Wrapper_NgControlStatusGroup(this._ControlContainer_6_4);
        this._text_7 = this.renderer.createText(this._el_6, '\n    ', null);
        this._el_8 = import4.createRenderElement(this.renderer, this._el_6, 'div', new import4.InlineArray2(2, 'class', 'form-row'), null);
        this._text_9 = this.renderer.createText(this._el_8, '\n        ', null);
        this._el_10 = import4.createRenderElement(this.renderer, this._el_8, 'div', new import4.InlineArray2(2, 'class', 'formHeading'), null);
        this._text_11 = this.renderer.createText(this._el_10, 'First Name', null);
        this._text_12 = this.renderer.createText(this._el_8, '\n        ', null);
        this._el_13 = import4.createRenderElement(this.renderer, this._el_8, 'input', new import4.InlineArray8(6, 'formControlName', 'firstName', 'id', 'firstName', 'type', 'text'), null);
        this._DefaultValueAccessor_13_3 = new import12.Wrapper_DefaultValueAccessor(this.renderer, new import17.ElementRef(this._el_13));
        this._NG_VALUE_ACCESSOR_13_4 = [this._DefaultValueAccessor_13_3.context];
        this._FormControlName_13_5 = new import13.Wrapper_FormControlName(this._ControlContainer_6_4, null, null, this._NG_VALUE_ACCESSOR_13_4);
        this._NgControl_13_6 = this._FormControlName_13_5.context;
        this._NgControlStatus_13_7 = new import11.Wrapper_NgControlStatus(this._NgControl_13_6);
        this._text_14 = this.renderer.createText(this._el_8, '\n        ', null);
        this._anchor_15 = this.renderer.createTemplateAnchor(this._el_8, null);
        this._appEl_15 = new import3.AppElement(15, 8, this, this._anchor_15);
        this._TemplateRef_15_5 = new import18.TemplateRef_(this._appEl_15, viewFactory_AddressForm1);
        this._NgIf_15_6 = new import14.Wrapper_NgIf(this._appEl_15.vcRef, this._TemplateRef_15_5);
        this._text_16 = this.renderer.createText(this._el_8, '\n    ', null);
        this._text_17 = this.renderer.createText(this._el_6, '\n\n    ', null);
        this._el_18 = import4.createRenderElement(this.renderer, this._el_6, 'div', new import4.InlineArray2(2, 'class', 'form-row'), null);
        this._text_19 = this.renderer.createText(this._el_18, '\n        ', null);
        this._el_20 = import4.createRenderElement(this.renderer, this._el_18, 'div', new import4.InlineArray2(2, 'class', 'formHeading'), null);
        this._text_21 = this.renderer.createText(this._el_20, 'Street Address', null);
        this._text_22 = this.renderer.createText(this._el_18, '\n        ', null);
        this._el_23 = import4.createRenderElement(this.renderer, this._el_18, 'input', new import4.InlineArray8(6, 'formControlName', 'streetAddress', 'id', 'streetAddress', 'type', 'text'), null);
        this._DefaultValueAccessor_23_3 = new import12.Wrapper_DefaultValueAccessor(this.renderer, new import17.ElementRef(this._el_23));
        this._NG_VALUE_ACCESSOR_23_4 = [this._DefaultValueAccessor_23_3.context];
        this._FormControlName_23_5 = new import13.Wrapper_FormControlName(this._ControlContainer_6_4, null, null, this._NG_VALUE_ACCESSOR_23_4);
        this._NgControl_23_6 = this._FormControlName_23_5.context;
        this._NgControlStatus_23_7 = new import11.Wrapper_NgControlStatus(this._NgControl_23_6);
        this._text_24 = this.renderer.createText(this._el_18, '\n        ', null);
        this._anchor_25 = this.renderer.createTemplateAnchor(this._el_18, null);
        this._appEl_25 = new import3.AppElement(25, 18, this, this._anchor_25);
        this._TemplateRef_25_5 = new import18.TemplateRef_(this._appEl_25, viewFactory_AddressForm2);
        this._NgIf_25_6 = new import14.Wrapper_NgIf(this._appEl_25.vcRef, this._TemplateRef_25_5);
        this._text_26 = this.renderer.createText(this._el_18, '\n    ', null);
        this._text_27 = this.renderer.createText(this._el_6, '\n\n    ', null);
        this._el_28 = import4.createRenderElement(this.renderer, this._el_6, 'div', new import4.InlineArray2(2, 'class', 'form-row'), null);
        this._text_29 = this.renderer.createText(this._el_28, '\n        ', null);
        this._el_30 = import4.createRenderElement(this.renderer, this._el_28, 'div', new import4.InlineArray2(2, 'class', 'formHeading'), null);
        this._text_31 = this.renderer.createText(this._el_30, 'Zip Code', null);
        this._text_32 = this.renderer.createText(this._el_28, '\n        ', null);
        this._el_33 = import4.createRenderElement(this.renderer, this._el_28, 'input', new import4.InlineArray8(6, 'formControlName', 'zip', 'id', 'zip', 'type', 'text'), null);
        this._DefaultValueAccessor_33_3 = new import12.Wrapper_DefaultValueAccessor(this.renderer, new import17.ElementRef(this._el_33));
        this._NG_VALUE_ACCESSOR_33_4 = [this._DefaultValueAccessor_33_3.context];
        this._FormControlName_33_5 = new import13.Wrapper_FormControlName(this._ControlContainer_6_4, null, null, this._NG_VALUE_ACCESSOR_33_4);
        this._NgControl_33_6 = this._FormControlName_33_5.context;
        this._NgControlStatus_33_7 = new import11.Wrapper_NgControlStatus(this._NgControl_33_6);
        this._text_34 = this.renderer.createText(this._el_28, '\n        ', null);
        this._anchor_35 = this.renderer.createTemplateAnchor(this._el_28, null);
        this._appEl_35 = new import3.AppElement(35, 28, this, this._anchor_35);
        this._TemplateRef_35_5 = new import18.TemplateRef_(this._appEl_35, viewFactory_AddressForm3);
        this._NgIf_35_6 = new import14.Wrapper_NgIf(this._appEl_35.vcRef, this._TemplateRef_35_5);
        this._text_36 = this.renderer.createText(this._el_28, '\n    ', null);
        this._text_37 = this.renderer.createText(this._el_6, '\n\n    ', null);
        this._el_38 = import4.createRenderElement(this.renderer, this._el_6, 'div', new import4.InlineArray2(2, 'class', 'form-row'), null);
        this._text_39 = this.renderer.createText(this._el_38, '\n        ', null);
        this._el_40 = import4.createRenderElement(this.renderer, this._el_38, 'div', new import4.InlineArray2(2, 'class', 'formHeading'), null);
        this._text_41 = this.renderer.createText(this._el_40, 'Address Type', null);
        this._text_42 = this.renderer.createText(this._el_38, '\n        ', null);
        this._el_43 = import4.createRenderElement(this.renderer, this._el_38, 'select', new import4.InlineArray4(4, 'formControlName', 'type', 'id', 'type'), null);
        this._SelectControlValueAccessor_43_3 = new import15.Wrapper_SelectControlValueAccessor(this.renderer, new import17.ElementRef(this._el_43));
        this._NG_VALUE_ACCESSOR_43_4 = [this._SelectControlValueAccessor_43_3.context];
        this._FormControlName_43_5 = new import13.Wrapper_FormControlName(this._ControlContainer_6_4, null, null, this._NG_VALUE_ACCESSOR_43_4);
        this._NgControl_43_6 = this._FormControlName_43_5.context;
        this._NgControlStatus_43_7 = new import11.Wrapper_NgControlStatus(this._NgControl_43_6);
        this._text_44 = this.renderer.createText(this._el_43, '\n            ', null);
        this._el_45 = import4.createRenderElement(this.renderer, this._el_43, 'option', import4.EMPTY_INLINE_ARRAY, null);
        this._NgSelectOption_45_3 = new import15.Wrapper_NgSelectOption(new import17.ElementRef(this._el_45), this.renderer, this._SelectControlValueAccessor_43_3.context);
        this._NgSelectMultipleOption_45_4 = new import16.Wrapper_NgSelectMultipleOption(new import17.ElementRef(this._el_45), this.renderer, null);
        this._text_46 = this.renderer.createText(this._el_45, 'Home Address', null);
        this._text_47 = this.renderer.createText(this._el_43, '\n            ', null);
        this._el_48 = import4.createRenderElement(this.renderer, this._el_43, 'option', import4.EMPTY_INLINE_ARRAY, null);
        this._NgSelectOption_48_3 = new import15.Wrapper_NgSelectOption(new import17.ElementRef(this._el_48), this.renderer, this._SelectControlValueAccessor_43_3.context);
        this._NgSelectMultipleOption_48_4 = new import16.Wrapper_NgSelectMultipleOption(new import17.ElementRef(this._el_48), this.renderer, null);
        this._text_49 = this.renderer.createText(this._el_48, 'Billing Address', null);
        this._text_50 = this.renderer.createText(this._el_43, '\n        ', null);
        this._text_51 = this.renderer.createText(this._el_38, '\n    ', null);
        this._text_52 = this.renderer.createText(this._el_6, '\n    ', null);
        this._el_53 = import4.createRenderElement(this.renderer, this._el_6, 'div', new import4.InlineArray2(2, 'class', 'form-row'), null);
        this._text_54 = this.renderer.createText(this._el_53, '\n        ', null);
        this._el_55 = import4.createRenderElement(this.renderer, this._el_53, 'button', new import4.InlineArray2(2, 'type', 'submit'), null);
        this._text_56 = this.renderer.createText(this._el_55, 'Save', null);
        this._text_57 = this.renderer.createText(this._el_53, '\n    ', null);
        this._text_58 = this.renderer.createText(this._el_6, '\n\n', null);
        this._text_59 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_60 = import4.createRenderElement(this.renderer, parentRenderNode, 'div', new import4.InlineArray2(2, 'class', 'form-row'), null);
        this._text_61 = this.renderer.createText(this._el_60, '\n    ', null);
        this._anchor_62 = this.renderer.createTemplateAnchor(this._el_60, null);
        this._appEl_62 = new import3.AppElement(62, 60, this, this._anchor_62);
        this._TemplateRef_62_5 = new import18.TemplateRef_(this._appEl_62, viewFactory_AddressForm4);
        this._NgIf_62_6 = new import14.Wrapper_NgIf(this._appEl_62.vcRef, this._TemplateRef_62_5);
        this._text_63 = this.renderer.createText(this._el_60, '\n    ', null);
        this._el_64 = import4.createRenderElement(this.renderer, this._el_60, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._text_65 = this.renderer.createText(this._el_64, '', null);
        this._text_66 = this.renderer.createText(this._el_60, '\n', null);
        this._text_67 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_68 = import4.createRenderElement(this.renderer, parentRenderNode, 'h4', import4.EMPTY_INLINE_ARRAY, null);
        this._el_69 = import4.createRenderElement(this.renderer, this._el_68, 'a', new import4.InlineArray2(2, 'href', 'http://www.syntaxsuccess.com/viewarticle/forms-and-validation-in-angular-2.0'), null);
        this._text_70 = this.renderer.createText(this._el_69, 'Read more here', null);
        var disposable_0 = this.renderer.listen(this._el_6, 'ngSubmit', this.eventHandler(this._handle_ngSubmit_6_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_6, 'submit', this.eventHandler(this._handle_submit_6_1.bind(this)));
        var disposable_2 = this.renderer.listen(this._el_6, 'reset', this.eventHandler(this._handle_reset_6_2.bind(this)));
        const subscription_0 = this._FormGroupDirective_6_3.context.ngSubmit.subscribe(this.eventHandler(this._handle_ngSubmit_6_0.bind(this)));
        var disposable_3 = this.renderer.listen(this._el_13, 'input', this.eventHandler(this._handle_input_13_0.bind(this)));
        var disposable_4 = this.renderer.listen(this._el_13, 'blur', this.eventHandler(this._handle_blur_13_1.bind(this)));
        var disposable_5 = this.renderer.listen(this._el_23, 'input', this.eventHandler(this._handle_input_23_0.bind(this)));
        var disposable_6 = this.renderer.listen(this._el_23, 'blur', this.eventHandler(this._handle_blur_23_1.bind(this)));
        var disposable_7 = this.renderer.listen(this._el_33, 'input', this.eventHandler(this._handle_input_33_0.bind(this)));
        var disposable_8 = this.renderer.listen(this._el_33, 'blur', this.eventHandler(this._handle_blur_33_1.bind(this)));
        var disposable_9 = this.renderer.listen(this._el_43, 'change', this.eventHandler(this._handle_change_43_0.bind(this)));
        var disposable_10 = this.renderer.listen(this._el_43, 'blur', this.eventHandler(this._handle_blur_43_1.bind(this)));
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
            disposable_10
        ], [subscription_0]);
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
        this._FormGroupDirective_6_3.detectChangesInInputProps(this, this._el_6, throwOnChange);
        this._NgControlStatusGroup_6_5.detectChangesInInputProps(this, this._el_6, throwOnChange);
        this._DefaultValueAccessor_13_3.detectChangesInInputProps(this, this._el_13, throwOnChange);
        const currVal_13_1_0 = 'firstName';
        this._FormControlName_13_5.check_name(currVal_13_1_0, throwOnChange, false);
        this._FormControlName_13_5.detectChangesInInputProps(this, this._el_13, throwOnChange);
        this._NgControlStatus_13_7.detectChangesInInputProps(this, this._el_13, throwOnChange);
        const currVal_15_0_0 = (this.context.form.controls.firstName.touched && !this.context.form.controls.firstName.valid);
        this._NgIf_15_6.check_ngIf(currVal_15_0_0, throwOnChange, false);
        this._NgIf_15_6.detectChangesInInputProps(this, this._anchor_15, throwOnChange);
        this._DefaultValueAccessor_23_3.detectChangesInInputProps(this, this._el_23, throwOnChange);
        const currVal_23_1_0 = 'streetAddress';
        this._FormControlName_23_5.check_name(currVal_23_1_0, throwOnChange, false);
        this._FormControlName_23_5.detectChangesInInputProps(this, this._el_23, throwOnChange);
        this._NgControlStatus_23_7.detectChangesInInputProps(this, this._el_23, throwOnChange);
        const currVal_25_0_0 = (this.context.form.controls.streetAddress.touched && !this.context.form.controls.streetAddress.valid);
        this._NgIf_25_6.check_ngIf(currVal_25_0_0, throwOnChange, false);
        this._NgIf_25_6.detectChangesInInputProps(this, this._anchor_25, throwOnChange);
        this._DefaultValueAccessor_33_3.detectChangesInInputProps(this, this._el_33, throwOnChange);
        const currVal_33_1_0 = 'zip';
        this._FormControlName_33_5.check_name(currVal_33_1_0, throwOnChange, false);
        this._FormControlName_33_5.detectChangesInInputProps(this, this._el_33, throwOnChange);
        this._NgControlStatus_33_7.detectChangesInInputProps(this, this._el_33, throwOnChange);
        const currVal_35_0_0 = (this.context.form.controls.zip.touched && !this.context.form.controls.zip.valid);
        this._NgIf_35_6.check_ngIf(currVal_35_0_0, throwOnChange, false);
        this._NgIf_35_6.detectChangesInInputProps(this, this._anchor_35, throwOnChange);
        this._SelectControlValueAccessor_43_3.detectChangesInInputProps(this, this._el_43, throwOnChange);
        const currVal_43_1_0 = 'type';
        this._FormControlName_43_5.check_name(currVal_43_1_0, throwOnChange, false);
        this._FormControlName_43_5.detectChangesInInputProps(this, this._el_43, throwOnChange);
        this._NgControlStatus_43_7.detectChangesInInputProps(this, this._el_43, throwOnChange);
        const currVal_45_0_0 = 'home';
        this._NgSelectOption_45_3.check_value(currVal_45_0_0, throwOnChange, false);
        this._NgSelectOption_45_3.detectChangesInInputProps(this, this._el_45, throwOnChange);
        const currVal_45_1_0 = 'home';
        this._NgSelectMultipleOption_45_4.check_value(currVal_45_1_0, throwOnChange, false);
        this._NgSelectMultipleOption_45_4.detectChangesInInputProps(this, this._el_45, throwOnChange);
        const currVal_48_0_0 = 'billing';
        this._NgSelectOption_48_3.check_value(currVal_48_0_0, throwOnChange, false);
        this._NgSelectOption_48_3.detectChangesInInputProps(this, this._el_48, throwOnChange);
        const currVal_48_1_0 = 'billing';
        this._NgSelectMultipleOption_48_4.check_value(currVal_48_1_0, throwOnChange, false);
        this._NgSelectMultipleOption_48_4.detectChangesInInputProps(this, this._el_48, throwOnChange);
        const currVal_62_0_0 = this.context.payLoad;
        this._NgIf_62_6.check_ngIf(currVal_62_0_0, throwOnChange, false);
        this._NgIf_62_6.detectChangesInInputProps(this, this._anchor_62, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._FormGroupDirective_6_3.detectChangesInHostProps(this, this._el_6, throwOnChange);
        this._NgControlStatusGroup_6_5.detectChangesInHostProps(this, this._el_6, throwOnChange);
        this._DefaultValueAccessor_13_3.detectChangesInHostProps(this, this._el_13, throwOnChange);
        this._FormControlName_13_5.detectChangesInHostProps(this, this._el_13, throwOnChange);
        this._NgControlStatus_13_7.detectChangesInHostProps(this, this._el_13, throwOnChange);
        this._DefaultValueAccessor_23_3.detectChangesInHostProps(this, this._el_23, throwOnChange);
        this._FormControlName_23_5.detectChangesInHostProps(this, this._el_23, throwOnChange);
        this._NgControlStatus_23_7.detectChangesInHostProps(this, this._el_23, throwOnChange);
        this._DefaultValueAccessor_33_3.detectChangesInHostProps(this, this._el_33, throwOnChange);
        this._FormControlName_33_5.detectChangesInHostProps(this, this._el_33, throwOnChange);
        this._NgControlStatus_33_7.detectChangesInHostProps(this, this._el_33, throwOnChange);
        this._SelectControlValueAccessor_43_3.detectChangesInHostProps(this, this._el_43, throwOnChange);
        this._FormControlName_43_5.detectChangesInHostProps(this, this._el_43, throwOnChange);
        this._NgControlStatus_43_7.detectChangesInHostProps(this, this._el_43, throwOnChange);
        this._NgSelectOption_45_3.detectChangesInHostProps(this, this._el_45, throwOnChange);
        this._NgSelectMultipleOption_45_4.detectChangesInHostProps(this, this._el_45, throwOnChange);
        this._NgSelectOption_48_3.detectChangesInHostProps(this, this._el_48, throwOnChange);
        this._NgSelectMultipleOption_48_4.detectChangesInHostProps(this, this._el_48, throwOnChange);
        const currVal_110 = !this.context.form.valid;
        if (import4.checkBinding(throwOnChange, this._expr_110, currVal_110)) {
            this.renderer.setElementProperty(this._el_55, 'disabled', currVal_110);
            this._expr_110 = currVal_110;
        }
        const currVal_111 = import4.interpolate(1, '\n        ', this.context.payLoad, '\n    ');
        if (import4.checkBinding(throwOnChange, this._expr_111, currVal_111)) {
            this.renderer.setText(this._text_65, currVal_111);
            this._expr_111 = currVal_111;
        }
        this.detectViewChildrenChanges(throwOnChange);
    }
    destroyInternal() {
        this._FormControlName_13_5.context.ngOnDestroy();
        this._FormControlName_23_5.context.ngOnDestroy();
        this._FormControlName_33_5.context.ngOnDestroy();
        this._NgSelectOption_45_3.context.ngOnDestroy();
        this._NgSelectMultipleOption_45_4.context.ngOnDestroy();
        this._NgSelectOption_48_3.context.ngOnDestroy();
        this._NgSelectMultipleOption_48_4.context.ngOnDestroy();
        this._FormControlName_43_5.context.ngOnDestroy();
    }
    _handle_ngSubmit_6_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_6_0 = (this.context.onSubmit() !== false);
        return (true && pd_6_0);
    }
    _handle_submit_6_1($event) {
        this.markPathToRootAsCheckOnce();
        const pd_6_0 = (this._FormGroupDirective_6_3.context.onSubmit($event) !== false);
        return (true && pd_6_0);
    }
    _handle_reset_6_2($event) {
        this.markPathToRootAsCheckOnce();
        const pd_6_0 = (this._FormGroupDirective_6_3.context.onReset() !== false);
        return (true && pd_6_0);
    }
    _handle_input_13_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_13_0 = (this._DefaultValueAccessor_13_3.context.onChange($event.target.value) !== false);
        return (true && pd_13_0);
    }
    _handle_blur_13_1($event) {
        this.markPathToRootAsCheckOnce();
        const pd_13_0 = (this._DefaultValueAccessor_13_3.context.onTouched() !== false);
        return (true && pd_13_0);
    }
    _handle_input_23_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_23_0 = (this._DefaultValueAccessor_23_3.context.onChange($event.target.value) !== false);
        return (true && pd_23_0);
    }
    _handle_blur_23_1($event) {
        this.markPathToRootAsCheckOnce();
        const pd_23_0 = (this._DefaultValueAccessor_23_3.context.onTouched() !== false);
        return (true && pd_23_0);
    }
    _handle_input_33_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_33_0 = (this._DefaultValueAccessor_33_3.context.onChange($event.target.value) !== false);
        return (true && pd_33_0);
    }
    _handle_blur_33_1($event) {
        this.markPathToRootAsCheckOnce();
        const pd_33_0 = (this._DefaultValueAccessor_33_3.context.onTouched() !== false);
        return (true && pd_33_0);
    }
    _handle_change_43_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_43_0 = (this._SelectControlValueAccessor_43_3.context.onChange($event.target.value) !== false);
        return (true && pd_43_0);
    }
    _handle_blur_43_1($event) {
        this.markPathToRootAsCheckOnce();
        const pd_43_0 = (this._SelectControlValueAccessor_43_3.context.onTouched() !== false);
        return (true && pd_43_0);
    }
}
export function viewFactory_AddressForm0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_AddressForm === null)) {
        (renderType_AddressForm = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, styles_AddressForm, {}));
    }
    return new _View_AddressForm0(viewUtils, parentInjector, declarationEl);
}
class _View_AddressForm1 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_AddressForm1, renderType_AddressForm, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'div', new import4.InlineArray2(2, 'class', 'errorMessage'), null);
        this._text_1 = this.renderer.createText(this._el_0, 'First Name is required', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    }
}
function viewFactory_AddressForm1(viewUtils, parentInjector, declarationEl) {
    return new _View_AddressForm1(viewUtils, parentInjector, declarationEl);
}
class _View_AddressForm2 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_AddressForm2, renderType_AddressForm, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'div', new import4.InlineArray2(2, 'class', 'errorMessage'), null);
        this._text_1 = this.renderer.createText(this._el_0, 'Street Address is required', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    }
}
function viewFactory_AddressForm2(viewUtils, parentInjector, declarationEl) {
    return new _View_AddressForm2(viewUtils, parentInjector, declarationEl);
}
class _View_AddressForm3 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_AddressForm3, renderType_AddressForm, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'div', new import4.InlineArray2(2, 'class', 'errorMessage'), null);
        this._text_1 = this.renderer.createText(this._el_0, 'Zip code has to be 5 digits long', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    }
}
function viewFactory_AddressForm3(viewUtils, parentInjector, declarationEl) {
    return new _View_AddressForm3(viewUtils, parentInjector, declarationEl);
}
class _View_AddressForm4 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_AddressForm4, renderType_AddressForm, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._el_1 = import4.createRenderElement(this.renderer, this._el_0, 'strong', import4.EMPTY_INLINE_ARRAY, null);
        this._text_2 = this.renderer.createText(this._el_1, 'The form contains the following values', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._el_1,
            this._text_2
        ], [], []);
        return null;
    }
}
function viewFactory_AddressForm4(viewUtils, parentInjector, declarationEl) {
    return new _View_AddressForm4(viewUtils, parentInjector, declarationEl);
}
