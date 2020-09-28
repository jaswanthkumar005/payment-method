import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreditcardComponent } from './creditcard/creditcard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PaymentmethodComponent } from './paymentmethod/paymentmethod.component';


const routes: Routes = [
  {path:"",component:PaymentmethodComponent},
  {path:"creditcard",component:CreditcardComponent},
  {path:"notfound", component:NotFoundComponent},
  {path:"**",redirectTo:"/notfound"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
