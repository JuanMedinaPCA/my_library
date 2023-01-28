import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../services/library.service';
import { BookDetailModalPage } from '../book-detail-modal/book-detail-modal.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
})
export class BooksPage implements OnInit {

  books: any;

  constructor(private librarySevice: LibraryService,
    private modalController: ModalController) { }

  ngOnInit() {
    this.librarySevice.getBooks().then(books => {
      this.books = books;
    })
  }

  async showBook(book: any){
    const modal = await this.modalController.create({
      component: BookDetailModalPage,
      componentProps: {
        book: book
      }
    });
    return await modal.present();
  }
}
