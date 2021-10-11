import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ICart } from 'src/app/interface/cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  receiver:any[];
  cartItems:any[];
  constructor(
    private cartService:CartService,
    private alertCtrl: AlertController,
    private router:Router
  ) {

  }

  ngOnInit() {
    this.receiver = JSON.parse(localStorage.getItem("login"));
    if(!this.receiver){
      this.router.navigate(['/login']);
    }
  this.cartItems = this.cartService.receiver;
}

  async removeFromCart(item: ICart) {
    const alert = await this.alertCtrl.create({
      header: 'Remove',
      message: 'Are you sure you want to remove?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.cartService.removeItem(item.id)
          },
        },
        {
          text: 'No',
        },
      ],
    });

    alert.present();
  }

}
