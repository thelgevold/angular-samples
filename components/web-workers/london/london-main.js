System.register(['@angular/platform-browser'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_1;
    return {
        setters:[
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            }],
        execute: function() {
            platform_browser_1.bootstrapApp("./london/london-loader.ts");
        }
    }
});
//# sourceMappingURL=london-main.js.map