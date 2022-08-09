import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"home",component:HomepageComponent , canActivate: [AuthGuard]},
  {path:"about",component:AboutusComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
