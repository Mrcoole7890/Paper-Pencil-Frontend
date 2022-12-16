import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  errorFound = false;
  errorMessage = "";
  classesOfAlert = "alert alert-warning alert-dismissible fade";

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void { }

  attemptRegister(username: string, password: string) {
    this.http.post<any>('http://localhost:8081/register', { username: username, password: password }).subscribe(data => {
      if (this.isErrorFound(data) == 0) this.userRegisterSuccess();
      else if (this.isErrorFound(data) == 1) this.userRegisterExists();
    });
  }

  userRegisterSuccess() {
    this.errorMessage = "User has been registered!";
    this.classesOfAlert = "alert alert-success alert-dismissible fade show";
  }

  userRegisterExists() {
    this.errorMessage = "This user exists already.";
    this.classesOfAlert = "alert alert-warning alert-dismissible fade show";
  }

  isErrorFound(responce: any) {
    if(responce.status == "USInUse") return 1;
    else return 0;
  }


}
