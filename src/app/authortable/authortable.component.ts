import { Component, OnInit } from '@angular/core';
import { Author } from '../models/Author';
import { AuthorService } from '../services/author.service';

@Component({
  selector: 'app-authortable',
  templateUrl: './authortable.component.html',
  styleUrls: ['./authortable.component.css']
})

export class AuthortableComponent implements OnInit {
  authors: Author[];
  isLoading: boolean;
  currentAuthor: Author;

  constructor(private authorService: AuthorService) {}

  ngOnInit() {
    this.isLoading = true;
    this.authorService.getAuthors().subscribe(authors => {
      this.authors = authors;
      this.isLoading = false;
    });
  }

  onNewAuthor(author: Author) {
    this.authors.unshift(author);
  }

  editAuthor(author: Author) {
    this.currentAuthor = author;
  }

  onUpdatedAuthor(author: Author) {
    this.authors.forEach((cur, index) => {
      if(author.authorId === cur.authorId) {
        this.authors.splice(index, 1);
        this.authors.unshift(author);
      }
    })
  }

  removeAuthor(author: Author){
    this.authorService.deleteAuthor(author).subscribe();
    this.authors.forEach((cur, index) => {
      if(author.authorId === cur.authorId) {
        this.authors.unshift(author);
      }
    })
  }

}
