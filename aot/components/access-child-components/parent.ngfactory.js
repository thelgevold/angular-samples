import * as import0 from '../../../components/access-child-components/parent';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '@angular/core/src/linker/query_list';
import * as import11 from './child.ngfactory';
import * as import12 from '../../../components/access-child-components/child';
export class Wrapper_Parent {
    constructor() {
        this.changed = false;
        this.context = new import0.Parent();
    }
    detectChangesInInputProps(view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    }
    detectChangesInHostProps(view, el, throwOnChange) {
    }
}
var renderType_Parent_Host = null;
class _View_Parent_Host0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_Parent_Host0, renderType_Parent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer, 'parent', import4.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_Parent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Parent_0_4 = new Wrapper_Parent();
        this._appEl_0.initComponent(this._Parent_0_4.context, [], compView_0);
        compView_0.create(this._Parent_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.Parent) && (0 === requestNodeIndex))) {
            return this._Parent_0_4.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._Parent_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._Parent_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
}
function viewFactory_Parent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Parent_Host === null)) {
        (renderType_Parent_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_Parent_Host0(viewUtils, parentInjector, declarationEl);
}
export const ParentNgFactory = new import9.ComponentFactory('parent', viewFactory_Parent_Host0, import0.Parent);
const styles_Parent = [];
var renderType_Parent = null;
class _View_Parent0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_Parent0, renderType_Parent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._viewQuery_Child_0 = new import10.QueryList();
        this._el_0 = import4.createRenderElement(this.renderer, parentRenderNode, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_2 = import4.createRenderElement(this.renderer, this._el_0, 'button', import4.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, 'Update Time via ViewChildren', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_5 = import4.createRenderElement(this.renderer, this._el_0, 'child', import4.EMPTY_INLINE_ARRAY, null);
        this._appEl_5 = new import3.AppElement(5, 0, this, this._el_5);
        var compView_5 = import11.viewFactory_Child0(this.viewUtils, this.injector(5), this._appEl_5);
        this._Child_5_4 = new import11.Wrapper_Child();
        this._appEl_5.initComponent(this._Child_5_4.context, [], compView_5);
        compView_5.create(this._Child_5_4.context, [], null);
        this._text_6 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_7 = import4.createRenderElement(this.renderer, this._el_0, 'child', import4.EMPTY_INLINE_ARRAY, null);
        this._appEl_7 = new import3.AppElement(7, 0, this, this._el_7);
        var compView_7 = import11.viewFactory_Child0(this.viewUtils, this.injector(7), this._appEl_7);
        this._Child_7_4 = new import11.Wrapper_Child();
        this._appEl_7.initComponent(this._Child_7_4.context, [], compView_7);
        compView_7.create(this._Child_7_4.context, [], null);
        this._text_8 = this.renderer.createText(this._el_0, '\n              ', null);
        var disposable_0 = this.renderer.listen(this._el_2, 'click', this.eventHandler(this._handle_click_2_0.bind(this)));
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8
        ], [disposable_0], []);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import12.Child) && (5 === requestNodeIndex))) {
            return this._Child_5_4.context;
        }
        if (((token === import12.Child) && (7 === requestNodeIndex))) {
            return this._Child_7_4.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._Child_5_4.detectChangesInInputProps(this, this._el_5, throwOnChange);
        this._Child_7_4.detectChangesInInputProps(this, this._el_7, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._Child_5_4.detectChangesInHostProps(this, this._el_5, throwOnChange);
        this._Child_7_4.detectChangesInHostProps(this, this._el_7, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._viewQuery_Child_0.dirty) {
                this._viewQuery_Child_0.reset([
                    this._Child_5_4.context,
                    this._Child_7_4.context
                ]);
                this.context.viewChildren = this._viewQuery_Child_0;
                this._viewQuery_Child_0.notifyOnChanges();
            }
        }
    }
    _handle_click_2_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_2_0 = (this.context.updateViewChildren() !== false);
        return (true && pd_2_0);
    }
}
export function viewFactory_Parent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Parent === null)) {
        (renderType_Parent = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, styles_Parent, {}));
    }
    return new _View_Parent0(viewUtils, parentInjector, declarationEl);
}
