import { Component, DoCheck, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit,DoCheck {
  
  carts:number;
  
  constructor(
    private cart:CartService) {
  
  }

  pages:any[]=[
    {
       name:"Recipe",
       url:"/recipe"
    },
    {
      name:"Ingredient",
      url:"/ingredient"
    },
    {
      name:"cuisine",
      url:"/cuisine"
    },
    {
      name:"Most Viewed",
      url:"/view"
    }
]

  ngOnInit(){

  }
  
  ngDoCheck() {
    this.carts=this.cart.totalItems();
  }

}
