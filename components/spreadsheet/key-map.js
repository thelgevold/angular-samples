System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var KeyMap, KeyDirection;
    return {
        setters:[],
        execute: function() {
            KeyMap = (function () {
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
                    if (keyCode === 9) {
                        direction.tab = true;
                    }
                    if (keyCode === 37) {
                        direction.left = true;
                    }
                    return direction;
                };
                return KeyMap;
            }());
            exports_1("KeyMap", KeyMap);
            KeyDirection = (function () {
                function KeyDirection() {
                }
                return KeyDirection;
            }());
        }
    }
});
