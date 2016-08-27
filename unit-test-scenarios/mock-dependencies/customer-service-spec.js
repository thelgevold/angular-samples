import { inject, TestBed } from '@angular/core/testing';
import { CustomerService } from '../service-with-dependencies/customer-service';
import { ProductService } from '../service-with-dependencies/product-service';
export function main() {
    class ProductServiceMock {
        getProductsByCustomerId() {
            return ['Hamburger', 'Fries'];
        }
    }
    describe('CustomerService', () => {
        beforeEach(() => {
            TestBed.configureTestingModule({
                providers: [{ provide: ProductService, useClass: ProductServiceMock }]
            });
        });
        it('should get customer details', inject([CustomerService], (customerService) => {
            let customerDetails = customerService.printCustomerDetails(1);
            expect(customerDetails).toBe('Customer purchased: Hamburger,Fries');
        }));
    });
}
