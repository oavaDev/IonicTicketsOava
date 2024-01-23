import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {ConcertCardComponent} from "../../component/concert-card/concert-card.component";

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {ConcertCardSwiperComponent} from "../../component/concert-card-swiper/concert-card-swiper.component";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, ConcertCardComponent, ConcertCardSwiperComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule {}
