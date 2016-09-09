var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../components/access-child-components/parent';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '@angular/core/src/linker/query_list';
import * as import11 from '../../../components/access-child-components/child';
import * as import12 from './child.ngfactory';
var renderType_Parent_Host = null;
var _View_Parent_Host0 = (function (_super) {
    __extends(_View_Parent_Host0, _super);
    function _View_Parent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Parent_Host0, renderType_Parent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_Parent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('parent', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_Parent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Parent_0_4 = new import3.Parent();
        this._appEl_0.initComponent(this._Parent_0_4, [], compView_0);
        compView_0.create(this._Parent_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_Parent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.Parent) && (0 === requestNodeIndex))) {
            return this._Parent_0_4;
        }
        return notFoundResult;
    };
    return _View_Parent_Host0;
}(import1.AppView));
function viewFactory_Parent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Parent_Host === null)) {
        (renderType_Parent_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_Parent_Host0(viewUtils, parentInjector, declarationEl);
}
export var ParentNgFactory = new import9.ComponentFactory('parent', viewFactory_Parent_Host0, import3.Parent);
var styles_Parent = [];
var renderType_Parent = null;
var _View_Parent0 = (function (_super) {
    __extends(_View_Parent0, _super);
    function _View_Parent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Parent0, renderType_Parent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_Parent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._viewQuery_Child_0 = new import10.QueryList();
        this._el_0 = this.renderer.createElement(parentRenderNode, 'div', null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'button', null);
        this._text_3 = this.renderer.createText(this._el_2, 'Update Time via ViewChildren', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_5 = this.renderer.createElement(this._el_0, 'child', null);
        this._appEl_5 = new import2.AppElement(5, 0, this, this._el_5);
        var compView_5 = import12.viewFactory_Child0(this.viewUtils, this.injector(5), this._appEl_5);
        this._Child_5_4 = new import11.Child();
        this._appEl_5.initComponent(this._Child_5_4, [], compView_5);
        compView_5.create(this._Child_5_4, [], null);
        this._text_6 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_7 = this.renderer.createElement(this._el_0, 'child', null);
        this._appEl_7 = new import2.AppElement(7, 0, this, this._el_7);
        var compView_7 = import12.viewFactory_Child0(this.viewUtils, this.injector(7), this._appEl_7);
        this._Child_7_4 = new import11.Child();
        this._appEl_7.initComponent(this._Child_7_4, [], compView_7);
        compView_7.create(this._Child_7_4, [], null);
        this._text_8 = this.renderer.createText(this._el_0, '\n              ', null);
        var disposable_0 = this.renderer.listen(this._el_2, 'click', this.eventHandler(this._handle_click_2_0.bind(this)));
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8
        ], [disposable_0], []);
        return null;
    };
    _View_Parent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import11.Child) && (5 === requestNodeIndex))) {
            return this._Child_5_4;
        }
        if (((token === import11.Child) && (7 === requestNodeIndex))) {
            return this._Child_7_4;
        }
        return notFoundResult;
    };
    _View_Parent0.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._viewQuery_Child_0.dirty) {
                this._viewQuery_Child_0.reset([
                    this._Child_5_4,
                    this._Child_7_4
                ]);
                this.context.viewChildren = this._viewQuery_Child_0;
                this._viewQuery_Child_0.notifyOnChanges();
            }
        }
    };
    _View_Parent0.prototype._handle_click_2_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.updateViewChildren() !== false);
        return (true && pd_0);
    };
    return _View_Parent0;
}(import1.AppView));
export function viewFactory_Parent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Parent === null)) {
        (renderType_Parent = viewUtils.createRenderComponentType('/Users/tor/Development/angular-2-samples/components/access-child-components/parent.ts class Parent - inline template', 0, import8.ViewEncapsulation.None, styles_Parent, {}));
    }
    return new _View_Parent0(viewUtils, parentInjector, declarationEl);
}
