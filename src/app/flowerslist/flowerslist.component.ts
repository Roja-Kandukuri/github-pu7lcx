import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flowerslist',
  templateUrl: './flowerslist.component.html',
  styleUrls: ['./flowerslist.component.css']
})
export class FlowerslistComponent implements OnInit {
flowers=[{name:"roses",imgsrc:"assets/images/roses.jpg"},{name:"sunflower",imgsrc:"assets/images/sunflower.jpg"}]
  constructor() { }

  ngOnInit(): void {
  }

}
