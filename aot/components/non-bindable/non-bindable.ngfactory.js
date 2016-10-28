import * as import0 from '../../../components/non-bindable/non-bindable';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
export class Wrapper_IgnoreBindings {
    constructor() {
        this.changed = false;
        this.context = new import0.IgnoreBindings();
    }
    detectChangesInInputProps(view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    }
    detectChangesInHostProps(view, el, throwOnChange) {
    }
}
var renderType_IgnoreBindings_Host = null;
class _View_IgnoreBindings_Host0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_IgnoreBindings_Host0, renderType_IgnoreBindings_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer, 'ignore-bindings', import4.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_IgnoreBindings0(this.viewUtils, this.injector(0), this._appEl_0);
        this._IgnoreBindings_0_4 = new Wrapper_IgnoreBindings();
        this._appEl_0.initComponent(this._IgnoreBindings_0_4.context, [], compView_0);
        compView_0.create(this._IgnoreBindings_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.IgnoreBindings) && (0 === requestNodeIndex))) {
            return this._IgnoreBindings_0_4.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._IgnoreBindings_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._IgnoreBindings_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
}
function viewFactory_IgnoreBindings_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_IgnoreBindings_Host === null)) {
        (renderType_IgnoreBindings_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_IgnoreBindings_Host0(viewUtils, parentInjector, declarationEl);
}
export const IgnoreBindingsNgFactory = new import9.ComponentFactory('ignore-bindings', viewFactory_IgnoreBindings_Host0, import0.IgnoreBindings);
const styles_IgnoreBindings = [];
var renderType_IgnoreBindings = null;
class _View_IgnoreBindings0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_IgnoreBindings0, renderType_IgnoreBindings, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_15 = import7.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = import4.createRenderElement(this.renderer, parentRenderNode, 'h1', import4.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, 'Ignoring Bindings', null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_3 = import4.createRenderElement(this.renderer, parentRenderNode, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._text_4 = this.renderer.createText(this._el_3, 'Ignored Binding:\n    ', null);
        this._el_5 = import4.createRenderElement(this.renderer, this._el_3, 'div', new import4.InlineArray2(2, 'ngNonBindable', ''), null);
        this._text_6 = this.renderer.createText(this._el_5, '{{10 * 10}}', null);
        this._text_7 = this.renderer.createText(this._el_3, '\n', null);
        this._text_8 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_9 = import4.createRenderElement(this.renderer, parentRenderNode, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._text_10 = this.renderer.createText(this._el_9, '\n    Executed Binding:\n    ', null);
        this._el_11 = import4.createRenderElement(this.renderer, this._el_9, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._text_12 = this.renderer.createText(this._el_11, '', null);
        this._text_13 = this.renderer.createText(this._el_9, '\n', null);
        this._text_14 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this.init([], [
            this._el_0,
            this._text_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._text_13,
            this._text_14
        ], [], []);
        return null;
    }
    detectChangesInternal(throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        const currVal_15 = import4.interpolate(1, '', (10 * 10), '');
        if (import4.checkBinding(throwOnChange, this._expr_15, currVal_15)) {
            this.renderer.setText(this._text_12, currVal_15);
            this._expr_15 = currVal_15;
        }
        this.detectViewChildrenChanges(throwOnChange);
    }
}
export function viewFactory_IgnoreBindings0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_IgnoreBindings === null)) {
        (renderType_IgnoreBindings = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, styles_IgnoreBindings, {}));
    }
    return new _View_IgnoreBindings0(viewUtils, parentInjector, declarationEl);
}
