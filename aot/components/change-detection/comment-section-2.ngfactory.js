import * as import0 from '../../../components/change-detection/comment-section-2';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory';
import * as import11 from '../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import12 from '../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import13 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import14 from '@angular/core/src/linker/element_ref';
import * as import15 from '@angular/core/src/linker/template_ref';
import * as import16 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import17 from '@angular/forms/src/directives/default_value_accessor';
import * as import18 from '@angular/forms/src/directives/control_value_accessor';
import * as import19 from '@angular/forms/src/directives/ng_model';
import * as import20 from '@angular/forms/src/directives/ng_control';
import * as import21 from '@angular/forms/src/directives/ng_control_status';
import * as import22 from '@angular/common/src/directives/ng_for';
export class Wrapper_CommentSection2 {
    constructor() {
        this.changed = false;
        this.context = new import0.CommentSection2();
    }
    detectChangesInInputProps(view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    }
    detectChangesInHostProps(view, el, throwOnChange) {
    }
}
var renderType_CommentSection2_Host = null;
class _View_CommentSection2_Host0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_CommentSection2_Host0, renderType_CommentSection2_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer, 'comment-section-2', import4.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_CommentSection20(this.viewUtils, this.injector(0), this._appEl_0);
        this._CommentSection2_0_4 = new Wrapper_CommentSection2();
        this._appEl_0.initComponent(this._CommentSection2_0_4.context, [], compView_0);
        compView_0.create(this._CommentSection2_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.CommentSection2) && (0 === requestNodeIndex))) {
            return this._CommentSection2_0_4.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._CommentSection2_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._CommentSection2_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
}
function viewFactory_CommentSection2_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_CommentSection2_Host === null)) {
        (renderType_CommentSection2_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_CommentSection2_Host0(viewUtils, parentInjector, declarationEl);
}
export const CommentSection2NgFactory = new import9.ComponentFactory('comment-section-2', viewFactory_CommentSection2_Host0, import0.CommentSection2);
const styles_CommentSection2 = [];
var renderType_CommentSection2 = null;
class _View_CommentSection20 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_CommentSection20, renderType_CommentSection2, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_51 = import7.UNINITIALIZED;
        this._expr_52 = import7.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = import4.createRenderElement(this.renderer, parentRenderNode, 'div', new import4.InlineArray2(2, 'style', 'border: 1px solid black;padding: 5px;'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_2 = import4.createRenderElement(this.renderer, this._el_0, 'div', new import4.InlineArray2(2, 'class', 'alert alert-info'), null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_5 = import4.createRenderElement(this.renderer, this._el_0, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._el_6 = import4.createRenderElement(this.renderer, this._el_5, 'strong', import4.EMPTY_INLINE_ARRAY, null);
        this._text_7 = this.renderer.createText(this._el_6, '', null);
        this._text_8 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_9 = import4.createRenderElement(this.renderer, this._el_0, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._text_10 = this.renderer.createText(this._el_9, '\n        ', null);
        this._el_11 = import4.createRenderElement(this.renderer, this._el_9, 'button', import4.EMPTY_INLINE_ARRAY, null);
        this._text_12 = this.renderer.createText(this._el_11, 'Add Comment', null);
        this._text_13 = this.renderer.createText(this._el_9, '\n    ', null);
        this._text_14 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_15 = import4.createRenderElement(this.renderer, this._el_0, 'br', import4.EMPTY_INLINE_ARRAY, null);
        this._text_16 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_17 = import4.createRenderElement(this.renderer, this._el_0, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._text_18 = this.renderer.createText(this._el_17, 'Author', null);
        this._text_19 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_20 = import4.createRenderElement(this.renderer, this._el_0, 'input', import4.EMPTY_INLINE_ARRAY, null);
        this._DefaultValueAccessor_20_3 = new import10.Wrapper_DefaultValueAccessor(this.renderer, new import14.ElementRef(this._el_20));
        this._NG_VALUE_ACCESSOR_20_4 = [this._DefaultValueAccessor_20_3.context];
        this._NgModel_20_5 = new import11.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_20_4);
        this._NgControl_20_6 = this._NgModel_20_5.context;
        this._NgControlStatus_20_7 = new import12.Wrapper_NgControlStatus(this._NgControl_20_6);
        this._text_21 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_22 = import4.createRenderElement(this.renderer, this._el_0, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._text_23 = this.renderer.createText(this._el_22, 'Text', null);
        this._text_24 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_25 = import4.createRenderElement(this.renderer, this._el_0, 'input', import4.EMPTY_INLINE_ARRAY, null);
        this._DefaultValueAccessor_25_3 = new import10.Wrapper_DefaultValueAccessor(this.renderer, new import14.ElementRef(this._el_25));
        this._NG_VALUE_ACCESSOR_25_4 = [this._DefaultValueAccessor_25_3.context];
        this._NgModel_25_5 = new import11.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_25_4);
        this._NgControl_25_6 = this._NgModel_25_5.context;
        this._NgControlStatus_25_7 = new import12.Wrapper_NgControlStatus(this._NgControl_25_6);
        this._text_26 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_27 = import4.createRenderElement(this.renderer, this._el_0, 'br', import4.EMPTY_INLINE_ARRAY, null);
        this._text_28 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_29 = import4.createRenderElement(this.renderer, this._el_0, 'br', import4.EMPTY_INLINE_ARRAY, null);
        this._text_30 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_31 = import4.createRenderElement(this.renderer, this._el_0, 'table', new import4.InlineArray2(2, 'class', 'table'), null);
        this._text_32 = this.renderer.createText(this._el_31, '\n        ', null);
        this._el_33 = import4.createRenderElement(this.renderer, this._el_31, 'tbody', import4.EMPTY_INLINE_ARRAY, null);
        this._anchor_34 = this.renderer.createTemplateAnchor(this._el_33, null);
        this._appEl_34 = new import3.AppElement(34, 33, this, this._anchor_34);
        this._TemplateRef_34_5 = new import15.TemplateRef_(this._appEl_34, viewFactory_CommentSection21);
        this._NgFor_34_6 = new import13.Wrapper_NgFor(this._appEl_34.vcRef, this._TemplateRef_34_5, this.parentInjector.get(import16.IterableDiffers), this.ref);
        this._text_35 = this.renderer.createText(this._el_33, '\n    ', null);
        this._text_36 = this.renderer.createText(this._el_0, '\n\n', null);
        this._text_37 = this.renderer.createText(parentRenderNode, '\n', null);
        var disposable_0 = this.renderer.listen(this._el_11, 'click', this.eventHandler(this._handle_click_11_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_20, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_20_0.bind(this)));
        var disposable_2 = this.renderer.listen(this._el_20, 'input', this.eventHandler(this._handle_input_20_1.bind(this)));
        var disposable_3 = this.renderer.listen(this._el_20, 'blur', this.eventHandler(this._handle_blur_20_2.bind(this)));
        const subscription_0 = this._NgModel_20_5.context.update.subscribe(this.eventHandler(this._handle_ngModelChange_20_0.bind(this)));
        var disposable_4 = this.renderer.listen(this._el_25, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_25_0.bind(this)));
        var disposable_5 = this.renderer.listen(this._el_25, 'input', this.eventHandler(this._handle_input_25_1.bind(this)));
        var disposable_6 = this.renderer.listen(this._el_25, 'blur', this.eventHandler(this._handle_blur_25_2.bind(this)));
        const subscription_1 = this._NgModel_25_5.context.update.subscribe(this.eventHandler(this._handle_ngModelChange_25_0.bind(this)));
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._text_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._text_24,
            this._el_25,
            this._text_26,
            this._el_27,
            this._text_28,
            this._el_29,
            this._text_30,
            this._el_31,
            this._text_32,
            this._el_33,
            this._anchor_34,
            this._text_35,
            this._text_36,
            this._text_37
        ], [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3,
            disposable_4,
            disposable_5,
            disposable_6
        ], [
            subscription_0,
            subscription_1
        ]);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import17.DefaultValueAccessor) && (20 === requestNodeIndex))) {
            return this._DefaultValueAccessor_20_3.context;
        }
        if (((token === import18.NG_VALUE_ACCESSOR) && (20 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_20_4;
        }
        if (((token === import19.NgModel) && (20 === requestNodeIndex))) {
            return this._NgModel_20_5.context;
        }
        if (((token === import20.NgControl) && (20 === requestNodeIndex))) {
            return this._NgControl_20_6;
        }
        if (((token === import21.NgControlStatus) && (20 === requestNodeIndex))) {
            return this._NgControlStatus_20_7.context;
        }
        if (((token === import17.DefaultValueAccessor) && (25 === requestNodeIndex))) {
            return this._DefaultValueAccessor_25_3.context;
        }
        if (((token === import18.NG_VALUE_ACCESSOR) && (25 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_25_4;
        }
        if (((token === import19.NgModel) && (25 === requestNodeIndex))) {
            return this._NgModel_25_5.context;
        }
        if (((token === import20.NgControl) && (25 === requestNodeIndex))) {
            return this._NgControl_25_6;
        }
        if (((token === import21.NgControlStatus) && (25 === requestNodeIndex))) {
            return this._NgControlStatus_25_7.context;
        }
        if (((token === import15.TemplateRef) && (34 === requestNodeIndex))) {
            return this._TemplateRef_34_5;
        }
        if (((token === import22.NgFor) && (34 === requestNodeIndex))) {
            return this._NgFor_34_6.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._DefaultValueAccessor_20_3.detectChangesInInputProps(this, this._el_20, throwOnChange);
        const currVal_20_1_0 = this.context.author;
        this._NgModel_20_5.check_model(currVal_20_1_0, throwOnChange, false);
        this._NgModel_20_5.detectChangesInInputProps(this, this._el_20, throwOnChange);
        this._NgControlStatus_20_7.detectChangesInInputProps(this, this._el_20, throwOnChange);
        this._DefaultValueAccessor_25_3.detectChangesInInputProps(this, this._el_25, throwOnChange);
        const currVal_25_1_0 = this.context.text;
        this._NgModel_25_5.check_model(currVal_25_1_0, throwOnChange, false);
        this._NgModel_25_5.detectChangesInInputProps(this, this._el_25, throwOnChange);
        this._NgControlStatus_25_7.detectChangesInInputProps(this, this._el_25, throwOnChange);
        const currVal_34_0_0 = this.context.comments;
        this._NgFor_34_6.check_ngForOf(currVal_34_0_0, throwOnChange, false);
        this._NgFor_34_6.detectChangesInInputProps(this, this._anchor_34, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        const currVal_51 = import4.interpolate(1, '\n        ', this.context.message, '\n    ');
        if (import4.checkBinding(throwOnChange, this._expr_51, currVal_51)) {
            this.renderer.setText(this._text_3, currVal_51);
            this._expr_51 = currVal_51;
        }
        const currVal_52 = import4.interpolate(1, '', this.context.lastUpdated(), '');
        if (import4.checkBinding(throwOnChange, this._expr_52, currVal_52)) {
            this.renderer.setText(this._text_7, currVal_52);
            this._expr_52 = currVal_52;
        }
        this._DefaultValueAccessor_20_3.detectChangesInHostProps(this, this._el_20, throwOnChange);
        this._NgModel_20_5.detectChangesInHostProps(this, this._el_20, throwOnChange);
        this._NgControlStatus_20_7.detectChangesInHostProps(this, this._el_20, throwOnChange);
        this._DefaultValueAccessor_25_3.detectChangesInHostProps(this, this._el_25, throwOnChange);
        this._NgModel_25_5.detectChangesInHostProps(this, this._el_25, throwOnChange);
        this._NgControlStatus_25_7.detectChangesInHostProps(this, this._el_25, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
    destroyInternal() {
        this._NgModel_20_5.context.ngOnDestroy();
        this._NgModel_25_5.context.ngOnDestroy();
    }
    _handle_click_11_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_11_0 = (this.context.addComment() !== false);
        return (true && pd_11_0);
    }
    _handle_ngModelChange_20_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_20_0 = ((this.context.author = $event) !== false);
        return (true && pd_20_0);
    }
    _handle_input_20_1($event) {
        this.markPathToRootAsCheckOnce();
        const pd_20_0 = (this._DefaultValueAccessor_20_3.context.onChange($event.target.value) !== false);
        return (true && pd_20_0);
    }
    _handle_blur_20_2($event) {
        this.markPathToRootAsCheckOnce();
        const pd_20_0 = (this._DefaultValueAccessor_20_3.context.onTouched() !== false);
        return (true && pd_20_0);
    }
    _handle_ngModelChange_25_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_25_0 = ((this.context.text = $event) !== false);
        return (true && pd_25_0);
    }
    _handle_input_25_1($event) {
        this.markPathToRootAsCheckOnce();
        const pd_25_0 = (this._DefaultValueAccessor_25_3.context.onChange($event.target.value) !== false);
        return (true && pd_25_0);
    }
    _handle_blur_25_2($event) {
        this.markPathToRootAsCheckOnce();
        const pd_25_0 = (this._DefaultValueAccessor_25_3.context.onTouched() !== false);
        return (true && pd_25_0);
    }
}
export function viewFactory_CommentSection20(viewUtils, parentInjector, declarationEl) {
    if ((renderType_CommentSection2 === null)) {
        (renderType_CommentSection2 = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, styles_CommentSection2, {}));
    }
    return new _View_CommentSection20(viewUtils, parentInjector, declarationEl);
}
class _View_CommentSection21 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_CommentSection21, renderType_CommentSection2, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_8 = import7.UNINITIALIZED;
        this._expr_9 = import7.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'tr', import4.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_2 = import4.createRenderElement(this.renderer, this._el_0, 'td', import4.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_5 = import4.createRenderElement(this.renderer, this._el_0, 'td', import4.EMPTY_INLINE_ARRAY, null);
        this._text_6 = this.renderer.createText(this._el_5, '', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n        ', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7
        ], [], []);
        return null;
    }
    detectChangesInternal(throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        const currVal_8 = import4.interpolate(1, '', this.context.$implicit.author, '');
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setText(this._text_3, currVal_8);
            this._expr_8 = currVal_8;
        }
        const currVal_9 = import4.interpolate(1, '', this.context.$implicit.text, '');
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setText(this._text_6, currVal_9);
            this._expr_9 = currVal_9;
        }
        this.detectViewChildrenChanges(throwOnChange);
    }
}
function viewFactory_CommentSection21(viewUtils, parentInjector, declarationEl) {
    return new _View_CommentSection21(viewUtils, parentInjector, declarationEl);
}
