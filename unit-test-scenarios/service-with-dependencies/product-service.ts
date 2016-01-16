import {Injectable} from 'angular2/core'

@Injectable()
export class ProductService{

    getProductsByCustomerId(customerId){
        return ['Milk','Soda','Bread'];
    }
}