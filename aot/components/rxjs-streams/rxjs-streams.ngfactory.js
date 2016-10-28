import * as import0 from '../../../components/rxjs-streams/rxjs-streams';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import11 from '@angular/core/src/linker/template_ref';
import * as import12 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import13 from '@angular/common/src/directives/ng_for';
import * as import14 from '../../node_modules/@angular/common/src/directives/ng_class.ngfactory';
import * as import15 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import16 from '@angular/core/src/linker/element_ref';
import * as import17 from '@angular/common/src/directives/ng_class';
export class Wrapper_RxJsStreams {
    constructor() {
        this.changed = false;
        this.context = new import0.RxJsStreams();
    }
    detectChangesInInputProps(view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    }
    detectChangesInHostProps(view, el, throwOnChange) {
    }
}
var renderType_RxJsStreams_Host = null;
class _View_RxJsStreams_Host0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_RxJsStreams_Host0, renderType_RxJsStreams_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer, 'rxjs-streams', import4.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_RxJsStreams0(this.viewUtils, this.injector(0), this._appEl_0);
        this._RxJsStreams_0_4 = new Wrapper_RxJsStreams();
        this._appEl_0.initComponent(this._RxJsStreams_0_4.context, [], compView_0);
        compView_0.create(this._RxJsStreams_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.RxJsStreams) && (0 === requestNodeIndex))) {
            return this._RxJsStreams_0_4.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._RxJsStreams_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._RxJsStreams_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
}
function viewFactory_RxJsStreams_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_RxJsStreams_Host === null)) {
        (renderType_RxJsStreams_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_RxJsStreams_Host0(viewUtils, parentInjector, declarationEl);
}
export const RxJsStreamsNgFactory = new import9.ComponentFactory('rxjs-streams', viewFactory_RxJsStreams_Host0, import0.RxJsStreams);
const styles_RxJsStreams = [];
var renderType_RxJsStreams = null;
class _View_RxJsStreams0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_RxJsStreams0, renderType_RxJsStreams, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_64 = import7.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = import4.createRenderElement(this.renderer, parentRenderNode, 'div', new import4.InlineArray2(2, 'class', 'stream1'), null);
        this._text_1 = this.renderer.createText(this._el_0, 'Stream1', null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_3 = import4.createRenderElement(this.renderer, parentRenderNode, 'div', new import4.InlineArray2(2, 'class', 'stream2'), null);
        this._text_4 = this.renderer.createText(this._el_3, 'Stream2', null);
        this._text_5 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_6 = import4.createRenderElement(this.renderer, parentRenderNode, 'br', import4.EMPTY_INLINE_ARRAY, null);
        this._text_7 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_8 = import4.createRenderElement(this.renderer, parentRenderNode, 'button', import4.EMPTY_INLINE_ARRAY, null);
        this._text_9 = this.renderer.createText(this._el_8, 'Merge Streams', null);
        this._text_10 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_11 = import4.createRenderElement(this.renderer, parentRenderNode, 'button', import4.EMPTY_INLINE_ARRAY, null);
        this._text_12 = this.renderer.createText(this._el_11, 'Concat Streams', null);
        this._text_13 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_14 = import4.createRenderElement(this.renderer, parentRenderNode, 'button', import4.EMPTY_INLINE_ARRAY, null);
        this._text_15 = this.renderer.createText(this._el_14, 'ForkJoin Streams', null);
        this._text_16 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_17 = import4.createRenderElement(this.renderer, parentRenderNode, 'button', import4.EMPTY_INLINE_ARRAY, null);
        this._text_18 = this.renderer.createText(this._el_17, 'FlatMap Streams', null);
        this._text_19 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_20 = import4.createRenderElement(this.renderer, parentRenderNode, 'div', new import4.InlineArray2(2, 'class', 'stream-section'), null);
        this._text_21 = this.renderer.createText(this._el_20, '\n  ', null);
        this._el_22 = import4.createRenderElement(this.renderer, this._el_20, 'h4', import4.EMPTY_INLINE_ARRAY, null);
        this._text_23 = this.renderer.createText(this._el_22, 'Concatenated Streams', null);
        this._text_24 = this.renderer.createText(this._el_20, '\n  ', null);
        this._anchor_25 = this.renderer.createTemplateAnchor(this._el_20, null);
        this._appEl_25 = new import3.AppElement(25, 20, this, this._anchor_25);
        this._TemplateRef_25_5 = new import11.TemplateRef_(this._appEl_25, viewFactory_RxJsStreams1);
        this._NgFor_25_6 = new import10.Wrapper_NgFor(this._appEl_25.vcRef, this._TemplateRef_25_5, this.parentInjector.get(import12.IterableDiffers), this.ref);
        this._text_26 = this.renderer.createText(this._el_20, '\n', null);
        this._text_27 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_28 = import4.createRenderElement(this.renderer, parentRenderNode, 'div', new import4.InlineArray2(2, 'class', 'stream-section'), null);
        this._text_29 = this.renderer.createText(this._el_28, '\n  ', null);
        this._el_30 = import4.createRenderElement(this.renderer, this._el_28, 'h4', import4.EMPTY_INLINE_ARRAY, null);
        this._text_31 = this.renderer.createText(this._el_30, 'Merged Streams', null);
        this._text_32 = this.renderer.createText(this._el_28, '\n  ', null);
        this._anchor_33 = this.renderer.createTemplateAnchor(this._el_28, null);
        this._appEl_33 = new import3.AppElement(33, 28, this, this._anchor_33);
        this._TemplateRef_33_5 = new import11.TemplateRef_(this._appEl_33, viewFactory_RxJsStreams2);
        this._NgFor_33_6 = new import10.Wrapper_NgFor(this._appEl_33.vcRef, this._TemplateRef_33_5, this.parentInjector.get(import12.IterableDiffers), this.ref);
        this._text_34 = this.renderer.createText(this._el_28, '\n', null);
        this._text_35 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_36 = import4.createRenderElement(this.renderer, parentRenderNode, 'div', new import4.InlineArray2(2, 'class', 'stream-section'), null);
        this._text_37 = this.renderer.createText(this._el_36, '\n  ', null);
        this._el_38 = import4.createRenderElement(this.renderer, this._el_36, 'h4', import4.EMPTY_INLINE_ARRAY, null);
        this._text_39 = this.renderer.createText(this._el_38, 'ForkJoined Streams', null);
        this._text_40 = this.renderer.createText(this._el_36, '\n  ', null);
        this._anchor_41 = this.renderer.createTemplateAnchor(this._el_36, null);
        this._appEl_41 = new import3.AppElement(41, 36, this, this._anchor_41);
        this._TemplateRef_41_5 = new import11.TemplateRef_(this._appEl_41, viewFactory_RxJsStreams3);
        this._NgFor_41_6 = new import10.Wrapper_NgFor(this._appEl_41.vcRef, this._TemplateRef_41_5, this.parentInjector.get(import12.IterableDiffers), this.ref);
        this._text_42 = this.renderer.createText(this._el_36, '\n', null);
        this._text_43 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_44 = import4.createRenderElement(this.renderer, parentRenderNode, 'br', import4.EMPTY_INLINE_ARRAY, null);
        this._text_45 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_46 = import4.createRenderElement(this.renderer, parentRenderNode, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._text_47 = this.renderer.createText(this._el_46, '\n  ', null);
        this._el_48 = import4.createRenderElement(this.renderer, this._el_46, 'h4', import4.EMPTY_INLINE_ARRAY, null);
        this._text_49 = this.renderer.createText(this._el_48, 'Flatmapped Streams', null);
        this._text_50 = this.renderer.createText(this._el_46, '\n  ', null);
        this._el_51 = import4.createRenderElement(this.renderer, this._el_46, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._text_52 = this.renderer.createText(this._el_51, '', null);
        this._text_53 = this.renderer.createText(this._el_46, '\n', null);
        this._text_54 = this.renderer.createText(parentRenderNode, '\n\n', null);
        var disposable_0 = this.renderer.listen(this._el_8, 'click', this.eventHandler(this._handle_click_8_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_11, 'click', this.eventHandler(this._handle_click_11_0.bind(this)));
        var disposable_2 = this.renderer.listen(this._el_14, 'click', this.eventHandler(this._handle_click_14_0.bind(this)));
        var disposable_3 = this.renderer.listen(this._el_17, 'click', this.eventHandler(this._handle_click_17_0.bind(this)));
        this.init([], [
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
        ], [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3
        ], []);
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
        this._NgFor_25_6.detectChangesInInputProps(this, this._anchor_25, throwOnChange);
        const currVal_33_0_0 = this.context.mergeStream;
        this._NgFor_33_6.check_ngForOf(currVal_33_0_0, throwOnChange, false);
        this._NgFor_33_6.detectChangesInInputProps(this, this._anchor_33, throwOnChange);
        const currVal_41_0_0 = this.context.forkJoinStream;
        this._NgFor_41_6.check_ngForOf(currVal_41_0_0, throwOnChange, false);
        this._NgFor_41_6.detectChangesInInputProps(this, this._anchor_41, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        const currVal_64 = import4.interpolate(1, '', this.context.flatMappedStreams.msg, '');
        if (import4.checkBinding(throwOnChange, this._expr_64, currVal_64)) {
            this.renderer.setText(this._text_52, currVal_64);
            this._expr_64 = currVal_64;
        }
        this.detectViewChildrenChanges(throwOnChange);
    }
    _handle_click_8_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_8_0 = (this.context.mergeStreams() !== false);
        return (true && pd_8_0);
    }
    _handle_click_11_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_11_0 = (this.context.concatStreams() !== false);
        return (true && pd_11_0);
    }
    _handle_click_14_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_14_0 = (this.context.forkJoinStreams() !== false);
        return (true && pd_14_0);
    }
    _handle_click_17_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_17_0 = (this.context.flatMapStreams() !== false);
        return (true && pd_17_0);
    }
}
export function viewFactory_RxJsStreams0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_RxJsStreams === null)) {
        (renderType_RxJsStreams = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, styles_RxJsStreams, {}));
    }
    return new _View_RxJsStreams0(viewUtils, parentInjector, declarationEl);
}
class _View_RxJsStreams1 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_RxJsStreams1, renderType_RxJsStreams, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._map_6 = import4.pureProxy2((p0, p1) => {
            return {
                stream1: p0,
                stream2: p1
            };
        });
        this._expr_7 = import7.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import4.createRenderElement(this.renderer, this._el_0, 'div', new import4.InlineArray2(2, 'class', 'floatLeft'), null);
        this._NgClass_2_3 = new import14.Wrapper_NgClass(this.parent.parentInjector.get(import12.IterableDiffers), this.parent.parentInjector.get(import15.KeyValueDiffers), new import16.ElementRef(this._el_2), this.renderer);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n  ', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4
        ], [], []);
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
        this._NgClass_2_3.detectChangesInInputProps(this, this._el_2, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._NgClass_2_3.detectChangesInHostProps(this, this._el_2, throwOnChange);
        const currVal_7 = import4.interpolate(1, '', this.context.$implicit.value, '');
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setText(this._text_3, currVal_7);
            this._expr_7 = currVal_7;
        }
        this.detectViewChildrenChanges(throwOnChange);
    }
}
function viewFactory_RxJsStreams1(viewUtils, parentInjector, declarationEl) {
    return new _View_RxJsStreams1(viewUtils, parentInjector, declarationEl);
}
class _View_RxJsStreams2 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_RxJsStreams2, renderType_RxJsStreams, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._map_6 = import4.pureProxy2((p0, p1) => {
            return {
                stream1: p0,
                stream2: p1
            };
        });
        this._expr_7 = import7.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import4.createRenderElement(this.renderer, this._el_0, 'div', new import4.InlineArray2(2, 'class', 'floatLeft'), null);
        this._NgClass_2_3 = new import14.Wrapper_NgClass(this.parent.parentInjector.get(import12.IterableDiffers), this.parent.parentInjector.get(import15.KeyValueDiffers), new import16.ElementRef(this._el_2), this.renderer);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n  ', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4
        ], [], []);
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
        this._NgClass_2_3.detectChangesInInputProps(this, this._el_2, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._NgClass_2_3.detectChangesInHostProps(this, this._el_2, throwOnChange);
        const currVal_7 = import4.interpolate(1, '', this.context.$implicit.value, '');
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setText(this._text_3, currVal_7);
            this._expr_7 = currVal_7;
        }
        this.detectViewChildrenChanges(throwOnChange);
    }
}
function viewFactory_RxJsStreams2(viewUtils, parentInjector, declarationEl) {
    return new _View_RxJsStreams2(viewUtils, parentInjector, declarationEl);
}
class _View_RxJsStreams3 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_RxJsStreams3, renderType_RxJsStreams, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._map_6 = import4.pureProxy2((p0, p1) => {
            return {
                stream1: p0,
                stream2: p1
            };
        });
        this._expr_7 = import7.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import4.createRenderElement(this.renderer, this._el_0, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._NgClass_2_3 = new import14.Wrapper_NgClass(this.parent.parentInjector.get(import12.IterableDiffers), this.parent.parentInjector.get(import15.KeyValueDiffers), new import16.ElementRef(this._el_2), this.renderer);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n  ', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4
        ], [], []);
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
        this._NgClass_2_3.detectChangesInInputProps(this, this._el_2, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._NgClass_2_3.detectChangesInHostProps(this, this._el_2, throwOnChange);
        const currVal_7 = import4.interpolate(1, '', this.context.$implicit.value, '');
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setText(this._text_3, currVal_7);
            this._expr_7 = currVal_7;
        }
        this.detectViewChildrenChanges(throwOnChange);
    }
}
function viewFactory_RxJsStreams3(viewUtils, parentInjector, declarationEl) {
    return new _View_RxJsStreams3(viewUtils, parentInjector, declarationEl);
}
