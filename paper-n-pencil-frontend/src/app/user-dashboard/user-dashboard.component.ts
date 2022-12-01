import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router'

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor(private http: HttpClient) {}

  token = sessionStorage.getItem('token');
  ngOnInit(): void {
    console.log(this.token)
    this.getClanData();
    this.getUserData();
    this.getBaseData();
    this.getMembersData();
  }

  getBaseData() {
    const headers = new HttpHeaders().set('auth', this.token + "");
    const body = { };
    this.http.post<any>('http://localhost:8081/base', body, {headers}).subscribe(data => {
      console.log(data);
    });
  }

  getClanData() {
    const headers = new HttpHeaders().set('auth', this.token + "");
    const body = { };
    this.http.post<any>('http://localhost:8081/clan', body, {headers}).subscribe(data => {
      console.log(data);
    });
  }

  getUserData() {
    const headers = new HttpHeaders().set('auth', this.token + "");
    const body = { };
    this.http.post<any>('http://localhost:8081/user', body, {headers}).subscribe(data => {
      console.log(data);
    });
  }

  getMembersData() {
    const headers = new HttpHeaders().set('auth', this.token + "");
    const body = { };
    this.http.post<any>('http://localhost:8081/memebers', body, {headers}).subscribe(data => {
      console.log(data);
    });
  }
}
