import {describe,expect,it,xit, inject, beforeEachProviders} from 'angular2/testing';
import {Child} from './event-emitter';

export function main() {

    describe('Greeting Component', () => {

        it('should emit greeting event', (done) => {

            let child = new Child();

            child.greeting.subscribe(g => {
               expect(g).toEqual({greeting:'hello'});
               done();
            });

            child.sayHello();
        });
    });
}