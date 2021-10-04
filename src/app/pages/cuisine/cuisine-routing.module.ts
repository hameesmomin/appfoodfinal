import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuisinePage } from './cuisine.page';

const routes: Routes = [
  {
    path: '',
    component: CuisinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuisinePageRoutingModule {}
