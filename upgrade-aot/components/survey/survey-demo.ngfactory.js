var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../../components/survey/survey-demo';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../components/survey/survey';
import * as import9 from './survey.ngfactory';
export var Wrapper_SurveyDemo = (function () {
    function Wrapper_SurveyDemo() {
        this._changed = false;
        this.context = new import0.SurveyDemo();
    }
    Wrapper_SurveyDemo.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_SurveyDemo.prototype.ngOnDestroy = function () {
    };
    Wrapper_SurveyDemo.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_SurveyDemo.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_SurveyDemo.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_SurveyDemo.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_SurveyDemo;
}());
var renderType_SurveyDemo_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_SurveyDemo_Host0 = (function (_super) {
    __extends(View_SurveyDemo_Host0, _super);
    function View_SurveyDemo_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_SurveyDemo_Host0, renderType_SurveyDemo_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_SurveyDemo_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'survey-demo', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_SurveyDemo0(this.viewUtils, this, 0, this._el_0);
        this._SurveyDemo_0_3 = new Wrapper_SurveyDemo();
        this.compView_0.create(this._SurveyDemo_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._SurveyDemo_0_3.context);
    };
    View_SurveyDemo_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.SurveyDemo) && (0 === requestNodeIndex))) {
            return this._SurveyDemo_0_3.context;
        }
        return notFoundResult;
    };
    View_SurveyDemo_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._SurveyDemo_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    };
    View_SurveyDemo_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_SurveyDemo_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_SurveyDemo_Host0;
}(import1.AppView));
export var SurveyDemoNgFactory = new import7.ComponentFactory('survey-demo', View_SurveyDemo_Host0, import0.SurveyDemo);
var styles_SurveyDemo = [];
var renderType_SurveyDemo = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_SurveyDemo, {});
export var View_SurveyDemo0 = (function (_super) {
    __extends(View_SurveyDemo0, _super);
    function View_SurveyDemo0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_SurveyDemo0, renderType_SurveyDemo, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_SurveyDemo0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._el_1 = import3.createRenderElement(this.renderer, this._el_0, 'h1', import3.EMPTY_INLINE_ARRAY, null);
        this._text_2 = this.renderer.createText(this._el_1, 'Survey using Dynamic Form', null);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_0, 'survey', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_3 = new import9.View_Survey0(this.viewUtils, this, 3, this._el_3);
        this._Survey_3_3 = new import9.Wrapper_Survey();
        this.compView_3.create(this._Survey_3_3.context);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._el_1,
            this._text_2,
            this._el_3
        ]), null);
        return null;
    };
    View_SurveyDemo0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import8.Survey) && (3 === requestNodeIndex))) {
            return this._Survey_3_3.context;
        }
        return notFoundResult;
    };
    View_SurveyDemo0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_3_0_0 = this.context.questionModel;
        this._Survey_3_3.check_model(currVal_3_0_0, throwOnChange, false);
        this._Survey_3_3.ngDoCheck(this, this._el_3, throwOnChange);
        this.compView_3.detectChanges(throwOnChange);
    };
    View_SurveyDemo0.prototype.destroyInternal = function () {
        this.compView_3.destroy();
    };
    return View_SurveyDemo0;
}(import1.AppView));
