import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../services/library.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
})
export class BooksPage implements OnInit {

  books: any;

  constructor(private librarySevice: LibraryService) { }

  ngOnInit() {
    this.librarySevice.getBooks().then(books => {
      this.books = books;
    })
  }

}
