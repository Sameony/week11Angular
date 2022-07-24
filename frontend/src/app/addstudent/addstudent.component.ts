import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.scss']
})
export class AddstudentComponent implements OnInit {
  form: any = {
    rollno: null,
    sname: null,
    dob: null,
    score: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  tname: string[] = [];
  //tname = "";
  constructor(private authService: UserService, private tokenStorage: TokenStorageService) { }
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      var obj  = this.tokenStorage.getUser();
      this.tname = obj.name;
      console.log("loggged in"+this.tokenStorage.getUser());
   //   window.location.href = '/result';  
    }
  }
  onSubmit(): void {
    const { rollno,sname,dob,score } = this.form;
    console.log(sname);
    this.authService.poststudent(rollno,sname,dob,score).subscribe({
      next: data => {
        console.log(data);
       // this.tokenStorage.saveToken(data.name);
       // this.tokenStorage.saveUser(data);
      //  this.isLoginFailed = false;
      //  this.isLoggedIn = true;
      //  this.roles = this.tokenStorage.getUser();
       // console.log(this.roles);
      //window.location.href = '/result';
      //this.reloadPage();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }
  reloadPage(): void {
    window.location.reload();
  }
}
