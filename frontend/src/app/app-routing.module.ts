import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ResultComponent } from './result/result.component';
import { StudentComponent } from './student/student.component';
import { SloginComponent } from './Student_Login/Student_Login.component';
import { HomeComponent } from './home/home.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { EditstudentComponent } from './editstudent/editstudent.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'result', component: ResultComponent},
  { path: 'student', component:StudentComponent},
  { path: 'slogin', component:SloginComponent},
  { path: 'home', component:HomeComponent},
  { path:'addstudent', component:AddstudentComponent},
  { path:'editstudent/:rollno',component:EditstudentComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
