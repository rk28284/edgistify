import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
 baseurl = 'https://edgistify-backend-v5ep.onrender.com';
  constructor(private http: HttpClient
  ) { }
  register(regObj: any) {
    return this.http.post<any>(`${this.baseurl}/register`, regObj);
  }

  login(logObj: any) {
    return this.http.post<any>(`${this.baseurl}/login`, logObj);
  }

  getProducts(){
    return this.http.get<any>(`${this.baseurl}/product`)
  }

  postCartItem(cartObj:any){
    return this.http.post<any>(`${this.baseurl}/add-to-cart`,cartObj)
  }

  postOrderItem(orderObj:any){
    return this.http.post<any>(`${this.baseurl}/order`,orderObj
    )
  }

}

