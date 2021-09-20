import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICart } from '../interface/cart';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {
  @Input() item: ICart;
  @Output() increase = new EventEmitter();
  @Output() decrease = new EventEmitter();
}
