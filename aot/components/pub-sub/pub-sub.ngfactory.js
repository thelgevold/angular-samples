import * as import0 from '../../../components/pub-sub/pub-sub';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '../../../components/pub-sub/pub-sub-service';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '../../../components/pub-sub/producer';
import * as import10 from './producer.ngfactory';
import * as import11 from '../../../components/pub-sub/consumer';
import * as import12 from './consumer.ngfactory';
export class Wrapper_PubSub {
    constructor() {
        this._changed = false;
        this.context = new import0.PubSub();
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
var renderType_PubSub_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
class View_PubSub_Host0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_PubSub_Host0, renderType_PubSub_Host, import6.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways);
    }
    get _PubSubService_0_4() {
        if ((this.__PubSubService_0_4 == null)) {
            (this.__PubSubService_0_4 = new import5.PubSubService());
        }
        return this.__PubSubService_0_4;
    }
    createInternal(rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'pub-sub', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_PubSub0(this.viewUtils, this, 0, this._el_0);
        this._PubSub_0_3 = new Wrapper_PubSub();
        this.compView_0.create(this._PubSub_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import8.ComponentRef_(0, this, this._el_0, this._PubSub_0_3.context);
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.PubSub) && (0 === requestNodeIndex))) {
            return this._PubSub_0_3.context;
        }
        if (((token === import5.PubSubService) && (0 === requestNodeIndex))) {
            return this._PubSubService_0_4;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._PubSub_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    }
    destroyInternal() {
        this.compView_0.destroy();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
export const PubSubNgFactory = new import8.ComponentFactory('pub-sub', View_PubSub_Host0, import0.PubSub);
const styles_PubSub = [];
var renderType_PubSub = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_PubSub, {});
export class View_PubSub0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_PubSub0, renderType_PubSub, import6.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'h1', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, 'Pub Sub Using Observables', null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_3 = import3.createRenderElement(this.renderer, parentRenderNode, 'producer', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_3 = new import10.View_Producer0(this.viewUtils, this, 3, this._el_3);
        this._Producer_3_3 = new import10.Wrapper_Producer(this.parentView.injectorGet(import5.PubSubService, this.parentIndex));
        this.compView_3.create(this._Producer_3_3.context);
        this._text_4 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_5 = import3.createRenderElement(this.renderer, parentRenderNode, 'br', import3.EMPTY_INLINE_ARRAY, null);
        this._el_6 = import3.createRenderElement(this.renderer, parentRenderNode, 'br', import3.EMPTY_INLINE_ARRAY, null);
        this._text_7 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_8 = import3.createRenderElement(this.renderer, parentRenderNode, 'consumer', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_8 = new import12.View_Consumer0(this.viewUtils, this, 8, this._el_8);
        this._Consumer_8_3 = new import12.Wrapper_Consumer(this.parentView.injectorGet(import5.PubSubService, this.parentIndex));
        this.compView_8.create(this._Consumer_8_3.context);
        this._text_9 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_10 = import3.createRenderElement(this.renderer, parentRenderNode, 'h4', import3.EMPTY_INLINE_ARRAY, null);
        this._el_11 = import3.createRenderElement(this.renderer, this._el_10, 'a', new import3.InlineArray2(2, 'href', 'http://www.syntaxsuccess.com/viewarticle/pub-sub-in-angular-2.0'), null);
        this._text_12 = this.renderer.createText(this._el_11, 'Read more here', null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._el_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._el_10,
            this._el_11,
            this._text_12
        ]), null);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import9.Producer) && (3 === requestNodeIndex))) {
            return this._Producer_3_3.context;
        }
        if (((token === import11.Consumer) && (8 === requestNodeIndex))) {
            return this._Consumer_8_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._Producer_3_3.ngDoCheck(this, this._el_3, throwOnChange);
        this._Consumer_8_3.ngDoCheck(this, this._el_8, throwOnChange);
        this.compView_3.detectChanges(throwOnChange);
        this.compView_8.detectChanges(throwOnChange);
    }
    destroyInternal() {
        this.compView_3.destroy();
        this.compView_8.destroy();
    }
}
