System.register(['@angular/platform-browser', "@angular/platform-browser-dynamic"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_1, platform_browser_dynamic_1;
    var FACTORIAL_CHANNEL;
    return {
        setters:[
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            }],
        execute: function() {
            FACTORIAL_CHANNEL = "FACTORIAL";
            platform_browser_dynamic_1.bootstrapWorkerUi("factorial/loader.js")
                .then(function (ref) {
                var brokerFactory = ref.injector.get(platform_browser_1.ClientMessageBrokerFactory);
                var broker = brokerFactory.createMessageBroker(FACTORIAL_CHANNEL, false);
                document.getElementById("calculate_factorial").addEventListener("click", function (e) {
                    var val = document.getElementById("factorial").value;
                    var args = new platform_browser_1.UiArguments("factorial");
                    args.method = "factorial";
                    var fnArg = new platform_browser_1.FnArg(val, platform_browser_1.PRIMITIVE);
                    fnArg.value = val;
                    fnArg.type = platform_browser_1.PRIMITIVE;
                    args.args = [fnArg];
                    broker.runOnService(args, platform_browser_1.PRIMITIVE)
                        .then(function (res) {
                        document.getElementById("result").innerHTML = "<span>" + res + "</span>";
                    });
                });
            });
        }
    }
});
//# sourceMappingURL=main.js.map