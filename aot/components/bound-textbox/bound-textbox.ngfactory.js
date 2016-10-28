import * as import0 from '../../../components/bound-textbox/bound-textbox';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
export class Wrapper_BoundTextbox {
    constructor() {
        this.changed = false;
        this.context = new import0.BoundTextbox();
    }
    detectChangesInInputProps(view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    }
    detectChangesInHostProps(view, el, throwOnChange) {
    }
}
var renderType_BoundTextbox_Host = null;
class _View_BoundTextbox_Host0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_BoundTextbox_Host0, renderType_BoundTextbox_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer, 'bound-textbox', import4.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_BoundTextbox0(this.viewUtils, this.injector(0), this._appEl_0);
        this._BoundTextbox_0_4 = new Wrapper_BoundTextbox();
        this._appEl_0.initComponent(this._BoundTextbox_0_4.context, [], compView_0);
        compView_0.create(this._BoundTextbox_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.BoundTextbox) && (0 === requestNodeIndex))) {
            return this._BoundTextbox_0_4.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._BoundTextbox_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._BoundTextbox_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
}
function viewFactory_BoundTextbox_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_BoundTextbox_Host === null)) {
        (renderType_BoundTextbox_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_BoundTextbox_Host0(viewUtils, parentInjector, declarationEl);
}
export const BoundTextboxNgFactory = new import9.ComponentFactory('bound-textbox', viewFactory_BoundTextbox_Host0, import0.BoundTextbox);
const styles_BoundTextbox = [];
var renderType_BoundTextbox = null;
class _View_BoundTextbox0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_BoundTextbox0, renderType_BoundTextbox, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = import4.createRenderElement(this.renderer, parentRenderNode, 'h1', import4.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, 'Bound Textbox', null);
        this._el_2 = import4.createRenderElement(this.renderer, parentRenderNode, 'input', import4.EMPTY_INLINE_ARRAY, null);
        this._el_3 = import4.createRenderElement(this.renderer, parentRenderNode, 'span', import4.EMPTY_INLINE_ARRAY, null);
        this._text_4 = this.renderer.createText(this._el_3, '', null);
        var disposable_0 = this.renderer.listen(this._el_2, 'keyup', this.eventHandler(this._handle_keyup_2_0.bind(this)));
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._el_3,
            this._text_4
        ], [disposable_0], []);
        return null;
    }
    detectChangesInternal(throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        const currVal_5 = this.context.text;
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementProperty(this._el_2, 'value', currVal_5);
            this._expr_5 = currVal_5;
        }
        const currVal_6 = import4.interpolate(1, '', this.context.text, '');
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setText(this._text_4, currVal_6);
            this._expr_6 = currVal_6;
        }
        this.detectViewChildrenChanges(throwOnChange);
    }
    _handle_keyup_2_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_2_0 = (this.context.typing($event) !== false);
        return (true && pd_2_0);
    }
}
export function viewFactory_BoundTextbox0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_BoundTextbox === null)) {
        (renderType_BoundTextbox = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, styles_BoundTextbox, {}));
    }
    return new _View_BoundTextbox0(viewUtils, parentInjector, declarationEl);
}
