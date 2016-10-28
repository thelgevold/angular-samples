import * as import0 from '../../../components/insertion-sort/insertion-sort';
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
import * as import14 from '../../node_modules/@angular/common/src/directives/ng_class.ngfactory';
import * as import15 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import16 from '@angular/core/src/linker/element_ref';
import * as import17 from '@angular/common/src/directives/ng_class';
export class Wrapper_InsertionSort {
    constructor() {
        this.changed = false;
        this.context = new import0.InsertionSort();
        this._expr_0 = import1.UNINITIALIZED;
    }
    check_list(currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this.changed = true;
            this.context.list = currValue;
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
var renderType_InsertionSort_Host = null;
class _View_InsertionSort_Host0 extends import3.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_InsertionSort_Host0, renderType_InsertionSort_Host, import7.ViewType.HOST, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import2.selectOrCreateRenderHostElement(this.renderer, 'insertion-sort', import2.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import5.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_InsertionSort0(this.viewUtils, this.injector(0), this._appEl_0);
        this._InsertionSort_0_4 = new Wrapper_InsertionSort();
        this._appEl_0.initComponent(this._InsertionSort_0_4.context, [], compView_0);
        compView_0.create(this._InsertionSort_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.InsertionSort) && (0 === requestNodeIndex))) {
            return this._InsertionSort_0_4.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._InsertionSort_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._InsertionSort_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
}
function viewFactory_InsertionSort_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_InsertionSort_Host === null)) {
        (renderType_InsertionSort_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_InsertionSort_Host0(viewUtils, parentInjector, declarationEl);
}
export const InsertionSortNgFactory = new import9.ComponentFactory('insertion-sort', viewFactory_InsertionSort_Host0, import0.InsertionSort);
const styles_InsertionSort = [];
var renderType_InsertionSort = null;
class _View_InsertionSort0 extends import3.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_InsertionSort0, renderType_InsertionSort, import7.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = import2.createRenderElement(this.renderer, parentRenderNode, 'table', new import2.InlineArray2(2, 'class', 'sort'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import2.createRenderElement(this.renderer, this._el_0, 'tbody', import2.EMPTY_INLINE_ARRAY, null);
        this._el_3 = import2.createRenderElement(this.renderer, this._el_2, 'tr', import2.EMPTY_INLINE_ARRAY, null);
        this._text_4 = this.renderer.createText(this._el_3, '\n        ', null);
        this._anchor_5 = this.renderer.createTemplateAnchor(this._el_3, null);
        this._appEl_5 = new import5.AppElement(5, 3, this, this._anchor_5);
        this._TemplateRef_5_5 = new import11.TemplateRef_(this._appEl_5, viewFactory_InsertionSort1);
        this._NgFor_5_6 = new import10.Wrapper_NgFor(this._appEl_5.vcRef, this._TemplateRef_5_5, this.parentInjector.get(import12.IterableDiffers), this.ref);
        this._text_6 = this.renderer.createText(this._el_3, '\n    ', null);
        this._text_7 = this.renderer.createText(this._el_2, '\n', null);
        this._text_8 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_9 = import2.createRenderElement(this.renderer, parentRenderNode, 'div', new import2.InlineArray2(2, 'style', 'margin-top: 10px;'), null);
        this._text_10 = this.renderer.createText(this._el_9, '\n    ', null);
        this._el_11 = import2.createRenderElement(this.renderer, this._el_9, 'button', import2.EMPTY_INLINE_ARRAY, null);
        this._text_12 = this.renderer.createText(this._el_11, 'Sort list', null);
        this._text_13 = this.renderer.createText(this._el_9, '\n', null);
        var disposable_0 = this.renderer.listen(this._el_11, 'click', this.eventHandler(this._handle_click_11_0.bind(this)));
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._el_3,
            this._text_4,
            this._anchor_5,
            this._text_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._text_13
        ], [disposable_0], []);
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
        const currVal_5_0_0 = this.context.list.items;
        this._NgFor_5_6.check_ngForOf(currVal_5_0_0, throwOnChange, false);
        this._NgFor_5_6.detectChangesInInputProps(this, this._anchor_5, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
    _handle_click_11_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_11_0 = (this.context.sortList() !== false);
        return (true && pd_11_0);
    }
}
export function viewFactory_InsertionSort0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_InsertionSort === null)) {
        (renderType_InsertionSort = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, styles_InsertionSort, {}));
    }
    return new _View_InsertionSort0(viewUtils, parentInjector, declarationEl);
}
class _View_InsertionSort1 extends import3.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_InsertionSort1, renderType_InsertionSort, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
        this._expr_6 = import1.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        this._el_0 = import2.createRenderElement(this.renderer, null, 'td', import2.EMPTY_INLINE_ARRAY, null);
        this._NgClass_0_3 = new import14.Wrapper_NgClass(this.parent.parentInjector.get(import12.IterableDiffers), this.parent.parentInjector.get(import15.KeyValueDiffers), new import16.ElementRef(this._el_0), this.renderer);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_2 = import2.createRenderElement(this.renderer, this._el_0, 'span', import2.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n        ', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4
        ], [], []);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import17.NgClass) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 4)))) {
            return this._NgClass_0_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_0_0_0 = this.context.$implicit.getClass();
        this._NgClass_0_3.check_ngClass(currVal_0_0_0, throwOnChange, false);
        this._NgClass_0_3.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._NgClass_0_3.detectChangesInHostProps(this, this._el_0, throwOnChange);
        const currVal_6 = import2.interpolate(1, '', this.context.$implicit.val, '');
        if (import2.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setText(this._text_3, currVal_6);
            this._expr_6 = currVal_6;
        }
        this.detectViewChildrenChanges(throwOnChange);
    }
}
function viewFactory_InsertionSort1(viewUtils, parentInjector, declarationEl) {
    return new _View_InsertionSort1(viewUtils, parentInjector, declarationEl);
}
