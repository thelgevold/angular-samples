import * as import0 from '../../../components/change-detection/comment-demo';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../components/change-detection/comment-section-1';
import * as import9 from './comment-section-1.ngfactory';
import * as import10 from '../../../components/change-detection/comment-section-2';
import * as import11 from './comment-section-2.ngfactory';
import * as import12 from '@angular/core/src/change_detection/change_detection_util';
export class Wrapper_CommentDemo {
    constructor() {
        this._changed = false;
        this.context = new import0.CommentDemo();
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
var renderType_CommentDemo_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
class View_CommentDemo_Host0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_CommentDemo_Host0, renderType_CommentDemo_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'comment-demo', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_CommentDemo0(this.viewUtils, this, 0, this._el_0);
        this._CommentDemo_0_3 = new Wrapper_CommentDemo();
        this.compView_0.create(this._CommentDemo_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._CommentDemo_0_3.context);
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.CommentDemo) && (0 === requestNodeIndex))) {
            return this._CommentDemo_0_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._CommentDemo_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    }
    destroyInternal() {
        this.compView_0.destroy();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
export const CommentDemoNgFactory = new import7.ComponentFactory('comment-demo', View_CommentDemo_Host0, import0.CommentDemo);
const styles_CommentDemo = [];
var renderType_CommentDemo = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_CommentDemo, {});
export class View_CommentDemo0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_CommentDemo0, renderType_CommentDemo, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
        this._expr_36 = import12.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'h1', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, 'Change Detection', null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_3 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'row'), null);
        this._text_4 = this.renderer.createText(this._el_3, '\n    ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_3, 'div', new import3.InlineArray2(2, 'class', 'col-md-6'), null);
        this._text_6 = this.renderer.createText(this._el_5, '\n\n        ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_5, 'comment-section-1', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_7 = new import9.View_CommentSection10(this.viewUtils, this, 7, this._el_7);
        this._CommentSection1_7_3 = new import9.Wrapper_CommentSection1();
        this.compView_7.create(this._CommentSection1_7_3.context);
        this._text_8 = this.renderer.createText(this._el_5, '\n    ', null);
        this._text_9 = this.renderer.createText(this._el_3, '\n\n    ', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_3, 'div', new import3.InlineArray2(2, 'class', 'col-md-6'), null);
        this._text_11 = this.renderer.createText(this._el_10, '\n        ', null);
        this._el_12 = import3.createRenderElement(this.renderer, this._el_10, 'comment-section-2', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_12 = new import11.View_CommentSection20(this.viewUtils, this, 12, this._el_12);
        this._CommentSection2_12_3 = new import11.Wrapper_CommentSection2();
        this.compView_12.create(this._CommentSection2_12_3.context);
        this._text_13 = this.renderer.createText(this._el_10, '\n    ', null);
        this._text_14 = this.renderer.createText(this._el_3, '\n', null);
        this._text_15 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_16 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'row'), null);
        this._text_17 = this.renderer.createText(this._el_16, '\n    ', null);
        this._el_18 = import3.createRenderElement(this.renderer, this._el_16, 'div', new import3.InlineArray2(2, 'style', 'margin: 15px;'), null);
        this._text_19 = this.renderer.createText(this._el_18, '\n        ', null);
        this._el_20 = import3.createRenderElement(this.renderer, this._el_18, 'button', import3.EMPTY_INLINE_ARRAY, null);
        this._text_21 = this.renderer.createText(this._el_20, 'Increment Counter', null);
        this._text_22 = this.renderer.createText(this._el_18, '\n        ', null);
        this._el_23 = import3.createRenderElement(this.renderer, this._el_18, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._el_24 = import3.createRenderElement(this.renderer, this._el_23, 'strong', import3.EMPTY_INLINE_ARRAY, null);
        this._text_25 = this.renderer.createText(this._el_24, '', null);
        this._text_26 = this.renderer.createText(this._el_18, '\n    ', null);
        this._text_27 = this.renderer.createText(this._el_16, '\n', null);
        this._text_28 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_29 = import3.createRenderElement(this.renderer, parentRenderNode, 'h4', import3.EMPTY_INLINE_ARRAY, null);
        this._el_30 = import3.createRenderElement(this.renderer, this._el_29, 'a', new import3.InlineArray2(2, 'href', 'http://www.syntaxsuccess.com/viewarticle/change-detection-in-angular-2.0'), null);
        this._text_31 = this.renderer.createText(this._el_30, 'Read more here', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_20, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_20));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._text_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._text_22,
            this._el_23,
            this._el_24,
            this._text_25,
            this._text_26,
            this._text_27,
            this._text_28,
            this._el_29,
            this._el_30,
            this._text_31
        ]), [disposable_0]);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import8.CommentSection1) && (7 === requestNodeIndex))) {
            return this._CommentSection1_7_3.context;
        }
        if (((token === import10.CommentSection2) && (12 === requestNodeIndex))) {
            return this._CommentSection2_12_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        if (this._CommentSection1_7_3.ngDoCheck(this, this._el_7, throwOnChange)) {
            this.compView_7.markAsCheckOnce();
        }
        this._CommentSection2_12_3.ngDoCheck(this, this._el_12, throwOnChange);
        const currVal_36 = import3.inlineInterpolate(1, '', this.context.counter, '');
        if (import3.checkBinding(throwOnChange, this._expr_36, currVal_36)) {
            this.renderer.setText(this._text_25, currVal_36);
            this._expr_36 = currVal_36;
        }
        this.compView_7.detectChanges(throwOnChange);
        this.compView_12.detectChanges(throwOnChange);
    }
    destroyInternal() {
        this.compView_7.destroy();
        this.compView_12.destroy();
    }
    handleEvent_20(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            const pd_sub_0 = (this.context.count() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    }
}
