import * as import0 from '../../../components/change-detection/comment-section-2';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory';
import * as import9 from '../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import10 from '../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import11 from '@angular/core/src/linker/view_container';
import * as import12 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import13 from '@angular/core/src/change_detection/change_detection_util';
import * as import14 from '@angular/core/src/linker/element_ref';
import * as import15 from '@angular/core/src/linker/template_ref';
import * as import16 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import17 from '@angular/forms/src/directives/default_value_accessor';
import * as import18 from '@angular/forms/src/directives/control_value_accessor';
import * as import19 from '@angular/forms/src/directives/ng_model';
import * as import20 from '@angular/forms/src/directives/ng_control';
import * as import21 from '@angular/forms/src/directives/ng_control_status';
import * as import22 from '@angular/common/src/directives/ng_for';
export class Wrapper_CommentSection2 {
    constructor() {
        this._changed = false;
        this.context = new import0.CommentSection2();
    }
    ngOnDetach(view, componentView, el) {
    }
    ngOnDestroy() {
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
var renderType_CommentSection2_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
class View_CommentSection2_Host0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_CommentSection2_Host0, renderType_CommentSection2_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'comment-section-2', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_CommentSection20(this.viewUtils, this, 0, this._el_0);
        this._CommentSection2_0_3 = new Wrapper_CommentSection2();
        this.compView_0.create(this._CommentSection2_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._CommentSection2_0_3.context);
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.CommentSection2) && (0 === requestNodeIndex))) {
            return this._CommentSection2_0_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._CommentSection2_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    }
    destroyInternal() {
        this.compView_0.destroy();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
export const CommentSection2NgFactory = new import7.ComponentFactory('comment-section-2', View_CommentSection2_Host0, import0.CommentSection2);
const styles_CommentSection2 = [];
var renderType_CommentSection2 = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_CommentSection2, {});
export class View_CommentSection20 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_CommentSection20, renderType_CommentSection2, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
        this._expr_51 = import13.UNINITIALIZED;
        this._expr_52 = import13.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'style', 'border: 1px solid black;padding: 5px;'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'alert alert-info'), null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_0, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_5, 'strong', import3.EMPTY_INLINE_ARRAY, null);
        this._text_7 = this.renderer.createText(this._el_6, '', null);
        this._text_8 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_9 = import3.createRenderElement(this.renderer, this._el_0, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_10 = this.renderer.createText(this._el_9, '\n        ', null);
        this._el_11 = import3.createRenderElement(this.renderer, this._el_9, 'button', import3.EMPTY_INLINE_ARRAY, null);
        this._text_12 = this.renderer.createText(this._el_11, 'Add Comment', null);
        this._text_13 = this.renderer.createText(this._el_9, '\n    ', null);
        this._text_14 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_15 = import3.createRenderElement(this.renderer, this._el_0, 'br', import3.EMPTY_INLINE_ARRAY, null);
        this._text_16 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_17 = import3.createRenderElement(this.renderer, this._el_0, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_18 = this.renderer.createText(this._el_17, 'Author', null);
        this._text_19 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_20 = import3.createRenderElement(this.renderer, this._el_0, 'input', import3.EMPTY_INLINE_ARRAY, null);
        this._DefaultValueAccessor_20_3 = new import8.Wrapper_DefaultValueAccessor(this.renderer, new import14.ElementRef(this._el_20));
        this._NG_VALUE_ACCESSOR_20_4 = [this._DefaultValueAccessor_20_3.context];
        this._NgModel_20_5 = new import9.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_20_4);
        this._NgControl_20_6 = this._NgModel_20_5.context;
        this._NgControlStatus_20_7 = new import10.Wrapper_NgControlStatus(this._NgControl_20_6);
        this._text_21 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_22 = import3.createRenderElement(this.renderer, this._el_0, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_23 = this.renderer.createText(this._el_22, 'Text', null);
        this._text_24 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_25 = import3.createRenderElement(this.renderer, this._el_0, 'input', import3.EMPTY_INLINE_ARRAY, null);
        this._DefaultValueAccessor_25_3 = new import8.Wrapper_DefaultValueAccessor(this.renderer, new import14.ElementRef(this._el_25));
        this._NG_VALUE_ACCESSOR_25_4 = [this._DefaultValueAccessor_25_3.context];
        this._NgModel_25_5 = new import9.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_25_4);
        this._NgControl_25_6 = this._NgModel_25_5.context;
        this._NgControlStatus_25_7 = new import10.Wrapper_NgControlStatus(this._NgControl_25_6);
        this._text_26 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_27 = import3.createRenderElement(this.renderer, this._el_0, 'br', import3.EMPTY_INLINE_ARRAY, null);
        this._text_28 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_29 = import3.createRenderElement(this.renderer, this._el_0, 'br', import3.EMPTY_INLINE_ARRAY, null);
        this._text_30 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_31 = import3.createRenderElement(this.renderer, this._el_0, 'table', new import3.InlineArray2(2, 'class', 'table'), null);
        this._text_32 = this.renderer.createText(this._el_31, '\n        ', null);
        this._el_33 = import3.createRenderElement(this.renderer, this._el_31, 'tbody', import3.EMPTY_INLINE_ARRAY, null);
        this._anchor_34 = this.renderer.createTemplateAnchor(this._el_33, null);
        this._vc_34 = new import11.ViewContainer(34, 33, this, this._anchor_34);
        this._TemplateRef_34_5 = new import15.TemplateRef_(this, 34, this._anchor_34);
        this._NgFor_34_6 = new import12.Wrapper_NgFor(this._vc_34.vcRef, this._TemplateRef_34_5, this.parentView.injectorGet(import16.IterableDiffers, this.parentIndex), this.ref);
        this._text_35 = this.renderer.createText(this._el_33, '\n    ', null);
        this._text_36 = this.renderer.createText(this._el_0, '\n\n', null);
        this._text_37 = this.renderer.createText(parentRenderNode, '\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_11, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_11));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_20, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_20));
        this._NgModel_20_5.subscribe(this, this.eventHandler(this.handleEvent_20), true);
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_25, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_25));
        this._NgModel_25_5.subscribe(this, this.eventHandler(this.handleEvent_25), true);
        this.init(null, (this.renderer.directRenderer ? null : [
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
        ]), [
            disposable_0,
            disposable_1,
            disposable_2
        ]);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import17.DefaultValueAccessor) && (20 === requestNodeIndex))) {
            return this._DefaultValueAccessor_20_3.context;
        }
        if (((token === import18.NG_VALUE_ACCESSOR) && (20 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_20_4;
        }
        if (((token === import19.NgModel) && (20 === requestNodeIndex))) {
            return this._NgModel_20_5.context;
        }
        if (((token === import20.NgControl) && (20 === requestNodeIndex))) {
            return this._NgControl_20_6;
        }
        if (((token === import21.NgControlStatus) && (20 === requestNodeIndex))) {
            return this._NgControlStatus_20_7.context;
        }
        if (((token === import17.DefaultValueAccessor) && (25 === requestNodeIndex))) {
            return this._DefaultValueAccessor_25_3.context;
        }
        if (((token === import18.NG_VALUE_ACCESSOR) && (25 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_25_4;
        }
        if (((token === import19.NgModel) && (25 === requestNodeIndex))) {
            return this._NgModel_25_5.context;
        }
        if (((token === import20.NgControl) && (25 === requestNodeIndex))) {
            return this._NgControl_25_6;
        }
        if (((token === import21.NgControlStatus) && (25 === requestNodeIndex))) {
            return this._NgControlStatus_25_7.context;
        }
        if (((token === import15.TemplateRef) && (34 === requestNodeIndex))) {
            return this._TemplateRef_34_5;
        }
        if (((token === import22.NgFor) && (34 === requestNodeIndex))) {
            return this._NgFor_34_6.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._DefaultValueAccessor_20_3.ngDoCheck(this, this._el_20, throwOnChange);
        const currVal_20_1_0 = this.context.author;
        this._NgModel_20_5.check_model(currVal_20_1_0, throwOnChange, false);
        this._NgModel_20_5.ngDoCheck(this, this._el_20, throwOnChange);
        this._NgControlStatus_20_7.ngDoCheck(this, this._el_20, throwOnChange);
        this._DefaultValueAccessor_25_3.ngDoCheck(this, this._el_25, throwOnChange);
        const currVal_25_1_0 = this.context.text;
        this._NgModel_25_5.check_model(currVal_25_1_0, throwOnChange, false);
        this._NgModel_25_5.ngDoCheck(this, this._el_25, throwOnChange);
        this._NgControlStatus_25_7.ngDoCheck(this, this._el_25, throwOnChange);
        const currVal_34_0_0 = this.context.comments;
        this._NgFor_34_6.check_ngForOf(currVal_34_0_0, throwOnChange, false);
        this._NgFor_34_6.ngDoCheck(this, this._anchor_34, throwOnChange);
        this._vc_34.detectChangesInNestedViews(throwOnChange);
        const currVal_51 = import3.inlineInterpolate(1, '\n        ', this.context.message, '\n    ');
        if (import3.checkBinding(throwOnChange, this._expr_51, currVal_51)) {
            this.renderer.setText(this._text_3, currVal_51);
            this._expr_51 = currVal_51;
        }
        const currVal_52 = import3.inlineInterpolate(1, '', this.context.lastUpdated(), '');
        if (import3.checkBinding(throwOnChange, this._expr_52, currVal_52)) {
            this.renderer.setText(this._text_7, currVal_52);
            this._expr_52 = currVal_52;
        }
        this._NgControlStatus_20_7.checkHost(this, this, this._el_20, throwOnChange);
        this._NgControlStatus_25_7.checkHost(this, this, this._el_25, throwOnChange);
    }
    destroyInternal() {
        this._vc_34.destroyNestedViews();
        this._NgModel_20_5.ngOnDestroy();
        this._NgModel_25_5.ngOnDestroy();
    }
    createEmbeddedViewInternal(nodeIndex) {
        if ((nodeIndex == 34)) {
            return new View_CommentSection21(this.viewUtils, this, 34, this._anchor_34, this._vc_34);
        }
        return null;
    }
    handleEvent_11(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            const pd_sub_0 = (this.context.addComment() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    }
    handleEvent_20(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_20_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            const pd_sub_0 = ((this.context.author = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    }
    handleEvent_25(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_25_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            const pd_sub_0 = ((this.context.text = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    }
}
class View_CommentSection21 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        super(View_CommentSection21, renderType_CommentSection2, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_8 = import13.UNINITIALIZED;
        this._expr_9 = import13.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'tr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_0, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._text_6 = this.renderer.createText(this._el_5, '', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n        ', null);
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
        const currVal_8 = import3.inlineInterpolate(1, '', this.context.$implicit.author, '');
        if (import3.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setText(this._text_3, currVal_8);
            this._expr_8 = currVal_8;
        }
        const currVal_9 = import3.inlineInterpolate(1, '', this.context.$implicit.text, '');
        if (import3.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setText(this._text_6, currVal_9);
            this._expr_9 = currVal_9;
        }
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
