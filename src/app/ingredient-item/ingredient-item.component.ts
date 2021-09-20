import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ingredient } from '../interface/ingredient';

@Component({
  selector: 'app-ingredient-item',
  templateUrl: './ingredient-item.component.html',
  styleUrls: ['./ingredient-item.component.scss'],
})
export class IngredientItemComponent implements OnInit {
  @Input() item: Ingredient[];
  @Output() clicked = new EventEmitter();

  constructor() { }

  ngOnInit() {}

}
