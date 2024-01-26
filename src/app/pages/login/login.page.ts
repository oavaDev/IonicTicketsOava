import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthServiceService} from "../../services/auth-service.service";
import {NavController} from "@ionic/angular";
import {Storage} from "@ionic/storage-angular";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm : FormGroup
  validation_messages = {
    'email' : [
      {type : 'required',message : 'Email is required'},
      {type : 'email',message : 'Email is not valid'}
    ],
    'password' : [
      {type : 'required',message : 'Password is required'},
      {type : 'minlength',message : 'Password must be at least 6 characters long'}
    ]
  }
  loginMessage : any = ""
  constructor(private navCtrl : NavController,
              private formBuilder : FormBuilder,
              private auth : AuthServiceService,
              private storage : Storage) {
    this.loginForm = this.formBuilder.group({
      email : new FormControl(
        "",
        Validators.compose([Validators.required,Validators.email])
      ),
      password : new FormControl(
        "",
        Validators.compose([Validators.required,Validators.minLength(6)])
      )
    })
  }

  login(login_data : any)  {
    this.auth.loginUser(login_data).then(res => {
      this.loginMessage = res;
      this.storage.set('userLoggedIn',true)
      this.navCtrl.navigateForward('/home')
    }).catch(err => {
      this.loginMessage = err;
    })
  }

}
