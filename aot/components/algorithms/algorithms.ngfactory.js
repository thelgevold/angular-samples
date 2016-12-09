import * as import0 from '../../../components/algorithms/algorithms';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../components/insertion-sort/insertion-sort';
import * as import9 from '../insertion-sort/insertion-sort.ngfactory';
export class Wrapper_Algorithms {
    constructor() {
        this._changed = false;
        this.context = new import0.Algorithms();
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
var renderType_Algorithms_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
class View_Algorithms_Host0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_Algorithms_Host0, renderType_Algorithms_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'algorithms', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_Algorithms0(this.viewUtils, this, 0, this._el_0);
        this._Algorithms_0_3 = new Wrapper_Algorithms();
        this.compView_0.create(this._Algorithms_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._Algorithms_0_3.context);
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.Algorithms) && (0 === requestNodeIndex))) {
            return this._Algorithms_0_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._Algorithms_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    }
    destroyInternal() {
        this.compView_0.destroy();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
export const AlgorithmsNgFactory = new import7.ComponentFactory('algorithms', View_Algorithms_Host0, import0.Algorithms);
const styles_Algorithms = [];
var renderType_Algorithms = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_Algorithms, {});
export class View_Algorithms0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_Algorithms0, renderType_Algorithms, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'h1', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, 'Insertion Sort Demo', null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_3 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_4 = this.renderer.createText(this._el_3, 'Watch the list get sorted as the algorithm traverses the list', null);
        this._text_5 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_6 = import3.createRenderElement(this.renderer, parentRenderNode, 'insertion-sort', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_6 = new import9.View_InsertionSort0(this.viewUtils, this, 6, this._el_6);
        this._InsertionSort_6_3 = new import9.Wrapper_InsertionSort();
        this.compView_6.create(this._InsertionSort_6_3.context);
        this._text_7 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_8 = import3.createRenderElement(this.renderer, parentRenderNode, 'h4', import3.EMPTY_INLINE_ARRAY, null);
        this._el_9 = import3.createRenderElement(this.renderer, this._el_8, 'a', new import3.InlineArray2(2, 'href', 'http://www.syntaxsuccess.com/viewarticle/timeouts-and-timerwrapper-in-angular-2.0'), null);
        this._text_10 = this.renderer.createText(this._el_9, 'Read more here', null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._el_8,
            this._el_9,
            this._text_10
        ]), null);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import8.InsertionSort) && (6 === requestNodeIndex))) {
            return this._InsertionSort_6_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._InsertionSort_6_3.ngDoCheck(this, this._el_6, throwOnChange);
        this.compView_6.detectChanges(throwOnChange);
    }
    destroyInternal() {
        this.compView_6.destroy();
    }
}
