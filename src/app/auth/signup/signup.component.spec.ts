import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupComponent } from './signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { By } from '@angular/platform-browser';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupComponent],
      imports: [ReactiveFormsModule, ToastrModule.forRoot()],
    });
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Sign up form should be invalid when empty', () => {
    expect(component.signupForm.valid).toBeFalse();
  });
  it('Name field validity - required & minLenght', () => {
    const name = component.getSignUpControl('name');
    name?.setValue('');
    expect(name?.hasError('required')).toBeTrue();

    name?.setValue('test 123');
    expect(name?.hasError('minlength')).toBeFalse();

    name?.setValue('test 1234');
    expect(name?.valid).toBeTrue();
  });

  it('Email field validity - required & email', () => {
    const email = component.getSignUpControl('email');

    email?.setValue('');
    expect(email?.hasError('required')).toBeTrue();

    email?.setValue('wrongEmailformat');
    expect(email?.hasError('email')).toBeTrue();

    email?.setValue('text@gmail.com');
    expect(email?.valid).toBeTrue();
  });

  it('password field validity - required & minlength', () => {
    const password = component.getSignUpControl('password');

    password?.setValue('');
    expect(password?.hasError('required')).toBeTrue();

    password?.setValue('123');
    expect(password?.hasError('minlength')).toBeTrue();

    password?.setValue('123456');
    expect(password?.valid).toBeTrue();
  });
  it('form should be valid with proper input', () => {
    component.getSignUpControl('name')?.setValue('Sagar Test');
    component.getSignUpControl('email')?.setValue('test@gmail.com');
    component.getSignUpControl('password')?.setValue('123456');
    expect(component.signupForm.valid).toBeTrue();
  });

  it('should call submit when form is valid', () => {
    spyOn(component, 'onSignup');
    component.getSignUpControl('name')?.setValue('Testing');
    component.getSignUpControl('email')?.setValue('test@gmail.com');
    component.getSignUpControl('password')?.setValue('123456');

    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('ngSubmit', null);

    expect(component.onSignup).toHaveBeenCalled();
  });
});
