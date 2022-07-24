import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../_models/student';
const API_URL = 'http://localhost:5000/api/';

const AUTH_API = 'http://localhost:5000/api/';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
    getPublicContent(): Observable<any> {
    const newLocal = 'json';
    return this.http.get<Student[]>(`${AUTH_API}all`);
  }
  getstudentContent(rollno: string, name: string): Observable<any> {
    console.log(rollno);
    console.log(name);
   
    return this.http.post<any>(`${AUTH_API}studentdata`, {
      rollno,
      name
    });
  }
  //add new student
  poststudent(rollno: Number,name: string,dob: Date,score : Number): Observable<any> {
    console.log(rollno);
    console.log(name);
    console.log(dob);
    console.log(score);
    
    return this.http.post<any>(`${AUTH_API}new`, {
      rollno,
      name,
      dob,
      score
    });
  }

  //delete
  deletestudent(rollno: string): Observable<any> {
    console.log(`${rollno} now what to do`);
    
    return this.http.post<any>(`${AUTH_API}delete`, {
      rollno
    });
  }
  //
  getaStudent(rollno: number): Observable<any> {
    console.log("In getstudent methode "+rollno)
    return this.http.post<any>(`${AUTH_API}edit`, {
      rollno
      });
  }
  // updateStudent(rollno: Number,name: string,dob: Date,score : Number): Observable<any> {
  //   console.log(rollno);
  //   console.log(name);
  //   console.log(dob);
  //   console.log(score);
    
  //   return this.http.put<any>(`${AUTH_API}new`, {
  //     rollno,
  //     name,
  //     dob,
  //     score
  //   });
  // }
  //
  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'tall', { responseType: 'text' });
  }
  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
}