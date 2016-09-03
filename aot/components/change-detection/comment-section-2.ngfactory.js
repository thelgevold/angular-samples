import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../components/change-detection/comment-section-2';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '@angular/forms/src/directives/default_value_accessor';
import * as import11 from '@angular/forms/src/directives/ng_model';
import * as import12 from '@angular/forms/src/directives/ng_control_status';
import * as import13 from '@angular/common/src/directives/ng_for';
import * as import14 from '@angular/core/src/linker/element_ref';
import * as import15 from '@angular/core/src/linker/template_ref';
import * as import16 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import17 from '@angular/forms/src/directives/control_value_accessor';
import * as import18 from '@angular/forms/src/directives/ng_control';
var renderType_CommentSection2_Host = null;
class _View_CommentSection2_Host0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_CommentSection2_Host0, renderType_CommentSection2_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('comment-section-2', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_CommentSection20(this.viewUtils, this.injector(0), this._appEl_0);
        this._CommentSection2_0_4 = new import3.CommentSection2();
        this._appEl_0.initComponent(this._CommentSection2_0_4, [], compView_0);
        compView_0.create(this._CommentSection2_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import3.CommentSection2) && (0 === requestNodeIndex))) {
            return this._CommentSection2_0_4;
        }
        return notFoundResult;
    }
}
function viewFactory_CommentSection2_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_CommentSection2_Host === null)) {
        (renderType_CommentSection2_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_CommentSection2_Host0(viewUtils, parentInjector, declarationEl);
}
export const CommentSection2NgFactory = new import9.ComponentFactory('comment-section-2', viewFactory_CommentSection2_Host0, import3.CommentSection2);
const styles_CommentSection2 = [];
var renderType_CommentSection2 = null;
class _View_CommentSection20 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_CommentSection20, renderType_CommentSection2, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_0, 'style', 'border: 1px solid black;padding: 5px;');
        this._text_1 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'div', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'alert alert-info');
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_5 = this.renderer.createElement(this._el_0, 'div', null);
        this._el_6 = this.renderer.createElement(this._el_5, 'strong', null);
        this._text_7 = this.renderer.createText(this._el_6, '', null);
        this._text_8 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_9 = this.renderer.createElement(this._el_0, 'div', null);
        this._text_10 = this.renderer.createText(this._el_9, '\n        ', null);
        this._el_11 = this.renderer.createElement(this._el_9, 'button', null);
        this._text_12 = this.renderer.createText(this._el_11, 'Add Comment', null);
        this._text_13 = this.renderer.createText(this._el_9, '\n    ', null);
        this._text_14 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_15 = this.renderer.createElement(this._el_0, 'br', null);
        this._text_16 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_17 = this.renderer.createElement(this._el_0, 'div', null);
        this._text_18 = this.renderer.createText(this._el_17, 'Author', null);
        this._text_19 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_20 = this.renderer.createElement(this._el_0, 'input', null);
        this._DefaultValueAccessor_20_3 = new import10.DefaultValueAccessor(this.renderer, new import14.ElementRef(this._el_20));
        this._NG_VALUE_ACCESSOR_20_4 = [this._DefaultValueAccessor_20_3];
        this._NgModel_20_5 = new import11.NgModel(null, null, null, this._NG_VALUE_ACCESSOR_20_4);
        this._NgControl_20_6 = this._NgModel_20_5;
        this._NgControlStatus_20_7 = new import12.NgControlStatus(this._NgControl_20_6);
        this._text_21 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_22 = this.renderer.createElement(this._el_0, 'div', null);
        this._text_23 = this.renderer.createText(this._el_22, 'Text', null);
        this._text_24 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_25 = this.renderer.createElement(this._el_0, 'input', null);
        this._DefaultValueAccessor_25_3 = new import10.DefaultValueAccessor(this.renderer, new import14.ElementRef(this._el_25));
        this._NG_VALUE_ACCESSOR_25_4 = [this._DefaultValueAccessor_25_3];
        this._NgModel_25_5 = new import11.NgModel(null, null, null, this._NG_VALUE_ACCESSOR_25_4);
        this._NgControl_25_6 = this._NgModel_25_5;
        this._NgControlStatus_25_7 = new import12.NgControlStatus(this._NgControl_25_6);
        this._text_26 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_27 = this.renderer.createElement(this._el_0, 'br', null);
        this._text_28 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_29 = this.renderer.createElement(this._el_0, 'br', null);
        this._text_30 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_31 = this.renderer.createElement(this._el_0, 'table', null);
        this.renderer.setElementAttribute(this._el_31, 'class', 'table');
        this._text_32 = this.renderer.createText(this._el_31, '\n        ', null);
        this._el_33 = this.renderer.createElement(this._el_31, 'tbody', null);
        this._anchor_34 = this.renderer.createTemplateAnchor(this._el_33, null);
        this._appEl_34 = new import2.AppElement(34, 33, this, this._anchor_34);
        this._TemplateRef_34_5 = new import15.TemplateRef_(this._appEl_34, viewFactory_CommentSection21);
        this._NgFor_34_6 = new import13.NgFor(this._appEl_34.vcRef, this._TemplateRef_34_5, this.parentInjector.get(import16.IterableDiffers), this.ref);
        this._text_35 = this.renderer.createText(this._el_33, '\n    ', null);
        this._text_36 = this.renderer.createText(this._el_0, '\n\n', null);
        this._text_37 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_11, 'click', this.eventHandler(this._handle_click_11_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_20, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_20_0.bind(this)));
        var disposable_2 = this.renderer.listen(this._el_20, 'input', this.eventHandler(this._handle_input_20_1.bind(this)));
        var disposable_3 = this.renderer.listen(this._el_20, 'blur', this.eventHandler(this._handle_blur_20_2.bind(this)));
        this._expr_6 = import7.UNINITIALIZED;
        const subscription_0 = this._NgModel_20_5.update.subscribe(this.eventHandler(this._handle_ngModelChange_20_0.bind(this)));
        this._expr_7 = import7.UNINITIALIZED;
        this._expr_8 = import7.UNINITIALIZED;
        this._expr_9 = import7.UNINITIALIZED;
        this._expr_10 = import7.UNINITIALIZED;
        this._expr_11 = import7.UNINITIALIZED;
        this._expr_12 = import7.UNINITIALIZED;
        var disposable_4 = this.renderer.listen(this._el_25, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_25_0.bind(this)));
        var disposable_5 = this.renderer.listen(this._el_25, 'input', this.eventHandler(this._handle_input_25_1.bind(this)));
        var disposable_6 = this.renderer.listen(this._el_25, 'blur', this.eventHandler(this._handle_blur_25_2.bind(this)));
        this._expr_16 = import7.UNINITIALIZED;
        const subscription_1 = this._NgModel_25_5.update.subscribe(this.eventHandler(this._handle_ngModelChange_25_0.bind(this)));
        this._expr_17 = import7.UNINITIALIZED;
        this._expr_18 = import7.UNINITIALIZED;
        this._expr_19 = import7.UNINITIALIZED;
        this._expr_20 = import7.UNINITIALIZED;
        this._expr_21 = import7.UNINITIALIZED;
        this._expr_22 = import7.UNINITIALIZED;
        this._expr_23 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
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
            this._text_24,
            this._el_25,
            this._text_26,
            this._el_27,
            this._text_28,
            this._el_29,
            this._text_30,
            this._el_31,
            this._text_32,
            this._el_33,
            this._anchor_34,
            this._text_35,
            this._text_36,
            this._text_37
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
        if (((token === import10.DefaultValueAccessor) && (20 === requestNodeIndex))) {
            return this._DefaultValueAccessor_20_3;
        }
        if (((token === import17.NG_VALUE_ACCESSOR) && (20 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_20_4;
        }
        if (((token === import11.NgModel) && (20 === requestNodeIndex))) {
            return this._NgModel_20_5;
        }
        if (((token === import18.NgControl) && (20 === requestNodeIndex))) {
            return this._NgControl_20_6;
        }
        if (((token === import12.NgControlStatus) && (20 === requestNodeIndex))) {
            return this._NgControlStatus_20_7;
        }
        if (((token === import10.DefaultValueAccessor) && (25 === requestNodeIndex))) {
            return this._DefaultValueAccessor_25_3;
        }
        if (((token === import17.NG_VALUE_ACCESSOR) && (25 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_25_4;
        }
        if (((token === import11.NgModel) && (25 === requestNodeIndex))) {
            return this._NgModel_25_5;
        }
        if (((token === import18.NgControl) && (25 === requestNodeIndex))) {
            return this._NgControl_25_6;
        }
        if (((token === import12.NgControlStatus) && (25 === requestNodeIndex))) {
            return this._NgControlStatus_25_7;
        }
        if (((token === import15.TemplateRef) && (34 === requestNodeIndex))) {
            return this._TemplateRef_34_5;
        }
        if (((token === import13.NgFor) && (34 === requestNodeIndex))) {
            return this._NgFor_34_6;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        var changes = null;
        changes = null;
        const currVal_6 = this.context.author;
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this._NgModel_20_5.model = currVal_6;
            if ((changes === null)) {
                (changes = {});
            }
            changes['model'] = new import7.SimpleChange(this._expr_6, currVal_6);
            this._expr_6 = currVal_6;
        }
        if ((changes !== null)) {
            this._NgModel_20_5.ngOnChanges(changes);
        }
        changes = null;
        const currVal_16 = this.context.text;
        if (import4.checkBinding(throwOnChange, this._expr_16, currVal_16)) {
            this._NgModel_25_5.model = currVal_16;
            if ((changes === null)) {
                (changes = {});
            }
            changes['model'] = new import7.SimpleChange(this._expr_16, currVal_16);
            this._expr_16 = currVal_16;
        }
        if ((changes !== null)) {
            this._NgModel_25_5.ngOnChanges(changes);
        }
        changes = null;
        const currVal_23 = this.context.comments;
        if (import4.checkBinding(throwOnChange, this._expr_23, currVal_23)) {
            this._NgFor_34_6.ngForOf = currVal_23;
            if ((changes === null)) {
                (changes = {});
            }
            changes['ngForOf'] = new import7.SimpleChange(this._expr_23, currVal_23);
            this._expr_23 = currVal_23;
        }
        if ((changes !== null)) {
            this._NgFor_34_6.ngOnChanges(changes);
        }
        if (!throwOnChange) {
            this._NgFor_34_6.ngDoCheck();
        }
        this.detectContentChildrenChanges(throwOnChange);
        const currVal_0 = import4.interpolate(1, '\n        ', this.context.message, '\n    ');
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setText(this._text_3, currVal_0);
            this._expr_0 = currVal_0;
        }
        const currVal_1 = import4.interpolate(1, '', this.context.lastUpdated(), '');
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setText(this._text_7, currVal_1);
            this._expr_1 = currVal_1;
        }
        const currVal_7 = this._NgControlStatus_20_7.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementClass(this._el_20, 'ng-untouched', currVal_7);
            this._expr_7 = currVal_7;
        }
        const currVal_8 = this._NgControlStatus_20_7.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setElementClass(this._el_20, 'ng-touched', currVal_8);
            this._expr_8 = currVal_8;
        }
        const currVal_9 = this._NgControlStatus_20_7.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setElementClass(this._el_20, 'ng-pristine', currVal_9);
            this._expr_9 = currVal_9;
        }
        const currVal_10 = this._NgControlStatus_20_7.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this.renderer.setElementClass(this._el_20, 'ng-dirty', currVal_10);
            this._expr_10 = currVal_10;
        }
        const currVal_11 = this._NgControlStatus_20_7.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_11, currVal_11)) {
            this.renderer.setElementClass(this._el_20, 'ng-valid', currVal_11);
            this._expr_11 = currVal_11;
        }
        const currVal_12 = this._NgControlStatus_20_7.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_12, currVal_12)) {
            this.renderer.setElementClass(this._el_20, 'ng-invalid', currVal_12);
            this._expr_12 = currVal_12;
        }
        const currVal_17 = this._NgControlStatus_25_7.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_17, currVal_17)) {
            this.renderer.setElementClass(this._el_25, 'ng-untouched', currVal_17);
            this._expr_17 = currVal_17;
        }
        const currVal_18 = this._NgControlStatus_25_7.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_18, currVal_18)) {
            this.renderer.setElementClass(this._el_25, 'ng-touched', currVal_18);
            this._expr_18 = currVal_18;
        }
        const currVal_19 = this._NgControlStatus_25_7.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_19, currVal_19)) {
            this.renderer.setElementClass(this._el_25, 'ng-pristine', currVal_19);
            this._expr_19 = currVal_19;
        }
        const currVal_20 = this._NgControlStatus_25_7.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_20, currVal_20)) {
            this.renderer.setElementClass(this._el_25, 'ng-dirty', currVal_20);
            this._expr_20 = currVal_20;
        }
        const currVal_21 = this._NgControlStatus_25_7.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_21, currVal_21)) {
            this.renderer.setElementClass(this._el_25, 'ng-valid', currVal_21);
            this._expr_21 = currVal_21;
        }
        const currVal_22 = this._NgControlStatus_25_7.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_22, currVal_22)) {
            this.renderer.setElementClass(this._el_25, 'ng-invalid', currVal_22);
            this._expr_22 = currVal_22;
        }
        this.detectViewChildrenChanges(throwOnChange);
    }
    destroyInternal() {
        this._NgModel_20_5.ngOnDestroy();
        this._NgModel_25_5.ngOnDestroy();
    }
    _handle_click_11_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this.context.addComment() !== false);
        return (true && pd_0);
    }
    _handle_ngModelChange_20_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = ((this.context.author = $event) !== false);
        return (true && pd_0);
    }
    _handle_input_20_1($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this._DefaultValueAccessor_20_3.onChange($event.target.value) !== false);
        return (true && pd_0);
    }
    _handle_blur_20_2($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this._DefaultValueAccessor_20_3.onTouched() !== false);
        return (true && pd_0);
    }
    _handle_ngModelChange_25_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = ((this.context.text = $event) !== false);
        return (true && pd_0);
    }
    _handle_input_25_1($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this._DefaultValueAccessor_25_3.onChange($event.target.value) !== false);
        return (true && pd_0);
    }
    _handle_blur_25_2($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this._DefaultValueAccessor_25_3.onTouched() !== false);
        return (true && pd_0);
    }
}
export function viewFactory_CommentSection20(viewUtils, parentInjector, declarationEl) {
    if ((renderType_CommentSection2 === null)) {
        (renderType_CommentSection2 = viewUtils.createRenderComponentType('/Users/tor/Development/angular-2-samples/components/change-detection/change-detection.html', 0, import8.ViewEncapsulation.None, styles_CommentSection2, {}));
    }
    return new _View_CommentSection20(viewUtils, parentInjector, declarationEl);
}
class _View_CommentSection21 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_CommentSection21, renderType_CommentSection2, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'tr', null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'td', null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_5 = this.renderer.createElement(this._el_0, 'td', null);
        this._text_6 = this.renderer.createText(this._el_5, '', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n        ', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
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
        const currVal_0 = import4.interpolate(1, '', this.context.$implicit.author, '');
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setText(this._text_3, currVal_0);
            this._expr_0 = currVal_0;
        }
        const currVal_1 = import4.interpolate(1, '', this.context.$implicit.text, '');
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setText(this._text_6, currVal_1);
            this._expr_1 = currVal_1;
        }
        this.detectViewChildrenChanges(throwOnChange);
    }
}
function viewFactory_CommentSection21(viewUtils, parentInjector, declarationEl) {
    return new _View_CommentSection21(viewUtils, parentInjector, declarationEl);
}
