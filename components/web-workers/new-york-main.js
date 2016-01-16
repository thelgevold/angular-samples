var core_1 = require('angular2/core');
var worker_render_1 = require('angular2/platform/worker_render');
core_1.platform([worker_render_1.WORKER_RENDER_PLATFORM]).application([worker_render_1.WORKER_RENDER_APP, new core_1.Provider(worker_render_1.WORKER_SCRIPT, { useValue: "./new-york/new-york-loader.ts" })]);
