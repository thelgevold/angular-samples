import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../components/log-tail/store';
import * as import4 from '../../../components/log-tail/log-tail-service';
import * as import5 from '../../../components/log-tail/log-demo';
import * as import6 from '@angular/core/src/linker/view_utils';
import * as import8 from '@angular/core/src/linker/view_type';
import * as import9 from '@angular/core/src/change_detection/change_detection';
import * as import10 from '@angular/http/src/http';
import * as import11 from '@angular/core/src/metadata/view';
import * as import12 from '@angular/core/src/linker/component_factory';
import * as import13 from '@angular/forms/src/directives/default_value_accessor';
import * as import14 from '@angular/forms/src/directives/ng_model';
import * as import15 from '@angular/forms/src/directives/ng_control_status';
import * as import16 from '@angular/forms/src/directives/number_value_accessor';
import * as import17 from '@angular/common/src/directives/ng_for';
import * as import18 from '@angular/common/src/pipes/async_pipe';
import * as import19 from '@angular/core/src/linker/element_ref';
import * as import20 from '@angular/core/src/linker/template_ref';
import * as import21 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import22 from '@angular/forms/src/directives/control_value_accessor';
import * as import23 from '@angular/forms/src/directives/ng_control';
var renderType_LogDemo_Host = null;
class _View_LogDemo_Host0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_LogDemo_Host0, renderType_LogDemo_Host, import8.ViewType.HOST, viewUtils, parentInjector, declarationEl, import9.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('ng-component', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_LogDemo0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Store_0_4 = new import3.Store();
        this._LogTailService_0_5 = new import4.LogTailService(this.parentInjector.get(import10.Http));
        this._LogDemo_0_6 = new import5.LogDemo(this._Store_0_4, this._LogTailService_0_5);
        this._appEl_0.initComponent(this._LogDemo_0_6, [], compView_0);
        compView_0.create(this._LogDemo_0_6, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import3.Store) && (0 === requestNodeIndex))) {
            return this._Store_0_4;
        }
        if (((token === import4.LogTailService) && (0 === requestNodeIndex))) {
            return this._LogTailService_0_5;
        }
        if (((token === import5.LogDemo) && (0 === requestNodeIndex))) {
            return this._LogDemo_0_6;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._LogDemo_0_6.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
}
function viewFactory_LogDemo_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_LogDemo_Host === null)) {
        (renderType_LogDemo_Host = viewUtils.createRenderComponentType('', 0, import11.ViewEncapsulation.None, [], {}));
    }
    return new _View_LogDemo_Host0(viewUtils, parentInjector, declarationEl);
}
export const LogDemoNgFactory = new import12.ComponentFactory('ng-component', viewFactory_LogDemo_Host0, import5.LogDemo);
const styles_LogDemo = [];
var renderType_LogDemo = null;
class _View_LogDemo0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_LogDemo0, renderType_LogDemo, import8.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import9.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'div', null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'h1', null);
        this._text_3 = this.renderer.createText(this._el_2, 'Error log state managed using Redux', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_5 = this.renderer.createElement(this._el_0, 'button', null);
        this.renderer.setElementAttribute(this._el_5, 'style', 'margin-bottom: 10px;');
        this._text_6 = this.renderer.createText(this._el_5, 'Add new log entry', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_8 = this.renderer.createElement(this._el_0, 'input', null);
        this.renderer.setElementAttribute(this._el_8, 'placeholder', 'message');
        this.renderer.setElementAttribute(this._el_8, 'type', 'text');
        this._DefaultValueAccessor_8_3 = new import13.DefaultValueAccessor(this.renderer, new import19.ElementRef(this._el_8));
        this._NG_VALUE_ACCESSOR_8_4 = [this._DefaultValueAccessor_8_3];
        this._NgModel_8_5 = new import14.NgModel(null, null, null, this._NG_VALUE_ACCESSOR_8_4);
        this._NgControl_8_6 = this._NgModel_8_5;
        this._NgControlStatus_8_7 = new import15.NgControlStatus(this._NgControl_8_6);
        this._text_9 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_10 = this.renderer.createElement(this._el_0, 'input', null);
        this.renderer.setElementAttribute(this._el_10, 'placeholder', 'severity');
        this.renderer.setElementAttribute(this._el_10, 'type', 'number');
        this._DefaultValueAccessor_10_3 = new import13.DefaultValueAccessor(this.renderer, new import19.ElementRef(this._el_10));
        this._NumberValueAccessor_10_4 = new import16.NumberValueAccessor(this.renderer, new import19.ElementRef(this._el_10));
        this._NG_VALUE_ACCESSOR_10_5 = [
            this._DefaultValueAccessor_10_3,
            this._NumberValueAccessor_10_4
        ];
        this._NgModel_10_6 = new import14.NgModel(null, null, null, this._NG_VALUE_ACCESSOR_10_5);
        this._NgControl_10_7 = this._NgModel_10_6;
        this._NgControlStatus_10_8 = new import15.NgControlStatus(this._NgControl_10_7);
        this._text_11 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_12 = this.renderer.createElement(this._el_0, 'table', null);
        this.renderer.setElementAttribute(this._el_12, 'class', 'table');
        this._text_13 = this.renderer.createText(this._el_12, '\n                     ', null);
        this._el_14 = this.renderer.createElement(this._el_12, 'tbody', null);
        this._el_15 = this.renderer.createElement(this._el_14, 'tr', null);
        this._text_16 = this.renderer.createText(this._el_15, '\n                        ', null);
        this._el_17 = this.renderer.createElement(this._el_15, 'td', null);
        this._el_18 = this.renderer.createElement(this._el_17, 'strong', null);
        this._text_19 = this.renderer.createText(this._el_18, 'Message', null);
        this._el_20 = this.renderer.createElement(this._el_15, 'td', null);
        this._el_21 = this.renderer.createElement(this._el_20, 'strong', null);
        this._text_22 = this.renderer.createText(this._el_21, 'Severity', null);
        this._text_23 = this.renderer.createText(this._el_15, '\n                     ', null);
        this._text_24 = this.renderer.createText(this._el_14, '\n                     ', null);
        this._anchor_25 = this.renderer.createTemplateAnchor(this._el_14, null);
        this._appEl_25 = new import2.AppElement(25, 14, this, this._anchor_25);
        this._TemplateRef_25_5 = new import20.TemplateRef_(this._appEl_25, viewFactory_LogDemo1);
        this._NgFor_25_6 = new import17.NgFor(this._appEl_25.vcRef, this._TemplateRef_25_5, this.parentInjector.get(import21.IterableDiffers), this.ref);
        this._text_26 = this.renderer.createText(this._el_14, '\n                ', null);
        this._text_27 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_28 = this.renderer.createElement(this._el_0, 'h4', null);
        this._el_29 = this.renderer.createElement(this._el_28, 'a', null);
        this.renderer.setElementAttribute(this._el_29, 'href', 'http://www.syntaxsuccess.com/viewarticle/redux-in-angular-2.0');
        this._text_30 = this.renderer.createText(this._el_29, 'Read more here', null);
        this._text_31 = this.renderer.createText(this._el_0, '\n              ', null);
        var disposable_0 = this.renderer.listen(this._el_5, 'click', this.eventHandler(this._handle_click_5_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_8, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_8_0.bind(this)));
        var disposable_2 = this.renderer.listen(this._el_8, 'input', this.eventHandler(this._handle_input_8_1.bind(this)));
        var disposable_3 = this.renderer.listen(this._el_8, 'blur', this.eventHandler(this._handle_blur_8_2.bind(this)));
        this._expr_4 = import9.UNINITIALIZED;
        const subscription_0 = this._NgModel_8_5.update.subscribe(this.eventHandler(this._handle_ngModelChange_8_0.bind(this)));
        this._expr_5 = import9.UNINITIALIZED;
        this._expr_6 = import9.UNINITIALIZED;
        this._expr_7 = import9.UNINITIALIZED;
        this._expr_8 = import9.UNINITIALIZED;
        this._expr_9 = import9.UNINITIALIZED;
        this._expr_10 = import9.UNINITIALIZED;
        var disposable_4 = this.renderer.listen(this._el_10, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_10_0.bind(this)));
        var disposable_5 = this.renderer.listen(this._el_10, 'input', this.eventHandler(this._handle_input_10_1.bind(this)));
        var disposable_6 = this.renderer.listen(this._el_10, 'blur', this.eventHandler(this._handle_blur_10_2.bind(this)));
        var disposable_7 = this.renderer.listen(this._el_10, 'change', this.eventHandler(this._handle_change_10_3.bind(this)));
        this._expr_17 = import9.UNINITIALIZED;
        const subscription_1 = this._NgModel_10_6.update.subscribe(this.eventHandler(this._handle_ngModelChange_10_0.bind(this)));
        this._expr_18 = import9.UNINITIALIZED;
        this._expr_19 = import9.UNINITIALIZED;
        this._expr_20 = import9.UNINITIALIZED;
        this._expr_21 = import9.UNINITIALIZED;
        this._expr_22 = import9.UNINITIALIZED;
        this._expr_23 = import9.UNINITIALIZED;
        this._pipe_async_0 = new import18.AsyncPipe(this.ref);
        this._expr_24 = import9.UNINITIALIZED;
        this.init([], [
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
        ], [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3,
            disposable_4,
            disposable_5,
            disposable_6,
            disposable_7
        ], [
            subscription_0,
            subscription_1
        ]);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import13.DefaultValueAccessor) && (8 === requestNodeIndex))) {
            return this._DefaultValueAccessor_8_3;
        }
        if (((token === import22.NG_VALUE_ACCESSOR) && (8 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_8_4;
        }
        if (((token === import14.NgModel) && (8 === requestNodeIndex))) {
            return this._NgModel_8_5;
        }
        if (((token === import23.NgControl) && (8 === requestNodeIndex))) {
            return this._NgControl_8_6;
        }
        if (((token === import15.NgControlStatus) && (8 === requestNodeIndex))) {
            return this._NgControlStatus_8_7;
        }
        if (((token === import13.DefaultValueAccessor) && (10 === requestNodeIndex))) {
            return this._DefaultValueAccessor_10_3;
        }
        if (((token === import16.NumberValueAccessor) && (10 === requestNodeIndex))) {
            return this._NumberValueAccessor_10_4;
        }
        if (((token === import22.NG_VALUE_ACCESSOR) && (10 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_10_5;
        }
        if (((token === import14.NgModel) && (10 === requestNodeIndex))) {
            return this._NgModel_10_6;
        }
        if (((token === import23.NgControl) && (10 === requestNodeIndex))) {
            return this._NgControl_10_7;
        }
        if (((token === import15.NgControlStatus) && (10 === requestNodeIndex))) {
            return this._NgControlStatus_10_8;
        }
        if (((token === import20.TemplateRef) && (25 === requestNodeIndex))) {
            return this._TemplateRef_25_5;
        }
        if (((token === import17.NgFor) && (25 === requestNodeIndex))) {
            return this._NgFor_25_6;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        var changes = null;
        const valUnwrapper = new import9.ValueUnwrapper();
        changes = null;
        const currVal_4 = this.context.msg;
        if (import6.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this._NgModel_8_5.model = currVal_4;
            if ((changes === null)) {
                (changes = {});
            }
            changes['model'] = new import9.SimpleChange(this._expr_4, currVal_4);
            this._expr_4 = currVal_4;
        }
        if ((changes !== null)) {
            this._NgModel_8_5.ngOnChanges(changes);
        }
        changes = null;
        const currVal_17 = this.context.severity;
        if (import6.checkBinding(throwOnChange, this._expr_17, currVal_17)) {
            this._NgModel_10_6.model = currVal_17;
            if ((changes === null)) {
                (changes = {});
            }
            changes['model'] = new import9.SimpleChange(this._expr_17, currVal_17);
            this._expr_17 = currVal_17;
        }
        if ((changes !== null)) {
            this._NgModel_10_6.ngOnChanges(changes);
        }
        changes = null;
        valUnwrapper.reset();
        const currVal_24 = valUnwrapper.unwrap(this._pipe_async_0.transform(this.context.store.logEntries));
        if ((valUnwrapper.hasWrappedValue || import6.checkBinding(throwOnChange, this._expr_24, currVal_24))) {
            this._NgFor_25_6.ngForOf = currVal_24;
            if ((changes === null)) {
                (changes = {});
            }
            changes['ngForOf'] = new import9.SimpleChange(this._expr_24, currVal_24);
            this._expr_24 = currVal_24;
        }
        if ((changes !== null)) {
            this._NgFor_25_6.ngOnChanges(changes);
        }
        if (!throwOnChange) {
            this._NgFor_25_6.ngDoCheck();
        }
        this.detectContentChildrenChanges(throwOnChange);
        const currVal_5 = this._NgControlStatus_8_7.ngClassUntouched;
        if (import6.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementClass(this._el_8, 'ng-untouched', currVal_5);
            this._expr_5 = currVal_5;
        }
        const currVal_6 = this._NgControlStatus_8_7.ngClassTouched;
        if (import6.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementClass(this._el_8, 'ng-touched', currVal_6);
            this._expr_6 = currVal_6;
        }
        const currVal_7 = this._NgControlStatus_8_7.ngClassPristine;
        if (import6.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementClass(this._el_8, 'ng-pristine', currVal_7);
            this._expr_7 = currVal_7;
        }
        const currVal_8 = this._NgControlStatus_8_7.ngClassDirty;
        if (import6.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setElementClass(this._el_8, 'ng-dirty', currVal_8);
            this._expr_8 = currVal_8;
        }
        const currVal_9 = this._NgControlStatus_8_7.ngClassValid;
        if (import6.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setElementClass(this._el_8, 'ng-valid', currVal_9);
            this._expr_9 = currVal_9;
        }
        const currVal_10 = this._NgControlStatus_8_7.ngClassInvalid;
        if (import6.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this.renderer.setElementClass(this._el_8, 'ng-invalid', currVal_10);
            this._expr_10 = currVal_10;
        }
        const currVal_18 = this._NgControlStatus_10_8.ngClassUntouched;
        if (import6.checkBinding(throwOnChange, this._expr_18, currVal_18)) {
            this.renderer.setElementClass(this._el_10, 'ng-untouched', currVal_18);
            this._expr_18 = currVal_18;
        }
        const currVal_19 = this._NgControlStatus_10_8.ngClassTouched;
        if (import6.checkBinding(throwOnChange, this._expr_19, currVal_19)) {
            this.renderer.setElementClass(this._el_10, 'ng-touched', currVal_19);
            this._expr_19 = currVal_19;
        }
        const currVal_20 = this._NgControlStatus_10_8.ngClassPristine;
        if (import6.checkBinding(throwOnChange, this._expr_20, currVal_20)) {
            this.renderer.setElementClass(this._el_10, 'ng-pristine', currVal_20);
            this._expr_20 = currVal_20;
        }
        const currVal_21 = this._NgControlStatus_10_8.ngClassDirty;
        if (import6.checkBinding(throwOnChange, this._expr_21, currVal_21)) {
            this.renderer.setElementClass(this._el_10, 'ng-dirty', currVal_21);
            this._expr_21 = currVal_21;
        }
        const currVal_22 = this._NgControlStatus_10_8.ngClassValid;
        if (import6.checkBinding(throwOnChange, this._expr_22, currVal_22)) {
            this.renderer.setElementClass(this._el_10, 'ng-valid', currVal_22);
            this._expr_22 = currVal_22;
        }
        const currVal_23 = this._NgControlStatus_10_8.ngClassInvalid;
        if (import6.checkBinding(throwOnChange, this._expr_23, currVal_23)) {
            this.renderer.setElementClass(this._el_10, 'ng-invalid', currVal_23);
            this._expr_23 = currVal_23;
        }
        this.detectViewChildrenChanges(throwOnChange);
    }
    destroyInternal() {
        this._NgModel_8_5.ngOnDestroy();
        this._NgModel_10_6.ngOnDestroy();
        this._pipe_async_0.ngOnDestroy();
    }
    _handle_click_5_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this.context.generateLogEntry() !== false);
        return (true && pd_0);
    }
    _handle_ngModelChange_8_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = ((this.context.msg = $event) !== false);
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
    _handle_ngModelChange_10_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = ((this.context.severity = $event) !== false);
        return (true && pd_0);
    }
    _handle_input_10_1($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this._DefaultValueAccessor_10_3.onChange($event.target.value) !== false);
        const pd_1 = (this._NumberValueAccessor_10_4.onChange($event.target.value) !== false);
        return ((true && pd_0) && pd_1);
    }
    _handle_blur_10_2($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this._DefaultValueAccessor_10_3.onTouched() !== false);
        const pd_1 = (this._NumberValueAccessor_10_4.onTouched() !== false);
        return ((true && pd_0) && pd_1);
    }
    _handle_change_10_3($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this._NumberValueAccessor_10_4.onChange($event.target.value) !== false);
        return (true && pd_0);
    }
}
export function viewFactory_LogDemo0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_LogDemo === null)) {
        (renderType_LogDemo = viewUtils.createRenderComponentType('/Users/tor/Development/angular-2-samples/components/log-tail/log-demo.ts class LogDemo - inline template', 0, import11.ViewEncapsulation.None, styles_LogDemo, {}));
    }
    return new _View_LogDemo0(viewUtils, parentInjector, declarationEl);
}
class _View_LogDemo1 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_LogDemo1, renderType_LogDemo, import8.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import9.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'tr', null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                        ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'td', null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n                        ', null);
        this._el_5 = this.renderer.createElement(this._el_0, 'td', null);
        this._text_6 = this.renderer.createText(this._el_5, '', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n                     ', null);
        this._expr_0 = import9.UNINITIALIZED;
        this._expr_1 = import9.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7
        ], [], []);
        return null;
    }
    detectChangesInternal(throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        const currVal_0 = import6.interpolate(1, '', this.context.$implicit.text, '');
        if (import6.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setText(this._text_3, currVal_0);
            this._expr_0 = currVal_0;
        }
        const currVal_1 = import6.interpolate(1, '', this.context.$implicit.severity, '');
        if (import6.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setText(this._text_6, currVal_1);
            this._expr_1 = currVal_1;
        }
        this.detectViewChildrenChanges(throwOnChange);
    }
}
function viewFactory_LogDemo1(viewUtils, parentInjector, declarationEl) {
    return new _View_LogDemo1(viewUtils, parentInjector, declarationEl);
}
