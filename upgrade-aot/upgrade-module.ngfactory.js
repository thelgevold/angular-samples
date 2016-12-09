var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../upgrade-module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/core/src/application_module';
import * as import4 from '@angular/platform-browser/src/browser';
import * as import5 from '@angular/upgrade/src/aot/upgrade_module';
import * as import6 from '@angular/forms/src/directives';
import * as import7 from '@angular/forms/src/form_providers';
import * as import8 from '@angular/common/src/localization';
import * as import9 from '@angular/core/src/application_init';
import * as import10 from '@angular/core/src/testability/testability';
import * as import11 from '@angular/core/src/application_ref';
import * as import12 from '@angular/core/src/linker/compiler';
import * as import13 from '@angular/platform-browser/src/dom/events/hammer_gestures';
import * as import14 from '@angular/platform-browser/src/dom/events/event_manager';
import * as import15 from '@angular/platform-browser/src/dom/shared_styles_host';
import * as import16 from '@angular/platform-browser/src/dom/dom_renderer';
import * as import17 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import18 from '@angular/core/src/linker/view_utils';
import * as import19 from '@angular/platform-browser/src/browser/title';
import * as import20 from '@angular/forms/src/form_builder';
import * as import21 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import23 from './components/algorithms/algorithms.ngfactory';
import * as import24 from './components/insertion-sort/insertion-sort.ngfactory';
import * as import25 from './components/survey/survey-demo.ngfactory';
import * as import26 from './components/survey/survey.ngfactory';
import * as import27 from './components/text-editor/text-editor.ngfactory';
import * as import28 from '@angular/core/src/application_tokens';
import * as import29 from '@angular/platform-browser/src/dom/events/dom_events';
import * as import30 from '@angular/platform-browser/src/dom/events/key_events';
import * as import31 from '@angular/core/src/zone/ng_zone';
import * as import32 from '@angular/platform-browser/src/dom/debug/ng_probe';
import * as import33 from '@angular/upgrade/src/aot/angular1_providers';
import * as import34 from '@angular/core/src/console';
import * as import35 from '@angular/core/src/i18n/tokens';
import * as import36 from '@angular/core/src/error_handler';
import * as import37 from '@angular/platform-browser/src/dom/dom_tokens';
import * as import38 from '@angular/platform-browser/src/dom/animation_driver';
import * as import39 from '@angular/core/src/render/api';
import * as import40 from '@angular/core/src/security';
import * as import41 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import42 from '@angular/core/src/change_detection/differs/keyvalue_differs';
var AngularModuleInjector = (function (_super) {
    __extends(AngularModuleInjector, _super);
    function AngularModuleInjector(parent) {
        _super.call(this, parent, [
            import23.AlgorithmsNgFactory,
            import24.InsertionSortNgFactory,
            import25.SurveyDemoNgFactory,
            import26.SurveyNgFactory,
            import27.TextEditorNgFactory
        ], []);
    }
    Object.defineProperty(AngularModuleInjector.prototype, "_LOCALE_ID_7", {
        get: function () {
            if ((this.__LOCALE_ID_7 == null)) {
                (this.__LOCALE_ID_7 = 'en-US');
            }
            return this.__LOCALE_ID_7;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "_NgLocalization_8", {
        get: function () {
            if ((this.__NgLocalization_8 == null)) {
                (this.__NgLocalization_8 = new import8.NgLocaleLocalization(this._LOCALE_ID_7));
            }
            return this.__NgLocalization_8;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "_ApplicationRef_13", {
        get: function () {
            if ((this.__ApplicationRef_13 == null)) {
                (this.__ApplicationRef_13 = this._ApplicationRef__12);
            }
            return this.__ApplicationRef_13;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "_Compiler_14", {
        get: function () {
            if ((this.__Compiler_14 == null)) {
                (this.__Compiler_14 = new import12.Compiler());
            }
            return this.__Compiler_14;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "_APP_ID_15", {
        get: function () {
            if ((this.__APP_ID_15 == null)) {
                (this.__APP_ID_15 = import28._appIdRandomProviderFactory());
            }
            return this.__APP_ID_15;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "_DOCUMENT_16", {
        get: function () {
            if ((this.__DOCUMENT_16 == null)) {
                (this.__DOCUMENT_16 = import4._document());
            }
            return this.__DOCUMENT_16;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "_HAMMER_GESTURE_CONFIG_17", {
        get: function () {
            if ((this.__HAMMER_GESTURE_CONFIG_17 == null)) {
                (this.__HAMMER_GESTURE_CONFIG_17 = new import13.HammerGestureConfig());
            }
            return this.__HAMMER_GESTURE_CONFIG_17;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "_EVENT_MANAGER_PLUGINS_18", {
        get: function () {
            if ((this.__EVENT_MANAGER_PLUGINS_18 == null)) {
                (this.__EVENT_MANAGER_PLUGINS_18 = [
                    new import29.DomEventsPlugin(),
                    new import30.KeyEventsPlugin(),
                    new import13.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_17)
                ]);
            }
            return this.__EVENT_MANAGER_PLUGINS_18;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "_EventManager_19", {
        get: function () {
            if ((this.__EventManager_19 == null)) {
                (this.__EventManager_19 = new import14.EventManager(this._EVENT_MANAGER_PLUGINS_18, this.parent.get(import31.NgZone)));
            }
            return this.__EventManager_19;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "_DomSharedStylesHost_20", {
        get: function () {
            if ((this.__DomSharedStylesHost_20 == null)) {
                (this.__DomSharedStylesHost_20 = new import15.DomSharedStylesHost(this._DOCUMENT_16));
            }
            return this.__DomSharedStylesHost_20;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "_AnimationDriver_21", {
        get: function () {
            if ((this.__AnimationDriver_21 == null)) {
                (this.__AnimationDriver_21 = import4._resolveDefaultAnimationDriver());
            }
            return this.__AnimationDriver_21;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "_DomRootRenderer_22", {
        get: function () {
            if ((this.__DomRootRenderer_22 == null)) {
                (this.__DomRootRenderer_22 = new import16.DomRootRenderer_(this._DOCUMENT_16, this._EventManager_19, this._DomSharedStylesHost_20, this._AnimationDriver_21, this._APP_ID_15));
            }
            return this.__DomRootRenderer_22;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "_RootRenderer_23", {
        get: function () {
            if ((this.__RootRenderer_23 == null)) {
                (this.__RootRenderer_23 = import32._createConditionalRootRenderer(this._DomRootRenderer_22, this.parent.get(import32.NgProbeToken, null), this.parent.get(import11.NgProbeToken, null)));
            }
            return this.__RootRenderer_23;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "_DomSanitizer_24", {
        get: function () {
            if ((this.__DomSanitizer_24 == null)) {
                (this.__DomSanitizer_24 = new import17.DomSanitizerImpl());
            }
            return this.__DomSanitizer_24;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "_Sanitizer_25", {
        get: function () {
            if ((this.__Sanitizer_25 == null)) {
                (this.__Sanitizer_25 = this._DomSanitizer_24);
            }
            return this.__Sanitizer_25;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "_ViewUtils_26", {
        get: function () {
            if ((this.__ViewUtils_26 == null)) {
                (this.__ViewUtils_26 = new import18.ViewUtils(this._RootRenderer_23, this._Sanitizer_25));
            }
            return this.__ViewUtils_26;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "_IterableDiffers_27", {
        get: function () {
            if ((this.__IterableDiffers_27 == null)) {
                (this.__IterableDiffers_27 = import3._iterableDiffersFactory());
            }
            return this.__IterableDiffers_27;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "_KeyValueDiffers_28", {
        get: function () {
            if ((this.__KeyValueDiffers_28 == null)) {
                (this.__KeyValueDiffers_28 = import3._keyValueDiffersFactory());
            }
            return this.__KeyValueDiffers_28;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "_SharedStylesHost_29", {
        get: function () {
            if ((this.__SharedStylesHost_29 == null)) {
                (this.__SharedStylesHost_29 = this._DomSharedStylesHost_20);
            }
            return this.__SharedStylesHost_29;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "_Title_30", {
        get: function () {
            if ((this.__Title_30 == null)) {
                (this.__Title_30 = new import19.Title());
            }
            return this.__Title_30;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "__injector_31", {
        get: function () {
            if ((this.___injector_31 == null)) {
                (this.___injector_31 = import33.injectorFactory());
            }
            return this.___injector_31;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "__rootScope_32", {
        get: function () {
            if ((this.___rootScope_32 == null)) {
                (this.___rootScope_32 = import33.rootScopeFactory(this.__injector_31));
            }
            return this.___rootScope_32;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "__compile_33", {
        get: function () {
            if ((this.___compile_33 == null)) {
                (this.___compile_33 = import33.compileFactory(this.__injector_31));
            }
            return this.___compile_33;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "__parse_34", {
        get: function () {
            if ((this.___parse_34 == null)) {
                (this.___parse_34 = import33.parseFactory(this.__injector_31));
            }
            return this.___parse_34;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "_FormBuilder_35", {
        get: function () {
            if ((this.__FormBuilder_35 == null)) {
                (this.__FormBuilder_35 = new import20.FormBuilder());
            }
            return this.__FormBuilder_35;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "_RadioControlRegistry_36", {
        get: function () {
            if ((this.__RadioControlRegistry_36 == null)) {
                (this.__RadioControlRegistry_36 = new import21.RadioControlRegistry());
            }
            return this.__RadioControlRegistry_36;
        },
        enumerable: true,
        configurable: true
    });
    AngularModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._ApplicationModule_1 = new import3.ApplicationModule();
        this._BrowserModule_2 = new import4.BrowserModule(this.parent.get(import4.BrowserModule, null));
        this._UpgradeModule_3 = new import5.UpgradeModule(this, this.parent.get(import31.NgZone));
        this._InternalFormsSharedModule_4 = new import6.InternalFormsSharedModule();
        this._ReactiveFormsModule_5 = new import7.ReactiveFormsModule();
        this._AngularModule_6 = new import1.AngularModule();
        this._ErrorHandler_9 = import4.errorHandler();
        this._ApplicationInitStatus_10 = new import9.ApplicationInitStatus(this.parent.get(import9.APP_INITIALIZER, null));
        this._Testability_11 = new import10.Testability(this.parent.get(import31.NgZone));
        this._ApplicationRef__12 = new import11.ApplicationRef_(this.parent.get(import31.NgZone), this.parent.get(import34.Console), this, this._ErrorHandler_9, this, this._ApplicationInitStatus_10, this.parent.get(import10.TestabilityRegistry, null), this._Testability_11);
        return this._AngularModule_6;
    };
    AngularModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import3.ApplicationModule)) {
            return this._ApplicationModule_1;
        }
        if ((token === import4.BrowserModule)) {
            return this._BrowserModule_2;
        }
        if ((token === import5.UpgradeModule)) {
            return this._UpgradeModule_3;
        }
        if ((token === import6.InternalFormsSharedModule)) {
            return this._InternalFormsSharedModule_4;
        }
        if ((token === import7.ReactiveFormsModule)) {
            return this._ReactiveFormsModule_5;
        }
        if ((token === import1.AngularModule)) {
            return this._AngularModule_6;
        }
        if ((token === import35.LOCALE_ID)) {
            return this._LOCALE_ID_7;
        }
        if ((token === import8.NgLocalization)) {
            return this._NgLocalization_8;
        }
        if ((token === import36.ErrorHandler)) {
            return this._ErrorHandler_9;
        }
        if ((token === import9.ApplicationInitStatus)) {
            return this._ApplicationInitStatus_10;
        }
        if ((token === import10.Testability)) {
            return this._Testability_11;
        }
        if ((token === import11.ApplicationRef_)) {
            return this._ApplicationRef__12;
        }
        if ((token === import11.ApplicationRef)) {
            return this._ApplicationRef_13;
        }
        if ((token === import12.Compiler)) {
            return this._Compiler_14;
        }
        if ((token === import28.APP_ID)) {
            return this._APP_ID_15;
        }
        if ((token === import37.DOCUMENT)) {
            return this._DOCUMENT_16;
        }
        if ((token === import13.HAMMER_GESTURE_CONFIG)) {
            return this._HAMMER_GESTURE_CONFIG_17;
        }
        if ((token === import14.EVENT_MANAGER_PLUGINS)) {
            return this._EVENT_MANAGER_PLUGINS_18;
        }
        if ((token === import14.EventManager)) {
            return this._EventManager_19;
        }
        if ((token === import15.DomSharedStylesHost)) {
            return this._DomSharedStylesHost_20;
        }
        if ((token === import38.AnimationDriver)) {
            return this._AnimationDriver_21;
        }
        if ((token === import16.DomRootRenderer)) {
            return this._DomRootRenderer_22;
        }
        if ((token === import39.RootRenderer)) {
            return this._RootRenderer_23;
        }
        if ((token === import17.DomSanitizer)) {
            return this._DomSanitizer_24;
        }
        if ((token === import40.Sanitizer)) {
            return this._Sanitizer_25;
        }
        if ((token === import18.ViewUtils)) {
            return this._ViewUtils_26;
        }
        if ((token === import41.IterableDiffers)) {
            return this._IterableDiffers_27;
        }
        if ((token === import42.KeyValueDiffers)) {
            return this._KeyValueDiffers_28;
        }
        if ((token === import15.SharedStylesHost)) {
            return this._SharedStylesHost_29;
        }
        if ((token === import19.Title)) {
            return this._Title_30;
        }
        if ((token === '$injector')) {
            return this.__injector_31;
        }
        if ((token === '$rootScope')) {
            return this.__rootScope_32;
        }
        if ((token === '$compile')) {
            return this.__compile_33;
        }
        if ((token === '$parse')) {
            return this.__parse_34;
        }
        if ((token === import20.FormBuilder)) {
            return this._FormBuilder_35;
        }
        if ((token === import21.RadioControlRegistry)) {
            return this._RadioControlRegistry_36;
        }
        return notFoundResult;
    };
    AngularModuleInjector.prototype.destroyInternal = function () {
        this._ApplicationRef__12.ngOnDestroy();
    };
    return AngularModuleInjector;
}(import0.NgModuleInjector));
export var AngularModuleNgFactory = new import0.NgModuleFactory(AngularModuleInjector, import1.AngularModule);
