import * as import0 from '../../../components/pub-sub/consumer';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '../../../components/pub-sub/pub-sub-service';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import12 from '@angular/core/src/linker/template_ref';
import * as import13 from '@angular/common/src/directives/ng_if';
import * as import14 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import15 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import16 from '@angular/common/src/directives/ng_for';
export class Wrapper_Consumer {
    constructor(p0) {
        this.changed = false;
        this.context = new import0.Consumer(p0);
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
var renderType_Consumer_Host = null;
class _View_Consumer_Host0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_Consumer_Host0, renderType_Consumer_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer, 'consumer', import4.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_Consumer0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Consumer_0_4 = new Wrapper_Consumer(this.parentInjector.get(import8.PubSubService));
        this._appEl_0.initComponent(this._Consumer_0_4.context, [], compView_0);
        compView_0.create(this._Consumer_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.Consumer) && (0 === requestNodeIndex))) {
            return this._Consumer_0_4.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._Consumer_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._Consumer_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
}
function viewFactory_Consumer_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Consumer_Host === null)) {
        (renderType_Consumer_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_Consumer_Host0(viewUtils, parentInjector, declarationEl);
}
export const ConsumerNgFactory = new import10.ComponentFactory('consumer', viewFactory_Consumer_Host0, import0.Consumer);
const styles_Consumer = [];
var renderType_Consumer = null;
class _View_Consumer0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_Consumer0, renderType_Consumer, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._anchor_0 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._anchor_0);
        this._TemplateRef_0_5 = new import12.TemplateRef_(this._appEl_0, viewFactory_Consumer1);
        this._NgIf_0_6 = new import11.Wrapper_NgIf(this._appEl_0.vcRef, this._TemplateRef_0_5);
        this.init([], [this._anchor_0], [], []);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import12.TemplateRef) && (0 === requestNodeIndex))) {
            return this._TemplateRef_0_5;
        }
        if (((token === import13.NgIf) && (0 === requestNodeIndex))) {
            return this._NgIf_0_6.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_0_0_0 = (this.context.processed.length > 0);
        this._NgIf_0_6.check_ngIf(currVal_0_0_0, throwOnChange, false);
        this._NgIf_0_6.detectChangesInInputProps(this, this._anchor_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
}
export function viewFactory_Consumer0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Consumer === null)) {
        (renderType_Consumer = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, styles_Consumer, {}));
    }
    return new _View_Consumer0(viewUtils, parentInjector, declarationEl);
}
class _View_Consumer1 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_Consumer1, renderType_Consumer, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import4.createRenderElement(this.renderer, this._el_0, 'h4', import4.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, 'Processed Customers', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_5 = import4.createRenderElement(this.renderer, this._el_0, 'table', new import4.InlineArray2(2, 'class', 'table'), null);
        this._text_6 = this.renderer.createText(this._el_5, '\n        ', null);
        this._el_7 = import4.createRenderElement(this.renderer, this._el_5, 'thead', import4.EMPTY_INLINE_ARRAY, null);
        this._text_8 = this.renderer.createText(this._el_7, '\n            ', null);
        this._el_9 = import4.createRenderElement(this.renderer, this._el_7, 'tr', import4.EMPTY_INLINE_ARRAY, null);
        this._text_10 = this.renderer.createText(this._el_9, '\n                ', null);
        this._el_11 = import4.createRenderElement(this.renderer, this._el_9, 'td', import4.EMPTY_INLINE_ARRAY, null);
        this._text_12 = this.renderer.createText(this._el_11, 'First Name', null);
        this._el_13 = import4.createRenderElement(this.renderer, this._el_9, 'td', import4.EMPTY_INLINE_ARRAY, null);
        this._text_14 = this.renderer.createText(this._el_13, 'Last Name', null);
        this._text_15 = this.renderer.createText(this._el_9, '\n            ', null);
        this._text_16 = this.renderer.createText(this._el_7, '\n        ', null);
        this._text_17 = this.renderer.createText(this._el_5, '\n        ', null);
        this._el_18 = import4.createRenderElement(this.renderer, this._el_5, 'tbody', import4.EMPTY_INLINE_ARRAY, null);
        this._text_19 = this.renderer.createText(this._el_18, '\n            ', null);
        this._anchor_20 = this.renderer.createTemplateAnchor(this._el_18, null);
        this._appEl_20 = new import3.AppElement(20, 18, this, this._anchor_20);
        this._TemplateRef_20_5 = new import12.TemplateRef_(this._appEl_20, viewFactory_Consumer2);
        this._NgFor_20_6 = new import14.Wrapper_NgFor(this._appEl_20.vcRef, this._TemplateRef_20_5, this.parentInjector.get(import15.IterableDiffers), this.parent.ref);
        this._text_21 = this.renderer.createText(this._el_18, '\n        ', null);
        this._text_22 = this.renderer.createText(this._el_5, '\n    ', null);
        this._text_23 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_24 = import4.createRenderElement(this.renderer, this._el_0, 'button', import4.EMPTY_INLINE_ARRAY, null);
        this._text_25 = this.renderer.createText(this._el_24, 'Stop Processing', null);
        this._text_26 = this.renderer.createText(this._el_0, '\n', null);
        var disposable_0 = this.renderer.listen(this._el_24, 'click', this.eventHandler(this._handle_click_24_0.bind(this)));
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._text_15,
            this._text_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._anchor_20,
            this._text_21,
            this._text_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._text_26
        ], [disposable_0], []);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import12.TemplateRef) && (20 === requestNodeIndex))) {
            return this._TemplateRef_20_5;
        }
        if (((token === import16.NgFor) && (20 === requestNodeIndex))) {
            return this._NgFor_20_6.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_20_0_0 = this.parent.context.processed;
        this._NgFor_20_6.check_ngForOf(currVal_20_0_0, throwOnChange, false);
        this._NgFor_20_6.detectChangesInInputProps(this, this._anchor_20, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
    _handle_click_24_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_24_0 = (this.parent.context.stopProcessing() !== false);
        return (true && pd_24_0);
    }
}
function viewFactory_Consumer1(viewUtils, parentInjector, declarationEl) {
    return new _View_Consumer1(viewUtils, parentInjector, declarationEl);
}
class _View_Consumer2 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_Consumer2, renderType_Consumer, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_8 = import7.UNINITIALIZED;
        this._expr_9 = import7.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'tr', import4.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_2 = import4.createRenderElement(this.renderer, this._el_0, 'td', import4.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_5 = import4.createRenderElement(this.renderer, this._el_0, 'td', import4.EMPTY_INLINE_ARRAY, null);
        this._text_6 = this.renderer.createText(this._el_5, '', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n            ', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7
        ], [], []);
        return null;
    }
    detectChangesInternal(throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        const currVal_8 = import4.interpolate(1, '', this.context.$implicit.firstName, '');
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setText(this._text_3, currVal_8);
            this._expr_8 = currVal_8;
        }
        const currVal_9 = import4.interpolate(1, '', this.context.$implicit.lastName, '');
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setText(this._text_6, currVal_9);
            this._expr_9 = currVal_9;
        }
        this.detectViewChildrenChanges(throwOnChange);
    }
}
function viewFactory_Consumer2(viewUtils, parentInjector, declarationEl) {
    return new _View_Consumer2(viewUtils, parentInjector, declarationEl);
}
