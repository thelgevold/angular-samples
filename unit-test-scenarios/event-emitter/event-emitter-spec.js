System.register(['./event-emitter'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var event_emitter_1;
    return {
        setters:[
            function (event_emitter_1_1) {
                event_emitter_1 = event_emitter_1_1;
            }],
        execute: function() {
            describe('Greeting Component', function () {
                it('should emit greeting event', function (done) {
                    var child = new event_emitter_1.Child();
                    child.greeting.subscribe(function (g) {
                        expect(g).toEqual({ greeting: 'hello' });
                        done();
                    });
                    child.sayHello();
                });
            });
        }
    }
});
//# sourceMappingURL=event-emitter-spec.js.map