import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gadgetlist',
  templateUrl: './gadgetlist.component.html',
  styleUrls: ['./gadgetlist.component.css']
})
export class GadgetlistComponent implements OnInit {
  gadgets = [
    {
      name: 'Iphone',
      imgsrc:
        'https://raw.githubusercontent.com/Roja-Kandukuri/github-pu7lcx/master/src/assets/images/iphone.jpg'
    }
  ];
  constructor() {}

  ngOnInit(): void {}
}
