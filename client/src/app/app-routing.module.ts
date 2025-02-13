import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { OrderComponent } from './component/order/order.component';
import { CartComponent } from './component/cart/cart.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'order', component: OrderComponent },
  {path:'cart',component:CartComponent},

  { path: 'product', component: DashboardComponent,canActivate:[AuthGuard]},
  { path: '**', pathMatch: 'full', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
