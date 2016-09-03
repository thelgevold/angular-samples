import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../components/pub-sub/producer';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '../../../components/pub-sub/pub-sub-service';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '@angular/forms/src/directives/default_value_accessor';
import * as import12 from '@angular/forms/src/directives/ng_model';
import * as import13 from '@angular/forms/src/directives/ng_control_status';
import * as import14 from '@angular/core/src/linker/element_ref';
import * as import15 from '@angular/forms/src/directives/control_value_accessor';
import * as import16 from '@angular/forms/src/directives/ng_control';
var renderType_Producer_Host = null;
class _View_Producer_Host0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_Producer_Host0, renderType_Producer_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('producer', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_Producer0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Producer_0_4 = new import3.Producer(this.parentInjector.get(import8.PubSubService));
        this._appEl_0.initComponent(this._Producer_0_4, [], compView_0);
        compView_0.create(this._Producer_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import3.Producer) && (0 === requestNodeIndex))) {
            return this._Producer_0_4;
        }
        return notFoundResult;
    }
}
function viewFactory_Producer_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Producer_Host === null)) {
        (renderType_Producer_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_Producer_Host0(viewUtils, parentInjector, declarationEl);
}
export const ProducerNgFactory = new import10.ComponentFactory('producer', viewFactory_Producer_Host0, import3.Producer);
const styles_Producer = [];
var renderType_Producer = null;
class _View_Producer0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_Producer0, renderType_Producer, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'div', null);
        this._text_1 = this.renderer.createText(this._el_0, 'First Name', null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_3 = this.renderer.createElement(parentRenderNode, 'input', null);
        this._DefaultValueAccessor_3_3 = new import11.DefaultValueAccessor(this.renderer, new import14.ElementRef(this._el_3));
        this._NG_VALUE_ACCESSOR_3_4 = [this._DefaultValueAccessor_3_3];
        this._NgModel_3_5 = new import12.NgModel(null, null, null, this._NG_VALUE_ACCESSOR_3_4);
        this._NgControl_3_6 = this._NgModel_3_5;
        this._NgControlStatus_3_7 = new import13.NgControlStatus(this._NgControl_3_6);
        this._text_4 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_5 = this.renderer.createElement(parentRenderNode, 'div', null);
        this._text_6 = this.renderer.createText(this._el_5, 'Last Name', null);
        this._text_7 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_8 = this.renderer.createElement(parentRenderNode, 'input', null);
        this._DefaultValueAccessor_8_3 = new import11.DefaultValueAccessor(this.renderer, new import14.ElementRef(this._el_8));
        this._NG_VALUE_ACCESSOR_8_4 = [this._DefaultValueAccessor_8_3];
        this._NgModel_8_5 = new import12.NgModel(null, null, null, this._NG_VALUE_ACCESSOR_8_4);
        this._NgControl_8_6 = this._NgModel_8_5;
        this._NgControlStatus_8_7 = new import13.NgControlStatus(this._NgControl_8_6);
        this._text_9 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_10 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_10, 'style', 'margin-top: 10px;');
        this._text_11 = this.renderer.createText(this._el_10, '\n    ', null);
        this._el_12 = this.renderer.createElement(this._el_10, 'button', null);
        this._text_13 = this.renderer.createText(this._el_12, 'Create Customer', null);
        this._text_14 = this.renderer.createText(this._el_10, '\n', null);
        var disposable_0 = this.renderer.listen(this._el_3, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_3_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_3, 'input', this.eventHandler(this._handle_input_3_1.bind(this)));
        var disposable_2 = this.renderer.listen(this._el_3, 'blur', this.eventHandler(this._handle_blur_3_2.bind(this)));
        this._expr_3 = import7.UNINITIALIZED;
        const subscription_0 = this._NgModel_3_5.update.subscribe(this.eventHandler(this._handle_ngModelChange_3_0.bind(this)));
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        this._expr_8 = import7.UNINITIALIZED;
        this._expr_9 = import7.UNINITIALIZED;
        var disposable_3 = this.renderer.listen(this._el_8, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_8_0.bind(this)));
        var disposable_4 = this.renderer.listen(this._el_8, 'input', this.eventHandler(this._handle_input_8_1.bind(this)));
        var disposable_5 = this.renderer.listen(this._el_8, 'blur', this.eventHandler(this._handle_blur_8_2.bind(this)));
        this._expr_13 = import7.UNINITIALIZED;
        const subscription_1 = this._NgModel_8_5.update.subscribe(this.eventHandler(this._handle_ngModelChange_8_0.bind(this)));
        this._expr_14 = import7.UNINITIALIZED;
        this._expr_15 = import7.UNINITIALIZED;
        this._expr_16 = import7.UNINITIALIZED;
        this._expr_17 = import7.UNINITIALIZED;
        this._expr_18 = import7.UNINITIALIZED;
        this._expr_19 = import7.UNINITIALIZED;
        var disposable_6 = this.renderer.listen(this._el_12, 'click', this.eventHandler(this._handle_click_12_0.bind(this)));
        this.init([], [
            this._el_0,
            this._text_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._text_14
        ], [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3,
            disposable_4,
            disposable_5,
            disposable_6
        ], [
            subscription_0,
            subscription_1
        ]);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import11.DefaultValueAccessor) && (3 === requestNodeIndex))) {
            return this._DefaultValueAccessor_3_3;
        }
        if (((token === import15.NG_VALUE_ACCESSOR) && (3 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_3_4;
        }
        if (((token === import12.NgModel) && (3 === requestNodeIndex))) {
            return this._NgModel_3_5;
        }
        if (((token === import16.NgControl) && (3 === requestNodeIndex))) {
            return this._NgControl_3_6;
        }
        if (((token === import13.NgControlStatus) && (3 === requestNodeIndex))) {
            return this._NgControlStatus_3_7;
        }
        if (((token === import11.DefaultValueAccessor) && (8 === requestNodeIndex))) {
            return this._DefaultValueAccessor_8_3;
        }
        if (((token === import15.NG_VALUE_ACCESSOR) && (8 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_8_4;
        }
        if (((token === import12.NgModel) && (8 === requestNodeIndex))) {
            return this._NgModel_8_5;
        }
        if (((token === import16.NgControl) && (8 === requestNodeIndex))) {
            return this._NgControl_8_6;
        }
        if (((token === import13.NgControlStatus) && (8 === requestNodeIndex))) {
            return this._NgControlStatus_8_7;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        var changes = null;
        changes = null;
        const currVal_3 = this.context.firstName;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this._NgModel_3_5.model = currVal_3;
            if ((changes === null)) {
                (changes = {});
            }
            changes['model'] = new import7.SimpleChange(this._expr_3, currVal_3);
            this._expr_3 = currVal_3;
        }
        if ((changes !== null)) {
            this._NgModel_3_5.ngOnChanges(changes);
        }
        changes = null;
        const currVal_13 = this.context.lastName;
        if (import4.checkBinding(throwOnChange, this._expr_13, currVal_13)) {
            this._NgModel_8_5.model = currVal_13;
            if ((changes === null)) {
                (changes = {});
            }
            changes['model'] = new import7.SimpleChange(this._expr_13, currVal_13);
            this._expr_13 = currVal_13;
        }
        if ((changes !== null)) {
            this._NgModel_8_5.ngOnChanges(changes);
        }
        this.detectContentChildrenChanges(throwOnChange);
        const currVal_4 = this._NgControlStatus_3_7.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementClass(this._el_3, 'ng-untouched', currVal_4);
            this._expr_4 = currVal_4;
        }
        const currVal_5 = this._NgControlStatus_3_7.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementClass(this._el_3, 'ng-touched', currVal_5);
            this._expr_5 = currVal_5;
        }
        const currVal_6 = this._NgControlStatus_3_7.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementClass(this._el_3, 'ng-pristine', currVal_6);
            this._expr_6 = currVal_6;
        }
        const currVal_7 = this._NgControlStatus_3_7.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementClass(this._el_3, 'ng-dirty', currVal_7);
            this._expr_7 = currVal_7;
        }
        const currVal_8 = this._NgControlStatus_3_7.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setElementClass(this._el_3, 'ng-valid', currVal_8);
            this._expr_8 = currVal_8;
        }
        const currVal_9 = this._NgControlStatus_3_7.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setElementClass(this._el_3, 'ng-invalid', currVal_9);
            this._expr_9 = currVal_9;
        }
        const currVal_14 = this._NgControlStatus_8_7.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_14, currVal_14)) {
            this.renderer.setElementClass(this._el_8, 'ng-untouched', currVal_14);
            this._expr_14 = currVal_14;
        }
        const currVal_15 = this._NgControlStatus_8_7.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_15, currVal_15)) {
            this.renderer.setElementClass(this._el_8, 'ng-touched', currVal_15);
            this._expr_15 = currVal_15;
        }
        const currVal_16 = this._NgControlStatus_8_7.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_16, currVal_16)) {
            this.renderer.setElementClass(this._el_8, 'ng-pristine', currVal_16);
            this._expr_16 = currVal_16;
        }
        const currVal_17 = this._NgControlStatus_8_7.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_17, currVal_17)) {
            this.renderer.setElementClass(this._el_8, 'ng-dirty', currVal_17);
            this._expr_17 = currVal_17;
        }
        const currVal_18 = this._NgControlStatus_8_7.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_18, currVal_18)) {
            this.renderer.setElementClass(this._el_8, 'ng-valid', currVal_18);
            this._expr_18 = currVal_18;
        }
        const currVal_19 = this._NgControlStatus_8_7.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_19, currVal_19)) {
            this.renderer.setElementClass(this._el_8, 'ng-invalid', currVal_19);
            this._expr_19 = currVal_19;
        }
        this.detectViewChildrenChanges(throwOnChange);
    }
    destroyInternal() {
        this._NgModel_3_5.ngOnDestroy();
        this._NgModel_8_5.ngOnDestroy();
    }
    _handle_ngModelChange_3_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = ((this.context.firstName = $event) !== false);
        return (true && pd_0);
    }
    _handle_input_3_1($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this._DefaultValueAccessor_3_3.onChange($event.target.value) !== false);
        return (true && pd_0);
    }
    _handle_blur_3_2($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this._DefaultValueAccessor_3_3.onTouched() !== false);
        return (true && pd_0);
    }
    _handle_ngModelChange_8_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = ((this.context.lastName = $event) !== false);
        return (true && pd_0);
    }
    _handle_input_8_1($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this._DefaultValueAccessor_8_3.onChange($event.target.value) !== false);
        return (true && pd_0);
    }
    _handle_blur_8_2($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this._DefaultValueAccessor_8_3.onTouched() !== false);
        return (true && pd_0);
    }
    _handle_click_12_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this.context.createCustomer() !== false);
        return (true && pd_0);
    }
}
export function viewFactory_Producer0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Producer === null)) {
        (renderType_Producer = viewUtils.createRenderComponentType('/Users/tor/Development/angular-2-samples/components/pub-sub/producer.html', 0, import9.ViewEncapsulation.None, styles_Producer, {}));
    }
    return new _View_Producer0(viewUtils, parentInjector, declarationEl);
}
