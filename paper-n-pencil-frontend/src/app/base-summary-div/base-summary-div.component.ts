import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-base-summary-div',
  templateUrl: './base-summary-div.component.html',
  styleUrls: ['./base-summary-div.component.css']
})
export class BaseSummaryDivComponent implements OnInit {

  constructor(private http: HttpClient) {}

  token = sessionStorage.getItem('token');
  basesize = "";
  baseLocation = "";
  ngOnInit(): void {
    this.getBaseData();
  }

  getBaseData() {
    const headers = new HttpHeaders().set('auth', this.token + "");
    const body = { };
    this.http.post<any>('http://localhost:8081/base', body, {headers}).subscribe(data => {
      this.basesize = data.size;
      this.baseLocation = data.location;
    });
  }

}
