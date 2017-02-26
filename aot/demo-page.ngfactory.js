import * as import0 from '@angular/core';
import * as import1 from '../demo-page';
import * as import2 from '@angular/router';
import * as import3 from '@angular/common';
var styles_DemoPage = [];
export var RenderType_DemoPage = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: styles_DemoPage,
    data: { animation: [] }
});
export function View_DemoPage_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 153, 'div', [[
                'class',
                'container'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n\n    ']),
        import0.ɵelementDef(0, null, null, 13, 'div', [[
                'class',
                'jumbotron'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n        ']),
        import0.ɵelementDef(0, null, null, 1, 'h1', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['Angular sample components']),
        import0.ɵtextDef(null, ['\n        ']),
        import0.ɵelementDef(0, null, null, 4, 'p', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n            More documentation about each specific component can be found\n            ']),
        import0.ɵelementDef(0, null, null, 1, 'a', [[
                'href',
                'http://www.syntaxsuccess.com/viewarticle/angular-2.0-examples'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['here']),
        import0.ɵtextDef(null, ['.\n        ']),
        import0.ɵtextDef(null, ['\n        ']),
        import0.ɵelementDef(0, null, null, 1, 'p', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['Current version: Angular 4.0-rc1']),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵtextDef(null, ['\n\n    ']),
        import0.ɵelementDef(0, null, null, 135, 'div', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n        ']),
        import0.ɵelementDef(0, null, null, 126, 'div', [[
                'class',
                'list-group col-md-3'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n            ']),
        import0.ɵelementDef(0, null, null, 3, 'a', [[
                'class',
                'list-group-item'
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
            ],
            [
                1,
                'active'
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
        import0.ɵtextDef(null, ['Virtualized Spreadsheet']),
        import0.ɵtextDef(null, ['\n            ']),
        import0.ɵelementDef(0, null, null, 3, 'a', [[
                'class',
                'list-group-item'
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
            ],
            [
                1,
                'active'
            ]
        ], [[
                null,
                'click'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                var pd_0 = (import0.ɵnodeValue(view, 27).onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
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
        import0.ɵtextDef(null, ['Lazy Loaded Tree View']),
        import0.ɵtextDef(null, ['\n            ']),
        import0.ɵelementDef(0, null, null, 3, 'a', [[
                'class',
                'list-group-item'
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
            ],
            [
                1,
                'active'
            ]
        ], [[
                null,
                'click'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                var pd_0 = (import0.ɵnodeValue(view, 32).onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
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
        import0.ɵtextDef(null, ['RxJs Streams']),
        import0.ɵtextDef(null, ['\n            ']),
        import0.ɵelementDef(0, null, null, 3, 'a', [[
                'class',
                'list-group-item'
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
            ],
            [
                1,
                'active'
            ]
        ], [[
                null,
                'click'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                var pd_0 = (import0.ɵnodeValue(view, 37).onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
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
        import0.ɵtextDef(null, ['RxJs Caching']),
        import0.ɵtextDef(null, ['\n            ']),
        import0.ɵelementDef(0, null, null, 3, 'a', [[
                'class',
                'list-group-item'
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
            ],
            [
                1,
                'active'
            ]
        ], [[
                null,
                'click'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                var pd_0 = (import0.ɵnodeValue(view, 42).onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
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
        import0.ɵtextDef(null, ['React Integration']),
        import0.ɵtextDef(null, ['\n            ']),
        import0.ɵelementDef(0, null, null, 3, 'a', [[
                'class',
                'list-group-item'
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
            ],
            [
                1,
                'active'
            ]
        ], [[
                null,
                'click'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                var pd_0 = (import0.ɵnodeValue(view, 47).onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
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
        import0.ɵtextDef(null, ['Graph']),
        import0.ɵtextDef(null, ['\n            ']),
        import0.ɵelementDef(0, null, null, 3, 'a', [[
                'class',
                'list-group-item'
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
            ],
            [
                1,
                'active'
            ]
        ], [[
                null,
                'click'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                var pd_0 = (import0.ɵnodeValue(view, 52).onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
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
        import0.ɵtextDef(null, ['Insertion Sort']),
        import0.ɵtextDef(null, ['\n            ']),
        import0.ɵelementDef(0, null, null, 3, 'a', [[
                'class',
                'list-group-item'
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
            ],
            [
                1,
                'active'
            ]
        ], [[
                null,
                'click'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                var pd_0 = (import0.ɵnodeValue(view, 57).onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
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
        import0.ɵtextDef(null, ['Redux']),
        import0.ɵtextDef(null, ['\n            ']),
        import0.ɵelementDef(0, null, null, 3, 'a', [[
                'class',
                'list-group-item'
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
            ],
            [
                1,
                'active'
            ]
        ], [[
                null,
                'click'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                var pd_0 = (import0.ɵnodeValue(view, 62).onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
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
        import0.ɵtextDef(null, ['Buffering in RxJs']),
        import0.ɵtextDef(null, ['\n            ']),
        import0.ɵelementDef(0, null, null, 3, 'a', [[
                'class',
                'list-group-item'
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
            ],
            [
                1,
                'active'
            ]
        ], [[
                null,
                'click'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                var pd_0 = (import0.ɵnodeValue(view, 67).onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
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
        import0.ɵtextDef(null, ['Dynamic Form']),
        import0.ɵtextDef(null, ['\n            ']),
        import0.ɵelementDef(0, null, null, 3, 'a', [[
                'class',
                'list-group-item'
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
            ],
            [
                1,
                'active'
            ]
        ], [[
                null,
                'click'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                var pd_0 = (import0.ɵnodeValue(view, 72).onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
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
        import0.ɵtextDef(null, ['Pub Sub']),
        import0.ɵtextDef(null, ['\n            ']),
        import0.ɵelementDef(0, null, null, 3, 'a', [[
                'class',
                'list-group-item'
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
            ],
            [
                1,
                'active'
            ]
        ], [[
                null,
                'click'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                var pd_0 = (import0.ɵnodeValue(view, 77).onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
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
        import0.ɵtextDef(null, ['Text Editor']),
        import0.ɵtextDef(null, ['\n            ']),
        import0.ɵelementDef(0, null, null, 3, 'a', [[
                'class',
                'list-group-item'
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
            ],
            [
                1,
                'active'
            ]
        ], [[
                null,
                'click'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                var pd_0 = (import0.ɵnodeValue(view, 82).onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
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
        import0.ɵtextDef(null, ['Form']),
        import0.ɵtextDef(null, ['\n            ']),
        import0.ɵelementDef(0, null, null, 3, 'a', [[
                'class',
                'list-group-item'
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
            ],
            [
                1,
                'active'
            ]
        ], [[
                null,
                'click'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                var pd_0 = (import0.ɵnodeValue(view, 87).onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
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
        import0.ɵtextDef(null, ['Change Detection']),
        import0.ɵtextDef(null, ['\n            ']),
        import0.ɵelementDef(0, null, null, 3, 'a', [[
                'class',
                'list-group-item'
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
            ],
            [
                1,
                'active'
            ]
        ], [[
                null,
                'click'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                var pd_0 = (import0.ɵnodeValue(view, 92).onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
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
        import0.ɵtextDef(null, ['Http']),
        import0.ɵtextDef(null, ['\n            ']),
        import0.ɵelementDef(0, null, null, 3, 'a', [[
                'class',
                'list-group-item'
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
            ],
            [
                1,
                'active'
            ]
        ], [[
                null,
                'click'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                var pd_0 = (import0.ɵnodeValue(view, 97).onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
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
        import0.ɵtextDef(null, ['Input Controls']),
        import0.ɵtextDef(null, ['\n            ']),
        import0.ɵelementDef(0, null, null, 3, 'a', [[
                'class',
                'list-group-item'
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
            ],
            [
                1,
                'active'
            ]
        ], [[
                null,
                'click'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                var pd_0 = (import0.ɵnodeValue(view, 102).onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
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
        import0.ɵtextDef(null, ['Recursive tree view']),
        import0.ɵtextDef(null, ['\n            ']),
        import0.ɵelementDef(0, null, null, 3, 'a', [[
                'class',
                'list-group-item'
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
            ],
            [
                1,
                'active'
            ]
        ], [[
                null,
                'click'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                var pd_0 = (import0.ɵnodeValue(view, 107).onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
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
        import0.ɵtextDef(null, ['Data Grid']),
        import0.ɵtextDef(null, ['\n            ']),
        import0.ɵelementDef(0, null, null, 3, 'a', [[
                'class',
                'list-group-item'
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
            ],
            [
                1,
                'active'
            ]
        ], [[
                null,
                'click'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                var pd_0 = (import0.ɵnodeValue(view, 112).onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
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
        import0.ɵtextDef(null, ['Address Book']),
        import0.ɵtextDef(null, ['\n            ']),
        import0.ɵelementDef(0, null, null, 3, 'a', [[
                'class',
                'list-group-item'
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
            ],
            [
                1,
                'active'
            ]
        ], [[
                null,
                'click'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                var pd_0 = (import0.ɵnodeValue(view, 117).onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
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
        import0.ɵtextDef(null, ['JQuery Integration']),
        import0.ɵtextDef(null, ['\n            ']),
        import0.ɵelementDef(0, null, null, 3, 'a', [[
                'class',
                'list-group-item'
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
            ],
            [
                1,
                'active'
            ]
        ], [[
                null,
                'click'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                var pd_0 = (import0.ɵnodeValue(view, 122).onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
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
        import0.ɵtextDef(null, ['Access Child Component']),
        import0.ɵtextDef(null, ['\n            ']),
        import0.ɵelementDef(0, null, null, 3, 'a', [[
                'class',
                'list-group-item'
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
            ],
            [
                1,
                'active'
            ]
        ], [[
                null,
                'click'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                var pd_0 = (import0.ɵnodeValue(view, 127).onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
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
        import0.ɵtextDef(null, ['Interactive contact list']),
        import0.ɵtextDef(null, ['\n            ']),
        import0.ɵelementDef(0, null, null, 3, 'a', [[
                'class',
                'list-group-item'
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
            ],
            [
                1,
                'active'
            ]
        ], [[
                null,
                'click'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                var pd_0 = (import0.ɵnodeValue(view, 132).onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
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
        import0.ɵtextDef(null, ['Bound Textbox']),
        import0.ɵtextDef(null, ['\n            ']),
        import0.ɵelementDef(0, null, null, 3, 'a', [[
                'class',
                'list-group-item'
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
            ],
            [
                1,
                'active'
            ]
        ], [[
                null,
                'click'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                var pd_0 = (import0.ɵnodeValue(view, 137).onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
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
        import0.ɵtextDef(null, ['Input/Output']),
        import0.ɵtextDef(null, ['\n            ']),
        import0.ɵelementDef(0, null, null, 3, 'a', [[
                'class',
                'list-group-item'
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
            ],
            [
                1,
                'active'
            ]
        ], [[
                null,
                'click'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                var pd_0 = (import0.ɵnodeValue(view, 142).onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
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
        import0.ɵtextDef(null, ['Non Bindable']),
        import0.ɵtextDef(null, ['\n       ']),
        import0.ɵtextDef(null, ['\n\n        ']),
        import0.ɵelementDef(0, null, null, 4, 'div', [[
                'class',
                'col-md-9'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n            ']),
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
        import0.ɵtextDef(null, ['\n        ']),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵtextDef(null, ['\n\n'])
    ], function (check, view) {
        var comp = view.component;
        var currVal_0 = check(view, 23, 0, '/demo/spreadsheet');
        check(view, 22, 0, currVal_0);
        var currVal_1 = check(view, 28, 0, '/demo/countries');
        check(view, 27, 0, currVal_1);
        var currVal_2 = check(view, 33, 0, '/demo/rxjs');
        check(view, 32, 0, currVal_2);
        var currVal_3 = check(view, 38, 0, '/demo/friends');
        check(view, 37, 0, currVal_3);
        var currVal_4 = check(view, 43, 0, '/demo/react');
        check(view, 42, 0, currVal_4);
        var currVal_5 = check(view, 48, 0, '/demo/graph');
        check(view, 47, 0, currVal_5);
        var currVal_6 = check(view, 53, 0, '/demo/algorithms');
        check(view, 52, 0, currVal_6);
        var currVal_7 = check(view, 58, 0, '/demo/redux');
        check(view, 57, 0, currVal_7);
        var currVal_8 = check(view, 63, 0, '/demo/buffering');
        check(view, 62, 0, currVal_8);
        var currVal_9 = check(view, 68, 0, '/demo/survey');
        check(view, 67, 0, currVal_9);
        var currVal_10 = check(view, 73, 0, '/demo/pub-sub');
        check(view, 72, 0, currVal_10);
        var currVal_11 = check(view, 78, 0, '/demo/text-editor');
        check(view, 77, 0, currVal_11);
        var currVal_12 = check(view, 83, 0, '/demo/form');
        check(view, 82, 0, currVal_12);
        var currVal_13 = check(view, 88, 0, '/demo/change');
        check(view, 87, 0, currVal_13);
        var currVal_14 = check(view, 93, 0, '/demo/http');
        check(view, 92, 0, currVal_14);
        var currVal_15 = check(view, 98, 0, '/demo/input');
        check(view, 97, 0, currVal_15);
        var currVal_16 = check(view, 103, 0, '/demo/treeview');
        check(view, 102, 0, currVal_16);
        var currVal_17 = check(view, 108, 0, '/demo/grid');
        check(view, 107, 0, currVal_17);
        var currVal_18 = check(view, 113, 0, '/demo/address');
        check(view, 112, 0, currVal_18);
        var currVal_19 = check(view, 118, 0, '/demo/jquery');
        check(view, 117, 0, currVal_19);
        var currVal_20 = check(view, 123, 0, '/demo/parent-child');
        check(view, 122, 0, currVal_20);
        var currVal_21 = check(view, 128, 0, '/demo/contact');
        check(view, 127, 0, currVal_21);
        var currVal_22 = check(view, 133, 0, '/demo/textbox');
        check(view, 132, 0, currVal_22);
        var currVal_23 = check(view, 138, 0, '/demo/iodemo');
        check(view, 137, 0, currVal_23);
        var currVal_24 = check(view, 143, 0, '/demo/non-bindable');
        check(view, 142, 0, currVal_24);
    }, function (check, view) {
        var comp = view.component;
        var currVal_0 = import0.ɵnodeValue(view, 22).target;
        var currVal_1 = import0.ɵnodeValue(view, 22).href;
        var currVal_2 = comp.getLinkStyle('/demo/spreadsheet');
        check(view, 21, 0, currVal_0, currVal_1, currVal_2);
        var currVal_3 = import0.ɵnodeValue(view, 27).target;
        var currVal_4 = import0.ɵnodeValue(view, 27).href;
        var currVal_5 = comp.getLinkStyle('/demo/countries');
        check(view, 26, 0, currVal_3, currVal_4, currVal_5);
        var currVal_6 = import0.ɵnodeValue(view, 32).target;
        var currVal_7 = import0.ɵnodeValue(view, 32).href;
        var currVal_8 = comp.getLinkStyle('/demo/rxjs');
        check(view, 31, 0, currVal_6, currVal_7, currVal_8);
        var currVal_9 = import0.ɵnodeValue(view, 37).target;
        var currVal_10 = import0.ɵnodeValue(view, 37).href;
        var currVal_11 = comp.getLinkStyle('/demo/friends');
        check(view, 36, 0, currVal_9, currVal_10, currVal_11);
        var currVal_12 = import0.ɵnodeValue(view, 42).target;
        var currVal_13 = import0.ɵnodeValue(view, 42).href;
        var currVal_14 = comp.getLinkStyle('/demo/react');
        check(view, 41, 0, currVal_12, currVal_13, currVal_14);
        var currVal_15 = import0.ɵnodeValue(view, 47).target;
        var currVal_16 = import0.ɵnodeValue(view, 47).href;
        var currVal_17 = comp.getLinkStyle('/demo/graph');
        check(view, 46, 0, currVal_15, currVal_16, currVal_17);
        var currVal_18 = import0.ɵnodeValue(view, 52).target;
        var currVal_19 = import0.ɵnodeValue(view, 52).href;
        var currVal_20 = comp.getLinkStyle('/demo/algorithms');
        check(view, 51, 0, currVal_18, currVal_19, currVal_20);
        var currVal_21 = import0.ɵnodeValue(view, 57).target;
        var currVal_22 = import0.ɵnodeValue(view, 57).href;
        var currVal_23 = comp.getLinkStyle('/demo/redux');
        check(view, 56, 0, currVal_21, currVal_22, currVal_23);
        var currVal_24 = import0.ɵnodeValue(view, 62).target;
        var currVal_25 = import0.ɵnodeValue(view, 62).href;
        var currVal_26 = comp.getLinkStyle('/demo/buffering');
        check(view, 61, 0, currVal_24, currVal_25, currVal_26);
        var currVal_27 = import0.ɵnodeValue(view, 67).target;
        var currVal_28 = import0.ɵnodeValue(view, 67).href;
        var currVal_29 = comp.getLinkStyle('/demo/survey');
        check(view, 66, 0, currVal_27, currVal_28, currVal_29);
        var currVal_30 = import0.ɵnodeValue(view, 72).target;
        var currVal_31 = import0.ɵnodeValue(view, 72).href;
        var currVal_32 = comp.getLinkStyle('/demo/pub-sub');
        check(view, 71, 0, currVal_30, currVal_31, currVal_32);
        var currVal_33 = import0.ɵnodeValue(view, 77).target;
        var currVal_34 = import0.ɵnodeValue(view, 77).href;
        var currVal_35 = comp.getLinkStyle('/demo/text-editor');
        check(view, 76, 0, currVal_33, currVal_34, currVal_35);
        var currVal_36 = import0.ɵnodeValue(view, 82).target;
        var currVal_37 = import0.ɵnodeValue(view, 82).href;
        var currVal_38 = comp.getLinkStyle('/demo/form');
        check(view, 81, 0, currVal_36, currVal_37, currVal_38);
        var currVal_39 = import0.ɵnodeValue(view, 87).target;
        var currVal_40 = import0.ɵnodeValue(view, 87).href;
        var currVal_41 = comp.getLinkStyle('/demo/change');
        check(view, 86, 0, currVal_39, currVal_40, currVal_41);
        var currVal_42 = import0.ɵnodeValue(view, 92).target;
        var currVal_43 = import0.ɵnodeValue(view, 92).href;
        var currVal_44 = comp.getLinkStyle('/demo/http');
        check(view, 91, 0, currVal_42, currVal_43, currVal_44);
        var currVal_45 = import0.ɵnodeValue(view, 97).target;
        var currVal_46 = import0.ɵnodeValue(view, 97).href;
        var currVal_47 = comp.getLinkStyle('/demo/input');
        check(view, 96, 0, currVal_45, currVal_46, currVal_47);
        var currVal_48 = import0.ɵnodeValue(view, 102).target;
        var currVal_49 = import0.ɵnodeValue(view, 102).href;
        var currVal_50 = comp.getLinkStyle('/demo/treeview');
        check(view, 101, 0, currVal_48, currVal_49, currVal_50);
        var currVal_51 = import0.ɵnodeValue(view, 107).target;
        var currVal_52 = import0.ɵnodeValue(view, 107).href;
        var currVal_53 = comp.getLinkStyle('/demo/grid');
        check(view, 106, 0, currVal_51, currVal_52, currVal_53);
        var currVal_54 = import0.ɵnodeValue(view, 112).target;
        var currVal_55 = import0.ɵnodeValue(view, 112).href;
        var currVal_56 = comp.getLinkStyle('/demo/address');
        check(view, 111, 0, currVal_54, currVal_55, currVal_56);
        var currVal_57 = import0.ɵnodeValue(view, 117).target;
        var currVal_58 = import0.ɵnodeValue(view, 117).href;
        var currVal_59 = comp.getLinkStyle('/demo/jquery');
        check(view, 116, 0, currVal_57, currVal_58, currVal_59);
        var currVal_60 = import0.ɵnodeValue(view, 122).target;
        var currVal_61 = import0.ɵnodeValue(view, 122).href;
        var currVal_62 = comp.getLinkStyle('/demo/parent-child');
        check(view, 121, 0, currVal_60, currVal_61, currVal_62);
        var currVal_63 = import0.ɵnodeValue(view, 127).target;
        var currVal_64 = import0.ɵnodeValue(view, 127).href;
        var currVal_65 = comp.getLinkStyle('/demo/contact');
        check(view, 126, 0, currVal_63, currVal_64, currVal_65);
        var currVal_66 = import0.ɵnodeValue(view, 132).target;
        var currVal_67 = import0.ɵnodeValue(view, 132).href;
        var currVal_68 = comp.getLinkStyle('/demo/textbox');
        check(view, 131, 0, currVal_66, currVal_67, currVal_68);
        var currVal_69 = import0.ɵnodeValue(view, 137).target;
        var currVal_70 = import0.ɵnodeValue(view, 137).href;
        var currVal_71 = comp.getLinkStyle('/demo/iodemo');
        check(view, 136, 0, currVal_69, currVal_70, currVal_71);
        var currVal_72 = import0.ɵnodeValue(view, 142).target;
        var currVal_73 = import0.ɵnodeValue(view, 142).href;
        var currVal_74 = comp.getLinkStyle('/demo/non-bindable');
        check(view, 141, 0, currVal_72, currVal_73, currVal_74);
    });
}
var RenderType_DemoPage_Host = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: [],
    data: { animation: [] }
});
function View_DemoPage_Host_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'demo-page', [], null, null, null, View_DemoPage_0, RenderType_DemoPage),
        import0.ɵdirectiveDef(1024, null, 0, import1.DemoPage, [import3.Location], null, null)
    ], null, null);
}
export var DemoPageNgFactory = import0.ɵcreateComponentFactory('demo-page', import1.DemoPage, View_DemoPage_Host_0);
