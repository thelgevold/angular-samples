import * as import0 from '../../../components/lazy-loaded-tree-view/tree-view';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view_utils';
import * as import3 from '@angular/core/src/linker/view';
import * as import5 from '@angular/core/src/linker/element';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '../../../components/lazy-loaded-tree-view/redux/store';
import * as import9 from '../../../components/lazy-loaded-tree-view/tree-node-service';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
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
        this.changed = false;
        this.context = new import0.LazyTreeView(p0, p1);
        this._expr_0 = import1.UNINITIALIZED;
    }
    check_root(currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this.changed = true;
            this.context.root = currValue;
            this._expr_0 = currValue;
        }
    }
    detectChangesInInputProps(view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    }
    detectChangesInHostProps(view, el, throwOnChange) {
    }
}
var renderType_LazyTreeView_Host = null;
class _View_LazyTreeView_Host0 extends import3.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_LazyTreeView_Host0, renderType_LazyTreeView_Host, import7.ViewType.HOST, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import2.selectOrCreateRenderHostElement(this.renderer, 'lazy-tree-view', import2.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import5.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_LazyTreeView0(this.viewUtils, this.injector(0), this._appEl_0);
        this._LazyTreeView_0_4 = new Wrapper_LazyTreeView(this.parentInjector.get(import8.Store), this.parentInjector.get(import9.TreeNodeService));
        this._appEl_0.initComponent(this._LazyTreeView_0_4.context, [], compView_0);
        compView_0.create(this._LazyTreeView_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.LazyTreeView) && (0 === requestNodeIndex))) {
            return this._LazyTreeView_0_4.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._LazyTreeView_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._LazyTreeView_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
    destroyInternal() {
        this._LazyTreeView_0_4.context.ngOnDestroy();
    }
}
function viewFactory_LazyTreeView_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_LazyTreeView_Host === null)) {
        (renderType_LazyTreeView_Host = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.None, [], {}));
    }
    return new _View_LazyTreeView_Host0(viewUtils, parentInjector, declarationEl);
}
export const LazyTreeViewNgFactory = new import11.ComponentFactory('lazy-tree-view', viewFactory_LazyTreeView_Host0, import0.LazyTreeView);
const styles_LazyTreeView = [];
var renderType_LazyTreeView = null;
class _View_LazyTreeView0 extends import3.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_LazyTreeView0, renderType_LazyTreeView, import7.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = import2.createRenderElement(this.renderer, parentRenderNode, 'ul', import2.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_2 = new import5.AppElement(2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new import13.TemplateRef_(this._appEl_2, viewFactory_LazyTreeView1);
        this._NgFor_2_6 = new import12.Wrapper_NgFor(this._appEl_2.vcRef, this._TemplateRef_2_5, this.parentInjector.get(import14.IterableDiffers), this.ref);
        this._text_3 = this.renderer.createText(this._el_0, '\n', null);
        this._text_4 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this.init([], [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3,
            this._text_4
        ], [], []);
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
        this._NgFor_2_6.detectChangesInInputProps(this, this._anchor_2, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
}
export function viewFactory_LazyTreeView0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_LazyTreeView === null)) {
        (renderType_LazyTreeView = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.None, styles_LazyTreeView, {}));
    }
    return new _View_LazyTreeView0(viewUtils, parentInjector, declarationEl);
}
class _View_LazyTreeView1 extends import3.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_LazyTreeView1, renderType_LazyTreeView, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
        this._map_14 = import2.pureProxy1((p0) => {
            return { 'tree-node-no-children': p0 };
        });
        this._expr_15 = import1.UNINITIALIZED;
        this._expr_16 = import1.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        this._el_0 = import2.createRenderElement(this.renderer, null, 'li', import2.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_2 = import2.createRenderElement(this.renderer, this._el_0, 'span', new import2.InlineArray2(2, 'class', 'iconButton'), null);
        this._NgClass_2_3 = new import16.Wrapper_NgClass(this.parent.parentInjector.get(import14.IterableDiffers), this.parent.parentInjector.get(import18.KeyValueDiffers), new import19.ElementRef(this._el_2), this.renderer);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_5 = import2.createRenderElement(this.renderer, this._el_0, 'span', import2.EMPTY_INLINE_ARRAY, null);
        this._text_6 = this.renderer.createText(this._el_5, '', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._anchor_8 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_8 = new import5.AppElement(8, 0, this, this._anchor_8);
        this._TemplateRef_8_5 = new import13.TemplateRef_(this._appEl_8, viewFactory_LazyTreeView2);
        this._NgIf_8_6 = new import17.Wrapper_NgIf(this._appEl_8.vcRef, this._TemplateRef_8_5);
        this._text_9 = this.renderer.createText(this._el_0, '\n  ', null);
        var disposable_0 = this.renderer.listen(this._el_2, 'click', this.eventHandler(this._handle_click_2_0.bind(this)));
        this.init([].concat([this._el_0]), [
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
        ], [disposable_0], []);
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
        this._NgClass_2_3.detectChangesInInputProps(this, this._el_2, throwOnChange);
        const currVal_8_0_0 = this.context.$implicit.expanded;
        this._NgIf_8_6.check_ngIf(currVal_8_0_0, throwOnChange, false);
        this._NgIf_8_6.detectChangesInInputProps(this, this._anchor_8, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._NgClass_2_3.detectChangesInHostProps(this, this._el_2, throwOnChange);
        const currVal_15 = import2.interpolate(1, '', this.context.$implicit.icon, '');
        if (import2.checkBinding(throwOnChange, this._expr_15, currVal_15)) {
            this.renderer.setText(this._text_3, currVal_15);
            this._expr_15 = currVal_15;
        }
        const currVal_16 = import2.interpolate(1, '', this.context.$implicit.name, '');
        if (import2.checkBinding(throwOnChange, this._expr_16, currVal_16)) {
            this.renderer.setText(this._text_6, currVal_16);
            this._expr_16 = currVal_16;
        }
        this.detectViewChildrenChanges(throwOnChange);
    }
    _handle_click_2_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_2_0 = (this.context.$implicit.expand() !== false);
        return (true && pd_2_0);
    }
}
function viewFactory_LazyTreeView1(viewUtils, parentInjector, declarationEl) {
    return new _View_LazyTreeView1(viewUtils, parentInjector, declarationEl);
}
class _View_LazyTreeView2 extends import3.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_LazyTreeView2, renderType_LazyTreeView, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import2.createRenderElement(this.renderer, null, 'div', import2.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n      ', null);
        this._el_2 = import2.createRenderElement(this.renderer, this._el_0, 'lazy-tree-view', import2.EMPTY_INLINE_ARRAY, null);
        this._appEl_2 = new import5.AppElement(2, 0, this, this._el_2);
        var compView_2 = viewFactory_LazyTreeView0(this.viewUtils, this.injector(2), this._appEl_2);
        this._LazyTreeView_2_4 = new Wrapper_LazyTreeView(this.parent.parent.parentInjector.get(import8.Store), this.parent.parent.parentInjector.get(import9.TreeNodeService));
        this._appEl_2.initComponent(this._LazyTreeView_2_4.context, [], compView_2);
        compView_2.create(this._LazyTreeView_2_4.context, [], null);
        this._text_3 = this.renderer.createText(this._el_0, '\n    ', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ], [], []);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.LazyTreeView) && (2 === requestNodeIndex))) {
            return this._LazyTreeView_2_4.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_2_0_0 = this.parent.context.$implicit;
        this._LazyTreeView_2_4.check_root(currVal_2_0_0, throwOnChange, false);
        this._LazyTreeView_2_4.detectChangesInInputProps(this, this._el_2, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._LazyTreeView_2_4.detectChangesInHostProps(this, this._el_2, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
    destroyInternal() {
        this._LazyTreeView_2_4.context.ngOnDestroy();
    }
}
function viewFactory_LazyTreeView2(viewUtils, parentInjector, declarationEl) {
    return new _View_LazyTreeView2(viewUtils, parentInjector, declarationEl);
}
