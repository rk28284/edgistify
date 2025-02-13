import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseurl = 'https://edgistify-backend-v5ep.onrender.com';

  constructor(private http: HttpClient) { }

  register(regObj: any) {
    return this.http.post<any>(`${this.baseurl}/register`, regObj);
  }

  login(logObj: any) {
    return this.http.post<any>(`${this.baseurl}/login`, logObj);
  }

  getProducts() {
    const headers = this.getAuthHeaders();
    return this.http.get<any>(`${this.baseurl}/product`, { headers });
  }

  postCartItem(cartObj: any) {
    const headers = this.getAuthHeaders();
    return this.http.post<any>(`${this.baseurl}/add-to-cart`, cartObj, { headers });
  }

  postOrderItem(orderObj: any) {
    const headers = this.getAuthHeaders();
    return this.http.post<any>(`${this.baseurl}/place`, orderObj, { headers });
  }

  private getAuthHeaders(): HttpHeaders {
    const token = sessionStorage.getItem('token');  
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  }
}
