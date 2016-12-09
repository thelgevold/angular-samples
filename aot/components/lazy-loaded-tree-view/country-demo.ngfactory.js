import * as import0 from '../../../components/lazy-loaded-tree-view/country-demo';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '../../../components/lazy-loaded-tree-view/redux/store';
import * as import6 from '../../../components/lazy-loaded-tree-view/tree-node-service';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/constants';
import * as import9 from '@angular/http/src/http';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '../../../components/lazy-loaded-tree-view/tree-view';
import * as import12 from './tree-view.ngfactory';
export class Wrapper_CountryDemo {
    constructor() {
        this._changed = false;
        this.context = new import0.CountryDemo();
    }
    ngOnDetach(view, componentView, el) {
    }
    ngOnDestroy() {
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
var renderType_CountryDemo_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
class View_CountryDemo_Host0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_CountryDemo_Host0, renderType_CountryDemo_Host, import7.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import8.ChangeDetectorStatus.CheckAlways);
    }
    get _Store_0_4() {
        if ((this.__Store_0_4 == null)) {
            (this.__Store_0_4 = new import5.Store(this.injectorGet(import9.Http, this.parentIndex)));
        }
        return this.__Store_0_4;
    }
    get _TreeNodeService_0_5() {
        if ((this.__TreeNodeService_0_5 == null)) {
            (this.__TreeNodeService_0_5 = new import6.TreeNodeService(this._Store_0_4));
        }
        return this.__TreeNodeService_0_5;
    }
    createInternal(rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'country-demo', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_CountryDemo0(this.viewUtils, this, 0, this._el_0);
        this._CountryDemo_0_3 = new Wrapper_CountryDemo();
        this.compView_0.create(this._CountryDemo_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import10.ComponentRef_(0, this, this._el_0, this._CountryDemo_0_3.context);
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.CountryDemo) && (0 === requestNodeIndex))) {
            return this._CountryDemo_0_3.context;
        }
        if (((token === import5.Store) && (0 === requestNodeIndex))) {
            return this._Store_0_4;
        }
        if (((token === import6.TreeNodeService) && (0 === requestNodeIndex))) {
            return this._TreeNodeService_0_5;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._CountryDemo_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    }
    destroyInternal() {
        this.compView_0.destroy();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
export const CountryDemoNgFactory = new import10.ComponentFactory('country-demo', View_CountryDemo_Host0, import0.CountryDemo);
const styles_CountryDemo = [];
var renderType_CountryDemo = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_CountryDemo, {});
export class View_CountryDemo0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_CountryDemo0, renderType_CountryDemo, import7.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import8.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'h1', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, 'Lazy loaded TreeView using Redux and RxJs', null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n            ', null);
        this._el_3 = import3.createRenderElement(this.renderer, parentRenderNode, 'lazy-tree-view', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_3 = new import12.View_LazyTreeView0(this.viewUtils, this, 3, this._el_3);
        this._LazyTreeView_3_3 = new import12.Wrapper_LazyTreeView(this.parentView.injectorGet(import5.Store, this.parentIndex), this.parentView.injectorGet(import6.TreeNodeService, this.parentIndex));
        this.compView_3.create(this._LazyTreeView_3_3.context);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._text_2,
            this._el_3
        ]), null);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import11.LazyTreeView) && (3 === requestNodeIndex))) {
            return this._LazyTreeView_3_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_3_0_0 = this.context.node;
        this._LazyTreeView_3_3.check_root(currVal_3_0_0, throwOnChange, false);
        this._LazyTreeView_3_3.ngDoCheck(this, this._el_3, throwOnChange);
        this.compView_3.detectChanges(throwOnChange);
    }
    destroyInternal() {
        this.compView_3.destroy();
        this._LazyTreeView_3_3.ngOnDestroy();
    }
}
