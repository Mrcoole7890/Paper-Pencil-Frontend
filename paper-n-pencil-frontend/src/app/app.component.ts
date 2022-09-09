import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.post<any>('http://localhost:8081/login', { userName: 'ColeKendall', password: 'password' }).subscribe(data => {
            console.log("data sent!");
    })
  }

  title = 'paper-n-pencil-frontend';
}
