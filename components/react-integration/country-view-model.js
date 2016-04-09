System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CountryViewModelFactory, CountryModel;
    return {
        setters:[],
        execute: function() {
            CountryViewModelFactory = (function () {
                function CountryViewModelFactory() {
                }
                CountryViewModelFactory.prototype.createModel = function () {
                    var countries = [];
                    var america = new CountryModel('North America');
                    america.visible = true;
                    var usa = new CountryModel('USA');
                    usa.children.push(new CountryModel('New York'));
                    usa.children.push(new CountryModel('Texas'));
                    usa.children.push(new CountryModel('Oregon'));
                    usa.children.push(new CountryModel('South Dakota'));
                    america.children.push(usa);
                    america.children.push(new CountryModel('Canada'));
                    america.children.push(new CountryModel('Mexico'));
                    var europe = new CountryModel('Europe');
                    europe.children.push(new CountryModel('Norway'));
                    europe.children.push(new CountryModel('Sweden'));
                    europe.children.push(new CountryModel('France'));
                    europe.children.push(new CountryModel('Germany'));
                    europe.visible = true;
                    countries.push(america);
                    countries.push(europe);
                    return countries;
                };
                return CountryViewModelFactory;
            }());
            exports_1("CountryViewModelFactory", CountryViewModelFactory);
            CountryModel = (function () {
                function CountryModel(text) {
                    this.visible = true;
                    this.children = [];
                    this.text = text;
                    this.icon = this.getIcon();
                }
                CountryModel.prototype.getIcon = function () {
                    if (this.children.length > 0) {
                        if (this.children[0].visible === false) {
                            return '+ ';
                        }
                        return '- ';
                    }
                    return null;
                };
                return CountryModel;
            }());
        }
    }
});
