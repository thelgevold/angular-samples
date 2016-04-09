System.register(['angular2/testing', './event-emitter'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, event_emitter_1;
    function main() {
        testing_1.describe('Greeting Component', function () {
            testing_1.it('should emit greeting event', function (done) {
                var child = new event_emitter_1.Child();
                child.greeting.subscribe(function (g) {
                    testing_1.expect(g).toEqual({ greeting: 'hello' });
                    done();
                });
                child.sayHello();
            });
        });
    }
    exports_1("main", main);
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (event_emitter_1_1) {
                event_emitter_1 = event_emitter_1_1;
            }],
        execute: function() {
        }
    }
});
