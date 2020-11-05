import { Component, OnInit } from '@angular/core';
import { Cake } from './Cake';

@Component({
  selector: 'app-cake-list',
  templateUrl: './cake-list.component.html',
  styleUrls: ['./cake-list.component.css']
})
export class CakeListComponent implements OnInit {

  cakes: Cake[] = [
    {
      name: "Chocotorta",
      price: 250,
      stock: 5,
      image: "assets/img/chocotorta.jpg",
      clearance: false,
    },
    {
      name: "Tarta cabsha",
      price: 200,
      stock: 6,
      image: "assets/img/tartaCabsha.jpg",
      clearance: true,
    },
    {
      name: "Tarta de frutilla",
      price: 230,
      stock: 0,
      image: "assets/img/tartaFrutilla.jpg",
      clearance: false,
    },
    {
      name: "Tarta de coco",
      price: 220,
      stock: 0,
      image: "assets/img/tartaCoco.jpg",
      clearance: false,
    }

  ]


  constructor() { }

  ngOnInit(): void {
  }

}
