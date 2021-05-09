import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vegetablelist',
  templateUrl: './vegetablelist.component.html',
  styleUrls: ['./vegetablelist.component.css']
})
export class VegetablelistComponent implements OnInit {
  title = 'List of Vegetables';
  today: number = Date.now();
  vegetables = [
    { name: 'bendi', imgsrc: 'assets/images/bendi.jpg' },
    { name: 'carrot.jpg', imgsrc: 'assets/images/carrot.jpg' }
  ];
  constructor() {}
  onclickveg() {
    debugger;
    alert('clicked ion vegetable');
  }

  ngOnInit(): void {}
}
