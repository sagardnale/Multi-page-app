import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signupForm!: FormGroup;
  constructor(
    public readonly shared: SharedService,
    private readonly fb: FormBuilder
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
      console.log('sign up form input values', this.signupForm.value);
    }
  }
}
