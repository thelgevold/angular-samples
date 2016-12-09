var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../../components/algorithms/algorithms';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../components/insertion-sort/insertion-sort';
import * as import9 from '../insertion-sort/insertion-sort.ngfactory';
export var Wrapper_Algorithms = (function () {
    function Wrapper_Algorithms() {
        this._changed = false;
        this.context = new import0.Algorithms();
    }
    Wrapper_Algorithms.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_Algorithms.prototype.ngOnDestroy = function () {
    };
    Wrapper_Algorithms.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_Algorithms.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_Algorithms.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_Algorithms.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_Algorithms;
}());
var renderType_Algorithms_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_Algorithms_Host0 = (function (_super) {
    __extends(View_Algorithms_Host0, _super);
    function View_Algorithms_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_Algorithms_Host0, renderType_Algorithms_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_Algorithms_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'algorithms', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_Algorithms0(this.viewUtils, this, 0, this._el_0);
        this._Algorithms_0_3 = new Wrapper_Algorithms();
        this.compView_0.create(this._Algorithms_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._Algorithms_0_3.context);
    };
    View_Algorithms_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.Algorithms) && (0 === requestNodeIndex))) {
            return this._Algorithms_0_3.context;
        }
        return notFoundResult;
    };
    View_Algorithms_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._Algorithms_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    };
    View_Algorithms_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_Algorithms_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_Algorithms_Host0;
}(import1.AppView));
export var AlgorithmsNgFactory = new import7.ComponentFactory('algorithms', View_Algorithms_Host0, import0.Algorithms);
var styles_Algorithms = [];
var renderType_Algorithms = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_Algorithms, {});
export var View_Algorithms0 = (function (_super) {
    __extends(View_Algorithms0, _super);
    function View_Algorithms0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_Algorithms0, renderType_Algorithms, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_Algorithms0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
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
    };
    View_Algorithms0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import8.InsertionSort) && (6 === requestNodeIndex))) {
            return this._InsertionSort_6_3.context;
        }
        return notFoundResult;
    };
    View_Algorithms0.prototype.detectChangesInternal = function (throwOnChange) {
        this._InsertionSort_6_3.ngDoCheck(this, this._el_6, throwOnChange);
        this.compView_6.detectChanges(throwOnChange);
    };
    View_Algorithms0.prototype.destroyInternal = function () {
        this.compView_6.destroy();
    };
    return View_Algorithms0;
}(import1.AppView));
