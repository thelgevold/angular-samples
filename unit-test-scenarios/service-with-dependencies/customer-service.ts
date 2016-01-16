import {ProductService} from './product-service';
import {Injectable} from 'angular2/core'

@Injectable()
export class CustomerService{

    productService:ProductService;

    constructor(productService:ProductService){
        this.productService = productService;
    }

    printCustomerDetails(customerId){
        let products = this.productService.getProductsByCustomerId(customerId).join(',');
        return 'Customer purchased: ' + products;
    }
}