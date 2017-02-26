import * as import0 from '@angular/core';
import * as import1 from '../../../components/http/http';
import * as import2 from '@angular/common';
import * as import3 from '@angular/http';
var styles_HttpSample = [];
export var RenderType_HttpSample = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: styles_HttpSample,
    data: { animation: [] }
});
function View_HttpSample_1() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'div', [], null, null, null, null, null),
        import0.ɵtextDef(null, [
            '\n    ',
            '\n'
        ])
    ], null, function (check, view) {
        var comp = view.component;
        var currVal_0 = view.context.$implicit;
        check(view, 1, 0, currVal_0);
    });
}
function View_HttpSample_2() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'div', [], null, null, null, null, null),
        import0.ɵtextDef(null, [
            '\n    ',
            '\n'
        ])
    ], null, function (check, view) {
        var comp = view.component;
        var currVal_0 = view.context.$implicit;
        check(view, 1, 0, currVal_0);
    });
}
function View_HttpSample_3() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'div', [], null, null, null, null, null),
        import0.ɵtextDef(null, [
            '\n    ',
            '\n'
        ])
    ], null, function (check, view) {
        var comp = view.component;
        var currVal_0 = view.context.$implicit;
        check(view, 1, 0, currVal_0);
    });
}
function View_HttpSample_4() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 4, 'div', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵelementDef(0, null, null, 1, 'div', [
            [
                'class',
                'alert alert-danger'
            ],
            [
                'role',
                'alert'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n        There was an error loading the list of friends (Intentional error testing)\n    ']),
        import0.ɵtextDef(null, ['\n'])
    ], null, null);
}
export function View_HttpSample_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'h1', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['Making Http Requests']),
        import0.ɵtextDef(null, ['\n\n']),
        import0.ɵelementDef(0, null, null, 1, 'div', [
            [
                'class',
                'alert alert-success'
            ],
            [
                'role',
                'alert'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n    Click a country to display that country\'s capitol. Observables in flight will be cancelled prior to loading new data.\n']),
        import0.ɵtextDef(null, ['\n\n']),
        import0.ɵelementDef(0, null, null, 26, 'table', [[
                'class',
                'table'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵelementDef(0, null, null, 24, 'tbody', [], null, null, null, null, null),
        import0.ɵelementDef(0, null, null, 4, 'tr', [], null, [[
                null,
                'click'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                comp.country.next('usa');
                var pd_0 = ((comp.activeCountry = 'usa') !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            return allowDefault;
        }, null, null),
        import0.ɵdirectiveDef(4, null, 0, import2.NgClass, [
            import0.IterableDiffers,
            import0.KeyValueDiffers,
            import0.ElementRef,
            import0.Renderer
        ], { ngClass: [
                0,
                'ngClass'
            ]
        }, null),
        import0.ɵpureObjectDef(['active']),
        import0.ɵelementDef(0, null, null, 1, 'td', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['USA']),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵelementDef(0, null, null, 4, 'tr', [], null, [[
                null,
                'click'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                comp.country.next('denmark');
                var pd_0 = ((comp.activeCountry = 'denmark') !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            return allowDefault;
        }, null, null),
        import0.ɵdirectiveDef(4, null, 0, import2.NgClass, [
            import0.IterableDiffers,
            import0.KeyValueDiffers,
            import0.ElementRef,
            import0.Renderer
        ], { ngClass: [
                0,
                'ngClass'
            ]
        }, null),
        import0.ɵpureObjectDef(['active']),
        import0.ɵelementDef(0, null, null, 1, 'td', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['Denmark']),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵelementDef(0, null, null, 4, 'tr', [], null, [[
                null,
                'click'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                comp.country.next('germany');
                var pd_0 = ((comp.activeCountry = 'germany') !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            return allowDefault;
        }, null, null),
        import0.ɵdirectiveDef(4, null, 0, import2.NgClass, [
            import0.IterableDiffers,
            import0.KeyValueDiffers,
            import0.ElementRef,
            import0.Renderer
        ], { ngClass: [
                0,
                'ngClass'
            ]
        }, null),
        import0.ɵpureObjectDef(['active']),
        import0.ɵelementDef(0, null, null, 1, 'td', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['Germany']),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵelementDef(0, null, null, 4, 'tr', [], null, [[
                null,
                'click'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                comp.country.next('argentina');
                var pd_0 = ((comp.activeCountry = 'argentina') !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            return allowDefault;
        }, null, null),
        import0.ɵdirectiveDef(4, null, 0, import2.NgClass, [
            import0.IterableDiffers,
            import0.KeyValueDiffers,
            import0.ElementRef,
            import0.Renderer
        ], { ngClass: [
                0,
                'ngClass'
            ]
        }, null),
        import0.ɵpureObjectDef(['active']),
        import0.ɵelementDef(0, null, null, 1, 'td', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['Argentina']),
        import0.ɵtextDef(null, ['\n']),
        import0.ɵtextDef(null, ['\n\n']),
        import0.ɵelementDef(0, null, null, 3, 'div', [[
                'style',
                'margin-left: 10px;'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['The capitol is ']),
        import0.ɵelementDef(0, null, null, 1, 'strong', [], null, null, null, null, null),
        import0.ɵtextDef(null, [
            '',
            ''
        ]),
        import0.ɵtextDef(null, ['\n\n']),
        import0.ɵelementDef(0, null, null, 0, 'br', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n\n']),
        import0.ɵelementDef(0, null, null, 1, 'div', [
            [
                'class',
                'alert alert-success'
            ],
            [
                'role',
                'alert'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n    List of friends using Observables\n']),
        import0.ɵtextDef(null, ['\n']),
        import0.ɵanchorDef(256, null, null, 1, null, View_HttpSample_1),
        import0.ɵdirectiveDef(12, null, 0, import2.NgForOf, [
            import0.ViewContainerRef,
            import0.TemplateRef,
            import0.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        import0.ɵtextDef(null, ['\n']),
        import0.ɵelementDef(0, null, null, 0, 'br', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n\n']),
        import0.ɵelementDef(0, null, null, 1, 'div', [
            [
                'class',
                'alert alert-success'
            ],
            [
                'role',
                'alert'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n    List of friends loaded using Promises\n']),
        import0.ɵtextDef(null, ['\n']),
        import0.ɵanchorDef(256, null, null, 1, null, View_HttpSample_2),
        import0.ɵdirectiveDef(12, null, 0, import2.NgForOf, [
            import0.ViewContainerRef,
            import0.TemplateRef,
            import0.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        import0.ɵtextDef(null, ['\n']),
        import0.ɵelementDef(0, null, null, 0, 'br', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n\n']),
        import0.ɵelementDef(0, null, null, 1, 'div', [
            [
                'class',
                'alert alert-success'
            ],
            [
                'role',
                'alert'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n    List of friends and customer loaded successfully in parallel\n']),
        import0.ɵtextDef(null, ['\n']),
        import0.ɵelementDef(0, null, null, 1, 'div', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['Friends:']),
        import0.ɵtextDef(null, ['\n']),
        import0.ɵanchorDef(256, null, null, 1, null, View_HttpSample_3),
        import0.ɵdirectiveDef(12, null, 0, import2.NgForOf, [
            import0.ViewContainerRef,
            import0.TemplateRef,
            import0.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        import0.ɵtextDef(null, ['\n']),
        import0.ɵelementDef(0, null, null, 0, 'br', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n']),
        import0.ɵelementDef(0, null, null, 1, 'div', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['Customer:']),
        import0.ɵtextDef(null, ['\n']),
        import0.ɵelementDef(0, null, null, 1, 'div', [], null, null, null, null, null),
        import0.ɵtextDef(null, [
            '',
            ''
        ]),
        import0.ɵtextDef(null, ['\n\n']),
        import0.ɵelementDef(0, null, null, 0, 'br', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n']),
        import0.ɵelementDef(0, null, null, 1, 'div', [
            [
                'class',
                'alert alert-success'
            ],
            [
                'role',
                'alert'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n    Loaded a contract after first loading a customer\n']),
        import0.ɵtextDef(null, ['\n']),
        import0.ɵelementDef(0, null, null, 7, 'div', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵelementDef(0, null, null, 1, 'div', [], null, null, null, null, null),
        import0.ɵtextDef(null, [
            'Customer: ',
            ''
        ]),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵelementDef(0, null, null, 1, 'div', [], null, null, null, null, null),
        import0.ɵtextDef(null, [
            'Product: ',
            ''
        ]),
        import0.ɵtextDef(null, ['\n']),
        import0.ɵtextDef(null, ['\n\n']),
        import0.ɵelementDef(0, null, null, 0, 'br', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n']),
        import0.ɵanchorDef(256, null, null, 1, null, View_HttpSample_4),
        import0.ɵdirectiveDef(0, null, 0, import2.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        import0.ɵtextDef(null, ['\n\n']),
        import0.ɵelementDef(0, null, null, 1, 'div', [
            [
                'class',
                'alert alert-success'
            ],
            [
                'role',
                'alert'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n    Making a post request\n']),
        import0.ɵtextDef(null, ['\n']),
        import0.ɵelementDef(0, null, null, 13, 'div', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵelementDef(0, null, null, 1, 'button', [], null, [[
                null,
                'click'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                var pd_0 = (comp.postData() !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            return allowDefault;
        }, null, null),
        import0.ɵtextDef(null, ['Post Data']),
        import0.ɵtextDef(null, ['\n\n    ']),
        import0.ɵelementDef(0, null, null, 1, 'p', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['Posted the following values:']),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵelementDef(0, null, null, 1, 'div', [], null, null, null, null, null),
        import0.ɵtextDef(null, [
            '',
            ''
        ]),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵelementDef(0, null, null, 1, 'div', [], null, null, null, null, null),
        import0.ɵtextDef(null, [
            '',
            ''
        ]),
        import0.ɵtextDef(null, ['\n']),
        import0.ɵtextDef(null, ['\n\n']),
        import0.ɵelementDef(0, null, null, 2, 'h4', [], null, null, null, null, null),
        import0.ɵelementDef(0, null, null, 1, 'a', [[
                'href',
                'http://www.syntaxsuccess.com/viewarticle/angular-2.0-and-http'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['Read more here'])
    ], function (check, view) {
        var comp = view.component;
        var currVal_0 = check(view, 11, 0, comp.isActive('usa'));
        check(view, 10, 0, currVal_0);
        var currVal_1 = check(view, 17, 0, comp.isActive('denmark'));
        check(view, 16, 0, currVal_1);
        var currVal_2 = check(view, 23, 0, comp.isActive('germany'));
        check(view, 22, 0, currVal_2);
        var currVal_3 = check(view, 29, 0, comp.isActive('argentina'));
        check(view, 28, 0, currVal_3);
        var currVal_4 = comp.result.friends;
        check(view, 45, 0, currVal_4);
        var currVal_5 = comp.friendsAsPromise.friends;
        check(view, 53, 0, currVal_5);
        var currVal_6 = comp.combined.friends;
        check(view, 64, 0, currVal_6);
        var currVal_7 = comp.error;
        check(view, 91, 0, currVal_7);
    }, function (check, view) {
        var comp = view.component;
        var currVal_0 = comp.capitol;
        check(view, 37, 0, currVal_0);
        var currVal_1 = comp.combined.customer.name;
        check(view, 72, 0, currVal_1);
        var currVal_2 = ((comp.customer == null) ? null : comp.customer.name);
        check(view, 82, 0, currVal_2);
        var currVal_3 = ((comp.contract == null) ? null : comp.contract.product);
        check(view, 85, 0, currVal_3);
        var currVal_4 = comp.postResponse.firstName;
        check(view, 105, 0, currVal_4);
        var currVal_5 = comp.postResponse.lastName;
        check(view, 108, 0, currVal_5);
    });
}
var RenderType_HttpSample_Host = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: [],
    data: { animation: [] }
});
function View_HttpSample_Host_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'ng-component', [], null, null, null, View_HttpSample_0, RenderType_HttpSample),
        import0.ɵdirectiveDef(1024, null, 0, import1.HttpSample, [import3.Http], null, null)
    ], null, null);
}
export var HttpSampleNgFactory = import0.ɵcreateComponentFactory('ng-component', import1.HttpSample, View_HttpSample_Host_0);
