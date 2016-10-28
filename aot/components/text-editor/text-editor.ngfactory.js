import * as import0 from '../../../components/text-editor/text-editor';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import11 from '@angular/core/src/linker/template_ref';
import * as import12 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import13 from '@angular/common/src/directives/ng_for';
import * as import14 from '../../node_modules/@angular/common/src/directives/ng_class.ngfactory';
import * as import15 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import16 from '@angular/core/src/linker/element_ref';
import * as import17 from '@angular/common/src/directives/ng_class';
export class Wrapper_TextEditor {
    constructor() {
        this.changed = false;
        this.context = new import0.TextEditor();
    }
    detectChangesInInputProps(view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    }
    detectChangesInHostProps(view, el, throwOnChange) {
    }
}
var renderType_TextEditor_Host = null;
class _View_TextEditor_Host0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_TextEditor_Host0, renderType_TextEditor_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer, 'editor', import4.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_TextEditor0(this.viewUtils, this.injector(0), this._appEl_0);
        this._TextEditor_0_4 = new Wrapper_TextEditor();
        this._appEl_0.initComponent(this._TextEditor_0_4.context, [], compView_0);
        compView_0.create(this._TextEditor_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.TextEditor) && (0 === requestNodeIndex))) {
            return this._TextEditor_0_4.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._TextEditor_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._TextEditor_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
}
function viewFactory_TextEditor_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_TextEditor_Host === null)) {
        (renderType_TextEditor_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_TextEditor_Host0(viewUtils, parentInjector, declarationEl);
}
export const TextEditorNgFactory = new import9.ComponentFactory('editor', viewFactory_TextEditor_Host0, import0.TextEditor);
const styles_TextEditor = [];
var renderType_TextEditor = null;
class _View_TextEditor0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_TextEditor0, renderType_TextEditor, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_1 = import4.createRenderElement(this.renderer, parentRenderNode, 'h1', import4.EMPTY_INLINE_ARRAY, null);
        this._text_2 = this.renderer.createText(this._el_1, 'Text editor based on Observables', null);
        this._text_3 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_4 = import4.createRenderElement(this.renderer, parentRenderNode, 'div', new import4.InlineArray4(4, 'class', 'alert alert-success', 'role', 'alert'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n    Supports typing of letters and numbers. Basic text selection and cursor placement is also supported.\n', null);
        this._text_6 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_7 = import4.createRenderElement(this.renderer, parentRenderNode, 'div', new import4.InlineArray2(2, 'class', 'editor'), null);
        this._text_8 = this.renderer.createText(this._el_7, '\n', null);
        this._el_9 = import4.createRenderElement(this.renderer, this._el_7, 'div', new import4.InlineArray4(4, 'class', 'page noselect', 'id', 'page'), null);
        this._anchor_10 = this.renderer.createTemplateAnchor(this._el_9, null);
        this._appEl_10 = new import3.AppElement(10, 9, this, this._anchor_10);
        this._TemplateRef_10_5 = new import11.TemplateRef_(this._appEl_10, viewFactory_TextEditor1);
        this._NgFor_10_6 = new import10.Wrapper_NgFor(this._appEl_10.vcRef, this._TemplateRef_10_5, this.parentInjector.get(import12.IterableDiffers), this.ref);
        this._text_11 = this.renderer.createText(this._el_7, '\n', null);
        this._text_12 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_13 = import4.createRenderElement(this.renderer, parentRenderNode, 'h4', import4.EMPTY_INLINE_ARRAY, null);
        this._el_14 = import4.createRenderElement(this.renderer, this._el_13, 'a', new import4.InlineArray2(2, 'href', 'http://www.syntaxsuccess.com/viewarticle/observables-in-angular-2.0'), null);
        this._text_15 = this.renderer.createText(this._el_14, 'Read more here', null);
        this.init([], [
            this._text_0,
            this._el_1,
            this._text_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._el_9,
            this._anchor_10,
            this._text_11,
            this._text_12,
            this._el_13,
            this._el_14,
            this._text_15
        ], [], []);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import11.TemplateRef) && (10 === requestNodeIndex))) {
            return this._TemplateRef_10_5;
        }
        if (((token === import13.NgFor) && (10 === requestNodeIndex))) {
            return this._NgFor_10_6.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_10_0_0 = this.context.currentDocument.characters;
        this._NgFor_10_6.check_ngForOf(currVal_10_0_0, throwOnChange, false);
        this._NgFor_10_6.detectChangesInInputProps(this, this._anchor_10, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
}
export function viewFactory_TextEditor0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_TextEditor === null)) {
        (renderType_TextEditor = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, styles_TextEditor, {}));
    }
    return new _View_TextEditor0(viewUtils, parentInjector, declarationEl);
}
class _View_TextEditor1 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_TextEditor1, renderType_TextEditor, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._map_3 = import4.pureProxy2((p0, p1) => {
            return {
                currentChar: p0,
                selectedChar: p1
            };
        });
        this._expr_4 = import7.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'span', import4.EMPTY_INLINE_ARRAY, null);
        this._NgClass_0_3 = new import14.Wrapper_NgClass(this.parent.parentInjector.get(import12.IterableDiffers), this.parent.parentInjector.get(import15.KeyValueDiffers), new import16.ElementRef(this._el_0), this.renderer);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import17.NgClass) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._NgClass_0_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_0_0_0 = this._map_3(this.context.$implicit.isCurrent, this.context.$implicit.isSelected);
        this._NgClass_0_3.check_ngClass(currVal_0_0_0, throwOnChange, false);
        this._NgClass_0_3.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._NgClass_0_3.detectChangesInHostProps(this, this._el_0, throwOnChange);
        const currVal_4 = import4.interpolate(1, '', this.context.$implicit.value, '');
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setText(this._text_1, currVal_4);
            this._expr_4 = currVal_4;
        }
        this.detectViewChildrenChanges(throwOnChange);
    }
}
function viewFactory_TextEditor1(viewUtils, parentInjector, declarationEl) {
    return new _View_TextEditor1(viewUtils, parentInjector, declarationEl);
}
