import * as import0 from '../../../components/grid/grid';
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
export class Wrapper_Grid {
    constructor() {
        this.changed = false;
        this.context = new import0.Grid();
        this._expr_0 = import1.UNINITIALIZED;
        this._expr_1 = import1.UNINITIALIZED;
        this._expr_2 = import1.UNINITIALIZED;
    }
    check_columns(currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this.changed = true;
            this.context.columns = currValue;
            this._expr_0 = currValue;
        }
    }
    check_rows(currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._expr_1, currValue))) {
            this.changed = true;
            this.context.rows = currValue;
            this._expr_1 = currValue;
        }
    }
    check_name(currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._expr_2, currValue))) {
            this.changed = true;
            this.context.name = currValue;
            this._expr_2 = currValue;
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
var renderType_Grid_Host = null;
class _View_Grid_Host0 extends import3.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_Grid_Host0, renderType_Grid_Host, import7.ViewType.HOST, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import2.selectOrCreateRenderHostElement(this.renderer, 'grid', import2.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import5.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_Grid0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Grid_0_4 = new Wrapper_Grid();
        this._appEl_0.initComponent(this._Grid_0_4.context, [], compView_0);
        compView_0.create(this._Grid_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.Grid) && (0 === requestNodeIndex))) {
            return this._Grid_0_4.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._Grid_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._Grid_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
}
function viewFactory_Grid_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Grid_Host === null)) {
        (renderType_Grid_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_Grid_Host0(viewUtils, parentInjector, declarationEl);
}
export const GridNgFactory = new import9.ComponentFactory('grid', viewFactory_Grid_Host0, import0.Grid);
const styles_Grid = [];
var renderType_Grid = null;
class _View_Grid0 extends import3.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_Grid0, renderType_Grid, import7.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = import2.createRenderElement(this.renderer, parentRenderNode, 'h1', import2.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, 'Sortable Grid', null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_3 = import2.createRenderElement(this.renderer, parentRenderNode, 'table', new import2.InlineArray2(2, 'class', 'table table-striped'), null);
        this._text_4 = this.renderer.createText(this._el_3, '\n    ', null);
        this._el_5 = import2.createRenderElement(this.renderer, this._el_3, 'tbody', import2.EMPTY_INLINE_ARRAY, null);
        this._el_6 = import2.createRenderElement(this.renderer, this._el_5, 'tr', import2.EMPTY_INLINE_ARRAY, null);
        this._text_7 = this.renderer.createText(this._el_6, '\n        ', null);
        this._anchor_8 = this.renderer.createTemplateAnchor(this._el_6, null);
        this._appEl_8 = new import5.AppElement(8, 6, this, this._anchor_8);
        this._TemplateRef_8_5 = new import11.TemplateRef_(this._appEl_8, viewFactory_Grid1);
        this._NgFor_8_6 = new import10.Wrapper_NgFor(this._appEl_8.vcRef, this._TemplateRef_8_5, this.parentInjector.get(import12.IterableDiffers), this.ref);
        this._text_9 = this.renderer.createText(this._el_6, '\n    ', null);
        this._text_10 = this.renderer.createText(this._el_5, '\n    ', null);
        this._anchor_11 = this.renderer.createTemplateAnchor(this._el_5, null);
        this._appEl_11 = new import5.AppElement(11, 5, this, this._anchor_11);
        this._TemplateRef_11_5 = new import11.TemplateRef_(this._appEl_11, viewFactory_Grid2);
        this._NgFor_11_6 = new import10.Wrapper_NgFor(this._appEl_11.vcRef, this._TemplateRef_11_5, this.parentInjector.get(import12.IterableDiffers), this.ref);
        this._text_12 = this.renderer.createText(this._el_5, '\n', null);
        this.init([], [
            this._el_0,
            this._text_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._el_6,
            this._text_7,
            this._anchor_8,
            this._text_9,
            this._text_10,
            this._anchor_11,
            this._text_12
        ], [], []);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import11.TemplateRef) && (8 === requestNodeIndex))) {
            return this._TemplateRef_8_5;
        }
        if (((token === import13.NgFor) && (8 === requestNodeIndex))) {
            return this._NgFor_8_6.context;
        }
        if (((token === import11.TemplateRef) && (11 === requestNodeIndex))) {
            return this._TemplateRef_11_5;
        }
        if (((token === import13.NgFor) && (11 === requestNodeIndex))) {
            return this._NgFor_11_6.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_8_0_0 = this.context.columns;
        this._NgFor_8_6.check_ngForOf(currVal_8_0_0, throwOnChange, false);
        this._NgFor_8_6.detectChangesInInputProps(this, this._anchor_8, throwOnChange);
        const currVal_11_0_0 = this.context.rows;
        this._NgFor_11_6.check_ngForOf(currVal_11_0_0, throwOnChange, false);
        this._NgFor_11_6.detectChangesInInputProps(this, this._anchor_11, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
}
export function viewFactory_Grid0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Grid === null)) {
        (renderType_Grid = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, styles_Grid, {}));
    }
    return new _View_Grid0(viewUtils, parentInjector, declarationEl);
}
class _View_Grid1 extends import3.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_Grid1, renderType_Grid, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
        this._expr_3 = import1.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        this._el_0 = import2.createRenderElement(this.renderer, null, 'td', import2.EMPTY_INLINE_ARRAY, null);
        this._el_1 = import2.createRenderElement(this.renderer, this._el_0, 'a', import2.EMPTY_INLINE_ARRAY, null);
        this._text_2 = this.renderer.createText(this._el_1, '', null);
        var disposable_0 = this.renderer.listen(this._el_1, 'click', this.eventHandler(this._handle_click_1_0.bind(this)));
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._el_1,
            this._text_2
        ], [disposable_0], []);
        return null;
    }
    detectChangesInternal(throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        const currVal_3 = import2.interpolate(1, '', this.context.$implicit.descr, '');
        if (import2.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setText(this._text_2, currVal_3);
            this._expr_3 = currVal_3;
        }
        this.detectViewChildrenChanges(throwOnChange);
    }
    _handle_click_1_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_1_0 = (this.parent.context.sort(this.context.$implicit.name) !== false);
        return (true && pd_1_0);
    }
}
function viewFactory_Grid1(viewUtils, parentInjector, declarationEl) {
    return new _View_Grid1(viewUtils, parentInjector, declarationEl);
}
class _View_Grid2 extends import3.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_Grid2, renderType_Grid, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import2.createRenderElement(this.renderer, null, 'tr', import2.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n        ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_2 = new import5.AppElement(2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new import11.TemplateRef_(this._appEl_2, viewFactory_Grid3);
        this._NgFor_2_6 = new import10.Wrapper_NgFor(this._appEl_2.vcRef, this._TemplateRef_2_5, this.parent.parentInjector.get(import12.IterableDiffers), this.parent.ref);
        this._text_3 = this.renderer.createText(this._el_0, '\n    ', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3
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
        const currVal_2_0_0 = this.parent.context.columns;
        this._NgFor_2_6.check_ngForOf(currVal_2_0_0, throwOnChange, false);
        this._NgFor_2_6.detectChangesInInputProps(this, this._anchor_2, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
}
function viewFactory_Grid2(viewUtils, parentInjector, declarationEl) {
    return new _View_Grid2(viewUtils, parentInjector, declarationEl);
}
class _View_Grid3 extends import3.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_Grid3, renderType_Grid, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
        this._expr_2 = import1.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        this._el_0 = import2.createRenderElement(this.renderer, null, 'td', import2.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    }
    detectChangesInternal(throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        const currVal_2 = import2.interpolate(1, '', this.parent.context.$implicit[this.context.$implicit.name], '');
        if (import2.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
        this.detectViewChildrenChanges(throwOnChange);
    }
}
function viewFactory_Grid3(viewUtils, parentInjector, declarationEl) {
    return new _View_Grid3(viewUtils, parentInjector, declarationEl);
}
