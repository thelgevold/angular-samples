System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Clock;
    return {
        setters:[],
        execute: function() {
            Clock = (function () {
                function Clock(offset) {
                    this.offset = offset;
                }
                Clock.prototype.ngOnInit = function () {
                    var _this = this;
                    this.time = moment.utc().add(this.offset, 'h');
                    setInterval(function () {
                        _this.time = moment.utc().add(_this.offset, 'h');
                    }, 1000);
                };
                return Clock;
            }());
            exports_1("Clock", Clock);
        }
    }
});
//# sourceMappingURL=clock.js.map