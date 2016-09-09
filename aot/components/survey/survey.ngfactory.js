var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../components/survey/survey';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '@angular/forms/src/directives/reactive_directives/form_group_directive';
import * as import11 from '@angular/forms/src/directives/ng_control_status';
import * as import12 from '@angular/common/src/directives/ng_for';
import * as import13 from '@angular/common/src/directives/ng_if';
import * as import14 from '@angular/core/src/linker/template_ref';
import * as import15 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import16 from '@angular/forms/src/directives/control_container';
import * as import17 from '@angular/common/src/directives/ng_switch';
import * as import18 from '@angular/forms/src/directives/default_value_accessor';
import * as import19 from '@angular/forms/src/directives/reactive_directives/form_control_name';
import * as import20 from '@angular/core/src/linker/element_ref';
import * as import21 from '@angular/forms/src/directives/control_value_accessor';
import * as import22 from '@angular/forms/src/directives/ng_control';
import * as import23 from '@angular/forms/src/directives/select_control_value_accessor';
import * as import24 from '@angular/forms/src/directives/select_multiple_control_value_accessor';
var renderType_Survey_Host = null;
var _View_Survey_Host0 = (function (_super) {
    __extends(_View_Survey_Host0, _super);
    function _View_Survey_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Survey_Host0, renderType_Survey_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_Survey_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('survey', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_Survey0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Survey_0_4 = new import3.Survey();
        this._appEl_0.initComponent(this._Survey_0_4, [], compView_0);
        compView_0.create(this._Survey_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_Survey_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.Survey) && (0 === requestNodeIndex))) {
            return this._Survey_0_4;
        }
        return notFoundResult;
    };
    _View_Survey_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Survey_0_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_Survey_Host0;
}(import1.AppView));
function viewFactory_Survey_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Survey_Host === null)) {
        (renderType_Survey_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_Survey_Host0(viewUtils, parentInjector, declarationEl);
}
export var SurveyNgFactory = new import9.ComponentFactory('survey', viewFactory_Survey_Host0, import3.Survey);
var styles_Survey = [];
var renderType_Survey = null;
var _View_Survey0 = (function (_super) {
    __extends(_View_Survey0, _super);
    function _View_Survey0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Survey0, renderType_Survey, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_Survey0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'div', null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'form', null);
        this._FormGroupDirective_2_3 = new import10.FormGroupDirective(null, null);
        this._ControlContainer_2_4 = this._FormGroupDirective_2_3;
        this._NgControlStatusGroup_2_5 = new import11.NgControlStatusGroup(this._ControlContainer_2_4);
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._anchor_4 = this.renderer.createTemplateAnchor(this._el_2, null);
        this._appEl_4 = new import2.AppElement(4, 2, this, this._anchor_4);
        this._TemplateRef_4_5 = new import14.TemplateRef_(this._appEl_4, viewFactory_Survey1);
        this._NgFor_4_6 = new import12.NgFor(this._appEl_4.vcRef, this._TemplateRef_4_5, this.parentInjector.get(import15.IterableDiffers), this.ref);
        this._text_5 = this.renderer.createText(this._el_2, '\n\n        ', null);
        this._el_6 = this.renderer.createElement(this._el_2, 'div', null);
        this.renderer.setElementAttribute(this._el_6, 'class', 'form-row');
        this._text_7 = this.renderer.createText(this._el_6, '\n            ', null);
        this._el_8 = this.renderer.createElement(this._el_6, 'button', null);
        this.renderer.setElementAttribute(this._el_8, 'type', 'submit');
        this._text_9 = this.renderer.createText(this._el_8, 'Save', null);
        this._text_10 = this.renderer.createText(this._el_6, '\n        ', null);
        this._text_11 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_12 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_13 = this.renderer.createElement(this._el_0, 'div', null);
        this.renderer.setElementAttribute(this._el_13, 'class', 'form-row');
        this._text_14 = this.renderer.createText(this._el_13, '\n        ', null);
        this._anchor_15 = this.renderer.createTemplateAnchor(this._el_13, null);
        this._appEl_15 = new import2.AppElement(15, 13, this, this._anchor_15);
        this._TemplateRef_15_5 = new import14.TemplateRef_(this._appEl_15, viewFactory_Survey6);
        this._NgIf_15_6 = new import13.NgIf(this._appEl_15.vcRef, this._TemplateRef_15_5);
        this._text_16 = this.renderer.createText(this._el_13, '\n        ', null);
        this._el_17 = this.renderer.createElement(this._el_13, 'div', null);
        this._text_18 = this.renderer.createText(this._el_17, '', null);
        this._text_19 = this.renderer.createText(this._el_13, '\n    ', null);
        this._text_20 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_21 = this.renderer.createElement(this._el_0, 'h4', null);
        this._el_22 = this.renderer.createElement(this._el_21, 'a', null);
        this.renderer.setElementAttribute(this._el_22, 'href', 'http://www.syntaxsuccess.com/viewarticle/dynamic-form-in-angular-2.0');
        this._text_23 = this.renderer.createText(this._el_22, 'Read more here', null);
        this._text_24 = this.renderer.createText(this._el_0, '\n', null);
        var disposable_0 = this.renderer.listen(this._el_2, 'ngSubmit', this.eventHandler(this._handle_ngSubmit_2_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_2, 'submit', this.eventHandler(this._handle_submit_2_1.bind(this)));
        var disposable_2 = this.renderer.listen(this._el_2, 'reset', this.eventHandler(this._handle_reset_2_2.bind(this)));
        this._expr_3 = import7.UNINITIALIZED;
        var subscription_0 = this._FormGroupDirective_2_3.ngSubmit.subscribe(this.eventHandler(this._handle_ngSubmit_2_0.bind(this)));
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        this._expr_8 = import7.UNINITIALIZED;
        this._expr_9 = import7.UNINITIALIZED;
        this._expr_10 = import7.UNINITIALIZED;
        this._expr_11 = import7.UNINITIALIZED;
        this._expr_12 = import7.UNINITIALIZED;
        this._expr_13 = import7.UNINITIALIZED;
        this.init([], [
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
        ], [
            disposable_0,
            disposable_1,
            disposable_2
        ], [subscription_0]);
        return null;
    };
    _View_Survey0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import14.TemplateRef) && (4 === requestNodeIndex))) {
            return this._TemplateRef_4_5;
        }
        if (((token === import12.NgFor) && (4 === requestNodeIndex))) {
            return this._NgFor_4_6;
        }
        if (((token === import10.FormGroupDirective) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 11)))) {
            return this._FormGroupDirective_2_3;
        }
        if (((token === import16.ControlContainer) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 11)))) {
            return this._ControlContainer_2_4;
        }
        if (((token === import11.NgControlStatusGroup) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 11)))) {
            return this._NgControlStatusGroup_2_5;
        }
        if (((token === import14.TemplateRef) && (15 === requestNodeIndex))) {
            return this._TemplateRef_15_5;
        }
        if (((token === import13.NgIf) && (15 === requestNodeIndex))) {
            return this._NgIf_15_6;
        }
        return notFoundResult;
    };
    _View_Survey0.prototype.detectChangesInternal = function (throwOnChange) {
        var changes = null;
        changes = null;
        var currVal_3 = this.context.form;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this._FormGroupDirective_2_3.form = currVal_3;
            if ((changes === null)) {
                (changes = {});
            }
            changes['form'] = new import7.SimpleChange(this._expr_3, currVal_3);
            this._expr_3 = currVal_3;
        }
        if ((changes !== null)) {
            this._FormGroupDirective_2_3.ngOnChanges(changes);
        }
        changes = null;
        var currVal_10 = this.context.model.questions;
        if (import4.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this._NgFor_4_6.ngForOf = currVal_10;
            if ((changes === null)) {
                (changes = {});
            }
            changes['ngForOf'] = new import7.SimpleChange(this._expr_10, currVal_10);
            this._expr_10 = currVal_10;
        }
        if ((changes !== null)) {
            this._NgFor_4_6.ngOnChanges(changes);
        }
        if (!throwOnChange) {
            this._NgFor_4_6.ngDoCheck();
        }
        var currVal_12 = this.context.payLoad;
        if (import4.checkBinding(throwOnChange, this._expr_12, currVal_12)) {
            this._NgIf_15_6.ngIf = currVal_12;
            this._expr_12 = currVal_12;
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_4 = this._NgControlStatusGroup_2_5.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementClass(this._el_2, 'ng-untouched', currVal_4);
            this._expr_4 = currVal_4;
        }
        var currVal_5 = this._NgControlStatusGroup_2_5.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementClass(this._el_2, 'ng-touched', currVal_5);
            this._expr_5 = currVal_5;
        }
        var currVal_6 = this._NgControlStatusGroup_2_5.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementClass(this._el_2, 'ng-pristine', currVal_6);
            this._expr_6 = currVal_6;
        }
        var currVal_7 = this._NgControlStatusGroup_2_5.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementClass(this._el_2, 'ng-dirty', currVal_7);
            this._expr_7 = currVal_7;
        }
        var currVal_8 = this._NgControlStatusGroup_2_5.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setElementClass(this._el_2, 'ng-valid', currVal_8);
            this._expr_8 = currVal_8;
        }
        var currVal_9 = this._NgControlStatusGroup_2_5.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setElementClass(this._el_2, 'ng-invalid', currVal_9);
            this._expr_9 = currVal_9;
        }
        var currVal_11 = !this.context.form.valid;
        if (import4.checkBinding(throwOnChange, this._expr_11, currVal_11)) {
            this.renderer.setElementProperty(this._el_8, 'disabled', currVal_11);
            this._expr_11 = currVal_11;
        }
        var currVal_13 = import4.interpolate(1, '\n            ', this.context.payLoad, '\n        ');
        if (import4.checkBinding(throwOnChange, this._expr_13, currVal_13)) {
            this.renderer.setText(this._text_18, currVal_13);
            this._expr_13 = currVal_13;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_Survey0.prototype._handle_ngSubmit_2_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.onSubmit() !== false);
        return (true && pd_0);
    };
    _View_Survey0.prototype._handle_submit_2_1 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._FormGroupDirective_2_3.onSubmit() !== false);
        return (true && pd_0);
    };
    _View_Survey0.prototype._handle_reset_2_2 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._FormGroupDirective_2_3.onReset() !== false);
        return (true && pd_0);
    };
    return _View_Survey0;
}(import1.AppView));
export function viewFactory_Survey0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Survey === null)) {
        (renderType_Survey = viewUtils.createRenderComponentType('/Users/tor/Development/angular-2-samples/components/survey/survey.html', 0, import8.ViewEncapsulation.None, styles_Survey, {}));
    }
    return new _View_Survey0(viewUtils, parentInjector, declarationEl);
}
var _View_Survey1 = (function (_super) {
    __extends(_View_Survey1, _super);
    function _View_Survey1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Survey1, renderType_Survey, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_Survey1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'form-row');
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'div', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'formHeading');
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n\n            ', null);
        this._el_5 = this.renderer.createElement(this._el_0, 'div', null);
        this._NgSwitch_5_3 = new import17.NgSwitch();
        this._text_6 = this.renderer.createText(this._el_5, '\n                ', null);
        this._anchor_7 = this.renderer.createTemplateAnchor(this._el_5, null);
        this._appEl_7 = new import2.AppElement(7, 5, this, this._anchor_7);
        this._TemplateRef_7_5 = new import14.TemplateRef_(this._appEl_7, viewFactory_Survey2);
        this._NgSwitchCase_7_6 = new import17.NgSwitchCase(this._appEl_7.vcRef, this._TemplateRef_7_5, this._NgSwitch_5_3);
        this._text_8 = this.renderer.createText(this._el_5, '\n                ', null);
        this._anchor_9 = this.renderer.createTemplateAnchor(this._el_5, null);
        this._appEl_9 = new import2.AppElement(9, 5, this, this._anchor_9);
        this._TemplateRef_9_5 = new import14.TemplateRef_(this._appEl_9, viewFactory_Survey3);
        this._NgSwitchCase_9_6 = new import17.NgSwitchCase(this._appEl_9.vcRef, this._TemplateRef_9_5, this._NgSwitch_5_3);
        this._text_10 = this.renderer.createText(this._el_5, '\n            ', null);
        this._text_11 = this.renderer.createText(this._el_0, '\n\n            ', null);
        this._anchor_12 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_12 = new import2.AppElement(12, 0, this, this._anchor_12);
        this._TemplateRef_12_5 = new import14.TemplateRef_(this._appEl_12, viewFactory_Survey5);
        this._NgIf_12_6 = new import13.NgIf(this._appEl_12.vcRef, this._TemplateRef_12_5);
        this._text_13 = this.renderer.createText(this._el_0, '\n        ', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
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
        ], [], []);
        return null;
    };
    _View_Survey1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import14.TemplateRef) && (7 === requestNodeIndex))) {
            return this._TemplateRef_7_5;
        }
        if (((token === import17.NgSwitchCase) && (7 === requestNodeIndex))) {
            return this._NgSwitchCase_7_6;
        }
        if (((token === import14.TemplateRef) && (9 === requestNodeIndex))) {
            return this._TemplateRef_9_5;
        }
        if (((token === import17.NgSwitchCase) && (9 === requestNodeIndex))) {
            return this._NgSwitchCase_9_6;
        }
        if (((token === import17.NgSwitch) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 10)))) {
            return this._NgSwitch_5_3;
        }
        if (((token === import14.TemplateRef) && (12 === requestNodeIndex))) {
            return this._TemplateRef_12_5;
        }
        if (((token === import13.NgIf) && (12 === requestNodeIndex))) {
            return this._NgIf_12_6;
        }
        return notFoundResult;
    };
    _View_Survey1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_1 = this.context.$implicit.controlType;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this._NgSwitch_5_3.ngSwitch = currVal_1;
            this._expr_1 = currVal_1;
        }
        var currVal_2 = 'textbox';
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this._NgSwitchCase_7_6.ngSwitchCase = currVal_2;
            this._expr_2 = currVal_2;
        }
        var currVal_3 = 'dropdown';
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this._NgSwitchCase_9_6.ngSwitchCase = currVal_3;
            this._expr_3 = currVal_3;
        }
        var currVal_4 = !this.parent.context.form.controls[this.context.$implicit.key].valid;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this._NgIf_12_6.ngIf = currVal_4;
            this._expr_4 = currVal_4;
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_0 = import4.interpolate(1, '', this.context.$implicit.text, '');
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setText(this._text_3, currVal_0);
            this._expr_0 = currVal_0;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_Survey1;
}(import1.AppView));
function viewFactory_Survey1(viewUtils, parentInjector, declarationEl) {
    return new _View_Survey1(viewUtils, parentInjector, declarationEl);
}
var _View_Survey2 = (function (_super) {
    __extends(_View_Survey2, _super);
    function _View_Survey2(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Survey2, renderType_Survey, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_Survey2.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this._el_1 = this.renderer.createElement(this._el_0, 'input', null);
        this._DefaultValueAccessor_1_3 = new import18.DefaultValueAccessor(this.renderer, new import20.ElementRef(this._el_1));
        this._NG_VALUE_ACCESSOR_1_4 = [this._DefaultValueAccessor_1_3];
        this._FormControlName_1_5 = new import19.FormControlName(this.parent.parent._ControlContainer_2_4, null, null, this._NG_VALUE_ACCESSOR_1_4);
        this._NgControl_1_6 = this._FormControlName_1_5;
        this._NgControlStatus_1_7 = new import11.NgControlStatus(this._NgControl_1_6);
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_1, 'input', this.eventHandler(this._handle_input_1_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_1, 'blur', this.eventHandler(this._handle_blur_1_1.bind(this)));
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        this._expr_8 = import7.UNINITIALIZED;
        this._expr_9 = import7.UNINITIALIZED;
        this._expr_10 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._el_1
        ], [
            disposable_0,
            disposable_1
        ], []);
        return null;
    };
    _View_Survey2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import18.DefaultValueAccessor) && (1 === requestNodeIndex))) {
            return this._DefaultValueAccessor_1_3;
        }
        if (((token === import21.NG_VALUE_ACCESSOR) && (1 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_1_4;
        }
        if (((token === import19.FormControlName) && (1 === requestNodeIndex))) {
            return this._FormControlName_1_5;
        }
        if (((token === import22.NgControl) && (1 === requestNodeIndex))) {
            return this._NgControl_1_6;
        }
        if (((token === import11.NgControlStatus) && (1 === requestNodeIndex))) {
            return this._NgControlStatus_1_7;
        }
        return notFoundResult;
    };
    _View_Survey2.prototype.detectChangesInternal = function (throwOnChange) {
        var changes = null;
        changes = null;
        var currVal_4 = this.parent.context.$implicit.key;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this._FormControlName_1_5.name = currVal_4;
            if ((changes === null)) {
                (changes = {});
            }
            changes['name'] = new import7.SimpleChange(this._expr_4, currVal_4);
            this._expr_4 = currVal_4;
        }
        if ((changes !== null)) {
            this._FormControlName_1_5.ngOnChanges(changes);
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_2 = import4.interpolate(1, '', this.parent.context.$implicit.type, '');
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementProperty(this._el_1, 'type', currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_3 = import4.interpolate(1, '', this.parent.context.$implicit.key, '');
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementProperty(this._el_1, 'id', currVal_3);
            this._expr_3 = currVal_3;
        }
        var currVal_5 = this._NgControlStatus_1_7.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementClass(this._el_1, 'ng-untouched', currVal_5);
            this._expr_5 = currVal_5;
        }
        var currVal_6 = this._NgControlStatus_1_7.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementClass(this._el_1, 'ng-touched', currVal_6);
            this._expr_6 = currVal_6;
        }
        var currVal_7 = this._NgControlStatus_1_7.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementClass(this._el_1, 'ng-pristine', currVal_7);
            this._expr_7 = currVal_7;
        }
        var currVal_8 = this._NgControlStatus_1_7.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setElementClass(this._el_1, 'ng-dirty', currVal_8);
            this._expr_8 = currVal_8;
        }
        var currVal_9 = this._NgControlStatus_1_7.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setElementClass(this._el_1, 'ng-valid', currVal_9);
            this._expr_9 = currVal_9;
        }
        var currVal_10 = this._NgControlStatus_1_7.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this.renderer.setElementClass(this._el_1, 'ng-invalid', currVal_10);
            this._expr_10 = currVal_10;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_Survey2.prototype.destroyInternal = function () {
        this._FormControlName_1_5.ngOnDestroy();
    };
    _View_Survey2.prototype._handle_input_1_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._DefaultValueAccessor_1_3.onChange($event.target.value) !== false);
        return (true && pd_0);
    };
    _View_Survey2.prototype._handle_blur_1_1 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._DefaultValueAccessor_1_3.onTouched() !== false);
        return (true && pd_0);
    };
    return _View_Survey2;
}(import1.AppView));
function viewFactory_Survey2(viewUtils, parentInjector, declarationEl) {
    return new _View_Survey2(viewUtils, parentInjector, declarationEl);
}
var _View_Survey3 = (function (_super) {
    __extends(_View_Survey3, _super);
    function _View_Survey3(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Survey3, renderType_Survey, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_Survey3.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                    ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'select', null);
        this._SelectControlValueAccessor_2_3 = new import23.SelectControlValueAccessor(this.renderer, new import20.ElementRef(this._el_2));
        this._NG_VALUE_ACCESSOR_2_4 = [this._SelectControlValueAccessor_2_3];
        this._FormControlName_2_5 = new import19.FormControlName(this.parent.parent._ControlContainer_2_4, null, null, this._NG_VALUE_ACCESSOR_2_4);
        this._NgControl_2_6 = this._FormControlName_2_5;
        this._NgControlStatus_2_7 = new import11.NgControlStatus(this._NgControl_2_6);
        this._text_3 = this.renderer.createText(this._el_2, '\n                        ', null);
        this._anchor_4 = this.renderer.createTemplateAnchor(this._el_2, null);
        this._appEl_4 = new import2.AppElement(4, 2, this, this._anchor_4);
        this._TemplateRef_4_5 = new import14.TemplateRef_(this._appEl_4, viewFactory_Survey4);
        this._NgFor_4_6 = new import12.NgFor(this._appEl_4.vcRef, this._TemplateRef_4_5, this.parent.parent.parentInjector.get(import15.IterableDiffers), this.parent.parent.ref);
        this._text_5 = this.renderer.createText(this._el_2, '\n                    ', null);
        this._text_6 = this.renderer.createText(this._el_0, '\n                ', null);
        var disposable_0 = this.renderer.listen(this._el_2, 'change', this.eventHandler(this._handle_change_2_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_2, 'blur', this.eventHandler(this._handle_blur_2_1.bind(this)));
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        this._expr_8 = import7.UNINITIALIZED;
        this._expr_9 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._anchor_4,
            this._text_5,
            this._text_6
        ], [
            disposable_0,
            disposable_1
        ], []);
        return null;
    };
    _View_Survey3.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import14.TemplateRef) && (4 === requestNodeIndex))) {
            return this._TemplateRef_4_5;
        }
        if (((token === import12.NgFor) && (4 === requestNodeIndex))) {
            return this._NgFor_4_6;
        }
        if (((token === import23.SelectControlValueAccessor) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._SelectControlValueAccessor_2_3;
        }
        if (((token === import21.NG_VALUE_ACCESSOR) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._NG_VALUE_ACCESSOR_2_4;
        }
        if (((token === import19.FormControlName) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._FormControlName_2_5;
        }
        if (((token === import22.NgControl) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._NgControl_2_6;
        }
        if (((token === import11.NgControlStatus) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._NgControlStatus_2_7;
        }
        return notFoundResult;
    };
    _View_Survey3.prototype.detectChangesInternal = function (throwOnChange) {
        var changes = null;
        changes = null;
        var currVal_2 = this.parent.context.$implicit.key;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this._FormControlName_2_5.name = currVal_2;
            if ((changes === null)) {
                (changes = {});
            }
            changes['name'] = new import7.SimpleChange(this._expr_2, currVal_2);
            this._expr_2 = currVal_2;
        }
        if ((changes !== null)) {
            this._FormControlName_2_5.ngOnChanges(changes);
        }
        changes = null;
        var currVal_9 = this.parent.context.$implicit.options;
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this._NgFor_4_6.ngForOf = currVal_9;
            if ((changes === null)) {
                (changes = {});
            }
            changes['ngForOf'] = new import7.SimpleChange(this._expr_9, currVal_9);
            this._expr_9 = currVal_9;
        }
        if ((changes !== null)) {
            this._NgFor_4_6.ngOnChanges(changes);
        }
        if (!throwOnChange) {
            this._NgFor_4_6.ngDoCheck();
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_3 = this._NgControlStatus_2_7.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementClass(this._el_2, 'ng-untouched', currVal_3);
            this._expr_3 = currVal_3;
        }
        var currVal_4 = this._NgControlStatus_2_7.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementClass(this._el_2, 'ng-touched', currVal_4);
            this._expr_4 = currVal_4;
        }
        var currVal_5 = this._NgControlStatus_2_7.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementClass(this._el_2, 'ng-pristine', currVal_5);
            this._expr_5 = currVal_5;
        }
        var currVal_6 = this._NgControlStatus_2_7.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementClass(this._el_2, 'ng-dirty', currVal_6);
            this._expr_6 = currVal_6;
        }
        var currVal_7 = this._NgControlStatus_2_7.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementClass(this._el_2, 'ng-valid', currVal_7);
            this._expr_7 = currVal_7;
        }
        var currVal_8 = this._NgControlStatus_2_7.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setElementClass(this._el_2, 'ng-invalid', currVal_8);
            this._expr_8 = currVal_8;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_Survey3.prototype.destroyInternal = function () {
        this._FormControlName_2_5.ngOnDestroy();
    };
    _View_Survey3.prototype._handle_change_2_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._SelectControlValueAccessor_2_3.onChange($event.target.value) !== false);
        return (true && pd_0);
    };
    _View_Survey3.prototype._handle_blur_2_1 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._SelectControlValueAccessor_2_3.onTouched() !== false);
        return (true && pd_0);
    };
    return _View_Survey3;
}(import1.AppView));
function viewFactory_Survey3(viewUtils, parentInjector, declarationEl) {
    return new _View_Survey3(viewUtils, parentInjector, declarationEl);
}
var _View_Survey4 = (function (_super) {
    __extends(_View_Survey4, _super);
    function _View_Survey4(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Survey4, renderType_Survey, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_Survey4.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'option', null);
        this._NgSelectOption_0_3 = new import23.NgSelectOption(new import20.ElementRef(this._el_0), this.renderer, this.parent._SelectControlValueAccessor_2_3);
        this._NgSelectMultipleOption_0_4 = new import24.NgSelectMultipleOption(new import20.ElementRef(this._el_0), this.renderer, null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    _View_Survey4.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import23.NgSelectOption) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._NgSelectOption_0_3;
        }
        if (((token === import24.NgSelectMultipleOption) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._NgSelectMultipleOption_0_4;
        }
        return notFoundResult;
    };
    _View_Survey4.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0 = this.context.$implicit.key;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._NgSelectOption_0_3.value = currVal_0;
            this._expr_0 = currVal_0;
        }
        var currVal_1 = this.context.$implicit.key;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this._NgSelectMultipleOption_0_4.value = currVal_1;
            this._expr_1 = currVal_1;
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_2 = import4.interpolate(1, '', this.context.$implicit.value, '');
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_Survey4.prototype.destroyInternal = function () {
        this._NgSelectOption_0_3.ngOnDestroy();
        this._NgSelectMultipleOption_0_4.ngOnDestroy();
    };
    return _View_Survey4;
}(import1.AppView));
function viewFactory_Survey4(viewUtils, parentInjector, declarationEl) {
    return new _View_Survey4(viewUtils, parentInjector, declarationEl);
}
var _View_Survey5 = (function (_super) {
    __extends(_View_Survey5, _super);
    function _View_Survey5(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Survey5, renderType_Survey, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_Survey5.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'errorMessage');
        this._text_1 = this.renderer.createText(this._el_0, '*required', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    return _View_Survey5;
}(import1.AppView));
function viewFactory_Survey5(viewUtils, parentInjector, declarationEl) {
    return new _View_Survey5(viewUtils, parentInjector, declarationEl);
}
var _View_Survey6 = (function (_super) {
    __extends(_View_Survey6, _super);
    function _View_Survey6(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Survey6, renderType_Survey, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_Survey6.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this._el_1 = this.renderer.createElement(this._el_0, 'strong', null);
        this._text_2 = this.renderer.createText(this._el_1, 'The form contains the following values', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._el_1,
            this._text_2
        ], [], []);
        return null;
    };
    return _View_Survey6;
}(import1.AppView));
function viewFactory_Survey6(viewUtils, parentInjector, declarationEl) {
    return new _View_Survey6(viewUtils, parentInjector, declarationEl);
}
