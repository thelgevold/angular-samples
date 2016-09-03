import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../components/spreadsheet/spreadsheet';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '@angular/common/src/directives/ng_for';
import * as import11 from '@angular/core/src/linker/template_ref';
import * as import12 from '@angular/core/src/change_detection/differs/iterable_differs';
var renderType_Spreadsheet_Host = null;
class _View_Spreadsheet_Host0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_Spreadsheet_Host0, renderType_Spreadsheet_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('spreadsheet', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_Spreadsheet0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Spreadsheet_0_4 = new import3.Spreadsheet();
        this._appEl_0.initComponent(this._Spreadsheet_0_4, [], compView_0);
        compView_0.create(this._Spreadsheet_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import3.Spreadsheet) && (0 === requestNodeIndex))) {
            return this._Spreadsheet_0_4;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            this._Spreadsheet_0_4.ngAfterViewChecked();
        }
    }
}
function viewFactory_Spreadsheet_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Spreadsheet_Host === null)) {
        (renderType_Spreadsheet_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_Spreadsheet_Host0(viewUtils, parentInjector, declarationEl);
}
export const SpreadsheetNgFactory = new import9.ComponentFactory('spreadsheet', viewFactory_Spreadsheet_Host0, import3.Spreadsheet);
const styles_Spreadsheet = [];
var renderType_Spreadsheet = null;
class _View_Spreadsheet0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_Spreadsheet0, renderType_Spreadsheet, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'h1', null);
        this._text_1 = this.renderer.createText(this._el_0, 'Virtualized Spreadsheet', null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_3 = this.renderer.createElement(parentRenderNode, 'table', null);
        this.renderer.setElementAttribute(this._el_3, 'id', 'spreadsheet');
        this._text_4 = this.renderer.createText(this._el_3, '\n    ', null);
        this._el_5 = this.renderer.createElement(this._el_3, 'tbody', null);
        this._el_6 = this.renderer.createElement(this._el_5, 'tr', null);
        this._text_7 = this.renderer.createText(this._el_6, '\n        ', null);
        this._el_8 = this.renderer.createElement(this._el_6, 'td', null);
        this.renderer.setElementAttribute(this._el_8, 'class', 'row-number-column');
        this._text_9 = this.renderer.createText(this._el_6, '\n        ', null);
        this._anchor_10 = this.renderer.createTemplateAnchor(this._el_6, null);
        this._appEl_10 = new import2.AppElement(10, 6, this, this._anchor_10);
        this._TemplateRef_10_5 = new import11.TemplateRef_(this._appEl_10, viewFactory_Spreadsheet1);
        this._NgFor_10_6 = new import10.NgFor(this._appEl_10.vcRef, this._TemplateRef_10_5, this.parentInjector.get(import12.IterableDiffers), this.ref);
        this._text_11 = this.renderer.createText(this._el_6, '\n    ', null);
        this._text_12 = this.renderer.createText(this._el_5, '\n    ', null);
        this._anchor_13 = this.renderer.createTemplateAnchor(this._el_5, null);
        this._appEl_13 = new import2.AppElement(13, 5, this, this._anchor_13);
        this._TemplateRef_13_5 = new import11.TemplateRef_(this._appEl_13, viewFactory_Spreadsheet2);
        this._NgFor_13_6 = new import10.NgFor(this._appEl_13.vcRef, this._TemplateRef_13_5, this.parentInjector.get(import12.IterableDiffers), this.ref);
        this._text_14 = this.renderer.createText(this._el_5, '\n', null);
        this._text_15 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_16 = this.renderer.createElement(parentRenderNode, 'h4', null);
        this._el_17 = this.renderer.createElement(this._el_16, 'a', null);
        this.renderer.setElementAttribute(this._el_17, 'href', 'http://www.syntaxsuccess.com/viewarticle/virtualized-spreadsheet-component-in-angular-2.0');
        this._text_18 = this.renderer.createText(this._el_17, 'Read more here', null);
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
            this._el_8,
            this._text_9,
            this._anchor_10,
            this._text_11,
            this._text_12,
            this._anchor_13,
            this._text_14,
            this._text_15,
            this._el_16,
            this._el_17,
            this._text_18
        ], [], []);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import11.TemplateRef) && (10 === requestNodeIndex))) {
            return this._TemplateRef_10_5;
        }
        if (((token === import10.NgFor) && (10 === requestNodeIndex))) {
            return this._NgFor_10_6;
        }
        if (((token === import11.TemplateRef) && (13 === requestNodeIndex))) {
            return this._TemplateRef_13_5;
        }
        if (((token === import10.NgFor) && (13 === requestNodeIndex))) {
            return this._NgFor_13_6;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        var changes = null;
        changes = null;
        const currVal_0 = this.context.header;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._NgFor_10_6.ngForOf = currVal_0;
            if ((changes === null)) {
                (changes = {});
            }
            changes['ngForOf'] = new import7.SimpleChange(this._expr_0, currVal_0);
            this._expr_0 = currVal_0;
        }
        if ((changes !== null)) {
            this._NgFor_10_6.ngOnChanges(changes);
        }
        if (!throwOnChange) {
            this._NgFor_10_6.ngDoCheck();
        }
        changes = null;
        const currVal_1 = this.context.visibleRows;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this._NgFor_13_6.ngForOf = currVal_1;
            if ((changes === null)) {
                (changes = {});
            }
            changes['ngForOf'] = new import7.SimpleChange(this._expr_1, currVal_1);
            this._expr_1 = currVal_1;
        }
        if ((changes !== null)) {
            this._NgFor_13_6.ngOnChanges(changes);
        }
        if (!throwOnChange) {
            this._NgFor_13_6.ngDoCheck();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
}
export function viewFactory_Spreadsheet0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Spreadsheet === null)) {
        (renderType_Spreadsheet = viewUtils.createRenderComponentType('/Users/tor/Development/angular-2-samples/components/spreadsheet/spreadsheet.html', 0, import8.ViewEncapsulation.None, styles_Spreadsheet, {}));
    }
    return new _View_Spreadsheet0(viewUtils, parentInjector, declarationEl);
}
class _View_Spreadsheet1 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_Spreadsheet1, renderType_Spreadsheet, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'td', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'columnHeader');
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
        const currVal_0 = import4.interpolate(1, '', this.context.$implicit, '');
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setText(this._text_1, currVal_0);
            this._expr_0 = currVal_0;
        }
        this.detectViewChildrenChanges(throwOnChange);
    }
}
function viewFactory_Spreadsheet1(viewUtils, parentInjector, declarationEl) {
    return new _View_Spreadsheet1(viewUtils, parentInjector, declarationEl);
}
class _View_Spreadsheet2 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_Spreadsheet2, renderType_Spreadsheet, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'tr', null);
        this._text_1 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'td', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'row-number-column');
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n        ', null);
        this._anchor_5 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_5 = new import2.AppElement(5, 0, this, this._anchor_5);
        this._TemplateRef_5_5 = new import11.TemplateRef_(this._appEl_5, viewFactory_Spreadsheet3);
        this._NgFor_5_6 = new import10.NgFor(this._appEl_5.vcRef, this._TemplateRef_5_5, this.parent.parentInjector.get(import12.IterableDiffers), this.parent.ref);
        this._text_6 = this.renderer.createText(this._el_0, '\n    ', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._anchor_5,
            this._text_6
        ], [], []);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import11.TemplateRef) && (5 === requestNodeIndex))) {
            return this._TemplateRef_5_5;
        }
        if (((token === import10.NgFor) && (5 === requestNodeIndex))) {
            return this._NgFor_5_6;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        var changes = null;
        changes = null;
        const currVal_1 = this.context.$implicit.columns;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this._NgFor_5_6.ngForOf = currVal_1;
            if ((changes === null)) {
                (changes = {});
            }
            changes['ngForOf'] = new import7.SimpleChange(this._expr_1, currVal_1);
            this._expr_1 = currVal_1;
        }
        if ((changes !== null)) {
            this._NgFor_5_6.ngOnChanges(changes);
        }
        if (!throwOnChange) {
            this._NgFor_5_6.ngDoCheck();
        }
        this.detectContentChildrenChanges(throwOnChange);
        const currVal_0 = import4.interpolate(1, '', this.context.$implicit.rowIndex, '');
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setText(this._text_3, currVal_0);
            this._expr_0 = currVal_0;
        }
        this.detectViewChildrenChanges(throwOnChange);
    }
}
function viewFactory_Spreadsheet2(viewUtils, parentInjector, declarationEl) {
    return new _View_Spreadsheet2(viewUtils, parentInjector, declarationEl);
}
class _View_Spreadsheet3 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_Spreadsheet3, renderType_Spreadsheet, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'td', null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'input', null);
        this._text_3 = this.renderer.createText(this._el_0, '\n        ', null);
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_2, 'input', this.eventHandler(this._handle_input_2_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_2, 'click', this.eventHandler(this._handle_click_2_1.bind(this)));
        var disposable_2 = this.renderer.listen(this._el_2, 'keyup', this.eventHandler(this._handle_keyup_2_2.bind(this)));
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ], [
            disposable_0,
            disposable_1,
            disposable_2
        ], []);
        return null;
    }
    detectChangesInternal(throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        const currVal_3 = import4.interpolate(2, '', this.context.$implicit.rowIndex, '-', this.context.$implicit.columnIndex, '');
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementProperty(this._el_2, 'id', currVal_3);
            this._expr_3 = currVal_3;
        }
        const currVal_4 = this.context.$implicit.cellValue;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementProperty(this._el_2, 'value', currVal_4);
            this._expr_4 = currVal_4;
        }
        this.detectViewChildrenChanges(throwOnChange);
    }
    _handle_input_2_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = ((this.context.$implicit.cellValue = $event.target.value) !== false);
        return (true && pd_0);
    }
    _handle_click_2_1($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this.parent.parent.context.model.selectColumn(this.context.$implicit) !== false);
        return (true && pd_0);
    }
    _handle_keyup_2_2($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this.parent.parent.context.navigate($event) !== false);
        return (true && pd_0);
    }
}
function viewFactory_Spreadsheet3(viewUtils, parentInjector, declarationEl) {
    return new _View_Spreadsheet3(viewUtils, parentInjector, declarationEl);
}
