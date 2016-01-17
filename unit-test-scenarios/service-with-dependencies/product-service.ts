import {Injectable} from 'angular2/core'

export class ProductService{

    getProductsByCustomerId(customerId){
        return ['Milk','Soda','Bread'];
    }
}