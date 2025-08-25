import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  showPassword:boolean=false;
  showConfirmPassword:boolean=false;
 
  constructor() { }
  togglePassword(){
    this.showPassword = !this.showPassword;
  }
   getShowPassword(){
    return this.showPassword;
  }

  getShowConfirmPassword(){
    return this.showConfirmPassword;
  }
  toggleConfirmPassword(){
    this.showConfirmPassword = !this.showConfirmPassword;
  }
}
