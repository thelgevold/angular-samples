import * as import0 from '@angular/core';
import * as import1 from '../../../components/about/about';
import * as import2 from '@angular/router';
import * as import3 from '@angular/common';
var styles_About = [];
export var RenderType_About = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: styles_About,
    data: { animation: [] }
});
export function View_About_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 27, 'div', [[
                'class',
                'container'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵelementDef(0, null, null, 1, 'h1', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['Welcome']),
        import0.ɵtextDef(null, ['\n\n    ']),
        import0.ɵelementDef(0, null, null, 1, 'p', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n        This is a live demo of my Angular sample components.\n    ']),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵelementDef(0, null, null, 6, 'p', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n        I hope you will find these ']),
        import0.ɵelementDef(0, null, null, 3, 'a', [], [
            [
                0,
                'target',
                0
            ],
            [
                3,
                'href',
                4
            ]
        ], [[
                null,
                'click'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                var pd_0 = (import0.ɵnodeValue(view, 11).onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            return allowDefault;
        }, null, null),
        import0.ɵdirectiveDef(10, null, 0, import2.RouterLinkWithHref, [
            import2.Router,
            import2.ActivatedRoute,
            import3.LocationStrategy
        ], { routerLink: [
                0,
                'routerLink'
            ]
        }, null),
        import0.ɵpureArrayDef(1),
        import0.ɵtextDef(null, ['demos']),
        import0.ɵtextDef(null, [' useful and educational. Stay tuned for more progress soon.\n        Don\'t hesitate to tweet me at @helgevold with suggestions for more components.\n    ']),
        import0.ɵtextDef(null, ['\n\n    ']),
        import0.ɵelementDef(0, null, null, 4, 'p', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n        Click ']),
        import0.ɵelementDef(0, null, null, 1, 'a', [[
                'href',
                'http://www.syntaxsuccess.com/angular-2-articles'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['here']),
        import0.ɵtextDef(null, [' for a full list of my Angular articles.\n    ']),
        import0.ɵtextDef(null, ['\n\n    ']),
        import0.ɵelementDef(0, null, null, 4, 'p', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n        The source code for the full set of components is available on ']),
        import0.ɵelementDef(0, null, null, 1, 'a', [[
                'href',
                'https://github.com/thelgevold/angular-2-samples'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['GitHub']),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵtextDef(null, ['\n\n'])
    ], function (check, view) {
        var comp = view.component;
        var currVal_0 = check(view, 12, 0, '/Demo/Spreadsheet');
        check(view, 11, 0, currVal_0);
    }, function (check, view) {
        var comp = view.component;
        var currVal_0 = import0.ɵnodeValue(view, 11).target;
        var currVal_1 = import0.ɵnodeValue(view, 11).href;
        check(view, 10, 0, currVal_0, currVal_1);
    });
}
var RenderType_About_Host = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: [],
    data: { animation: [] }
});
function View_About_Host_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'about', [], null, null, null, View_About_0, RenderType_About),
        import0.ɵdirectiveDef(1024, null, 0, import1.About, [], null, null)
    ], null, null);
}
export var AboutNgFactory = import0.ɵcreateComponentFactory('about', import1.About, View_About_Host_0);
