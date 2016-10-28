var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../../components/algorithms/algorithms';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '../insertion-sort/insertion-sort.ngfactory';
import * as import11 from '../../../components/insertion-sort/insertion-sort';
export var Wrapper_Algorithms = (function () {
    function Wrapper_Algorithms() {
        this.changed = false;
        this.context = new import0.Algorithms();
    }
    Wrapper_Algorithms.prototype.detectChangesInInputProps = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    Wrapper_Algorithms.prototype.detectChangesInHostProps = function (view, el, throwOnChange) {
    };
    return Wrapper_Algorithms;
}());
var renderType_Algorithms_Host = null;
var _View_Algorithms_Host0 = (function (_super) {
    __extends(_View_Algorithms_Host0, _super);
    function _View_Algorithms_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Algorithms_Host0, renderType_Algorithms_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_Algorithms_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer, 'algorithms', import4.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_Algorithms0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Algorithms_0_4 = new Wrapper_Algorithms();
        this._appEl_0.initComponent(this._Algorithms_0_4.context, [], compView_0);
        compView_0.create(this._Algorithms_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_Algorithms_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.Algorithms) && (0 === requestNodeIndex))) {
            return this._Algorithms_0_4.context;
        }
        return notFoundResult;
    };
    _View_Algorithms_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._Algorithms_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._Algorithms_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_Algorithms_Host0;
}(import1.AppView));
function viewFactory_Algorithms_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Algorithms_Host === null)) {
        (renderType_Algorithms_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_Algorithms_Host0(viewUtils, parentInjector, declarationEl);
}
export var AlgorithmsNgFactory = new import9.ComponentFactory('algorithms', viewFactory_Algorithms_Host0, import0.Algorithms);
var styles_Algorithms = [];
var renderType_Algorithms = null;
var _View_Algorithms0 = (function (_super) {
    __extends(_View_Algorithms0, _super);
    function _View_Algorithms0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Algorithms0, renderType_Algorithms, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_Algorithms0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = import4.createRenderElement(this.renderer, parentRenderNode, 'h1', import4.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, 'Insertion Sort Demo', null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_3 = import4.createRenderElement(this.renderer, parentRenderNode, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._text_4 = this.renderer.createText(this._el_3, 'Watch the list get sorted as the algorithm traverses the list', null);
        this._text_5 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_6 = import4.createRenderElement(this.renderer, parentRenderNode, 'insertion-sort', import4.EMPTY_INLINE_ARRAY, null);
        this._appEl_6 = new import3.AppElement(6, null, this, this._el_6);
        var compView_6 = import10.viewFactory_InsertionSort0(this.viewUtils, this.injector(6), this._appEl_6);
        this._InsertionSort_6_4 = new import10.Wrapper_InsertionSort();
        this._appEl_6.initComponent(this._InsertionSort_6_4.context, [], compView_6);
        compView_6.create(this._InsertionSort_6_4.context, [], null);
        this._text_7 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_8 = import4.createRenderElement(this.renderer, parentRenderNode, 'h4', import4.EMPTY_INLINE_ARRAY, null);
        this._el_9 = import4.createRenderElement(this.renderer, this._el_8, 'a', new import4.InlineArray2(2, 'href', 'http://www.syntaxsuccess.com/viewarticle/timeouts-and-timerwrapper-in-angular-2.0'), null);
        this._text_10 = this.renderer.createText(this._el_9, 'Read more here', null);
        this.init([], [
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
        ], [], []);
        return null;
    };
    _View_Algorithms0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import11.InsertionSort) && (6 === requestNodeIndex))) {
            return this._InsertionSort_6_4.context;
        }
        return notFoundResult;
    };
    _View_Algorithms0.prototype.detectChangesInternal = function (throwOnChange) {
        this._InsertionSort_6_4.detectChangesInInputProps(this, this._el_6, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._InsertionSort_6_4.detectChangesInHostProps(this, this._el_6, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_Algorithms0;
}(import1.AppView));
export function viewFactory_Algorithms0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Algorithms === null)) {
        (renderType_Algorithms = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, styles_Algorithms, {}));
    }
    return new _View_Algorithms0(viewUtils, parentInjector, declarationEl);
}
