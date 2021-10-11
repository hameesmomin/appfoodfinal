import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  receiver:any[];
  constructor(
    private router:Router
  ) { }

  ngOnInit() {
    this.receiver = JSON.parse(localStorage.getItem("login"));
    if(!this.receiver){
      this.router.navigate(['/login']);
    }
  }

}
