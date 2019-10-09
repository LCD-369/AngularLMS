import { Component, OnInit, ViewChild } from '@angular/core';
import { Author } from '../models/Author';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-authortable',
  templateUrl: './authortable.component.html',
  styleUrls: ['./authortable.component.css']
})
export class AuthortableComponent implements OnInit {

  authors: Author[];
  author: Author = {
    id: null,
    name: ''
  }
  @ViewChild('authorForm') form: any;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.authors = this.dataService.getAuthors();
  }

  addAuthor(){

  }

  onSubmit(){

  }

}
