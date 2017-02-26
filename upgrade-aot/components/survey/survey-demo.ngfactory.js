import * as import0 from '@angular/core';
import * as import1 from './survey.ngfactory';
import * as import2 from '../../../components/survey/survey';
import * as import3 from '../../../components/survey/survey-demo';
var styles_SurveyDemo = [];
export var RenderType_SurveyDemo = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: styles_SurveyDemo,
    data: { animation: [] }
});
export function View_SurveyDemo_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 4, 'div', [], null, null, null, null, null),
        import0.ɵelementDef(0, null, null, 1, 'h1', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['Survey using Dynamic Form']),
        import0.ɵelementDef(0, null, null, 1, 'survey', [], null, null, null, import1.View_Survey_0, import1.RenderType_Survey),
        import0.ɵdirectiveDef(1025, null, 0, import2.Survey, [], { model: [
                0,
                'model'
            ]
        }, null)
    ], function (check, view) {
        var comp = view.component;
        var currVal_0 = comp.questionModel;
        check(view, 4, 0, currVal_0);
    }, null);
}
var RenderType_SurveyDemo_Host = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: [],
    data: { animation: [] }
});
function View_SurveyDemo_Host_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'survey-demo', [], null, null, null, View_SurveyDemo_0, RenderType_SurveyDemo),
        import0.ɵdirectiveDef(1024, null, 0, import3.SurveyDemo, [], null, null)
    ], null, null);
}
export var SurveyDemoNgFactory = import0.ɵcreateComponentFactory('survey-demo', import3.SurveyDemo, View_SurveyDemo_Host_0);
