import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-info-header',
  templateUrl: './info-header.component.html',
  styleUrls: ['./info-header.component.css']
})
export class InfoHeaderComponent implements OnInit {

  constructor(private http: HttpClient) { }

  token = sessionStorage.getItem("token");
  username = "";
  clanname = "";

  ngOnInit(): void {
    this.getUserData();
    this.getClanData();
  }

  getUserData() {
    const headers = new HttpHeaders().set('auth', this.token + "");
    const body = { };
    this.http.post<any>('http://localhost:8081/user', body, {headers}).subscribe(data => {
      this.username = data.username;
    });
  }

  getClanData() {
    const headers = new HttpHeaders().set('auth', this.token + "");
    const body = { };
    this.http.post<any>('http://localhost:8081/clan', body, {headers}).subscribe(data => {
      this.clanname = data.clanName;
    });
  }
}
