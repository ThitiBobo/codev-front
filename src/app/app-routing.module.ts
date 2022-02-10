import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/general/pages/home/home.component';
import { NotFoundComponent } from './modules/general/pages/not-found/not-found.component';

import {ListComponent} from "./modules/general/pages/list/list.component";

const routes: Routes = [
  { path: '', component: HomeComponent, },
  {
    path: 'auth',
    loadChildren: () => import('./modules/account/account.module')
      .then(mod => mod.AccountModule)
  },
  {
    path: 'list', component: ListComponent,
    loadChildren: () => import("./modules/general/general.module")
      .then(mod => mod.GeneralModule)
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
