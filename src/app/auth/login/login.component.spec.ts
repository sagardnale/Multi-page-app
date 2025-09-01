import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invalid when empty',() =>{
    expect(component.loginForm.valid).toBeFalse();
  });
  it('email field validity - required & email format',()=>{
    const email = component.loginForm.controls['email'];
    

    email.setValue('');
    expect(email.hasError('required')).toBeTrue();

    email.setValue('worng Email Formate');
    expect(email.hasError('email')).toBeTrue();

    email.setValue('test@gmail.com');
    expect(email.valid).toBeTrue();
  })

  it('password field validity - required & minlength',()=>{
    const password = component.loginForm.controls['password'];

    password.setValue('');
    expect(password.hasError('required')).toBeTrue();

    password.setValue('123');
    expect(password.hasError('minlength')).toBeTrue();

    password.setValue('123456');
    expect(password.valid).toBeTrue();
  })

  it('form should be valid with proper input',()=>{
    component.getLoginControl('email')?.setValue('test@gmail.com');
    component.getLoginControl('password')?.setValue('123456');
    expect(component.loginForm.valid).toBeTrue();
  })

  it('should call submit when form is valid',()=>{
    spyOn(component,'onSubmit');
    component.getLoginControl('email')?.setValue('test@gmail.com');
    component.getLoginControl('password')?.setValue('123456');

    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('ngSubmit',null);

    expect(component.onSubmit).toHaveBeenCalled();
  })
});
