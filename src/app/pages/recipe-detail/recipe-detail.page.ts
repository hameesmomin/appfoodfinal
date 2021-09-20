import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodsService } from 'src/app/services/foods.service';
import { IFood } from 'src/app/interface/food';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

 check:boolean;

  constructor(private route:ActivatedRoute,
    private foodService:FoodsService
    ) { }
  food:IFood;
  errorMessage="";


  ngOnInit(): void {
   const id = Number(this.route.snapshot.paramMap.get('id'));
   if (id) {
    this.getProduct(id);
   }
 }

 getProduct(id: number): void {
  this.foodService.getFood(id).subscribe({
    next: food => this.food = food,
    error: err => this.errorMessage = err
  });
}

}