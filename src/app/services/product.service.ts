import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productURL = environment.apiResrURL + '/product';

  constructor(private httpClient: HttpClient) { }
}
