import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TestComponent } from './test/test.component';
import { AssesmentComponent } from './assesment/assesment.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'

  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'test',
    component:TestComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'assesment',
    component:AssesmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
