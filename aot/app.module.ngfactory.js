var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '@angular/core';
import * as import1 from '../app.module';
import * as import2 from '@angular/common';
import * as import3 from '@angular/platform-browser';
import * as import4 from '@angular/forms';
import * as import5 from '@angular/router';
import * as import6 from '@angular/http';
import * as import7 from '../components/dependency-injection/address-book-title-service';
import * as import8 from './components/about/about.ngfactory';
import * as import9 from './demo-page.ngfactory';
import * as import10 from './components/spreadsheet/spreadsheet.ngfactory';
import * as import11 from './components/jquery-integration/jquery-integration.ngfactory';
import * as import12 from './components/react-integration/angular-2-host.ngfactory';
import * as import13 from './components/algorithms/algorithms.ngfactory';
import * as import14 from './components/algorithms/graph/graph.ngfactory';
import * as import15 from './components/pub-sub/pub-sub.ngfactory';
import * as import16 from './components/text-editor/text-editor.ngfactory';
import * as import17 from './components/dependency-injection/address-book.ngfactory';
import * as import18 from './components/http/http.ngfactory';
import * as import19 from './components/tree-view/tree-view-demo.ngfactory';
import * as import20 from './components/grid/grid-demo.ngfactory';
import * as import21 from './components/input-controls/input-controls.ngfactory';
import * as import22 from './components/contact-list/contact-list.ngfactory';
import * as import23 from './components/bound-textbox/bound-textbox.ngfactory';
import * as import24 from './components/non-bindable/non-bindable.ngfactory';
import * as import25 from './components/address-form/address-form.ngfactory';
import * as import26 from './components/change-detection/comment-demo.ngfactory';
import * as import27 from './components/access-child-components/parent.ngfactory';
import * as import28 from './components/survey/survey-demo.ngfactory';
import * as import29 from './components/log-tail/log-demo.ngfactory';
import * as import30 from './components/input-output/input-output-demo.ngfactory';
import * as import31 from './components/rxjs-streams/rxjs-streams.ngfactory';
import * as import32 from './components/rxjs-caching/caching-demo.ngfactory';
import * as import33 from './components/rxjs-buffering/rxjs-buffering.ngfactory';
import * as import34 from './components/lazy-loaded-tree-view/country-demo.ngfactory';
import * as import35 from './components/algorithms/graph/edge.ngfactory';
import * as import36 from './app.component.ngfactory';
import * as import37 from '../components/about/about';
import * as import38 from '../demo-page';
import * as import39 from '../components/spreadsheet/spreadsheet';
import * as import40 from '../components/jquery-integration/jquery-integration';
import * as import41 from '../components/react-integration/angular-2-host';
import * as import42 from '../components/algorithms/algorithms';
import * as import43 from '../components/algorithms/graph/graph';
import * as import44 from '../components/pub-sub/pub-sub';
import * as import45 from '../components/text-editor/text-editor';
import * as import46 from '../components/dependency-injection/address-book';
import * as import47 from '../components/http/http';
import * as import48 from '../components/tree-view/tree-view-demo';
import * as import49 from '../components/grid/grid-demo';
import * as import50 from '../components/input-controls/input-controls';
import * as import51 from '../components/contact-list/contact-list';
import * as import52 from '../components/bound-textbox/bound-textbox';
import * as import53 from '../components/non-bindable/non-bindable';
import * as import54 from '../components/address-form/address-form';
import * as import55 from '../components/change-detection/comment-demo';
import * as import56 from '../components/access-child-components/parent';
import * as import57 from '../components/survey/survey-demo';
import * as import58 from '../components/log-tail/log-demo';
import * as import59 from '../components/input-output/input-output-demo';
import * as import60 from '../components/rxjs-streams/rxjs-streams';
import * as import61 from '../components/rxjs-caching/caching-demo';
import * as import62 from '../components/rxjs-buffering/rxjs-buffering';
import * as import63 from '../components/lazy-loaded-tree-view/country-demo';
var AppModuleInjector = (function (_super) {
    __extends(AppModuleInjector, _super);
    function AppModuleInjector(parent) {
        return _super.call(this, parent, [
            import8.AboutNgFactory,
            import9.DemoPageNgFactory,
            import10.SpreadsheetNgFactory,
            import11.JqueryIntegrationNgFactory,
            import12.Angular2HostNgFactory,
            import13.AlgorithmsNgFactory,
            import14.GraphNgFactory,
            import15.PubSubNgFactory,
            import16.TextEditorNgFactory,
            import17.AddressBookNgFactory,
            import18.HttpSampleNgFactory,
            import19.TreeViewDemoNgFactory,
            import20.GridDemoNgFactory,
            import21.InputControlsNgFactory,
            import22.ContactListNgFactory,
            import23.BoundTextboxNgFactory,
            import24.IgnoreBindingsNgFactory,
            import25.AddressFormNgFactory,
            import26.CommentDemoNgFactory,
            import27.ParentNgFactory,
            import28.SurveyDemoNgFactory,
            import29.LogDemoNgFactory,
            import30.InputOutputDemoNgFactory,
            import31.RxJsStreamsNgFactory,
            import32.CachingDemoNgFactory,
            import33.RxJsBufferingNgFactory,
            import34.CountryDemoNgFactory,
            import35.EdgeNgFactory,
            import36.AppComponentNgFactory
        ], [import36.AppComponentNgFactory]) || this;
    }
    Object.defineProperty(AppModuleInjector.prototype, "_LOCALE_ID_10", {
        get: function () {
            if ((this.__LOCALE_ID_10 == null)) {
                (this.__LOCALE_ID_10 = import0.ɵo(this.parent.get(import0.LOCALE_ID, null)));
            }
            return this.__LOCALE_ID_10;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgLocalization_11", {
        get: function () {
            if ((this.__NgLocalization_11 == null)) {
                (this.__NgLocalization_11 = new import2.NgLocaleLocalization(this._LOCALE_ID_10));
            }
            return this.__NgLocalization_11;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ApplicationRef_17", {
        get: function () {
            if ((this.__ApplicationRef_17 == null)) {
                (this.__ApplicationRef_17 = this._ɵf_16);
            }
            return this.__ApplicationRef_17;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Compiler_18", {
        get: function () {
            if ((this.__Compiler_18 == null)) {
                (this.__Compiler_18 = new import0.Compiler());
            }
            return this.__Compiler_18;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_ID_19", {
        get: function () {
            if ((this.__APP_ID_19 == null)) {
                (this.__APP_ID_19 = import0.ɵg());
            }
            return this.__APP_ID_19;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_HAMMER_GESTURE_CONFIG_20", {
        get: function () {
            if ((this.__HAMMER_GESTURE_CONFIG_20 == null)) {
                (this.__HAMMER_GESTURE_CONFIG_20 = new import3.HammerGestureConfig());
            }
            return this.__HAMMER_GESTURE_CONFIG_20;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EVENT_MANAGER_PLUGINS_21", {
        get: function () {
            if ((this.__EVENT_MANAGER_PLUGINS_21 == null)) {
                (this.__EVENT_MANAGER_PLUGINS_21 = [
                    new import3.ɵDomEventsPlugin(this.parent.get(import3.DOCUMENT)),
                    new import3.ɵKeyEventsPlugin(this.parent.get(import3.DOCUMENT)),
                    new import3.ɵHammerGesturesPlugin(this.parent.get(import3.DOCUMENT), this._HAMMER_GESTURE_CONFIG_20)
                ]);
            }
            return this.__EVENT_MANAGER_PLUGINS_21;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EventManager_22", {
        get: function () {
            if ((this.__EventManager_22 == null)) {
                (this.__EventManager_22 = new import3.EventManager(this._EVENT_MANAGER_PLUGINS_21, this.parent.get(import0.NgZone)));
            }
            return this.__EventManager_22;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AnimationDriver_24", {
        get: function () {
            if ((this.__AnimationDriver_24 == null)) {
                (this.__AnimationDriver_24 = import3.ɵc());
            }
            return this.__AnimationDriver_24;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_\u0275DomRootRenderer_25", {
        get: function () {
            if ((this.__ɵDomRootRenderer_25 == null)) {
                (this.__ɵDomRootRenderer_25 = new import3.ɵDomRootRenderer_(this.parent.get(import3.DOCUMENT), this._EventManager_22, this._ɵDomSharedStylesHost_23, this._AnimationDriver_24, this._APP_ID_19));
            }
            return this.__ɵDomRootRenderer_25;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgProbeToken_26", {
        get: function () {
            if ((this.__NgProbeToken_26 == null)) {
                (this.__NgProbeToken_26 = [import5.ɵb()]);
            }
            return this.__NgProbeToken_26;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RootRenderer_27", {
        get: function () {
            if ((this.__RootRenderer_27 == null)) {
                (this.__RootRenderer_27 = import3.ɵd(this._ɵDomRootRenderer_25, this.parent.get(import3.NgProbeToken, null), this._NgProbeToken_26));
            }
            return this.__RootRenderer_27;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSanitizer_28", {
        get: function () {
            if ((this.__DomSanitizer_28 == null)) {
                (this.__DomSanitizer_28 = new import3.ɵf(this.parent.get(import3.DOCUMENT)));
            }
            return this.__DomSanitizer_28;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Sanitizer_29", {
        get: function () {
            if ((this.__Sanitizer_29 == null)) {
                (this.__Sanitizer_29 = this._DomSanitizer_28);
            }
            return this.__Sanitizer_29;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_\u0275z_30", {
        get: function () {
            if ((this.__ɵz_30 == null)) {
                (this.__ɵz_30 = new import0.ɵz(this.parent.get(import0.NgZone)));
            }
            return this.__ɵz_30;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_\u0275ViewUtils_31", {
        get: function () {
            if ((this.__ɵViewUtils_31 == null)) {
                (this.__ɵViewUtils_31 = new import0.ɵViewUtils(this._RootRenderer_27, this._Sanitizer_29, this._ɵz_30));
            }
            return this.__ɵViewUtils_31;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_IterableDiffers_32", {
        get: function () {
            if ((this.__IterableDiffers_32 == null)) {
                (this.__IterableDiffers_32 = import0.ɵm());
            }
            return this.__IterableDiffers_32;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_KeyValueDiffers_33", {
        get: function () {
            if ((this.__KeyValueDiffers_33 == null)) {
                (this.__KeyValueDiffers_33 = import0.ɵn());
            }
            return this.__KeyValueDiffers_33;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_\u0275DomRendererFactoryV2_34", {
        get: function () {
            if ((this.__ɵDomRendererFactoryV2_34 == null)) {
                (this.__ɵDomRendererFactoryV2_34 = new import3.ɵDomRendererFactoryV2(this._EventManager_22, this._ɵDomSharedStylesHost_23));
            }
            return this.__ɵDomRendererFactoryV2_34;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RendererFactoryV2_35", {
        get: function () {
            if ((this.__RendererFactoryV2_35 == null)) {
                (this.__RendererFactoryV2_35 = this._ɵDomRendererFactoryV2_34);
            }
            return this.__RendererFactoryV2_35;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_\u0275SharedStylesHost_36", {
        get: function () {
            if ((this.__ɵSharedStylesHost_36 == null)) {
                (this.__ɵSharedStylesHost_36 = this._ɵDomSharedStylesHost_23);
            }
            return this.__ɵSharedStylesHost_36;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Meta_37", {
        get: function () {
            if ((this.__Meta_37 == null)) {
                (this.__Meta_37 = new import3.Meta(this.parent.get(import3.DOCUMENT)));
            }
            return this.__Meta_37;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Title_38", {
        get: function () {
            if ((this.__Title_38 == null)) {
                (this.__Title_38 = new import3.Title(this.parent.get(import3.DOCUMENT)));
            }
            return this.__Title_38;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_FormBuilder_39", {
        get: function () {
            if ((this.__FormBuilder_39 == null)) {
                (this.__FormBuilder_39 = new import4.FormBuilder());
            }
            return this.__FormBuilder_39;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_\u0275i_40", {
        get: function () {
            if ((this.__ɵi_40 == null)) {
                (this.__ɵi_40 = new import4.ɵi());
            }
            return this.__ɵi_40;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_BrowserXhr_41", {
        get: function () {
            if ((this.__BrowserXhr_41 == null)) {
                (this.__BrowserXhr_41 = new import6.BrowserXhr());
            }
            return this.__BrowserXhr_41;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ResponseOptions_42", {
        get: function () {
            if ((this.__ResponseOptions_42 == null)) {
                (this.__ResponseOptions_42 = new import6.BaseResponseOptions());
            }
            return this.__ResponseOptions_42;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XSRFStrategy_43", {
        get: function () {
            if ((this.__XSRFStrategy_43 == null)) {
                (this.__XSRFStrategy_43 = import6.ɵb());
            }
            return this.__XSRFStrategy_43;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XHRBackend_44", {
        get: function () {
            if ((this.__XHRBackend_44 == null)) {
                (this.__XHRBackend_44 = new import6.XHRBackend(this._BrowserXhr_41, this._ResponseOptions_42, this._XSRFStrategy_43));
            }
            return this.__XHRBackend_44;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RequestOptions_45", {
        get: function () {
            if ((this.__RequestOptions_45 == null)) {
                (this.__RequestOptions_45 = new import6.BaseRequestOptions());
            }
            return this.__RequestOptions_45;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Http_46", {
        get: function () {
            if ((this.__Http_46 == null)) {
                (this.__Http_46 = import6.ɵc(this._XHRBackend_44, this._RequestOptions_45));
            }
            return this.__Http_46;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_LocationStrategy_47", {
        get: function () {
            if ((this.__LocationStrategy_47 == null)) {
                (this.__LocationStrategy_47 = new import2.HashLocationStrategy(this.parent.get(import2.PlatformLocation), this.parent.get(import2.APP_BASE_HREF, null)));
            }
            return this.__LocationStrategy_47;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Location_48", {
        get: function () {
            if ((this.__Location_48 == null)) {
                (this.__Location_48 = new import2.Location(this._LocationStrategy_47));
            }
            return this.__Location_48;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_UrlSerializer_49", {
        get: function () {
            if ((this.__UrlSerializer_49 == null)) {
                (this.__UrlSerializer_49 = new import5.DefaultUrlSerializer());
            }
            return this.__UrlSerializer_49;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RouterOutletMap_50", {
        get: function () {
            if ((this.__RouterOutletMap_50 == null)) {
                (this.__RouterOutletMap_50 = new import5.RouterOutletMap());
            }
            return this.__RouterOutletMap_50;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgModuleFactoryLoader_51", {
        get: function () {
            if ((this.__NgModuleFactoryLoader_51 == null)) {
                (this.__NgModuleFactoryLoader_51 = new import0.SystemJsNgModuleLoader(this._Compiler_18, this.parent.get(import0.SystemJsNgModuleLoaderConfig, null)));
            }
            return this.__NgModuleFactoryLoader_51;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTES_52", {
        get: function () {
            if ((this.__ROUTES_52 == null)) {
                (this.__ROUTES_52 = [[
                        {
                            path: '',
                            redirectTo: '/about',
                            pathMatch: 'full'
                        },
                        {
                            path: 'about',
                            component: import37.About
                        },
                        {
                            path: 'demo',
                            component: import38.DemoPage,
                            children: [
                                {
                                    path: 'spreadsheet',
                                    component: import39.Spreadsheet
                                },
                                {
                                    path: 'jquery',
                                    component: import40.JqueryIntegration
                                },
                                {
                                    path: 'react',
                                    component: import41.Angular2Host
                                },
                                {
                                    path: 'algorithms',
                                    component: import42.Algorithms
                                },
                                {
                                    path: 'graph',
                                    component: import43.Graph
                                },
                                {
                                    path: 'pub-sub',
                                    component: import44.PubSub
                                },
                                {
                                    path: 'text-editor',
                                    component: import45.TextEditor
                                },
                                {
                                    path: 'address',
                                    component: import46.AddressBook
                                },
                                {
                                    path: 'http',
                                    component: import47.HttpSample
                                },
                                {
                                    path: 'treeview',
                                    component: import48.TreeViewDemo
                                },
                                {
                                    path: 'grid',
                                    component: import49.GridDemo
                                },
                                {
                                    path: 'input',
                                    component: import50.InputControls
                                },
                                {
                                    path: 'contact',
                                    component: import51.ContactList
                                },
                                {
                                    path: 'textbox',
                                    component: import52.BoundTextbox
                                },
                                {
                                    path: 'non-bindable',
                                    component: import53.IgnoreBindings
                                },
                                {
                                    path: 'form',
                                    component: import54.AddressForm
                                },
                                {
                                    path: 'change',
                                    component: import55.CommentDemo
                                },
                                {
                                    path: 'parent-child',
                                    component: import56.Parent
                                },
                                {
                                    path: 'survey',
                                    component: import57.SurveyDemo
                                },
                                {
                                    path: 'redux',
                                    component: import58.LogDemo
                                },
                                {
                                    path: 'iodemo',
                                    component: import59.InputOutputDemo
                                },
                                {
                                    path: 'rxjs',
                                    component: import60.RxJsStreams
                                },
                                {
                                    path: 'friends',
                                    component: import61.CachingDemo
                                },
                                {
                                    path: 'buffering',
                                    component: import62.RxJsBuffering
                                },
                                {
                                    path: 'countries',
                                    component: import63.CountryDemo
                                }
                            ]
                        }
                    ]
                ]);
            }
            return this.__ROUTES_52;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTER_CONFIGURATION_53", {
        get: function () {
            if ((this.__ROUTER_CONFIGURATION_53 == null)) {
                (this.__ROUTER_CONFIGURATION_53 = {});
            }
            return this.__ROUTER_CONFIGURATION_53;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Router_54", {
        get: function () {
            if ((this.__Router_54 == null)) {
                (this.__Router_54 = import5.ɵe(this._ApplicationRef_17, this._UrlSerializer_49, this._RouterOutletMap_50, this._Location_48, this, this._NgModuleFactoryLoader_51, this._Compiler_18, this._ROUTES_52, this._ROUTER_CONFIGURATION_53, this.parent.get(import5.UrlHandlingStrategy, null), this.parent.get(import5.RouteReuseStrategy, null)));
            }
            return this.__Router_54;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ActivatedRoute_55", {
        get: function () {
            if ((this.__ActivatedRoute_55 == null)) {
                (this.__ActivatedRoute_55 = import5.ɵf(this._Router_54));
            }
            return this.__ActivatedRoute_55;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_PreloadAllModules_59", {
        get: function () {
            if ((this.__PreloadAllModules_59 == null)) {
                (this.__PreloadAllModules_59 = new import5.PreloadAllModules());
            }
            return this.__PreloadAllModules_59;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTER_INITIALIZER_60", {
        get: function () {
            if ((this.__ROUTER_INITIALIZER_60 == null)) {
                (this.__ROUTER_INITIALIZER_60 = import5.ɵg(this._Router_54, this._ApplicationRef_17, this._RouterPreloader_58, this._ROUTER_CONFIGURATION_53));
            }
            return this.__ROUTER_INITIALIZER_60;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_BOOTSTRAP_LISTENER_61", {
        get: function () {
            if ((this.__APP_BOOTSTRAP_LISTENER_61 == null)) {
                (this.__APP_BOOTSTRAP_LISTENER_61 = [this._ROUTER_INITIALIZER_60]);
            }
            return this.__APP_BOOTSTRAP_LISTENER_61;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AddressBookTitleService_62", {
        get: function () {
            if ((this.__AddressBookTitleService_62 == null)) {
                (this.__AddressBookTitleService_62 = new import7.AddressBookTitleService());
            }
            return this.__AddressBookTitleService_62;
        },
        enumerable: true,
        configurable: true
    });
    AppModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._ApplicationModule_1 = new import0.ApplicationModule();
        this._BrowserModule_2 = new import3.BrowserModule(this.parent.get(import3.BrowserModule, null));
        this._ɵba_3 = new import4.ɵba();
        this._ReactiveFormsModule_4 = new import4.ReactiveFormsModule();
        this._ɵa_5 = import5.ɵd(this.parent.get(import5.Router, null));
        this._RouterModule_6 = new import5.RouterModule(this._ɵa_5);
        this._FormsModule_7 = new import4.FormsModule();
        this._HttpModule_8 = new import6.HttpModule();
        this._AppModule_9 = new import1.AppModule();
        this._ErrorHandler_12 = import3.ɵa();
        this._APP_INITIALIZER_13 = [import0.ɵp];
        this._ApplicationInitStatus_14 = new import0.ApplicationInitStatus(this._APP_INITIALIZER_13);
        this._Testability_15 = new import0.Testability(this.parent.get(import0.NgZone));
        this._ɵf_16 = new import0.ɵf(this.parent.get(import0.NgZone), this.parent.get(import0.ɵConsole), this, this._ErrorHandler_12, this, this._ApplicationInitStatus_14, this.parent.get(import0.TestabilityRegistry, null), this._Testability_15);
        this._ɵDomSharedStylesHost_23 = new import3.ɵDomSharedStylesHost(this.parent.get(import3.DOCUMENT));
        this._NoPreloading_56 = new import5.NoPreloading();
        this._PreloadingStrategy_57 = this._NoPreloading_56;
        this._RouterPreloader_58 = new import5.RouterPreloader(this._Router_54, this._NgModuleFactoryLoader_51, this._Compiler_18, this, this._PreloadingStrategy_57);
        return this._AppModule_9;
    };
    AppModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import0.ApplicationModule)) {
            return this._ApplicationModule_1;
        }
        if ((token === import3.BrowserModule)) {
            return this._BrowserModule_2;
        }
        if ((token === import4.ɵba)) {
            return this._ɵba_3;
        }
        if ((token === import4.ReactiveFormsModule)) {
            return this._ReactiveFormsModule_4;
        }
        if ((token === import5.ɵa)) {
            return this._ɵa_5;
        }
        if ((token === import5.RouterModule)) {
            return this._RouterModule_6;
        }
        if ((token === import4.FormsModule)) {
            return this._FormsModule_7;
        }
        if ((token === import6.HttpModule)) {
            return this._HttpModule_8;
        }
        if ((token === import1.AppModule)) {
            return this._AppModule_9;
        }
        if ((token === import0.LOCALE_ID)) {
            return this._LOCALE_ID_10;
        }
        if ((token === import2.NgLocalization)) {
            return this._NgLocalization_11;
        }
        if ((token === import0.ErrorHandler)) {
            return this._ErrorHandler_12;
        }
        if ((token === import0.APP_INITIALIZER)) {
            return this._APP_INITIALIZER_13;
        }
        if ((token === import0.ApplicationInitStatus)) {
            return this._ApplicationInitStatus_14;
        }
        if ((token === import0.Testability)) {
            return this._Testability_15;
        }
        if ((token === import0.ɵf)) {
            return this._ɵf_16;
        }
        if ((token === import0.ApplicationRef)) {
            return this._ApplicationRef_17;
        }
        if ((token === import0.Compiler)) {
            return this._Compiler_18;
        }
        if ((token === import0.APP_ID)) {
            return this._APP_ID_19;
        }
        if ((token === import3.HAMMER_GESTURE_CONFIG)) {
            return this._HAMMER_GESTURE_CONFIG_20;
        }
        if ((token === import3.EVENT_MANAGER_PLUGINS)) {
            return this._EVENT_MANAGER_PLUGINS_21;
        }
        if ((token === import3.EventManager)) {
            return this._EventManager_22;
        }
        if ((token === import3.ɵDomSharedStylesHost)) {
            return this._ɵDomSharedStylesHost_23;
        }
        if ((token === import3.AnimationDriver)) {
            return this._AnimationDriver_24;
        }
        if ((token === import3.ɵDomRootRenderer)) {
            return this._ɵDomRootRenderer_25;
        }
        if ((token === import0.NgProbeToken)) {
            return this._NgProbeToken_26;
        }
        if ((token === import0.RootRenderer)) {
            return this._RootRenderer_27;
        }
        if ((token === import3.DomSanitizer)) {
            return this._DomSanitizer_28;
        }
        if ((token === import0.Sanitizer)) {
            return this._Sanitizer_29;
        }
        if ((token === import0.ɵz)) {
            return this._ɵz_30;
        }
        if ((token === import0.ɵViewUtils)) {
            return this._ɵViewUtils_31;
        }
        if ((token === import0.IterableDiffers)) {
            return this._IterableDiffers_32;
        }
        if ((token === import0.KeyValueDiffers)) {
            return this._KeyValueDiffers_33;
        }
        if ((token === import3.ɵDomRendererFactoryV2)) {
            return this._ɵDomRendererFactoryV2_34;
        }
        if ((token === import0.RendererFactoryV2)) {
            return this._RendererFactoryV2_35;
        }
        if ((token === import3.ɵSharedStylesHost)) {
            return this._ɵSharedStylesHost_36;
        }
        if ((token === import3.Meta)) {
            return this._Meta_37;
        }
        if ((token === import3.Title)) {
            return this._Title_38;
        }
        if ((token === import4.FormBuilder)) {
            return this._FormBuilder_39;
        }
        if ((token === import4.ɵi)) {
            return this._ɵi_40;
        }
        if ((token === import6.BrowserXhr)) {
            return this._BrowserXhr_41;
        }
        if ((token === import6.ResponseOptions)) {
            return this._ResponseOptions_42;
        }
        if ((token === import6.XSRFStrategy)) {
            return this._XSRFStrategy_43;
        }
        if ((token === import6.XHRBackend)) {
            return this._XHRBackend_44;
        }
        if ((token === import6.RequestOptions)) {
            return this._RequestOptions_45;
        }
        if ((token === import6.Http)) {
            return this._Http_46;
        }
        if ((token === import2.LocationStrategy)) {
            return this._LocationStrategy_47;
        }
        if ((token === import2.Location)) {
            return this._Location_48;
        }
        if ((token === import5.UrlSerializer)) {
            return this._UrlSerializer_49;
        }
        if ((token === import5.RouterOutletMap)) {
            return this._RouterOutletMap_50;
        }
        if ((token === import0.NgModuleFactoryLoader)) {
            return this._NgModuleFactoryLoader_51;
        }
        if ((token === import5.ROUTES)) {
            return this._ROUTES_52;
        }
        if ((token === import5.ROUTER_CONFIGURATION)) {
            return this._ROUTER_CONFIGURATION_53;
        }
        if ((token === import5.Router)) {
            return this._Router_54;
        }
        if ((token === import5.ActivatedRoute)) {
            return this._ActivatedRoute_55;
        }
        if ((token === import5.NoPreloading)) {
            return this._NoPreloading_56;
        }
        if ((token === import5.PreloadingStrategy)) {
            return this._PreloadingStrategy_57;
        }
        if ((token === import5.RouterPreloader)) {
            return this._RouterPreloader_58;
        }
        if ((token === import5.PreloadAllModules)) {
            return this._PreloadAllModules_59;
        }
        if ((token === import5.ROUTER_INITIALIZER)) {
            return this._ROUTER_INITIALIZER_60;
        }
        if ((token === import0.APP_BOOTSTRAP_LISTENER)) {
            return this._APP_BOOTSTRAP_LISTENER_61;
        }
        if ((token === import7.AddressBookTitleService)) {
            return this._AddressBookTitleService_62;
        }
        return notFoundResult;
    };
    AppModuleInjector.prototype.destroyInternal = function () {
        this._ɵf_16.ngOnDestroy();
        this._ɵDomSharedStylesHost_23.ngOnDestroy();
        this._RouterPreloader_58.ngOnDestroy();
    };
    return AppModuleInjector;
}(import0.ɵNgModuleInjector));
export var AppModuleNgFactory = new import0.NgModuleFactory(AppModuleInjector, import1.AppModule);
