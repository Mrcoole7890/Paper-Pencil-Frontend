import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void { }

  attemptRegister(username: string, password: string) {
    this.http.post<any>('http://localhost:8081/register', { userName: username, password: password }).subscribe(data => {
      console.log("data sent!");
    });
  }


}
