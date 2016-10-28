import * as import0 from '../../../components/input-output/input-output-demo';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from './input-output.ngfactory';
import * as import11 from '@angular/core/src/linker/element_ref';
import * as import12 from '../../../components/input-output/input-output';
export class Wrapper_InputOutputDemo {
    constructor() {
        this.changed = false;
        this.context = new import0.InputOutputDemo();
    }
    detectChangesInInputProps(view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    }
    detectChangesInHostProps(view, el, throwOnChange) {
    }
}
var renderType_InputOutputDemo_Host = null;
class _View_InputOutputDemo_Host0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_InputOutputDemo_Host0, renderType_InputOutputDemo_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer, 'ng-component', import4.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_InputOutputDemo0(this.viewUtils, this.injector(0), this._appEl_0);
        this._InputOutputDemo_0_4 = new Wrapper_InputOutputDemo();
        this._appEl_0.initComponent(this._InputOutputDemo_0_4.context, [], compView_0);
        compView_0.create(this._InputOutputDemo_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.InputOutputDemo) && (0 === requestNodeIndex))) {
            return this._InputOutputDemo_0_4.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._InputOutputDemo_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._InputOutputDemo_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
}
function viewFactory_InputOutputDemo_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_InputOutputDemo_Host === null)) {
        (renderType_InputOutputDemo_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_InputOutputDemo_Host0(viewUtils, parentInjector, declarationEl);
}
export const InputOutputDemoNgFactory = new import9.ComponentFactory('ng-component', viewFactory_InputOutputDemo_Host0, import0.InputOutputDemo);
const styles_InputOutputDemo = [];
var renderType_InputOutputDemo = null;
class _View_InputOutputDemo0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_InputOutputDemo0, renderType_InputOutputDemo, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = import4.createRenderElement(this.renderer, parentRenderNode, 'button', import4.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, 'Update', null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n              ', null);
        this._el_3 = import4.createRenderElement(this.renderer, parentRenderNode, 'input-output', new import4.InlineArray4(4, 'fixedValue', 'another hard coded value', 'plain', 'just a simple attribute'), null);
        this._appEl_3 = new import3.AppElement(3, null, this, this._el_3);
        var compView_3 = import10.viewFactory_InputOutput0(this.viewUtils, this.injector(3), this._appEl_3);
        this._InputOutput_3_4 = new import10.Wrapper_InputOutput(new import11.ElementRef(this._el_3), 'just a simple attribute');
        this._appEl_3.initComponent(this._InputOutput_3_4.context, [], compView_3);
        this._text_4 = this.renderer.createText(null, '\n              ', null);
        compView_3.create(this._InputOutput_3_4.context, [], null);
        var disposable_0 = this.renderer.listen(this._el_0, 'click', this.eventHandler(this._handle_click_0_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_3, 'stringChanged', this.eventHandler(this._handle_stringChanged_3_0.bind(this)));
        const subscription_0 = this._InputOutput_3_4.context.stringChanged.subscribe(this.eventHandler(this._handle_stringChanged_3_0.bind(this)));
        this.init([], [
            this._el_0,
            this._text_1,
            this._text_2,
            this._el_3,
            this._text_4
        ], [
            disposable_0,
            disposable_1
        ], [subscription_0]);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import12.InputOutput) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 4)))) {
            return this._InputOutput_3_4.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_3_0_0 = this.context.count;
        this._InputOutput_3_4.check_counter(currVal_3_0_0, throwOnChange, false);
        const currVal_3_0_1 = 'another hard coded value';
        this._InputOutput_3_4.check_fixedValue(currVal_3_0_1, throwOnChange, false);
        const currVal_3_0_2 = this.context.runningTotal;
        this._InputOutput_3_4.check_sum(currVal_3_0_2, throwOnChange, false);
        const currVal_3_0_3 = this.context.myTitle;
        this._InputOutput_3_4.check_headline(currVal_3_0_3, throwOnChange, false);
        const currVal_3_0_4 = this.context.myString;
        this._InputOutput_3_4.check_growingString(currVal_3_0_4, throwOnChange, false);
        this._InputOutput_3_4.detectChangesInInputProps(this, this._el_3, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._InputOutput_3_4.detectChangesInHostProps(this, this._el_3, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
    _handle_click_0_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0_0 = (this.context.update() !== false);
        return (true && pd_0_0);
    }
    _handle_stringChanged_3_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_3_0 = (this.context.myStringChanged($event) !== false);
        return (true && pd_3_0);
    }
}
export function viewFactory_InputOutputDemo0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_InputOutputDemo === null)) {
        (renderType_InputOutputDemo = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, styles_InputOutputDemo, {}));
    }
    return new _View_InputOutputDemo0(viewUtils, parentInjector, declarationEl);
}
