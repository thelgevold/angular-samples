import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../components/pub-sub/pub-sub';
import * as import4 from '../../../components/pub-sub/pub-sub-service';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/change_detection';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '../../../components/pub-sub/producer';
import * as import12 from '../../../components/pub-sub/consumer';
import * as import13 from './producer.ngfactory';
import * as import14 from './consumer.ngfactory';
var renderType_PubSub_Host = null;
class _View_PubSub_Host0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_PubSub_Host0, renderType_PubSub_Host, import7.ViewType.HOST, viewUtils, parentInjector, declarationEl, import8.ChangeDetectorStatus.CheckAlways);
    }
    get _PubSubService_0_5() {
        if ((this.__PubSubService_0_5 == null)) {
            (this.__PubSubService_0_5 = new import4.PubSubService());
        }
        return this.__PubSubService_0_5;
    }
    createInternal(rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('pub-sub', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_PubSub0(this.viewUtils, this.injector(0), this._appEl_0);
        this._PubSub_0_4 = new import3.PubSub();
        this._appEl_0.initComponent(this._PubSub_0_4, [], compView_0);
        compView_0.create(this._PubSub_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import3.PubSub) && (0 === requestNodeIndex))) {
            return this._PubSub_0_4;
        }
        if (((token === import4.PubSubService) && (0 === requestNodeIndex))) {
            return this._PubSubService_0_5;
        }
        return notFoundResult;
    }
}
function viewFactory_PubSub_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_PubSub_Host === null)) {
        (renderType_PubSub_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_PubSub_Host0(viewUtils, parentInjector, declarationEl);
}
export const PubSubNgFactory = new import10.ComponentFactory('pub-sub', viewFactory_PubSub_Host0, import3.PubSub);
const styles_PubSub = [];
var renderType_PubSub = null;
class _View_PubSub0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_PubSub0, renderType_PubSub, import7.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import8.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'h1', null);
        this._text_1 = this.renderer.createText(this._el_0, 'Pub Sub Using Observables', null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_3 = this.renderer.createElement(parentRenderNode, 'producer', null);
        this._appEl_3 = new import2.AppElement(3, null, this, this._el_3);
        var compView_3 = import13.viewFactory_Producer0(this.viewUtils, this.injector(3), this._appEl_3);
        this._Producer_3_4 = new import11.Producer(this.parentInjector.get(import4.PubSubService));
        this._appEl_3.initComponent(this._Producer_3_4, [], compView_3);
        compView_3.create(this._Producer_3_4, [], null);
        this._text_4 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_5 = this.renderer.createElement(parentRenderNode, 'br', null);
        this._el_6 = this.renderer.createElement(parentRenderNode, 'br', null);
        this._text_7 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_8 = this.renderer.createElement(parentRenderNode, 'consumer', null);
        this._appEl_8 = new import2.AppElement(8, null, this, this._el_8);
        var compView_8 = import14.viewFactory_Consumer0(this.viewUtils, this.injector(8), this._appEl_8);
        this._Consumer_8_4 = new import12.Consumer(this.parentInjector.get(import4.PubSubService));
        this._appEl_8.initComponent(this._Consumer_8_4, [], compView_8);
        compView_8.create(this._Consumer_8_4, [], null);
        this._text_9 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_10 = this.renderer.createElement(parentRenderNode, 'h4', null);
        this._el_11 = this.renderer.createElement(this._el_10, 'a', null);
        this.renderer.setElementAttribute(this._el_11, 'href', 'http://www.syntaxsuccess.com/viewarticle/pub-sub-in-angular-2.0');
        this._text_12 = this.renderer.createText(this._el_11, 'Read more here', null);
        this.init([], [
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
        ], [], []);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import11.Producer) && (3 === requestNodeIndex))) {
            return this._Producer_3_4;
        }
        if (((token === import12.Consumer) && (8 === requestNodeIndex))) {
            return this._Consumer_8_4;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Consumer_8_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
}
export function viewFactory_PubSub0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_PubSub === null)) {
        (renderType_PubSub = viewUtils.createRenderComponentType('/Users/tor/Development/angular-2-samples/components/pub-sub/pub-sub.html', 0, import9.ViewEncapsulation.None, styles_PubSub, {}));
    }
    return new _View_PubSub0(viewUtils, parentInjector, declarationEl);
}
