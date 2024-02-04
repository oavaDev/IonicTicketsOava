import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiscoverPage } from './discover.page';
import {DetailComponent} from "./views/detail/detail.component";

const routes: Routes = [
  {
    path: '',
    component: DiscoverPage
  },
  {
    path:'category/:id',
    component : DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiscoverPageRoutingModule {}
