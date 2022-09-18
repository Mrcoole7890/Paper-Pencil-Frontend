import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void { }

  attemptLogin(username: string, password: string) {
    this.http.post<any>('http://localhost:8081/login', { userName: username, password: password }).subscribe(data => {
      console.log("data sent!");
    });
  }

}
