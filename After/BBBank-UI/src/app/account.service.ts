import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Account } from './models/account';


@Injectable({
providedIn: 'root',
})
export default class AccountsService {
constructor(private httpClient: HttpClient) { }

getAllAccounts(): Observable<Array<Account>> {
  return this.httpClient.get<Array<Account>>(`${environment.apiUrlBase}Accounts/GetAllAccounts`);
}
}