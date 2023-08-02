import { Component, OnInit } from '@angular/core';
import { ProductService } from './../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id!: number;
  name!: string;
  price!: number;

  constructor(
    private productService: ProductService,
    private toast: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){}
  

  ngOnInit(): void {
    this.getProduct();
  }


  onUpdate(): void {
    const product = new Product(this.name, this.price);

    this.productService.update(this.id, product).subscribe(
      {
        next: data => {
          this.toast.success(data.message, 'OK', { timeOut: 3000, positionClass: 'toast-top-center' });
          this.router.navigate(['']);
        },
        error: err => {
          this.toast.error(err.error.message, 'Error', { timeOut: 3000, positionClass: 'toast-top-center' });
        }
      }
    );
  }


  getProduct(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.name = this.activatedRoute.snapshot.params['name'];
    this.price = this.activatedRoute.snapshot.params['price'];
  }




}
