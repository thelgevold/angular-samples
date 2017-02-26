import * as import0 from '@angular/core';
import * as import1 from '@angular/common';
import * as import2 from '../../../components/text-editor/text-editor';
var styles_TextEditor = [];
export var RenderType_TextEditor = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: styles_TextEditor,
    data: { animation: [] }
});
function View_TextEditor_1() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 3, 'span', [], null, null, null, null, null),
        import0.ɵdirectiveDef(4, null, 0, import1.NgClass, [
            import0.IterableDiffers,
            import0.KeyValueDiffers,
            import0.ElementRef,
            import0.Renderer
        ], { ngClass: [
                0,
                'ngClass'
            ]
        }, null),
        import0.ɵpureObjectDef([
            'currentChar',
            'selectedChar'
        ]),
        import0.ɵtextDef(null, [
            '',
            ''
        ])
    ], function (check, view) {
        var comp = view.component;
        var currVal_0 = check(view, 2, 0, view.context.$implicit.isCurrent, view.context.$implicit.isSelected);
        check(view, 1, 0, currVal_0);
    }, function (check, view) {
        var comp = view.component;
        var currVal_0 = view.context.$implicit.value;
        check(view, 3, 0, currVal_0);
    });
}
export function View_TextEditor_0() {
    return import0.ɵviewDef(0, [
        import0.ɵtextDef(null, ['\n']),
        import0.ɵelementDef(0, null, null, 1, 'h1', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['Text editor based on Observables']),
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
        import0.ɵtextDef(null, ['\n    Supports typing of letters and numbers. Basic text selection and cursor placement is also supported.\n']),
        import0.ɵtextDef(null, ['\n\n']),
        import0.ɵelementDef(0, null, null, 5, 'div', [[
                'class',
                'editor'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n']),
        import0.ɵelementDef(0, null, null, 2, 'div', [
            [
                'class',
                'page noselect'
            ],
            [
                'id',
                'page'
            ]
        ], null, null, null, null, null),
        import0.ɵanchorDef(256, null, null, 1, null, View_TextEditor_1),
        import0.ɵdirectiveDef(12, null, 0, import1.NgForOf, [
            import0.ViewContainerRef,
            import0.TemplateRef,
            import0.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        import0.ɵtextDef(null, ['\n']),
        import0.ɵtextDef(null, ['\n\n']),
        import0.ɵelementDef(0, null, null, 2, 'h4', [], null, null, null, null, null),
        import0.ɵelementDef(0, null, null, 1, 'a', [[
                'href',
                'http://www.syntaxsuccess.com/viewarticle/observables-in-angular-2.0'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['Read more here'])
    ], function (check, view) {
        var comp = view.component;
        var currVal_0 = comp.currentDocument.characters;
        check(view, 11, 0, currVal_0);
    }, null);
}
var RenderType_TextEditor_Host = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: [],
    data: { animation: [] }
});
function View_TextEditor_Host_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'editor', [], null, null, null, View_TextEditor_0, RenderType_TextEditor),
        import0.ɵdirectiveDef(1025, null, 0, import2.TextEditor, [], null, null)
    ], function (check, view) {
        check(view, 1, 0);
    }, null);
}
export var TextEditorNgFactory = import0.ɵcreateComponentFactory('editor', import2.TextEditor, View_TextEditor_Host_0);
