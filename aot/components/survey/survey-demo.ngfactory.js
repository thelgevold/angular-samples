import * as import0 from '@angular/core';
import * as import1 from './survey.ngfactory';
import * as import2 from '../../../components/survey/survey';
import * as import3 from '../../../components/survey/survey-demo';
var styles_SurveyDemo = [];
export var RenderType_SurveyDemo = import0.ɵcrt({
    encapsulation: 2,
    styles: styles_SurveyDemo,
    data: {}
});
export function View_SurveyDemo_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 4, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵeld(0, null, null, 1, 'h1', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Survey using Dynamic Form'])),
        (l()(), import0.ɵeld(0, null, null, 1, 'survey', [], null, null, null, import1.View_Survey_0, import1.RenderType_Survey)),
        import0.ɵdid(57344, null, 0, import2.Survey, [], { model: [
                0,
                'model'
            ]
        }, null)
    ], function (ck, v) {
        var co = v.component;
        var currVal_0 = co.questionModel;
        ck(v, 4, 0, currVal_0);
    }, null);
}
function View_SurveyDemo_Host_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'survey-demo', [], null, null, null, View_SurveyDemo_0, RenderType_SurveyDemo)),
        import0.ɵdid(24576, null, 0, import3.SurveyDemo, [], null, null)
    ], null, null);
}
export var SurveyDemoNgFactory = import0.ɵccf('survey-demo', import3.SurveyDemo, View_SurveyDemo_Host_0, {}, {}, []);
