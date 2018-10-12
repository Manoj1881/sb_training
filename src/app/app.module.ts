import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AppRoutingModule} from './app-routing'
import { NavbarComponent } from './components/navbar/navbar.component'
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { FullarticleComponent } from './fullarticle/fullarticle.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    FullarticleComponent,
    
    ],
  imports: [
    BrowserModule,AppRoutingModule,AccordionModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
