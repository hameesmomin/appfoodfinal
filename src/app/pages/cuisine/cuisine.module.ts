import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuisinePageRoutingModule } from './cuisine-routing.module';

import { CuisinePage } from './cuisine.page';
import { RecipeItemComponent } from 'src/app/recipe-item/recipe-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuisinePageRoutingModule
  ],
  declarations: [CuisinePage,RecipeItemComponent]
})
export class CuisinePageModule {}
