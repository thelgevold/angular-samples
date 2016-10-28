import * as import0 from '../../../components/spreadsheet/spreadsheet';
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
export class Wrapper_Spreadsheet {
    constructor() {
        this.changed = false;
        this.context = new import0.Spreadsheet();
        this._expr_0 = import1.UNINITIALIZED;
        this._expr_1 = import1.UNINITIALIZED;
    }
    check_rows(currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this.changed = true;
            this.context.rows = currValue;
            this._expr_0 = currValue;
        }
    }
    check_columns(currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._expr_1, currValue))) {
            this.changed = true;
            this.context.columns = currValue;
            this._expr_1 = currValue;
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
var renderType_Spreadsheet_Host = null;
class _View_Spreadsheet_Host0 extends import3.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_Spreadsheet_Host0, renderType_Spreadsheet_Host, import7.ViewType.HOST, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import2.selectOrCreateRenderHostElement(this.renderer, 'spreadsheet', import2.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import5.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_Spreadsheet0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Spreadsheet_0_4 = new Wrapper_Spreadsheet();
        this._appEl_0.initComponent(this._Spreadsheet_0_4.context, [], compView_0);
        compView_0.create(this._Spreadsheet_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.Spreadsheet) && (0 === requestNodeIndex))) {
            return this._Spreadsheet_0_4.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._Spreadsheet_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._Spreadsheet_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            this._Spreadsheet_0_4.context.ngAfterViewChecked();
        }
    }
}
function viewFactory_Spreadsheet_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Spreadsheet_Host === null)) {
        (renderType_Spreadsheet_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_Spreadsheet_Host0(viewUtils, parentInjector, declarationEl);
}
export const SpreadsheetNgFactory = new import9.ComponentFactory('spreadsheet', viewFactory_Spreadsheet_Host0, import0.Spreadsheet);
const styles_Spreadsheet = [];
var renderType_Spreadsheet = null;
class _View_Spreadsheet0 extends import3.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_Spreadsheet0, renderType_Spreadsheet, import7.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = import2.createRenderElement(this.renderer, parentRenderNode, 'h1', import2.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, 'Virtualized Spreadsheet', null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_3 = import2.createRenderElement(this.renderer, parentRenderNode, 'table', new import2.InlineArray2(2, 'id', 'spreadsheet'), null);
        this._text_4 = this.renderer.createText(this._el_3, '\n    ', null);
        this._el_5 = import2.createRenderElement(this.renderer, this._el_3, 'tbody', import2.EMPTY_INLINE_ARRAY, null);
        this._el_6 = import2.createRenderElement(this.renderer, this._el_5, 'tr', import2.EMPTY_INLINE_ARRAY, null);
        this._text_7 = this.renderer.createText(this._el_6, '\n        ', null);
        this._el_8 = import2.createRenderElement(this.renderer, this._el_6, 'td', new import2.InlineArray2(2, 'class', 'row-number-column'), null);
        this._text_9 = this.renderer.createText(this._el_6, '\n        ', null);
        this._anchor_10 = this.renderer.createTemplateAnchor(this._el_6, null);
        this._appEl_10 = new import5.AppElement(10, 6, this, this._anchor_10);
        this._TemplateRef_10_5 = new import11.TemplateRef_(this._appEl_10, viewFactory_Spreadsheet1);
        this._NgFor_10_6 = new import10.Wrapper_NgFor(this._appEl_10.vcRef, this._TemplateRef_10_5, this.parentInjector.get(import12.IterableDiffers), this.ref);
        this._text_11 = this.renderer.createText(this._el_6, '\n    ', null);
        this._text_12 = this.renderer.createText(this._el_5, '\n    ', null);
        this._anchor_13 = this.renderer.createTemplateAnchor(this._el_5, null);
        this._appEl_13 = new import5.AppElement(13, 5, this, this._anchor_13);
        this._TemplateRef_13_5 = new import11.TemplateRef_(this._appEl_13, viewFactory_Spreadsheet2);
        this._NgFor_13_6 = new import10.Wrapper_NgFor(this._appEl_13.vcRef, this._TemplateRef_13_5, this.parentInjector.get(import12.IterableDiffers), this.ref);
        this._text_14 = this.renderer.createText(this._el_5, '\n', null);
        this._text_15 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_16 = import2.createRenderElement(this.renderer, parentRenderNode, 'h4', import2.EMPTY_INLINE_ARRAY, null);
        this._el_17 = import2.createRenderElement(this.renderer, this._el_16, 'a', new import2.InlineArray2(2, 'href', 'http://www.syntaxsuccess.com/viewarticle/virtualized-spreadsheet-component-in-angular-2.0'), null);
        this._text_18 = this.renderer.createText(this._el_17, 'Read more here', null);
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
        if (((token === import13.NgFor) && (10 === requestNodeIndex))) {
            return this._NgFor_10_6.context;
        }
        if (((token === import11.TemplateRef) && (13 === requestNodeIndex))) {
            return this._TemplateRef_13_5;
        }
        if (((token === import13.NgFor) && (13 === requestNodeIndex))) {
            return this._NgFor_13_6.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_10_0_0 = this.context.header;
        this._NgFor_10_6.check_ngForOf(currVal_10_0_0, throwOnChange, false);
        this._NgFor_10_6.detectChangesInInputProps(this, this._anchor_10, throwOnChange);
        const currVal_13_0_0 = this.context.visibleRows;
        this._NgFor_13_6.check_ngForOf(currVal_13_0_0, throwOnChange, false);
        this._NgFor_13_6.detectChangesInInputProps(this, this._anchor_13, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
}
export function viewFactory_Spreadsheet0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Spreadsheet === null)) {
        (renderType_Spreadsheet = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, styles_Spreadsheet, {}));
    }
    return new _View_Spreadsheet0(viewUtils, parentInjector, declarationEl);
}
class _View_Spreadsheet1 extends import3.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_Spreadsheet1, renderType_Spreadsheet, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
        this._expr_2 = import1.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        this._el_0 = import2.createRenderElement(this.renderer, null, 'td', new import2.InlineArray2(2, 'class', 'columnHeader'), null);
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
function viewFactory_Spreadsheet1(viewUtils, parentInjector, declarationEl) {
    return new _View_Spreadsheet1(viewUtils, parentInjector, declarationEl);
}
class _View_Spreadsheet2 extends import3.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_Spreadsheet2, renderType_Spreadsheet, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
        this._expr_10 = import1.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        this._el_0 = import2.createRenderElement(this.renderer, null, 'tr', import2.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_2 = import2.createRenderElement(this.renderer, this._el_0, 'td', new import2.InlineArray2(2, 'class', 'row-number-column'), null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n        ', null);
        this._anchor_5 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_5 = new import5.AppElement(5, 0, this, this._anchor_5);
        this._TemplateRef_5_5 = new import11.TemplateRef_(this._appEl_5, viewFactory_Spreadsheet3);
        this._NgFor_5_6 = new import10.Wrapper_NgFor(this._appEl_5.vcRef, this._TemplateRef_5_5, this.parent.parentInjector.get(import12.IterableDiffers), this.parent.ref);
        this._text_6 = this.renderer.createText(this._el_0, '\n    ', null);
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
        if (((token === import13.NgFor) && (5 === requestNodeIndex))) {
            return this._NgFor_5_6.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_5_0_0 = this.context.$implicit.columns;
        this._NgFor_5_6.check_ngForOf(currVal_5_0_0, throwOnChange, false);
        this._NgFor_5_6.detectChangesInInputProps(this, this._anchor_5, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        const currVal_10 = import2.interpolate(1, '', this.context.$implicit.rowIndex, '');
        if (import2.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this.renderer.setText(this._text_3, currVal_10);
            this._expr_10 = currVal_10;
        }
        this.detectViewChildrenChanges(throwOnChange);
    }
}
function viewFactory_Spreadsheet2(viewUtils, parentInjector, declarationEl) {
    return new _View_Spreadsheet2(viewUtils, parentInjector, declarationEl);
}
class _View_Spreadsheet3 extends import3.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_Spreadsheet3, renderType_Spreadsheet, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
        this._expr_4 = import1.UNINITIALIZED;
        this._expr_5 = import1.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        this._el_0 = import2.createRenderElement(this.renderer, null, 'td', import2.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_2 = import2.createRenderElement(this.renderer, this._el_0, 'input', import2.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_0, '\n        ', null);
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
        const currVal_4 = import2.interpolate(2, '', this.context.$implicit.rowIndex, '-', this.context.$implicit.columnIndex, '');
        if (import2.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementProperty(this._el_2, 'id', currVal_4);
            this._expr_4 = currVal_4;
        }
        const currVal_5 = this.context.$implicit.cellValue;
        if (import2.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementProperty(this._el_2, 'value', currVal_5);
            this._expr_5 = currVal_5;
        }
        this.detectViewChildrenChanges(throwOnChange);
    }
    _handle_input_2_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_2_0 = ((this.context.$implicit.cellValue = $event.target.value) !== false);
        return (true && pd_2_0);
    }
    _handle_click_2_1($event) {
        this.markPathToRootAsCheckOnce();
        const pd_2_0 = (this.parent.parent.context.model.selectColumn(this.context.$implicit) !== false);
        return (true && pd_2_0);
    }
    _handle_keyup_2_2($event) {
        this.markPathToRootAsCheckOnce();
        const pd_2_0 = (this.parent.parent.context.navigate($event) !== false);
        return (true && pd_2_0);
    }
}
function viewFactory_Spreadsheet3(viewUtils, parentInjector, declarationEl) {
    return new _View_Spreadsheet3(viewUtils, parentInjector, declarationEl);
}
