import * as import0 from '../../../components/rxjs-caching/caching-demo';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '../../../components/rxjs-caching/friends-service';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '@angular/http/src/http';
import * as import10 from '@angular/core/src/linker/view_container';
import * as import11 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import12 from '@angular/core/src/linker/template_ref';
import * as import13 from '@angular/common/src/directives/ng_if';
import * as import14 from '../../../components/rxjs-caching/friends-list';
import * as import15 from './friends-list.ngfactory';
export class Wrapper_CachingDemo {
    constructor(p0) {
        this._changed = false;
        this.context = new import0.CachingDemo(p0);
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
var renderType_CachingDemo_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
class View_CachingDemo_Host0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_CachingDemo_Host0, renderType_CachingDemo_Host, import6.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'ng-component', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_CachingDemo0(this.viewUtils, this, 0, this._el_0);
        this._FriendsService_0_3 = new import5.FriendsService(this.injectorGet(import9.Http, this.parentIndex));
        this._CachingDemo_0_4 = new Wrapper_CachingDemo(this._FriendsService_0_3);
        this.compView_0.create(this._CachingDemo_0_4.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import8.ComponentRef_(0, this, this._el_0, this._CachingDemo_0_4.context);
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import5.FriendsService) && (0 === requestNodeIndex))) {
            return this._FriendsService_0_3;
        }
        if (((token === import0.CachingDemo) && (0 === requestNodeIndex))) {
            return this._CachingDemo_0_4.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._CachingDemo_0_4.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    }
    destroyInternal() {
        this.compView_0.destroy();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
export const CachingDemoNgFactory = new import8.ComponentFactory('ng-component', View_CachingDemo_Host0, import0.CachingDemo);
const styles_CachingDemo = [];
var renderType_CachingDemo = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_CachingDemo, {});
export class View_CachingDemo0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_CachingDemo0, renderType_CachingDemo, import6.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'button', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, 'Clear Cache', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_0, 'button', import3.EMPTY_INLINE_ARRAY, null);
        this._text_6 = this.renderer.createText(this._el_5, 'Reset', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n', null);
        this._text_8 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_9 = import3.createRenderElement(this.renderer, parentRenderNode, 'table', import3.EMPTY_INLINE_ARRAY, null);
        this._text_10 = this.renderer.createText(this._el_9, '\n    ', null);
        this._el_11 = import3.createRenderElement(this.renderer, this._el_9, 'tbody', import3.EMPTY_INLINE_ARRAY, null);
        this._anchor_12 = this.renderer.createTemplateAnchor(this._el_11, null);
        this._vc_12 = new import10.ViewContainer(12, 11, this, this._anchor_12);
        this._TemplateRef_12_5 = new import12.TemplateRef_(this, 12, this._anchor_12);
        this._NgIf_12_6 = new import11.Wrapper_NgIf(this._vc_12.vcRef, this._TemplateRef_12_5);
        this._text_13 = this.renderer.createText(this._el_11, '\n    ', null);
        this._anchor_14 = this.renderer.createTemplateAnchor(this._el_11, null);
        this._vc_14 = new import10.ViewContainer(14, 11, this, this._anchor_14);
        this._TemplateRef_14_5 = new import12.TemplateRef_(this, 14, this._anchor_14);
        this._NgIf_14_6 = new import11.Wrapper_NgIf(this._vc_14.vcRef, this._TemplateRef_14_5);
        this._text_15 = this.renderer.createText(this._el_11, '\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_2, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_2));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_5, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_5));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._anchor_12,
            this._text_13,
            this._anchor_14,
            this._text_15
        ]), [
            disposable_0,
            disposable_1
        ]);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import12.TemplateRef) && (12 === requestNodeIndex))) {
            return this._TemplateRef_12_5;
        }
        if (((token === import13.NgIf) && (12 === requestNodeIndex))) {
            return this._NgIf_12_6.context;
        }
        if (((token === import12.TemplateRef) && (14 === requestNodeIndex))) {
            return this._TemplateRef_14_5;
        }
        if (((token === import13.NgIf) && (14 === requestNodeIndex))) {
            return this._NgIf_14_6.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_12_0_0 = this.context.display.first;
        this._NgIf_12_6.check_ngIf(currVal_12_0_0, throwOnChange, false);
        this._NgIf_12_6.ngDoCheck(this, this._anchor_12, throwOnChange);
        const currVal_14_0_0 = this.context.display.second;
        this._NgIf_14_6.check_ngIf(currVal_14_0_0, throwOnChange, false);
        this._NgIf_14_6.ngDoCheck(this, this._anchor_14, throwOnChange);
        this._vc_12.detectChangesInNestedViews(throwOnChange);
        this._vc_14.detectChangesInNestedViews(throwOnChange);
    }
    destroyInternal() {
        this._vc_12.destroyNestedViews();
        this._vc_14.destroyNestedViews();
    }
    createEmbeddedViewInternal(nodeIndex) {
        if ((nodeIndex == 12)) {
            return new View_CachingDemo1(this.viewUtils, this, 12, this._anchor_12, this._vc_12);
        }
        if ((nodeIndex == 14)) {
            return new View_CachingDemo2(this.viewUtils, this, 14, this._anchor_14, this._vc_14);
        }
        return null;
    }
    handleEvent_2(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            const pd_sub_0 = (this.context.clearCache() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    }
    handleEvent_5(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            const pd_sub_0 = (this.context.reset() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    }
}
class View_CachingDemo1 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        super(View_CachingDemo1, renderType_CachingDemo, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'tr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, '    \n            ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'h2', import3.EMPTY_INLINE_ARRAY, null);
        this._text_5 = this.renderer.createText(this._el_4, 'Friends 1', null);
        this._text_6 = this.renderer.createText(this._el_2, '\n            ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_2, 'friends-list', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_7 = new import15.View_FriendsList0(this.viewUtils, this, 7, this._el_7);
        this._FriendsList_7_3 = new import15.Wrapper_FriendsList(this.parentView.parentView.injectorGet(import5.FriendsService, this.parentView.parentIndex));
        this.compView_7.create(this._FriendsList_7_3.context);
        this._text_8 = this.renderer.createText(this._el_2, '\n            ', null);
        this._el_9 = import3.createRenderElement(this.renderer, this._el_2, 'button', import3.EMPTY_INLINE_ARRAY, null);
        this._text_10 = this.renderer.createText(this._el_9, 'Remove', null);
        this._text_11 = this.renderer.createText(this._el_2, '\n        ', null);
        this._text_12 = this.renderer.createText(this._el_0, '\n    ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_9, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_9));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._text_11,
            this._text_12
        ]), [disposable_0]);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import14.FriendsList) && (7 === requestNodeIndex))) {
            return this._FriendsList_7_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._FriendsList_7_3.ngDoCheck(this, this._el_7, throwOnChange);
        this.compView_7.detectChanges(throwOnChange);
    }
    destroyInternal() {
        this.compView_7.destroy();
        this._FriendsList_7_3.ngOnDestroy();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
    handleEvent_9(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            const pd_sub_0 = (this.parentView.context.remove('first') !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    }
}
class View_CachingDemo2 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        super(View_CachingDemo2, renderType_CachingDemo, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'tr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, '    \n            ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'h2', import3.EMPTY_INLINE_ARRAY, null);
        this._text_5 = this.renderer.createText(this._el_4, 'Friends 2', null);
        this._text_6 = this.renderer.createText(this._el_2, '\n            ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_2, 'friends-list', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_7 = new import15.View_FriendsList0(this.viewUtils, this, 7, this._el_7);
        this._FriendsList_7_3 = new import15.Wrapper_FriendsList(this.parentView.parentView.injectorGet(import5.FriendsService, this.parentView.parentIndex));
        this.compView_7.create(this._FriendsList_7_3.context);
        this._text_8 = this.renderer.createText(this._el_2, '\n            ', null);
        this._el_9 = import3.createRenderElement(this.renderer, this._el_2, 'button', import3.EMPTY_INLINE_ARRAY, null);
        this._text_10 = this.renderer.createText(this._el_9, 'Remove', null);
        this._text_11 = this.renderer.createText(this._el_2, '\n        ', null);
        this._text_12 = this.renderer.createText(this._el_0, '\n    ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_9, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_9));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._text_11,
            this._text_12
        ]), [disposable_0]);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import14.FriendsList) && (7 === requestNodeIndex))) {
            return this._FriendsList_7_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._FriendsList_7_3.ngDoCheck(this, this._el_7, throwOnChange);
        this.compView_7.detectChanges(throwOnChange);
    }
    destroyInternal() {
        this.compView_7.destroy();
        this._FriendsList_7_3.ngOnDestroy();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
    handleEvent_9(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            const pd_sub_0 = (this.parentView.context.remove('second') !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    }
}
