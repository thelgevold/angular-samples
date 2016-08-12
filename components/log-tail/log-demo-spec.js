System.register(['@angular/core/testing', 'rxjs/Rx', './log-demo', './log-action', './log-entry', './store', '@angular/http', './log-tail-service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, Rx_1, log_demo_1, log_action_1, log_entry_1, store_1, http_1, log_tail_service_1;
    function main() {
        var mockLogEntries = { entries: [new log_entry_1.LogEntry('error', 2)] };
        describe('LogDemo', function () {
            beforeEach(function () {
                testing_1.TestBed.configureTestingModule({
                    providers: [log_demo_1.LogDemo, store_1.Store, http_1.HTTP_PROVIDERS, { provide: log_tail_service_1.LogTailService, useClass: LogTailServiceMock }]
                });
            });
            var LogTailServiceMock = (function () {
                function LogTailServiceMock() {
                }
                LogTailServiceMock.prototype.getLogEntries = function () {
                    console.log('mock log returned');
                    return Rx_1.Observable.of(mockLogEntries);
                };
                return LogTailServiceMock;
            }());
            it('should initialize', testing_1.inject([log_demo_1.LogDemo], function (logDemo) {
                spyOn(logDemo.store, 'dispatchAction');
                logDemo.ngOnInit();
                expect(logDemo.store.dispatchAction).toHaveBeenCalledWith(new log_action_1.LogAction('LOAD_ENTRIES', mockLogEntries.entries));
            }));
        });
    }
    exports_1("main", main);
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (log_demo_1_1) {
                log_demo_1 = log_demo_1_1;
            },
            function (log_action_1_1) {
                log_action_1 = log_action_1_1;
            },
            function (log_entry_1_1) {
                log_entry_1 = log_entry_1_1;
            },
            function (store_1_1) {
                store_1 = store_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (log_tail_service_1_1) {
                log_tail_service_1 = log_tail_service_1_1;
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=log-demo-spec.js.map