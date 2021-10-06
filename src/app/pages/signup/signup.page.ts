import { Component, OnInit } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  name:string;
  email:string;
  password:string;

  constructor(
    private alertCtrl: AlertController,
    private navCtrl:NavController
  ) { }


  ngOnInit() {
  }

  signUp(){

    if(!this.name || !this.email || !this.password){
      this.msgAlert("Fields are required","Error");  
    }    
    else if(this.password.length < 6){
      this.msgAlert("Password must be 6 characters","Error");
    }
    else{  
 
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.email, this.password)
   .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    this.navCtrl.navigateForward('/login');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    this.msgAlert("Invalid Credentials Entered","Error");
    // ..
  });
 
 }
  
}

async msgAlert(msg:string,header:string) {
  const alert = await this.alertCtrl.create({
    header: header,
    message: msg,
    buttons: [
      {
        text: 'OK',
      },
    ],
  });

  alert.present();
}


}
