import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailAuthorsModalPageRoutingModule } from './detail-authors-modal-routing.module';

import { DetailAuthorsModalPage } from './detail-authors-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailAuthorsModalPageRoutingModule
  ],
  declarations: [DetailAuthorsModalPage]
})
export class DetailAuthorsModalPageModule {}
