import * as import0 from '@angular/core';
import * as import1 from '@angular/common';
import * as import2 from '../../../components/dependency-injection/address-book';
import * as import3 from '../../../components/dependency-injection/address-book-service';
import * as import4 from '@angular/http';
import * as import5 from '../../../components/dependency-injection/address-book-title-service';
var styles_AddressBook = [];
export var RenderType_AddressBook = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: styles_AddressBook,
    data: { animation: [] }
});
function View_AddressBook_1() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 7, 'tr', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n            ']),
        import0.ɵelementDef(0, null, null, 1, 'td', [], null, null, null, null, null),
        import0.ɵtextDef(null, [
            '',
            ''
        ]),
        import0.ɵtextDef(null, ['\n            ']),
        import0.ɵelementDef(0, null, null, 1, 'td', [], null, null, null, null, null),
        import0.ɵtextDef(null, [
            '',
            ''
        ]),
        import0.ɵtextDef(null, ['\n        '])
    ], null, function (check, view) {
        var comp = view.component;
        var currVal_0 = view.context.$implicit.name;
        check(view, 3, 0, currVal_0);
        var currVal_1 = view.context.$implicit.address;
        check(view, 6, 0, currVal_1);
    });
}
export function View_AddressBook_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 14, 'div', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵelementDef(0, null, null, 1, 'h1', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['Dependency Injection']),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵelementDef(0, null, null, 1, 'h2', [], null, null, null, null, null),
        import0.ɵtextDef(null, [
            '',
            ''
        ]),
        import0.ɵtextDef(null, ['\n\n    ']),
        import0.ɵelementDef(0, null, null, 5, 'table', [[
                'class',
                'table'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n        ']),
        import0.ɵelementDef(0, null, null, 3, 'tbody', [], null, null, null, null, null),
        import0.ɵanchorDef(256, null, null, 1, null, View_AddressBook_1),
        import0.ɵdirectiveDef(12, null, 0, import1.NgForOf, [
            import0.ViewContainerRef,
            import0.TemplateRef,
            import0.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵtextDef(null, ['\n']),
        import0.ɵtextDef(null, ['\n\n']),
        import0.ɵelementDef(0, null, null, 2, 'h4', [], null, null, null, null, null),
        import0.ɵelementDef(0, null, null, 1, 'a', [[
                'href',
                'http://www.syntaxsuccess.com/viewarticle/dependency-injection-in-angular-2.0'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['Read more here'])
    ], function (check, view) {
        var comp = view.component;
        var currVal_0 = comp.result.people;
        check(view, 12, 0, currVal_0);
    }, function (check, view) {
        var comp = view.component;
        var currVal_0 = comp.title;
        check(view, 6, 0, currVal_0);
    });
}
var RenderType_AddressBook_Host = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: [],
    data: { animation: [] }
});
function View_AddressBook_Host_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 2, 'address-book', [], null, null, null, View_AddressBook_0, RenderType_AddressBook),
        import0.ɵproviderDef(0, null, 1, import3.AddressBookService, import3.AddressBookService, [import4.Http]),
        import0.ɵdirectiveDef(1024, null, 0, import2.AddressBook, [
            import3.AddressBookService,
            import5.AddressBookTitleService
        ], null, null)
    ], null, null);
}
export var AddressBookNgFactory = import0.ɵcreateComponentFactory('address-book', import2.AddressBook, View_AddressBook_Host_0);
