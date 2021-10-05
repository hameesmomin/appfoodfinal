import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IFood } from 'src/app/interface/food';
import { CartService } from 'src/app/services/cart.service';
import { FoodsService } from 'src/app/services/foods.service';

@Component({
  selector: 'app-cuisine-item',
  templateUrl: './cuisine-item.page.html',
  styleUrls: ['./cuisine-item.page.scss'],
})
export class CuisineItemPage implements OnInit,DoCheck {
  carts:number;
  errorMessage="";
  filteredFoods:IFood[];
  _listFilter: string;
  foods:IFood[];
  ingredients:any[];
  receiver:any[];

    constructor(
      private route:ActivatedRoute,
      private foodService:FoodsService,
      private cartService:CartService,
      private router:Router
      ) {
  
     }
  
     get listFilter():string {
      return this._listFilter;
    }
    set listFilter(value:string){
      this._listFilter  = value;
      this.filteredFoods = this.listFilter ? this.performFilter(this.listFilter) : this.foods;
    }
  
    performFilter(filterBy: string):IFood[]{
      filterBy = filterBy.toLocaleLowerCase();
     
      return this.foods.filter((food: IFood) =>
         food.foodName.toLocaleLowerCase().indexOf(filterBy) !== -1
         );
      
    }
  
    ngOnInit() {
      this.receiver = JSON.parse(localStorage.getItem("login"));
      if(!this.receiver){
        this.router.navigate(['/login']);
      }
    //  for get url name
      const id = this.route.snapshot.paramMap.get('id');
       if(id){
        this.getCuisine(id);
      }
    }
  
  getCuisine(name:string){
    name = name.toLocaleLowerCase();
   this.foodService.getCuisine(name).subscribe({
     next: food =>{
     this.foods = food;
     this.filteredFoods = food;  
     },
     error: err => this.errorMessage = err   
   }) 
  }
  ngDoCheck() {
    this.carts=this.cartService.totalItems();
  }

}
