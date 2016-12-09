import * as import0 from '../../../components/rxjs-streams/rxjs-streams';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/core/src/linker/view_container';
import * as import9 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import10 from '@angular/core/src/change_detection/change_detection_util';
import * as import11 from '@angular/core/src/linker/template_ref';
import * as import12 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import13 from '@angular/common/src/directives/ng_for';
import * as import14 from '../../node_modules/@angular/common/src/directives/ng_class.ngfactory';
import * as import15 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import16 from '@angular/core/src/linker/element_ref';
import * as import17 from '@angular/common/src/directives/ng_class';
export class Wrapper_RxJsStreams {
    constructor() {
        this._changed = false;
        this.context = new import0.RxJsStreams();
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
var renderType_RxJsStreams_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
class View_RxJsStreams_Host0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_RxJsStreams_Host0, renderType_RxJsStreams_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'rxjs-streams', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_RxJsStreams0(this.viewUtils, this, 0, this._el_0);
        this._RxJsStreams_0_3 = new Wrapper_RxJsStreams();
        this.compView_0.create(this._RxJsStreams_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._RxJsStreams_0_3.context);
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.RxJsStreams) && (0 === requestNodeIndex))) {
            return this._RxJsStreams_0_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._RxJsStreams_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    }
    destroyInternal() {
        this.compView_0.destroy();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
export const RxJsStreamsNgFactory = new import7.ComponentFactory('rxjs-streams', View_RxJsStreams_Host0, import0.RxJsStreams);
const styles_RxJsStreams = [];
var renderType_RxJsStreams = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_RxJsStreams, {});
export class View_RxJsStreams0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_RxJsStreams0, renderType_RxJsStreams, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
        this._expr_64 = import10.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'stream1'), null);
        this._text_1 = this.renderer.createText(this._el_0, 'Stream1', null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_3 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'stream2'), null);
        this._text_4 = this.renderer.createText(this._el_3, 'Stream2', null);
        this._text_5 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_6 = import3.createRenderElement(this.renderer, parentRenderNode, 'br', import3.EMPTY_INLINE_ARRAY, null);
        this._text_7 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_8 = import3.createRenderElement(this.renderer, parentRenderNode, 'button', import3.EMPTY_INLINE_ARRAY, null);
        this._text_9 = this.renderer.createText(this._el_8, 'Merge Streams', null);
        this._text_10 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_11 = import3.createRenderElement(this.renderer, parentRenderNode, 'button', import3.EMPTY_INLINE_ARRAY, null);
        this._text_12 = this.renderer.createText(this._el_11, 'Concat Streams', null);
        this._text_13 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_14 = import3.createRenderElement(this.renderer, parentRenderNode, 'button', import3.EMPTY_INLINE_ARRAY, null);
        this._text_15 = this.renderer.createText(this._el_14, 'ForkJoin Streams', null);
        this._text_16 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_17 = import3.createRenderElement(this.renderer, parentRenderNode, 'button', import3.EMPTY_INLINE_ARRAY, null);
        this._text_18 = this.renderer.createText(this._el_17, 'FlatMap Streams', null);
        this._text_19 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_20 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'stream-section'), null);
        this._text_21 = this.renderer.createText(this._el_20, '\n  ', null);
        this._el_22 = import3.createRenderElement(this.renderer, this._el_20, 'h4', import3.EMPTY_INLINE_ARRAY, null);
        this._text_23 = this.renderer.createText(this._el_22, 'Concatenated Streams', null);
        this._text_24 = this.renderer.createText(this._el_20, '\n  ', null);
        this._anchor_25 = this.renderer.createTemplateAnchor(this._el_20, null);
        this._vc_25 = new import8.ViewContainer(25, 20, this, this._anchor_25);
        this._TemplateRef_25_5 = new import11.TemplateRef_(this, 25, this._anchor_25);
        this._NgFor_25_6 = new import9.Wrapper_NgFor(this._vc_25.vcRef, this._TemplateRef_25_5, this.parentView.injectorGet(import12.IterableDiffers, this.parentIndex), this.ref);
        this._text_26 = this.renderer.createText(this._el_20, '\n', null);
        this._text_27 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_28 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'stream-section'), null);
        this._text_29 = this.renderer.createText(this._el_28, '\n  ', null);
        this._el_30 = import3.createRenderElement(this.renderer, this._el_28, 'h4', import3.EMPTY_INLINE_ARRAY, null);
        this._text_31 = this.renderer.createText(this._el_30, 'Merged Streams', null);
        this._text_32 = this.renderer.createText(this._el_28, '\n  ', null);
        this._anchor_33 = this.renderer.createTemplateAnchor(this._el_28, null);
        this._vc_33 = new import8.ViewContainer(33, 28, this, this._anchor_33);
        this._TemplateRef_33_5 = new import11.TemplateRef_(this, 33, this._anchor_33);
        this._NgFor_33_6 = new import9.Wrapper_NgFor(this._vc_33.vcRef, this._TemplateRef_33_5, this.parentView.injectorGet(import12.IterableDiffers, this.parentIndex), this.ref);
        this._text_34 = this.renderer.createText(this._el_28, '\n', null);
        this._text_35 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_36 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'stream-section'), null);
        this._text_37 = this.renderer.createText(this._el_36, '\n  ', null);
        this._el_38 = import3.createRenderElement(this.renderer, this._el_36, 'h4', import3.EMPTY_INLINE_ARRAY, null);
        this._text_39 = this.renderer.createText(this._el_38, 'ForkJoined Streams', null);
        this._text_40 = this.renderer.createText(this._el_36, '\n  ', null);
        this._anchor_41 = this.renderer.createTemplateAnchor(this._el_36, null);
        this._vc_41 = new import8.ViewContainer(41, 36, this, this._anchor_41);
        this._TemplateRef_41_5 = new import11.TemplateRef_(this, 41, this._anchor_41);
        this._NgFor_41_6 = new import9.Wrapper_NgFor(this._vc_41.vcRef, this._TemplateRef_41_5, this.parentView.injectorGet(import12.IterableDiffers, this.parentIndex), this.ref);
        this._text_42 = this.renderer.createText(this._el_36, '\n', null);
        this._text_43 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_44 = import3.createRenderElement(this.renderer, parentRenderNode, 'br', import3.EMPTY_INLINE_ARRAY, null);
        this._text_45 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_46 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_47 = this.renderer.createText(this._el_46, '\n  ', null);
        this._el_48 = import3.createRenderElement(this.renderer, this._el_46, 'h4', import3.EMPTY_INLINE_ARRAY, null);
        this._text_49 = this.renderer.createText(this._el_48, 'Flatmapped Streams', null);
        this._text_50 = this.renderer.createText(this._el_46, '\n  ', null);
        this._el_51 = import3.createRenderElement(this.renderer, this._el_46, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_52 = this.renderer.createText(this._el_51, '', null);
        this._text_53 = this.renderer.createText(this._el_46, '\n', null);
        this._text_54 = this.renderer.createText(parentRenderNode, '\n\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_8, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_8));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_11, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_11));
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_14, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_14));
        var disposable_3 = import3.subscribeToRenderElement(this, this._el_17, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_17));
        this.init(null, (this.renderer.directRenderer ? null : [
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
            this._text_10,
            this._el_11,
            this._text_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._text_24,
            this._anchor_25,
            this._text_26,
            this._text_27,
            this._el_28,
            this._text_29,
            this._el_30,
            this._text_31,
            this._text_32,
            this._anchor_33,
            this._text_34,
            this._text_35,
            this._el_36,
            this._text_37,
            this._el_38,
            this._text_39,
            this._text_40,
            this._anchor_41,
            this._text_42,
            this._text_43,
            this._el_44,
            this._text_45,
            this._el_46,
            this._text_47,
            this._el_48,
            this._text_49,
            this._text_50,
            this._el_51,
            this._text_52,
            this._text_53,
            this._text_54
        ]), [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3
        ]);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import11.TemplateRef) && (25 === requestNodeIndex))) {
            return this._TemplateRef_25_5;
        }
        if (((token === import13.NgFor) && (25 === requestNodeIndex))) {
            return this._NgFor_25_6.context;
        }
        if (((token === import11.TemplateRef) && (33 === requestNodeIndex))) {
            return this._TemplateRef_33_5;
        }
        if (((token === import13.NgFor) && (33 === requestNodeIndex))) {
            return this._NgFor_33_6.context;
        }
        if (((token === import11.TemplateRef) && (41 === requestNodeIndex))) {
            return this._TemplateRef_41_5;
        }
        if (((token === import13.NgFor) && (41 === requestNodeIndex))) {
            return this._NgFor_41_6.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_25_0_0 = this.context.concatStream;
        this._NgFor_25_6.check_ngForOf(currVal_25_0_0, throwOnChange, false);
        this._NgFor_25_6.ngDoCheck(this, this._anchor_25, throwOnChange);
        const currVal_33_0_0 = this.context.mergeStream;
        this._NgFor_33_6.check_ngForOf(currVal_33_0_0, throwOnChange, false);
        this._NgFor_33_6.ngDoCheck(this, this._anchor_33, throwOnChange);
        const currVal_41_0_0 = this.context.forkJoinStream;
        this._NgFor_41_6.check_ngForOf(currVal_41_0_0, throwOnChange, false);
        this._NgFor_41_6.ngDoCheck(this, this._anchor_41, throwOnChange);
        this._vc_25.detectChangesInNestedViews(throwOnChange);
        this._vc_33.detectChangesInNestedViews(throwOnChange);
        this._vc_41.detectChangesInNestedViews(throwOnChange);
        const currVal_64 = import3.inlineInterpolate(1, '', this.context.flatMappedStreams.msg, '');
        if (import3.checkBinding(throwOnChange, this._expr_64, currVal_64)) {
            this.renderer.setText(this._text_52, currVal_64);
            this._expr_64 = currVal_64;
        }
    }
    destroyInternal() {
        this._vc_25.destroyNestedViews();
        this._vc_33.destroyNestedViews();
        this._vc_41.destroyNestedViews();
    }
    createEmbeddedViewInternal(nodeIndex) {
        if ((nodeIndex == 25)) {
            return new View_RxJsStreams1(this.viewUtils, this, 25, this._anchor_25, this._vc_25);
        }
        if ((nodeIndex == 33)) {
            return new View_RxJsStreams2(this.viewUtils, this, 33, this._anchor_33, this._vc_33);
        }
        if ((nodeIndex == 41)) {
            return new View_RxJsStreams3(this.viewUtils, this, 41, this._anchor_41, this._vc_41);
        }
        return null;
    }
    handleEvent_8(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            const pd_sub_0 = (this.context.mergeStreams() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    }
    handleEvent_11(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            const pd_sub_0 = (this.context.concatStreams() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    }
    handleEvent_14(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            const pd_sub_0 = (this.context.forkJoinStreams() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    }
    handleEvent_17(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            const pd_sub_0 = (this.context.flatMapStreams() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    }
}
class View_RxJsStreams1 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        super(View_RxJsStreams1, renderType_RxJsStreams, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._map_6 = import3.pureProxy2((p0, p1) => {
            return {
                stream1: p0,
                stream2: p1
            };
        });
        this._expr_7 = import10.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'floatLeft'), null);
        this._NgClass_2_3 = new import14.Wrapper_NgClass(this.parentView.parentView.injectorGet(import12.IterableDiffers, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import15.KeyValueDiffers, this.parentView.parentIndex), new import16.ElementRef(this._el_2), this.renderer);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n  ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4
        ]), null);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import17.NgClass) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) {
            return this._NgClass_2_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_2_0_0 = 'floatLeft';
        this._NgClass_2_3.check_klass(currVal_2_0_0, throwOnChange, false);
        const currVal_2_0_1 = this._map_6((this.context.$implicit.source === 1), (this.context.$implicit.source === 2));
        this._NgClass_2_3.check_ngClass(currVal_2_0_1, throwOnChange, false);
        this._NgClass_2_3.ngDoCheck(this, this._el_2, throwOnChange);
        const currVal_7 = import3.inlineInterpolate(1, '', this.context.$implicit.value, '');
        if (import3.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setText(this._text_3, currVal_7);
            this._expr_7 = currVal_7;
        }
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
class View_RxJsStreams2 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        super(View_RxJsStreams2, renderType_RxJsStreams, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._map_6 = import3.pureProxy2((p0, p1) => {
            return {
                stream1: p0,
                stream2: p1
            };
        });
        this._expr_7 = import10.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'floatLeft'), null);
        this._NgClass_2_3 = new import14.Wrapper_NgClass(this.parentView.parentView.injectorGet(import12.IterableDiffers, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import15.KeyValueDiffers, this.parentView.parentIndex), new import16.ElementRef(this._el_2), this.renderer);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n  ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4
        ]), null);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import17.NgClass) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) {
            return this._NgClass_2_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_2_0_0 = 'floatLeft';
        this._NgClass_2_3.check_klass(currVal_2_0_0, throwOnChange, false);
        const currVal_2_0_1 = this._map_6((this.context.$implicit.source === 1), (this.context.$implicit.source === 2));
        this._NgClass_2_3.check_ngClass(currVal_2_0_1, throwOnChange, false);
        this._NgClass_2_3.ngDoCheck(this, this._el_2, throwOnChange);
        const currVal_7 = import3.inlineInterpolate(1, '', this.context.$implicit.value, '');
        if (import3.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setText(this._text_3, currVal_7);
            this._expr_7 = currVal_7;
        }
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
class View_RxJsStreams3 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        super(View_RxJsStreams3, renderType_RxJsStreams, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._map_6 = import3.pureProxy2((p0, p1) => {
            return {
                stream1: p0,
                stream2: p1
            };
        });
        this._expr_7 = import10.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._NgClass_2_3 = new import14.Wrapper_NgClass(this.parentView.parentView.injectorGet(import12.IterableDiffers, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import15.KeyValueDiffers, this.parentView.parentIndex), new import16.ElementRef(this._el_2), this.renderer);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n  ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4
        ]), null);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import17.NgClass) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) {
            return this._NgClass_2_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_2_0_0 = this._map_6((this.context.$implicit.source === 1), (this.context.$implicit.source === 2));
        this._NgClass_2_3.check_ngClass(currVal_2_0_0, throwOnChange, false);
        this._NgClass_2_3.ngDoCheck(this, this._el_2, throwOnChange);
        const currVal_7 = import3.inlineInterpolate(1, '', this.context.$implicit.value, '');
        if (import3.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setText(this._text_3, currVal_7);
            this._expr_7 = currVal_7;
        }
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
