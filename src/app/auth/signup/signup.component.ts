import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signupForm!: FormGroup;
  constructor(
    public readonly shared: SharedService,
    private readonly fb: FormBuilder,
    private readonly toast: ToastService
  ) {}

  ngOnInit() {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  getSignUpControl(controlName: string) {
    return this.signupForm.get(controlName);
  }

  onSignup() {
    if (this.signupForm.valid) {
      this.toast.success('Account created successfully!', 'Welcome 🎉');
    } else {
      this.toast.warning('Check your form details', 'Validation Warning');
    }
  }
}
