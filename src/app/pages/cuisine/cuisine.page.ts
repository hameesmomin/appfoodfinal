import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/interface/ingredient';
import { IngredientService } from 'src/app/services/ingredient.service';

@Component({
  selector: 'app-cuisine',
  templateUrl: './cuisine.page.html',
  styleUrls: ['./cuisine.page.scss'],
})
export class CuisinePage implements OnInit {

  constructor(private CuisineService:IngredientService){

  }
ingredients:Ingredient[];
errorMessage="";
  ngOnInit(){

    this.CuisineService.getIngredients().subscribe({
      next: foods => {
        this.foods = foods;

      },
      error: err => this.errorMessage = err
    });
    console.log(this.foods);


  }

}
