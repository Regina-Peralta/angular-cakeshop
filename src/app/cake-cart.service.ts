import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cake } from './cake-list/Cake';

@Injectable({
  providedIn: 'root'
})
export class CakeCartService {

  private _cartList: Cake[] = [];
  cartList: BehaviorSubject<Cake[]> = new BehaviorSubject ([]);
  

  constructor() { }

  addToCart(cake: Cake){
    let item: Cake = this._cartList.find( (v1)=> v1.name == cake.name);
    if(!item){
      this._cartList.push({...cake});
    }else{
      item.quantity += cake.quantity;
    }

    console.log(this._cartList);
    this.cartList.next(this._cartList);
  }

}
