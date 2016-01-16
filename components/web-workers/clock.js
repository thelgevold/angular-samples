var Clock = (function () {
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
})();
exports.Clock = Clock;
