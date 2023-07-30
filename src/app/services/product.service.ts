import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productURL = EnvironmentInjector.apiRestURL;

  constructor() { }
}
