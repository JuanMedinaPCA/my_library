import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../services/library.service';
import { Storage } from '@ionic/storage-angular';
import { AlertController, ModalController } from '@ionic/angular';
import { BookDetailModalPage } from '../book-detail-modal/book-detail-modal.page';

@Component({
  selector: 'app-favorite-books',
  templateUrl: './favorite-books.page.html',
  styleUrls: ['./favorite-books.page.scss'],
})
export class FavoriteBooksPage implements OnInit {

  my_favorite_books: any; 
  books: any;

  constructor(
    private libraryService: LibraryService,
    private storage: Storage,
    private alertController: AlertController,
    private modalController: ModalController
    ) { }

  async ngOnInit() {
    this.libraryService.getBooks().then(books => {
      this.books = books;
    })
    const user_id = await this.storage.get("user_id");
    this.libraryService.getMyFavoriteBooks(user_id).subscribe((data:any) =>{
      this.my_favorite_books = data
    },
    (error) => 
      this.presentAlert("Opps", "hubo un error", error)
    )
  }

  async presentAlert(header: any, subHeader: any, message: any) {
    const alert = await this.alertController.create(
      {
        header: header,
        subHeader: subHeader,
        message: message,
        buttons: ['Ok']
      }
    );
    await alert.present(); 
  }

  async showBook(books: any){
    const modal = await this.modalController.create({
      component: BookDetailModalPage,
      componentProps: {
        book: books
      }
    });
    return await modal.present(); 
  }
}
