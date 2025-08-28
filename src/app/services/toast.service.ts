import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private readonly toastr: ToastService) { }
  
  success(message: string,title?:string){
    this.toastr.success(message,title);
  }
  error(message:string,title?:string){
    this.toastr.error(message,title);
  }
  info(message:string,title?:string){
    this.toastr.error(message,title);
  }
  warning(message:string,title?:string){
    this.toastr.warning(message,title);
  }
}
