import * as import0 from '@angular/core';
import * as import1 from '../../../components/http/http';
import * as import2 from '@angular/common';
import * as import3 from '@angular/http';
var styles_HttpSample = [];
export var RenderType_HttpSample = import0.ɵcrt({
    encapsulation: 2,
    styles: styles_HttpSample,
    data: {}
});
function View_HttpSample_1(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '\n    ',
            '\n'
        ]))
    ], null, function (ck, v) {
        var currVal_0 = v.context.$implicit;
        ck(v, 1, 0, currVal_0);
    });
}
function View_HttpSample_2(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '\n    ',
            '\n'
        ]))
    ], null, function (ck, v) {
        var currVal_0 = v.context.$implicit;
        ck(v, 1, 0, currVal_0);
    });
}
function View_HttpSample_3(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '\n    ',
            '\n'
        ]))
    ], null, function (ck, v) {
        var currVal_0 = v.context.$implicit;
        ck(v, 1, 0, currVal_0);
    });
}
function View_HttpSample_4(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 4, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [
            [
                'class',
                'alert alert-danger'
            ],
            [
                'role',
                'alert'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n        There was an error loading the list of friends (Intentional error testing)\n    '])),
        (l()(), import0.ɵted(null, ['\n']))
    ], null, null);
}
export function View_HttpSample_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'h1', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Making Http Requests'])),
        (l()(), import0.ɵted(null, ['\n\n'])),
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [
            [
                'class',
                'alert alert-success'
            ],
            [
                'role',
                'alert'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n    Click a country to display that country\'s capitol. Observables in flight will be cancelled prior to loading new data.\n'])),
        (l()(), import0.ɵted(null, ['\n\n'])),
        (l()(), import0.ɵeld(0, null, null, 26, 'table', [[
                'class',
                'table'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵeld(0, null, null, 24, 'tbody', [], null, null, null, null, null)),
        (l()(), import0.ɵeld(0, null, null, 4, 'tr', [], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                co.country.next('usa');
                var pd_0 = ((co.activeCountry = 'usa') !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        import0.ɵdid(278528, null, 0, import2.NgClass, [
            import0.IterableDiffers,
            import0.KeyValueDiffers,
            import0.ElementRef,
            import0.Renderer
        ], { ngClass: [
                0,
                'ngClass'
            ]
        }, null),
        import0.ɵpod(['active']),
        (l()(), import0.ɵeld(0, null, null, 1, 'td', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['USA'])),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵeld(0, null, null, 4, 'tr', [], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                co.country.next('denmark');
                var pd_0 = ((co.activeCountry = 'denmark') !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        import0.ɵdid(278528, null, 0, import2.NgClass, [
            import0.IterableDiffers,
            import0.KeyValueDiffers,
            import0.ElementRef,
            import0.Renderer
        ], { ngClass: [
                0,
                'ngClass'
            ]
        }, null),
        import0.ɵpod(['active']),
        (l()(), import0.ɵeld(0, null, null, 1, 'td', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Denmark'])),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵeld(0, null, null, 4, 'tr', [], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                co.country.next('germany');
                var pd_0 = ((co.activeCountry = 'germany') !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        import0.ɵdid(278528, null, 0, import2.NgClass, [
            import0.IterableDiffers,
            import0.KeyValueDiffers,
            import0.ElementRef,
            import0.Renderer
        ], { ngClass: [
                0,
                'ngClass'
            ]
        }, null),
        import0.ɵpod(['active']),
        (l()(), import0.ɵeld(0, null, null, 1, 'td', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Germany'])),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵeld(0, null, null, 4, 'tr', [], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                co.country.next('argentina');
                var pd_0 = ((co.activeCountry = 'argentina') !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        import0.ɵdid(278528, null, 0, import2.NgClass, [
            import0.IterableDiffers,
            import0.KeyValueDiffers,
            import0.ElementRef,
            import0.Renderer
        ], { ngClass: [
                0,
                'ngClass'
            ]
        }, null),
        import0.ɵpod(['active']),
        (l()(), import0.ɵeld(0, null, null, 1, 'td', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Argentina'])),
        (l()(), import0.ɵted(null, ['\n'])),
        (l()(), import0.ɵted(null, ['\n\n'])),
        (l()(), import0.ɵeld(0, null, null, 3, 'div', [[
                'style',
                'margin-left: 10px;'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['The capitol is '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'strong', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ])),
        (l()(), import0.ɵted(null, ['\n\n'])),
        (l()(), import0.ɵeld(0, null, null, 0, 'br', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n\n'])),
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [
            [
                'class',
                'alert alert-success'
            ],
            [
                'role',
                'alert'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n    List of friends using Observables\n'])),
        (l()(), import0.ɵted(null, ['\n'])),
        (l()(), import0.ɵand(16777216, null, null, 1, null, View_HttpSample_1)),
        import0.ɵdid(802816, null, 0, import2.NgForOf, [
            import0.ViewContainerRef,
            import0.TemplateRef,
            import0.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n'])),
        (l()(), import0.ɵeld(0, null, null, 0, 'br', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n\n'])),
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [
            [
                'class',
                'alert alert-success'
            ],
            [
                'role',
                'alert'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n    List of friends loaded using Promises\n'])),
        (l()(), import0.ɵted(null, ['\n'])),
        (l()(), import0.ɵand(16777216, null, null, 1, null, View_HttpSample_2)),
        import0.ɵdid(802816, null, 0, import2.NgForOf, [
            import0.ViewContainerRef,
            import0.TemplateRef,
            import0.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n'])),
        (l()(), import0.ɵeld(0, null, null, 0, 'br', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n\n'])),
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [
            [
                'class',
                'alert alert-success'
            ],
            [
                'role',
                'alert'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n    List of friends and customer loaded successfully in parallel\n'])),
        (l()(), import0.ɵted(null, ['\n'])),
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Friends:'])),
        (l()(), import0.ɵted(null, ['\n'])),
        (l()(), import0.ɵand(16777216, null, null, 1, null, View_HttpSample_3)),
        import0.ɵdid(802816, null, 0, import2.NgForOf, [
            import0.ViewContainerRef,
            import0.TemplateRef,
            import0.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n'])),
        (l()(), import0.ɵeld(0, null, null, 0, 'br', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n'])),
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Customer:'])),
        (l()(), import0.ɵted(null, ['\n'])),
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ])),
        (l()(), import0.ɵted(null, ['\n\n'])),
        (l()(), import0.ɵeld(0, null, null, 0, 'br', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n'])),
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [
            [
                'class',
                'alert alert-success'
            ],
            [
                'role',
                'alert'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n    Loaded a contract after first loading a customer\n'])),
        (l()(), import0.ɵted(null, ['\n'])),
        (l()(), import0.ɵeld(0, null, null, 7, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            'Customer: ',
            ''
        ])),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            'Product: ',
            ''
        ])),
        (l()(), import0.ɵted(null, ['\n'])),
        (l()(), import0.ɵted(null, ['\n\n'])),
        (l()(), import0.ɵeld(0, null, null, 0, 'br', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n'])),
        (l()(), import0.ɵand(16777216, null, null, 1, null, View_HttpSample_4)),
        import0.ɵdid(16384, null, 0, import2.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n\n'])),
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [
            [
                'class',
                'alert alert-success'
            ],
            [
                'role',
                'alert'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n    Making a post request\n'])),
        (l()(), import0.ɵted(null, ['\n'])),
        (l()(), import0.ɵeld(0, null, null, 13, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'button', [], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.postData() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import0.ɵted(null, ['Post Data'])),
        (l()(), import0.ɵted(null, ['\n\n    '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'p', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Posted the following values:'])),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ])),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ])),
        (l()(), import0.ɵted(null, ['\n'])),
        (l()(), import0.ɵted(null, ['\n\n'])),
        (l()(), import0.ɵeld(0, null, null, 2, 'h4', [], null, null, null, null, null)),
        (l()(), import0.ɵeld(0, null, null, 1, 'a', [[
                'href',
                'http://www.syntaxsuccess.com/viewarticle/angular-2.0-and-http'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Read more here']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_0 = ck(v, 11, 0, co.isActive('usa'));
        ck(v, 10, 0, currVal_0);
        var currVal_1 = ck(v, 17, 0, co.isActive('denmark'));
        ck(v, 16, 0, currVal_1);
        var currVal_2 = ck(v, 23, 0, co.isActive('germany'));
        ck(v, 22, 0, currVal_2);
        var currVal_3 = ck(v, 29, 0, co.isActive('argentina'));
        ck(v, 28, 0, currVal_3);
        var currVal_5 = co.result.friends;
        ck(v, 45, 0, currVal_5);
        var currVal_6 = co.friendsAsPromise.friends;
        ck(v, 53, 0, currVal_6);
        var currVal_7 = co.combined.friends;
        ck(v, 64, 0, currVal_7);
        var currVal_11 = co.error;
        ck(v, 91, 0, currVal_11);
    }, function (ck, v) {
        var co = v.component;
        var currVal_4 = co.capitol;
        ck(v, 37, 0, currVal_4);
        var currVal_8 = co.combined.customer.name;
        ck(v, 72, 0, currVal_8);
        var currVal_9 = ((co.customer == null) ? null : co.customer.name);
        ck(v, 82, 0, currVal_9);
        var currVal_10 = ((co.contract == null) ? null : co.contract.product);
        ck(v, 85, 0, currVal_10);
        var currVal_12 = co.postResponse.firstName;
        ck(v, 105, 0, currVal_12);
        var currVal_13 = co.postResponse.lastName;
        ck(v, 108, 0, currVal_13);
    });
}
function View_HttpSample_Host_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'ng-component', [], null, null, null, View_HttpSample_0, RenderType_HttpSample)),
        import0.ɵdid(49152, null, 0, import1.HttpSample, [import3.Http], null, null)
    ], null, null);
}
export var HttpSampleNgFactory = import0.ɵccf('ng-component', import1.HttpSample, View_HttpSample_Host_0, {}, {}, []);
