import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pre-order',
  templateUrl: './pre-order.page.html',
  styleUrls: ['./pre-order.page.scss'],
})
export class PreOrderPage implements OnInit {
  date;
  time;
  year;
  constructor() { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.year = new Date().getFullYear();
    console.log(this.year);
  }
  preorder(){

    
//     var str = "Apples are round, and apples are juicy."; 
// var sliced = str.slice(3, -2); 
// console.log(sliced);
    console.log( this.date,this.time);
    
  }
}
