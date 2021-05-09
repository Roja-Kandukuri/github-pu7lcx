import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flowerslist',
  templateUrl: './flowerslist.component.html',
  styleUrls: ['./flowerslist.component.css']
})
export class FlowerslistComponent implements OnInit {
  flowers = [
    {
      name: 'roses',
      imgsrc:
        'https://cdn.jsdelivr.net/gh/Roja-Kandukuri/hello-world-test@3b355c5bef1dcab7e2dac2ddce04934dcf7a856e/src/assets/images/roses.jpg'
    },
    {
      name: 'sunflower',
      imgsrc:
        'https://cdn.jsdelivr.net/gh/Roja-Kandukuri/hello-world-test@3b355c5bef1dcab7e2dac2ddce04934dcf7a856e/src/assets/images/sunflower.jpg'
    }
  ];
  constructor() {}

  ngOnInit(): void {}
}
