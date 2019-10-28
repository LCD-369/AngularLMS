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
  result: Author;

  constructor(private authorService: AuthorService) { }

  ngOnInit() {
    this.editform = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)])
    });
    this.result = ({
      authorId: null,
      name: ''
    });
  }

  updateAuthor() {
    this.result.authorId = this.currentAuthor.authorId;
    this.result.name = this.editform.get('name').value;
    this.authorService.updateAuthorInfo(this.result).subscribe(result => {
      this.updatedAuthor.emit(this.result);
    });
  }

}
