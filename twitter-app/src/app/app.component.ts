import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as Typed from 'typed.js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';
  searchquery = '';
  tweetsdata;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const headers = new HttpHeaders({'Content-Type': 'application/X-www-form-urlencoded'});

    this.http.post('http://localhost:3000/authorize', {headers: headers}).subscribe((res) => {
      console.log(res);
    });

    const options = {
      strings: ['TWITTER TRENDS'],
      typeSpeed: 150,
      showCursor: false
    };

    const typed = new Typed('.typing-element', options);
  }

  searchcall() {
    const headers = new HttpHeaders({'Content-Type': 'application/X-www-form-urlencoded'});
    const searchterm = 'query=' + this.searchquery;

    this.http.post('http://localhost:3000/search', searchterm, {headers: headers}).subscribe((res: any) => {
      this.tweetsdata = res.data.statuses;
    });
  }


}
