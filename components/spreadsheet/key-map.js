var KeyMap = (function () {
    function KeyMap() {
    }
    KeyMap.getNavigationDirection = function (keyCode) {
        var direction = new KeyDirection();
        if (keyCode === 38) {
            direction.up = true;
        }
        if (keyCode === 40) {
            direction.down = true;
        }
        if (keyCode === 39) {
            direction.right = true;
        }
        if (keyCode === 37) {
            direction.left = true;
        }
        return direction;
    };
    return KeyMap;
})();
exports.KeyMap = KeyMap;
var KeyDirection = (function () {
    function KeyDirection() {
    }
    return KeyDirection;
})();
