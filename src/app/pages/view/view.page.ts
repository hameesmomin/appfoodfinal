import { Component, OnInit } from '@angular/core';
import { ViewService } from 'src/app/services/view.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {
  viewItems:any[];
  constructor(
    private viewService:ViewService
  ) { }
  ngOnInit() {
    this.viewItems = this.viewService.receiver;
    this.viewItems = this.viewItems.sort((a, b) => parseFloat(b.view) - parseFloat(a.view));
  }

}
