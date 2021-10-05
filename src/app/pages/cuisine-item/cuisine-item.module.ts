import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuisineItemPageRoutingModule } from './cuisine-item-routing.module';

import { CuisineItemPage } from './cuisine-item.page';
import { RecipeItemComponent } from 'src/app/recipe-item/recipe-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuisineItemPageRoutingModule
  ],
  declarations: [CuisineItemPage,RecipeItemComponent]
})
export class CuisineItemPageModule {}
