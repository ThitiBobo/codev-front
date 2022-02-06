import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/general/home/pages/home/home.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';

import {DatasComponent} from "./modules/general/datas/datas.component";
import {ListComponent} from "./modules/general/list/list.component";

const routes: Routes = [
  { path: '', component: HomeComponent, },
  {
    path: 'contact',
    loadChildren: () => import('./modules/general/contact/contact.module')
      .then(mod => mod.ContactModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./modules/general/about/about.module')
      .then(mod => mod.AboutModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/account/account.module')
      .then(mod => mod.AccountModule)
  },
  {
    path: 'datas', component: DatasComponent,
    loadChildren: () => import("./modules/general/datas/datas.module")
      .then(mod => mod.DatasModule)
  },
  {
    path: 'list', component: ListComponent,
    loadChildren: () => import("./modules/general/list/list.module")
      .then(mod => mod.ListModule)
  }
  },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
