var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
    Object.defineProperty(AngularModuleInjector.prototype, "_LOCALE_ID_12", {
        get: function () {
            if ((this.__LOCALE_ID_12 == null)) {
                (this.__LOCALE_ID_12 = import0.ɵn(this.parent.get(import0.LOCALE_ID, null)));
            }
            return this.__LOCALE_ID_12;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "_NgLocalization_13", {
        get: function () {
            if ((this.__NgLocalization_13 == null)) {
                (this.__NgLocalization_13 = new import2.NgLocaleLocalization(this._LOCALE_ID_12));
            }
            return this.__NgLocalization_13;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "_Compiler_14", {
        get: function () {
            if ((this.__Compiler_14 == null)) {
                (this.__Compiler_14 = new import0.Compiler());
            }
            return this.__Compiler_14;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "_APP_ID_15", {
        get: function () {
            if ((this.__APP_ID_15 == null)) {
                (this.__APP_ID_15 = import0.ɵg());
            }
            return this.__APP_ID_15;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "_IterableDiffers_16", {
        get: function () {
            if ((this.__IterableDiffers_16 == null)) {
                (this.__IterableDiffers_16 = import0.ɵl());
            }
            return this.__IterableDiffers_16;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "_KeyValueDiffers_17", {
        get: function () {
            if ((this.__KeyValueDiffers_17 == null)) {
                (this.__KeyValueDiffers_17 = import0.ɵm());
            }
            return this.__KeyValueDiffers_17;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "_DomSanitizer_18", {
        get: function () {
            if ((this.__DomSanitizer_18 == null)) {
                (this.__DomSanitizer_18 = new import3.ɵe(this.parent.get(import3.DOCUMENT)));
            }
            return this.__DomSanitizer_18;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "_Sanitizer_19", {
        get: function () {
            if ((this.__Sanitizer_19 == null)) {
                (this.__Sanitizer_19 = this._DomSanitizer_18);
            }
            return this.__Sanitizer_19;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "_HAMMER_GESTURE_CONFIG_20", {
        get: function () {
            if ((this.__HAMMER_GESTURE_CONFIG_20 == null)) {
                (this.__HAMMER_GESTURE_CONFIG_20 = new import3.HammerGestureConfig());
            }
            return this.__HAMMER_GESTURE_CONFIG_20;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "_EVENT_MANAGER_PLUGINS_21", {
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
    Object.defineProperty(AngularModuleInjector.prototype, "_EventManager_22", {
        get: function () {
            if ((this.__EventManager_22 == null)) {
                (this.__EventManager_22 = new import3.EventManager(this._EVENT_MANAGER_PLUGINS_21, this.parent.get(import0.NgZone)));
            }
            return this.__EventManager_22;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "_\u0275DomSharedStylesHost_23", {
        get: function () {
            if ((this.__ɵDomSharedStylesHost_23 == null)) {
                (this.__ɵDomSharedStylesHost_23 = new import3.ɵDomSharedStylesHost(this.parent.get(import3.DOCUMENT)));
            }
            return this.__ɵDomSharedStylesHost_23;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "_\u0275DomRendererFactory2_24", {
        get: function () {
            if ((this.__ɵDomRendererFactory2_24 == null)) {
                (this.__ɵDomRendererFactory2_24 = new import3.ɵDomRendererFactory2(this._EventManager_22, this._ɵDomSharedStylesHost_23));
            }
            return this.__ɵDomRendererFactory2_24;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "_RendererFactory2_25", {
        get: function () {
            if ((this.__RendererFactory2_25 == null)) {
                (this.__RendererFactory2_25 = this._ɵDomRendererFactory2_24);
            }
            return this.__RendererFactory2_25;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "_\u0275SharedStylesHost_26", {
        get: function () {
            if ((this.__ɵSharedStylesHost_26 == null)) {
                (this.__ɵSharedStylesHost_26 = this._ɵDomSharedStylesHost_23);
            }
            return this.__ɵSharedStylesHost_26;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "_Testability_27", {
        get: function () {
            if ((this.__Testability_27 == null)) {
                (this.__Testability_27 = new import0.Testability(this.parent.get(import0.NgZone)));
            }
            return this.__Testability_27;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "_Meta_28", {
        get: function () {
            if ((this.__Meta_28 == null)) {
                (this.__Meta_28 = new import3.Meta(this.parent.get(import3.DOCUMENT)));
            }
            return this.__Meta_28;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "_Title_29", {
        get: function () {
            if ((this.__Title_29 == null)) {
                (this.__Title_29 = new import3.Title(this.parent.get(import3.DOCUMENT)));
            }
            return this.__Title_29;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "__injector_30", {
        get: function () {
            if ((this.___injector_30 == null)) {
                (this.___injector_30 = import4.ɵa());
            }
            return this.___injector_30;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "__rootScope_31", {
        get: function () {
            if ((this.___rootScope_31 == null)) {
                (this.___rootScope_31 = import4.ɵb(this.__injector_30));
            }
            return this.___rootScope_31;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "__compile_32", {
        get: function () {
            if ((this.___compile_32 == null)) {
                (this.___compile_32 = import4.ɵc(this.__injector_30));
            }
            return this.___compile_32;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "__parse_33", {
        get: function () {
            if ((this.___parse_33 == null)) {
                (this.___parse_33 = import4.ɵd(this.__injector_30));
            }
            return this.___parse_33;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "_FormBuilder_34", {
        get: function () {
            if ((this.__FormBuilder_34 == null)) {
                (this.__FormBuilder_34 = new import5.FormBuilder());
            }
            return this.__FormBuilder_34;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "_\u0275i_35", {
        get: function () {
            if ((this.__ɵi_35 == null)) {
                (this.__ɵi_35 = new import5.ɵi());
            }
            return this.__ɵi_35;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularModuleInjector.prototype, "_UpgradePubSubService_36", {
        get: function () {
            if ((this.__UpgradePubSubService_36 == null)) {
                (this.__UpgradePubSubService_36 = new import6.UpgradePubSubService());
            }
            return this.__UpgradePubSubService_36;
        },
        enumerable: true,
        configurable: true
    });
    AngularModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._ErrorHandler_1 = import3.ɵa();
        this._APP_INITIALIZER_2 = [
            import0.ɵo,
            import3.ɵc(this.parent.get(import3.NgProbeToken, null), this.parent.get(import0.NgProbeToken, null))
        ];
        this._ApplicationInitStatus_3 = new import0.ApplicationInitStatus(this._APP_INITIALIZER_2);
        this._ɵf_4 = new import0.ɵf(this.parent.get(import0.NgZone), this.parent.get(import0.ɵConsole), this, this._ErrorHandler_1, this.componentFactoryResolver, this._ApplicationInitStatus_3);
        this._ApplicationRef_5 = this._ɵf_4;
        this._ApplicationModule_6 = new import0.ApplicationModule(this._ApplicationRef_5);
        this._BrowserModule_7 = new import3.BrowserModule(this.parent.get(import3.BrowserModule, null));
        this._UpgradeModule_8 = new import4.UpgradeModule(this, this.parent.get(import0.NgZone));
        this._ɵba_9 = new import5.ɵba();
        this._ReactiveFormsModule_10 = new import5.ReactiveFormsModule();
        this._AngularModule_11 = new import1.AngularModule();
        return this._AngularModule_11;
    };
    AngularModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import0.ErrorHandler)) {
            return this._ErrorHandler_1;
        }
        if ((token === import0.APP_INITIALIZER)) {
            return this._APP_INITIALIZER_2;
        }
        if ((token === import0.ApplicationInitStatus)) {
            return this._ApplicationInitStatus_3;
        }
        if ((token === import0.ɵf)) {
            return this._ɵf_4;
        }
        if ((token === import0.ApplicationRef)) {
            return this._ApplicationRef_5;
        }
        if ((token === import0.ApplicationModule)) {
            return this._ApplicationModule_6;
        }
        if ((token === import3.BrowserModule)) {
            return this._BrowserModule_7;
        }
        if ((token === import4.UpgradeModule)) {
            return this._UpgradeModule_8;
        }
        if ((token === import5.ɵba)) {
            return this._ɵba_9;
        }
        if ((token === import5.ReactiveFormsModule)) {
            return this._ReactiveFormsModule_10;
        }
        if ((token === import1.AngularModule)) {
            return this._AngularModule_11;
        }
        if ((token === import0.LOCALE_ID)) {
            return this._LOCALE_ID_12;
        }
        if ((token === import2.NgLocalization)) {
            return this._NgLocalization_13;
        }
        if ((token === import0.Compiler)) {
            return this._Compiler_14;
        }
        if ((token === import0.APP_ID)) {
            return this._APP_ID_15;
        }
        if ((token === import0.IterableDiffers)) {
            return this._IterableDiffers_16;
        }
        if ((token === import0.KeyValueDiffers)) {
            return this._KeyValueDiffers_17;
        }
        if ((token === import3.DomSanitizer)) {
            return this._DomSanitizer_18;
        }
        if ((token === import0.Sanitizer)) {
            return this._Sanitizer_19;
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
        if ((token === import3.ɵDomRendererFactory2)) {
            return this._ɵDomRendererFactory2_24;
        }
        if ((token === import0.RendererFactory2)) {
            return this._RendererFactory2_25;
        }
        if ((token === import3.ɵSharedStylesHost)) {
            return this._ɵSharedStylesHost_26;
        }
        if ((token === import0.Testability)) {
            return this._Testability_27;
        }
        if ((token === import3.Meta)) {
            return this._Meta_28;
        }
        if ((token === import3.Title)) {
            return this._Title_29;
        }
        if ((token === '$injector')) {
            return this.__injector_30;
        }
        if ((token === '$rootScope')) {
            return this.__rootScope_31;
        }
        if ((token === '$compile')) {
            return this.__compile_32;
        }
        if ((token === '$parse')) {
            return this.__parse_33;
        }
        if ((token === import5.FormBuilder)) {
            return this._FormBuilder_34;
        }
        if ((token === import5.ɵi)) {
            return this._ɵi_35;
        }
        if ((token === import6.UpgradePubSubService)) {
            return this._UpgradePubSubService_36;
        }
        return notFoundResult;
    };
    AngularModuleInjector.prototype.destroyInternal = function () {
        this._ɵf_4.ngOnDestroy();
        (this.__ɵDomSharedStylesHost_23 && this._ɵDomSharedStylesHost_23.ngOnDestroy());
    };
    return AngularModuleInjector;
}(import0.ɵNgModuleInjector));
export var AngularModuleNgFactory = new import0.NgModuleFactory(AngularModuleInjector, import1.AngularModule);
