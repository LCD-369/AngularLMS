import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Author } from '../models/Author';
import { AuthorService } from '../services/author.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Output() newAuthor: EventEmitter<Author> = new EventEmitter();
  result: Author;
  addform: FormGroup;

  constructor(private authorService: AuthorService) {}

  ngOnInit() {
    this.addform = new FormGroup({
      authorId: new FormControl(null),
      name: new FormControl(null)
    });
    this.result = ({
      authorId: null,
      name: ''
    });
  }



  addAuthor() {
      this.result.authorId = this.addform.get('authorId').value;
      this.result.name = this.addform.get('name').value;
      this.authorService.saveAuthor(this.result).subscribe
      (result => {
        this.newAuthor.emit(this.result);
      });
      console.log(this.result);

  }
}
