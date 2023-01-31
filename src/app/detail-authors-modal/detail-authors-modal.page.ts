import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { LibraryService } from '../services/library.service';

@Component({
  selector: 'app-detail-authors-modal',
  templateUrl: './detail-authors-modal.page.html',
  styleUrls: ['./detail-authors-modal.page.scss'],
})
export class DetailAuthorsModalPage implements OnInit {

  author: any;
  authors: any;
  

  constructor(private modalController: ModalController,
    private libraryService: LibraryService,
    private navParams: NavParams) { }

  ngOnInit() {
     this.author = this.navParams.get("authors")
     console.log(this.author)
  }

  closeModal(){
    this.modalController.dismiss(); 
  }
}
