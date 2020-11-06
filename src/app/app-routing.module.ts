import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CakeCakesComponent } from './cake-cakes/cake-cakes.component';
import { CakeContactComponent } from './cake-contact/cake-contact.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cakes',
    pathMatch: 'full'
  },
{
  path: 'cakes',
  component: CakeCakesComponent
},
{
  path: 'contact',
  component: CakeContactComponent
},
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
