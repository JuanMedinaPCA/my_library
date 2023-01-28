import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../services/library.service';

import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.page.html',
  styleUrls: ['./authors.page.scss'],
})
export class AuthorsPage implements OnInit {

authors: any;

  constructor(private libraryService: LibraryService,
    private modalController: ModalController) { }

  ngOnInit() {
    this.libraryService.getAuthors().then( res =>{
      this.authors = res;
    })
  }

  /*async showAuthor(authors: any){
    const modal = await this.modalController.create({
      component: AuthorsModalPage,
      componentProps: {
        authors: authors
      }
    });
    return await modal.present();
  }  */
}
