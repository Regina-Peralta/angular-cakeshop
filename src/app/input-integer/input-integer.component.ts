import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cake } from '../cake-list/Cake';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

  @Input() quantity: number;
  @Input() max: number;

  @Output() quantityChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() maxReached: EventEmitter<String> = new EventEmitter<String>();

  constructor() { }

  ngOnInit(): void {
  }


  upQuantity(): void{
    if(this.quantity < this.max && this.max != 0){
        this.quantity++;
        this.quantityChange.emit(this.quantity);
    }else{
      this.maxReached.emit("Se alcanzo el limite!");
    }

  }

  downQuantity(): void{
    if(this.quantity != 0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  changeQuantiy(): void{
    if(this.quantity >this.max) {
      this.maxReached.emit("No hay suficientes cervezas en stock!");
    }
    if(this.quantity < 0) {
      this.maxReached.emit("No se pueden encargar cervezas negativas!");
    }
    this.quantityChange.emit(this.quantity);
  }

}
