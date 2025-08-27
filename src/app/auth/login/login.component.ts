import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  error: string = '';
  loginForm!: FormGroup;
  constructor(
    private readonly auth: AuthService,
    private readonly router: Router,
    public readonly shared: SharedService,
    private readonly fb: FormBuilder
  ) {}

  ngOnInit(){
    this.loginForm = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
    })
  }

  getLoginControl(controlName:any){
    return this.loginForm.get(controlName);
  }
  onSubmit() {
    if(this.loginForm.valid){
        console.log(this.loginForm.value);
    }
  }
}
