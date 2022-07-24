import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  tname: string[] = [];
 
  constructor( private router: Router,
    private authService: AuthService, 
    private tokenStorage: TokenStorageService,
    private userservice: UserService) {
     }
  ngOnInit(): void {
    if (this.tokenStorage.getUser()) {
      this.isLoggedIn=true;
      var obj  = this.tokenStorage.getUser();
      console.log("obj")
      console.log(obj.name);
      console.log("obj")
      if(this.tokenStorage.getUser().length === 0)
      console.log("User not found in header ")
      this.tname = obj.name;
      console.log(this.tname);
      console.log("in the onint of result");  
    }
  }
    logout() {
      this.isLoggedIn=false;
      this.tokenStorage.signOut();
      //this.authService.logout();
      this.router.navigate(['/login']);
      //this.reloadPage();
  }
}
