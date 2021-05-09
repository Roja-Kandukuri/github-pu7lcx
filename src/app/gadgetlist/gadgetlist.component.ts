import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gadgetlist',
  templateUrl: './gadgetlist.component.html',
  styleUrls: ['./gadgetlist.component.css']
})
export class GadgetlistComponent implements OnInit {
gadgets=[{name:"ring" , imgsrc:"assets/images/ring"} , {name:"comb.jpg" , imgsrc:"assets/images/comb.jpg"}]
  constructor() { }

  ngOnInit(): void {
  }

}
