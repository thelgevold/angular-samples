import * as import0 from '@angular/core';
import * as import1 from '../app.component';
import * as import2 from '@angular/router';
import * as import3 from '@angular/common';
var styles_AppComponent = [];
export var RenderType_AppComponent = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: styles_AppComponent,
    data: { animation: [] }
});
export function View_AppComponent_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 42, 'div', [[
                'class',
                'container'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵelementDef(0, null, null, 39, 'nav', [[
                'class',
                'navbar navbar-default'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n        ']),
        import0.ɵelementDef(0, null, null, 36, 'div', [[
                'class',
                'container-fluid'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n            ']),
        import0.ɵelementDef(0, null, null, 33, 'div', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n                ']),
        import0.ɵelementDef(0, null, null, 30, 'ul', [[
                'class',
                'nav navbar-nav'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n                    ']),
        import0.ɵelementDef(0, null, null, 2, 'li', [], null, null, null, null, null),
        import0.ɵelementDef(0, null, null, 1, 'a', [
            [
                'class',
                'link'
            ],
            [
                'href',
                'http://www.syntaxsuccess.com'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['Home']),
        import0.ɵtextDef(null, ['\n                    ']),
        import0.ɵelementDef(0, null, null, 4, 'li', [], [[
                1,
                'active'
            ]
        ], null, null, null, null),
        import0.ɵelementDef(0, null, null, 3, 'a', [[
                'class',
                'link'
            ]
        ], [
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
                var pd_0 = (import0.ɵnodeValue(view, 16).onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
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
        import0.ɵtextDef(null, ['About']),
        import0.ɵtextDef(null, ['\n                    ']),
        import0.ɵelementDef(0, null, null, 4, 'li', [], [[
                1,
                'active'
            ]
        ], null, null, null, null),
        import0.ɵelementDef(0, null, null, 3, 'a', [[
                'class',
                'link'
            ]
        ], [
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
                var pd_0 = (import0.ɵnodeValue(view, 22).onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
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
        import0.ɵtextDef(null, ['Demos']),
        import0.ɵtextDef(null, ['\n                    ']),
        import0.ɵtextDef(null, ['\n                    ']),
        import0.ɵelementDef(0, null, null, 2, 'li', [], null, null, null, null, null),
        import0.ɵelementDef(0, null, null, 1, 'a', [
            [
                'class',
                'link'
            ],
            [
                'href',
                'components/web-workers/web-worker-demo.html'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['Web Workers']),
        import0.ɵtextDef(null, ['\n                    ']),
        import0.ɵelementDef(0, null, null, 2, 'li', [], null, null, null, null, null),
        import0.ɵelementDef(0, null, null, 1, 'a', [
            [
                'class',
                'link'
            ],
            [
                'href',
                'upgrade.html'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['NgUpgrade']),
        import0.ɵtextDef(null, ['\n                    ']),
        import0.ɵelementDef(0, null, null, 2, 'li', [], null, null, null, null, null),
        import0.ɵelementDef(0, null, null, 1, 'a', [
            [
                'class',
                'link'
            ],
            [
                'href',
                'i18n.html'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['i18n']),
        import0.ɵtextDef(null, ['\n                ']),
        import0.ɵtextDef(null, ['\n            ']),
        import0.ɵtextDef(null, ['\n        ']),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵtextDef(null, ['\n']),
        import0.ɵtextDef(null, ['\n\n']),
        import0.ɵelementDef(0, null, null, 4, 'div', [[
                'class',
                'container'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵelementDef(256, null, null, 1, 'router-outlet', [[
                'name',
                'msg'
            ]
        ], null, null, null, null, null),
        import0.ɵdirectiveDef(2, null, 0, import2.RouterOutlet, [
            import2.RouterOutletMap,
            import0.ViewContainerRef,
            import0.ComponentFactoryResolver,
            [
                8,
                'msg'
            ]
        ], null, null),
        import0.ɵtextDef(null, ['\n']),
        import0.ɵtextDef(null, ['\n']),
        import0.ɵelementDef(256, null, null, 1, 'router-outlet', [], null, null, null, null, null),
        import0.ɵdirectiveDef(2, null, 0, import2.RouterOutlet, [
            import2.RouterOutletMap,
            import0.ViewContainerRef,
            import0.ComponentFactoryResolver,
            [
                8,
                null
            ]
        ], null, null),
        import0.ɵtextDef(null, ['\n'])
    ], function (check, view) {
        var comp = view.component;
        var currVal_0 = check(view, 17, 0, '/about');
        check(view, 16, 0, currVal_0);
        var currVal_1 = check(view, 23, 0, '/demo/spreadsheet');
        check(view, 22, 0, currVal_1);
    }, function (check, view) {
        var comp = view.component;
        var currVal_0 = comp.getLinkStyle('');
        check(view, 14, 0, currVal_0);
        var currVal_1 = import0.ɵnodeValue(view, 16).target;
        var currVal_2 = import0.ɵnodeValue(view, 16).href;
        check(view, 15, 0, currVal_1, currVal_2);
        var currVal_3 = comp.getLinkStyle('/demo');
        check(view, 20, 0, currVal_3);
        var currVal_4 = import0.ɵnodeValue(view, 22).target;
        var currVal_5 = import0.ɵnodeValue(view, 22).href;
        check(view, 21, 0, currVal_4, currVal_5);
    });
}
var RenderType_AppComponent_Host = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: [],
    data: { animation: [] }
});
function View_AppComponent_Host_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'demo-app', [], null, null, null, View_AppComponent_0, RenderType_AppComponent),
        import0.ɵdirectiveDef(1024, null, 0, import1.AppComponent, [import3.Location], null, null)
    ], null, null);
}
export var AppComponentNgFactory = import0.ɵcreateComponentFactory('demo-app', import1.AppComponent, View_AppComponent_Host_0);
