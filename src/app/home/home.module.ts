import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {OrbitingSlideComponent} from "../component/orbiting-slide/orbiting-slide.component";
import {SlideComponent} from "../component/slide/slide.component";
import {SlideButtonComponent} from "../component/slide-button/slide-button.component";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, OrbitingSlideComponent, SlideComponent, SlideButtonComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HomePageModule {}
