import * as import0 from '../../../components/text-editor/text-editor';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/core/src/linker/view_container';
import * as import9 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import10 from '@angular/core/src/linker/template_ref';
import * as import11 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import12 from '@angular/common/src/directives/ng_for';
import * as import13 from '../../node_modules/@angular/common/src/directives/ng_class.ngfactory';
import * as import14 from '@angular/core/src/change_detection/change_detection_util';
import * as import15 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import16 from '@angular/core/src/linker/element_ref';
import * as import17 from '@angular/common/src/directives/ng_class';
export class Wrapper_TextEditor {
    constructor() {
        this._changed = false;
        this.context = new import0.TextEditor();
    }
    ngOnDetach(view, componentView, el) {
    }
    ngOnDestroy() {
    }
    ngDoCheck(view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    }
    checkHost(view, componentView, el, throwOnChange) {
    }
    handleEvent(eventName, $event) {
        var result = true;
        return result;
    }
    subscribe(view, _eventHandler) {
        this._eventHandler = _eventHandler;
    }
}
var renderType_TextEditor_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
class View_TextEditor_Host0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_TextEditor_Host0, renderType_TextEditor_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'editor', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_TextEditor0(this.viewUtils, this, 0, this._el_0);
        this._TextEditor_0_3 = new Wrapper_TextEditor();
        this.compView_0.create(this._TextEditor_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._TextEditor_0_3.context);
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.TextEditor) && (0 === requestNodeIndex))) {
            return this._TextEditor_0_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._TextEditor_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    }
    destroyInternal() {
        this.compView_0.destroy();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
export const TextEditorNgFactory = new import7.ComponentFactory('editor', View_TextEditor_Host0, import0.TextEditor);
const styles_TextEditor = [];
var renderType_TextEditor = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_TextEditor, {});
export class View_TextEditor0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_TextEditor0, renderType_TextEditor, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'h1', import3.EMPTY_INLINE_ARRAY, null);
        this._text_2 = this.renderer.createText(this._el_1, 'Text editor based on Observables', null);
        this._text_3 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_4 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray4(4, 'class', 'alert alert-success', 'role', 'alert'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n    Supports typing of letters and numbers. Basic text selection and cursor placement is also supported.\n', null);
        this._text_6 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_7 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'editor'), null);
        this._text_8 = this.renderer.createText(this._el_7, '\n', null);
        this._el_9 = import3.createRenderElement(this.renderer, this._el_7, 'div', new import3.InlineArray4(4, 'class', 'page noselect', 'id', 'page'), null);
        this._anchor_10 = this.renderer.createTemplateAnchor(this._el_9, null);
        this._vc_10 = new import8.ViewContainer(10, 9, this, this._anchor_10);
        this._TemplateRef_10_5 = new import10.TemplateRef_(this, 10, this._anchor_10);
        this._NgFor_10_6 = new import9.Wrapper_NgFor(this._vc_10.vcRef, this._TemplateRef_10_5, this.parentView.injectorGet(import11.IterableDiffers, this.parentIndex), this.ref);
        this._text_11 = this.renderer.createText(this._el_7, '\n', null);
        this._text_12 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_13 = import3.createRenderElement(this.renderer, parentRenderNode, 'h4', import3.EMPTY_INLINE_ARRAY, null);
        this._el_14 = import3.createRenderElement(this.renderer, this._el_13, 'a', new import3.InlineArray2(2, 'href', 'http://www.syntaxsuccess.com/viewarticle/observables-in-angular-2.0'), null);
        this._text_15 = this.renderer.createText(this._el_14, 'Read more here', null);
        this.init(null, (this.renderer.directRenderer ? null : [
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
        ]), null);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import10.TemplateRef) && (10 === requestNodeIndex))) {
            return this._TemplateRef_10_5;
        }
        if (((token === import12.NgFor) && (10 === requestNodeIndex))) {
            return this._NgFor_10_6.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_10_0_0 = this.context.currentDocument.characters;
        this._NgFor_10_6.check_ngForOf(currVal_10_0_0, throwOnChange, false);
        this._NgFor_10_6.ngDoCheck(this, this._anchor_10, throwOnChange);
        this._vc_10.detectChangesInNestedViews(throwOnChange);
    }
    destroyInternal() {
        this._vc_10.destroyNestedViews();
    }
    createEmbeddedViewInternal(nodeIndex) {
        if ((nodeIndex == 10)) {
            return new View_TextEditor1(this.viewUtils, this, 10, this._anchor_10, this._vc_10);
        }
        return null;
    }
}
class View_TextEditor1 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        super(View_TextEditor1, renderType_TextEditor, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._map_3 = import3.pureProxy2((p0, p1) => {
            return {
                currentChar: p0,
                selectedChar: p1
            };
        });
        this._expr_4 = import14.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'span', import3.EMPTY_INLINE_ARRAY, null);
        this._NgClass_0_3 = new import13.Wrapper_NgClass(this.parentView.parentView.injectorGet(import11.IterableDiffers, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import15.KeyValueDiffers, this.parentView.parentIndex), new import16.ElementRef(this._el_0), this.renderer);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
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
        this._NgClass_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        const currVal_4 = import3.inlineInterpolate(1, '', this.context.$implicit.value, '');
        if (import3.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setText(this._text_1, currVal_4);
            this._expr_4 = currVal_4;
        }
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
