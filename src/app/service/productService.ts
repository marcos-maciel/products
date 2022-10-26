import { Injectable } from '@angular/core';
import { HttpClient, HttpResponseBase } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from "../model/product";

@Injectable()
export class ProductService {

    private httpClient: HttpClient;

    public constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    public list(): Observable<Array<Product>> {
        let url = `https://r4-api-nodejs.herokuapp.com/products`;
        return this.httpClient.get<Array<Product>>(url);
    }

    public find(id: number): Observable<Product> {
        return this.httpClient.get<Product>(`https://r4-api-nodejs.herokuapp.com/product/${id}`);
    }

    public create(product: Product, referCode?: string): Observable<Product> {
        let url = `https://r4-api-nodejs.herokuapp.com/api/product`;
        if (referCode) url += `/?ref=${referCode}`;

        return this.httpClient.post<Product>(url, product)
    }

    public update(id: number, product: Product): Observable<HttpResponseBase> {
        return this.httpClient.put(`https://r4-api-nodejs.herokuapp.com/api/product/${id}`, product, { observe: "response" });
    }

    public delete(id: number): Observable<HttpResponseBase> {
        return this.httpClient.delete(`https://r4-api-nodejs.herokuapp.com/api/product/${id}`, { observe: "response" });
    }

}