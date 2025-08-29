import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SharedService } from 'src/app/services/shared.service';
import { ToastService } from 'src/app/services/toast.service';

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
    private readonly fb: FormBuilder,
    private readonly toast: ToastService
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  getLoginControl(controlName: any) {
    return this.loginForm.get(controlName);
  }
  onSubmit() {
    if (this.loginForm.valid) {
      this.toast.success('Logged in successfully!', 'Success');
    } else {
      this.toast.error('Please fix errors before submitting', 'Form Invalid');
    }
  }
}
