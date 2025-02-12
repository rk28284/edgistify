import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Loading, Notify } from 'notiflix';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  loginform!: FormGroup;
  submitted = false;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private api: ApiService,
  ) {}

  ngOnInit(): void {
    this.loginform = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

    onLogin() {
    console.log('line 31');
    console.log(this.email, this.password);

    const userObj = {
      email: this.email,
      password: this.password,
    };
    Loading.hourglass('Loading...');
    this.api.login(userObj).subscribe(
 (res:any)=>{
console.log(res,`Token:${res.token}`);
  this.submitted = true;
  sessionStorage.setItem('token', res.token);
  this.router.navigate(['/product']);
 
   Loading.remove(1000);
  Notify.success('Login Successfully')
 })
  
  }
  
  onReset() {
    this.submitted = false;
    this.loginform.reset();
  }
}
