import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:string;
  password:string;
  setItems:any[];
  receiver:any[];

  constructor(
    private alertCtrl: AlertController,
    private navCtrl:NavController,
    private router:Router
  ) { 
    this.receiver = JSON.parse(localStorage.getItem("login"));
    if(this.receiver){
      this.router.navigate(['/menu/home']);
    }
  }


  ngOnInit() {
  }

  login(){
    if(!this.email || !this.password){
      this.msgAlert("Fields are required","Error");  
    }
    else if(this.password.length < 6){
      this.msgAlert("Password must be 6 characters","Error");
    }
    else{
    const auth = getAuth();
    signInWithEmailAndPassword(auth, this.email, this.password)
    .then((userCredential) => {
     // Signed in 
     const user = userCredential.user;
    // for local storage 
     let rrr= [{"id":user.uid,"email":this.email}];
     localStorage.setItem("login",JSON.stringify(rrr));   
    
     this.navCtrl.navigateRoot("/menu/home");
     
     // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      this.msgAlert("Invalid Credentials Entered","Error");
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
