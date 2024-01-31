import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import { RegisterPageRoutingModule } from './register-routing.module';
import { RegisterPage } from './register.page';
import {IntroPageModule} from "../intro/intro.module";
import {AuthInterceptor} from "../../auth/interceptors/auth.interceptor";
import {ApiServiceModule} from "../../api/services/api.service.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RegisterPageRoutingModule,
        IntroPageModule,
        ReactiveFormsModule,
        ApiServiceModule
    ],
  /*providers: [
     {
       provide: HTTP_INTERCEPTORS,
       useClass: AuthInterceptor,
       multi: true,
     },
  ],*/
  declarations: [RegisterPage]
})
export class RegisterPageModule {}
