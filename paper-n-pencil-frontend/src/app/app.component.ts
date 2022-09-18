import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) { }

  getValidation(token: string): void {
    this.http.get<any>('http://localhost:8081/user/validateToken', { headers: new HttpHeaders({'auth': token})}).subscribe(res => {
      console.log(res.message);
    });
  }

  ngOnInit(): void {

    var token = ""

    this.http.post<any>('http://localhost:8081/user/generateToken', { userName: 'ColeKendall', password: 'password' }).subscribe(data => {
              token = data.generatedToken;
              console.log("Token Returned: " + token);
              this.getValidation(token);
    })


    

  }

  title = 'paper-n-pencil-frontend';
}
