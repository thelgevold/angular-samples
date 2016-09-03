import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../components/bound-textbox/bound-textbox';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
var renderType_BoundTextbox_Host = null;
class _View_BoundTextbox_Host0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_BoundTextbox_Host0, renderType_BoundTextbox_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('bound-textbox', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_BoundTextbox0(this.viewUtils, this.injector(0), this._appEl_0);
        this._BoundTextbox_0_4 = new import3.BoundTextbox();
        this._appEl_0.initComponent(this._BoundTextbox_0_4, [], compView_0);
        compView_0.create(this._BoundTextbox_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import3.BoundTextbox) && (0 === requestNodeIndex))) {
            return this._BoundTextbox_0_4;
        }
        return notFoundResult;
    }
}
function viewFactory_BoundTextbox_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_BoundTextbox_Host === null)) {
        (renderType_BoundTextbox_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_BoundTextbox_Host0(viewUtils, parentInjector, declarationEl);
}
export const BoundTextboxNgFactory = new import9.ComponentFactory('bound-textbox', viewFactory_BoundTextbox_Host0, import3.BoundTextbox);
const styles_BoundTextbox = [];
var renderType_BoundTextbox = null;
class _View_BoundTextbox0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_BoundTextbox0, renderType_BoundTextbox, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'h1', null);
        this._text_1 = this.renderer.createText(this._el_0, 'Bound Textbox', null);
        this._el_2 = this.renderer.createElement(parentRenderNode, 'input', null);
        this._el_3 = this.renderer.createElement(parentRenderNode, 'span', null);
        this._text_4 = this.renderer.createText(this._el_3, '', null);
        this._expr_1 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_2, 'keyup', this.eventHandler(this._handle_keyup_2_0.bind(this)));
        this._expr_2 = import7.UNINITIALIZED;
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
        const currVal_1 = this.context.text;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementProperty(this._el_2, 'value', currVal_1);
            this._expr_1 = currVal_1;
        }
        const currVal_2 = import4.interpolate(1, '', this.context.text, '');
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_4, currVal_2);
            this._expr_2 = currVal_2;
        }
        this.detectViewChildrenChanges(throwOnChange);
    }
    _handle_keyup_2_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this.context.typing($event) !== false);
        return (true && pd_0);
    }
}
export function viewFactory_BoundTextbox0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_BoundTextbox === null)) {
        (renderType_BoundTextbox = viewUtils.createRenderComponentType('/Users/tor/Development/angular-2-samples/components/bound-textbox/bound-textbox.ts class BoundTextbox - inline template', 0, import8.ViewEncapsulation.None, styles_BoundTextbox, {}));
    }
    return new _View_BoundTextbox0(viewUtils, parentInjector, declarationEl);
}
