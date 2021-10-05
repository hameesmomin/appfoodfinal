import { Component, OnInit } from '@angular/core';
import { IFood } from 'src/app/interface/food';
import { CartService } from 'src/app/services/cart.service';
import { FoodsService } from 'src/app/services/foods.service';

@Component({
  selector: 'app-recipe-find',
  templateUrl: './recipe-find.page.html',
  styleUrls: ['./recipe-find.page.scss'],
})
export class RecipeFindPage implements OnInit {

  constructor(private cartService:CartService,
    private foodService:FoodsService
     ) { }
   
   recipes:IFood[];  
   ingredients:any[];
   foods:IFood[];
   errorMessage='';
  ngOnInit() {
    this.foodService.getFoods().subscribe({
      next: foods => {
        this.foods = foods;  
        this.recipes = this.foods.filter(d => d.ingredients.some(c => this.ingredients.includes(c.name)));
      },
      error: err => this.errorMessage = err
    });
    this.ingredients=this.cartService.getName();
  }

}
