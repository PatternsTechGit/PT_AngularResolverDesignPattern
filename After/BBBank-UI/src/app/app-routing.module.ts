import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountResolver } from './account.resolver';
// import { AccountResolver } from './account.resolver';
// import {AccountComponent} from "./account/account.component";
import { AccountComponent } from './account/account.component';
const routes: Routes = [
  { path: '', component: AccountComponent, resolve: {accounts: AccountResolver} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
