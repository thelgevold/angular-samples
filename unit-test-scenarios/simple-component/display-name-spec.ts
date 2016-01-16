import {describe,expect,it,xit, inject, beforeEachProviders} from 'angular2/testing';
import {DisplayName} from './display-name';

export function main() {

    describe('DisplayName', () => {

        beforeEachProviders(() => [
            DisplayName
        ]);

        //Manually instantiate DisplayName
        it('should define full name', () => {

            let displayName = new DisplayName();
            displayName.firstName = 'Joe';
            displayName.lastName = 'Smith';

            displayName.generateFullName();

            expect(displayName.fullName).toBe('Joe Smith');
        });

        //Use DI to instantiate DisplayName
        it('should define full name2', inject([DisplayName], (displayName) => {

            displayName.firstName = 'Joe';
            displayName.lastName = 'Smith';

            displayName.generateFullName();

            expect(displayName.fullName).toBe('Joe Smith');
        }));

    });
}