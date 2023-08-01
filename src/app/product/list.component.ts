import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../model/product';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private toast: ToastrService
  ){  }

  ngOnInit(): void {
    this.getProducts();
  }


  getProducts(): void {
    this.productService.list().subscribe(
      //  Option 1
      /*
      data => {
        this.products = data;
        console.log(this.products);
      },
      err => {
        this.toast.error(err.error.message, 'Error', { timeOut: 3000, positionClass: 'toast-top-center' });
      }
      */
     // Option 2
    {
      next: data => {
        this.products = data;
        console.log(this.products);
      },
      error: err => {
        this.toast.error(err.error.message, 'Error', { timeOut: 3000, positionClass: 'toast-top-center' });
      }
    }
    );
  }

}
