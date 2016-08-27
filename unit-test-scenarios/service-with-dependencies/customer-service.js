var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ProductService } from './product-service';
import { Injectable } from '@angular/core';
export let CustomerService = class CustomerService {
    constructor(productService) {
        this.productService = productService;
    }
    printCustomerDetails(customerId) {
        let products = this.productService.getProductsByCustomerId(customerId).join(',');
        return 'Customer purchased: ' + products;
    }
};
CustomerService = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [ProductService])
], CustomerService);
