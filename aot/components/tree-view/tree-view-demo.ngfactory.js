import * as import0 from '../../../components/tree-view/tree-view-demo';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from './tree-view.ngfactory';
import * as import11 from '../../../components/tree-view/tree-view';
export class Wrapper_TreeViewDemo {
    constructor() {
        this.changed = false;
        this.context = new import0.TreeViewDemo();
    }
    detectChangesInInputProps(view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    }
    detectChangesInHostProps(view, el, throwOnChange) {
    }
}
var renderType_TreeViewDemo_Host = null;
class _View_TreeViewDemo_Host0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_TreeViewDemo_Host0, renderType_TreeViewDemo_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer, 'ng-component', import4.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_TreeViewDemo0(this.viewUtils, this.injector(0), this._appEl_0);
        this._TreeViewDemo_0_4 = new Wrapper_TreeViewDemo();
        this._appEl_0.initComponent(this._TreeViewDemo_0_4.context, [], compView_0);
        compView_0.create(this._TreeViewDemo_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.TreeViewDemo) && (0 === requestNodeIndex))) {
            return this._TreeViewDemo_0_4.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._TreeViewDemo_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._TreeViewDemo_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
}
function viewFactory_TreeViewDemo_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_TreeViewDemo_Host === null)) {
        (renderType_TreeViewDemo_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_TreeViewDemo_Host0(viewUtils, parentInjector, declarationEl);
}
export const TreeViewDemoNgFactory = new import9.ComponentFactory('ng-component', viewFactory_TreeViewDemo_Host0, import0.TreeViewDemo);
const styles_TreeViewDemo = [];
var renderType_TreeViewDemo = null;
class _View_TreeViewDemo0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_TreeViewDemo0, renderType_TreeViewDemo, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = import4.createRenderElement(this.renderer, parentRenderNode, 'h1', import4.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, 'Recursive TreeView', null);
        this._el_2 = import4.createRenderElement(this.renderer, parentRenderNode, 'tree-view', import4.EMPTY_INLINE_ARRAY, null);
        this._appEl_2 = new import3.AppElement(2, null, this, this._el_2);
        var compView_2 = import10.viewFactory_TreeView0(this.viewUtils, this.injector(2), this._appEl_2);
        this._TreeView_2_4 = new import10.Wrapper_TreeView();
        this._appEl_2.initComponent(this._TreeView_2_4.context, [], compView_2);
        compView_2.create(this._TreeView_2_4.context, [], null);
        this._text_3 = this.renderer.createText(parentRenderNode, '          ', null);
        this._el_4 = import4.createRenderElement(this.renderer, parentRenderNode, 'h4', import4.EMPTY_INLINE_ARRAY, null);
        this._el_5 = import4.createRenderElement(this.renderer, this._el_4, 'a', new import4.InlineArray2(2, 'href', 'http://www.syntaxsuccess.com/viewarticle/recursive-treeview-in-angular-2.0'), null);
        this._text_6 = this.renderer.createText(this._el_5, 'Read more here', null);
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._el_5,
            this._text_6
        ], [], []);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import11.TreeView) && (2 === requestNodeIndex))) {
            return this._TreeView_2_4.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_2_0_0 = this.context.directories;
        this._TreeView_2_4.check_directories(currVal_2_0_0, throwOnChange, false);
        this._TreeView_2_4.detectChangesInInputProps(this, this._el_2, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._TreeView_2_4.detectChangesInHostProps(this, this._el_2, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
}
export function viewFactory_TreeViewDemo0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_TreeViewDemo === null)) {
        (renderType_TreeViewDemo = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, styles_TreeViewDemo, {}));
    }
    return new _View_TreeViewDemo0(viewUtils, parentInjector, declarationEl);
}
