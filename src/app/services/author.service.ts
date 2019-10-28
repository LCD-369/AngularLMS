import { Injectable } from '@angular/core';
import { Author } from '../models/Author';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable()
export class AuthorService {
postUrl = 'http://localhost:8082/administrator/author/';

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    return throwError('A data error occurred, please try again.');
  }

  getAuthors() {
    return this.http.get<Author[]>(this.postUrl)
    .pipe(catchError(this.handleError));
  }

  saveAuthor(author: Author) {
    return this.http.post(this.postUrl, author).pipe(catchError(this.handleError));
  }

  deleteAuthor(author: Author) {
    const id = author.authorId;
    const authorid = id.toString();
    const url = this.postUrl.concat(authorid);
    return this.http.delete(url).pipe(catchError(this.handleError));
  }

  updateAuthorInfo(author: Author) {
    return this.http.put(this.postUrl, author).pipe(catchError(this.handleError));
  }



}
