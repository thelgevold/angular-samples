import * as import0 from '../../../components/lazy-loaded-tree-view/tree-view';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '../../../components/lazy-loaded-tree-view/redux/store';
import * as import10 from '../../../components/lazy-loaded-tree-view/tree-node-service';
import * as import11 from '@angular/core/src/linker/view_container';
import * as import12 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import13 from '@angular/core/src/linker/template_ref';
import * as import14 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import15 from '@angular/common/src/directives/ng_for';
import * as import16 from '../../node_modules/@angular/common/src/directives/ng_class.ngfactory';
import * as import17 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import18 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import19 from '@angular/core/src/linker/element_ref';
import * as import20 from '@angular/common/src/directives/ng_class';
import * as import21 from '@angular/common/src/directives/ng_if';
export class Wrapper_LazyTreeView {
    constructor(p0, p1) {
        this._changed = false;
        this.context = new import0.LazyTreeView(p0, p1);
        this._expr_0 = import1.UNINITIALIZED;
    }
    ngOnDetach(view, componentView, el) {
    }
    ngOnDestroy() {
        this.context.ngOnDestroy();
    }
    check_root(currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.root = currValue;
            this._expr_0 = currValue;
        }
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
var renderType_LazyTreeView_Host = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, [], {});
class View_LazyTreeView_Host0 extends import2.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_LazyTreeView_Host0, renderType_LazyTreeView_Host, import6.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'lazy-tree-view', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_LazyTreeView0(this.viewUtils, this, 0, this._el_0);
        this._LazyTreeView_0_3 = new Wrapper_LazyTreeView(this.injectorGet(import9.Store, this.parentIndex), this.injectorGet(import10.TreeNodeService, this.parentIndex));
        this.compView_0.create(this._LazyTreeView_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import8.ComponentRef_(0, this, this._el_0, this._LazyTreeView_0_3.context);
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.LazyTreeView) && (0 === requestNodeIndex))) {
            return this._LazyTreeView_0_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._LazyTreeView_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    }
    destroyInternal() {
        this.compView_0.destroy();
        this._LazyTreeView_0_3.ngOnDestroy();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
export const LazyTreeViewNgFactory = new import8.ComponentFactory('lazy-tree-view', View_LazyTreeView_Host0, import0.LazyTreeView);
const styles_LazyTreeView = [];
var renderType_LazyTreeView = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, styles_LazyTreeView, {});
export class View_LazyTreeView0 extends import2.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_LazyTreeView0, renderType_LazyTreeView, import6.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'ul', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_2 = new import11.ViewContainer(2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new import13.TemplateRef_(this, 2, this._anchor_2);
        this._NgFor_2_6 = new import12.Wrapper_NgFor(this._vc_2.vcRef, this._TemplateRef_2_5, this.parentView.injectorGet(import14.IterableDiffers, this.parentIndex), this.ref);
        this._text_3 = this.renderer.createText(this._el_0, '\n', null);
        this._text_4 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3,
            this._text_4
        ]), null);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import13.TemplateRef) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === import15.NgFor) && (2 === requestNodeIndex))) {
            return this._NgFor_2_6.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_2_0_0 = this.context.items;
        this._NgFor_2_6.check_ngForOf(currVal_2_0_0, throwOnChange, false);
        this._NgFor_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
    }
    destroyInternal() {
        this._vc_2.destroyNestedViews();
    }
    createEmbeddedViewInternal(nodeIndex) {
        if ((nodeIndex == 2)) {
            return new View_LazyTreeView1(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        return null;
    }
}
class View_LazyTreeView1 extends import2.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        super(View_LazyTreeView1, renderType_LazyTreeView, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._map_14 = import3.pureProxy1((p0) => {
            return { 'tree-node-no-children': p0 };
        });
        this._expr_15 = import1.UNINITIALIZED;
        this._expr_16 = import1.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'span', new import3.InlineArray2(2, 'class', 'iconButton'), null);
        this._NgClass_2_3 = new import16.Wrapper_NgClass(this.parentView.parentView.injectorGet(import14.IterableDiffers, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import18.KeyValueDiffers, this.parentView.parentIndex), new import19.ElementRef(this._el_2), this.renderer);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_0, 'span', import3.EMPTY_INLINE_ARRAY, null);
        this._text_6 = this.renderer.createText(this._el_5, '', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._anchor_8 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_8 = new import11.ViewContainer(8, 0, this, this._anchor_8);
        this._TemplateRef_8_5 = new import13.TemplateRef_(this, 8, this._anchor_8);
        this._NgIf_8_6 = new import17.Wrapper_NgIf(this._vc_8.vcRef, this._TemplateRef_8_5);
        this._text_9 = this.renderer.createText(this._el_0, '\n  ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_2, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_2));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7,
            this._anchor_8,
            this._text_9
        ]), [disposable_0]);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import20.NgClass) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) {
            return this._NgClass_2_3.context;
        }
        if (((token === import13.TemplateRef) && (8 === requestNodeIndex))) {
            return this._TemplateRef_8_5;
        }
        if (((token === import21.NgIf) && (8 === requestNodeIndex))) {
            return this._NgIf_8_6.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_2_0_0 = 'iconButton';
        this._NgClass_2_3.check_klass(currVal_2_0_0, throwOnChange, false);
        const currVal_2_0_1 = this._map_14(!this.context.$implicit.showIcon);
        this._NgClass_2_3.check_ngClass(currVal_2_0_1, throwOnChange, false);
        this._NgClass_2_3.ngDoCheck(this, this._el_2, throwOnChange);
        const currVal_8_0_0 = this.context.$implicit.expanded;
        this._NgIf_8_6.check_ngIf(currVal_8_0_0, throwOnChange, false);
        this._NgIf_8_6.ngDoCheck(this, this._anchor_8, throwOnChange);
        this._vc_8.detectChangesInNestedViews(throwOnChange);
        const currVal_15 = import3.inlineInterpolate(1, '', this.context.$implicit.icon, '');
        if (import3.checkBinding(throwOnChange, this._expr_15, currVal_15)) {
            this.renderer.setText(this._text_3, currVal_15);
            this._expr_15 = currVal_15;
        }
        const currVal_16 = import3.inlineInterpolate(1, '', this.context.$implicit.name, '');
        if (import3.checkBinding(throwOnChange, this._expr_16, currVal_16)) {
            this.renderer.setText(this._text_6, currVal_16);
            this._expr_16 = currVal_16;
        }
    }
    destroyInternal() {
        this._vc_8.destroyNestedViews();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
    createEmbeddedViewInternal(nodeIndex) {
        if ((nodeIndex == 8)) {
            return new View_LazyTreeView2(this.viewUtils, this, 8, this._anchor_8, this._vc_8);
        }
        return null;
    }
    handleEvent_2(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            const pd_sub_0 = (this.context.$implicit.expand() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    }
}
class View_LazyTreeView2 extends import2.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        super(View_LazyTreeView2, renderType_LazyTreeView, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n      ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'lazy-tree-view', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_2 = new View_LazyTreeView0(this.viewUtils, this, 2, this._el_2);
        this._LazyTreeView_2_3 = new Wrapper_LazyTreeView(this.parentView.parentView.parentView.injectorGet(import9.Store, this.parentView.parentView.parentIndex), this.parentView.parentView.parentView.injectorGet(import10.TreeNodeService, this.parentView.parentView.parentIndex));
        this.compView_2.create(this._LazyTreeView_2_3.context);
        this._text_3 = this.renderer.createText(this._el_0, '\n    ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ]), null);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.LazyTreeView) && (2 === requestNodeIndex))) {
            return this._LazyTreeView_2_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_2_0_0 = this.parentView.context.$implicit;
        this._LazyTreeView_2_3.check_root(currVal_2_0_0, throwOnChange, false);
        this._LazyTreeView_2_3.ngDoCheck(this, this._el_2, throwOnChange);
        this.compView_2.detectChanges(throwOnChange);
    }
    destroyInternal() {
        this.compView_2.destroy();
        this._LazyTreeView_2_3.ngOnDestroy();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
