import * as import0 from '../../../components/pub-sub/producer';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '../../../components/pub-sub/pub-sub-service';
import * as import10 from '../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory';
import * as import11 from '../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import12 from '../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import13 from '@angular/core/src/linker/element_ref';
import * as import14 from '@angular/forms/src/directives/default_value_accessor';
import * as import15 from '@angular/forms/src/directives/control_value_accessor';
import * as import16 from '@angular/forms/src/directives/ng_model';
import * as import17 from '@angular/forms/src/directives/ng_control';
import * as import18 from '@angular/forms/src/directives/ng_control_status';
export class Wrapper_Producer {
    constructor(p0) {
        this._changed = false;
        this.context = new import0.Producer(p0);
        this._expr_0 = import1.UNINITIALIZED;
        this._expr_1 = import1.UNINITIALIZED;
    }
    ngOnDetach(view, componentView, el) {
    }
    ngOnDestroy() {
    }
    check_firstName(currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.firstName = currValue;
            this._expr_0 = currValue;
        }
    }
    check_lastName(currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context.lastName = currValue;
            this._expr_1 = currValue;
        }
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
var renderType_Producer_Host = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, [], {});
class View_Producer_Host0 extends import2.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_Producer_Host0, renderType_Producer_Host, import6.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'producer', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_Producer0(this.viewUtils, this, 0, this._el_0);
        this._Producer_0_3 = new Wrapper_Producer(this.injectorGet(import9.PubSubService, this.parentIndex));
        this.compView_0.create(this._Producer_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import8.ComponentRef_(0, this, this._el_0, this._Producer_0_3.context);
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.Producer) && (0 === requestNodeIndex))) {
            return this._Producer_0_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._Producer_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    }
    destroyInternal() {
        this.compView_0.destroy();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
export const ProducerNgFactory = new import8.ComponentFactory('producer', View_Producer_Host0, import0.Producer);
const styles_Producer = [];
var renderType_Producer = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, styles_Producer, {});
export class View_Producer0 extends import2.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_Producer0, renderType_Producer, import6.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, 'First Name', null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_3 = import3.createRenderElement(this.renderer, parentRenderNode, 'input', import3.EMPTY_INLINE_ARRAY, null);
        this._DefaultValueAccessor_3_3 = new import10.Wrapper_DefaultValueAccessor(this.renderer, new import13.ElementRef(this._el_3));
        this._NG_VALUE_ACCESSOR_3_4 = [this._DefaultValueAccessor_3_3.context];
        this._NgModel_3_5 = new import11.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_3_4);
        this._NgControl_3_6 = this._NgModel_3_5.context;
        this._NgControlStatus_3_7 = new import12.Wrapper_NgControlStatus(this._NgControl_3_6);
        this._text_4 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_5 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_6 = this.renderer.createText(this._el_5, 'Last Name', null);
        this._text_7 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_8 = import3.createRenderElement(this.renderer, parentRenderNode, 'input', import3.EMPTY_INLINE_ARRAY, null);
        this._DefaultValueAccessor_8_3 = new import10.Wrapper_DefaultValueAccessor(this.renderer, new import13.ElementRef(this._el_8));
        this._NG_VALUE_ACCESSOR_8_4 = [this._DefaultValueAccessor_8_3.context];
        this._NgModel_8_5 = new import11.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_8_4);
        this._NgControl_8_6 = this._NgModel_8_5.context;
        this._NgControlStatus_8_7 = new import12.Wrapper_NgControlStatus(this._NgControl_8_6);
        this._text_9 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_10 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'style', 'margin-top: 10px;'), null);
        this._text_11 = this.renderer.createText(this._el_10, '\n    ', null);
        this._el_12 = import3.createRenderElement(this.renderer, this._el_10, 'button', import3.EMPTY_INLINE_ARRAY, null);
        this._text_13 = this.renderer.createText(this._el_12, 'Create Customer', null);
        this._text_14 = this.renderer.createText(this._el_10, '\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_3, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_3));
        this._NgModel_3_5.subscribe(this, this.eventHandler(this.handleEvent_3), true);
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_8, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_8));
        this._NgModel_8_5.subscribe(this, this.eventHandler(this.handleEvent_8), true);
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_12, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_12));
        this.init(null, (this.renderer.directRenderer ? null : [
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
        ]), [
            disposable_0,
            disposable_1,
            disposable_2
        ]);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import14.DefaultValueAccessor) && (3 === requestNodeIndex))) {
            return this._DefaultValueAccessor_3_3.context;
        }
        if (((token === import15.NG_VALUE_ACCESSOR) && (3 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_3_4;
        }
        if (((token === import16.NgModel) && (3 === requestNodeIndex))) {
            return this._NgModel_3_5.context;
        }
        if (((token === import17.NgControl) && (3 === requestNodeIndex))) {
            return this._NgControl_3_6;
        }
        if (((token === import18.NgControlStatus) && (3 === requestNodeIndex))) {
            return this._NgControlStatus_3_7.context;
        }
        if (((token === import14.DefaultValueAccessor) && (8 === requestNodeIndex))) {
            return this._DefaultValueAccessor_8_3.context;
        }
        if (((token === import15.NG_VALUE_ACCESSOR) && (8 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_8_4;
        }
        if (((token === import16.NgModel) && (8 === requestNodeIndex))) {
            return this._NgModel_8_5.context;
        }
        if (((token === import17.NgControl) && (8 === requestNodeIndex))) {
            return this._NgControl_8_6;
        }
        if (((token === import18.NgControlStatus) && (8 === requestNodeIndex))) {
            return this._NgControlStatus_8_7.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._DefaultValueAccessor_3_3.ngDoCheck(this, this._el_3, throwOnChange);
        const currVal_3_1_0 = this.context.firstName;
        this._NgModel_3_5.check_model(currVal_3_1_0, throwOnChange, false);
        this._NgModel_3_5.ngDoCheck(this, this._el_3, throwOnChange);
        this._NgControlStatus_3_7.ngDoCheck(this, this._el_3, throwOnChange);
        this._DefaultValueAccessor_8_3.ngDoCheck(this, this._el_8, throwOnChange);
        const currVal_8_1_0 = this.context.lastName;
        this._NgModel_8_5.check_model(currVal_8_1_0, throwOnChange, false);
        this._NgModel_8_5.ngDoCheck(this, this._el_8, throwOnChange);
        this._NgControlStatus_8_7.ngDoCheck(this, this._el_8, throwOnChange);
        this._NgControlStatus_3_7.checkHost(this, this, this._el_3, throwOnChange);
        this._NgControlStatus_8_7.checkHost(this, this, this._el_8, throwOnChange);
    }
    destroyInternal() {
        this._NgModel_3_5.ngOnDestroy();
        this._NgModel_8_5.ngOnDestroy();
    }
    handleEvent_3(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_3_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            const pd_sub_0 = ((this.context.firstName = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    }
    handleEvent_8(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_8_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            const pd_sub_0 = ((this.context.lastName = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    }
    handleEvent_12(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            const pd_sub_0 = (this.context.createCustomer() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    }
}
