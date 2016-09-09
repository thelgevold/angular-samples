var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../components/change-detection/comment-demo';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '../../../components/change-detection/comment-section-1';
import * as import11 from '../../../components/change-detection/comment-section-2';
import * as import12 from './comment-section-1.ngfactory';
import * as import13 from './comment-section-2.ngfactory';
var renderType_CommentDemo_Host = null;
var _View_CommentDemo_Host0 = (function (_super) {
    __extends(_View_CommentDemo_Host0, _super);
    function _View_CommentDemo_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_CommentDemo_Host0, renderType_CommentDemo_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_CommentDemo_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('comment-demo', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_CommentDemo0(this.viewUtils, this.injector(0), this._appEl_0);
        this._CommentDemo_0_4 = new import3.CommentDemo();
        this._appEl_0.initComponent(this._CommentDemo_0_4, [], compView_0);
        compView_0.create(this._CommentDemo_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_CommentDemo_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.CommentDemo) && (0 === requestNodeIndex))) {
            return this._CommentDemo_0_4;
        }
        return notFoundResult;
    };
    return _View_CommentDemo_Host0;
}(import1.AppView));
function viewFactory_CommentDemo_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_CommentDemo_Host === null)) {
        (renderType_CommentDemo_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_CommentDemo_Host0(viewUtils, parentInjector, declarationEl);
}
export var CommentDemoNgFactory = new import9.ComponentFactory('comment-demo', viewFactory_CommentDemo_Host0, import3.CommentDemo);
var styles_CommentDemo = [];
var renderType_CommentDemo = null;
var _View_CommentDemo0 = (function (_super) {
    __extends(_View_CommentDemo0, _super);
    function _View_CommentDemo0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_CommentDemo0, renderType_CommentDemo, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_CommentDemo0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'h1', null);
        this._text_1 = this.renderer.createText(this._el_0, 'Change Detection', null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_3 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_3, 'class', 'row');
        this._text_4 = this.renderer.createText(this._el_3, '\n    ', null);
        this._el_5 = this.renderer.createElement(this._el_3, 'div', null);
        this.renderer.setElementAttribute(this._el_5, 'class', 'col-md-6');
        this._text_6 = this.renderer.createText(this._el_5, '\n\n        ', null);
        this._el_7 = this.renderer.createElement(this._el_5, 'comment-section-1', null);
        this._appEl_7 = new import2.AppElement(7, 5, this, this._el_7);
        var compView_7 = import12.viewFactory_CommentSection10(this.viewUtils, this.injector(7), this._appEl_7);
        this._CommentSection1_7_4 = new import10.CommentSection1();
        this._appEl_7.initComponent(this._CommentSection1_7_4, [], compView_7);
        compView_7.create(this._CommentSection1_7_4, [], null);
        this._text_8 = this.renderer.createText(this._el_5, '\n    ', null);
        this._text_9 = this.renderer.createText(this._el_3, '\n\n    ', null);
        this._el_10 = this.renderer.createElement(this._el_3, 'div', null);
        this.renderer.setElementAttribute(this._el_10, 'class', 'col-md-6');
        this._text_11 = this.renderer.createText(this._el_10, '\n        ', null);
        this._el_12 = this.renderer.createElement(this._el_10, 'comment-section-2', null);
        this._appEl_12 = new import2.AppElement(12, 10, this, this._el_12);
        var compView_12 = import13.viewFactory_CommentSection20(this.viewUtils, this.injector(12), this._appEl_12);
        this._CommentSection2_12_4 = new import11.CommentSection2();
        this._appEl_12.initComponent(this._CommentSection2_12_4, [], compView_12);
        compView_12.create(this._CommentSection2_12_4, [], null);
        this._text_13 = this.renderer.createText(this._el_10, '\n    ', null);
        this._text_14 = this.renderer.createText(this._el_3, '\n', null);
        this._text_15 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_16 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_16, 'class', 'row');
        this._text_17 = this.renderer.createText(this._el_16, '\n    ', null);
        this._el_18 = this.renderer.createElement(this._el_16, 'div', null);
        this.renderer.setElementAttribute(this._el_18, 'style', 'margin: 15px;');
        this._text_19 = this.renderer.createText(this._el_18, '\n        ', null);
        this._el_20 = this.renderer.createElement(this._el_18, 'button', null);
        this._text_21 = this.renderer.createText(this._el_20, 'Increment Counter', null);
        this._text_22 = this.renderer.createText(this._el_18, '\n        ', null);
        this._el_23 = this.renderer.createElement(this._el_18, 'div', null);
        this._el_24 = this.renderer.createElement(this._el_23, 'strong', null);
        this._text_25 = this.renderer.createText(this._el_24, '', null);
        this._text_26 = this.renderer.createText(this._el_18, '\n    ', null);
        this._text_27 = this.renderer.createText(this._el_16, '\n', null);
        this._text_28 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_29 = this.renderer.createElement(parentRenderNode, 'h4', null);
        this._el_30 = this.renderer.createElement(this._el_29, 'a', null);
        this.renderer.setElementAttribute(this._el_30, 'href', 'http://www.syntaxsuccess.com/viewarticle/change-detection-in-angular-2.0');
        this._text_31 = this.renderer.createText(this._el_30, 'Read more here', null);
        var disposable_0 = this.renderer.listen(this._el_20, 'click', this.eventHandler(this._handle_click_20_0.bind(this)));
        this._expr_1 = import7.UNINITIALIZED;
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
    };
    _View_CommentDemo0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import10.CommentSection1) && (7 === requestNodeIndex))) {
            return this._CommentSection1_7_4;
        }
        if (((token === import11.CommentSection2) && (12 === requestNodeIndex))) {
            return this._CommentSection2_12_4;
        }
        return notFoundResult;
    };
    _View_CommentDemo0.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_1 = import4.interpolate(1, '', this.context.counter, '');
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setText(this._text_25, currVal_1);
            this._expr_1 = currVal_1;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_CommentDemo0.prototype._handle_click_20_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.count() !== false);
        return (true && pd_0);
    };
    return _View_CommentDemo0;
}(import1.AppView));
export function viewFactory_CommentDemo0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_CommentDemo === null)) {
        (renderType_CommentDemo = viewUtils.createRenderComponentType('/Users/tor/Development/angular-2-samples/components/change-detection/comment-demo.html', 0, import8.ViewEncapsulation.None, styles_CommentDemo, {}));
    }
    return new _View_CommentDemo0(viewUtils, parentInjector, declarationEl);
}
