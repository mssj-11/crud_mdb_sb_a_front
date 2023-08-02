import { Injectable } from '@angular/core';
import { Product } from '../model/product';


const KEY_PRODUCT = 'product_update';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }


  public setProduct(product: Product): void {
    localStorage.setItem(KEY_PRODUCT, JSON.stringify(product));
  }


  public getProduct(): Product {
    return JSON.parse(localStorage.getItem(KEY_PRODUCT)!);
  }

  public clear(): void {
    localStorage.removeItem(KEY_PRODUCT);
  }




}
