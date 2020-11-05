import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cake-list',
  templateUrl: './cake-list.component.html',
  styleUrls: ['./cake-list.component.css']
})
export class CakeListComponent implements OnInit {

  cake = {
    "name": "Chocotorta",
    "price": "250",
    "stock": "5",
    "image": "assets/img/chocotorta.jpg"
  }


  constructor() { }

  ngOnInit(): void {
  }

}
