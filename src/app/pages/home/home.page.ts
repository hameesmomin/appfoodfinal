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

  ngOnInit(){

  }
  
  ngDoCheck() {
    this.carts=this.cart.totalItems();
  }

}
