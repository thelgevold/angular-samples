var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../components/tree-view/tree-view';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '@angular/common/src/directives/ng_for';
import * as import11 from '@angular/core/src/linker/template_ref';
import * as import12 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import13 from '@angular/common/src/directives/ng_if';
var renderType_TreeView_Host = null;
var _View_TreeView_Host0 = (function (_super) {
    __extends(_View_TreeView_Host0, _super);
    function _View_TreeView_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TreeView_Host0, renderType_TreeView_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_TreeView_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('tree-view', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_TreeView0(this.viewUtils, this.injector(0), this._appEl_0);
        this._TreeView_0_4 = new import3.TreeView();
        this._appEl_0.initComponent(this._TreeView_0_4, [], compView_0);
        compView_0.create(this._TreeView_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_TreeView_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.TreeView) && (0 === requestNodeIndex))) {
            return this._TreeView_0_4;
        }
        return notFoundResult;
    };
    return _View_TreeView_Host0;
}(import1.AppView));
function viewFactory_TreeView_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_TreeView_Host === null)) {
        (renderType_TreeView_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_TreeView_Host0(viewUtils, parentInjector, declarationEl);
}
export var TreeViewNgFactory = new import9.ComponentFactory('tree-view', viewFactory_TreeView_Host0, import3.TreeView);
var styles_TreeView = [];
var renderType_TreeView = null;
var _View_TreeView0 = (function (_super) {
    __extends(_View_TreeView0, _super);
    function _View_TreeView0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TreeView0, renderType_TreeView, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_TreeView0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ul', null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_2 = new import2.AppElement(2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new import11.TemplateRef_(this._appEl_2, viewFactory_TreeView1);
        this._NgFor_2_6 = new import10.NgFor(this._appEl_2.vcRef, this._TemplateRef_2_5, this.parentInjector.get(import12.IterableDiffers), this.ref);
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
    _View_TreeView0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import11.TemplateRef) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === import10.NgFor) && (2 === requestNodeIndex))) {
            return this._NgFor_2_6;
        }
        return notFoundResult;
    };
    _View_TreeView0.prototype.detectChangesInternal = function (throwOnChange) {
        var changes = null;
        changes = null;
        var currVal_0 = this.context.directories;
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
    return _View_TreeView0;
}(import1.AppView));
export function viewFactory_TreeView0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_TreeView === null)) {
        (renderType_TreeView = viewUtils.createRenderComponentType('/Users/tor/Development/angular-2-samples/components/tree-view/tree-view.html', 0, import8.ViewEncapsulation.None, styles_TreeView, {}));
    }
    return new _View_TreeView0(viewUtils, parentInjector, declarationEl);
}
var _View_TreeView1 = (function (_super) {
    __extends(_View_TreeView1, _super);
    function _View_TreeView1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TreeView1, renderType_TreeView, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_TreeView1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'li', null);
        this._text_1 = this.renderer.createText(this._el_0, '\n\n        ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'span', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'iconButton');
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._el_4 = this.renderer.createElement(this._el_0, 'input', null);
        this.renderer.setElementAttribute(this._el_4, 'type', 'checkbox');
        this._text_5 = this.renderer.createText(this._el_0, '', null);
        this._anchor_6 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_6 = new import2.AppElement(6, 0, this, this._anchor_6);
        this._TemplateRef_6_5 = new import11.TemplateRef_(this._appEl_6, viewFactory_TreeView2);
        this._NgIf_6_6 = new import13.NgIf(this._appEl_6.vcRef, this._TemplateRef_6_5);
        this._text_7 = this.renderer.createText(this._el_0, '\n\n    ', null);
        var disposable_0 = this.renderer.listen(this._el_2, 'click', this.eventHandler(this._handle_click_2_0.bind(this)));
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        var disposable_1 = this.renderer.listen(this._el_4, 'click', this.eventHandler(this._handle_click_4_0.bind(this)));
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._anchor_6,
            this._text_7
        ], [
            disposable_0,
            disposable_1
        ], []);
        return null;
    };
    _View_TreeView1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import11.TemplateRef) && (6 === requestNodeIndex))) {
            return this._TemplateRef_6_5;
        }
        if (((token === import13.NgIf) && (6 === requestNodeIndex))) {
            return this._NgIf_6_6;
        }
        return notFoundResult;
    };
    _View_TreeView1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_5 = this.context.$implicit.expanded;
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this._NgIf_6_6.ngIf = currVal_5;
            this._expr_5 = currVal_5;
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_1 = import4.interpolate(1, '', this.context.$implicit.getIcon(), '');
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setText(this._text_3, currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_3 = this.context.$implicit.checked;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementProperty(this._el_4, 'checked', currVal_3);
            this._expr_3 = currVal_3;
        }
        var currVal_4 = import4.interpolate(1, ' ', this.context.$implicit.name, '\n\n        ');
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setText(this._text_5, currVal_4);
            this._expr_4 = currVal_4;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_TreeView1.prototype._handle_click_2_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.$implicit.toggle() !== false);
        return (true && pd_0);
    };
    _View_TreeView1.prototype._handle_click_4_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.$implicit.check() !== false);
        return (true && pd_0);
    };
    return _View_TreeView1;
}(import1.AppView));
function viewFactory_TreeView1(viewUtils, parentInjector, declarationEl) {
    return new _View_TreeView1(viewUtils, parentInjector, declarationEl);
}
var _View_TreeView2 = (function (_super) {
    __extends(_View_TreeView2, _super);
    function _View_TreeView2(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TreeView2, renderType_TreeView, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_TreeView2.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this._text_1 = this.renderer.createText(this._el_0, '\n\n            ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ul', null);
        this._text_3 = this.renderer.createText(this._el_2, '\n                ', null);
        this._anchor_4 = this.renderer.createTemplateAnchor(this._el_2, null);
        this._appEl_4 = new import2.AppElement(4, 2, this, this._anchor_4);
        this._TemplateRef_4_5 = new import11.TemplateRef_(this._appEl_4, viewFactory_TreeView3);
        this._NgFor_4_6 = new import10.NgFor(this._appEl_4.vcRef, this._TemplateRef_4_5, this.parent.parent.parentInjector.get(import12.IterableDiffers), this.parent.parent.ref);
        this._text_5 = this.renderer.createText(this._el_2, '\n            ', null);
        this._text_6 = this.renderer.createText(this._el_0, '\n\n            ', null);
        this._el_7 = this.renderer.createElement(this._el_0, 'tree-view', null);
        this._appEl_7 = new import2.AppElement(7, 0, this, this._el_7);
        var compView_7 = viewFactory_TreeView0(this.viewUtils, this.injector(7), this._appEl_7);
        this._TreeView_7_4 = new import3.TreeView();
        this._appEl_7.initComponent(this._TreeView_7_4, [], compView_7);
        compView_7.create(this._TreeView_7_4, [], null);
        this._text_8 = this.renderer.createText(this._el_0, '\n\n        ', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._anchor_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8
        ], [], []);
        return null;
    };
    _View_TreeView2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import11.TemplateRef) && (4 === requestNodeIndex))) {
            return this._TemplateRef_4_5;
        }
        if (((token === import10.NgFor) && (4 === requestNodeIndex))) {
            return this._NgFor_4_6;
        }
        if (((token === import3.TreeView) && (7 === requestNodeIndex))) {
            return this._TreeView_7_4;
        }
        return notFoundResult;
    };
    _View_TreeView2.prototype.detectChangesInternal = function (throwOnChange) {
        var changes = null;
        changes = null;
        var currVal_0 = this.parent.context.$implicit.files;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._NgFor_4_6.ngForOf = currVal_0;
            if ((changes === null)) {
                (changes = {});
            }
            changes['ngForOf'] = new import7.SimpleChange(this._expr_0, currVal_0);
            this._expr_0 = currVal_0;
        }
        if ((changes !== null)) {
            this._NgFor_4_6.ngOnChanges(changes);
        }
        if (!throwOnChange) {
            this._NgFor_4_6.ngDoCheck();
        }
        var currVal_1 = this.parent.context.$implicit.directories;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this._TreeView_7_4.directories = currVal_1;
            this._expr_1 = currVal_1;
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_TreeView2;
}(import1.AppView));
function viewFactory_TreeView2(viewUtils, parentInjector, declarationEl) {
    return new _View_TreeView2(viewUtils, parentInjector, declarationEl);
}
var _View_TreeView3 = (function (_super) {
    __extends(_View_TreeView3, _super);
    function _View_TreeView3(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TreeView3, renderType_TreeView, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_TreeView3.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'li', null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this._expr_0 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    _View_TreeView3.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_0 = import4.interpolate(1, '', this.context.$implicit, '');
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setText(this._text_1, currVal_0);
            this._expr_0 = currVal_0;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_TreeView3;
}(import1.AppView));
function viewFactory_TreeView3(viewUtils, parentInjector, declarationEl) {
    return new _View_TreeView3(viewUtils, parentInjector, declarationEl);
}
