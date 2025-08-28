import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent {
  forgotPasswordForm!: FormGroup;
  constructor(private readonly fb: FormBuilder) {}

  ngOnInit() {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  getForgotPasswordFormControl(controlName: string) {
    return this.forgotPasswordForm.get(controlName);
  }

  onForgotPassword() {
    if (this.forgotPasswordForm.valid) {
      console.log('forgot password form values', this.forgotPasswordForm.value);
    }
  }
}
