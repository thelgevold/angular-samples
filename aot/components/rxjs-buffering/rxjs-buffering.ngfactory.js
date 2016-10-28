import * as import0 from '../../../components/rxjs-buffering/rxjs-buffering';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import11 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import12 from '@angular/core/src/linker/template_ref';
import * as import13 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import14 from '@angular/common/src/directives/ng_for';
import * as import15 from '@angular/common/src/directives/ng_if';
export class Wrapper_RxJsBuffering {
    constructor() {
        this.changed = false;
        this.context = new import0.RxJsBuffering();
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
var renderType_RxJsBuffering_Host = null;
class _View_RxJsBuffering_Host0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_RxJsBuffering_Host0, renderType_RxJsBuffering_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer, 'ng-component', import4.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_RxJsBuffering0(this.viewUtils, this.injector(0), this._appEl_0);
        this._RxJsBuffering_0_4 = new Wrapper_RxJsBuffering();
        this._appEl_0.initComponent(this._RxJsBuffering_0_4.context, [], compView_0);
        compView_0.create(this._RxJsBuffering_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.RxJsBuffering) && (0 === requestNodeIndex))) {
            return this._RxJsBuffering_0_4.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._RxJsBuffering_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._RxJsBuffering_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
}
function viewFactory_RxJsBuffering_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_RxJsBuffering_Host === null)) {
        (renderType_RxJsBuffering_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_RxJsBuffering_Host0(viewUtils, parentInjector, declarationEl);
}
export const RxJsBufferingNgFactory = new import9.ComponentFactory('ng-component', viewFactory_RxJsBuffering_Host0, import0.RxJsBuffering);
const styles_RxJsBuffering = [];
var renderType_RxJsBuffering = null;
class _View_RxJsBuffering0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_RxJsBuffering0, renderType_RxJsBuffering, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n    ', null);
        this._el_1 = import4.createRenderElement(this.renderer, parentRenderNode, 'h3', import4.EMPTY_INLINE_ARRAY, null);
        this._text_2 = this.renderer.createText(this._el_1, 'Click three numbers to add', null);
        this._text_3 = this.renderer.createText(parentRenderNode, '\n    ', null);
        this._anchor_4 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._appEl_4 = new import3.AppElement(4, null, this, this._anchor_4);
        this._TemplateRef_4_5 = new import12.TemplateRef_(this._appEl_4, viewFactory_RxJsBuffering1);
        this._NgFor_4_6 = new import10.Wrapper_NgFor(this._appEl_4.vcRef, this._TemplateRef_4_5, this.parentInjector.get(import13.IterableDiffers), this.ref);
        this._text_5 = this.renderer.createText(parentRenderNode, '\n    ', null);
        this._anchor_6 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._appEl_6 = new import3.AppElement(6, null, this, this._anchor_6);
        this._TemplateRef_6_5 = new import12.TemplateRef_(this._appEl_6, viewFactory_RxJsBuffering2);
        this._NgIf_6_6 = new import11.Wrapper_NgIf(this._appEl_6.vcRef, this._TemplateRef_6_5);
        this._text_7 = this.renderer.createText(parentRenderNode, '\n  ', null);
        this.init([], [
            this._text_0,
            this._el_1,
            this._text_2,
            this._text_3,
            this._anchor_4,
            this._text_5,
            this._anchor_6,
            this._text_7
        ], [], []);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import12.TemplateRef) && (4 === requestNodeIndex))) {
            return this._TemplateRef_4_5;
        }
        if (((token === import14.NgFor) && (4 === requestNodeIndex))) {
            return this._NgFor_4_6.context;
        }
        if (((token === import12.TemplateRef) && (6 === requestNodeIndex))) {
            return this._TemplateRef_6_5;
        }
        if (((token === import15.NgIf) && (6 === requestNodeIndex))) {
            return this._NgIf_6_6.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_4_0_0 = this.context.numbers;
        this._NgFor_4_6.check_ngForOf(currVal_4_0_0, throwOnChange, false);
        this._NgFor_4_6.detectChangesInInputProps(this, this._anchor_4, throwOnChange);
        const currVal_6_0_0 = this.context.showSum;
        this._NgIf_6_6.check_ngIf(currVal_6_0_0, throwOnChange, false);
        this._NgIf_6_6.detectChangesInInputProps(this, this._anchor_6, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
}
export function viewFactory_RxJsBuffering0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_RxJsBuffering === null)) {
        (renderType_RxJsBuffering = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, styles_RxJsBuffering, {}));
    }
    return new _View_RxJsBuffering0(viewUtils, parentInjector, declarationEl);
}
class _View_RxJsBuffering1 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_RxJsBuffering1, renderType_RxJsBuffering, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_2 = import7.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'div', new import4.InlineArray2(2, 'class', 'box'), null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        var disposable_0 = this.renderer.listen(this._el_0, 'click', this.eventHandler(this._handle_click_0_0.bind(this)));
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [disposable_0], []);
        return null;
    }
    detectChangesInternal(throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        const currVal_2 = import4.interpolate(1, '', this.context.$implicit, '');
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
        this.detectViewChildrenChanges(throwOnChange);
    }
    _handle_click_0_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0_0 = (this.parent.context.add(this.context.$implicit) !== false);
        return (true && pd_0_0);
    }
}
function viewFactory_RxJsBuffering1(viewUtils, parentInjector, declarationEl) {
    return new _View_RxJsBuffering1(viewUtils, parentInjector, declarationEl);
}
class _View_RxJsBuffering2 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_RxJsBuffering2, renderType_RxJsBuffering, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_2 = import7.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'div', new import4.InlineArray2(2, 'class', 'sum'), null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    }
    detectChangesInternal(throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        const currVal_2 = import4.interpolate(1, 'SUM: ', this.parent.context.calculation.sum, '');
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
        this.detectViewChildrenChanges(throwOnChange);
    }
}
function viewFactory_RxJsBuffering2(viewUtils, parentInjector, declarationEl) {
    return new _View_RxJsBuffering2(viewUtils, parentInjector, declarationEl);
}
