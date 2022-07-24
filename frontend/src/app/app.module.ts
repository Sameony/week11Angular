import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { StudentComponent } from './student/student.component';
import { ResultComponent } from './result/result.component';
import { SloginComponent } from './Student_Login/Student_Login.component';
import { SearchresultComponent } from './searchresult/searchresult.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { EditstudentComponent } from './editstudent/editstudent.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    StudentComponent,
    ResultComponent,
    SloginComponent,
    SearchresultComponent,
    AddstudentComponent,
    EditstudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
