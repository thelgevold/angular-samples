System.register(['angular2/testing', './greeting'], function(exports_1) {
    var testing_1, greeting_1;
    function main() {
        testing_1.describe('Greeting component', function () {
            testing_1.it('should create greeting', function () {
                var greeting = new greeting_1.Greeting();
                greeting.name = 'Joe';
                greeting.createGreeting();
                testing_1.expect(greeting.greeting).toBe('Greetings, Joe');
            });
        });
    }
    exports_1("main", main);
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (greeting_1_1) {
                greeting_1 = greeting_1_1;
            }],
        execute: function() {
        }
    }
});
