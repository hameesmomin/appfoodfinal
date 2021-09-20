import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipeFindPageRoutingModule } from './recipe-find-routing.module';

import { RecipeFindPage } from './recipe-find.page';
import { RecipeItemComponent } from 'src/app/recipe-item/recipe-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipeFindPageRoutingModule
  ],
  declarations: [RecipeFindPage,RecipeItemComponent]
})
export class RecipeFindPageModule {}
