import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../components/tree-view/tree-view-demo';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '../../../components/tree-view/tree-view';
import * as import11 from './tree-view.ngfactory';
var renderType_TreeViewDemo_Host = null;
class _View_TreeViewDemo_Host0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_TreeViewDemo_Host0, renderType_TreeViewDemo_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('ng-component', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_TreeViewDemo0(this.viewUtils, this.injector(0), this._appEl_0);
        this._TreeViewDemo_0_4 = new import3.TreeViewDemo();
        this._appEl_0.initComponent(this._TreeViewDemo_0_4, [], compView_0);
        compView_0.create(this._TreeViewDemo_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import3.TreeViewDemo) && (0 === requestNodeIndex))) {
            return this._TreeViewDemo_0_4;
        }
        return notFoundResult;
    }
}
function viewFactory_TreeViewDemo_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_TreeViewDemo_Host === null)) {
        (renderType_TreeViewDemo_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_TreeViewDemo_Host0(viewUtils, parentInjector, declarationEl);
}
export const TreeViewDemoNgFactory = new import9.ComponentFactory('ng-component', viewFactory_TreeViewDemo_Host0, import3.TreeViewDemo);
const styles_TreeViewDemo = [];
var renderType_TreeViewDemo = null;
class _View_TreeViewDemo0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_TreeViewDemo0, renderType_TreeViewDemo, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'h1', null);
        this._text_1 = this.renderer.createText(this._el_0, 'Recursive TreeView', null);
        this._el_2 = this.renderer.createElement(parentRenderNode, 'tree-view', null);
        this._appEl_2 = new import2.AppElement(2, null, this, this._el_2);
        var compView_2 = import11.viewFactory_TreeView0(this.viewUtils, this.injector(2), this._appEl_2);
        this._TreeView_2_4 = new import10.TreeView();
        this._appEl_2.initComponent(this._TreeView_2_4, [], compView_2);
        compView_2.create(this._TreeView_2_4, [], null);
        this._text_3 = this.renderer.createText(parentRenderNode, '          ', null);
        this._el_4 = this.renderer.createElement(parentRenderNode, 'h4', null);
        this._el_5 = this.renderer.createElement(this._el_4, 'a', null);
        this.renderer.setElementAttribute(this._el_5, 'href', 'http://www.syntaxsuccess.com/viewarticle/recursive-treeview-in-angular-2.0');
        this._text_6 = this.renderer.createText(this._el_5, 'Read more here', null);
        this._expr_0 = import7.UNINITIALIZED;
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
        if (((token === import10.TreeView) && (2 === requestNodeIndex))) {
            return this._TreeView_2_4;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_0 = this.context.directories;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._TreeView_2_4.directories = currVal_0;
            this._expr_0 = currVal_0;
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
}
export function viewFactory_TreeViewDemo0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_TreeViewDemo === null)) {
        (renderType_TreeViewDemo = viewUtils.createRenderComponentType('/Users/tor/Development/angular-2-samples/components/tree-view/tree-view-demo.ts class TreeViewDemo - inline template', 0, import8.ViewEncapsulation.None, styles_TreeViewDemo, {}));
    }
    return new _View_TreeViewDemo0(viewUtils, parentInjector, declarationEl);
}
