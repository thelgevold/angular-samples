var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
export { ɵa as ɵa_67, UpgradeModule as UpgradeModule_68, ɵb as ɵb_69, ɵc as ɵc_70, ɵd as ɵd_71, ɵf as ɵf_72 } from '@angular/upgrade/static';
import * as import0 from '@angular/core';
import * as import1 from '../upgrade-module';
import * as import2 from '@angular/common';
import * as import3 from '@angular/platform-browser';
import * as import4 from '@angular/upgrade/static';
import * as import5 from '@angular/forms';
import * as import6 from '../upgrade-pub-sub.service';
import * as import7 from './components/algorithms/algorithms.ngfactory';
import * as import8 from './components/insertion-sort/insertion-sort.ngfactory';
import * as import9 from './components/survey/survey-demo.ngfactory';
import * as import10 from './components/survey/survey.ngfactory';
import * as import11 from './components/text-editor/text-editor.ngfactory';
import * as import12 from './message.component.ngfactory';
var AngularModuleInjector = (function (_super) {
    __extends(AngularModuleInjector, _super);
    function AngularModuleInjector(parent) {
        return _super.call(this, parent, [
            import7.AlgorithmsNgFactory,
            import8.InsertionSortNgFactory,
            import9.SurveyDemoNgFactory,
            import10.SurveyNgFactory,
            import11.TextEditorNgFactory,
            import12.MessageComponentNgFactory
        ], []) || this;
    }
    Object.defineProperty(AngularModuleInjector.prototype, "_LOCALE_ID_7", {
        get: function () {
            if ((this.__LOCALE_ID_7 == null)) {
                (this.__LOCALE_ID_7 = import0.ɵo(this.parent.get(import0.LOCALE_ID, null)));
            }
            return this.__LOCALE_ID_7;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "_NgLocalization_8", {
        get: function () {
            if ((this.__NgLocalization_8 == null)) {
                (this.__NgLocalization_8 = new import2.NgLocaleLocalization(this._LOCALE_ID_7));
            }
            return this.__NgLocalization_8;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "_ApplicationRef_14", {
        get: function () {
            if ((this.__ApplicationRef_14 == null)) {
                (this.__ApplicationRef_14 = this._ɵf_13);
            }
            return this.__ApplicationRef_14;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "_Compiler_15", {
        get: function () {
            if ((this.__Compiler_15 == null)) {
                (this.__Compiler_15 = new import0.Compiler());
            }
            return this.__Compiler_15;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "_APP_ID_16", {
        get: function () {
            if ((this.__APP_ID_16 == null)) {
                (this.__APP_ID_16 = import0.ɵg());
            }
            return this.__APP_ID_16;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "_HAMMER_GESTURE_CONFIG_17", {
        get: function () {
            if ((this.__HAMMER_GESTURE_CONFIG_17 == null)) {
                (this.__HAMMER_GESTURE_CONFIG_17 = new import3.HammerGestureConfig());
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
                    new import3.ɵDomEventsPlugin(this.parent.get(import3.DOCUMENT)),
                    new import3.ɵKeyEventsPlugin(this.parent.get(import3.DOCUMENT)),
                    new import3.ɵHammerGesturesPlugin(this.parent.get(import3.DOCUMENT), this._HAMMER_GESTURE_CONFIG_17)
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
                (this.__EventManager_19 = new import3.EventManager(this._EVENT_MANAGER_PLUGINS_18, this.parent.get(import0.NgZone)));
            }
            return this.__EventManager_19;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "_AnimationDriver_21", {
        get: function () {
            if ((this.__AnimationDriver_21 == null)) {
                (this.__AnimationDriver_21 = import3.ɵc());
            }
            return this.__AnimationDriver_21;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "_\u0275DomRootRenderer_22", {
        get: function () {
            if ((this.__ɵDomRootRenderer_22 == null)) {
                (this.__ɵDomRootRenderer_22 = new import3.ɵDomRootRenderer_(this.parent.get(import3.DOCUMENT), this._EventManager_19, this._ɵDomSharedStylesHost_20, this._AnimationDriver_21, this._APP_ID_16));
            }
            return this.__ɵDomRootRenderer_22;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "_RootRenderer_23", {
        get: function () {
            if ((this.__RootRenderer_23 == null)) {
                (this.__RootRenderer_23 = import3.ɵd(this._ɵDomRootRenderer_22, this.parent.get(import3.NgProbeToken, null), this.parent.get(import0.NgProbeToken, null)));
            }
            return this.__RootRenderer_23;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "_DomSanitizer_24", {
        get: function () {
            if ((this.__DomSanitizer_24 == null)) {
                (this.__DomSanitizer_24 = new import3.ɵf(this.parent.get(import3.DOCUMENT)));
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
    Object.defineProperty(AngularModuleInjector.prototype, "_\u0275z_26", {
        get: function () {
            if ((this.__ɵz_26 == null)) {
                (this.__ɵz_26 = new import0.ɵz(this.parent.get(import0.NgZone)));
            }
            return this.__ɵz_26;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "_\u0275ViewUtils_27", {
        get: function () {
            if ((this.__ɵViewUtils_27 == null)) {
                (this.__ɵViewUtils_27 = new import0.ɵViewUtils(this._RootRenderer_23, this._Sanitizer_25, this._ɵz_26));
            }
            return this.__ɵViewUtils_27;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "_IterableDiffers_28", {
        get: function () {
            if ((this.__IterableDiffers_28 == null)) {
                (this.__IterableDiffers_28 = import0.ɵm());
            }
            return this.__IterableDiffers_28;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "_KeyValueDiffers_29", {
        get: function () {
            if ((this.__KeyValueDiffers_29 == null)) {
                (this.__KeyValueDiffers_29 = import0.ɵn());
            }
            return this.__KeyValueDiffers_29;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "_\u0275DomRendererFactoryV2_30", {
        get: function () {
            if ((this.__ɵDomRendererFactoryV2_30 == null)) {
                (this.__ɵDomRendererFactoryV2_30 = new import3.ɵDomRendererFactoryV2(this._EventManager_19, this._ɵDomSharedStylesHost_20));
            }
            return this.__ɵDomRendererFactoryV2_30;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "_RendererFactoryV2_31", {
        get: function () {
            if ((this.__RendererFactoryV2_31 == null)) {
                (this.__RendererFactoryV2_31 = this._ɵDomRendererFactoryV2_30);
            }
            return this.__RendererFactoryV2_31;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "_\u0275SharedStylesHost_32", {
        get: function () {
            if ((this.__ɵSharedStylesHost_32 == null)) {
                (this.__ɵSharedStylesHost_32 = this._ɵDomSharedStylesHost_20);
            }
            return this.__ɵSharedStylesHost_32;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "_Meta_33", {
        get: function () {
            if ((this.__Meta_33 == null)) {
                (this.__Meta_33 = new import3.Meta(this.parent.get(import3.DOCUMENT)));
            }
            return this.__Meta_33;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "_Title_34", {
        get: function () {
            if ((this.__Title_34 == null)) {
                (this.__Title_34 = new import3.Title(this.parent.get(import3.DOCUMENT)));
            }
            return this.__Title_34;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "__injector_35", {
        get: function () {
            if ((this.___injector_35 == null)) {
                (this.___injector_35 = import4.ɵa());
            }
            return this.___injector_35;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "__rootScope_36", {
        get: function () {
            if ((this.___rootScope_36 == null)) {
                (this.___rootScope_36 = import4.ɵb(this.__injector_35));
            }
            return this.___rootScope_36;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "__compile_37", {
        get: function () {
            if ((this.___compile_37 == null)) {
                (this.___compile_37 = import4.ɵc(this.__injector_35));
            }
            return this.___compile_37;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "__parse_38", {
        get: function () {
            if ((this.___parse_38 == null)) {
                (this.___parse_38 = import4.ɵd(this.__injector_35));
            }
            return this.___parse_38;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "_\u0275f_39", {
        get: function () {
            if ((this.__ɵf_39 == null)) {
                (this.__ɵf_39 = new import4.ɵf());
            }
            return this.__ɵf_39;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "_FormBuilder_40", {
        get: function () {
            if ((this.__FormBuilder_40 == null)) {
                (this.__FormBuilder_40 = new import5.FormBuilder());
            }
            return this.__FormBuilder_40;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "_\u0275i_41", {
        get: function () {
            if ((this.__ɵi_41 == null)) {
                (this.__ɵi_41 = new import5.ɵi());
            }
            return this.__ɵi_41;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "_UpgradePubSubService_42", {
        get: function () {
            if ((this.__UpgradePubSubService_42 == null)) {
                (this.__UpgradePubSubService_42 = new import6.UpgradePubSubService());
            }
            return this.__UpgradePubSubService_42;
        },
        enumerable: true,
        configurable: true
    });
    AngularModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._ApplicationModule_1 = new import0.ApplicationModule();
        this._BrowserModule_2 = new import3.BrowserModule(this.parent.get(import3.BrowserModule, null));
        this._UpgradeModule_3 = new import4.UpgradeModule(this, this.parent.get(import0.NgZone));
        this._ɵba_4 = new import5.ɵba();
        this._ReactiveFormsModule_5 = new import5.ReactiveFormsModule();
        this._AngularModule_6 = new import1.AngularModule();
        this._ErrorHandler_9 = import3.ɵa();
        this._APP_INITIALIZER_10 = [import0.ɵp];
        this._ApplicationInitStatus_11 = new import0.ApplicationInitStatus(this._APP_INITIALIZER_10);
        this._Testability_12 = new import0.Testability(this.parent.get(import0.NgZone));
        this._ɵf_13 = new import0.ɵf(this.parent.get(import0.NgZone), this.parent.get(import0.ɵConsole), this, this._ErrorHandler_9, this, this._ApplicationInitStatus_11, this.parent.get(import0.TestabilityRegistry, null), this._Testability_12);
        this._ɵDomSharedStylesHost_20 = new import3.ɵDomSharedStylesHost(this.parent.get(import3.DOCUMENT));
        return this._AngularModule_6;
    };
    AngularModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import0.ApplicationModule)) {
            return this._ApplicationModule_1;
        }
        if ((token === import3.BrowserModule)) {
            return this._BrowserModule_2;
        }
        if ((token === import4.UpgradeModule)) {
            return this._UpgradeModule_3;
        }
        if ((token === import5.ɵba)) {
            return this._ɵba_4;
        }
        if ((token === import5.ReactiveFormsModule)) {
            return this._ReactiveFormsModule_5;
        }
        if ((token === import1.AngularModule)) {
            return this._AngularModule_6;
        }
        if ((token === import0.LOCALE_ID)) {
            return this._LOCALE_ID_7;
        }
        if ((token === import2.NgLocalization)) {
            return this._NgLocalization_8;
        }
        if ((token === import0.ErrorHandler)) {
            return this._ErrorHandler_9;
        }
        if ((token === import0.APP_INITIALIZER)) {
            return this._APP_INITIALIZER_10;
        }
        if ((token === import0.ApplicationInitStatus)) {
            return this._ApplicationInitStatus_11;
        }
        if ((token === import0.Testability)) {
            return this._Testability_12;
        }
        if ((token === import0.ɵf)) {
            return this._ɵf_13;
        }
        if ((token === import0.ApplicationRef)) {
            return this._ApplicationRef_14;
        }
        if ((token === import0.Compiler)) {
            return this._Compiler_15;
        }
        if ((token === import0.APP_ID)) {
            return this._APP_ID_16;
        }
        if ((token === import3.HAMMER_GESTURE_CONFIG)) {
            return this._HAMMER_GESTURE_CONFIG_17;
        }
        if ((token === import3.EVENT_MANAGER_PLUGINS)) {
            return this._EVENT_MANAGER_PLUGINS_18;
        }
        if ((token === import3.EventManager)) {
            return this._EventManager_19;
        }
        if ((token === import3.ɵDomSharedStylesHost)) {
            return this._ɵDomSharedStylesHost_20;
        }
        if ((token === import3.AnimationDriver)) {
            return this._AnimationDriver_21;
        }
        if ((token === import3.ɵDomRootRenderer)) {
            return this._ɵDomRootRenderer_22;
        }
        if ((token === import0.RootRenderer)) {
            return this._RootRenderer_23;
        }
        if ((token === import3.DomSanitizer)) {
            return this._DomSanitizer_24;
        }
        if ((token === import0.Sanitizer)) {
            return this._Sanitizer_25;
        }
        if ((token === import0.ɵz)) {
            return this._ɵz_26;
        }
        if ((token === import0.ɵViewUtils)) {
            return this._ɵViewUtils_27;
        }
        if ((token === import0.IterableDiffers)) {
            return this._IterableDiffers_28;
        }
        if ((token === import0.KeyValueDiffers)) {
            return this._KeyValueDiffers_29;
        }
        if ((token === import3.ɵDomRendererFactoryV2)) {
            return this._ɵDomRendererFactoryV2_30;
        }
        if ((token === import0.RendererFactoryV2)) {
            return this._RendererFactoryV2_31;
        }
        if ((token === import3.ɵSharedStylesHost)) {
            return this._ɵSharedStylesHost_32;
        }
        if ((token === import3.Meta)) {
            return this._Meta_33;
        }
        if ((token === import3.Title)) {
            return this._Title_34;
        }
        if ((token === '$injector')) {
            return this.__injector_35;
        }
        if ((token === '$rootScope')) {
            return this.__rootScope_36;
        }
        if ((token === '$compile')) {
            return this.__compile_37;
        }
        if ((token === '$parse')) {
            return this.__parse_38;
        }
        if ((token === import4.ɵf)) {
            return this._ɵf_39;
        }
        if ((token === import5.FormBuilder)) {
            return this._FormBuilder_40;
        }
        if ((token === import5.ɵi)) {
            return this._ɵi_41;
        }
        if ((token === import6.UpgradePubSubService)) {
            return this._UpgradePubSubService_42;
        }
        return notFoundResult;
    };
    AngularModuleInjector.prototype.destroyInternal = function () {
        this._ɵf_13.ngOnDestroy();
        this._ɵDomSharedStylesHost_20.ngOnDestroy();
    };
    return AngularModuleInjector;
}(import0.ɵNgModuleInjector));
export var AngularModuleNgFactory = new import0.NgModuleFactory(AngularModuleInjector, import1.AngularModule);
