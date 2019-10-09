import { Injectable } from '@angular/core';
import { Author } from '../models/Author';

@Injectable(

)
export class DataService {

  authors: Author[];

  constructor() {
    this.authors = [{
      id: 1,
      name: 'John'
    },
    {
      id: 2,
      name: 'Louis'
    },
    {
      id: 3,
      name: 'Joe'
    }
  ]
  }

  getAuthors(): Author[]{
    return this.authors;
  }

  }
