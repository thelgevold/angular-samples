import {describe,expect,it} from '@angular/core/testing';
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