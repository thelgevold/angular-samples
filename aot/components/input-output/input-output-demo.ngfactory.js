import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../components/input-output/input-output-demo';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '../../../components/input-output/input-output';
import * as import11 from './input-output.ngfactory';
import * as import12 from '@angular/core/src/linker/element_ref';
var renderType_InputOutputDemo_Host = null;
class _View_InputOutputDemo_Host0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_InputOutputDemo_Host0, renderType_InputOutputDemo_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('ng-component', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_InputOutputDemo0(this.viewUtils, this.injector(0), this._appEl_0);
        this._InputOutputDemo_0_4 = new import3.InputOutputDemo();
        this._appEl_0.initComponent(this._InputOutputDemo_0_4, [], compView_0);
        compView_0.create(this._InputOutputDemo_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import3.InputOutputDemo) && (0 === requestNodeIndex))) {
            return this._InputOutputDemo_0_4;
        }
        return notFoundResult;
    }
}
function viewFactory_InputOutputDemo_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_InputOutputDemo_Host === null)) {
        (renderType_InputOutputDemo_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_InputOutputDemo_Host0(viewUtils, parentInjector, declarationEl);
}
export const InputOutputDemoNgFactory = new import9.ComponentFactory('ng-component', viewFactory_InputOutputDemo_Host0, import3.InputOutputDemo);
const styles_InputOutputDemo = [];
var renderType_InputOutputDemo = null;
class _View_InputOutputDemo0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_InputOutputDemo0, renderType_InputOutputDemo, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'button', null);
        this._text_1 = this.renderer.createText(this._el_0, 'Update', null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n              ', null);
        this._el_3 = this.renderer.createElement(parentRenderNode, 'input-output', null);
        this.renderer.setElementAttribute(this._el_3, 'fixedValue', 'another hard coded value');
        this.renderer.setElementAttribute(this._el_3, 'plain', 'just a simple attribute');
        this._appEl_3 = new import2.AppElement(3, null, this, this._el_3);
        var compView_3 = import11.viewFactory_InputOutput0(this.viewUtils, this.injector(3), this._appEl_3);
        this._InputOutput_3_4 = new import10.InputOutput(new import12.ElementRef(this._el_3), 'just a simple attribute');
        this._appEl_3.initComponent(this._InputOutput_3_4, [], compView_3);
        this._text_4 = this.renderer.createText(null, '\n              ', null);
        compView_3.create(this._InputOutput_3_4, [], null);
        var disposable_0 = this.renderer.listen(this._el_0, 'click', this.eventHandler(this._handle_click_0_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_3, 'stringChanged', this.eventHandler(this._handle_stringChanged_3_0.bind(this)));
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        const subscription_0 = this._InputOutput_3_4.stringChanged.subscribe(this.eventHandler(this._handle_stringChanged_3_0.bind(this)));
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
        if (((token === import10.InputOutput) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 4)))) {
            return this._InputOutput_3_4;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_2 = this.context.count;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this._InputOutput_3_4.counter = currVal_2;
            this._expr_2 = currVal_2;
        }
        const currVal_3 = 'another hard coded value';
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this._InputOutput_3_4.fixedValue = currVal_3;
            this._expr_3 = currVal_3;
        }
        const currVal_4 = this.context.runningTotal;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this._InputOutput_3_4.sum = currVal_4;
            this._expr_4 = currVal_4;
        }
        const currVal_5 = this.context.myTitle;
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this._InputOutput_3_4.headline = currVal_5;
            this._expr_5 = currVal_5;
        }
        const currVal_6 = this.context.myString;
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this._InputOutput_3_4.growingString = currVal_6;
            this._expr_6 = currVal_6;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._InputOutput_3_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
    _handle_click_0_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this.context.update() !== false);
        return (true && pd_0);
    }
    _handle_stringChanged_3_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this.context.myStringChanged($event) !== false);
        return (true && pd_0);
    }
}
export function viewFactory_InputOutputDemo0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_InputOutputDemo === null)) {
        (renderType_InputOutputDemo = viewUtils.createRenderComponentType('/Users/tor/Development/angular-2-samples/components/input-output/input-output-demo.ts class InputOutputDemo - inline template', 0, import8.ViewEncapsulation.None, styles_InputOutputDemo, {}));
    }
    return new _View_InputOutputDemo0(viewUtils, parentInjector, declarationEl);
}
