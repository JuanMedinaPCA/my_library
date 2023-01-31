import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../services/library.service';

@Component({
  selector: 'app-top10',
  templateUrl: './top10.page.html',
  styleUrls: ['./top10.page.scss'],
})
export class Top10Page implements OnInit {

  listTop10: any;

  constructor(private libraryService: LibraryService) { }

  ngOnInit() {
    this.getListTop10();
  }

  getListTop10(){
    this.libraryService.getListTop10().then((data: any) => {
      this.listTop10 = data
    })
  }
}
