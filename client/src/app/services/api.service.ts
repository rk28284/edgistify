// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';


// @Injectable({
//   providedIn: 'root'
// })
// export class ApiService {
// //  baseurl = 'https://edgistify-backend-v5ep.onrender.com';
// baseurl="http://localhost:8080"
//   constructor(private http: HttpClient
//   ) { }
//   register(regObj: any) {
//     return this.http.post<any>(`${this.baseurl}/register`, regObj);
//   }

//   login(logObj: any) {
//     return this.http.post<any>(`${this.baseurl}/login`, logObj);
//   }

//   getProducts(){
//     return this.http.get<any>(`${this.baseurl}/product`)
//   }

//   postCartItem(cartObj:any){
//     return this.http.post<any>(`${this.baseurl}/add-to-cart`,cartObj)
//   }

//   postOrderItem(orderObj:any){
//     return this.http.post<any>(`${this.baseurl}/order`,orderObj
//     )
//   }

// }

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseurl = 'http://localhost:8080';  // Adjusted for local testing

  constructor(private http: HttpClient) { }

  // Registration request
  register(regObj: any) {
    return this.http.post<any>(`${this.baseurl}/register`, regObj);
  }

  // Login request
  login(logObj: any) {
    return this.http.post<any>(`${this.baseurl}/login`, logObj);
  }

  // Get Products (with token)
  getProducts() {
    const headers = this.getAuthHeaders();
    return this.http.get<any>(`${this.baseurl}/product`, { headers });
  }

  // Post Cart Item (with token)
  postCartItem(cartObj: any) {
    const headers = this.getAuthHeaders();
    return this.http.post<any>(`${this.baseurl}/add-to-cart`, cartObj, { headers });
  }

  // Post Order Item (with token)
  postOrderItem(orderObj: any) {
    const headers = this.getAuthHeaders();
    return this.http.post<any>(`${this.baseurl}/order`, orderObj, { headers });
  }

  // Helper function to get Authorization headers
  private getAuthHeaders(): HttpHeaders {
    const token = sessionStorage.getItem('token');  // Replace 'token' with your actual token key
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  }
}
