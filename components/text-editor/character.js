System.register(['./key-map'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var key_map_1;
    var Character;
    return {
        setters:[
            function (key_map_1_1) {
                key_map_1 = key_map_1_1;
            }],
        execute: function() {
            Character = (function () {
                function Character(keyCode) {
                    this.isCurrent = false;
                    this.lineBreak = false;
                    this.placeHolder = false;
                    this.deleteChar = false;
                    this.isSelected = false;
                    if (keyCode === key_map_1.KeyMap.enter) {
                        this.value = '\n';
                        this.lineBreak = true;
                    }
                    else if (keyCode === -1) {
                        this.value = '';
                        this.placeHolder = true;
                    }
                    else if (keyCode === key_map_1.KeyMap.backSpace) {
                        this.deleteChar = true;
                    }
                    else {
                        this.value = String.fromCharCode(keyCode).toLowerCase();
                    }
                }
                return Character;
            }());
            exports_1("Character", Character);
        }
    }
});
