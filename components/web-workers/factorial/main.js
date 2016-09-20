System.register(['@angular/platform-webworker'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_webworker_1, platform_webworker_2;
    var FACTORIAL_CHANNEL;
    return {
        setters:[
            function (platform_webworker_1_1) {
                platform_webworker_1 = platform_webworker_1_1;
                platform_webworker_2 = platform_webworker_1_1;
            }],
        execute: function() {
            FACTORIAL_CHANNEL = "FACTORIAL";
            platform_webworker_2.bootstrapWorkerUi("factorial/loader.js")
                .then(function (ref) {
                var brokerFactory = ref.injector.get(platform_webworker_1.ClientMessageBrokerFactory);
                var broker = brokerFactory.createMessageBroker(FACTORIAL_CHANNEL, false);
                document.getElementById("calculate_factorial").addEventListener("click", function (e) {
                    var val = document.getElementById("factorial").value;
                    var args = new platform_webworker_1.UiArguments("factorial");
                    args.method = "factorial";
                    var fnArg = new platform_webworker_1.FnArg(val, platform_webworker_1.PRIMITIVE);
                    fnArg.value = val;
                    fnArg.type = platform_webworker_1.PRIMITIVE;
                    args.args = [fnArg];
                    broker.runOnService(args, platform_webworker_1.PRIMITIVE)
                        .then(function (res) {
                        document.getElementById("result").innerHTML = "<span>" + res + "</span>";
                    });
                });
            });
        }
    }
});
//# sourceMappingURL=main.js.map