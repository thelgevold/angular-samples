import * as import0 from '../../../components/rxjs-caching/friends-list';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../components/rxjs-caching/friends-service';
import * as import9 from '@angular/core/src/linker/view_container';
import * as import10 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import11 from '@angular/core/src/linker/template_ref';
import * as import12 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import13 from '@angular/common/src/directives/ng_for';
import * as import14 from '@angular/core/src/change_detection/change_detection_util';
export class Wrapper_FriendsList {
    constructor(p0) {
        this._changed = false;
        this.context = new import0.FriendsList(p0);
    }
    ngOnDetach(view, componentView, el) {
    }
    ngOnDestroy() {
        this.context.ngOnDestroy();
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
var renderType_FriendsList_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
class View_FriendsList_Host0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_FriendsList_Host0, renderType_FriendsList_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'friends-list', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_FriendsList0(this.viewUtils, this, 0, this._el_0);
        this._FriendsList_0_3 = new Wrapper_FriendsList(this.injectorGet(import8.FriendsService, this.parentIndex));
        this.compView_0.create(this._FriendsList_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._FriendsList_0_3.context);
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.FriendsList) && (0 === requestNodeIndex))) {
            return this._FriendsList_0_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._FriendsList_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    }
    destroyInternal() {
        this.compView_0.destroy();
        this._FriendsList_0_3.ngOnDestroy();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
export const FriendsListNgFactory = new import7.ComponentFactory('friends-list', View_FriendsList_Host0, import0.FriendsList);
const styles_FriendsList = [];
var renderType_FriendsList = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_FriendsList, {});
export class View_FriendsList0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_FriendsList0, renderType_FriendsList, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n    ', null);
        this._anchor_1 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_1 = new import9.ViewContainer(1, null, this, this._anchor_1);
        this._TemplateRef_1_5 = new import11.TemplateRef_(this, 1, this._anchor_1);
        this._NgFor_1_6 = new import10.Wrapper_NgFor(this._vc_1.vcRef, this._TemplateRef_1_5, this.parentView.injectorGet(import12.IterableDiffers, this.parentIndex), this.ref);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n    ', null);
        this._el_3 = import3.createRenderElement(this.renderer, parentRenderNode, 'button', import3.EMPTY_INLINE_ARRAY, null);
        this._text_4 = this.renderer.createText(this._el_3, 'Reload', null);
        this._text_5 = this.renderer.createText(parentRenderNode, '\n  ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_3, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_3));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._text_0,
            this._anchor_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._text_5
        ]), [disposable_0]);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import11.TemplateRef) && (1 === requestNodeIndex))) {
            return this._TemplateRef_1_5;
        }
        if (((token === import13.NgFor) && (1 === requestNodeIndex))) {
            return this._NgFor_1_6.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_1_0_0 = this.context.friends;
        this._NgFor_1_6.check_ngForOf(currVal_1_0_0, throwOnChange, false);
        this._NgFor_1_6.ngDoCheck(this, this._anchor_1, throwOnChange);
        this._vc_1.detectChangesInNestedViews(throwOnChange);
    }
    destroyInternal() {
        this._vc_1.destroyNestedViews();
    }
    createEmbeddedViewInternal(nodeIndex) {
        if ((nodeIndex == 1)) {
            return new View_FriendsList1(this.viewUtils, this, 1, this._anchor_1, this._vc_1);
        }
        return null;
    }
    handleEvent_3(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            const pd_sub_0 = (this.context.loadData() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    }
}
class View_FriendsList1 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        super(View_FriendsList1, renderType_FriendsList, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_2 = import14.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_2 = import3.inlineInterpolate(1, '\n      ', this.context.$implicit, '\n    ');
        if (import3.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
