import * as import0 from '../../../components/input-output/input-output-demo';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../components/input-output/input-output';
import * as import9 from './input-output.ngfactory';
import * as import10 from '@angular/core/src/linker/element_ref';
export class Wrapper_InputOutputDemo {
    constructor() {
        this._changed = false;
        this.context = new import0.InputOutputDemo();
    }
    ngOnDetach(view, componentView, el) {
    }
    ngOnDestroy() {
    }
    ngDoCheck(view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    }
    checkHost(view, componentView, el, throwOnChange) {
    }
    handleEvent(eventName, $event) {
        var result = true;
        return result;
    }
    subscribe(view, _eventHandler) {
        this._eventHandler = _eventHandler;
    }
}
var renderType_InputOutputDemo_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
class View_InputOutputDemo_Host0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_InputOutputDemo_Host0, renderType_InputOutputDemo_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'ng-component', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_InputOutputDemo0(this.viewUtils, this, 0, this._el_0);
        this._InputOutputDemo_0_3 = new Wrapper_InputOutputDemo();
        this.compView_0.create(this._InputOutputDemo_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._InputOutputDemo_0_3.context);
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.InputOutputDemo) && (0 === requestNodeIndex))) {
            return this._InputOutputDemo_0_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._InputOutputDemo_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    }
    destroyInternal() {
        this.compView_0.destroy();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
export const InputOutputDemoNgFactory = new import7.ComponentFactory('ng-component', View_InputOutputDemo_Host0, import0.InputOutputDemo);
const styles_InputOutputDemo = [];
var renderType_InputOutputDemo = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_InputOutputDemo, {});
export class View_InputOutputDemo0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_InputOutputDemo0, renderType_InputOutputDemo, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'button', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, 'Update', null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n              ', null);
        this._el_3 = import3.createRenderElement(this.renderer, parentRenderNode, 'input-output', new import3.InlineArray4(4, 'fixedValue', 'another hard coded value', 'plain', 'just a simple attribute'), null);
        this.compView_3 = new import9.View_InputOutput0(this.viewUtils, this, 3, this._el_3);
        this._InputOutput_3_3 = new import9.Wrapper_InputOutput(new import10.ElementRef(this._el_3), 'just a simple attribute');
        this._text_4 = this.renderer.createText(null, '\n              ', null);
        this.compView_3.create(this._InputOutput_3_3.context);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_0, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_0));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_3, new import3.InlineArray2(2, 'stringChanged', null), this.eventHandler(this.handleEvent_3));
        this._InputOutput_3_3.subscribe(this, this.eventHandler(this.handleEvent_3), true);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._text_2,
            this._el_3,
            this._text_4
        ]), [
            disposable_0,
            disposable_1
        ]);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import8.InputOutput) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 4)))) {
            return this._InputOutput_3_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_3_0_0 = this.context.count;
        this._InputOutput_3_3.check_counter(currVal_3_0_0, throwOnChange, false);
        const currVal_3_0_1 = 'another hard coded value';
        this._InputOutput_3_3.check_fixedValue(currVal_3_0_1, throwOnChange, false);
        const currVal_3_0_2 = this.context.runningTotal;
        this._InputOutput_3_3.check_sum(currVal_3_0_2, throwOnChange, false);
        const currVal_3_0_3 = this.context.myTitle;
        this._InputOutput_3_3.check_headline(currVal_3_0_3, throwOnChange, false);
        const currVal_3_0_4 = this.context.myString;
        this._InputOutput_3_3.check_growingString(currVal_3_0_4, throwOnChange, false);
        this._InputOutput_3_3.ngDoCheck(this, this._el_3, throwOnChange);
        this.compView_3.detectChanges(throwOnChange);
    }
    destroyInternal() {
        this.compView_3.destroy();
        this._InputOutput_3_3.ngOnDestroy();
    }
    handleEvent_0(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            const pd_sub_0 = (this.context.update() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    }
    handleEvent_3(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'stringChanged')) {
            const pd_sub_0 = (this.context.myStringChanged($event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    }
}
