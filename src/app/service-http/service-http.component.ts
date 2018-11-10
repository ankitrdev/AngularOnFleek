import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-http',
  templateUrl: './service-http.component.html',
  styleUrls: ['./service-http.component.css']
})
export class ServiceHttpComponent implements OnInit {
  posts: any[];


  constructor(private http: Http) {
    http.get('https://jsonplaceholder.typicode.com/posts')
    .subscribe(response => {
      this.posts = response.json();
    });
  }

  createPost(title: HTMLInputElement) {}

  ngOnInit() {
  }

}
