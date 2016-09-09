var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../components/rxjs-streams/rxjs-streams';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '@angular/common/src/directives/ng_for';
import * as import11 from '@angular/core/src/linker/template_ref';
import * as import12 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import13 from '@angular/common/src/directives/ng_class';
import * as import14 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import15 from '@angular/core/src/linker/element_ref';
var renderType_RxJsStreams_Host = null;
var _View_RxJsStreams_Host0 = (function (_super) {
    __extends(_View_RxJsStreams_Host0, _super);
    function _View_RxJsStreams_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_RxJsStreams_Host0, renderType_RxJsStreams_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_RxJsStreams_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('rxjs-streams', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_RxJsStreams0(this.viewUtils, this.injector(0), this._appEl_0);
        this._RxJsStreams_0_4 = new import3.RxJsStreams();
        this._appEl_0.initComponent(this._RxJsStreams_0_4, [], compView_0);
        compView_0.create(this._RxJsStreams_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_RxJsStreams_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.RxJsStreams) && (0 === requestNodeIndex))) {
            return this._RxJsStreams_0_4;
        }
        return notFoundResult;
    };
    return _View_RxJsStreams_Host0;
}(import1.AppView));
function viewFactory_RxJsStreams_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_RxJsStreams_Host === null)) {
        (renderType_RxJsStreams_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_RxJsStreams_Host0(viewUtils, parentInjector, declarationEl);
}
export var RxJsStreamsNgFactory = new import9.ComponentFactory('rxjs-streams', viewFactory_RxJsStreams_Host0, import3.RxJsStreams);
var styles_RxJsStreams = [];
var renderType_RxJsStreams = null;
var _View_RxJsStreams0 = (function (_super) {
    __extends(_View_RxJsStreams0, _super);
    function _View_RxJsStreams0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_RxJsStreams0, renderType_RxJsStreams, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_RxJsStreams0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'stream1');
        this._text_1 = this.renderer.createText(this._el_0, 'Stream1', null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_3 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_3, 'class', 'stream2');
        this._text_4 = this.renderer.createText(this._el_3, 'Stream2', null);
        this._text_5 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_6 = this.renderer.createElement(parentRenderNode, 'br', null);
        this._text_7 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_8 = this.renderer.createElement(parentRenderNode, 'button', null);
        this._text_9 = this.renderer.createText(this._el_8, 'Merge Streams', null);
        this._text_10 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_11 = this.renderer.createElement(parentRenderNode, 'button', null);
        this._text_12 = this.renderer.createText(this._el_11, 'Concat Streams', null);
        this._text_13 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_14 = this.renderer.createElement(parentRenderNode, 'button', null);
        this._text_15 = this.renderer.createText(this._el_14, 'ForkJoin Streams', null);
        this._text_16 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_17 = this.renderer.createElement(parentRenderNode, 'button', null);
        this._text_18 = this.renderer.createText(this._el_17, 'FlatMap Streams', null);
        this._text_19 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_20 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_20, 'class', 'stream-section');
        this._text_21 = this.renderer.createText(this._el_20, '\n  ', null);
        this._el_22 = this.renderer.createElement(this._el_20, 'h4', null);
        this._text_23 = this.renderer.createText(this._el_22, 'Concatenated Streams', null);
        this._text_24 = this.renderer.createText(this._el_20, '\n  ', null);
        this._anchor_25 = this.renderer.createTemplateAnchor(this._el_20, null);
        this._appEl_25 = new import2.AppElement(25, 20, this, this._anchor_25);
        this._TemplateRef_25_5 = new import11.TemplateRef_(this._appEl_25, viewFactory_RxJsStreams1);
        this._NgFor_25_6 = new import10.NgFor(this._appEl_25.vcRef, this._TemplateRef_25_5, this.parentInjector.get(import12.IterableDiffers), this.ref);
        this._text_26 = this.renderer.createText(this._el_20, '\n', null);
        this._text_27 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_28 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_28, 'class', 'stream-section');
        this._text_29 = this.renderer.createText(this._el_28, '\n  ', null);
        this._el_30 = this.renderer.createElement(this._el_28, 'h4', null);
        this._text_31 = this.renderer.createText(this._el_30, 'Merged Streams', null);
        this._text_32 = this.renderer.createText(this._el_28, '\n  ', null);
        this._anchor_33 = this.renderer.createTemplateAnchor(this._el_28, null);
        this._appEl_33 = new import2.AppElement(33, 28, this, this._anchor_33);
        this._TemplateRef_33_5 = new import11.TemplateRef_(this._appEl_33, viewFactory_RxJsStreams2);
        this._NgFor_33_6 = new import10.NgFor(this._appEl_33.vcRef, this._TemplateRef_33_5, this.parentInjector.get(import12.IterableDiffers), this.ref);
        this._text_34 = this.renderer.createText(this._el_28, '\n', null);
        this._text_35 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_36 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_36, 'class', 'stream-section');
        this._text_37 = this.renderer.createText(this._el_36, '\n  ', null);
        this._el_38 = this.renderer.createElement(this._el_36, 'h4', null);
        this._text_39 = this.renderer.createText(this._el_38, 'ForkJoined Streams', null);
        this._text_40 = this.renderer.createText(this._el_36, '\n  ', null);
        this._anchor_41 = this.renderer.createTemplateAnchor(this._el_36, null);
        this._appEl_41 = new import2.AppElement(41, 36, this, this._anchor_41);
        this._TemplateRef_41_5 = new import11.TemplateRef_(this._appEl_41, viewFactory_RxJsStreams3);
        this._NgFor_41_6 = new import10.NgFor(this._appEl_41.vcRef, this._TemplateRef_41_5, this.parentInjector.get(import12.IterableDiffers), this.ref);
        this._text_42 = this.renderer.createText(this._el_36, '\n', null);
        this._text_43 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_44 = this.renderer.createElement(parentRenderNode, 'br', null);
        this._text_45 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_46 = this.renderer.createElement(parentRenderNode, 'div', null);
        this._text_47 = this.renderer.createText(this._el_46, '\n  ', null);
        this._el_48 = this.renderer.createElement(this._el_46, 'h4', null);
        this._text_49 = this.renderer.createText(this._el_48, 'Flatmapped Streams', null);
        this._text_50 = this.renderer.createText(this._el_46, '\n  ', null);
        this._el_51 = this.renderer.createElement(this._el_46, 'div', null);
        this._text_52 = this.renderer.createText(this._el_51, '', null);
        this._text_53 = this.renderer.createText(this._el_46, '\n', null);
        this._text_54 = this.renderer.createText(parentRenderNode, '\n\n', null);
        var disposable_0 = this.renderer.listen(this._el_8, 'click', this.eventHandler(this._handle_click_8_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_11, 'click', this.eventHandler(this._handle_click_11_0.bind(this)));
        var disposable_2 = this.renderer.listen(this._el_14, 'click', this.eventHandler(this._handle_click_14_0.bind(this)));
        var disposable_3 = this.renderer.listen(this._el_17, 'click', this.eventHandler(this._handle_click_17_0.bind(this)));
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._text_24,
            this._anchor_25,
            this._text_26,
            this._text_27,
            this._el_28,
            this._text_29,
            this._el_30,
            this._text_31,
            this._text_32,
            this._anchor_33,
            this._text_34,
            this._text_35,
            this._el_36,
            this._text_37,
            this._el_38,
            this._text_39,
            this._text_40,
            this._anchor_41,
            this._text_42,
            this._text_43,
            this._el_44,
            this._text_45,
            this._el_46,
            this._text_47,
            this._el_48,
            this._text_49,
            this._text_50,
            this._el_51,
            this._text_52,
            this._text_53,
            this._text_54
        ], [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3
        ], []);
        return null;
    };
    _View_RxJsStreams0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import11.TemplateRef) && (25 === requestNodeIndex))) {
            return this._TemplateRef_25_5;
        }
        if (((token === import10.NgFor) && (25 === requestNodeIndex))) {
            return this._NgFor_25_6;
        }
        if (((token === import11.TemplateRef) && (33 === requestNodeIndex))) {
            return this._TemplateRef_33_5;
        }
        if (((token === import10.NgFor) && (33 === requestNodeIndex))) {
            return this._NgFor_33_6;
        }
        if (((token === import11.TemplateRef) && (41 === requestNodeIndex))) {
            return this._TemplateRef_41_5;
        }
        if (((token === import10.NgFor) && (41 === requestNodeIndex))) {
            return this._NgFor_41_6;
        }
        return notFoundResult;
    };
    _View_RxJsStreams0.prototype.detectChangesInternal = function (throwOnChange) {
        var changes = null;
        changes = null;
        var currVal_4 = this.context.concatStream;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this._NgFor_25_6.ngForOf = currVal_4;
            if ((changes === null)) {
                (changes = {});
            }
            changes['ngForOf'] = new import7.SimpleChange(this._expr_4, currVal_4);
            this._expr_4 = currVal_4;
        }
        if ((changes !== null)) {
            this._NgFor_25_6.ngOnChanges(changes);
        }
        if (!throwOnChange) {
            this._NgFor_25_6.ngDoCheck();
        }
        changes = null;
        var currVal_5 = this.context.mergeStream;
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this._NgFor_33_6.ngForOf = currVal_5;
            if ((changes === null)) {
                (changes = {});
            }
            changes['ngForOf'] = new import7.SimpleChange(this._expr_5, currVal_5);
            this._expr_5 = currVal_5;
        }
        if ((changes !== null)) {
            this._NgFor_33_6.ngOnChanges(changes);
        }
        if (!throwOnChange) {
            this._NgFor_33_6.ngDoCheck();
        }
        changes = null;
        var currVal_6 = this.context.forkJoinStream;
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this._NgFor_41_6.ngForOf = currVal_6;
            if ((changes === null)) {
                (changes = {});
            }
            changes['ngForOf'] = new import7.SimpleChange(this._expr_6, currVal_6);
            this._expr_6 = currVal_6;
        }
        if ((changes !== null)) {
            this._NgFor_41_6.ngOnChanges(changes);
        }
        if (!throwOnChange) {
            this._NgFor_41_6.ngDoCheck();
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_7 = import4.interpolate(1, '', this.context.flatMappedStreams.msg, '');
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setText(this._text_52, currVal_7);
            this._expr_7 = currVal_7;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_RxJsStreams0.prototype._handle_click_8_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.mergeStreams() !== false);
        return (true && pd_0);
    };
    _View_RxJsStreams0.prototype._handle_click_11_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.concatStreams() !== false);
        return (true && pd_0);
    };
    _View_RxJsStreams0.prototype._handle_click_14_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.forkJoinStreams() !== false);
        return (true && pd_0);
    };
    _View_RxJsStreams0.prototype._handle_click_17_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.flatMapStreams() !== false);
        return (true && pd_0);
    };
    return _View_RxJsStreams0;
}(import1.AppView));
export function viewFactory_RxJsStreams0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_RxJsStreams === null)) {
        (renderType_RxJsStreams = viewUtils.createRenderComponentType('/Users/tor/Development/angular-2-samples/components/rxjs-streams/rxjs-streams.html', 0, import8.ViewEncapsulation.None, styles_RxJsStreams, {}));
    }
    return new _View_RxJsStreams0(viewUtils, parentInjector, declarationEl);
}
var _View_RxJsStreams1 = (function (_super) {
    __extends(_View_RxJsStreams1, _super);
    function _View_RxJsStreams1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_RxJsStreams1, renderType_RxJsStreams, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_RxJsStreams1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'div', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'floatLeft');
        this._NgClass_2_3 = new import13.NgClass(this.parent.parentInjector.get(import12.IterableDiffers), this.parent.parentInjector.get(import14.KeyValueDiffers), new import15.ElementRef(this._el_2), this.renderer);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n  ', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._map_0 = import4.pureProxy2(function (p0, p1) {
            return {
                stream1: p0,
                stream2: p1
            };
        });
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4
        ], [], []);
        return null;
    };
    _View_RxJsStreams1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import13.NgClass) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) {
            return this._NgClass_2_3;
        }
        return notFoundResult;
    };
    _View_RxJsStreams1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0 = 'floatLeft';
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._NgClass_2_3.klass = currVal_0;
            this._expr_0 = currVal_0;
        }
        var currVal_1 = this._map_0((this.context.$implicit.source === 1), (this.context.$implicit.source === 2));
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this._NgClass_2_3.ngClass = currVal_1;
            this._expr_1 = currVal_1;
        }
        if (!throwOnChange) {
            this._NgClass_2_3.ngDoCheck();
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_2 = import4.interpolate(1, '', this.context.$implicit.value, '');
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_3, currVal_2);
            this._expr_2 = currVal_2;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_RxJsStreams1;
}(import1.AppView));
function viewFactory_RxJsStreams1(viewUtils, parentInjector, declarationEl) {
    return new _View_RxJsStreams1(viewUtils, parentInjector, declarationEl);
}
var _View_RxJsStreams2 = (function (_super) {
    __extends(_View_RxJsStreams2, _super);
    function _View_RxJsStreams2(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_RxJsStreams2, renderType_RxJsStreams, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_RxJsStreams2.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'div', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'floatLeft');
        this._NgClass_2_3 = new import13.NgClass(this.parent.parentInjector.get(import12.IterableDiffers), this.parent.parentInjector.get(import14.KeyValueDiffers), new import15.ElementRef(this._el_2), this.renderer);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n  ', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._map_0 = import4.pureProxy2(function (p0, p1) {
            return {
                stream1: p0,
                stream2: p1
            };
        });
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4
        ], [], []);
        return null;
    };
    _View_RxJsStreams2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import13.NgClass) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) {
            return this._NgClass_2_3;
        }
        return notFoundResult;
    };
    _View_RxJsStreams2.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0 = 'floatLeft';
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._NgClass_2_3.klass = currVal_0;
            this._expr_0 = currVal_0;
        }
        var currVal_1 = this._map_0((this.context.$implicit.source === 1), (this.context.$implicit.source === 2));
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this._NgClass_2_3.ngClass = currVal_1;
            this._expr_1 = currVal_1;
        }
        if (!throwOnChange) {
            this._NgClass_2_3.ngDoCheck();
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_2 = import4.interpolate(1, '', this.context.$implicit.value, '');
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_3, currVal_2);
            this._expr_2 = currVal_2;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_RxJsStreams2;
}(import1.AppView));
function viewFactory_RxJsStreams2(viewUtils, parentInjector, declarationEl) {
    return new _View_RxJsStreams2(viewUtils, parentInjector, declarationEl);
}
var _View_RxJsStreams3 = (function (_super) {
    __extends(_View_RxJsStreams3, _super);
    function _View_RxJsStreams3(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_RxJsStreams3, renderType_RxJsStreams, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_RxJsStreams3.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'div', null);
        this._NgClass_2_3 = new import13.NgClass(this.parent.parentInjector.get(import12.IterableDiffers), this.parent.parentInjector.get(import14.KeyValueDiffers), new import15.ElementRef(this._el_2), this.renderer);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n  ', null);
        this._map_0 = import4.pureProxy2(function (p0, p1) {
            return {
                stream1: p0,
                stream2: p1
            };
        });
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4
        ], [], []);
        return null;
    };
    _View_RxJsStreams3.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import13.NgClass) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) {
            return this._NgClass_2_3;
        }
        return notFoundResult;
    };
    _View_RxJsStreams3.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0 = this._map_0((this.context.$implicit.source === 1), (this.context.$implicit.source === 2));
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._NgClass_2_3.ngClass = currVal_0;
            this._expr_0 = currVal_0;
        }
        if (!throwOnChange) {
            this._NgClass_2_3.ngDoCheck();
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_1 = import4.interpolate(1, '', this.context.$implicit.value, '');
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setText(this._text_3, currVal_1);
            this._expr_1 = currVal_1;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_RxJsStreams3;
}(import1.AppView));
function viewFactory_RxJsStreams3(viewUtils, parentInjector, declarationEl) {
    return new _View_RxJsStreams3(viewUtils, parentInjector, declarationEl);
}
