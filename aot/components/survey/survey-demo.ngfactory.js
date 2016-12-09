import * as import0 from '../../../components/survey/survey-demo';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../components/survey/survey';
import * as import9 from './survey.ngfactory';
export class Wrapper_SurveyDemo {
    constructor() {
        this._changed = false;
        this.context = new import0.SurveyDemo();
    }
    ngOnDetach(view, componentView, el) {
    }
    ngOnDestroy() {
    }
    ngDoCheck(view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    }
    checkHost(view, componentView, el, throwOnChange) {
    }
    handleEvent(eventName, $event) {
        var result = true;
        return result;
    }
    subscribe(view, _eventHandler) {
        this._eventHandler = _eventHandler;
    }
}
var renderType_SurveyDemo_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
class View_SurveyDemo_Host0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_SurveyDemo_Host0, renderType_SurveyDemo_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'survey-demo', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_SurveyDemo0(this.viewUtils, this, 0, this._el_0);
        this._SurveyDemo_0_3 = new Wrapper_SurveyDemo();
        this.compView_0.create(this._SurveyDemo_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._SurveyDemo_0_3.context);
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.SurveyDemo) && (0 === requestNodeIndex))) {
            return this._SurveyDemo_0_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._SurveyDemo_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    }
    destroyInternal() {
        this.compView_0.destroy();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
export const SurveyDemoNgFactory = new import7.ComponentFactory('survey-demo', View_SurveyDemo_Host0, import0.SurveyDemo);
const styles_SurveyDemo = [];
var renderType_SurveyDemo = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_SurveyDemo, {});
export class View_SurveyDemo0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_SurveyDemo0, renderType_SurveyDemo, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.parentElement);
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
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import8.Survey) && (3 === requestNodeIndex))) {
            return this._Survey_3_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_3_0_0 = this.context.questionModel;
        this._Survey_3_3.check_model(currVal_3_0_0, throwOnChange, false);
        this._Survey_3_3.ngDoCheck(this, this._el_3, throwOnChange);
        this.compView_3.detectChanges(throwOnChange);
    }
    destroyInternal() {
        this.compView_3.destroy();
    }
}
