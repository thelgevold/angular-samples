import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../components/rxjs-caching/friends-service';
import * as import4 from '../../../components/rxjs-caching/caching-demo';
import * as import5 from '@angular/core/src/linker/view_utils';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/change_detection';
import * as import9 from '@angular/http/src/http';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from '@angular/common/src/directives/ng_if';
import * as import13 from '@angular/core/src/linker/template_ref';
import * as import14 from '../../../components/rxjs-caching/friends-list';
import * as import15 from './friends-list.ngfactory';
var renderType_CachingDemo_Host = null;
class _View_CachingDemo_Host0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_CachingDemo_Host0, renderType_CachingDemo_Host, import7.ViewType.HOST, viewUtils, parentInjector, declarationEl, import8.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('ng-component', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_CachingDemo0(this.viewUtils, this.injector(0), this._appEl_0);
        this._FriendsService_0_4 = new import3.FriendsService(this.parentInjector.get(import9.Http));
        this._CachingDemo_0_5 = new import4.CachingDemo(this._FriendsService_0_4);
        this._appEl_0.initComponent(this._CachingDemo_0_5, [], compView_0);
        compView_0.create(this._CachingDemo_0_5, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import3.FriendsService) && (0 === requestNodeIndex))) {
            return this._FriendsService_0_4;
        }
        if (((token === import4.CachingDemo) && (0 === requestNodeIndex))) {
            return this._CachingDemo_0_5;
        }
        return notFoundResult;
    }
}
function viewFactory_CachingDemo_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_CachingDemo_Host === null)) {
        (renderType_CachingDemo_Host = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.None, [], {}));
    }
    return new _View_CachingDemo_Host0(viewUtils, parentInjector, declarationEl);
}
export const CachingDemoNgFactory = new import11.ComponentFactory('ng-component', viewFactory_CachingDemo_Host0, import4.CachingDemo);
const styles_CachingDemo = [];
var renderType_CachingDemo = null;
class _View_CachingDemo0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_CachingDemo0, renderType_CachingDemo, import7.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import8.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'div', null);
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'button', null);
        this._text_3 = this.renderer.createText(this._el_2, 'Clear Cache', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_5 = this.renderer.createElement(this._el_0, 'button', null);
        this._text_6 = this.renderer.createText(this._el_5, 'Reset', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n', null);
        this._text_8 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_9 = this.renderer.createElement(parentRenderNode, 'table', null);
        this._text_10 = this.renderer.createText(this._el_9, '\n    ', null);
        this._el_11 = this.renderer.createElement(this._el_9, 'tbody', null);
        this._anchor_12 = this.renderer.createTemplateAnchor(this._el_11, null);
        this._appEl_12 = new import2.AppElement(12, 11, this, this._anchor_12);
        this._TemplateRef_12_5 = new import13.TemplateRef_(this._appEl_12, viewFactory_CachingDemo1);
        this._NgIf_12_6 = new import12.NgIf(this._appEl_12.vcRef, this._TemplateRef_12_5);
        this._text_13 = this.renderer.createText(this._el_11, '\n    ', null);
        this._anchor_14 = this.renderer.createTemplateAnchor(this._el_11, null);
        this._appEl_14 = new import2.AppElement(14, 11, this, this._anchor_14);
        this._TemplateRef_14_5 = new import13.TemplateRef_(this._appEl_14, viewFactory_CachingDemo2);
        this._NgIf_14_6 = new import12.NgIf(this._appEl_14.vcRef, this._TemplateRef_14_5);
        this._text_15 = this.renderer.createText(this._el_11, '\n', null);
        var disposable_0 = this.renderer.listen(this._el_2, 'click', this.eventHandler(this._handle_click_2_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_5, 'click', this.eventHandler(this._handle_click_5_0.bind(this)));
        this._expr_2 = import8.UNINITIALIZED;
        this._expr_3 = import8.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._anchor_12,
            this._text_13,
            this._anchor_14,
            this._text_15
        ], [
            disposable_0,
            disposable_1
        ], []);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import13.TemplateRef) && (12 === requestNodeIndex))) {
            return this._TemplateRef_12_5;
        }
        if (((token === import12.NgIf) && (12 === requestNodeIndex))) {
            return this._NgIf_12_6;
        }
        if (((token === import13.TemplateRef) && (14 === requestNodeIndex))) {
            return this._TemplateRef_14_5;
        }
        if (((token === import12.NgIf) && (14 === requestNodeIndex))) {
            return this._NgIf_14_6;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_2 = this.context.display.first;
        if (import5.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this._NgIf_12_6.ngIf = currVal_2;
            this._expr_2 = currVal_2;
        }
        const currVal_3 = this.context.display.second;
        if (import5.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this._NgIf_14_6.ngIf = currVal_3;
            this._expr_3 = currVal_3;
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
    _handle_click_2_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this.context.clearCache() !== false);
        return (true && pd_0);
    }
    _handle_click_5_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this.context.reset() !== false);
        return (true && pd_0);
    }
}
export function viewFactory_CachingDemo0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_CachingDemo === null)) {
        (renderType_CachingDemo = viewUtils.createRenderComponentType('/Users/tor/Development/angular-2-samples/components/rxjs-caching/caching-demo.html', 0, import10.ViewEncapsulation.None, styles_CachingDemo, {}));
    }
    return new _View_CachingDemo0(viewUtils, parentInjector, declarationEl);
}
class _View_CachingDemo1 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_CachingDemo1, renderType_CachingDemo, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import8.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'tr', null);
        this._text_1 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'td', null);
        this._text_3 = this.renderer.createText(this._el_2, '    \n            ', null);
        this._el_4 = this.renderer.createElement(this._el_2, 'h2', null);
        this._text_5 = this.renderer.createText(this._el_4, 'Friends 1', null);
        this._text_6 = this.renderer.createText(this._el_2, '\n            ', null);
        this._el_7 = this.renderer.createElement(this._el_2, 'friends-list', null);
        this._appEl_7 = new import2.AppElement(7, 2, this, this._el_7);
        var compView_7 = import15.viewFactory_FriendsList0(this.viewUtils, this.injector(7), this._appEl_7);
        this._FriendsList_7_4 = new import14.FriendsList(this.parent.parentInjector.get(import3.FriendsService));
        this._appEl_7.initComponent(this._FriendsList_7_4, [], compView_7);
        compView_7.create(this._FriendsList_7_4, [], null);
        this._text_8 = this.renderer.createText(this._el_2, '\n            ', null);
        this._el_9 = this.renderer.createElement(this._el_2, 'button', null);
        this._text_10 = this.renderer.createText(this._el_9, 'Remove', null);
        this._text_11 = this.renderer.createText(this._el_2, '\n        ', null);
        this._text_12 = this.renderer.createText(this._el_0, '\n    ', null);
        var disposable_0 = this.renderer.listen(this._el_9, 'click', this.eventHandler(this._handle_click_9_0.bind(this)));
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._text_11,
            this._text_12
        ], [disposable_0], []);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import14.FriendsList) && (7 === requestNodeIndex))) {
            return this._FriendsList_7_4;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._FriendsList_7_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
    destroyInternal() {
        this._FriendsList_7_4.ngOnDestroy();
    }
    _handle_click_9_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this.parent.context.remove('first') !== false);
        return (true && pd_0);
    }
}
function viewFactory_CachingDemo1(viewUtils, parentInjector, declarationEl) {
    return new _View_CachingDemo1(viewUtils, parentInjector, declarationEl);
}
class _View_CachingDemo2 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_CachingDemo2, renderType_CachingDemo, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import8.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'tr', null);
        this._text_1 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'td', null);
        this._text_3 = this.renderer.createText(this._el_2, '    \n            ', null);
        this._el_4 = this.renderer.createElement(this._el_2, 'h2', null);
        this._text_5 = this.renderer.createText(this._el_4, 'Friends 2', null);
        this._text_6 = this.renderer.createText(this._el_2, '\n            ', null);
        this._el_7 = this.renderer.createElement(this._el_2, 'friends-list', null);
        this._appEl_7 = new import2.AppElement(7, 2, this, this._el_7);
        var compView_7 = import15.viewFactory_FriendsList0(this.viewUtils, this.injector(7), this._appEl_7);
        this._FriendsList_7_4 = new import14.FriendsList(this.parent.parentInjector.get(import3.FriendsService));
        this._appEl_7.initComponent(this._FriendsList_7_4, [], compView_7);
        compView_7.create(this._FriendsList_7_4, [], null);
        this._text_8 = this.renderer.createText(this._el_2, '\n            ', null);
        this._el_9 = this.renderer.createElement(this._el_2, 'button', null);
        this._text_10 = this.renderer.createText(this._el_9, 'Remove', null);
        this._text_11 = this.renderer.createText(this._el_2, '\n        ', null);
        this._text_12 = this.renderer.createText(this._el_0, '\n    ', null);
        var disposable_0 = this.renderer.listen(this._el_9, 'click', this.eventHandler(this._handle_click_9_0.bind(this)));
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._text_11,
            this._text_12
        ], [disposable_0], []);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import14.FriendsList) && (7 === requestNodeIndex))) {
            return this._FriendsList_7_4;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._FriendsList_7_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
    destroyInternal() {
        this._FriendsList_7_4.ngOnDestroy();
    }
    _handle_click_9_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this.parent.context.remove('second') !== false);
        return (true && pd_0);
    }
}
function viewFactory_CachingDemo2(viewUtils, parentInjector, declarationEl) {
    return new _View_CachingDemo2(viewUtils, parentInjector, declarationEl);
}
