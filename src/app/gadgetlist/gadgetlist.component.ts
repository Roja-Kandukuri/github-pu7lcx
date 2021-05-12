import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gadgetlist',
  templateUrl: './gadgetlist.component.html',
  styleUrls: ['./gadgetlist.component.css']
})
export class GadgetlistComponent implements OnInit {
  gadgets = [
    {
      name: 'Camera',
      imgsrc:
        'https://github.com/Roja-Kandukuri/github-pu7lcx/blob/feature/courses-images/src/assets/images/camera.png'
    },
    {
      name: 'Iphone',
      imgsrc:
        'https://github.com/Roja-Kandukuri/github-pu7lcx/blob/feature/courses-images/src/assets/images/iphone.png'
    },
    {
      name: 'Computer',
      imgsrc:
        'https://github.com/Roja-Kandukuri/github-pu7lcx/blob/feature/courses-images/src/assets/images/laptop.png'
    }
  ];
  constructor() {}

  ngOnInit(): void {}
}
