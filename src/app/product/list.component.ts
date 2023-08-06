import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../model/product';
import Swal from 'sweetalert2';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private toast: ToastrService,
    private storageService: StorageService,
    private router: Router
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



  onDelete(id: number): void{
    Swal.fire({
      title: 'Are you sure?',
      text: 'You cannot undo',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.value){
        this.productService.delete(id).subscribe(
          {
            next: data => {
              this.toast.success(data.message, 'OK', { timeOut: 3000, positionClass: 'toast-top-center' });
              this.getProducts();
            },
            error: err => {
              this.toast.error(err.error.message, 'Error', { timeOut: 3000, positionClass: 'toast-top-center' });
            }
          }
        );
        console.log('Deleted product ' + id);
      } else if (result.dismiss === Swal.DismissReason.cancel){
        Swal.fire(
          'Canceled',
          'Product not deleted',
          'error'
        );
      }
    });
  }




  setProduct(product: Product): void {
    this.storageService.setProduct(product);
    this.router.navigate(['/update']);
  }



  



}
