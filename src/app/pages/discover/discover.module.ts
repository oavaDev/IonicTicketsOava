import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { DiscoverPageRoutingModule } from './discover-routing.module';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { DiscoverPage } from './discover.page';
import {ApiServiceModule} from "../../api/services/api.service.module";
import {DetailComponent} from "./views/detail/detail.component";

@NgModule({
    imports: [
        ApiServiceModule,
        CommonModule,
        FormsModule,
        IonicModule,
        DiscoverPageRoutingModule,
        ReactiveFormsModule,
    ],
  declarations: [DiscoverPage, DetailComponent],
  exports: [DiscoverPage],
  schemas : [CUSTOM_ELEMENTS_SCHEMA],
})
export class DiscoverPageModule {}
