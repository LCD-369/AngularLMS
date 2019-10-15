import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Author } from '../models/Author';
import { AuthorService } from '../services/author.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-put-form',
  templateUrl: './put-form.component.html',
  styleUrls: ['./put-form.component.css']
})
export class PutFormComponent implements OnInit {
  @Output() updatedAuthor: EventEmitter<Author> = new EventEmitter();
  @Input() currentAuthor: Author;
  editform: FormGroup;

  constructor(private authorService: AuthorService) { }

  ngOnInit() {
    this.editform = new FormGroup({
      authorId: new FormControl(this.currentAuthor.authorId, Validators.compose([Validators.required])),
      name: new FormControl(this.currentAuthor.name, Validators.compose([Validators.required]))
    });
  }

  updateAuthor() {
    this.authorService.updateAuthorInfo(this.currentAuthor).subscribe(author => {
      this.updatedAuthor.emit(author);
    });
  }

}
