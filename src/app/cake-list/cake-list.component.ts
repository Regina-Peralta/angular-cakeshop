import { Component, OnInit } from '@angular/core';
import { CakeCartService } from '../cake-cart.service';
import { Cake } from './Cake';

@Component({
  selector: 'app-cake-list',
  templateUrl: './cake-list.component.html',
  styleUrls: ['./cake-list.component.scss']
})
export class CakeListComponent implements OnInit {

  cakes: Cake[] = [
    {
      name: "Chocotorta",
      price: 250,
      stock: 5,
      image: "assets/img/chocotorta.jpg",
      clearance: false,
      quantity: 0,
    },
    {
      name: "Tarta cabsha",
      price: 220,
      stock: 0,
      image: "assets/img/tartaCabsha.jpg",
      clearance: false,
      quantity: 0,
    },
    {
      name: "Tarta de frutilla",
      price: 180,
      stock: 5,
      image: "assets/img/tartaFrutilla.jpg",
      clearance: true,
      quantity: 0,
    },
    {
      name: "Tarta de coco",
      price: 220,
      stock: 0,
      image: "assets/img/tartaCoco.jpg",
      clearance: false,
      quantity: 0,
    }

  ]


  constructor( private cart: CakeCartService) { 
  }

  ngOnInit(): void {
  }

  addToCart(cake): void{
    this.cart.addToCart(cake);
    cake.stock -= cake.quantity;
    cake.quantity = 0;
  }

  maxReached(m: String){
    alert(m);
  }




}
