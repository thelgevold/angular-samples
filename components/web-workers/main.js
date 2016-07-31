System.register(['@angular/platform-browser-dynamic'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.bootstrapWorkerUi("./loader.js");
        }
    }
});
//# sourceMappingURL=main.js.map