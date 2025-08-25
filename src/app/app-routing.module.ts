import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AccountComponent } from './pages/account/account.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';

const routes: Routes = [
  {path:'',component: HomeComponent, data:{animation:'Home'}},
  {path:'reports',component:ReportsComponent, data:{animation:'Reports'}},
  {path:'settings',component:SettingsComponent , data:{animation:'Settings'},children:[
    {path:'',redirectTo:'profile', pathMatch:'full'},
    {path:'profile',component:ProfileComponent,data:{animation:'Profile'}},
    {path:'account',component:AccountComponent,data:{animation:'Account'}},
    {path:'logout',component:LogoutComponent,data:{animation:'Logout'}}
  ]},
  {path:'login',component:LogoutComponent},
  {path:'signup',component:SignupComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'reset-password',component:ResetPasswordComponent},
  {path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
