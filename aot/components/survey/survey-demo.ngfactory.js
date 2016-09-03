import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../components/survey/survey-demo';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '../../../components/survey/survey';
import * as import11 from './survey.ngfactory';
var renderType_SurveyDemo_Host = null;
class _View_SurveyDemo_Host0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_SurveyDemo_Host0, renderType_SurveyDemo_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('survey-demo', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_SurveyDemo0(this.viewUtils, this.injector(0), this._appEl_0);
        this._SurveyDemo_0_4 = new import3.SurveyDemo();
        this._appEl_0.initComponent(this._SurveyDemo_0_4, [], compView_0);
        compView_0.create(this._SurveyDemo_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import3.SurveyDemo) && (0 === requestNodeIndex))) {
            return this._SurveyDemo_0_4;
        }
        return notFoundResult;
    }
}
function viewFactory_SurveyDemo_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_SurveyDemo_Host === null)) {
        (renderType_SurveyDemo_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_SurveyDemo_Host0(viewUtils, parentInjector, declarationEl);
}
export const SurveyDemoNgFactory = new import9.ComponentFactory('survey-demo', viewFactory_SurveyDemo_Host0, import3.SurveyDemo);
const styles_SurveyDemo = [];
var renderType_SurveyDemo = null;
class _View_SurveyDemo0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_SurveyDemo0, renderType_SurveyDemo, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'div', null);
        this._el_1 = this.renderer.createElement(this._el_0, 'h1', null);
        this._text_2 = this.renderer.createText(this._el_1, 'Survey using Dynamic Form', null);
        this._el_3 = this.renderer.createElement(this._el_0, 'survey', null);
        this._appEl_3 = new import2.AppElement(3, 0, this, this._el_3);
        var compView_3 = import11.viewFactory_Survey0(this.viewUtils, this.injector(3), this._appEl_3);
        this._Survey_3_4 = new import10.Survey();
        this._appEl_3.initComponent(this._Survey_3_4, [], compView_3);
        compView_3.create(this._Survey_3_4, [], null);
        this._expr_0 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._el_1,
            this._text_2,
            this._el_3
        ], [], []);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import10.Survey) && (3 === requestNodeIndex))) {
            return this._Survey_3_4;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_0 = this.context.questionModel;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._Survey_3_4.model = currVal_0;
            this._expr_0 = currVal_0;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Survey_3_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
}
export function viewFactory_SurveyDemo0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_SurveyDemo === null)) {
        (renderType_SurveyDemo = viewUtils.createRenderComponentType('/Users/tor/Development/angular-2-samples/components/survey/survey-demo.ts class SurveyDemo - inline template', 0, import8.ViewEncapsulation.None, styles_SurveyDemo, {}));
    }
    return new _View_SurveyDemo0(viewUtils, parentInjector, declarationEl);
}
