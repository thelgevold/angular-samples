import * as import0 from '../../../components/tree-view/tree-view';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view_utils';
import * as import3 from '@angular/core/src/linker/view';
import * as import5 from '@angular/core/src/linker/element';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import11 from '@angular/core/src/linker/template_ref';
import * as import12 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import13 from '@angular/common/src/directives/ng_for';
import * as import14 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import15 from '@angular/common/src/directives/ng_if';
export class Wrapper_TreeView {
    constructor() {
        this.changed = false;
        this.context = new import0.TreeView();
        this._expr_0 = import1.UNINITIALIZED;
    }
    check_directories(currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this.changed = true;
            this.context.directories = currValue;
            this._expr_0 = currValue;
        }
    }
    detectChangesInInputProps(view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    }
    detectChangesInHostProps(view, el, throwOnChange) {
    }
}
var renderType_TreeView_Host = null;
class _View_TreeView_Host0 extends import3.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_TreeView_Host0, renderType_TreeView_Host, import7.ViewType.HOST, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import2.selectOrCreateRenderHostElement(this.renderer, 'tree-view', import2.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import5.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_TreeView0(this.viewUtils, this.injector(0), this._appEl_0);
        this._TreeView_0_4 = new Wrapper_TreeView();
        this._appEl_0.initComponent(this._TreeView_0_4.context, [], compView_0);
        compView_0.create(this._TreeView_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.TreeView) && (0 === requestNodeIndex))) {
            return this._TreeView_0_4.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._TreeView_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._TreeView_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
}
function viewFactory_TreeView_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_TreeView_Host === null)) {
        (renderType_TreeView_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_TreeView_Host0(viewUtils, parentInjector, declarationEl);
}
export const TreeViewNgFactory = new import9.ComponentFactory('tree-view', viewFactory_TreeView_Host0, import0.TreeView);
const styles_TreeView = [];
var renderType_TreeView = null;
class _View_TreeView0 extends import3.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_TreeView0, renderType_TreeView, import7.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = import2.createRenderElement(this.renderer, parentRenderNode, 'ul', import2.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_2 = new import5.AppElement(2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new import11.TemplateRef_(this._appEl_2, viewFactory_TreeView1);
        this._NgFor_2_6 = new import10.Wrapper_NgFor(this._appEl_2.vcRef, this._TemplateRef_2_5, this.parentInjector.get(import12.IterableDiffers), this.ref);
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
        this._NgFor_2_6.detectChangesInInputProps(this, this._anchor_2, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
}
export function viewFactory_TreeView0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_TreeView === null)) {
        (renderType_TreeView = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, styles_TreeView, {}));
    }
    return new _View_TreeView0(viewUtils, parentInjector, declarationEl);
}
class _View_TreeView1 extends import3.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_TreeView1, renderType_TreeView, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
        this._expr_11 = import1.UNINITIALIZED;
        this._expr_12 = import1.UNINITIALIZED;
        this._expr_13 = import1.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        this._el_0 = import2.createRenderElement(this.renderer, null, 'li', import2.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n\n        ', null);
        this._el_2 = import2.createRenderElement(this.renderer, this._el_0, 'span', new import2.InlineArray2(2, 'class', 'iconButton'), null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._el_4 = import2.createRenderElement(this.renderer, this._el_0, 'input', new import2.InlineArray2(2, 'type', 'checkbox'), null);
        this._text_5 = this.renderer.createText(this._el_0, '', null);
        this._anchor_6 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_6 = new import5.AppElement(6, 0, this, this._anchor_6);
        this._TemplateRef_6_5 = new import11.TemplateRef_(this._appEl_6, viewFactory_TreeView2);
        this._NgIf_6_6 = new import14.Wrapper_NgIf(this._appEl_6.vcRef, this._TemplateRef_6_5);
        this._text_7 = this.renderer.createText(this._el_0, '\n\n    ', null);
        var disposable_0 = this.renderer.listen(this._el_2, 'click', this.eventHandler(this._handle_click_2_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_4, 'click', this.eventHandler(this._handle_click_4_0.bind(this)));
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._anchor_6,
            this._text_7
        ], [
            disposable_0,
            disposable_1
        ], []);
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
        this._NgIf_6_6.detectChangesInInputProps(this, this._anchor_6, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        const currVal_11 = import2.interpolate(1, '', this.context.$implicit.getIcon(), '');
        if (import2.checkBinding(throwOnChange, this._expr_11, currVal_11)) {
            this.renderer.setText(this._text_3, currVal_11);
            this._expr_11 = currVal_11;
        }
        const currVal_12 = this.context.$implicit.checked;
        if (import2.checkBinding(throwOnChange, this._expr_12, currVal_12)) {
            this.renderer.setElementProperty(this._el_4, 'checked', currVal_12);
            this._expr_12 = currVal_12;
        }
        const currVal_13 = import2.interpolate(1, ' ', this.context.$implicit.name, '\n\n        ');
        if (import2.checkBinding(throwOnChange, this._expr_13, currVal_13)) {
            this.renderer.setText(this._text_5, currVal_13);
            this._expr_13 = currVal_13;
        }
        this.detectViewChildrenChanges(throwOnChange);
    }
    _handle_click_2_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_2_0 = (this.context.$implicit.toggle() !== false);
        return (true && pd_2_0);
    }
    _handle_click_4_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_4_0 = (this.context.$implicit.check() !== false);
        return (true && pd_4_0);
    }
}
function viewFactory_TreeView1(viewUtils, parentInjector, declarationEl) {
    return new _View_TreeView1(viewUtils, parentInjector, declarationEl);
}
class _View_TreeView2 extends import3.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_TreeView2, renderType_TreeView, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import2.createRenderElement(this.renderer, null, 'div', import2.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n\n            ', null);
        this._el_2 = import2.createRenderElement(this.renderer, this._el_0, 'ul', import2.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, '\n                ', null);
        this._anchor_4 = this.renderer.createTemplateAnchor(this._el_2, null);
        this._appEl_4 = new import5.AppElement(4, 2, this, this._anchor_4);
        this._TemplateRef_4_5 = new import11.TemplateRef_(this._appEl_4, viewFactory_TreeView3);
        this._NgFor_4_6 = new import10.Wrapper_NgFor(this._appEl_4.vcRef, this._TemplateRef_4_5, this.parent.parent.parentInjector.get(import12.IterableDiffers), this.parent.parent.ref);
        this._text_5 = this.renderer.createText(this._el_2, '\n            ', null);
        this._text_6 = this.renderer.createText(this._el_0, '\n\n            ', null);
        this._el_7 = import2.createRenderElement(this.renderer, this._el_0, 'tree-view', import2.EMPTY_INLINE_ARRAY, null);
        this._appEl_7 = new import5.AppElement(7, 0, this, this._el_7);
        var compView_7 = viewFactory_TreeView0(this.viewUtils, this.injector(7), this._appEl_7);
        this._TreeView_7_4 = new Wrapper_TreeView();
        this._appEl_7.initComponent(this._TreeView_7_4.context, [], compView_7);
        compView_7.create(this._TreeView_7_4.context, [], null);
        this._text_8 = this.renderer.createText(this._el_0, '\n\n        ', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._anchor_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8
        ], [], []);
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
            return this._TreeView_7_4.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_4_0_0 = this.parent.context.$implicit.files;
        this._NgFor_4_6.check_ngForOf(currVal_4_0_0, throwOnChange, false);
        this._NgFor_4_6.detectChangesInInputProps(this, this._anchor_4, throwOnChange);
        const currVal_7_0_0 = this.parent.context.$implicit.directories;
        this._TreeView_7_4.check_directories(currVal_7_0_0, throwOnChange, false);
        this._TreeView_7_4.detectChangesInInputProps(this, this._el_7, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._TreeView_7_4.detectChangesInHostProps(this, this._el_7, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
}
function viewFactory_TreeView2(viewUtils, parentInjector, declarationEl) {
    return new _View_TreeView2(viewUtils, parentInjector, declarationEl);
}
class _View_TreeView3 extends import3.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_TreeView3, renderType_TreeView, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
        this._expr_2 = import1.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        this._el_0 = import2.createRenderElement(this.renderer, null, 'li', import2.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    }
    detectChangesInternal(throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        const currVal_2 = import2.interpolate(1, '', this.context.$implicit, '');
        if (import2.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
        this.detectViewChildrenChanges(throwOnChange);
    }
}
function viewFactory_TreeView3(viewUtils, parentInjector, declarationEl) {
    return new _View_TreeView3(viewUtils, parentInjector, declarationEl);
}
