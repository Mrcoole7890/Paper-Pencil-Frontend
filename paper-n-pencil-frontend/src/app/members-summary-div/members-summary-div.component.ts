import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-members-summary-div',
  templateUrl: './members-summary-div.component.html',
  styleUrls: ['./members-summary-div.component.css']
})
export class MembersSummaryDivComponent implements OnInit {

  constructor(private http: HttpClient) {}

  token = sessionStorage.getItem('token');
  members: any[] = [];
  ngOnInit(): void {
    this.getMembersData();
  }

  getMembersData() {
    const headers = new HttpHeaders().set('auth', this.token + "");
    const body = { };
    this.http.post<any>('http://localhost:8081/memebers', body, {headers}).subscribe(data => {
      for (let i = 0; i < data.memebers.length; i++)
        this.members.push(data.memebers[i]);
    });
  }
}
