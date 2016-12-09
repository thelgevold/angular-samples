import * as import0 from '../../../components/access-child-components/parent';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/core/src/linker/query_list';
import * as import9 from '../../../components/access-child-components/child';
import * as import10 from './child.ngfactory';
export class Wrapper_Parent {
    constructor() {
        this._changed = false;
        this.context = new import0.Parent();
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
var renderType_Parent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
class View_Parent_Host0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_Parent_Host0, renderType_Parent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'parent', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_Parent0(this.viewUtils, this, 0, this._el_0);
        this._Parent_0_3 = new Wrapper_Parent();
        this.compView_0.create(this._Parent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._Parent_0_3.context);
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.Parent) && (0 === requestNodeIndex))) {
            return this._Parent_0_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._Parent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    }
    destroyInternal() {
        this.compView_0.destroy();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
export const ParentNgFactory = new import7.ComponentFactory('parent', View_Parent_Host0, import0.Parent);
const styles_Parent = [];
var renderType_Parent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_Parent, {});
export class View_Parent0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_Parent0, renderType_Parent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._viewQuery_Child_0 = new import8.QueryList();
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'button', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, 'Update Time via ViewChildren', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_0, 'child', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_5 = new import10.View_Child0(this.viewUtils, this, 5, this._el_5);
        this._Child_5_3 = new import10.Wrapper_Child();
        this.compView_5.create(this._Child_5_3.context);
        this._text_6 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_0, 'child', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_7 = new import10.View_Child0(this.viewUtils, this, 7, this._el_7);
        this._Child_7_3 = new import10.Wrapper_Child();
        this.compView_7.create(this._Child_7_3.context);
        this._text_8 = this.renderer.createText(this._el_0, '\n              ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_2, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_2));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8
        ]), [disposable_0]);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import9.Child) && (5 === requestNodeIndex))) {
            return this._Child_5_3.context;
        }
        if (((token === import9.Child) && (7 === requestNodeIndex))) {
            return this._Child_7_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._Child_5_3.ngDoCheck(this, this._el_5, throwOnChange);
        this._Child_7_3.ngDoCheck(this, this._el_7, throwOnChange);
        this.compView_5.detectChanges(throwOnChange);
        this.compView_7.detectChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._viewQuery_Child_0.dirty) {
                this._viewQuery_Child_0.reset([
                    this._Child_5_3.context,
                    this._Child_7_3.context
                ]);
                this.context.viewChildren = this._viewQuery_Child_0;
                this._viewQuery_Child_0.notifyOnChanges();
            }
        }
    }
    destroyInternal() {
        this.compView_5.destroy();
        this.compView_7.destroy();
    }
    handleEvent_2(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            const pd_sub_0 = (this.context.updateViewChildren() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    }
}
