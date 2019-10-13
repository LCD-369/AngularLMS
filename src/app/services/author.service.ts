import { Injectable } from '@angular/core';
import { Author } from '../models/Author';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable()
export class AuthorService {
  postUrl: string = 'http://localhost:8082/administrator/author/';

  constructor(private http: HttpClient) { }

  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(this.postUrl);
  }

  saveAuthor(author: Author): Observable<Author> {
    return this.http.post<Author>(this.postUrl, author, httpOptions);
  }

  updateAuthorInfo(author: Author): Observable<Author> {
    const url = '${this.postUrl}${author.authorId}';
    return this.http.put<Author>(url, author, httpOptions);
  }

}
