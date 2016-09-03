import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../components/input-controls/input-controls';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '@angular/forms/src/directives/default_value_accessor';
import * as import11 from '@angular/forms/src/directives/ng_model';
import * as import12 from '@angular/forms/src/directives/ng_control_status';
import * as import13 from '@angular/common/src/directives/ng_if';
import * as import14 from '@angular/core/src/linker/element_ref';
import * as import15 from '@angular/core/src/linker/template_ref';
import * as import16 from '@angular/forms/src/directives/control_value_accessor';
import * as import17 from '@angular/forms/src/directives/ng_control';
var renderType_InputControls_Host = null;
class _View_InputControls_Host0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_InputControls_Host0, renderType_InputControls_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('input-controls', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_InputControls0(this.viewUtils, this.injector(0), this._appEl_0);
        this._InputControls_0_4 = new import3.InputControls();
        this._appEl_0.initComponent(this._InputControls_0_4, [], compView_0);
        compView_0.create(this._InputControls_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import3.InputControls) && (0 === requestNodeIndex))) {
            return this._InputControls_0_4;
        }
        return notFoundResult;
    }
}
function viewFactory_InputControls_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_InputControls_Host === null)) {
        (renderType_InputControls_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_InputControls_Host0(viewUtils, parentInjector, declarationEl);
}
export const InputControlsNgFactory = new import9.ComponentFactory('input-controls', viewFactory_InputControls_Host0, import3.InputControls);
const styles_InputControls = [];
var renderType_InputControls = null;
class _View_InputControls0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_InputControls0, renderType_InputControls, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n            ', null);
        this._el_1 = this.renderer.createElement(parentRenderNode, 'h1', null);
        this._text_2 = this.renderer.createText(this._el_1, 'Input Controls', null);
        this._text_3 = this.renderer.createText(parentRenderNode, '\n            ', null);
        this._el_4 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_4, 'class', 'input-controls');
        this._text_5 = this.renderer.createText(this._el_4, '\n                ', null);
        this._el_6 = this.renderer.createElement(this._el_4, 'h4', null);
        this._text_7 = this.renderer.createText(this._el_6, '"Two way bindings"', null);
        this._text_8 = this.renderer.createText(this._el_4, '\n\n                ', null);
        this._el_9 = this.renderer.createElement(this._el_4, 'input', null);
        this.renderer.setElementAttribute(this._el_9, 'id', 'name');
        this._DefaultValueAccessor_9_3 = new import10.DefaultValueAccessor(this.renderer, new import14.ElementRef(this._el_9));
        this._NG_VALUE_ACCESSOR_9_4 = [this._DefaultValueAccessor_9_3];
        this._NgModel_9_5 = new import11.NgModel(null, null, null, this._NG_VALUE_ACCESSOR_9_4);
        this._NgControl_9_6 = this._NgModel_9_5;
        this._NgControlStatus_9_7 = new import12.NgControlStatus(this._NgControl_9_6);
        this._text_10 = this.renderer.createText(this._el_4, '\n\n                ', null);
        this._el_11 = this.renderer.createElement(this._el_4, 'div', null);
        this._text_12 = this.renderer.createText(this._el_11, '', null);
        this._text_13 = this.renderer.createText(this._el_4, '\n            ', null);
        this._text_14 = this.renderer.createText(parentRenderNode, '\n\n            ', null);
        this._el_15 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_15, 'class', 'input-controls');
        this._text_16 = this.renderer.createText(this._el_15, '\n                ', null);
        this._el_17 = this.renderer.createElement(this._el_15, 'h4', null);
        this._text_18 = this.renderer.createText(this._el_17, 'Select a gender', null);
        this._text_19 = this.renderer.createText(this._el_15, '\n                ', null);
        this._el_20 = this.renderer.createElement(this._el_15, 'div', null);
        this._text_21 = this.renderer.createText(this._el_20, '\n                    ', null);
        this._el_22 = this.renderer.createElement(this._el_20, 'label', null);
        this._text_23 = this.renderer.createText(this._el_22, '\n                        ', null);
        this._el_24 = this.renderer.createElement(this._el_22, 'input', null);
        this.renderer.setElementAttribute(this._el_24, 'name', 'gender');
        this.renderer.setElementAttribute(this._el_24, 'type', 'radio');
        this.renderer.setElementAttribute(this._el_24, 'value', 'Male');
        this._text_25 = this.renderer.createText(this._el_22, '\n                        Male\n                    ', null);
        this._text_26 = this.renderer.createText(this._el_20, '\n                ', null);
        this._text_27 = this.renderer.createText(this._el_15, '\n                ', null);
        this._el_28 = this.renderer.createElement(this._el_15, 'div', null);
        this._text_29 = this.renderer.createText(this._el_28, '\n                    ', null);
        this._el_30 = this.renderer.createElement(this._el_28, 'label', null);
        this._text_31 = this.renderer.createText(this._el_30, '\n                        ', null);
        this._el_32 = this.renderer.createElement(this._el_30, 'input', null);
        this.renderer.setElementAttribute(this._el_32, 'name', 'gender');
        this.renderer.setElementAttribute(this._el_32, 'type', 'radio');
        this.renderer.setElementAttribute(this._el_32, 'value', 'Female');
        this._text_33 = this.renderer.createText(this._el_30, '\n                        Female\n                    ', null);
        this._text_34 = this.renderer.createText(this._el_28, '\n                ', null);
        this._text_35 = this.renderer.createText(this._el_15, '\n                ', null);
        this._el_36 = this.renderer.createElement(this._el_15, 'div', null);
        this._text_37 = this.renderer.createText(this._el_36, '\n                    Selected gender is ', null);
        this._el_38 = this.renderer.createElement(this._el_36, 'strong', null);
        this._text_39 = this.renderer.createText(this._el_38, '', null);
        this._text_40 = this.renderer.createText(this._el_36, '\n                ', null);
        this._text_41 = this.renderer.createText(this._el_15, '\n            ', null);
        this._text_42 = this.renderer.createText(parentRenderNode, '\n\n            ', null);
        this._el_43 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_43, 'class', 'input-controls');
        this._text_44 = this.renderer.createText(this._el_43, '\n                ', null);
        this._el_45 = this.renderer.createElement(this._el_43, 'h4', null);
        this._text_46 = this.renderer.createText(this._el_45, 'Select your programming skills', null);
        this._text_47 = this.renderer.createText(this._el_43, '\n                ', null);
        this._el_48 = this.renderer.createElement(this._el_43, 'div', null);
        this._text_49 = this.renderer.createText(this._el_48, '\n                    ', null);
        this._el_50 = this.renderer.createElement(this._el_48, 'label', null);
        this._text_51 = this.renderer.createText(this._el_50, '\n                        ', null);
        this._el_52 = this.renderer.createElement(this._el_50, 'input', null);
        this.renderer.setElementAttribute(this._el_52, 'type', 'checkbox');
        this._text_53 = this.renderer.createText(this._el_50, '\n                        Angular\n                    ', null);
        this._text_54 = this.renderer.createText(this._el_48, '\n                ', null);
        this._text_55 = this.renderer.createText(this._el_43, '\n                ', null);
        this._el_56 = this.renderer.createElement(this._el_43, 'div', null);
        this._text_57 = this.renderer.createText(this._el_56, '\n                    ', null);
        this._el_58 = this.renderer.createElement(this._el_56, 'label', null);
        this._text_59 = this.renderer.createText(this._el_58, '\n                        ', null);
        this._el_60 = this.renderer.createElement(this._el_58, 'input', null);
        this.renderer.setElementAttribute(this._el_60, 'type', 'checkbox');
        this._text_61 = this.renderer.createText(this._el_58, '\n                        JavaScript\n                    ', null);
        this._text_62 = this.renderer.createText(this._el_56, '\n                ', null);
        this._text_63 = this.renderer.createText(this._el_43, '\n                ', null);
        this._el_64 = this.renderer.createElement(this._el_43, 'div', null);
        this._text_65 = this.renderer.createText(this._el_64, '\n                    ', null);
        this._el_66 = this.renderer.createElement(this._el_64, 'label', null);
        this._text_67 = this.renderer.createText(this._el_66, '\n                        ', null);
        this._el_68 = this.renderer.createElement(this._el_66, 'input', null);
        this.renderer.setElementAttribute(this._el_68, 'type', 'checkbox');
        this._text_69 = this.renderer.createText(this._el_66, '\n                        C#\n                    ', null);
        this._text_70 = this.renderer.createText(this._el_64, '\n                ', null);
        this._text_71 = this.renderer.createText(this._el_43, '\n            ', null);
        this._text_72 = this.renderer.createText(parentRenderNode, '\n\n            ', null);
        this._el_73 = this.renderer.createElement(parentRenderNode, 'div', null);
        this._text_74 = this.renderer.createText(this._el_73, '\n                Selected Skills:\n                ', null);
        this._el_75 = this.renderer.createElement(this._el_73, 'ul', null);
        this._text_76 = this.renderer.createText(this._el_75, '\n                    ', null);
        this._anchor_77 = this.renderer.createTemplateAnchor(this._el_75, null);
        this._appEl_77 = new import2.AppElement(77, 75, this, this._anchor_77);
        this._TemplateRef_77_5 = new import15.TemplateRef_(this._appEl_77, viewFactory_InputControls1);
        this._NgIf_77_6 = new import13.NgIf(this._appEl_77.vcRef, this._TemplateRef_77_5);
        this._text_78 = this.renderer.createText(this._el_75, '\n                    ', null);
        this._anchor_79 = this.renderer.createTemplateAnchor(this._el_75, null);
        this._appEl_79 = new import2.AppElement(79, 75, this, this._anchor_79);
        this._TemplateRef_79_5 = new import15.TemplateRef_(this._appEl_79, viewFactory_InputControls2);
        this._NgIf_79_6 = new import13.NgIf(this._appEl_79.vcRef, this._TemplateRef_79_5);
        this._text_80 = this.renderer.createText(this._el_75, '\n                    ', null);
        this._anchor_81 = this.renderer.createTemplateAnchor(this._el_75, null);
        this._appEl_81 = new import2.AppElement(81, 75, this, this._anchor_81);
        this._TemplateRef_81_5 = new import15.TemplateRef_(this._appEl_81, viewFactory_InputControls3);
        this._NgIf_81_6 = new import13.NgIf(this._appEl_81.vcRef, this._TemplateRef_81_5);
        this._text_82 = this.renderer.createText(this._el_75, '\n                ', null);
        this._text_83 = this.renderer.createText(this._el_73, '\n            ', null);
        this._text_84 = this.renderer.createText(parentRenderNode, '\n\n            ', null);
        this._el_85 = this.renderer.createElement(parentRenderNode, 'h4', null);
        this._el_86 = this.renderer.createElement(this._el_85, 'a', null);
        this.renderer.setElementAttribute(this._el_86, 'href', 'http://www.syntaxsuccess.com/viewarticle/input-controls-in-angular-2.0');
        this._text_87 = this.renderer.createText(this._el_86, 'Read more here', null);
        var disposable_0 = this.renderer.listen(this._el_9, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_9_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_9, 'input', this.eventHandler(this._handle_input_9_1.bind(this)));
        var disposable_2 = this.renderer.listen(this._el_9, 'blur', this.eventHandler(this._handle_blur_9_2.bind(this)));
        this._expr_3 = import7.UNINITIALIZED;
        const subscription_0 = this._NgModel_9_5.update.subscribe(this.eventHandler(this._handle_ngModelChange_9_0.bind(this)));
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        this._expr_8 = import7.UNINITIALIZED;
        this._expr_9 = import7.UNINITIALIZED;
        this._expr_10 = import7.UNINITIALIZED;
        var disposable_3 = this.renderer.listen(this._el_24, 'click', this.eventHandler(this._handle_click_24_0.bind(this)));
        var disposable_4 = this.renderer.listen(this._el_32, 'click', this.eventHandler(this._handle_click_32_0.bind(this)));
        this._expr_13 = import7.UNINITIALIZED;
        var disposable_5 = this.renderer.listen(this._el_52, 'change', this.eventHandler(this._handle_change_52_0.bind(this)));
        var disposable_6 = this.renderer.listen(this._el_60, 'change', this.eventHandler(this._handle_change_60_0.bind(this)));
        var disposable_7 = this.renderer.listen(this._el_68, 'change', this.eventHandler(this._handle_change_68_0.bind(this)));
        this._expr_17 = import7.UNINITIALIZED;
        this._expr_18 = import7.UNINITIALIZED;
        this._expr_19 = import7.UNINITIALIZED;
        this.init([], [
            this._text_0,
            this._el_1,
            this._text_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._text_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._text_26,
            this._text_27,
            this._el_28,
            this._text_29,
            this._el_30,
            this._text_31,
            this._el_32,
            this._text_33,
            this._text_34,
            this._text_35,
            this._el_36,
            this._text_37,
            this._el_38,
            this._text_39,
            this._text_40,
            this._text_41,
            this._text_42,
            this._el_43,
            this._text_44,
            this._el_45,
            this._text_46,
            this._text_47,
            this._el_48,
            this._text_49,
            this._el_50,
            this._text_51,
            this._el_52,
            this._text_53,
            this._text_54,
            this._text_55,
            this._el_56,
            this._text_57,
            this._el_58,
            this._text_59,
            this._el_60,
            this._text_61,
            this._text_62,
            this._text_63,
            this._el_64,
            this._text_65,
            this._el_66,
            this._text_67,
            this._el_68,
            this._text_69,
            this._text_70,
            this._text_71,
            this._text_72,
            this._el_73,
            this._text_74,
            this._el_75,
            this._text_76,
            this._anchor_77,
            this._text_78,
            this._anchor_79,
            this._text_80,
            this._anchor_81,
            this._text_82,
            this._text_83,
            this._text_84,
            this._el_85,
            this._el_86,
            this._text_87
        ], [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3,
            disposable_4,
            disposable_5,
            disposable_6,
            disposable_7
        ], [subscription_0]);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import10.DefaultValueAccessor) && (9 === requestNodeIndex))) {
            return this._DefaultValueAccessor_9_3;
        }
        if (((token === import16.NG_VALUE_ACCESSOR) && (9 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_9_4;
        }
        if (((token === import11.NgModel) && (9 === requestNodeIndex))) {
            return this._NgModel_9_5;
        }
        if (((token === import17.NgControl) && (9 === requestNodeIndex))) {
            return this._NgControl_9_6;
        }
        if (((token === import12.NgControlStatus) && (9 === requestNodeIndex))) {
            return this._NgControlStatus_9_7;
        }
        if (((token === import15.TemplateRef) && (77 === requestNodeIndex))) {
            return this._TemplateRef_77_5;
        }
        if (((token === import13.NgIf) && (77 === requestNodeIndex))) {
            return this._NgIf_77_6;
        }
        if (((token === import15.TemplateRef) && (79 === requestNodeIndex))) {
            return this._TemplateRef_79_5;
        }
        if (((token === import13.NgIf) && (79 === requestNodeIndex))) {
            return this._NgIf_79_6;
        }
        if (((token === import15.TemplateRef) && (81 === requestNodeIndex))) {
            return this._TemplateRef_81_5;
        }
        if (((token === import13.NgIf) && (81 === requestNodeIndex))) {
            return this._NgIf_81_6;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        var changes = null;
        changes = null;
        const currVal_3 = this.context.name;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this._NgModel_9_5.model = currVal_3;
            if ((changes === null)) {
                (changes = {});
            }
            changes['model'] = new import7.SimpleChange(this._expr_3, currVal_3);
            this._expr_3 = currVal_3;
        }
        if ((changes !== null)) {
            this._NgModel_9_5.ngOnChanges(changes);
        }
        const currVal_17 = this.context.angular;
        if (import4.checkBinding(throwOnChange, this._expr_17, currVal_17)) {
            this._NgIf_77_6.ngIf = currVal_17;
            this._expr_17 = currVal_17;
        }
        const currVal_18 = this.context.javascript;
        if (import4.checkBinding(throwOnChange, this._expr_18, currVal_18)) {
            this._NgIf_79_6.ngIf = currVal_18;
            this._expr_18 = currVal_18;
        }
        const currVal_19 = this.context.csharp;
        if (import4.checkBinding(throwOnChange, this._expr_19, currVal_19)) {
            this._NgIf_81_6.ngIf = currVal_19;
            this._expr_19 = currVal_19;
        }
        this.detectContentChildrenChanges(throwOnChange);
        const currVal_4 = this._NgControlStatus_9_7.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementClass(this._el_9, 'ng-untouched', currVal_4);
            this._expr_4 = currVal_4;
        }
        const currVal_5 = this._NgControlStatus_9_7.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementClass(this._el_9, 'ng-touched', currVal_5);
            this._expr_5 = currVal_5;
        }
        const currVal_6 = this._NgControlStatus_9_7.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementClass(this._el_9, 'ng-pristine', currVal_6);
            this._expr_6 = currVal_6;
        }
        const currVal_7 = this._NgControlStatus_9_7.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementClass(this._el_9, 'ng-dirty', currVal_7);
            this._expr_7 = currVal_7;
        }
        const currVal_8 = this._NgControlStatus_9_7.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setElementClass(this._el_9, 'ng-valid', currVal_8);
            this._expr_8 = currVal_8;
        }
        const currVal_9 = this._NgControlStatus_9_7.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setElementClass(this._el_9, 'ng-invalid', currVal_9);
            this._expr_9 = currVal_9;
        }
        const currVal_10 = import4.interpolate(1, 'Current Value: ', this.context.name, '');
        if (import4.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this.renderer.setText(this._text_12, currVal_10);
            this._expr_10 = currVal_10;
        }
        const currVal_13 = import4.interpolate(1, '', this.context.gender, '');
        if (import4.checkBinding(throwOnChange, this._expr_13, currVal_13)) {
            this.renderer.setText(this._text_39, currVal_13);
            this._expr_13 = currVal_13;
        }
        this.detectViewChildrenChanges(throwOnChange);
    }
    destroyInternal() {
        this._NgModel_9_5.ngOnDestroy();
    }
    _handle_ngModelChange_9_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = ((this.context.name = $event) !== false);
        return (true && pd_0);
    }
    _handle_input_9_1($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this._DefaultValueAccessor_9_3.onChange($event.target.value) !== false);
        return (true && pd_0);
    }
    _handle_blur_9_2($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this._DefaultValueAccessor_9_3.onTouched() !== false);
        return (true && pd_0);
    }
    _handle_click_24_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = ((this.context.gender = this._el_24.value) !== false);
        return (true && pd_0);
    }
    _handle_click_32_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = ((this.context.gender = this._el_32.value) !== false);
        return (true && pd_0);
    }
    _handle_change_52_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = ((this.context.angular = this._el_52.checked) !== false);
        return (true && pd_0);
    }
    _handle_change_60_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = ((this.context.javascript = this._el_60.checked) !== false);
        return (true && pd_0);
    }
    _handle_change_68_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = ((this.context.csharp = this._el_68.checked) !== false);
        return (true && pd_0);
    }
}
export function viewFactory_InputControls0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_InputControls === null)) {
        (renderType_InputControls = viewUtils.createRenderComponentType('/Users/tor/Development/angular-2-samples/components/input-controls/input-controls.ts class InputControls - inline template', 0, import8.ViewEncapsulation.None, styles_InputControls, {}));
    }
    return new _View_InputControls0(viewUtils, parentInjector, declarationEl);
}
class _View_InputControls1 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_InputControls1, renderType_InputControls, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'li', null);
        this._text_1 = this.renderer.createText(this._el_0, 'Angular', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    }
}
function viewFactory_InputControls1(viewUtils, parentInjector, declarationEl) {
    return new _View_InputControls1(viewUtils, parentInjector, declarationEl);
}
class _View_InputControls2 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_InputControls2, renderType_InputControls, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'li', null);
        this._text_1 = this.renderer.createText(this._el_0, 'JavaScript', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    }
}
function viewFactory_InputControls2(viewUtils, parentInjector, declarationEl) {
    return new _View_InputControls2(viewUtils, parentInjector, declarationEl);
}
class _View_InputControls3 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_InputControls3, renderType_InputControls, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'li', null);
        this._text_1 = this.renderer.createText(this._el_0, 'C#', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    }
}
function viewFactory_InputControls3(viewUtils, parentInjector, declarationEl) {
    return new _View_InputControls3(viewUtils, parentInjector, declarationEl);
}
