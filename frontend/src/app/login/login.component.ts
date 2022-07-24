import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  tname: string[] = [];
  //tname = "";
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      var obj  = this.tokenStorage.getUser();
      this.tname = obj.name;
      console.log("loggged in"+this.tokenStorage.getUser());
      window.location.href = '/result';  
    }
  }
  onSubmit(): void {
    const { username, password } = this.form;
    console.log(password);
    this.authService.login(username, password).subscribe({
      next: data => {
        console.log(data);
        this.tokenStorage.saveToken(data.name);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser();
        console.log(this.roles);
        window.location.href = '/result';
        this.reloadPage();
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
