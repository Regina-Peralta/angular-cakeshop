import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { CakeCartService } from '../cake-cart.service';
import { Cake } from '../cake-list/Cake';

@Component({
  selector: 'app-cake-cart',
  templateUrl: './cake-cart.component.html',
  styleUrls: ['./cake-cart.component.scss']
})
export class CakeCartComponent implements OnInit {

  cartList$: Observable<Cake[]>;
  constructor(private cart: CakeCartService) { 
    this.cartList$ = cart.cartList.asObservable();
  }

  ngOnInit(): void {
  }

}
