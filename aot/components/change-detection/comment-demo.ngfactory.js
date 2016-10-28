import * as import0 from '../../../components/change-detection/comment-demo';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from './comment-section-1.ngfactory';
import * as import11 from './comment-section-2.ngfactory';
import * as import12 from '../../../components/change-detection/comment-section-1';
import * as import13 from '../../../components/change-detection/comment-section-2';
export class Wrapper_CommentDemo {
    constructor() {
        this.changed = false;
        this.context = new import0.CommentDemo();
    }
    detectChangesInInputProps(view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    }
    detectChangesInHostProps(view, el, throwOnChange) {
    }
}
var renderType_CommentDemo_Host = null;
class _View_CommentDemo_Host0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_CommentDemo_Host0, renderType_CommentDemo_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer, 'comment-demo', import4.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_CommentDemo0(this.viewUtils, this.injector(0), this._appEl_0);
        this._CommentDemo_0_4 = new Wrapper_CommentDemo();
        this._appEl_0.initComponent(this._CommentDemo_0_4.context, [], compView_0);
        compView_0.create(this._CommentDemo_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.CommentDemo) && (0 === requestNodeIndex))) {
            return this._CommentDemo_0_4.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._CommentDemo_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._CommentDemo_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
}
function viewFactory_CommentDemo_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_CommentDemo_Host === null)) {
        (renderType_CommentDemo_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_CommentDemo_Host0(viewUtils, parentInjector, declarationEl);
}
export const CommentDemoNgFactory = new import9.ComponentFactory('comment-demo', viewFactory_CommentDemo_Host0, import0.CommentDemo);
const styles_CommentDemo = [];
var renderType_CommentDemo = null;
class _View_CommentDemo0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_CommentDemo0, renderType_CommentDemo, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_36 = import7.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = import4.createRenderElement(this.renderer, parentRenderNode, 'h1', import4.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, 'Change Detection', null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_3 = import4.createRenderElement(this.renderer, parentRenderNode, 'div', new import4.InlineArray2(2, 'class', 'row'), null);
        this._text_4 = this.renderer.createText(this._el_3, '\n    ', null);
        this._el_5 = import4.createRenderElement(this.renderer, this._el_3, 'div', new import4.InlineArray2(2, 'class', 'col-md-6'), null);
        this._text_6 = this.renderer.createText(this._el_5, '\n\n        ', null);
        this._el_7 = import4.createRenderElement(this.renderer, this._el_5, 'comment-section-1', import4.EMPTY_INLINE_ARRAY, null);
        this._appEl_7 = new import3.AppElement(7, 5, this, this._el_7);
        var compView_7 = import10.viewFactory_CommentSection10(this.viewUtils, this.injector(7), this._appEl_7);
        this._CommentSection1_7_4 = new import10.Wrapper_CommentSection1();
        this._appEl_7.initComponent(this._CommentSection1_7_4.context, [], compView_7);
        compView_7.create(this._CommentSection1_7_4.context, [], null);
        this._text_8 = this.renderer.createText(this._el_5, '\n    ', null);
        this._text_9 = this.renderer.createText(this._el_3, '\n\n    ', null);
        this._el_10 = import4.createRenderElement(this.renderer, this._el_3, 'div', new import4.InlineArray2(2, 'class', 'col-md-6'), null);
        this._text_11 = this.renderer.createText(this._el_10, '\n        ', null);
        this._el_12 = import4.createRenderElement(this.renderer, this._el_10, 'comment-section-2', import4.EMPTY_INLINE_ARRAY, null);
        this._appEl_12 = new import3.AppElement(12, 10, this, this._el_12);
        var compView_12 = import11.viewFactory_CommentSection20(this.viewUtils, this.injector(12), this._appEl_12);
        this._CommentSection2_12_4 = new import11.Wrapper_CommentSection2();
        this._appEl_12.initComponent(this._CommentSection2_12_4.context, [], compView_12);
        compView_12.create(this._CommentSection2_12_4.context, [], null);
        this._text_13 = this.renderer.createText(this._el_10, '\n    ', null);
        this._text_14 = this.renderer.createText(this._el_3, '\n', null);
        this._text_15 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_16 = import4.createRenderElement(this.renderer, parentRenderNode, 'div', new import4.InlineArray2(2, 'class', 'row'), null);
        this._text_17 = this.renderer.createText(this._el_16, '\n    ', null);
        this._el_18 = import4.createRenderElement(this.renderer, this._el_16, 'div', new import4.InlineArray2(2, 'style', 'margin: 15px;'), null);
        this._text_19 = this.renderer.createText(this._el_18, '\n        ', null);
        this._el_20 = import4.createRenderElement(this.renderer, this._el_18, 'button', import4.EMPTY_INLINE_ARRAY, null);
        this._text_21 = this.renderer.createText(this._el_20, 'Increment Counter', null);
        this._text_22 = this.renderer.createText(this._el_18, '\n        ', null);
        this._el_23 = import4.createRenderElement(this.renderer, this._el_18, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._el_24 = import4.createRenderElement(this.renderer, this._el_23, 'strong', import4.EMPTY_INLINE_ARRAY, null);
        this._text_25 = this.renderer.createText(this._el_24, '', null);
        this._text_26 = this.renderer.createText(this._el_18, '\n    ', null);
        this._text_27 = this.renderer.createText(this._el_16, '\n', null);
        this._text_28 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_29 = import4.createRenderElement(this.renderer, parentRenderNode, 'h4', import4.EMPTY_INLINE_ARRAY, null);
        this._el_30 = import4.createRenderElement(this.renderer, this._el_29, 'a', new import4.InlineArray2(2, 'href', 'http://www.syntaxsuccess.com/viewarticle/change-detection-in-angular-2.0'), null);
        this._text_31 = this.renderer.createText(this._el_30, 'Read more here', null);
        var disposable_0 = this.renderer.listen(this._el_20, 'click', this.eventHandler(this._handle_click_20_0.bind(this)));
        this.init([], [
            this._el_0,
            this._text_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._text_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._text_22,
            this._el_23,
            this._el_24,
            this._text_25,
            this._text_26,
            this._text_27,
            this._text_28,
            this._el_29,
            this._el_30,
            this._text_31
        ], [disposable_0], []);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import12.CommentSection1) && (7 === requestNodeIndex))) {
            return this._CommentSection1_7_4.context;
        }
        if (((token === import13.CommentSection2) && (12 === requestNodeIndex))) {
            return this._CommentSection2_12_4.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        if (this._CommentSection1_7_4.detectChangesInInputProps(this, this._el_7, throwOnChange)) {
            this._appEl_7.componentView.markAsCheckOnce();
        }
        this._CommentSection2_12_4.detectChangesInInputProps(this, this._el_12, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._CommentSection1_7_4.detectChangesInHostProps(this, this._el_7, throwOnChange);
        this._CommentSection2_12_4.detectChangesInHostProps(this, this._el_12, throwOnChange);
        const currVal_36 = import4.interpolate(1, '', this.context.counter, '');
        if (import4.checkBinding(throwOnChange, this._expr_36, currVal_36)) {
            this.renderer.setText(this._text_25, currVal_36);
            this._expr_36 = currVal_36;
        }
        this.detectViewChildrenChanges(throwOnChange);
    }
    _handle_click_20_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_20_0 = (this.context.count() !== false);
        return (true && pd_20_0);
    }
}
export function viewFactory_CommentDemo0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_CommentDemo === null)) {
        (renderType_CommentDemo = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, styles_CommentDemo, {}));
    }
    return new _View_CommentDemo0(viewUtils, parentInjector, declarationEl);
}
