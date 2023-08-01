import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productURL = environment.apiRestURL + '/product';

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Product[]>{
    return this.httpClient.get<Product[]> (this.productURL);
  }

}
