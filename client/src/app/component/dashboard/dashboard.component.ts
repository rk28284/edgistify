import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Loading, Notify } from 'notiflix';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private route:Router,private api:ApiService){}
  products: any = [];

ngOnInit(){
  this.getProduct()
}
getProduct(){
  this.api.getProducts().subscribe((res:any)=>{
Loading.circle('Loading...');
    console.log(res);
    this.products=res
    Loading.remove(1000);
  })
}

addtocartProduct(cartObj:any){
Loading.hourglass("Adding to Cart...");
  this.api.postCartItem(cartObj).subscribe((res:any)=>{
    console.log(res);
    Notify.success('Product Added to Cart Successfully');
  })
  Loading.remove(1000)
}
  logout() {
    // alert("User Logout")
    Notify.success('Employee Logout Successfully');

    sessionStorage.removeItem('token');
    sessionStorage.removeItem('email');
    this.route.navigate(['/']);
  }
}
