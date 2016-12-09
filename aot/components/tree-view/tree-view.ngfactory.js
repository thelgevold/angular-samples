import * as import0 from '../../../components/tree-view/tree-view';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '@angular/core/src/linker/view_container';
import * as import10 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import11 from '@angular/core/src/linker/template_ref';
import * as import12 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import13 from '@angular/common/src/directives/ng_for';
import * as import14 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import15 from '@angular/common/src/directives/ng_if';
export class Wrapper_TreeView {
    constructor() {
        this._changed = false;
        this.context = new import0.TreeView();
        this._expr_0 = import1.UNINITIALIZED;
    }
    ngOnDetach(view, componentView, el) {
    }
    ngOnDestroy() {
    }
    check_directories(currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.directories = currValue;
            this._expr_0 = currValue;
        }
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
var renderType_TreeView_Host = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, [], {});
class View_TreeView_Host0 extends import2.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_TreeView_Host0, renderType_TreeView_Host, import6.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'tree-view', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_TreeView0(this.viewUtils, this, 0, this._el_0);
        this._TreeView_0_3 = new Wrapper_TreeView();
        this.compView_0.create(this._TreeView_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import8.ComponentRef_(0, this, this._el_0, this._TreeView_0_3.context);
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.TreeView) && (0 === requestNodeIndex))) {
            return this._TreeView_0_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._TreeView_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    }
    destroyInternal() {
        this.compView_0.destroy();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
export const TreeViewNgFactory = new import8.ComponentFactory('tree-view', View_TreeView_Host0, import0.TreeView);
const styles_TreeView = [];
var renderType_TreeView = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, styles_TreeView, {});
export class View_TreeView0 extends import2.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_TreeView0, renderType_TreeView, import6.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'ul', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_2 = new import9.ViewContainer(2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new import11.TemplateRef_(this, 2, this._anchor_2);
        this._NgFor_2_6 = new import10.Wrapper_NgFor(this._vc_2.vcRef, this._TemplateRef_2_5, this.parentView.injectorGet(import12.IterableDiffers, this.parentIndex), this.ref);
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
        if (((token === import11.TemplateRef) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === import13.NgFor) && (2 === requestNodeIndex))) {
            return this._NgFor_2_6.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_2_0_0 = this.context.directories;
        this._NgFor_2_6.check_ngForOf(currVal_2_0_0, throwOnChange, false);
        this._NgFor_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
    }
    destroyInternal() {
        this._vc_2.destroyNestedViews();
    }
    createEmbeddedViewInternal(nodeIndex) {
        if ((nodeIndex == 2)) {
            return new View_TreeView1(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        return null;
    }
}
class View_TreeView1 extends import2.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        super(View_TreeView1, renderType_TreeView, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_11 = import1.UNINITIALIZED;
        this._expr_12 = import1.UNINITIALIZED;
        this._expr_13 = import1.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n\n        ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'span', new import3.InlineArray2(2, 'class', 'iconButton'), null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_0, 'input', new import3.InlineArray2(2, 'type', 'checkbox'), null);
        this._text_5 = this.renderer.createText(this._el_0, '', null);
        this._anchor_6 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_6 = new import9.ViewContainer(6, 0, this, this._anchor_6);
        this._TemplateRef_6_5 = new import11.TemplateRef_(this, 6, this._anchor_6);
        this._NgIf_6_6 = new import14.Wrapper_NgIf(this._vc_6.vcRef, this._TemplateRef_6_5);
        this._text_7 = this.renderer.createText(this._el_0, '\n\n    ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_2, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_2));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_4, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_4));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._anchor_6,
            this._text_7
        ]), [
            disposable_0,
            disposable_1
        ]);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import11.TemplateRef) && (6 === requestNodeIndex))) {
            return this._TemplateRef_6_5;
        }
        if (((token === import15.NgIf) && (6 === requestNodeIndex))) {
            return this._NgIf_6_6.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_6_0_0 = this.context.$implicit.expanded;
        this._NgIf_6_6.check_ngIf(currVal_6_0_0, throwOnChange, false);
        this._NgIf_6_6.ngDoCheck(this, this._anchor_6, throwOnChange);
        this._vc_6.detectChangesInNestedViews(throwOnChange);
        const currVal_11 = import3.inlineInterpolate(1, '', this.context.$implicit.getIcon(), '');
        if (import3.checkBinding(throwOnChange, this._expr_11, currVal_11)) {
            this.renderer.setText(this._text_3, currVal_11);
            this._expr_11 = currVal_11;
        }
        const currVal_12 = this.context.$implicit.checked;
        if (import3.checkBinding(throwOnChange, this._expr_12, currVal_12)) {
            this.renderer.setElementProperty(this._el_4, 'checked', currVal_12);
            this._expr_12 = currVal_12;
        }
        const currVal_13 = import3.inlineInterpolate(1, ' ', this.context.$implicit.name, '\n\n        ');
        if (import3.checkBinding(throwOnChange, this._expr_13, currVal_13)) {
            this.renderer.setText(this._text_5, currVal_13);
            this._expr_13 = currVal_13;
        }
    }
    destroyInternal() {
        this._vc_6.destroyNestedViews();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
    createEmbeddedViewInternal(nodeIndex) {
        if ((nodeIndex == 6)) {
            return new View_TreeView2(this.viewUtils, this, 6, this._anchor_6, this._vc_6);
        }
        return null;
    }
    handleEvent_2(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            const pd_sub_0 = (this.context.$implicit.toggle() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    }
    handleEvent_4(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            const pd_sub_0 = (this.context.$implicit.check() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    }
}
class View_TreeView2 extends import2.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        super(View_TreeView2, renderType_TreeView, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n\n            ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'ul', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, '\n                ', null);
        this._anchor_4 = this.renderer.createTemplateAnchor(this._el_2, null);
        this._vc_4 = new import9.ViewContainer(4, 2, this, this._anchor_4);
        this._TemplateRef_4_5 = new import11.TemplateRef_(this, 4, this._anchor_4);
        this._NgFor_4_6 = new import10.Wrapper_NgFor(this._vc_4.vcRef, this._TemplateRef_4_5, this.parentView.parentView.parentView.injectorGet(import12.IterableDiffers, this.parentView.parentView.parentIndex), this.parentView.parentView.ref);
        this._text_5 = this.renderer.createText(this._el_2, '\n            ', null);
        this._text_6 = this.renderer.createText(this._el_0, '\n\n            ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_0, 'tree-view', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_7 = new View_TreeView0(this.viewUtils, this, 7, this._el_7);
        this._TreeView_7_3 = new Wrapper_TreeView();
        this.compView_7.create(this._TreeView_7_3.context);
        this._text_8 = this.renderer.createText(this._el_0, '\n\n        ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._anchor_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8
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
        if (((token === import0.TreeView) && (7 === requestNodeIndex))) {
            return this._TreeView_7_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_4_0_0 = this.parentView.context.$implicit.files;
        this._NgFor_4_6.check_ngForOf(currVal_4_0_0, throwOnChange, false);
        this._NgFor_4_6.ngDoCheck(this, this._anchor_4, throwOnChange);
        const currVal_7_0_0 = this.parentView.context.$implicit.directories;
        this._TreeView_7_3.check_directories(currVal_7_0_0, throwOnChange, false);
        this._TreeView_7_3.ngDoCheck(this, this._el_7, throwOnChange);
        this._vc_4.detectChangesInNestedViews(throwOnChange);
        this.compView_7.detectChanges(throwOnChange);
    }
    destroyInternal() {
        this._vc_4.destroyNestedViews();
        this.compView_7.destroy();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
    createEmbeddedViewInternal(nodeIndex) {
        if ((nodeIndex == 4)) {
            return new View_TreeView3(this.viewUtils, this, 4, this._anchor_4, this._vc_4);
        }
        return null;
    }
}
class View_TreeView3 extends import2.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        super(View_TreeView3, renderType_TreeView, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_2 = import1.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
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
}
