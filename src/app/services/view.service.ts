import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewService {
  receiver = [];
  newId: number;
  constructor() {
    if (JSON.parse(sessionStorage.getItem('view')) != null) {
      this.receiver = JSON.parse(sessionStorage.getItem('view'));
    } else {
      this.receiver = [];
    }

    if (this.receiver.length !== 0) {
      let maxId = this.receiver[this.receiver.length - 1].id;
      this.newId = maxId + 1;
    }
    if (
      JSON.parse(sessionStorage.getItem('view')) == null ||
      this.receiver.length == 0
    ) {
      this.newId = 0;
    }
   }
   addToView(newItem: any) {
    this.receiver.push(newItem);

    sessionStorage.setItem('view', JSON.stringify(this.receiver));
    this.newId++;
  }
  //for view don't be duplicate and it's in the same index
  checkView(view: string): boolean {
    if (JSON.parse(sessionStorage.getItem('view')) != null) {
      for (let index = 0; index < this.receiver.length; index++) {
        if (this.receiver[index].foodName == view) {
          this.receiver[index].view += 1;
          sessionStorage.setItem('view', JSON.stringify(this.receiver));
          return true;
        }
      }
    }
  }

}
