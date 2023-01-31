import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailAuthorsModalPage } from './detail-authors-modal.page';

const routes: Routes = [
  {
    path: '',
    component: DetailAuthorsModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailAuthorsModalPageRoutingModule {}
