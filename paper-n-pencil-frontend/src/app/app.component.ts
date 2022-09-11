import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  token: string = "";
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    

    this.http.post<any>('http://localhost:8081/login', { userName: 'GavinKendall', password: 'password1' }).subscribe(data => {
            console.log("data sent!");
            
    })
    this.http.post<any>('http://localhost:8081/user/generateToken', { userName: 'ColeKendall', password: 'password' }).subscribe(data => {
              this.token = data.generatedToken;
              console.log("Token Returned: " + data.generatedToken);
    })
  }

  title = 'paper-n-pencil-frontend';
}
