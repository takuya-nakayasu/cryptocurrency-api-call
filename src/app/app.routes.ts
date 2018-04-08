import { PrivateComponent } from './private/private.component';
import { ExchangeListComponent } from './exchange-list/exchange-list.component';
import { Routes } from '@angular/router';

export const myRoutes: Routes = [
  { path: 'private', component: PrivateComponent },
  { path: '', component: ExchangeListComponent }
];
