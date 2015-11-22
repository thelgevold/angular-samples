var Clock = (function () {
    function Clock() {
    }
    Clock.prototype.onInit = function () {
        var _this = this;
        setInterval(function () {
            _this.time = new Date().toLocaleTimeString();
        }, 1000);
    };
    return Clock;
})();
//# sourceMappingURL=clock.js.map