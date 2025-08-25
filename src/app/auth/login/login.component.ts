import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string='';
  password:string='';
  error:string='';

  constructor(private readonly auth:AuthService,private readonly router:Router){}

onSubmit(){
  if(this.auth.login(this.email,this.password)){
    this.router.navigate(['/reports']);
  }else{
    this.error = "Invalid credentials";
  }
}
}
