import * as import0 from '../../../components/tree-view/tree-view-demo';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../components/tree-view/tree-view';
import * as import9 from './tree-view.ngfactory';
export class Wrapper_TreeViewDemo {
    constructor() {
        this._changed = false;
        this.context = new import0.TreeViewDemo();
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
var renderType_TreeViewDemo_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
class View_TreeViewDemo_Host0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_TreeViewDemo_Host0, renderType_TreeViewDemo_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'ng-component', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_TreeViewDemo0(this.viewUtils, this, 0, this._el_0);
        this._TreeViewDemo_0_3 = new Wrapper_TreeViewDemo();
        this.compView_0.create(this._TreeViewDemo_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._TreeViewDemo_0_3.context);
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.TreeViewDemo) && (0 === requestNodeIndex))) {
            return this._TreeViewDemo_0_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._TreeViewDemo_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    }
    destroyInternal() {
        this.compView_0.destroy();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
export const TreeViewDemoNgFactory = new import7.ComponentFactory('ng-component', View_TreeViewDemo_Host0, import0.TreeViewDemo);
const styles_TreeViewDemo = [];
var renderType_TreeViewDemo = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_TreeViewDemo, {});
export class View_TreeViewDemo0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_TreeViewDemo0, renderType_TreeViewDemo, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'h1', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, 'Recursive TreeView', null);
        this._el_2 = import3.createRenderElement(this.renderer, parentRenderNode, 'tree-view', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_2 = new import9.View_TreeView0(this.viewUtils, this, 2, this._el_2);
        this._TreeView_2_3 = new import9.Wrapper_TreeView();
        this.compView_2.create(this._TreeView_2_3.context);
        this._text_3 = this.renderer.createText(parentRenderNode, '          ', null);
        this._el_4 = import3.createRenderElement(this.renderer, parentRenderNode, 'h4', import3.EMPTY_INLINE_ARRAY, null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_4, 'a', new import3.InlineArray2(2, 'href', 'http://www.syntaxsuccess.com/viewarticle/recursive-treeview-in-angular-2.0'), null);
        this._text_6 = this.renderer.createText(this._el_5, 'Read more here', null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._el_5,
            this._text_6
        ]), null);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import8.TreeView) && (2 === requestNodeIndex))) {
            return this._TreeView_2_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_2_0_0 = this.context.directories;
        this._TreeView_2_3.check_directories(currVal_2_0_0, throwOnChange, false);
        this._TreeView_2_3.ngDoCheck(this, this._el_2, throwOnChange);
        this.compView_2.detectChanges(throwOnChange);
    }
    destroyInternal() {
        this.compView_2.destroy();
    }
}
