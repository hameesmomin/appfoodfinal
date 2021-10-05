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
      title: 'Login / Sign up',
      url:'/login'
    },
    {
      title: 'Home',
      url: '/menu/home'
    }
  ];

  selectedPath = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath =event.url;
    });
   }


  ngOnInit() {
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
 

}
