import * as import0 from '@angular/core';
import * as import1 from '@angular/common';
import * as import2 from '../../../components/text-editor/text-editor';
var styles_TextEditor = [];
export var RenderType_TextEditor = import0.ɵcrt({
    encapsulation: 2,
    styles: styles_TextEditor,
    data: {}
});
function View_TextEditor_1(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 3, 'span', [], null, null, null, null, null)),
        import0.ɵdid(278528, null, 0, import1.NgClass, [
            import0.IterableDiffers,
            import0.KeyValueDiffers,
            import0.ElementRef,
            import0.Renderer
        ], { ngClass: [
                0,
                'ngClass'
            ]
        }, null),
        import0.ɵpod([
            'currentChar',
            'selectedChar'
        ]),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ]))
    ], function (ck, v) {
        var currVal_0 = ck(v, 2, 0, v.context.$implicit.isCurrent, v.context.$implicit.isSelected);
        ck(v, 1, 0, currVal_0);
    }, function (ck, v) {
        var currVal_1 = v.context.$implicit.value;
        ck(v, 3, 0, currVal_1);
    });
}
export function View_TextEditor_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵted(null, ['\n'])),
        (l()(), import0.ɵeld(0, null, null, 1, 'h1', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Text editor based on Observables'])),
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
        (l()(), import0.ɵted(null, ['\n    Supports typing of letters and numbers. Basic text selection and cursor placement is also supported.\n'])),
        (l()(), import0.ɵted(null, ['\n\n'])),
        (l()(), import0.ɵeld(0, null, null, 5, 'div', [[
                'class',
                'editor'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n'])),
        (l()(), import0.ɵeld(0, null, null, 2, 'div', [
            [
                'class',
                'page noselect'
            ],
            [
                'id',
                'page'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵand(16777216, null, null, 1, null, View_TextEditor_1)),
        import0.ɵdid(802816, null, 0, import1.NgForOf, [
            import0.ViewContainerRef,
            import0.TemplateRef,
            import0.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n'])),
        (l()(), import0.ɵted(null, ['\n\n'])),
        (l()(), import0.ɵeld(0, null, null, 2, 'h4', [], null, null, null, null, null)),
        (l()(), import0.ɵeld(0, null, null, 1, 'a', [[
                'href',
                'http://www.syntaxsuccess.com/viewarticle/observables-in-angular-2.0'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Read more here']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_0 = co.currentDocument.characters;
        ck(v, 11, 0, currVal_0);
    }, null);
}
function View_TextEditor_Host_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'editor', [], null, null, null, View_TextEditor_0, RenderType_TextEditor)),
        import0.ɵdid(114688, null, 0, import2.TextEditor, [], null, null)
    ], function (ck, v) {
        ck(v, 1, 0);
    }, null);
}
export var TextEditorNgFactory = import0.ɵccf('editor', import2.TextEditor, View_TextEditor_Host_0, {}, {}, []);
