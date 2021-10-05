import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuisineItemPage } from './cuisine-item.page';

const routes: Routes = [
  {
    path: '',
    component: CuisineItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuisineItemPageRoutingModule {}
