import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AccountResolver } from './resolver/account.resolver';

const routes: Routes = [
  { path: '', component: AccountComponent, resolve: {accounts: AccountResolver} },
  // telling the system that it has to resolve a property called "accounts" using a resolver called "AccountResolver" before navigating to that route.
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
