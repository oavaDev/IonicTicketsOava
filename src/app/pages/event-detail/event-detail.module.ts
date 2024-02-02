import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventDetailPageRoutingModule } from './event-detail-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { EventDetailPage } from './event-detail.page';
import {ApiServiceModule} from "../../api/services/api.service.module";

@NgModule({
  imports: [
    ApiServiceModule,
    CommonModule,
    FormsModule,
    IonicModule,
    EventDetailPageRoutingModule
  ],
  declarations: [EventDetailPage],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class EventDetailPageModule {}
