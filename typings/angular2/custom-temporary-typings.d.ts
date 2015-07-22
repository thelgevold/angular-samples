/*
This is a temporary hack to satisfy the type script compiler and will be removed as soon as official typings are released!
*/

declare module "angular2/http" {

    class Http {
        get(url: string): any;
    }
    var httpInjectables: Array<any>;
}

declare module 'angular2/src/facade/async' {

    export class Observable {
        observer(generator: any): Object;
    }

    export class ObservableWrapper{
        static subscribe<T>(emitter: Observable, onNext: (value: any) => void):any;
    }

}