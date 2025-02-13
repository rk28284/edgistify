import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as Notiflix from 'notiflix';
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
    Loading.remove(1500);
  })
}

addtocartProduct(cartObj: any) {
  Notiflix.Confirm.show(
    'Confirmation', 
    'Are you sure you want to add this product to the cart?', 
    'Yes', 
    'No',
    () => {
      Loading.hourglass('Adding to Cart...');
      this.api.postCartItem(cartObj).subscribe(
        (res: any) => {
          console.log(res);
          Notify.success('Product Added to Cart Successfully');
        },
        (error: any) => {
          Notify.failure('Failed to add product to cart');
        }
      );
      Loading.remove(1500);
    },
    () => {
      Notify.info('Product not added to the cart.');
    }
  );
}

  logout() {
    // alert("User Logout")
    Notify.success('Employee Logout Successfully');

    sessionStorage.removeItem('token');
    sessionStorage.removeItem('email');
    this.route.navigate(['/']);
  }
}
