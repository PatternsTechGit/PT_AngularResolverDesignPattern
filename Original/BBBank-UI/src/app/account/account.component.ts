import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Account } from '../models/account';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) { }
  accounts: Array<Account> = []

  ngOnInit() {
    // data property of activatedRoute is an observable to we will subscribe to it and expect it to has a property called "accounts" (as mentioned in routing) in it.
    this.activatedRoute.data.subscribe({
      next: (data) => {
        console.log("data", data);
        
        // that value will be assigned to a local variable that is used to populate the UI.
        this.accounts = data['accounts'];
        console.log('this.accounts',this.accounts);
        
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
