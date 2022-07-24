import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const AUTH_API = 'http://localhost:5000/api/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  
  login(name: string, password: string): Observable<any> {
    console.log(password);
    console.log(name);
   
    return this.http.post<any>(`${AUTH_API}tall`, {
      name,
      password
    });
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.removeItem(USER_KEY);
  
   // this.currentUserSubject.next(null);
}



}
