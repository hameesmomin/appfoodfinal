import { Component, Input, OnInit } from '@angular/core';
import { IFood } from '../interface/food';
import { ViewService } from '../services/view.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {
 @Input() food:IFood[];
 check:boolean;

  constructor(private viewService:ViewService) {

   }

  ngOnInit() {}

  addName(name:string,id:number){
    this.check =this.viewService.checkView(name);
    
    if(!this.check){
      const viewItem:any = {
        id: this.viewService.newId,
        foodId:id,
        foodName: name,
        view: 1,
      };
    this.viewService.addToView(viewItem);
    }
  
  }

}
