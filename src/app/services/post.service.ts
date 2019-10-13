import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/Post';


@Injectable()
export class PostService {
  postUrl: string = 'https://localhost:8081/author/';
  constructor(private http: HttpClient) {
  }

  getPosts() : Observable<Post[]> {
    return this.http.get<Post[]>(this.postUrl);
  }
}
