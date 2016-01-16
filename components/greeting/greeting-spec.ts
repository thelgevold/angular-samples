import {describe,expect,it} from 'angular2/testing';
import {Greeting} from './greeting';

export function main() {

    describe('Greeting component', () => {

        it('should create greeting', () => {
            let greeting = new Greeting();
            greeting.name = 'Joe';
            greeting.createGreeting();
            expect(greeting.greeting).toBe('Greetings, Joe');
        });
    });
}