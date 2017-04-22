var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '@angular/core';
import * as import1 from '../app.module';
import * as import2 from '@angular/common';
import * as import3 from '@angular/router';
import * as import4 from '@angular/platform-browser';
import * as import5 from '@angular/forms';
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
    Object.defineProperty(AppModuleInjector.prototype, "_LOCALE_ID_26", {
        get: function () {
            if ((this.__LOCALE_ID_26 == null)) {
                (this.__LOCALE_ID_26 = import0.ɵn(this.parent.get(import0.LOCALE_ID, null)));
            }
            return this.__LOCALE_ID_26;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgLocalization_27", {
        get: function () {
            if ((this.__NgLocalization_27 == null)) {
                (this.__NgLocalization_27 = new import2.NgLocaleLocalization(this._LOCALE_ID_26));
            }
            return this.__NgLocalization_27;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_ID_28", {
        get: function () {
            if ((this.__APP_ID_28 == null)) {
                (this.__APP_ID_28 = import0.ɵg());
            }
            return this.__APP_ID_28;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_IterableDiffers_29", {
        get: function () {
            if ((this.__IterableDiffers_29 == null)) {
                (this.__IterableDiffers_29 = import0.ɵl());
            }
            return this.__IterableDiffers_29;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_KeyValueDiffers_30", {
        get: function () {
            if ((this.__KeyValueDiffers_30 == null)) {
                (this.__KeyValueDiffers_30 = import0.ɵm());
            }
            return this.__KeyValueDiffers_30;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSanitizer_31", {
        get: function () {
            if ((this.__DomSanitizer_31 == null)) {
                (this.__DomSanitizer_31 = new import4.ɵe(this.parent.get(import4.DOCUMENT)));
            }
            return this.__DomSanitizer_31;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Sanitizer_32", {
        get: function () {
            if ((this.__Sanitizer_32 == null)) {
                (this.__Sanitizer_32 = this._DomSanitizer_31);
            }
            return this.__Sanitizer_32;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_HAMMER_GESTURE_CONFIG_33", {
        get: function () {
            if ((this.__HAMMER_GESTURE_CONFIG_33 == null)) {
                (this.__HAMMER_GESTURE_CONFIG_33 = new import4.HammerGestureConfig());
            }
            return this.__HAMMER_GESTURE_CONFIG_33;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EVENT_MANAGER_PLUGINS_34", {
        get: function () {
            if ((this.__EVENT_MANAGER_PLUGINS_34 == null)) {
                (this.__EVENT_MANAGER_PLUGINS_34 = [
                    new import4.ɵDomEventsPlugin(this.parent.get(import4.DOCUMENT)),
                    new import4.ɵKeyEventsPlugin(this.parent.get(import4.DOCUMENT)),
                    new import4.ɵHammerGesturesPlugin(this.parent.get(import4.DOCUMENT), this._HAMMER_GESTURE_CONFIG_33)
                ]);
            }
            return this.__EVENT_MANAGER_PLUGINS_34;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EventManager_35", {
        get: function () {
            if ((this.__EventManager_35 == null)) {
                (this.__EventManager_35 = new import4.EventManager(this._EVENT_MANAGER_PLUGINS_34, this.parent.get(import0.NgZone)));
            }
            return this.__EventManager_35;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_\u0275DomSharedStylesHost_36", {
        get: function () {
            if ((this.__ɵDomSharedStylesHost_36 == null)) {
                (this.__ɵDomSharedStylesHost_36 = new import4.ɵDomSharedStylesHost(this.parent.get(import4.DOCUMENT)));
            }
            return this.__ɵDomSharedStylesHost_36;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_\u0275DomRendererFactory2_37", {
        get: function () {
            if ((this.__ɵDomRendererFactory2_37 == null)) {
                (this.__ɵDomRendererFactory2_37 = new import4.ɵDomRendererFactory2(this._EventManager_35, this._ɵDomSharedStylesHost_36));
            }
            return this.__ɵDomRendererFactory2_37;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RendererFactory2_38", {
        get: function () {
            if ((this.__RendererFactory2_38 == null)) {
                (this.__RendererFactory2_38 = this._ɵDomRendererFactory2_37);
            }
            return this.__RendererFactory2_38;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_\u0275SharedStylesHost_39", {
        get: function () {
            if ((this.__ɵSharedStylesHost_39 == null)) {
                (this.__ɵSharedStylesHost_39 = this._ɵDomSharedStylesHost_36);
            }
            return this.__ɵSharedStylesHost_39;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Testability_40", {
        get: function () {
            if ((this.__Testability_40 == null)) {
                (this.__Testability_40 = new import0.Testability(this.parent.get(import0.NgZone)));
            }
            return this.__Testability_40;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Meta_41", {
        get: function () {
            if ((this.__Meta_41 == null)) {
                (this.__Meta_41 = new import4.Meta(this.parent.get(import4.DOCUMENT)));
            }
            return this.__Meta_41;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Title_42", {
        get: function () {
            if ((this.__Title_42 == null)) {
                (this.__Title_42 = new import4.Title(this.parent.get(import4.DOCUMENT)));
            }
            return this.__Title_42;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_FormBuilder_43", {
        get: function () {
            if ((this.__FormBuilder_43 == null)) {
                (this.__FormBuilder_43 = new import5.FormBuilder());
            }
            return this.__FormBuilder_43;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_\u0275i_44", {
        get: function () {
            if ((this.__ɵi_44 == null)) {
                (this.__ɵi_44 = new import5.ɵi());
            }
            return this.__ɵi_44;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_BrowserXhr_45", {
        get: function () {
            if ((this.__BrowserXhr_45 == null)) {
                (this.__BrowserXhr_45 = new import6.BrowserXhr());
            }
            return this.__BrowserXhr_45;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ResponseOptions_46", {
        get: function () {
            if ((this.__ResponseOptions_46 == null)) {
                (this.__ResponseOptions_46 = new import6.BaseResponseOptions());
            }
            return this.__ResponseOptions_46;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XSRFStrategy_47", {
        get: function () {
            if ((this.__XSRFStrategy_47 == null)) {
                (this.__XSRFStrategy_47 = import6.ɵb());
            }
            return this.__XSRFStrategy_47;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XHRBackend_48", {
        get: function () {
            if ((this.__XHRBackend_48 == null)) {
                (this.__XHRBackend_48 = new import6.XHRBackend(this._BrowserXhr_45, this._ResponseOptions_46, this._XSRFStrategy_47));
            }
            return this.__XHRBackend_48;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RequestOptions_49", {
        get: function () {
            if ((this.__RequestOptions_49 == null)) {
                (this.__RequestOptions_49 = new import6.BaseRequestOptions());
            }
            return this.__RequestOptions_49;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Http_50", {
        get: function () {
            if ((this.__Http_50 == null)) {
                (this.__Http_50 = import6.ɵc(this._XHRBackend_48, this._RequestOptions_49));
            }
            return this.__Http_50;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ActivatedRoute_51", {
        get: function () {
            if ((this.__ActivatedRoute_51 == null)) {
                (this.__ActivatedRoute_51 = import3.ɵf(this._Router_21));
            }
            return this.__ActivatedRoute_51;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NoPreloading_52", {
        get: function () {
            if ((this.__NoPreloading_52 == null)) {
                (this.__NoPreloading_52 = new import3.NoPreloading());
            }
            return this.__NoPreloading_52;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_PreloadingStrategy_53", {
        get: function () {
            if ((this.__PreloadingStrategy_53 == null)) {
                (this.__PreloadingStrategy_53 = this._NoPreloading_52);
            }
            return this.__PreloadingStrategy_53;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RouterPreloader_54", {
        get: function () {
            if ((this.__RouterPreloader_54 == null)) {
                (this.__RouterPreloader_54 = new import3.RouterPreloader(this._Router_21, this._NgModuleFactoryLoader_18, this._Compiler_17, this, this._PreloadingStrategy_53));
            }
            return this.__RouterPreloader_54;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_PreloadAllModules_55", {
        get: function () {
            if ((this.__PreloadAllModules_55 == null)) {
                (this.__PreloadAllModules_55 = new import3.PreloadAllModules());
            }
            return this.__PreloadAllModules_55;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTER_INITIALIZER_56", {
        get: function () {
            if ((this.__ROUTER_INITIALIZER_56 == null)) {
                (this.__ROUTER_INITIALIZER_56 = import3.ɵi(this._ɵg_3));
            }
            return this.__ROUTER_INITIALIZER_56;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_BOOTSTRAP_LISTENER_57", {
        get: function () {
            if ((this.__APP_BOOTSTRAP_LISTENER_57 == null)) {
                (this.__APP_BOOTSTRAP_LISTENER_57 = [this._ROUTER_INITIALIZER_56]);
            }
            return this.__APP_BOOTSTRAP_LISTENER_57;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AddressBookTitleService_58", {
        get: function () {
            if ((this.__AddressBookTitleService_58 == null)) {
                (this.__AddressBookTitleService_58 = new import7.AddressBookTitleService());
            }
            return this.__AddressBookTitleService_58;
        },
        enumerable: true,
        configurable: true
    });
    AppModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._ErrorHandler_1 = import4.ɵa();
        this._NgProbeToken_2 = [import3.ɵb()];
        this._ɵg_3 = new import3.ɵg(this);
        this._APP_INITIALIZER_4 = [
            import0.ɵo,
            import4.ɵc(this.parent.get(import4.NgProbeToken, null), this._NgProbeToken_2),
            import3.ɵh(this._ɵg_3)
        ];
        this._ApplicationInitStatus_5 = new import0.ApplicationInitStatus(this._APP_INITIALIZER_4);
        this._ɵf_6 = new import0.ɵf(this.parent.get(import0.NgZone), this.parent.get(import0.ɵConsole), this, this._ErrorHandler_1, this.componentFactoryResolver, this._ApplicationInitStatus_5);
        this._ApplicationRef_7 = this._ɵf_6;
        this._ApplicationModule_8 = new import0.ApplicationModule(this._ApplicationRef_7);
        this._BrowserModule_9 = new import4.BrowserModule(this.parent.get(import4.BrowserModule, null));
        this._ɵba_10 = new import5.ɵba();
        this._ReactiveFormsModule_11 = new import5.ReactiveFormsModule();
        this._ɵa_12 = import3.ɵd(this.parent.get(import3.Router, null));
        this._UrlSerializer_13 = new import3.DefaultUrlSerializer();
        this._RouterOutletMap_14 = new import3.RouterOutletMap();
        this._LocationStrategy_15 = new import2.HashLocationStrategy(this.parent.get(import2.PlatformLocation), this.parent.get(import2.APP_BASE_HREF, null));
        this._Location_16 = new import2.Location(this._LocationStrategy_15);
        this._Compiler_17 = new import0.Compiler();
        this._NgModuleFactoryLoader_18 = new import0.SystemJsNgModuleLoader(this._Compiler_17, this.parent.get(import0.SystemJsNgModuleLoaderConfig, null));
        this._ROUTES_19 = [[
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
        ];
        this._ROUTER_CONFIGURATION_20 = {};
        this._Router_21 = import3.ɵe(this._ApplicationRef_7, this._UrlSerializer_13, this._RouterOutletMap_14, this._Location_16, this, this._NgModuleFactoryLoader_18, this._Compiler_17, this._ROUTES_19, this._ROUTER_CONFIGURATION_20, this.parent.get(import3.UrlHandlingStrategy, null), this.parent.get(import3.RouteReuseStrategy, null));
        this._RouterModule_22 = new import3.RouterModule(this._ɵa_12, this._Router_21);
        this._FormsModule_23 = new import5.FormsModule();
        this._HttpModule_24 = new import6.HttpModule();
        this._AppModule_25 = new import1.AppModule();
        return this._AppModule_25;
    };
    AppModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import0.ErrorHandler)) {
            return this._ErrorHandler_1;
        }
        if ((token === import0.NgProbeToken)) {
            return this._NgProbeToken_2;
        }
        if ((token === import3.ɵg)) {
            return this._ɵg_3;
        }
        if ((token === import0.APP_INITIALIZER)) {
            return this._APP_INITIALIZER_4;
        }
        if ((token === import0.ApplicationInitStatus)) {
            return this._ApplicationInitStatus_5;
        }
        if ((token === import0.ɵf)) {
            return this._ɵf_6;
        }
        if ((token === import0.ApplicationRef)) {
            return this._ApplicationRef_7;
        }
        if ((token === import0.ApplicationModule)) {
            return this._ApplicationModule_8;
        }
        if ((token === import4.BrowserModule)) {
            return this._BrowserModule_9;
        }
        if ((token === import5.ɵba)) {
            return this._ɵba_10;
        }
        if ((token === import5.ReactiveFormsModule)) {
            return this._ReactiveFormsModule_11;
        }
        if ((token === import3.ɵa)) {
            return this._ɵa_12;
        }
        if ((token === import3.UrlSerializer)) {
            return this._UrlSerializer_13;
        }
        if ((token === import3.RouterOutletMap)) {
            return this._RouterOutletMap_14;
        }
        if ((token === import2.LocationStrategy)) {
            return this._LocationStrategy_15;
        }
        if ((token === import2.Location)) {
            return this._Location_16;
        }
        if ((token === import0.Compiler)) {
            return this._Compiler_17;
        }
        if ((token === import0.NgModuleFactoryLoader)) {
            return this._NgModuleFactoryLoader_18;
        }
        if ((token === import3.ROUTES)) {
            return this._ROUTES_19;
        }
        if ((token === import3.ROUTER_CONFIGURATION)) {
            return this._ROUTER_CONFIGURATION_20;
        }
        if ((token === import3.Router)) {
            return this._Router_21;
        }
        if ((token === import3.RouterModule)) {
            return this._RouterModule_22;
        }
        if ((token === import5.FormsModule)) {
            return this._FormsModule_23;
        }
        if ((token === import6.HttpModule)) {
            return this._HttpModule_24;
        }
        if ((token === import1.AppModule)) {
            return this._AppModule_25;
        }
        if ((token === import0.LOCALE_ID)) {
            return this._LOCALE_ID_26;
        }
        if ((token === import2.NgLocalization)) {
            return this._NgLocalization_27;
        }
        if ((token === import0.APP_ID)) {
            return this._APP_ID_28;
        }
        if ((token === import0.IterableDiffers)) {
            return this._IterableDiffers_29;
        }
        if ((token === import0.KeyValueDiffers)) {
            return this._KeyValueDiffers_30;
        }
        if ((token === import4.DomSanitizer)) {
            return this._DomSanitizer_31;
        }
        if ((token === import0.Sanitizer)) {
            return this._Sanitizer_32;
        }
        if ((token === import4.HAMMER_GESTURE_CONFIG)) {
            return this._HAMMER_GESTURE_CONFIG_33;
        }
        if ((token === import4.EVENT_MANAGER_PLUGINS)) {
            return this._EVENT_MANAGER_PLUGINS_34;
        }
        if ((token === import4.EventManager)) {
            return this._EventManager_35;
        }
        if ((token === import4.ɵDomSharedStylesHost)) {
            return this._ɵDomSharedStylesHost_36;
        }
        if ((token === import4.ɵDomRendererFactory2)) {
            return this._ɵDomRendererFactory2_37;
        }
        if ((token === import0.RendererFactory2)) {
            return this._RendererFactory2_38;
        }
        if ((token === import4.ɵSharedStylesHost)) {
            return this._ɵSharedStylesHost_39;
        }
        if ((token === import0.Testability)) {
            return this._Testability_40;
        }
        if ((token === import4.Meta)) {
            return this._Meta_41;
        }
        if ((token === import4.Title)) {
            return this._Title_42;
        }
        if ((token === import5.FormBuilder)) {
            return this._FormBuilder_43;
        }
        if ((token === import5.ɵi)) {
            return this._ɵi_44;
        }
        if ((token === import6.BrowserXhr)) {
            return this._BrowserXhr_45;
        }
        if ((token === import6.ResponseOptions)) {
            return this._ResponseOptions_46;
        }
        if ((token === import6.XSRFStrategy)) {
            return this._XSRFStrategy_47;
        }
        if ((token === import6.XHRBackend)) {
            return this._XHRBackend_48;
        }
        if ((token === import6.RequestOptions)) {
            return this._RequestOptions_49;
        }
        if ((token === import6.Http)) {
            return this._Http_50;
        }
        if ((token === import3.ActivatedRoute)) {
            return this._ActivatedRoute_51;
        }
        if ((token === import3.NoPreloading)) {
            return this._NoPreloading_52;
        }
        if ((token === import3.PreloadingStrategy)) {
            return this._PreloadingStrategy_53;
        }
        if ((token === import3.RouterPreloader)) {
            return this._RouterPreloader_54;
        }
        if ((token === import3.PreloadAllModules)) {
            return this._PreloadAllModules_55;
        }
        if ((token === import3.ROUTER_INITIALIZER)) {
            return this._ROUTER_INITIALIZER_56;
        }
        if ((token === import0.APP_BOOTSTRAP_LISTENER)) {
            return this._APP_BOOTSTRAP_LISTENER_57;
        }
        if ((token === import7.AddressBookTitleService)) {
            return this._AddressBookTitleService_58;
        }
        return notFoundResult;
    };
    AppModuleInjector.prototype.destroyInternal = function () {
        this._ɵf_6.ngOnDestroy();
        (this.__ɵDomSharedStylesHost_36 && this._ɵDomSharedStylesHost_36.ngOnDestroy());
        (this.__RouterPreloader_54 && this._RouterPreloader_54.ngOnDestroy());
    };
    return AppModuleInjector;
}(import0.ɵNgModuleInjector));
export var AppModuleNgFactory = new import0.NgModuleFactory(AppModuleInjector, import1.AppModule);
