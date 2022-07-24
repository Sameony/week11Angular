import { Component, OnInit } from '@angular/core';
import { Student } from '../_models/student';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  retrivedata: Array<object> = [];
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  tname: string[] = [];
  st_data: Student[] = [];
  constructor(private authService: AuthService, 
    private tokenStorage: TokenStorageService,
    private userservice: UserService) {
     }
  ngOnInit(): void {
    if (this.tokenStorage.getUser()) {
      this.isLoggedIn = true;
      var obj  = this.tokenStorage.getUser();
      this.tname = obj.name;

      console.log("in the onint of result");
      var student = this.userservice.getPublicContent().subscribe({
        next: data => {
          this.st_data = data;
          console.log("data output"+this.st_data[1].name);
        },
        error: err => {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
        }

      });
    //  console.log(student); 
      console.log("end");
  }
}

deleteUser(id: string) {
  console.log(id);
  this.userservice.deletestudent(id).subscribe({
    next: data => {
      console.log(data);
    }

 })
 this.reloadPage();
};
editUser(rollno:string){
  this.tokenStorage.saveStudent(parseInt(rollno));
  window.location.href = '/editstudent';
  this.userservice.getaStudent;
}
 reloadPage(): void {
  window.location.reload();
}

}