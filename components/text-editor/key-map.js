System.register([], function(exports_1) {
    var KeyMap;
    return {
        setters:[],
        execute: function() {
            KeyMap = (function () {
                function KeyMap() {
                }
                KeyMap.spaceBar = 32;
                KeyMap.enter = 13;
                KeyMap.a = 65;
                KeyMap.z = 90;
                KeyMap.backSpace = 8;
                KeyMap.zero = 48;
                KeyMap.nine = 57;
                return KeyMap;
            })();
            exports_1("KeyMap", KeyMap);
        }
    }
});
