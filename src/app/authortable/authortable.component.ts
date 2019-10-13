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
  currentAuthor: Author = {
    authorId: 0,
    authorName: ''
  }
  isEdit: boolean = false;


  constructor(private authorService: AuthorService) {
  }

  ngOnInit() {
    this.authorService.getAuthors().subscribe(authors => {
      this.authors = authors;
    });
  }

  onNewAuthor(author: Author) {
    this.authors.unshift(author);
  }

  editAuthor(author: Author) {
    this.currentAuthor = author
    this.isEdit = true;
  }

  onUpdatedAuthor(author: Author) {
    this.authors.forEach((currentAuthor, index) => {
      if(author.authorId === currentAuthor.authorId) {
        this.authors.splice(index, 1);
        this.authors.unshift(author);
        this.isEdit = false;
        this.currentAuthor = {
          authorId: 0,
          authorName: ''
        }
      }
    })
  }

  createAuthor() {
    this.isEdit = false;
  }

}
