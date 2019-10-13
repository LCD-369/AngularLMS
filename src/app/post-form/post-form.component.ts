import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Author } from '../models/Author';
import { AuthorService } from '../services/author.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Output() newAuthor: EventEmitter<Author> = new EventEmitter();
  @Output() updatedAuthor: EventEmitter<Author> = new EventEmitter();
  @Input() currentAuthor: Author;
  @Input() isEdit: boolean;


  constructor(private authorService: AuthorService) { }

  ngOnInit() {
  }

  addAuthor(authorId, authorName) {
    if(!authorId || !authorName) {
      alert('Missing required field');
    } else {
      this.authorService.saveAuthor({authorId, authorName} as Author).subscribe
      (author => {
        this.newAuthor.emit(author);
      });
    }
  }
  updateAuthor() {
    this.authorService.updateAuthorInfo(this.currentAuthor).subscribe(author => {
      this.isEdit = false;
      this.updatedAuthor.emit(author);
    })
  }

}
