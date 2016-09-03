import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../components/lazy-loaded-tree-view/country-demo';
import * as import4 from '../../../components/lazy-loaded-tree-view/redux/store';
import * as import5 from '../../../components/lazy-loaded-tree-view/tree-node-service';
import * as import6 from '@angular/core/src/linker/view_utils';
import * as import8 from '@angular/core/src/linker/view_type';
import * as import9 from '@angular/core/src/change_detection/change_detection';
import * as import10 from '@angular/http/src/http';
import * as import11 from '@angular/core/src/metadata/view';
import * as import12 from '@angular/core/src/linker/component_factory';
import * as import13 from '../../../components/lazy-loaded-tree-view/tree-view';
import * as import14 from './tree-view.ngfactory';
var renderType_CountryDemo_Host = null;
class _View_CountryDemo_Host0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_CountryDemo_Host0, renderType_CountryDemo_Host, import8.ViewType.HOST, viewUtils, parentInjector, declarationEl, import9.ChangeDetectorStatus.CheckAlways);
    }
    get _Store_0_5() {
        if ((this.__Store_0_5 == null)) {
            (this.__Store_0_5 = new import4.Store(this.parentInjector.get(import10.Http)));
        }
        return this.__Store_0_5;
    }
    get _TreeNodeService_0_6() {
        if ((this.__TreeNodeService_0_6 == null)) {
            (this.__TreeNodeService_0_6 = new import5.TreeNodeService(this._Store_0_5));
        }
        return this.__TreeNodeService_0_6;
    }
    createInternal(rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('ng-component', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_CountryDemo0(this.viewUtils, this.injector(0), this._appEl_0);
        this._CountryDemo_0_4 = new import3.CountryDemo();
        this._appEl_0.initComponent(this._CountryDemo_0_4, [], compView_0);
        compView_0.create(this._CountryDemo_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import3.CountryDemo) && (0 === requestNodeIndex))) {
            return this._CountryDemo_0_4;
        }
        if (((token === import4.Store) && (0 === requestNodeIndex))) {
            return this._Store_0_5;
        }
        if (((token === import5.TreeNodeService) && (0 === requestNodeIndex))) {
            return this._TreeNodeService_0_6;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._CountryDemo_0_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
}
function viewFactory_CountryDemo_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_CountryDemo_Host === null)) {
        (renderType_CountryDemo_Host = viewUtils.createRenderComponentType('', 0, import11.ViewEncapsulation.None, [], {}));
    }
    return new _View_CountryDemo_Host0(viewUtils, parentInjector, declarationEl);
}
export const CountryDemoNgFactory = new import12.ComponentFactory('ng-component', viewFactory_CountryDemo_Host0, import3.CountryDemo);
const styles_CountryDemo = [];
var renderType_CountryDemo = null;
class _View_CountryDemo0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_CountryDemo0, renderType_CountryDemo, import8.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import9.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'lazy-tree-view', null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = import14.viewFactory_LazyTreeView0(this.viewUtils, this.injector(0), this._appEl_0);
        this._LazyTreeView_0_4 = new import13.LazyTreeView(this.parentInjector.get(import4.Store), this.parentInjector.get(import5.TreeNodeService));
        this._appEl_0.initComponent(this._LazyTreeView_0_4, [], compView_0);
        compView_0.create(this._LazyTreeView_0_4, [], null);
        this._expr_0 = import9.UNINITIALIZED;
        this.init([], [this._el_0], [], []);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import13.LazyTreeView) && (0 === requestNodeIndex))) {
            return this._LazyTreeView_0_4;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_0 = this.context.node;
        if (import6.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._LazyTreeView_0_4.root = currVal_0;
            this._expr_0 = currVal_0;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._LazyTreeView_0_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
    destroyInternal() {
        this._LazyTreeView_0_4.ngOnDestroy();
    }
}
export function viewFactory_CountryDemo0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_CountryDemo === null)) {
        (renderType_CountryDemo = viewUtils.createRenderComponentType('/Users/tor/Development/angular-2-samples/components/lazy-loaded-tree-view/country-demo.ts class CountryDemo - inline template', 0, import11.ViewEncapsulation.None, styles_CountryDemo, {}));
    }
    return new _View_CountryDemo0(viewUtils, parentInjector, declarationEl);
}
