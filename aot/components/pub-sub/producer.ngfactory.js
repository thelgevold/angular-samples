import * as import0 from '../../../components/pub-sub/producer';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view_utils';
import * as import3 from '@angular/core/src/linker/view';
import * as import5 from '@angular/core/src/linker/element';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '../../../components/pub-sub/pub-sub-service';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory';
import * as import12 from '../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import13 from '../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import14 from '@angular/core/src/linker/element_ref';
import * as import15 from '@angular/forms/src/directives/default_value_accessor';
import * as import16 from '@angular/forms/src/directives/control_value_accessor';
import * as import17 from '@angular/forms/src/directives/ng_model';
import * as import18 from '@angular/forms/src/directives/ng_control';
import * as import19 from '@angular/forms/src/directives/ng_control_status';
export class Wrapper_Producer {
    constructor(p0) {
        this.changed = false;
        this.context = new import0.Producer(p0);
        this._expr_0 = import1.UNINITIALIZED;
        this._expr_1 = import1.UNINITIALIZED;
    }
    check_firstName(currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this.changed = true;
            this.context.firstName = currValue;
            this._expr_0 = currValue;
        }
    }
    check_lastName(currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._expr_1, currValue))) {
            this.changed = true;
            this.context.lastName = currValue;
            this._expr_1 = currValue;
        }
    }
    detectChangesInInputProps(view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    }
    detectChangesInHostProps(view, el, throwOnChange) {
    }
}
var renderType_Producer_Host = null;
class _View_Producer_Host0 extends import3.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_Producer_Host0, renderType_Producer_Host, import7.ViewType.HOST, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import2.selectOrCreateRenderHostElement(this.renderer, 'producer', import2.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import5.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_Producer0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Producer_0_4 = new Wrapper_Producer(this.parentInjector.get(import8.PubSubService));
        this._appEl_0.initComponent(this._Producer_0_4.context, [], compView_0);
        compView_0.create(this._Producer_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.Producer) && (0 === requestNodeIndex))) {
            return this._Producer_0_4.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._Producer_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._Producer_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
}
function viewFactory_Producer_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Producer_Host === null)) {
        (renderType_Producer_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_Producer_Host0(viewUtils, parentInjector, declarationEl);
}
export const ProducerNgFactory = new import10.ComponentFactory('producer', viewFactory_Producer_Host0, import0.Producer);
const styles_Producer = [];
var renderType_Producer = null;
class _View_Producer0 extends import3.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_Producer0, renderType_Producer, import7.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = import2.createRenderElement(this.renderer, parentRenderNode, 'div', import2.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, 'First Name', null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_3 = import2.createRenderElement(this.renderer, parentRenderNode, 'input', import2.EMPTY_INLINE_ARRAY, null);
        this._DefaultValueAccessor_3_3 = new import11.Wrapper_DefaultValueAccessor(this.renderer, new import14.ElementRef(this._el_3));
        this._NG_VALUE_ACCESSOR_3_4 = [this._DefaultValueAccessor_3_3.context];
        this._NgModel_3_5 = new import12.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_3_4);
        this._NgControl_3_6 = this._NgModel_3_5.context;
        this._NgControlStatus_3_7 = new import13.Wrapper_NgControlStatus(this._NgControl_3_6);
        this._text_4 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_5 = import2.createRenderElement(this.renderer, parentRenderNode, 'div', import2.EMPTY_INLINE_ARRAY, null);
        this._text_6 = this.renderer.createText(this._el_5, 'Last Name', null);
        this._text_7 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_8 = import2.createRenderElement(this.renderer, parentRenderNode, 'input', import2.EMPTY_INLINE_ARRAY, null);
        this._DefaultValueAccessor_8_3 = new import11.Wrapper_DefaultValueAccessor(this.renderer, new import14.ElementRef(this._el_8));
        this._NG_VALUE_ACCESSOR_8_4 = [this._DefaultValueAccessor_8_3.context];
        this._NgModel_8_5 = new import12.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_8_4);
        this._NgControl_8_6 = this._NgModel_8_5.context;
        this._NgControlStatus_8_7 = new import13.Wrapper_NgControlStatus(this._NgControl_8_6);
        this._text_9 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_10 = import2.createRenderElement(this.renderer, parentRenderNode, 'div', new import2.InlineArray2(2, 'style', 'margin-top: 10px;'), null);
        this._text_11 = this.renderer.createText(this._el_10, '\n    ', null);
        this._el_12 = import2.createRenderElement(this.renderer, this._el_10, 'button', import2.EMPTY_INLINE_ARRAY, null);
        this._text_13 = this.renderer.createText(this._el_12, 'Create Customer', null);
        this._text_14 = this.renderer.createText(this._el_10, '\n', null);
        var disposable_0 = this.renderer.listen(this._el_3, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_3_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_3, 'input', this.eventHandler(this._handle_input_3_1.bind(this)));
        var disposable_2 = this.renderer.listen(this._el_3, 'blur', this.eventHandler(this._handle_blur_3_2.bind(this)));
        const subscription_0 = this._NgModel_3_5.context.update.subscribe(this.eventHandler(this._handle_ngModelChange_3_0.bind(this)));
        var disposable_3 = this.renderer.listen(this._el_8, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_8_0.bind(this)));
        var disposable_4 = this.renderer.listen(this._el_8, 'input', this.eventHandler(this._handle_input_8_1.bind(this)));
        var disposable_5 = this.renderer.listen(this._el_8, 'blur', this.eventHandler(this._handle_blur_8_2.bind(this)));
        const subscription_1 = this._NgModel_8_5.context.update.subscribe(this.eventHandler(this._handle_ngModelChange_8_0.bind(this)));
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
        if (((token === import15.DefaultValueAccessor) && (3 === requestNodeIndex))) {
            return this._DefaultValueAccessor_3_3.context;
        }
        if (((token === import16.NG_VALUE_ACCESSOR) && (3 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_3_4;
        }
        if (((token === import17.NgModel) && (3 === requestNodeIndex))) {
            return this._NgModel_3_5.context;
        }
        if (((token === import18.NgControl) && (3 === requestNodeIndex))) {
            return this._NgControl_3_6;
        }
        if (((token === import19.NgControlStatus) && (3 === requestNodeIndex))) {
            return this._NgControlStatus_3_7.context;
        }
        if (((token === import15.DefaultValueAccessor) && (8 === requestNodeIndex))) {
            return this._DefaultValueAccessor_8_3.context;
        }
        if (((token === import16.NG_VALUE_ACCESSOR) && (8 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_8_4;
        }
        if (((token === import17.NgModel) && (8 === requestNodeIndex))) {
            return this._NgModel_8_5.context;
        }
        if (((token === import18.NgControl) && (8 === requestNodeIndex))) {
            return this._NgControl_8_6;
        }
        if (((token === import19.NgControlStatus) && (8 === requestNodeIndex))) {
            return this._NgControlStatus_8_7.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._DefaultValueAccessor_3_3.detectChangesInInputProps(this, this._el_3, throwOnChange);
        const currVal_3_1_0 = this.context.firstName;
        this._NgModel_3_5.check_model(currVal_3_1_0, throwOnChange, false);
        this._NgModel_3_5.detectChangesInInputProps(this, this._el_3, throwOnChange);
        this._NgControlStatus_3_7.detectChangesInInputProps(this, this._el_3, throwOnChange);
        this._DefaultValueAccessor_8_3.detectChangesInInputProps(this, this._el_8, throwOnChange);
        const currVal_8_1_0 = this.context.lastName;
        this._NgModel_8_5.check_model(currVal_8_1_0, throwOnChange, false);
        this._NgModel_8_5.detectChangesInInputProps(this, this._el_8, throwOnChange);
        this._NgControlStatus_8_7.detectChangesInInputProps(this, this._el_8, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._DefaultValueAccessor_3_3.detectChangesInHostProps(this, this._el_3, throwOnChange);
        this._NgModel_3_5.detectChangesInHostProps(this, this._el_3, throwOnChange);
        this._NgControlStatus_3_7.detectChangesInHostProps(this, this._el_3, throwOnChange);
        this._DefaultValueAccessor_8_3.detectChangesInHostProps(this, this._el_8, throwOnChange);
        this._NgModel_8_5.detectChangesInHostProps(this, this._el_8, throwOnChange);
        this._NgControlStatus_8_7.detectChangesInHostProps(this, this._el_8, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
    destroyInternal() {
        this._NgModel_3_5.context.ngOnDestroy();
        this._NgModel_8_5.context.ngOnDestroy();
    }
    _handle_ngModelChange_3_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_3_0 = ((this.context.firstName = $event) !== false);
        return (true && pd_3_0);
    }
    _handle_input_3_1($event) {
        this.markPathToRootAsCheckOnce();
        const pd_3_0 = (this._DefaultValueAccessor_3_3.context.onChange($event.target.value) !== false);
        return (true && pd_3_0);
    }
    _handle_blur_3_2($event) {
        this.markPathToRootAsCheckOnce();
        const pd_3_0 = (this._DefaultValueAccessor_3_3.context.onTouched() !== false);
        return (true && pd_3_0);
    }
    _handle_ngModelChange_8_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_8_0 = ((this.context.lastName = $event) !== false);
        return (true && pd_8_0);
    }
    _handle_input_8_1($event) {
        this.markPathToRootAsCheckOnce();
        const pd_8_0 = (this._DefaultValueAccessor_8_3.context.onChange($event.target.value) !== false);
        return (true && pd_8_0);
    }
    _handle_blur_8_2($event) {
        this.markPathToRootAsCheckOnce();
        const pd_8_0 = (this._DefaultValueAccessor_8_3.context.onTouched() !== false);
        return (true && pd_8_0);
    }
    _handle_click_12_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_12_0 = (this.context.createCustomer() !== false);
        return (true && pd_12_0);
    }
}
export function viewFactory_Producer0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Producer === null)) {
        (renderType_Producer = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, styles_Producer, {}));
    }
    return new _View_Producer0(viewUtils, parentInjector, declarationEl);
}
