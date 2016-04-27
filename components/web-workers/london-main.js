System.register(['angular2/platform/worker_render'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var worker_render_1;
    return {
        setters:[
            function (worker_render_1_1) {
                worker_render_1 = worker_render_1_1;
            }],
        execute: function() {
            worker_render_1.bootstrapRender("./london/london-loader.ts");
        }
    }
});
//# sourceMappingURL=london-main.js.map