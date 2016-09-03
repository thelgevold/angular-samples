import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../components/rxjs-caching/friends-list';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '../../../components/rxjs-caching/friends-service';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '@angular/common/src/directives/ng_for';
import * as import12 from '@angular/core/src/linker/template_ref';
import * as import13 from '@angular/core/src/change_detection/differs/iterable_differs';
var renderType_FriendsList_Host = null;
class _View_FriendsList_Host0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_FriendsList_Host0, renderType_FriendsList_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('friends-list', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_FriendsList0(this.viewUtils, this.injector(0), this._appEl_0);
        this._FriendsList_0_4 = new import3.FriendsList(this.parentInjector.get(import8.FriendsService));
        this._appEl_0.initComponent(this._FriendsList_0_4, [], compView_0);
        compView_0.create(this._FriendsList_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import3.FriendsList) && (0 === requestNodeIndex))) {
            return this._FriendsList_0_4;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._FriendsList_0_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
    destroyInternal() {
        this._FriendsList_0_4.ngOnDestroy();
    }
}
function viewFactory_FriendsList_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_FriendsList_Host === null)) {
        (renderType_FriendsList_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_FriendsList_Host0(viewUtils, parentInjector, declarationEl);
}
export const FriendsListNgFactory = new import10.ComponentFactory('friends-list', viewFactory_FriendsList_Host0, import3.FriendsList);
const styles_FriendsList = [];
var renderType_FriendsList = null;
class _View_FriendsList0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_FriendsList0, renderType_FriendsList, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n    ', null);
        this._anchor_1 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._appEl_1 = new import2.AppElement(1, null, this, this._anchor_1);
        this._TemplateRef_1_5 = new import12.TemplateRef_(this._appEl_1, viewFactory_FriendsList1);
        this._NgFor_1_6 = new import11.NgFor(this._appEl_1.vcRef, this._TemplateRef_1_5, this.parentInjector.get(import13.IterableDiffers), this.ref);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n    ', null);
        this._el_3 = this.renderer.createElement(parentRenderNode, 'button', null);
        this._text_4 = this.renderer.createText(this._el_3, 'Reload', null);
        this._text_5 = this.renderer.createText(parentRenderNode, '\n  ', null);
        this._expr_0 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_3, 'click', this.eventHandler(this._handle_click_3_0.bind(this)));
        this.init([], [
            this._text_0,
            this._anchor_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._text_5
        ], [disposable_0], []);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import12.TemplateRef) && (1 === requestNodeIndex))) {
            return this._TemplateRef_1_5;
        }
        if (((token === import11.NgFor) && (1 === requestNodeIndex))) {
            return this._NgFor_1_6;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        var changes = null;
        changes = null;
        const currVal_0 = this.context.friends;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._NgFor_1_6.ngForOf = currVal_0;
            if ((changes === null)) {
                (changes = {});
            }
            changes['ngForOf'] = new import7.SimpleChange(this._expr_0, currVal_0);
            this._expr_0 = currVal_0;
        }
        if ((changes !== null)) {
            this._NgFor_1_6.ngOnChanges(changes);
        }
        if (!throwOnChange) {
            this._NgFor_1_6.ngDoCheck();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
    _handle_click_3_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this.context.loadData() !== false);
        return (true && pd_0);
    }
}
export function viewFactory_FriendsList0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_FriendsList === null)) {
        (renderType_FriendsList = viewUtils.createRenderComponentType('/Users/tor/Development/angular-2-samples/components/rxjs-caching/friends-list.ts class FriendsList - inline template', 0, import9.ViewEncapsulation.None, styles_FriendsList, {}));
    }
    return new _View_FriendsList0(viewUtils, parentInjector, declarationEl);
}
class _View_FriendsList1 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_FriendsList1, renderType_FriendsList, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this._expr_0 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    }
    detectChangesInternal(throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        const currVal_0 = import4.interpolate(1, '\n      ', this.context.$implicit, '\n    ');
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setText(this._text_1, currVal_0);
            this._expr_0 = currVal_0;
        }
        this.detectViewChildrenChanges(throwOnChange);
    }
}
function viewFactory_FriendsList1(viewUtils, parentInjector, declarationEl) {
    return new _View_FriendsList1(viewUtils, parentInjector, declarationEl);
}
