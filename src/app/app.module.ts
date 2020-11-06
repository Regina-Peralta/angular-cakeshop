import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CakeListComponent } from './cake-list/cake-list.component';

import { FormsModule } from '@angular/forms';
import { CakeContactComponent } from './cake-contact/cake-contact.component';

import { CakeCakesComponent } from './cake-cakes/cake-cakes.component';
import { CakeCartComponent } from './cake-cart/cake-cart.component';
import { AppRoutingModule } from './app-routing.module';
import { InputIntegerComponent } from './input-integer/input-integer.component';

@NgModule({
  declarations: [
    AppComponent,
    CakeListComponent,
    CakeContactComponent,
    CakeCartComponent,
    InputIntegerComponent,
    CakeCakesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
