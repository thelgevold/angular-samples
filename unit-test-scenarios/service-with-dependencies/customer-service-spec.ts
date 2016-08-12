import {inject, TestBed} from '@angular/core/testing';
import {CustomerService} from './customer-service';
import {ProductService} from './product-service';

export function main() {

    describe('CustomerService', () => {

        beforeEach(() => {
            TestBed.configureTestingModule({
                providers: [ProductService, CustomerService]
            });
        });

        it('should get customer details', inject([CustomerService], (customerService) => {
            let customerDetails = customerService.printCustomerDetails(1);
            expect(customerDetails).toBe('Customer purchased: Milk,Soda,Bread');
        }));
    });
}