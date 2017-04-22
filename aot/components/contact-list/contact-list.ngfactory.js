import * as import0 from '@angular/core';
import * as import1 from '@angular/common';
import * as import2 from '../../../components/contact-list/contact-list';
var styles_ContactList = [];
export var RenderType_ContactList = import0.ɵcrt({
    encapsulation: 2,
    styles: styles_ContactList,
    data: {}
});
function View_ContactList_1(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 8, 'tr', [[
                'style',
                'margin-bottom: 10px;'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'td', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ])),
        (l()(), import0.ɵted(null, [' '])),
        (l()(), import0.ɵeld(0, null, null, 2, 'td', [], null, null, null, null, null)),
        (l()(), import0.ɵeld(0, null, null, 1, 'button', [[
                'class',
                'btn btn-primary btn-xs'
            ]
        ], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.removeContact(v.context.$implicit) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import0.ɵted(null, ['Delete'])),
        (l()(), import0.ɵted(null, ['\n            ']))
    ], null, function (ck, v) {
        var currVal_0 = v.context.$implicit.descr;
        ck(v, 3, 0, currVal_0);
    });
}
export function View_ContactList_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 32, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'h1', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Contact List'])),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵeld(0, null, null, 16, 'table', [[
                'class',
                'table'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵeld(0, null, null, 7, 'thead', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵeld(0, null, null, 4, 'tr', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'td', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Name and phone number'])),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵeld(0, null, null, 4, 'tbody', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵand(8388608, null, null, 1, null, View_ContactList_1)),
        import0.ɵdid(401408, null, 0, import1.NgForOf, [
            import0.ViewContainerRef,
            import0.TemplateRef,
            import0.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵted(null, ['\n\n    '])),
        (l()(), import0.ɵeld(0, null, null, 8, 'div', [[
                'class',
                'addContactControls'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵeld(0, [[
                'name',
                1
            ]
        ], null, 0, 'input', [[
                'placeholder',
                'name'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵeld(0, [[
                'phone',
                1
            ]
        ], null, 0, 'input', [[
                'placeholder',
                'phone'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'button', [[
                'class',
                'btn btn-primary btn-xs'
            ]
        ], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.addContact(import0.ɵnov(v, 25), import0.ɵnov(v, 27)) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import0.ɵted(null, ['Add Contact'])),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵted(null, ['\n']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_0 = co.contacts;
        ck(v, 19, 0, currVal_0);
    }, null);
}
function View_ContactList_Host_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'contact-list', [], null, null, null, View_ContactList_0, RenderType_ContactList)),
        import0.ɵdid(24576, null, 0, import2.ContactList, [], null, null)
    ], null, null);
}
export var ContactListNgFactory = import0.ɵccf('contact-list', import2.ContactList, View_ContactList_Host_0, {}, {}, []);
