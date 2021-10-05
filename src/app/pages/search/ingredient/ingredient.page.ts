import { Component, DoCheck, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICart } from 'src/app/interface/cart';
import { Ingredient } from 'src/app/interface/ingredient';
import { CartService } from 'src/app/services/cart.service';
import { IngredientService } from 'src/app/services/ingredient.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.page.html',
  styleUrls: ['./ingredient.page.scss'],
})
export class IngredientPage implements OnInit,DoCheck {
  receiver:any[];
  carts:number;
  check:boolean;
  counter:number;
  filteredIngredients:Ingredient[];
  ingredients: Ingredient[];
  _listFilter: string;
  sub!: Subscription;
  errorMessage = '';

  get listFilter():string {
    return this._listFilter;
  }
  set listFilter(value:string){
    this._listFilter  = value;
    this.filteredIngredients = this.listFilter ? this.performFilter(this.listFilter) : this.ingredients;
    this.counter = this.filteredIngredients.length;
  }

  performFilter(filterBy: string):Ingredient[]{
    filterBy = filterBy.toLocaleLowerCase();

    return this.ingredients.filter((food: Ingredient) =>
       food.name.toLocaleLowerCase().indexOf(filterBy) !== -1
       );
  }

  constructor(
    private ingredientService:IngredientService,
    private cartService:CartService,
    private toastCtrl:ToastController,
    private router:Router
  ) { }

  ngOnInit() {
    this.receiver = JSON.parse(localStorage.getItem("login"));
    if(!this.receiver){
      this.router.navigate(['/login']);
    }
    this.sub = this.ingredientService.getIngredients().subscribe({
      next: ingredients => {
        this.ingredients = ingredients;
        this.filteredIngredients = ingredients;
      },
      error: err => this.errorMessage = err
    });
  }
  addToCart(ingredient:Ingredient):void{

    this.check =this.cartService.checkIngredient(ingredient.name);

    if(!this.check){
      const cartitem: ICart = {
        id: this.cartService.newId,
        name: ingredient.name,
        image: ingredient.imageUrl ,
        quantity: 1,
      };
    this.cartService.addToCart(cartitem);
    }
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Ingredient added to the cart',
      mode: 'ios',
      duration: 1000,
      position: 'top',
    });

    toast.present();
  }
  ngDoCheck() {
    this.carts=this.cartService.totalItems();
  }
}
