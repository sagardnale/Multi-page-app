import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly AUTH_KEY = 'isLoggedIn';

  constructor(private readonly router: Router) { }

  login(email:string,password:string):boolean{
    if(email && password){
      localStorage.setItem(this.AUTH_KEY,'true');
      return true;
    }
    return false;
  }

  logout(){
    localStorage.removeItem(this.AUTH_KEY);
    this.router.navigate(['/login']);
  }
  
}
