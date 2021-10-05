import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewService } from 'src/app/services/view.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {
  receiver:any[];
  viewItems:any[];
  constructor(
    private viewService:ViewService,
    private router:Router
  ) { }
  ngOnInit() {
    this.receiver = JSON.parse(localStorage.getItem("login"));
    if(!this.receiver){
      this.router.navigate(['/login']);
    }
    this.viewItems = this.viewService.receiver;
    this.viewItems = this.viewItems.sort((a, b) => parseFloat(b.view) - parseFloat(a.view));
  }

}
