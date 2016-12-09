import * as import0 from '../../../components/log-tail/log-demo';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '../../../components/log-tail/store';
import * as import6 from '../../../components/log-tail/log-tail-service';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/constants';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '@angular/http/src/http';
import * as import11 from '../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory';
import * as import12 from '../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import13 from '../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import14 from '../../node_modules/@angular/forms/src/directives/number_value_accessor.ngfactory';
import * as import15 from '@angular/core/src/linker/view_container';
import * as import16 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import17 from '@angular/common/src/pipes/async_pipe';
import * as import18 from '@angular/core/src/linker/element_ref';
import * as import19 from '@angular/core/src/linker/template_ref';
import * as import20 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import21 from '@angular/forms/src/directives/default_value_accessor';
import * as import22 from '@angular/forms/src/directives/control_value_accessor';
import * as import23 from '@angular/forms/src/directives/ng_model';
import * as import24 from '@angular/forms/src/directives/ng_control';
import * as import25 from '@angular/forms/src/directives/ng_control_status';
import * as import26 from '@angular/forms/src/directives/number_value_accessor';
import * as import27 from '@angular/common/src/directives/ng_for';
import * as import28 from '@angular/core/src/change_detection/change_detection_util';
export class Wrapper_LogDemo {
    constructor(p0, p1) {
        this._changed = false;
        this.context = new import0.LogDemo(p0, p1);
    }
    ngOnDetach(view, componentView, el) {
    }
    ngOnDestroy() {
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
var renderType_LogDemo_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
class View_LogDemo_Host0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_LogDemo_Host0, renderType_LogDemo_Host, import7.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import8.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'ng-component', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_LogDemo0(this.viewUtils, this, 0, this._el_0);
        this._Store_0_3 = new import5.Store();
        this._LogTailService_0_4 = new import6.LogTailService(this.injectorGet(import10.Http, this.parentIndex));
        this._LogDemo_0_5 = new Wrapper_LogDemo(this._Store_0_3, this._LogTailService_0_4);
        this.compView_0.create(this._LogDemo_0_5.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import9.ComponentRef_(0, this, this._el_0, this._LogDemo_0_5.context);
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import5.Store) && (0 === requestNodeIndex))) {
            return this._Store_0_3;
        }
        if (((token === import6.LogTailService) && (0 === requestNodeIndex))) {
            return this._LogTailService_0_4;
        }
        if (((token === import0.LogDemo) && (0 === requestNodeIndex))) {
            return this._LogDemo_0_5.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._LogDemo_0_5.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    }
    destroyInternal() {
        this.compView_0.destroy();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
export const LogDemoNgFactory = new import9.ComponentFactory('ng-component', View_LogDemo_Host0, import0.LogDemo);
const styles_LogDemo = [];
var renderType_LogDemo = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_LogDemo, {});
export class View_LogDemo0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_LogDemo0, renderType_LogDemo, import7.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import8.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'h1', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, 'Error log state managed using Redux', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_0, 'button', new import3.InlineArray2(2, 'style', 'margin-bottom: 10px;'), null);
        this._text_6 = this.renderer.createText(this._el_5, 'Add new log entry', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_0, 'input', new import3.InlineArray4(4, 'placeholder', 'message', 'type', 'text'), null);
        this._DefaultValueAccessor_8_3 = new import11.Wrapper_DefaultValueAccessor(this.renderer, new import18.ElementRef(this._el_8));
        this._NG_VALUE_ACCESSOR_8_4 = [this._DefaultValueAccessor_8_3.context];
        this._NgModel_8_5 = new import12.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_8_4);
        this._NgControl_8_6 = this._NgModel_8_5.context;
        this._NgControlStatus_8_7 = new import13.Wrapper_NgControlStatus(this._NgControl_8_6);
        this._text_9 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_0, 'input', new import3.InlineArray4(4, 'placeholder', 'severity', 'type', 'number'), null);
        this._DefaultValueAccessor_10_3 = new import11.Wrapper_DefaultValueAccessor(this.renderer, new import18.ElementRef(this._el_10));
        this._NumberValueAccessor_10_4 = new import14.Wrapper_NumberValueAccessor(this.renderer, new import18.ElementRef(this._el_10));
        this._NG_VALUE_ACCESSOR_10_5 = [
            this._DefaultValueAccessor_10_3.context,
            this._NumberValueAccessor_10_4.context
        ];
        this._NgModel_10_6 = new import12.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_10_5);
        this._NgControl_10_7 = this._NgModel_10_6.context;
        this._NgControlStatus_10_8 = new import13.Wrapper_NgControlStatus(this._NgControl_10_7);
        this._text_11 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_12 = import3.createRenderElement(this.renderer, this._el_0, 'table', new import3.InlineArray2(2, 'class', 'table'), null);
        this._text_13 = this.renderer.createText(this._el_12, '\n                     ', null);
        this._el_14 = import3.createRenderElement(this.renderer, this._el_12, 'tbody', import3.EMPTY_INLINE_ARRAY, null);
        this._el_15 = import3.createRenderElement(this.renderer, this._el_14, 'tr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_16 = this.renderer.createText(this._el_15, '\n                        ', null);
        this._el_17 = import3.createRenderElement(this.renderer, this._el_15, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._el_18 = import3.createRenderElement(this.renderer, this._el_17, 'strong', import3.EMPTY_INLINE_ARRAY, null);
        this._text_19 = this.renderer.createText(this._el_18, 'Message', null);
        this._el_20 = import3.createRenderElement(this.renderer, this._el_15, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._el_21 = import3.createRenderElement(this.renderer, this._el_20, 'strong', import3.EMPTY_INLINE_ARRAY, null);
        this._text_22 = this.renderer.createText(this._el_21, 'Severity', null);
        this._text_23 = this.renderer.createText(this._el_15, '\n                     ', null);
        this._text_24 = this.renderer.createText(this._el_14, '\n                     ', null);
        this._anchor_25 = this.renderer.createTemplateAnchor(this._el_14, null);
        this._vc_25 = new import15.ViewContainer(25, 14, this, this._anchor_25);
        this._TemplateRef_25_5 = new import19.TemplateRef_(this, 25, this._anchor_25);
        this._NgFor_25_6 = new import16.Wrapper_NgFor(this._vc_25.vcRef, this._TemplateRef_25_5, this.parentView.injectorGet(import20.IterableDiffers, this.parentIndex), this.ref);
        this._text_26 = this.renderer.createText(this._el_14, '\n                ', null);
        this._text_27 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_28 = import3.createRenderElement(this.renderer, this._el_0, 'h4', import3.EMPTY_INLINE_ARRAY, null);
        this._el_29 = import3.createRenderElement(this.renderer, this._el_28, 'a', new import3.InlineArray2(2, 'href', 'http://www.syntaxsuccess.com/viewarticle/redux-in-angular-2.0'), null);
        this._text_30 = this.renderer.createText(this._el_29, 'Read more here', null);
        this._text_31 = this.renderer.createText(this._el_0, '\n              ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_5, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_5));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_8, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_8));
        this._NgModel_8_5.subscribe(this, this.eventHandler(this.handleEvent_8), true);
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_10, new import3.InlineArray8(8, 'ngModelChange', null, 'input', null, 'blur', null, 'change', null), this.eventHandler(this.handleEvent_10));
        this._NgModel_10_6.subscribe(this, this.eventHandler(this.handleEvent_10), true);
        this._pipe_async_0 = new import17.AsyncPipe(this.ref);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
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
            this._el_14,
            this._el_15,
            this._text_16,
            this._el_17,
            this._el_18,
            this._text_19,
            this._el_20,
            this._el_21,
            this._text_22,
            this._text_23,
            this._text_24,
            this._anchor_25,
            this._text_26,
            this._text_27,
            this._el_28,
            this._el_29,
            this._text_30,
            this._text_31
        ]), [
            disposable_0,
            disposable_1,
            disposable_2
        ]);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import21.DefaultValueAccessor) && (8 === requestNodeIndex))) {
            return this._DefaultValueAccessor_8_3.context;
        }
        if (((token === import22.NG_VALUE_ACCESSOR) && (8 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_8_4;
        }
        if (((token === import23.NgModel) && (8 === requestNodeIndex))) {
            return this._NgModel_8_5.context;
        }
        if (((token === import24.NgControl) && (8 === requestNodeIndex))) {
            return this._NgControl_8_6;
        }
        if (((token === import25.NgControlStatus) && (8 === requestNodeIndex))) {
            return this._NgControlStatus_8_7.context;
        }
        if (((token === import21.DefaultValueAccessor) && (10 === requestNodeIndex))) {
            return this._DefaultValueAccessor_10_3.context;
        }
        if (((token === import26.NumberValueAccessor) && (10 === requestNodeIndex))) {
            return this._NumberValueAccessor_10_4.context;
        }
        if (((token === import22.NG_VALUE_ACCESSOR) && (10 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_10_5;
        }
        if (((token === import23.NgModel) && (10 === requestNodeIndex))) {
            return this._NgModel_10_6.context;
        }
        if (((token === import24.NgControl) && (10 === requestNodeIndex))) {
            return this._NgControl_10_7;
        }
        if (((token === import25.NgControlStatus) && (10 === requestNodeIndex))) {
            return this._NgControlStatus_10_8.context;
        }
        if (((token === import19.TemplateRef) && (25 === requestNodeIndex))) {
            return this._TemplateRef_25_5;
        }
        if (((token === import27.NgFor) && (25 === requestNodeIndex))) {
            return this._NgFor_25_6.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const valUnwrapper = new import28.ValueUnwrapper();
        this._DefaultValueAccessor_8_3.ngDoCheck(this, this._el_8, throwOnChange);
        const currVal_8_1_0 = this.context.msg;
        this._NgModel_8_5.check_model(currVal_8_1_0, throwOnChange, false);
        this._NgModel_8_5.ngDoCheck(this, this._el_8, throwOnChange);
        this._NgControlStatus_8_7.ngDoCheck(this, this._el_8, throwOnChange);
        this._DefaultValueAccessor_10_3.ngDoCheck(this, this._el_10, throwOnChange);
        this._NumberValueAccessor_10_4.ngDoCheck(this, this._el_10, throwOnChange);
        const currVal_10_2_0 = this.context.severity;
        this._NgModel_10_6.check_model(currVal_10_2_0, throwOnChange, false);
        this._NgModel_10_6.ngDoCheck(this, this._el_10, throwOnChange);
        this._NgControlStatus_10_8.ngDoCheck(this, this._el_10, throwOnChange);
        valUnwrapper.reset();
        const currVal_25_0_0 = valUnwrapper.unwrap(this._pipe_async_0.transform(this.context.store.logEntries));
        this._NgFor_25_6.check_ngForOf(currVal_25_0_0, throwOnChange, valUnwrapper.hasWrappedValue);
        this._NgFor_25_6.ngDoCheck(this, this._anchor_25, throwOnChange);
        this._vc_25.detectChangesInNestedViews(throwOnChange);
        this._NgControlStatus_8_7.checkHost(this, this, this._el_8, throwOnChange);
        this._NgControlStatus_10_8.checkHost(this, this, this._el_10, throwOnChange);
    }
    destroyInternal() {
        this._vc_25.destroyNestedViews();
        this._NgModel_8_5.ngOnDestroy();
        this._NgModel_10_6.ngOnDestroy();
        this._pipe_async_0.ngOnDestroy();
    }
    createEmbeddedViewInternal(nodeIndex) {
        if ((nodeIndex == 25)) {
            return new View_LogDemo1(this.viewUtils, this, 25, this._anchor_25, this._vc_25);
        }
        return null;
    }
    handleEvent_5(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            const pd_sub_0 = (this.context.generateLogEntry() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    }
    handleEvent_8(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_8_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            const pd_sub_0 = ((this.context.msg = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    }
    handleEvent_10(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_10_3.handleEvent(eventName, $event) && result);
        result = (this._NumberValueAccessor_10_4.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            const pd_sub_0 = ((this.context.severity = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    }
}
class View_LogDemo1 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        super(View_LogDemo1, renderType_LogDemo, import7.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import8.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_8 = import28.UNINITIALIZED;
        this._expr_9 = import28.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'tr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                        ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n                        ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_0, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._text_6 = this.renderer.createText(this._el_5, '', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n                     ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7
        ]), null);
        return null;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_8 = import3.inlineInterpolate(1, '', this.context.$implicit.text, '');
        if (import3.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setText(this._text_3, currVal_8);
            this._expr_8 = currVal_8;
        }
        const currVal_9 = import3.inlineInterpolate(1, '', this.context.$implicit.severity, '');
        if (import3.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setText(this._text_6, currVal_9);
            this._expr_9 = currVal_9;
        }
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
