import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../components/address-form/address-form';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '@angular/forms/src/directives/reactive_directives/form_group_directive';
import * as import11 from '@angular/forms/src/directives/ng_control_status';
import * as import12 from '@angular/forms/src/directives/default_value_accessor';
import * as import13 from '@angular/forms/src/directives/reactive_directives/form_control_name';
import * as import14 from '@angular/common/src/directives/ng_if';
import * as import15 from '@angular/forms/src/directives/select_control_value_accessor';
import * as import16 from '@angular/forms/src/directives/select_multiple_control_value_accessor';
import * as import17 from '@angular/core/src/linker/element_ref';
import * as import18 from '@angular/core/src/linker/template_ref';
import * as import19 from '@angular/forms/src/directives/control_value_accessor';
import * as import20 from '@angular/forms/src/directives/ng_control';
import * as import21 from '@angular/forms/src/directives/control_container';
var renderType_AddressForm_Host = null;
class _View_AddressForm_Host0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_AddressForm_Host0, renderType_AddressForm_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('address-form', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_AddressForm0(this.viewUtils, this.injector(0), this._appEl_0);
        this._AddressForm_0_4 = new import3.AddressForm();
        this._appEl_0.initComponent(this._AddressForm_0_4, [], compView_0);
        compView_0.create(this._AddressForm_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import3.AddressForm) && (0 === requestNodeIndex))) {
            return this._AddressForm_0_4;
        }
        return notFoundResult;
    }
}
function viewFactory_AddressForm_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_AddressForm_Host === null)) {
        (renderType_AddressForm_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_AddressForm_Host0(viewUtils, parentInjector, declarationEl);
}
export const AddressFormNgFactory = new import9.ComponentFactory('address-form', viewFactory_AddressForm_Host0, import3.AddressForm);
const styles_AddressForm = [];
var renderType_AddressForm = null;
class _View_AddressForm0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_AddressForm0, renderType_AddressForm, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'h1', null);
        this._text_1 = this.renderer.createText(this._el_0, 'Address Form', null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_3 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_3, 'class', 'alert alert-info');
        this.renderer.setElementAttribute(this._el_3, 'role', 'alert');
        this._text_4 = this.renderer.createText(this._el_3, '\n    Error messages per field and disabled save button until entire form is valid.\n', null);
        this._text_5 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_6 = this.renderer.createElement(parentRenderNode, 'form', null);
        this._FormGroupDirective_6_3 = new import10.FormGroupDirective(null, null);
        this._ControlContainer_6_4 = this._FormGroupDirective_6_3;
        this._NgControlStatusGroup_6_5 = new import11.NgControlStatusGroup(this._ControlContainer_6_4);
        this._text_7 = this.renderer.createText(this._el_6, '\n    ', null);
        this._el_8 = this.renderer.createElement(this._el_6, 'div', null);
        this.renderer.setElementAttribute(this._el_8, 'class', 'form-row');
        this._text_9 = this.renderer.createText(this._el_8, '\n        ', null);
        this._el_10 = this.renderer.createElement(this._el_8, 'div', null);
        this.renderer.setElementAttribute(this._el_10, 'class', 'formHeading');
        this._text_11 = this.renderer.createText(this._el_10, 'First Name', null);
        this._text_12 = this.renderer.createText(this._el_8, '\n        ', null);
        this._el_13 = this.renderer.createElement(this._el_8, 'input', null);
        this.renderer.setElementAttribute(this._el_13, 'formControlName', 'firstName');
        this.renderer.setElementAttribute(this._el_13, 'id', 'firstName');
        this.renderer.setElementAttribute(this._el_13, 'type', 'text');
        this._DefaultValueAccessor_13_3 = new import12.DefaultValueAccessor(this.renderer, new import17.ElementRef(this._el_13));
        this._NG_VALUE_ACCESSOR_13_4 = [this._DefaultValueAccessor_13_3];
        this._FormControlName_13_5 = new import13.FormControlName(this._ControlContainer_6_4, null, null, this._NG_VALUE_ACCESSOR_13_4);
        this._NgControl_13_6 = this._FormControlName_13_5;
        this._NgControlStatus_13_7 = new import11.NgControlStatus(this._NgControl_13_6);
        this._text_14 = this.renderer.createText(this._el_8, '\n        ', null);
        this._anchor_15 = this.renderer.createTemplateAnchor(this._el_8, null);
        this._appEl_15 = new import2.AppElement(15, 8, this, this._anchor_15);
        this._TemplateRef_15_5 = new import18.TemplateRef_(this._appEl_15, viewFactory_AddressForm1);
        this._NgIf_15_6 = new import14.NgIf(this._appEl_15.vcRef, this._TemplateRef_15_5);
        this._text_16 = this.renderer.createText(this._el_8, '\n    ', null);
        this._text_17 = this.renderer.createText(this._el_6, '\n\n    ', null);
        this._el_18 = this.renderer.createElement(this._el_6, 'div', null);
        this.renderer.setElementAttribute(this._el_18, 'class', 'form-row');
        this._text_19 = this.renderer.createText(this._el_18, '\n        ', null);
        this._el_20 = this.renderer.createElement(this._el_18, 'div', null);
        this.renderer.setElementAttribute(this._el_20, 'class', 'formHeading');
        this._text_21 = this.renderer.createText(this._el_20, 'Street Address', null);
        this._text_22 = this.renderer.createText(this._el_18, '\n        ', null);
        this._el_23 = this.renderer.createElement(this._el_18, 'input', null);
        this.renderer.setElementAttribute(this._el_23, 'formControlName', 'streetAddress');
        this.renderer.setElementAttribute(this._el_23, 'id', 'streetAddress');
        this.renderer.setElementAttribute(this._el_23, 'type', 'text');
        this._DefaultValueAccessor_23_3 = new import12.DefaultValueAccessor(this.renderer, new import17.ElementRef(this._el_23));
        this._NG_VALUE_ACCESSOR_23_4 = [this._DefaultValueAccessor_23_3];
        this._FormControlName_23_5 = new import13.FormControlName(this._ControlContainer_6_4, null, null, this._NG_VALUE_ACCESSOR_23_4);
        this._NgControl_23_6 = this._FormControlName_23_5;
        this._NgControlStatus_23_7 = new import11.NgControlStatus(this._NgControl_23_6);
        this._text_24 = this.renderer.createText(this._el_18, '\n        ', null);
        this._anchor_25 = this.renderer.createTemplateAnchor(this._el_18, null);
        this._appEl_25 = new import2.AppElement(25, 18, this, this._anchor_25);
        this._TemplateRef_25_5 = new import18.TemplateRef_(this._appEl_25, viewFactory_AddressForm2);
        this._NgIf_25_6 = new import14.NgIf(this._appEl_25.vcRef, this._TemplateRef_25_5);
        this._text_26 = this.renderer.createText(this._el_18, '\n    ', null);
        this._text_27 = this.renderer.createText(this._el_6, '\n\n    ', null);
        this._el_28 = this.renderer.createElement(this._el_6, 'div', null);
        this.renderer.setElementAttribute(this._el_28, 'class', 'form-row');
        this._text_29 = this.renderer.createText(this._el_28, '\n        ', null);
        this._el_30 = this.renderer.createElement(this._el_28, 'div', null);
        this.renderer.setElementAttribute(this._el_30, 'class', 'formHeading');
        this._text_31 = this.renderer.createText(this._el_30, 'Zip Code', null);
        this._text_32 = this.renderer.createText(this._el_28, '\n        ', null);
        this._el_33 = this.renderer.createElement(this._el_28, 'input', null);
        this.renderer.setElementAttribute(this._el_33, 'formControlName', 'zip');
        this.renderer.setElementAttribute(this._el_33, 'id', 'zip');
        this.renderer.setElementAttribute(this._el_33, 'type', 'text');
        this._DefaultValueAccessor_33_3 = new import12.DefaultValueAccessor(this.renderer, new import17.ElementRef(this._el_33));
        this._NG_VALUE_ACCESSOR_33_4 = [this._DefaultValueAccessor_33_3];
        this._FormControlName_33_5 = new import13.FormControlName(this._ControlContainer_6_4, null, null, this._NG_VALUE_ACCESSOR_33_4);
        this._NgControl_33_6 = this._FormControlName_33_5;
        this._NgControlStatus_33_7 = new import11.NgControlStatus(this._NgControl_33_6);
        this._text_34 = this.renderer.createText(this._el_28, '\n        ', null);
        this._anchor_35 = this.renderer.createTemplateAnchor(this._el_28, null);
        this._appEl_35 = new import2.AppElement(35, 28, this, this._anchor_35);
        this._TemplateRef_35_5 = new import18.TemplateRef_(this._appEl_35, viewFactory_AddressForm3);
        this._NgIf_35_6 = new import14.NgIf(this._appEl_35.vcRef, this._TemplateRef_35_5);
        this._text_36 = this.renderer.createText(this._el_28, '\n    ', null);
        this._text_37 = this.renderer.createText(this._el_6, '\n\n    ', null);
        this._el_38 = this.renderer.createElement(this._el_6, 'div', null);
        this.renderer.setElementAttribute(this._el_38, 'class', 'form-row');
        this._text_39 = this.renderer.createText(this._el_38, '\n        ', null);
        this._el_40 = this.renderer.createElement(this._el_38, 'div', null);
        this.renderer.setElementAttribute(this._el_40, 'class', 'formHeading');
        this._text_41 = this.renderer.createText(this._el_40, 'Address Type', null);
        this._text_42 = this.renderer.createText(this._el_38, '\n        ', null);
        this._el_43 = this.renderer.createElement(this._el_38, 'select', null);
        this.renderer.setElementAttribute(this._el_43, 'formControlName', 'type');
        this.renderer.setElementAttribute(this._el_43, 'id', 'type');
        this._SelectControlValueAccessor_43_3 = new import15.SelectControlValueAccessor(this.renderer, new import17.ElementRef(this._el_43));
        this._NG_VALUE_ACCESSOR_43_4 = [this._SelectControlValueAccessor_43_3];
        this._FormControlName_43_5 = new import13.FormControlName(this._ControlContainer_6_4, null, null, this._NG_VALUE_ACCESSOR_43_4);
        this._NgControl_43_6 = this._FormControlName_43_5;
        this._NgControlStatus_43_7 = new import11.NgControlStatus(this._NgControl_43_6);
        this._text_44 = this.renderer.createText(this._el_43, '\n            ', null);
        this._el_45 = this.renderer.createElement(this._el_43, 'option', null);
        this._NgSelectOption_45_3 = new import15.NgSelectOption(new import17.ElementRef(this._el_45), this.renderer, this._SelectControlValueAccessor_43_3);
        this._NgSelectMultipleOption_45_4 = new import16.NgSelectMultipleOption(new import17.ElementRef(this._el_45), this.renderer, null);
        this._text_46 = this.renderer.createText(this._el_45, 'Home Address', null);
        this._text_47 = this.renderer.createText(this._el_43, '\n            ', null);
        this._el_48 = this.renderer.createElement(this._el_43, 'option', null);
        this._NgSelectOption_48_3 = new import15.NgSelectOption(new import17.ElementRef(this._el_48), this.renderer, this._SelectControlValueAccessor_43_3);
        this._NgSelectMultipleOption_48_4 = new import16.NgSelectMultipleOption(new import17.ElementRef(this._el_48), this.renderer, null);
        this._text_49 = this.renderer.createText(this._el_48, 'Billing Address', null);
        this._text_50 = this.renderer.createText(this._el_43, '\n        ', null);
        this._text_51 = this.renderer.createText(this._el_38, '\n    ', null);
        this._text_52 = this.renderer.createText(this._el_6, '\n    ', null);
        this._el_53 = this.renderer.createElement(this._el_6, 'div', null);
        this.renderer.setElementAttribute(this._el_53, 'class', 'form-row');
        this._text_54 = this.renderer.createText(this._el_53, '\n        ', null);
        this._el_55 = this.renderer.createElement(this._el_53, 'button', null);
        this.renderer.setElementAttribute(this._el_55, 'type', 'submit');
        this._text_56 = this.renderer.createText(this._el_55, 'Save', null);
        this._text_57 = this.renderer.createText(this._el_53, '\n    ', null);
        this._text_58 = this.renderer.createText(this._el_6, '\n\n', null);
        this._text_59 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_60 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_60, 'class', 'form-row');
        this._text_61 = this.renderer.createText(this._el_60, '\n    ', null);
        this._anchor_62 = this.renderer.createTemplateAnchor(this._el_60, null);
        this._appEl_62 = new import2.AppElement(62, 60, this, this._anchor_62);
        this._TemplateRef_62_5 = new import18.TemplateRef_(this._appEl_62, viewFactory_AddressForm4);
        this._NgIf_62_6 = new import14.NgIf(this._appEl_62.vcRef, this._TemplateRef_62_5);
        this._text_63 = this.renderer.createText(this._el_60, '\n    ', null);
        this._el_64 = this.renderer.createElement(this._el_60, 'div', null);
        this._text_65 = this.renderer.createText(this._el_64, '', null);
        this._text_66 = this.renderer.createText(this._el_60, '\n', null);
        this._text_67 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_68 = this.renderer.createElement(parentRenderNode, 'h4', null);
        this._el_69 = this.renderer.createElement(this._el_68, 'a', null);
        this.renderer.setElementAttribute(this._el_69, 'href', 'http://www.syntaxsuccess.com/viewarticle/forms-and-validation-in-angular-2.0');
        this._text_70 = this.renderer.createText(this._el_69, 'Read more here', null);
        var disposable_0 = this.renderer.listen(this._el_6, 'ngSubmit', this.eventHandler(this._handle_ngSubmit_6_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_6, 'submit', this.eventHandler(this._handle_submit_6_1.bind(this)));
        var disposable_2 = this.renderer.listen(this._el_6, 'reset', this.eventHandler(this._handle_reset_6_2.bind(this)));
        this._expr_3 = import7.UNINITIALIZED;
        const subscription_0 = this._FormGroupDirective_6_3.ngSubmit.subscribe(this.eventHandler(this._handle_ngSubmit_6_0.bind(this)));
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        this._expr_8 = import7.UNINITIALIZED;
        this._expr_9 = import7.UNINITIALIZED;
        var disposable_3 = this.renderer.listen(this._el_13, 'input', this.eventHandler(this._handle_input_13_0.bind(this)));
        var disposable_4 = this.renderer.listen(this._el_13, 'blur', this.eventHandler(this._handle_blur_13_1.bind(this)));
        this._expr_12 = import7.UNINITIALIZED;
        this._expr_13 = import7.UNINITIALIZED;
        this._expr_14 = import7.UNINITIALIZED;
        this._expr_15 = import7.UNINITIALIZED;
        this._expr_16 = import7.UNINITIALIZED;
        this._expr_17 = import7.UNINITIALIZED;
        this._expr_18 = import7.UNINITIALIZED;
        this._expr_19 = import7.UNINITIALIZED;
        var disposable_5 = this.renderer.listen(this._el_23, 'input', this.eventHandler(this._handle_input_23_0.bind(this)));
        var disposable_6 = this.renderer.listen(this._el_23, 'blur', this.eventHandler(this._handle_blur_23_1.bind(this)));
        this._expr_22 = import7.UNINITIALIZED;
        this._expr_23 = import7.UNINITIALIZED;
        this._expr_24 = import7.UNINITIALIZED;
        this._expr_25 = import7.UNINITIALIZED;
        this._expr_26 = import7.UNINITIALIZED;
        this._expr_27 = import7.UNINITIALIZED;
        this._expr_28 = import7.UNINITIALIZED;
        this._expr_29 = import7.UNINITIALIZED;
        var disposable_7 = this.renderer.listen(this._el_33, 'input', this.eventHandler(this._handle_input_33_0.bind(this)));
        var disposable_8 = this.renderer.listen(this._el_33, 'blur', this.eventHandler(this._handle_blur_33_1.bind(this)));
        this._expr_32 = import7.UNINITIALIZED;
        this._expr_33 = import7.UNINITIALIZED;
        this._expr_34 = import7.UNINITIALIZED;
        this._expr_35 = import7.UNINITIALIZED;
        this._expr_36 = import7.UNINITIALIZED;
        this._expr_37 = import7.UNINITIALIZED;
        this._expr_38 = import7.UNINITIALIZED;
        this._expr_39 = import7.UNINITIALIZED;
        var disposable_9 = this.renderer.listen(this._el_43, 'change', this.eventHandler(this._handle_change_43_0.bind(this)));
        var disposable_10 = this.renderer.listen(this._el_43, 'blur', this.eventHandler(this._handle_blur_43_1.bind(this)));
        this._expr_42 = import7.UNINITIALIZED;
        this._expr_43 = import7.UNINITIALIZED;
        this._expr_44 = import7.UNINITIALIZED;
        this._expr_45 = import7.UNINITIALIZED;
        this._expr_46 = import7.UNINITIALIZED;
        this._expr_47 = import7.UNINITIALIZED;
        this._expr_48 = import7.UNINITIALIZED;
        this._expr_49 = import7.UNINITIALIZED;
        this._expr_50 = import7.UNINITIALIZED;
        this._expr_51 = import7.UNINITIALIZED;
        this._expr_52 = import7.UNINITIALIZED;
        this._expr_53 = import7.UNINITIALIZED;
        this._expr_54 = import7.UNINITIALIZED;
        this._expr_55 = import7.UNINITIALIZED;
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
        if (((token === import12.DefaultValueAccessor) && (13 === requestNodeIndex))) {
            return this._DefaultValueAccessor_13_3;
        }
        if (((token === import19.NG_VALUE_ACCESSOR) && (13 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_13_4;
        }
        if (((token === import13.FormControlName) && (13 === requestNodeIndex))) {
            return this._FormControlName_13_5;
        }
        if (((token === import20.NgControl) && (13 === requestNodeIndex))) {
            return this._NgControl_13_6;
        }
        if (((token === import11.NgControlStatus) && (13 === requestNodeIndex))) {
            return this._NgControlStatus_13_7;
        }
        if (((token === import18.TemplateRef) && (15 === requestNodeIndex))) {
            return this._TemplateRef_15_5;
        }
        if (((token === import14.NgIf) && (15 === requestNodeIndex))) {
            return this._NgIf_15_6;
        }
        if (((token === import12.DefaultValueAccessor) && (23 === requestNodeIndex))) {
            return this._DefaultValueAccessor_23_3;
        }
        if (((token === import19.NG_VALUE_ACCESSOR) && (23 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_23_4;
        }
        if (((token === import13.FormControlName) && (23 === requestNodeIndex))) {
            return this._FormControlName_23_5;
        }
        if (((token === import20.NgControl) && (23 === requestNodeIndex))) {
            return this._NgControl_23_6;
        }
        if (((token === import11.NgControlStatus) && (23 === requestNodeIndex))) {
            return this._NgControlStatus_23_7;
        }
        if (((token === import18.TemplateRef) && (25 === requestNodeIndex))) {
            return this._TemplateRef_25_5;
        }
        if (((token === import14.NgIf) && (25 === requestNodeIndex))) {
            return this._NgIf_25_6;
        }
        if (((token === import12.DefaultValueAccessor) && (33 === requestNodeIndex))) {
            return this._DefaultValueAccessor_33_3;
        }
        if (((token === import19.NG_VALUE_ACCESSOR) && (33 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_33_4;
        }
        if (((token === import13.FormControlName) && (33 === requestNodeIndex))) {
            return this._FormControlName_33_5;
        }
        if (((token === import20.NgControl) && (33 === requestNodeIndex))) {
            return this._NgControl_33_6;
        }
        if (((token === import11.NgControlStatus) && (33 === requestNodeIndex))) {
            return this._NgControlStatus_33_7;
        }
        if (((token === import18.TemplateRef) && (35 === requestNodeIndex))) {
            return this._TemplateRef_35_5;
        }
        if (((token === import14.NgIf) && (35 === requestNodeIndex))) {
            return this._NgIf_35_6;
        }
        if (((token === import15.NgSelectOption) && ((45 <= requestNodeIndex) && (requestNodeIndex <= 46)))) {
            return this._NgSelectOption_45_3;
        }
        if (((token === import16.NgSelectMultipleOption) && ((45 <= requestNodeIndex) && (requestNodeIndex <= 46)))) {
            return this._NgSelectMultipleOption_45_4;
        }
        if (((token === import15.NgSelectOption) && ((48 <= requestNodeIndex) && (requestNodeIndex <= 49)))) {
            return this._NgSelectOption_48_3;
        }
        if (((token === import16.NgSelectMultipleOption) && ((48 <= requestNodeIndex) && (requestNodeIndex <= 49)))) {
            return this._NgSelectMultipleOption_48_4;
        }
        if (((token === import15.SelectControlValueAccessor) && ((43 <= requestNodeIndex) && (requestNodeIndex <= 50)))) {
            return this._SelectControlValueAccessor_43_3;
        }
        if (((token === import19.NG_VALUE_ACCESSOR) && ((43 <= requestNodeIndex) && (requestNodeIndex <= 50)))) {
            return this._NG_VALUE_ACCESSOR_43_4;
        }
        if (((token === import13.FormControlName) && ((43 <= requestNodeIndex) && (requestNodeIndex <= 50)))) {
            return this._FormControlName_43_5;
        }
        if (((token === import20.NgControl) && ((43 <= requestNodeIndex) && (requestNodeIndex <= 50)))) {
            return this._NgControl_43_6;
        }
        if (((token === import11.NgControlStatus) && ((43 <= requestNodeIndex) && (requestNodeIndex <= 50)))) {
            return this._NgControlStatus_43_7;
        }
        if (((token === import10.FormGroupDirective) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 58)))) {
            return this._FormGroupDirective_6_3;
        }
        if (((token === import21.ControlContainer) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 58)))) {
            return this._ControlContainer_6_4;
        }
        if (((token === import11.NgControlStatusGroup) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 58)))) {
            return this._NgControlStatusGroup_6_5;
        }
        if (((token === import18.TemplateRef) && (62 === requestNodeIndex))) {
            return this._TemplateRef_62_5;
        }
        if (((token === import14.NgIf) && (62 === requestNodeIndex))) {
            return this._NgIf_62_6;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        var changes = null;
        changes = null;
        const currVal_3 = this.context.form;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this._FormGroupDirective_6_3.form = currVal_3;
            if ((changes === null)) {
                (changes = {});
            }
            changes['form'] = new import7.SimpleChange(this._expr_3, currVal_3);
            this._expr_3 = currVal_3;
        }
        if ((changes !== null)) {
            this._FormGroupDirective_6_3.ngOnChanges(changes);
        }
        changes = null;
        const currVal_12 = 'firstName';
        if (import4.checkBinding(throwOnChange, this._expr_12, currVal_12)) {
            this._FormControlName_13_5.name = currVal_12;
            if ((changes === null)) {
                (changes = {});
            }
            changes['name'] = new import7.SimpleChange(this._expr_12, currVal_12);
            this._expr_12 = currVal_12;
        }
        if ((changes !== null)) {
            this._FormControlName_13_5.ngOnChanges(changes);
        }
        const currVal_19 = (this.context.form.controls.firstName.touched && !this.context.form.controls.firstName.valid);
        if (import4.checkBinding(throwOnChange, this._expr_19, currVal_19)) {
            this._NgIf_15_6.ngIf = currVal_19;
            this._expr_19 = currVal_19;
        }
        changes = null;
        const currVal_22 = 'streetAddress';
        if (import4.checkBinding(throwOnChange, this._expr_22, currVal_22)) {
            this._FormControlName_23_5.name = currVal_22;
            if ((changes === null)) {
                (changes = {});
            }
            changes['name'] = new import7.SimpleChange(this._expr_22, currVal_22);
            this._expr_22 = currVal_22;
        }
        if ((changes !== null)) {
            this._FormControlName_23_5.ngOnChanges(changes);
        }
        const currVal_29 = (this.context.form.controls.streetAddress.touched && !this.context.form.controls.streetAddress.valid);
        if (import4.checkBinding(throwOnChange, this._expr_29, currVal_29)) {
            this._NgIf_25_6.ngIf = currVal_29;
            this._expr_29 = currVal_29;
        }
        changes = null;
        const currVal_32 = 'zip';
        if (import4.checkBinding(throwOnChange, this._expr_32, currVal_32)) {
            this._FormControlName_33_5.name = currVal_32;
            if ((changes === null)) {
                (changes = {});
            }
            changes['name'] = new import7.SimpleChange(this._expr_32, currVal_32);
            this._expr_32 = currVal_32;
        }
        if ((changes !== null)) {
            this._FormControlName_33_5.ngOnChanges(changes);
        }
        const currVal_39 = (this.context.form.controls.zip.touched && !this.context.form.controls.zip.valid);
        if (import4.checkBinding(throwOnChange, this._expr_39, currVal_39)) {
            this._NgIf_35_6.ngIf = currVal_39;
            this._expr_39 = currVal_39;
        }
        changes = null;
        const currVal_42 = 'type';
        if (import4.checkBinding(throwOnChange, this._expr_42, currVal_42)) {
            this._FormControlName_43_5.name = currVal_42;
            if ((changes === null)) {
                (changes = {});
            }
            changes['name'] = new import7.SimpleChange(this._expr_42, currVal_42);
            this._expr_42 = currVal_42;
        }
        if ((changes !== null)) {
            this._FormControlName_43_5.ngOnChanges(changes);
        }
        const currVal_49 = 'home';
        if (import4.checkBinding(throwOnChange, this._expr_49, currVal_49)) {
            this._NgSelectOption_45_3.value = currVal_49;
            this._expr_49 = currVal_49;
        }
        const currVal_50 = 'home';
        if (import4.checkBinding(throwOnChange, this._expr_50, currVal_50)) {
            this._NgSelectMultipleOption_45_4.value = currVal_50;
            this._expr_50 = currVal_50;
        }
        const currVal_51 = 'billing';
        if (import4.checkBinding(throwOnChange, this._expr_51, currVal_51)) {
            this._NgSelectOption_48_3.value = currVal_51;
            this._expr_51 = currVal_51;
        }
        const currVal_52 = 'billing';
        if (import4.checkBinding(throwOnChange, this._expr_52, currVal_52)) {
            this._NgSelectMultipleOption_48_4.value = currVal_52;
            this._expr_52 = currVal_52;
        }
        const currVal_54 = this.context.payLoad;
        if (import4.checkBinding(throwOnChange, this._expr_54, currVal_54)) {
            this._NgIf_62_6.ngIf = currVal_54;
            this._expr_54 = currVal_54;
        }
        this.detectContentChildrenChanges(throwOnChange);
        const currVal_4 = this._NgControlStatusGroup_6_5.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementClass(this._el_6, 'ng-untouched', currVal_4);
            this._expr_4 = currVal_4;
        }
        const currVal_5 = this._NgControlStatusGroup_6_5.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementClass(this._el_6, 'ng-touched', currVal_5);
            this._expr_5 = currVal_5;
        }
        const currVal_6 = this._NgControlStatusGroup_6_5.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementClass(this._el_6, 'ng-pristine', currVal_6);
            this._expr_6 = currVal_6;
        }
        const currVal_7 = this._NgControlStatusGroup_6_5.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementClass(this._el_6, 'ng-dirty', currVal_7);
            this._expr_7 = currVal_7;
        }
        const currVal_8 = this._NgControlStatusGroup_6_5.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setElementClass(this._el_6, 'ng-valid', currVal_8);
            this._expr_8 = currVal_8;
        }
        const currVal_9 = this._NgControlStatusGroup_6_5.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setElementClass(this._el_6, 'ng-invalid', currVal_9);
            this._expr_9 = currVal_9;
        }
        const currVal_13 = this._NgControlStatus_13_7.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_13, currVal_13)) {
            this.renderer.setElementClass(this._el_13, 'ng-untouched', currVal_13);
            this._expr_13 = currVal_13;
        }
        const currVal_14 = this._NgControlStatus_13_7.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_14, currVal_14)) {
            this.renderer.setElementClass(this._el_13, 'ng-touched', currVal_14);
            this._expr_14 = currVal_14;
        }
        const currVal_15 = this._NgControlStatus_13_7.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_15, currVal_15)) {
            this.renderer.setElementClass(this._el_13, 'ng-pristine', currVal_15);
            this._expr_15 = currVal_15;
        }
        const currVal_16 = this._NgControlStatus_13_7.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_16, currVal_16)) {
            this.renderer.setElementClass(this._el_13, 'ng-dirty', currVal_16);
            this._expr_16 = currVal_16;
        }
        const currVal_17 = this._NgControlStatus_13_7.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_17, currVal_17)) {
            this.renderer.setElementClass(this._el_13, 'ng-valid', currVal_17);
            this._expr_17 = currVal_17;
        }
        const currVal_18 = this._NgControlStatus_13_7.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_18, currVal_18)) {
            this.renderer.setElementClass(this._el_13, 'ng-invalid', currVal_18);
            this._expr_18 = currVal_18;
        }
        const currVal_23 = this._NgControlStatus_23_7.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_23, currVal_23)) {
            this.renderer.setElementClass(this._el_23, 'ng-untouched', currVal_23);
            this._expr_23 = currVal_23;
        }
        const currVal_24 = this._NgControlStatus_23_7.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_24, currVal_24)) {
            this.renderer.setElementClass(this._el_23, 'ng-touched', currVal_24);
            this._expr_24 = currVal_24;
        }
        const currVal_25 = this._NgControlStatus_23_7.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_25, currVal_25)) {
            this.renderer.setElementClass(this._el_23, 'ng-pristine', currVal_25);
            this._expr_25 = currVal_25;
        }
        const currVal_26 = this._NgControlStatus_23_7.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_26, currVal_26)) {
            this.renderer.setElementClass(this._el_23, 'ng-dirty', currVal_26);
            this._expr_26 = currVal_26;
        }
        const currVal_27 = this._NgControlStatus_23_7.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_27, currVal_27)) {
            this.renderer.setElementClass(this._el_23, 'ng-valid', currVal_27);
            this._expr_27 = currVal_27;
        }
        const currVal_28 = this._NgControlStatus_23_7.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_28, currVal_28)) {
            this.renderer.setElementClass(this._el_23, 'ng-invalid', currVal_28);
            this._expr_28 = currVal_28;
        }
        const currVal_33 = this._NgControlStatus_33_7.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_33, currVal_33)) {
            this.renderer.setElementClass(this._el_33, 'ng-untouched', currVal_33);
            this._expr_33 = currVal_33;
        }
        const currVal_34 = this._NgControlStatus_33_7.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_34, currVal_34)) {
            this.renderer.setElementClass(this._el_33, 'ng-touched', currVal_34);
            this._expr_34 = currVal_34;
        }
        const currVal_35 = this._NgControlStatus_33_7.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_35, currVal_35)) {
            this.renderer.setElementClass(this._el_33, 'ng-pristine', currVal_35);
            this._expr_35 = currVal_35;
        }
        const currVal_36 = this._NgControlStatus_33_7.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_36, currVal_36)) {
            this.renderer.setElementClass(this._el_33, 'ng-dirty', currVal_36);
            this._expr_36 = currVal_36;
        }
        const currVal_37 = this._NgControlStatus_33_7.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_37, currVal_37)) {
            this.renderer.setElementClass(this._el_33, 'ng-valid', currVal_37);
            this._expr_37 = currVal_37;
        }
        const currVal_38 = this._NgControlStatus_33_7.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_38, currVal_38)) {
            this.renderer.setElementClass(this._el_33, 'ng-invalid', currVal_38);
            this._expr_38 = currVal_38;
        }
        const currVal_43 = this._NgControlStatus_43_7.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_43, currVal_43)) {
            this.renderer.setElementClass(this._el_43, 'ng-untouched', currVal_43);
            this._expr_43 = currVal_43;
        }
        const currVal_44 = this._NgControlStatus_43_7.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_44, currVal_44)) {
            this.renderer.setElementClass(this._el_43, 'ng-touched', currVal_44);
            this._expr_44 = currVal_44;
        }
        const currVal_45 = this._NgControlStatus_43_7.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_45, currVal_45)) {
            this.renderer.setElementClass(this._el_43, 'ng-pristine', currVal_45);
            this._expr_45 = currVal_45;
        }
        const currVal_46 = this._NgControlStatus_43_7.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_46, currVal_46)) {
            this.renderer.setElementClass(this._el_43, 'ng-dirty', currVal_46);
            this._expr_46 = currVal_46;
        }
        const currVal_47 = this._NgControlStatus_43_7.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_47, currVal_47)) {
            this.renderer.setElementClass(this._el_43, 'ng-valid', currVal_47);
            this._expr_47 = currVal_47;
        }
        const currVal_48 = this._NgControlStatus_43_7.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_48, currVal_48)) {
            this.renderer.setElementClass(this._el_43, 'ng-invalid', currVal_48);
            this._expr_48 = currVal_48;
        }
        const currVal_53 = !this.context.form.valid;
        if (import4.checkBinding(throwOnChange, this._expr_53, currVal_53)) {
            this.renderer.setElementProperty(this._el_55, 'disabled', currVal_53);
            this._expr_53 = currVal_53;
        }
        const currVal_55 = import4.interpolate(1, '\n        ', this.context.payLoad, '\n    ');
        if (import4.checkBinding(throwOnChange, this._expr_55, currVal_55)) {
            this.renderer.setText(this._text_65, currVal_55);
            this._expr_55 = currVal_55;
        }
        this.detectViewChildrenChanges(throwOnChange);
    }
    destroyInternal() {
        this._FormControlName_13_5.ngOnDestroy();
        this._FormControlName_23_5.ngOnDestroy();
        this._FormControlName_33_5.ngOnDestroy();
        this._NgSelectOption_45_3.ngOnDestroy();
        this._NgSelectMultipleOption_45_4.ngOnDestroy();
        this._NgSelectOption_48_3.ngOnDestroy();
        this._NgSelectMultipleOption_48_4.ngOnDestroy();
        this._FormControlName_43_5.ngOnDestroy();
    }
    _handle_ngSubmit_6_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this.context.onSubmit() !== false);
        return (true && pd_0);
    }
    _handle_submit_6_1($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this._FormGroupDirective_6_3.onSubmit() !== false);
        return (true && pd_0);
    }
    _handle_reset_6_2($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this._FormGroupDirective_6_3.onReset() !== false);
        return (true && pd_0);
    }
    _handle_input_13_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this._DefaultValueAccessor_13_3.onChange($event.target.value) !== false);
        return (true && pd_0);
    }
    _handle_blur_13_1($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this._DefaultValueAccessor_13_3.onTouched() !== false);
        return (true && pd_0);
    }
    _handle_input_23_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this._DefaultValueAccessor_23_3.onChange($event.target.value) !== false);
        return (true && pd_0);
    }
    _handle_blur_23_1($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this._DefaultValueAccessor_23_3.onTouched() !== false);
        return (true && pd_0);
    }
    _handle_input_33_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this._DefaultValueAccessor_33_3.onChange($event.target.value) !== false);
        return (true && pd_0);
    }
    _handle_blur_33_1($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this._DefaultValueAccessor_33_3.onTouched() !== false);
        return (true && pd_0);
    }
    _handle_change_43_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this._SelectControlValueAccessor_43_3.onChange($event.target.value) !== false);
        return (true && pd_0);
    }
    _handle_blur_43_1($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this._SelectControlValueAccessor_43_3.onTouched() !== false);
        return (true && pd_0);
    }
}
export function viewFactory_AddressForm0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_AddressForm === null)) {
        (renderType_AddressForm = viewUtils.createRenderComponentType('/Users/tor/Development/angular-2-samples/components/address-form/address-form.html', 0, import8.ViewEncapsulation.None, styles_AddressForm, {}));
    }
    return new _View_AddressForm0(viewUtils, parentInjector, declarationEl);
}
class _View_AddressForm1 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_AddressForm1, renderType_AddressForm, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'errorMessage');
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
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'errorMessage');
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
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'errorMessage');
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
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this._el_1 = this.renderer.createElement(this._el_0, 'strong', null);
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
