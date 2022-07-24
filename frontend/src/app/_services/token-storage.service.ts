import { Injectable } from '@angular/core';
import { Student } from '../_models/student';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const STUDENT_KEY = 'stud-user';
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() { }
  signOut(): void {
    window.sessionStorage.clear();
  }
  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }
  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }
  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }
  public saveStudent(user: any): void {
    //window.sessionStorage.removeItem(USER_KEY);
    console.log("int rollno  "+user);
    window.sessionStorage.setItem(STUDENT_KEY, JSON.stringify(user));
  }
  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    console.log("getuser");
    console.log(user);
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }
  public getStudent(): any {
    const user = window.sessionStorage.getItem(STUDENT_KEY);
    console.log("getstudent = "+user);
  
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }
}