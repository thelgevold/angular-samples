System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Directory;
    return {
        setters:[],
        execute: function() {
            Directory = (function () {
                function Directory(name, directories, files) {
                    this.name = name;
                    this.directories = directories;
                    this.files = files;
                    this.expanded = true;
                    this.checked = false;
                }
                Directory.prototype.toggle = function () {
                    this.expanded = !this.expanded;
                };
                Directory.prototype.getIcon = function () {
                    if (this.expanded) {
                        return '-';
                    }
                    return '+';
                };
                Directory.prototype.check = function () {
                    this.checked = !this.checked;
                    this.checkRecursive(this.checked);
                };
                Directory.prototype.checkRecursive = function (state) {
                    this.directories.forEach(function (d) {
                        d.checked = state;
                        d.checkRecursive(state);
                    });
                };
                return Directory;
            }());
            exports_1("Directory", Directory);
        }
    }
});
