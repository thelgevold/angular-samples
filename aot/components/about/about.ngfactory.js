var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../components/about/about';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '@angular/router/src/directives/router_link';
import * as import11 from '@angular/router/src/router';
import * as import12 from '@angular/router/src/router_state';
import * as import13 from '@angular/common/src/location/location_strategy';
import * as import14 from '@angular/core/src/security';
var renderType_About_Host = null;
var _View_About_Host0 = (function (_super) {
    __extends(_View_About_Host0, _super);
    function _View_About_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_About_Host0, renderType_About_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_About_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('about', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_About0(this.viewUtils, this.injector(0), this._appEl_0);
        this._About_0_4 = new import3.About();
        this._appEl_0.initComponent(this._About_0_4, [], compView_0);
        compView_0.create(this._About_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_About_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.About) && (0 === requestNodeIndex))) {
            return this._About_0_4;
        }
        return notFoundResult;
    };
    return _View_About_Host0;
}(import1.AppView));
function viewFactory_About_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_About_Host === null)) {
        (renderType_About_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_About_Host0(viewUtils, parentInjector, declarationEl);
}
export var AboutNgFactory = new import9.ComponentFactory('about', viewFactory_About_Host0, import3.About);
var styles_About = [];
var renderType_About = null;
var _View_About0 = (function (_super) {
    __extends(_View_About0, _super);
    function _View_About0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_About0, renderType_About, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_About0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'container');
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'h1', null);
        this._text_3 = this.renderer.createText(this._el_2, 'Welcome', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_5 = this.renderer.createElement(this._el_0, 'p', null);
        this._text_6 = this.renderer.createText(this._el_5, '\n        This is a live demo of my Angular 2.0 sample components.\n    ', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_8 = this.renderer.createElement(this._el_0, 'p', null);
        this._text_9 = this.renderer.createText(this._el_8, '\n        I hope you will find these ', null);
        this._el_10 = this.renderer.createElement(this._el_8, 'a', null);
        this._RouterLinkWithHref_10_3 = new import10.RouterLinkWithHref(this.parentInjector.get(import11.Router), this.parentInjector.get(import12.ActivatedRoute), this.parentInjector.get(import13.LocationStrategy));
        this._text_11 = this.renderer.createText(this._el_10, 'demos', null);
        this._text_12 = this.renderer.createText(this._el_8, ' useful and educational. Stay tuned for more progress soon.\n        Don\'t hesitate to tweet me at @helgevold with suggestions for more components.\n    ', null);
        this._text_13 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_14 = this.renderer.createElement(this._el_0, 'p', null);
        this._text_15 = this.renderer.createText(this._el_14, '\n        Click ', null);
        this._el_16 = this.renderer.createElement(this._el_14, 'a', null);
        this.renderer.setElementAttribute(this._el_16, 'href', 'http://www.syntaxsuccess.com/angular-2-articles');
        this._text_17 = this.renderer.createText(this._el_16, 'here', null);
        this._text_18 = this.renderer.createText(this._el_14, ' for a full list of my Angular 2.0 articles.\n    ', null);
        this._text_19 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_20 = this.renderer.createElement(this._el_0, 'p', null);
        this._text_21 = this.renderer.createText(this._el_20, '\n        The source code for the full set of components is available on ', null);
        this._el_22 = this.renderer.createElement(this._el_20, 'a', null);
        this.renderer.setElementAttribute(this._el_22, 'href', 'https://github.com/thelgevold/angular-2-samples');
        this._text_23 = this.renderer.createText(this._el_22, 'GitHub', null);
        this._text_24 = this.renderer.createText(this._el_20, '\n    ', null);
        this._text_25 = this.renderer.createText(this._el_0, '\n\n', null);
        var disposable_0 = this.renderer.listen(this._el_10, 'click', this.eventHandler(this._handle_click_10_0.bind(this)));
        this._arr_0 = import4.pureProxy1(function (p0) {
            return [p0];
        });
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._text_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._text_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._text_24,
            this._text_25
        ], [disposable_0], []);
        return null;
    };
    _View_About0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import10.RouterLinkWithHref) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 11)))) {
            return this._RouterLinkWithHref_10_3;
        }
        return notFoundResult;
    };
    _View_About0.prototype.detectChangesInternal = function (throwOnChange) {
        var changes = null;
        changes = null;
        var currVal_1 = this._arr_0('/Demo/Spreadsheet');
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this._RouterLinkWithHref_10_3.routerLink = currVal_1;
            if ((changes === null)) {
                (changes = {});
            }
            changes['routerLink'] = new import7.SimpleChange(this._expr_1, currVal_1);
            this._expr_1 = currVal_1;
        }
        if ((changes !== null)) {
            this._RouterLinkWithHref_10_3.ngOnChanges(changes);
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_2 = this._RouterLinkWithHref_10_3.href;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementProperty(this._el_10, 'href', this.viewUtils.sanitizer.sanitize(import14.SecurityContext.URL, currVal_2));
            this._expr_2 = currVal_2;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_About0.prototype.destroyInternal = function () {
        this._RouterLinkWithHref_10_3.ngOnDestroy();
    };
    _View_About0.prototype._handle_click_10_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._RouterLinkWithHref_10_3.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_0);
    };
    return _View_About0;
}(import1.AppView));
export function viewFactory_About0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_About === null)) {
        (renderType_About = viewUtils.createRenderComponentType('/Users/tor/Development/angular-2-samples/components/about/about.html', 0, import8.ViewEncapsulation.None, styles_About, {}));
    }
    return new _View_About0(viewUtils, parentInjector, declarationEl);
}
