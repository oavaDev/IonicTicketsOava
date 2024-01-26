import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';
import { RegisterPage } from './register.page';
import {IntroPageModule} from "../intro/intro.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RegisterPageRoutingModule,
        IntroPageModule,
        ReactiveFormsModule
    ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}
