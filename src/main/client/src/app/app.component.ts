import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  result: string;

  constructor(private http: HttpClient){
  }

  private sayHello(): void {
    this.result = 'loading...';
    this.http.get(`/api/hello-world`, {responseType:'text'}).subscribe(response => this.result = response);
  }
}
