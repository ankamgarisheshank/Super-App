// app/customer-app/src/app/services/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/ecommerce/products`);
  }

  getRestaurants(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/food/restaurants`);
  }

  placeOrder(order: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/ecommerce/orders`, order);
  }
}
