import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as Notiflix from 'notiflix';
import { Loading, Notify } from 'notiflix';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  // {
  //   "shippingAddress": "123 Main St, Springfield, IL, 62701"
  // }
  shippingAddress: string = '';
  cartForm!: FormGroup;
  submitted = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private api: ApiService
  ) {}

  ngOnInit(): void {
    // Initialize the form
    this.cartForm = this.fb.group({
      shippingAddress: [Validators.required],
  
    });
  }

//   onAddToCart() {
//     const orderObj = {
//       shippingAddress:this.shippingAddress
//     };
//     Loading.hourglass('Placeing Your Order');
//     this.api.postOrderItem(orderObj).subscribe(
//  (res:any)=>{
// console.log(res);
// console.log(orderObj);

//   this.submitted = true;
//   this.router.navigate(['/product']);
 
//    Loading.remove(1200);
//   Notify.success('Order Placed Successfully')
//  })
//   }
onAddToCart() {
  const orderObj = {
    shippingAddress: this.cartForm.get('shippingAddress')?.value,
  };

  // Show confirmation dialog
  Notiflix.Confirm.show(
    'Confirmation',
    'Are you sure Shipping Address is Correct?',
    'Yes',
    'No',
    () => {
      // If the user confirms
      Loading.hourglass('Placing Your Order...');
      this.api.postOrderItem(orderObj).subscribe(
        (res: any) => {
          console.log(res);
          console.log(orderObj);

          this.submitted = true;
          this.router.navigate(['/product']);
          Loading.remove(1200);
          Notify.success('Order Placed Successfully');
        },
        (error: any) => {
          Loading.remove();
          Notify.failure('Failed to place order');
        }
      );
    },
    () => {
      // If the user cancels
      Notify.info('Order placement canceled.');
    }
  );
}

 
  onReset() {
    this.submitted = false;
    this.cartForm.reset();
  }
}
