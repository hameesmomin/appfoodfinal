import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { IngredientPageRoutingModule } from './ingredient-routing.module';
import { IngredientPage } from './ingredient.page';
import { IngredientItemComponent } from 'src/app/ingredient-item/ingredient-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngredientPageRoutingModule
  ],
  declarations: [IngredientPage,IngredientItemComponent]
})
export class IngredientPageModule {}
