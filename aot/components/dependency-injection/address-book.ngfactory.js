import * as import0 from '@angular/core';
import * as import1 from '@angular/common';
import * as import2 from '../../../components/dependency-injection/address-book';
import * as import3 from '../../../components/dependency-injection/address-book-service';
import * as import4 from '@angular/http';
import * as import5 from '../../../components/dependency-injection/address-book-title-service';
var styles_AddressBook = [];
export var RenderType_AddressBook = import0.ɵcrt({
    encapsulation: 2,
    styles: styles_AddressBook,
    data: {}
});
function View_AddressBook_1(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 7, 'tr', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'td', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ])),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'td', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ])),
        (l()(), import0.ɵted(null, ['\n        ']))
    ], null, function (ck, v) {
        var currVal_0 = v.context.$implicit.name;
        ck(v, 3, 0, currVal_0);
        var currVal_1 = v.context.$implicit.address;
        ck(v, 6, 0, currVal_1);
    });
}
export function View_AddressBook_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 14, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'h1', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Dependency Injection'])),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'h2', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ])),
        (l()(), import0.ɵted(null, ['\n\n    '])),
        (l()(), import0.ɵeld(0, null, null, 5, 'table', [[
                'class',
                'table'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵeld(0, null, null, 3, 'tbody', [], null, null, null, null, null)),
        (l()(), import0.ɵand(8388608, null, null, 1, null, View_AddressBook_1)),
        import0.ɵdid(401408, null, 0, import1.NgForOf, [
            import0.ViewContainerRef,
            import0.TemplateRef,
            import0.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵted(null, ['\n'])),
        (l()(), import0.ɵted(null, ['\n\n'])),
        (l()(), import0.ɵeld(0, null, null, 2, 'h4', [], null, null, null, null, null)),
        (l()(), import0.ɵeld(0, null, null, 1, 'a', [[
                'href',
                'http://www.syntaxsuccess.com/viewarticle/dependency-injection-in-angular-2.0'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Read more here']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_1 = co.result.people;
        ck(v, 12, 0, currVal_1);
    }, function (ck, v) {
        var co = v.component;
        var currVal_0 = co.title;
        ck(v, 6, 0, currVal_0);
    });
}
function View_AddressBook_Host_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 2, 'address-book', [], null, null, null, View_AddressBook_0, RenderType_AddressBook)),
        import0.ɵprd(256, null, import3.AddressBookService, import3.AddressBookService, [import4.Http]),
        import0.ɵdid(24576, null, 0, import2.AddressBook, [
            import3.AddressBookService,
            import5.AddressBookTitleService
        ], null, null)
    ], null, null);
}
export var AddressBookNgFactory = import0.ɵccf('address-book', import2.AddressBook, View_AddressBook_Host_0, {}, {}, []);
