import { Inject, inject, Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpResponseBase } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from "../model/product";

@Injectable()
export class ProductService {

    private httpClient: HttpClient;
    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
            'Access-Control-Allow-Headers':
                'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
        })
    };

    public constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    public list(): Observable<Product[]> {
        let url = `https://f1ff-2804-1b3-a200-79b7-74c6-589b-8236-6422.sa.ngrok.io/products`;
        return this.httpClient.get<Product[]>(url, this.httpOptions);
    }

    public find(id: number): Observable<Product> {
        return this.httpClient.get<Product>(`https://f1ff-2804-1b3-a200-79b7-74c6-589b-8236-6422.sa.ngrok.io/product/${id}`);
    }

    public create(product: Product, referCode?: string): Observable<Product> {
        let url = `https://f1ff-2804-1b3-a200-79b7-74c6-589b-8236-6422.sa.ngrok.io/product`;
        if (referCode) url += `/?ref=${referCode}`;

        return this.httpClient.post<Product>(url, product)
    }

    public update(id: number, product: Product): Observable<HttpResponseBase> {
        return this.httpClient.put(`https://f1ff-2804-1b3-a200-79b7-74c6-589b-8236-6422.sa.ngrok.io/product/${id}`, product, { observe: "response" });
    }

    public delete(id: number): Observable<HttpResponseBase> {
        return this.httpClient.delete(`https://f1ff-2804-1b3-a200-79b7-74c6-589b-8236-6422.sa.ngrok.io/product/${id}`, { observe: "response" });
    }

}