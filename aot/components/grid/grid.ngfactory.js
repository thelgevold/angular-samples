import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../components/grid/grid';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '@angular/common/src/directives/ng_for';
import * as import11 from '@angular/core/src/linker/template_ref';
import * as import12 from '@angular/core/src/change_detection/differs/iterable_differs';
var renderType_Grid_Host = null;
class _View_Grid_Host0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_Grid_Host0, renderType_Grid_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('grid', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_Grid0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Grid_0_4 = new import3.Grid();
        this._appEl_0.initComponent(this._Grid_0_4, [], compView_0);
        compView_0.create(this._Grid_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import3.Grid) && (0 === requestNodeIndex))) {
            return this._Grid_0_4;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Grid_0_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
}
function viewFactory_Grid_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Grid_Host === null)) {
        (renderType_Grid_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_Grid_Host0(viewUtils, parentInjector, declarationEl);
}
export const GridNgFactory = new import9.ComponentFactory('grid', viewFactory_Grid_Host0, import3.Grid);
const styles_Grid = [];
var renderType_Grid = null;
class _View_Grid0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_Grid0, renderType_Grid, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'h1', null);
        this._text_1 = this.renderer.createText(this._el_0, 'Sortable Grid', null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_3 = this.renderer.createElement(parentRenderNode, 'table', null);
        this.renderer.setElementAttribute(this._el_3, 'class', 'table table-striped');
        this._text_4 = this.renderer.createText(this._el_3, '\n    ', null);
        this._el_5 = this.renderer.createElement(this._el_3, 'tbody', null);
        this._el_6 = this.renderer.createElement(this._el_5, 'tr', null);
        this._text_7 = this.renderer.createText(this._el_6, '\n        ', null);
        this._anchor_8 = this.renderer.createTemplateAnchor(this._el_6, null);
        this._appEl_8 = new import2.AppElement(8, 6, this, this._anchor_8);
        this._TemplateRef_8_5 = new import11.TemplateRef_(this._appEl_8, viewFactory_Grid1);
        this._NgFor_8_6 = new import10.NgFor(this._appEl_8.vcRef, this._TemplateRef_8_5, this.parentInjector.get(import12.IterableDiffers), this.ref);
        this._text_9 = this.renderer.createText(this._el_6, '\n    ', null);
        this._text_10 = this.renderer.createText(this._el_5, '\n    ', null);
        this._anchor_11 = this.renderer.createTemplateAnchor(this._el_5, null);
        this._appEl_11 = new import2.AppElement(11, 5, this, this._anchor_11);
        this._TemplateRef_11_5 = new import11.TemplateRef_(this._appEl_11, viewFactory_Grid2);
        this._NgFor_11_6 = new import10.NgFor(this._appEl_11.vcRef, this._TemplateRef_11_5, this.parentInjector.get(import12.IterableDiffers), this.ref);
        this._text_12 = this.renderer.createText(this._el_5, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
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
        if (((token === import10.NgFor) && (8 === requestNodeIndex))) {
            return this._NgFor_8_6;
        }
        if (((token === import11.TemplateRef) && (11 === requestNodeIndex))) {
            return this._TemplateRef_11_5;
        }
        if (((token === import10.NgFor) && (11 === requestNodeIndex))) {
            return this._NgFor_11_6;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        var changes = null;
        changes = null;
        const currVal_0 = this.context.columns;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._NgFor_8_6.ngForOf = currVal_0;
            if ((changes === null)) {
                (changes = {});
            }
            changes['ngForOf'] = new import7.SimpleChange(this._expr_0, currVal_0);
            this._expr_0 = currVal_0;
        }
        if ((changes !== null)) {
            this._NgFor_8_6.ngOnChanges(changes);
        }
        if (!throwOnChange) {
            this._NgFor_8_6.ngDoCheck();
        }
        changes = null;
        const currVal_1 = this.context.rows;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this._NgFor_11_6.ngForOf = currVal_1;
            if ((changes === null)) {
                (changes = {});
            }
            changes['ngForOf'] = new import7.SimpleChange(this._expr_1, currVal_1);
            this._expr_1 = currVal_1;
        }
        if ((changes !== null)) {
            this._NgFor_11_6.ngOnChanges(changes);
        }
        if (!throwOnChange) {
            this._NgFor_11_6.ngDoCheck();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
}
export function viewFactory_Grid0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Grid === null)) {
        (renderType_Grid = viewUtils.createRenderComponentType('/Users/tor/Development/angular-2-samples/components/grid/grid.html', 0, import8.ViewEncapsulation.None, styles_Grid, {}));
    }
    return new _View_Grid0(viewUtils, parentInjector, declarationEl);
}
class _View_Grid1 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_Grid1, renderType_Grid, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'td', null);
        this._el_1 = this.renderer.createElement(this._el_0, 'a', null);
        this._text_2 = this.renderer.createText(this._el_1, '', null);
        var disposable_0 = this.renderer.listen(this._el_1, 'click', this.eventHandler(this._handle_click_1_0.bind(this)));
        this._expr_1 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._el_1,
            this._text_2
        ], [disposable_0], []);
        return null;
    }
    detectChangesInternal(throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        const currVal_1 = import4.interpolate(1, '', this.context.$implicit.descr, '');
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setText(this._text_2, currVal_1);
            this._expr_1 = currVal_1;
        }
        this.detectViewChildrenChanges(throwOnChange);
    }
    _handle_click_1_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this.parent.context.sort(this.context.$implicit.name) !== false);
        return (true && pd_0);
    }
}
function viewFactory_Grid1(viewUtils, parentInjector, declarationEl) {
    return new _View_Grid1(viewUtils, parentInjector, declarationEl);
}
class _View_Grid2 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_Grid2, renderType_Grid, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'tr', null);
        this._text_1 = this.renderer.createText(this._el_0, '\n        ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_2 = new import2.AppElement(2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new import11.TemplateRef_(this._appEl_2, viewFactory_Grid3);
        this._NgFor_2_6 = new import10.NgFor(this._appEl_2.vcRef, this._TemplateRef_2_5, this.parent.parentInjector.get(import12.IterableDiffers), this.parent.ref);
        this._text_3 = this.renderer.createText(this._el_0, '\n    ', null);
        this._expr_0 = import7.UNINITIALIZED;
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
        if (((token === import10.NgFor) && (2 === requestNodeIndex))) {
            return this._NgFor_2_6;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        var changes = null;
        changes = null;
        const currVal_0 = this.parent.context.columns;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._NgFor_2_6.ngForOf = currVal_0;
            if ((changes === null)) {
                (changes = {});
            }
            changes['ngForOf'] = new import7.SimpleChange(this._expr_0, currVal_0);
            this._expr_0 = currVal_0;
        }
        if ((changes !== null)) {
            this._NgFor_2_6.ngOnChanges(changes);
        }
        if (!throwOnChange) {
            this._NgFor_2_6.ngDoCheck();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
}
function viewFactory_Grid2(viewUtils, parentInjector, declarationEl) {
    return new _View_Grid2(viewUtils, parentInjector, declarationEl);
}
class _View_Grid3 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_Grid3, renderType_Grid, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'td', null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this._expr_0 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    }
    detectChangesInternal(throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        const currVal_0 = import4.interpolate(1, '', this.parent.context.$implicit[this.context.$implicit.name], '');
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setText(this._text_1, currVal_0);
            this._expr_0 = currVal_0;
        }
        this.detectViewChildrenChanges(throwOnChange);
    }
}
function viewFactory_Grid3(viewUtils, parentInjector, declarationEl) {
    return new _View_Grid3(viewUtils, parentInjector, declarationEl);
}
