import { HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Component, Inject, OnInit } from '@angular/core';
import { Product } from "../model/product";
import { ProductService } from "../service/productService";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  private productService: ProductService;
  public product: Array<Product>;

  constructor(productService: ProductService, @Inject(String) product: Array<Product>) {
    this.productService = productService;
    this.product = product;
   }

  ngOnInit(): void {
    this.productService.list(
    ).subscribe({
      next: (response: Array<Product>) => {
        this.product = response;
      },
      error: (response: HttpErrorResponse) => {
        if (response.status === 500) {
          console.log(response)
        } else {
          console.log(response)
        }
      }
    });
  }

}
