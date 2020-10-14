import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Credit} from './credit.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private router:Router,
    private http:HttpClient) { }
  addPost(credit:Credit){
    this.http.post<{credit,message}>("http://localhost:3000/api/posts",credit).subscribe((data) =>{
      console.log(data);
      alert(`
      $ ${data.credit.amount} deducted from your account ${data.credit.cardholder}!! `);
    },(error)=> {
      console.log(error);
    });
    this.router.navigate(['/'])
  }
}
