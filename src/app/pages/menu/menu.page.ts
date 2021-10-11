import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { getAuth, onAuthStateChanged } from "firebase/auth";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  pages = [
    {
      title: 'Home',
      url: '/menu/home',
      name:'home'
    },
    {
       title:"Profile",
       url:"/menu/profile",
       name:'person-circle-outline'
    }
  ];

  selectedPath = '';
  profile:string;
  receiver:any[];

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath =event.url;
    });

  }

  
  ngOnInit() {
    this.receiver = JSON.parse(localStorage.getItem("login"));
    if(!this.receiver){
      this.router.navigate(['/login']);
    }
    this.profile = this.receiver[0].email;
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
        
      // ...
    } else {
      // User is signed out
      // ...


    }
  });
 
  }
  signOut(){
    localStorage.removeItem("carts");
    localStorage.removeItem("login");
    this.router.navigate(['/login']);
  }

}
