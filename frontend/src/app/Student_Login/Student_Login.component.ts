import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Student } from '../_models/student';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-slogin',
  templateUrl: './Student_Login.component.html',
  styleUrls: ['./Student_Login.component.scss']
})
export class SloginComponent implements OnInit {
  form: any = {
    rollno: null,
    name: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  loadComponent = false;
  errorMessage = '';
  letsee = "hey there";
  tname: string[] = [];
  namet: string[] = [];
  
  books: Student[] = [];
  constructor(
    private authService: AuthService,
     private tokenStorage: TokenStorageService,
     private userservice: UserService) {}
 
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
     // this.isLoggedIn = true;
      var obj  = this.tokenStorage.getUser();
      this.tname = obj.name;
      console.log("loggged in"+this.tokenStorage.getUser());
      //window.location.href = '/result';  
    }
  }
  onSubmit(myForm: NgForm): void {
    const { name, rollno } = this.form;
    myForm.resetForm();
    console.log(rollno+"  "+name);
    this.userservice.getstudentContent(rollno, name).subscribe({
      next: data => {
        console.log(data);
        this.loadComponent = true;
        this.errorMessage='';
        this.books = data;
        this.isLoginFailed = false;
        //this.reloadPage();
      },
      error: err => {
        this.loadComponent = false;
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }
}
