declare module customModule{
    class TimerWrapper{
        static setTimeout(fn:any,ms:any);
    }
}

declare module "angular2/src/core/facade/async" {
    export = customModule;
}
