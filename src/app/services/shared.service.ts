import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  showPassword:boolean=false;
  getShowPassword(){
    return this.showPassword;
  }
  constructor() { }
  togglePassword(){
    this.showPassword = !this.showPassword;
  }
}
