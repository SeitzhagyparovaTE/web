import { Category, Product, LoginResponse } from './../models';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class Category_productService {
  BASE_URL = 'http://localhost:8000'

  constructor(
    private http: HttpClient
  ) { }


  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.BASE_URL}/api/products/`);
  }

  getProduct(id): Observable<Product> {
    return this.http.get<Product>(`${this.BASE_URL}/api/products/${id}/`);
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.BASE_URL}/api/categories/`);
  }

  getProductsMen(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.BASE_URL}/api/categories/1/products/`);
  }

  getProductsWomen(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.BASE_URL}/api/categories/2/products/`);
  }

  getProductsKid(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.BASE_URL}/api/categories/3/products/`);
  }

  // addProduct(product: Product): Observable<Product>{
  //   return this.http.put(`${this.BASE_URL}/api/products/${id}/`);
  // }

  deleteProduct(id): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/api/products/${id}/`);
  }
  
  login(username, password): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.BASE_URL}/api/login/`, {
      username,
      password
    })
  }

}
