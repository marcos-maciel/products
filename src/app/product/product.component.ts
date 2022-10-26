import { HttpErrorResponse } from "@angular/common/http";
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
  public listProductsEle: Product[] = [];
  public listProductsRoup: Product[] = [];

  constructor(productService: ProductService) {
    this.productService = productService;
  }

  ngOnInit(): void {
    this.productService.list(
    ).subscribe({
      next: (response: Product[]) => {
        console.log(response);
        response.forEach(product => {
          let idCategorie = product["IdCategorie"];
          if (idCategorie == 1) {
            this.listProductsEle.push(product);
            console.log(this.listProductsEle)
          } else {
            this.listProductsRoup.push(product)
          }
        })
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
