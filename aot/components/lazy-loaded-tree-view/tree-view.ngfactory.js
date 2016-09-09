var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../components/lazy-loaded-tree-view/tree-view';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '../../../components/lazy-loaded-tree-view/redux/store';
import * as import9 from '../../../components/lazy-loaded-tree-view/tree-node-service';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from '@angular/common/src/directives/ng_for';
import * as import13 from '@angular/core/src/linker/template_ref';
import * as import14 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import15 from '@angular/common/src/directives/ng_class';
import * as import16 from '@angular/common/src/directives/ng_if';
import * as import17 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import18 from '@angular/core/src/linker/element_ref';
var renderType_LazyTreeView_Host = null;
var _View_LazyTreeView_Host0 = (function (_super) {
    __extends(_View_LazyTreeView_Host0, _super);
    function _View_LazyTreeView_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_LazyTreeView_Host0, renderType_LazyTreeView_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_LazyTreeView_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('lazy-tree-view', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_LazyTreeView0(this.viewUtils, this.injector(0), this._appEl_0);
        this._LazyTreeView_0_4 = new import3.LazyTreeView(this.parentInjector.get(import8.Store), this.parentInjector.get(import9.TreeNodeService));
        this._appEl_0.initComponent(this._LazyTreeView_0_4, [], compView_0);
        compView_0.create(this._LazyTreeView_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_LazyTreeView_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.LazyTreeView) && (0 === requestNodeIndex))) {
            return this._LazyTreeView_0_4;
        }
        return notFoundResult;
    };
    _View_LazyTreeView_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._LazyTreeView_0_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_LazyTreeView_Host0.prototype.destroyInternal = function () {
        this._LazyTreeView_0_4.ngOnDestroy();
    };
    return _View_LazyTreeView_Host0;
}(import1.AppView));
function viewFactory_LazyTreeView_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_LazyTreeView_Host === null)) {
        (renderType_LazyTreeView_Host = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.None, [], {}));
    }
    return new _View_LazyTreeView_Host0(viewUtils, parentInjector, declarationEl);
}
export var LazyTreeViewNgFactory = new import11.ComponentFactory('lazy-tree-view', viewFactory_LazyTreeView_Host0, import3.LazyTreeView);
var styles_LazyTreeView = [];
var renderType_LazyTreeView = null;
var _View_LazyTreeView0 = (function (_super) {
    __extends(_View_LazyTreeView0, _super);
    function _View_LazyTreeView0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_LazyTreeView0, renderType_LazyTreeView, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_LazyTreeView0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ul', null);
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_2 = new import2.AppElement(2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new import13.TemplateRef_(this._appEl_2, viewFactory_LazyTreeView1);
        this._NgFor_2_6 = new import12.NgFor(this._appEl_2.vcRef, this._TemplateRef_2_5, this.parentInjector.get(import14.IterableDiffers), this.ref);
        this._text_3 = this.renderer.createText(this._el_0, '\n', null);
        this._text_4 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3,
            this._text_4
        ], [], []);
        return null;
    };
    _View_LazyTreeView0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import13.TemplateRef) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === import12.NgFor) && (2 === requestNodeIndex))) {
            return this._NgFor_2_6;
        }
        return notFoundResult;
    };
    _View_LazyTreeView0.prototype.detectChangesInternal = function (throwOnChange) {
        var changes = null;
        changes = null;
        var currVal_0 = this.context.items;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._NgFor_2_6.ngForOf = currVal_0;
            if ((changes === null)) {
                (changes = {});
            }
            changes['ngForOf'] = new import7.SimpleChange(this._expr_0, currVal_0);
            this._expr_0 = currVal_0;
        }
        if ((changes !== null)) {
            this._NgFor_2_6.ngOnChanges(changes);
        }
        if (!throwOnChange) {
            this._NgFor_2_6.ngDoCheck();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_LazyTreeView0;
}(import1.AppView));
export function viewFactory_LazyTreeView0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_LazyTreeView === null)) {
        (renderType_LazyTreeView = viewUtils.createRenderComponentType('/Users/tor/Development/angular-2-samples/components/lazy-loaded-tree-view/tree-view.html', 0, import10.ViewEncapsulation.None, styles_LazyTreeView, {}));
    }
    return new _View_LazyTreeView0(viewUtils, parentInjector, declarationEl);
}
var _View_LazyTreeView1 = (function (_super) {
    __extends(_View_LazyTreeView1, _super);
    function _View_LazyTreeView1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_LazyTreeView1, renderType_LazyTreeView, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_LazyTreeView1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'li', null);
        this._text_1 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'span', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'iconButton');
        this._NgClass_2_3 = new import15.NgClass(this.parent.parentInjector.get(import14.IterableDiffers), this.parent.parentInjector.get(import17.KeyValueDiffers), new import18.ElementRef(this._el_2), this.renderer);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_5 = this.renderer.createElement(this._el_0, 'span', null);
        this._text_6 = this.renderer.createText(this._el_5, '', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._anchor_8 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_8 = new import2.AppElement(8, 0, this, this._anchor_8);
        this._TemplateRef_8_5 = new import13.TemplateRef_(this._appEl_8, viewFactory_LazyTreeView2);
        this._NgIf_8_6 = new import16.NgIf(this._appEl_8.vcRef, this._TemplateRef_8_5);
        this._text_9 = this.renderer.createText(this._el_0, '\n  ', null);
        var disposable_0 = this.renderer.listen(this._el_2, 'click', this.eventHandler(this._handle_click_2_0.bind(this)));
        this._expr_1 = import7.UNINITIALIZED;
        this._map_0 = import4.pureProxy1(function (p0) {
            return { 'tree-node-no-children': p0 };
        });
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7,
            this._anchor_8,
            this._text_9
        ], [disposable_0], []);
        return null;
    };
    _View_LazyTreeView1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import15.NgClass) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) {
            return this._NgClass_2_3;
        }
        if (((token === import13.TemplateRef) && (8 === requestNodeIndex))) {
            return this._TemplateRef_8_5;
        }
        if (((token === import16.NgIf) && (8 === requestNodeIndex))) {
            return this._NgIf_8_6;
        }
        return notFoundResult;
    };
    _View_LazyTreeView1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_1 = 'iconButton';
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this._NgClass_2_3.klass = currVal_1;
            this._expr_1 = currVal_1;
        }
        var currVal_2 = this._map_0(!this.context.$implicit.showIcon);
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this._NgClass_2_3.ngClass = currVal_2;
            this._expr_2 = currVal_2;
        }
        if (!throwOnChange) {
            this._NgClass_2_3.ngDoCheck();
        }
        var currVal_5 = this.context.$implicit.expanded;
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this._NgIf_8_6.ngIf = currVal_5;
            this._expr_5 = currVal_5;
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_3 = import4.interpolate(1, '', this.context.$implicit.icon, '');
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setText(this._text_3, currVal_3);
            this._expr_3 = currVal_3;
        }
        var currVal_4 = import4.interpolate(1, '', this.context.$implicit.name, '');
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setText(this._text_6, currVal_4);
            this._expr_4 = currVal_4;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_LazyTreeView1.prototype._handle_click_2_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.$implicit.expand() !== false);
        return (true && pd_0);
    };
    return _View_LazyTreeView1;
}(import1.AppView));
function viewFactory_LazyTreeView1(viewUtils, parentInjector, declarationEl) {
    return new _View_LazyTreeView1(viewUtils, parentInjector, declarationEl);
}
var _View_LazyTreeView2 = (function (_super) {
    __extends(_View_LazyTreeView2, _super);
    function _View_LazyTreeView2(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_LazyTreeView2, renderType_LazyTreeView, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_LazyTreeView2.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this._text_1 = this.renderer.createText(this._el_0, '\n      ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'lazy-tree-view', null);
        this._appEl_2 = new import2.AppElement(2, 0, this, this._el_2);
        var compView_2 = viewFactory_LazyTreeView0(this.viewUtils, this.injector(2), this._appEl_2);
        this._LazyTreeView_2_4 = new import3.LazyTreeView(this.parent.parent.parentInjector.get(import8.Store), this.parent.parent.parentInjector.get(import9.TreeNodeService));
        this._appEl_2.initComponent(this._LazyTreeView_2_4, [], compView_2);
        compView_2.create(this._LazyTreeView_2_4, [], null);
        this._text_3 = this.renderer.createText(this._el_0, '\n    ', null);
        this._expr_0 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ], [], []);
        return null;
    };
    _View_LazyTreeView2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.LazyTreeView) && (2 === requestNodeIndex))) {
            return this._LazyTreeView_2_4;
        }
        return notFoundResult;
    };
    _View_LazyTreeView2.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0 = this.parent.context.$implicit;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._LazyTreeView_2_4.root = currVal_0;
            this._expr_0 = currVal_0;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._LazyTreeView_2_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_LazyTreeView2.prototype.destroyInternal = function () {
        this._LazyTreeView_2_4.ngOnDestroy();
    };
    return _View_LazyTreeView2;
}(import1.AppView));
function viewFactory_LazyTreeView2(viewUtils, parentInjector, declarationEl) {
    return new _View_LazyTreeView2(viewUtils, parentInjector, declarationEl);
}
