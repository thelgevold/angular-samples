var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../../components/survey/survey-demo';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from './survey.ngfactory';
import * as import11 from '../../../components/survey/survey';
export var Wrapper_SurveyDemo = (function () {
    function Wrapper_SurveyDemo() {
        this.changed = false;
        this.context = new import0.SurveyDemo();
    }
    Wrapper_SurveyDemo.prototype.detectChangesInInputProps = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    Wrapper_SurveyDemo.prototype.detectChangesInHostProps = function (view, el, throwOnChange) {
    };
    return Wrapper_SurveyDemo;
}());
var renderType_SurveyDemo_Host = null;
var _View_SurveyDemo_Host0 = (function (_super) {
    __extends(_View_SurveyDemo_Host0, _super);
    function _View_SurveyDemo_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_SurveyDemo_Host0, renderType_SurveyDemo_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_SurveyDemo_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer, 'survey-demo', import4.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_SurveyDemo0(this.viewUtils, this.injector(0), this._appEl_0);
        this._SurveyDemo_0_4 = new Wrapper_SurveyDemo();
        this._appEl_0.initComponent(this._SurveyDemo_0_4.context, [], compView_0);
        compView_0.create(this._SurveyDemo_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_SurveyDemo_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.SurveyDemo) && (0 === requestNodeIndex))) {
            return this._SurveyDemo_0_4.context;
        }
        return notFoundResult;
    };
    _View_SurveyDemo_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._SurveyDemo_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._SurveyDemo_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_SurveyDemo_Host0;
}(import1.AppView));
function viewFactory_SurveyDemo_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_SurveyDemo_Host === null)) {
        (renderType_SurveyDemo_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_SurveyDemo_Host0(viewUtils, parentInjector, declarationEl);
}
export var SurveyDemoNgFactory = new import9.ComponentFactory('survey-demo', viewFactory_SurveyDemo_Host0, import0.SurveyDemo);
var styles_SurveyDemo = [];
var renderType_SurveyDemo = null;
var _View_SurveyDemo0 = (function (_super) {
    __extends(_View_SurveyDemo0, _super);
    function _View_SurveyDemo0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_SurveyDemo0, renderType_SurveyDemo, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_SurveyDemo0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = import4.createRenderElement(this.renderer, parentRenderNode, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._el_1 = import4.createRenderElement(this.renderer, this._el_0, 'h1', import4.EMPTY_INLINE_ARRAY, null);
        this._text_2 = this.renderer.createText(this._el_1, 'Survey using Dynamic Form', null);
        this._el_3 = import4.createRenderElement(this.renderer, this._el_0, 'survey', import4.EMPTY_INLINE_ARRAY, null);
        this._appEl_3 = new import3.AppElement(3, 0, this, this._el_3);
        var compView_3 = import10.viewFactory_Survey0(this.viewUtils, this.injector(3), this._appEl_3);
        this._Survey_3_4 = new import10.Wrapper_Survey();
        this._appEl_3.initComponent(this._Survey_3_4.context, [], compView_3);
        compView_3.create(this._Survey_3_4.context, [], null);
        this.init([], [
            this._el_0,
            this._el_1,
            this._text_2,
            this._el_3
        ], [], []);
        return null;
    };
    _View_SurveyDemo0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import11.Survey) && (3 === requestNodeIndex))) {
            return this._Survey_3_4.context;
        }
        return notFoundResult;
    };
    _View_SurveyDemo0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_3_0_0 = this.context.questionModel;
        this._Survey_3_4.check_model(currVal_3_0_0, throwOnChange, false);
        this._Survey_3_4.detectChangesInInputProps(this, this._el_3, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._Survey_3_4.detectChangesInHostProps(this, this._el_3, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_SurveyDemo0;
}(import1.AppView));
export function viewFactory_SurveyDemo0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_SurveyDemo === null)) {
        (renderType_SurveyDemo = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, styles_SurveyDemo, {}));
    }
    return new _View_SurveyDemo0(viewUtils, parentInjector, declarationEl);
}
