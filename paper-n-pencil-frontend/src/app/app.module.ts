import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
        {path: 'app-login', component: LoginComponent},
        {path: 'app-register', component: RegisterComponent},
        {path: '', redirectTo: '/app-login', pathMatch: 'full'},
        {path: 'app-register-redirect', redirectTo: '/app-register', pathMatch: 'full'}
  ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
