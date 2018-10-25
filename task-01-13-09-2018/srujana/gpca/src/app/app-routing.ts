import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component'
import{DashboardComponent} from './dashboard/dashboard.component'
import{D1Component} from './d1/d1.component';
import{D2Component} from './d2/d2.component';
export const routes: Routes = [
  {path: '' , component: LoginComponent} ,
  //{path: '' ,redirectTo:"Dashboard" ,pathMatch:"full"},
 /* {path: 'Dashboard' , component: DashboardComponent},
  {path: 'd1' , component: D1Component},*/
 {
    path: 'app',
    component :DashboardComponent,
    children: [
      {
        path: 'd1',
        loadChildren: 'src/app/d1/d1.module#D1Module'
      },
      {
        path: 'd2',
        loadChildren: 'src/app/d2/d2.module#D2Module'
      }
      ]
  }


  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}