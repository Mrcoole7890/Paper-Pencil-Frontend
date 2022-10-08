import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  errorFound = false;
  errorMessage = "";
  classesOfAlert = "alert alert-warning alert-dismissible fade";

  constructor(private http: HttpClient, private _router: Router) {

  }

  ngOnInit(): void { }

  attemptLogin(username: string, password: string) {
    this.http.post<any>('http://localhost:8081/login', { userName: username, password: password }).subscribe(data => {
      if (this.isErrorFound(data) == 0) {
        this.userLoginSuccess();
        sessionStorage.setItem('token', data.token);
        this._router.navigate(['/user-dashboard']);    
      }
      else if (this.isErrorFound(data) == 1) this.userLoginIncorrect();
    });
  }

  userLoginSuccess() {
    this.errorMessage = "Welcome!";
    this.classesOfAlert = "alert alert-success alert-dismissible fade show";
  }

  userLoginIncorrect() {
    this.errorMessage = "This username and/or password are incorrect.";
    this.classesOfAlert = "alert alert-danger alert-dismissible fade show"; 
  }

  isErrorFound(responce: any) {
    if(responce.status == "UNotF") return 1;
    else if (responce.status == "Good") return 0;
    else return 0;
  } 

}
