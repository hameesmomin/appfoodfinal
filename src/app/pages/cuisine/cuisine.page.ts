import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IFood } from 'src/app/interface/food';
import { CartService } from 'src/app/services/cart.service';
import { FoodsService } from 'src/app/services/foods.service';

@Component({
  selector: 'app-cuisine',
  templateUrl: './cuisine.page.html',
  styleUrls: ['./cuisine.page.scss'],
})
export class CuisinePage implements OnInit,DoCheck {

  constructor(
    private foodService:FoodsService,
    private cart:CartService,
    private router:Router
  ) { }

  receiver:any[];
  errorMessage='';
  foods:IFood[];
  cuisines:any;
  carts:number;

  ngOnInit() {
    this.receiver = JSON.parse(localStorage.getItem("login"));
    if(!this.receiver){
      this.router.navigate(['/login']);
    }
    this.foodService.getFoods().subscribe({
      next: foods => {
        this.foods = foods;

        //for get values of cuisines  
        this.cuisines =  this.foods.map((val)=>{
          return val.cuisine;
        });
        
        //do for uniqueness cuisines
       this.cuisines =this.cuisines.filter((item, i, arr) => arr.indexOf(item) === i)

      
      },
      error: err => this.errorMessage = err
    });
  }
  ngDoCheck() {
    this.carts=this.cart.totalItems();
  }

}
