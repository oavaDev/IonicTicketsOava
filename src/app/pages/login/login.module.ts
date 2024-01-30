import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';
import {IntroPageModule} from "../intro/intro.module";
import {DataServiceModule} from "../../services/data/data.service.module";

@NgModule({
  imports: [
    DataServiceModule,
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ReactiveFormsModule,
    IntroPageModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
