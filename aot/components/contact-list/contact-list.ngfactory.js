import * as import0 from '@angular/core';
import * as import1 from '@angular/common';
import * as import2 from '../../../components/contact-list/contact-list';
var styles_ContactList = [];
export var RenderType_ContactList = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: styles_ContactList,
    data: { animation: [] }
});
function View_ContactList_1() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 8, 'tr', [[
                'style',
                'margin-bottom: 10px;'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n                ']),
        import0.ɵelementDef(0, null, null, 1, 'td', [], null, null, null, null, null),
        import0.ɵtextDef(null, [
            '',
            ''
        ]),
        import0.ɵtextDef(null, [' ']),
        import0.ɵelementDef(0, null, null, 2, 'td', [], null, null, null, null, null),
        import0.ɵelementDef(0, null, null, 1, 'button', [[
                'class',
                'btn btn-primary btn-xs'
            ]
        ], null, [[
                null,
                'click'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                var pd_0 = (comp.removeContact(view.context.$implicit) !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            return allowDefault;
        }, null, null),
        import0.ɵtextDef(null, ['Delete']),
        import0.ɵtextDef(null, ['\n            '])
    ], null, function (check, view) {
        var comp = view.component;
        var currVal_0 = view.context.$implicit.descr;
        check(view, 3, 0, currVal_0);
    });
}
export function View_ContactList_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 32, 'div', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵelementDef(0, null, null, 1, 'h1', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['Contact List']),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵelementDef(0, null, null, 16, 'table', [[
                'class',
                'table'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n        ']),
        import0.ɵelementDef(0, null, null, 7, 'thead', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n            ']),
        import0.ɵelementDef(0, null, null, 4, 'tr', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n                ']),
        import0.ɵelementDef(0, null, null, 1, 'td', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['Name and phone number']),
        import0.ɵtextDef(null, ['\n            ']),
        import0.ɵtextDef(null, ['\n        ']),
        import0.ɵtextDef(null, ['\n        ']),
        import0.ɵelementDef(0, null, null, 4, 'tbody', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n            ']),
        import0.ɵanchorDef(256, null, null, 1, null, View_ContactList_1),
        import0.ɵdirectiveDef(12, null, 0, import1.NgForOf, [
            import0.ViewContainerRef,
            import0.TemplateRef,
            import0.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        import0.ɵtextDef(null, ['\n        ']),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵtextDef(null, ['\n\n    ']),
        import0.ɵelementDef(0, null, null, 8, 'div', [[
                'class',
                'addContactControls'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n        ']),
        import0.ɵelementDef(0, [[
                'name',
                1
            ]
        ], null, 0, 'input', [[
                'placeholder',
                'name'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n        ']),
        import0.ɵelementDef(0, [[
                'phone',
                1
            ]
        ], null, 0, 'input', [[
                'placeholder',
                'phone'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n        ']),
        import0.ɵelementDef(0, null, null, 1, 'button', [[
                'class',
                'btn btn-primary btn-xs'
            ]
        ], null, [[
                null,
                'click'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                var pd_0 = (comp.addContact(import0.ɵnodeValue(view, 25), import0.ɵnodeValue(view, 27)) !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            return allowDefault;
        }, null, null),
        import0.ɵtextDef(null, ['Add Contact']),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵtextDef(null, ['\n'])
    ], function (check, view) {
        var comp = view.component;
        var currVal_0 = comp.contacts;
        check(view, 19, 0, currVal_0);
    }, null);
}
var RenderType_ContactList_Host = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: [],
    data: { animation: [] }
});
function View_ContactList_Host_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'contact-list', [], null, null, null, View_ContactList_0, RenderType_ContactList),
        import0.ɵdirectiveDef(1024, null, 0, import2.ContactList, [], null, null)
    ], null, null);
}
export var ContactListNgFactory = import0.ɵcreateComponentFactory('contact-list', import2.ContactList, View_ContactList_Host_0);
