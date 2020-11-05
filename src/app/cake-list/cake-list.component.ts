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
      quantity: 0,
    },
    {
      name: "Tarta cabsha",
      price: 200,
      stock: 6,
      image: "assets/img/tartaCabsha.jpg",
      clearance: true,
      quantity: 0,
    },
    {
      name: "Tarta de frutilla",
      price: 230,
      stock: 0,
      image: "assets/img/tartaFrutilla.jpg",
      clearance: false,
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


  constructor() { }

  ngOnInit(): void {
  }


  upQuantity(cake : Cake): void{
    if(cake.quantity <= cake.stock && cake.stock != 0)
    cake.quantity++;
  }

  downQuantity(cake : Cake): void{
    if(cake.quantity != 0)
    cake.quantity--;
  }

  changeQuantiy(cake:Cake): void{
    if(cake.quantity > cake.stock) {
      alert("No hay suficientes cervezas en stock");
    }
    if(cake.quantity < 0) {
      alert("No se pueden encargar cervezas negativas ");
    }
  }

}
