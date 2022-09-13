import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { EMPTY, Observable } from "rxjs";
import { catchError, first } from 'rxjs/operators';
import { Account } from "../models/account";
import AccountsService from "../services/accounts.service";

@Injectable({ providedIn: 'root' })
export class AccountResolver implements Resolve<Array<Account>> {
    constructor(private accountsService: AccountsService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Array<Account>> {
        return this.accountsService.getAllAccounts().pipe(
            first(), 
            catchError((err) => {console.log(err.error.responseException.exceptionMessage); return EMPTY;
          })
        );
    }
}