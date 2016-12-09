import * as import0 from '../../../components/rxjs-buffering/rxjs-buffering';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/core/src/linker/view_container';
import * as import9 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import10 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import11 from '@angular/core/src/linker/template_ref';
import * as import12 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import13 from '@angular/common/src/directives/ng_for';
import * as import14 from '@angular/common/src/directives/ng_if';
import * as import15 from '@angular/core/src/change_detection/change_detection_util';
export class Wrapper_RxJsBuffering {
    constructor() {
        this._changed = false;
        this.context = new import0.RxJsBuffering();
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
var renderType_RxJsBuffering_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
class View_RxJsBuffering_Host0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_RxJsBuffering_Host0, renderType_RxJsBuffering_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'ng-component', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_RxJsBuffering0(this.viewUtils, this, 0, this._el_0);
        this._RxJsBuffering_0_3 = new Wrapper_RxJsBuffering();
        this.compView_0.create(this._RxJsBuffering_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._RxJsBuffering_0_3.context);
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.RxJsBuffering) && (0 === requestNodeIndex))) {
            return this._RxJsBuffering_0_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._RxJsBuffering_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    }
    destroyInternal() {
        this.compView_0.destroy();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
export const RxJsBufferingNgFactory = new import7.ComponentFactory('ng-component', View_RxJsBuffering_Host0, import0.RxJsBuffering);
const styles_RxJsBuffering = [];
var renderType_RxJsBuffering = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_RxJsBuffering, {});
export class View_RxJsBuffering0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_RxJsBuffering0, renderType_RxJsBuffering, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n    ', null);
        this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'h3', import3.EMPTY_INLINE_ARRAY, null);
        this._text_2 = this.renderer.createText(this._el_1, 'Click three numbers to add', null);
        this._text_3 = this.renderer.createText(parentRenderNode, '\n    ', null);
        this._anchor_4 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_4 = new import8.ViewContainer(4, null, this, this._anchor_4);
        this._TemplateRef_4_5 = new import11.TemplateRef_(this, 4, this._anchor_4);
        this._NgFor_4_6 = new import9.Wrapper_NgFor(this._vc_4.vcRef, this._TemplateRef_4_5, this.parentView.injectorGet(import12.IterableDiffers, this.parentIndex), this.ref);
        this._text_5 = this.renderer.createText(parentRenderNode, '\n    ', null);
        this._anchor_6 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_6 = new import8.ViewContainer(6, null, this, this._anchor_6);
        this._TemplateRef_6_5 = new import11.TemplateRef_(this, 6, this._anchor_6);
        this._NgIf_6_6 = new import10.Wrapper_NgIf(this._vc_6.vcRef, this._TemplateRef_6_5);
        this._text_7 = this.renderer.createText(parentRenderNode, '\n  ', null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._text_0,
            this._el_1,
            this._text_2,
            this._text_3,
            this._anchor_4,
            this._text_5,
            this._anchor_6,
            this._text_7
        ]), null);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import11.TemplateRef) && (4 === requestNodeIndex))) {
            return this._TemplateRef_4_5;
        }
        if (((token === import13.NgFor) && (4 === requestNodeIndex))) {
            return this._NgFor_4_6.context;
        }
        if (((token === import11.TemplateRef) && (6 === requestNodeIndex))) {
            return this._TemplateRef_6_5;
        }
        if (((token === import14.NgIf) && (6 === requestNodeIndex))) {
            return this._NgIf_6_6.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_4_0_0 = this.context.numbers;
        this._NgFor_4_6.check_ngForOf(currVal_4_0_0, throwOnChange, false);
        this._NgFor_4_6.ngDoCheck(this, this._anchor_4, throwOnChange);
        const currVal_6_0_0 = this.context.showSum;
        this._NgIf_6_6.check_ngIf(currVal_6_0_0, throwOnChange, false);
        this._NgIf_6_6.ngDoCheck(this, this._anchor_6, throwOnChange);
        this._vc_4.detectChangesInNestedViews(throwOnChange);
        this._vc_6.detectChangesInNestedViews(throwOnChange);
    }
    destroyInternal() {
        this._vc_4.destroyNestedViews();
        this._vc_6.destroyNestedViews();
    }
    createEmbeddedViewInternal(nodeIndex) {
        if ((nodeIndex == 4)) {
            return new View_RxJsBuffering1(this.viewUtils, this, 4, this._anchor_4, this._vc_4);
        }
        if ((nodeIndex == 6)) {
            return new View_RxJsBuffering2(this.viewUtils, this, 6, this._anchor_6, this._vc_6);
        }
        return null;
    }
}
class View_RxJsBuffering1 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        super(View_RxJsBuffering1, renderType_RxJsBuffering, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_2 = import15.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'box'), null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_0, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), [disposable_0]);
        return null;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_2 = import3.inlineInterpolate(1, '', this.context.$implicit, '');
        if (import3.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
    handleEvent_0(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            const pd_sub_0 = (this.parentView.context.add(this.context.$implicit) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    }
}
class View_RxJsBuffering2 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        super(View_RxJsBuffering2, renderType_RxJsBuffering, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_2 = import15.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'sum'), null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_2 = import3.inlineInterpolate(1, 'SUM: ', this.parentView.context.calculation.sum, '');
        if (import3.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
