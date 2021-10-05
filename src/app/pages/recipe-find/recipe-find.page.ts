import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IFood } from 'src/app/interface/food';
import { CartService } from 'src/app/services/cart.service';
import { FoodsService } from 'src/app/services/foods.service';

@Component({
  selector: 'app-recipe-find',
  templateUrl: './recipe-find.page.html',
  styleUrls: ['./recipe-find.page.scss'],
})
export class RecipeFindPage implements OnInit {
  receiver:any[];
  constructor(private cartService:CartService,
    private foodService:FoodsService,
    private router:Router
     ) { }
   
   recipes:IFood[];  
   ingredients:any[];
   foods:IFood[];
   errorMessage='';
  ngOnInit() {
    this.receiver = JSON.parse(localStorage.getItem("login"));
    if(!this.receiver){
      this.router.navigate(['/login']);
    }
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
