import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  resetPasswordForm! : FormGroup;
  constructor(public readonly shared:SharedService, private readonly fb:FormBuilder){}

  ngOnInit(){
    this.resetPasswordForm = this.fb.group({
      password:['',[Validators.required,Validators.minLength(6)]],
      confirmPassword:['',[Validators.required]]
    })
  }

  getResetPasswordFormControl(controlName:string){
    return this.resetPasswordForm.get(controlName);
  }
  onResetPassword(){
    if(this.resetPasswordForm.valid){
      console.log("reset password forms values",this.resetPasswordForm.value);
    }else{
      this.resetPasswordForm.markAllAsTouched();
    }
  }
}
