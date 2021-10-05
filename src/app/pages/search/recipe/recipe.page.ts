import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IFood } from 'src/app/interface/food';
import { CartService } from 'src/app/services/cart.service';
import { FoodsService } from 'src/app/services/foods.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit,DoCheck {
  receiver:any[];
  carts:number;
  counter:number;
  filteredFoods:IFood[];
  foods: IFood[];
  _listFilter: string;
  sub!: Subscription;
  errorMessage = '';

  get listFilter():string {
    return this._listFilter;
  }
  set listFilter(value:string){
    this._listFilter  = value;
    this.filteredFoods = this.listFilter ? this.performFilter(this.listFilter) : this.foods;
    this.counter = this.filteredFoods.length;
  }

  performFilter(filterBy: string):IFood[]{
    filterBy = filterBy.toLocaleLowerCase();
   
    return this.foods.filter((food: IFood) =>
       food.foodName.toLocaleLowerCase().indexOf(filterBy) !== -1
       );
    
  }

  constructor(
    private foodService:FoodsService,
    private cartService:CartService,
    private router:Router
  ) { }

  ngOnInit() {
    this.receiver = JSON.parse(localStorage.getItem("login"));
    if(!this.receiver){
      this.router.navigate(['/login']);
    }
    this.sub = this.foodService.getFoods().subscribe({
      next: foods => {
        this.foods = foods;
        this.filteredFoods = foods;  
      },
      error: err => this.errorMessage = err
    });
  }
  ngDoCheck() {
    this.carts=this.cartService.totalItems();
  }

}
