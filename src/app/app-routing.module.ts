import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AccountComponent } from './pages/account/account.component';
import { LogoutComponent } from './pages/logout/logout.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'reports',component:ReportsComponent},
  {path:'settings',component:SettingsComponent,children:[
    {path:'profile',component:ProfileComponent},
    {path:'account',component:AccountComponent},
    {path:'logout',component:LogoutComponent}
  ]},
  {path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
