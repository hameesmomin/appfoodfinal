import { Component, Input, OnInit } from '@angular/core';
import { IFood } from '../interface/food';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {
 @Input() food:IFood[];

  constructor() { }

  ngOnInit() {}

}
