import { Injectable } from '@angular/core';
import { ICart } from '../interface/cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  receiver = [];
  newId: number;

  constructor() {
    if (JSON.parse(localStorage.getItem('carts')) != null) {
      this.receiver = JSON.parse(localStorage.getItem('carts'));
    } else {
      this.receiver = [];
    }

    if (this.receiver.length !== 0) {
      let maxId = this.receiver[this.receiver.length - 1].id;
      this.newId = maxId + 1;
    }
    if (
      JSON.parse(localStorage.getItem('carts')) == null ||
      this.receiver.length == 0
    ) {
      this.newId = 0;
    }
    
  }

  totalItems():number{
    return this.receiver.length;
  }

  addToCart(newItem: ICart) {
    this.receiver.push(newItem);

    localStorage.setItem('carts', JSON.stringify(this.receiver));
    this.newId++;
  }

  checkIngredient(food: string): boolean {
    if (JSON.parse(localStorage.getItem('carts')) != null) {
      for (let index = 0; index < this.receiver.length; index++) {
        if (this.receiver[index].name == food) {
          this.receiver[index].quantity += 1;
          localStorage.setItem('carts', JSON.stringify(this.receiver));
          return true;
        }
      }
    }
  }

  changeQuantity(quantity: number, id: number): void {
    for (let index = 0; index < this.receiver.length; index++) {
      if (this.receiver[index].id == id) {
        this.receiver[index].quantity += quantity;
        localStorage.setItem('carts', JSON.stringify(this.receiver));
      }
    }
  }

  removeItem(id: number) {
    for (let index = 0; index < this.receiver.length; index++) {
      if (this.receiver[index].id == id) {
        this.receiver.splice(index, 1);
      }
      localStorage.setItem('carts', JSON.stringify(this.receiver));
    }
  }
  
  getName():any[]{
    return this.receiver.map(r=> r.name);
  }

}
