import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.scss']
})
export class EditstudentComponent implements OnInit {
  form: any = {
    rollno: null,
    name: null,
    dobs: null,
    score: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  tname: string[] = [];
  constructor(private _router: Router, private userService: UserService, private tokenStorage: TokenStorageService, private router:ActivatedRoute) {
     }
     
     ngOnInit(): void {
       this.userService.getaStudent(this.router.snapshot.params['rollno']).subscribe((result=>{
         console.log("hello, reuslt is",result)
         this.form=result;
       }))

      if (this.tokenStorage.getToken()) {
        this.isLoggedIn = true;
        var obj  = this.tokenStorage.getUser();
        this.tname = obj.name;
      }
    }
    onSubmit(): void {
      const { rollno,name,dobs,score } = this.form;
      console.log(rollno, dobs,name, score);
      this.userService.deletestudent(this.router.snapshot.params['rollno'].toString()).subscribe({
        next: data => {
          console.log(data);
        }
    
     })
      this.userService.poststudent(rollno,name, dobs, score).subscribe((result)=>{
        console.log(result)
      })
      
      this._router.navigate(['result'])
      
    }
  


}
