import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable,interval,Subscription } from 'rxjs';
import {Credit} from '../credit.model';
import {PaymentService} from "../payment.service";

@Component({
  selector: 'app-creditcard',
  templateUrl: './creditcard.component.html',
  styleUrls: ['./creditcard.component.css']
})
export class CreditcardComponent implements OnInit {
  today;

  constructor(private paymentService:PaymentService) { }

  ngOnInit() {
   /* const obs=  interval(1000);
    obs.subscribe((value) =>{
      console.log(value);
    });
    */
    this.today = new Date().toISOString().split('T')[0];
  }

  makePayment(form:NgForm){
   const credit:Credit = {
     creditCardNumber:form.value.creditCardNumber,
     cardholder:form.value.cardholder,
     expiresin:form.value.expiresin,
     securityCode:form.value.securityCode,
     amount:form.value.amount
   }
   console.log(credit);
   this.paymentService.addPost(credit);
  }


}
