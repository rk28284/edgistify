import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Loading, Notify } from 'notiflix';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm!: FormGroup;
  fullName: string = '';
  email: string = '';
  password: string = '';
  submitted = false;


  constructor(private api:ApiService,   private router: Router,
    private fb: FormBuilder,){}

    ngOnInit(): void {
      this.registerForm = this.fb.group({
        fullName: ['', [Validators.required, Validators.minLength(6)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
      });
    }

    registerUser() {
      const regObj = {
        fullName: this.fullName,
        email: this.email,
        password: this.password,
      };
  console.log(regObj);
  
  Loading.hourglass('Please Wait...');
  this.router.navigate(['/']);
      this.api.register(regObj).subscribe(
        (res) => {
          console.log(regObj,res);
          this.submitted = true   
          Loading.remove(1000);
          Notify.success('Login Successfully!!');
          this.router.navigate(['/']);
        }
      );
     
    }
  
    onReset() {
      this.submitted = false;
      this.registerForm.reset();
    }
}
