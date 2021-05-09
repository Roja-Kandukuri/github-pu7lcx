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
    {
      name: 'carrot',
      imgsrc:
        'https://cdn.jsdelivr.net/gh/Roja-Kandukuri/hello-world-test@3b355c5bef1dcab7e2dac2ddce04934dcf7a856e/src/assets/images/carrot.jpg'
    }
  ];
  constructor() {}
  onclickveg() {
    debugger;
    alert('clicked ion vegetable');
  }

  ngOnInit(): void {}
}
