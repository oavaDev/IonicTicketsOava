import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { IntroPageRoutingModule } from './intro-routing.module';
import { IntroPage } from './intro.page';

import {OrbitingSlideComponent} from "../component/orbiting-slide/orbiting-slide.component";
import {SlideComponent} from "../component/slide/slide.component";
import {SlideButtonComponent} from "../component/slide-button/slide-button.component";

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntroPageRoutingModule
  ],
  declarations: [IntroPage,OrbitingSlideComponent, SlideComponent, SlideButtonComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IntroPageModule {}
