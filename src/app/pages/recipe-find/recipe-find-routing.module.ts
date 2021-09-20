import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeFindPage } from './recipe-find.page';

const routes: Routes = [
  {
    path: '',
    component: RecipeFindPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeFindPageRoutingModule {}
