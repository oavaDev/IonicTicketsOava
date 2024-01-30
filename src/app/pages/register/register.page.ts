import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {NavController} from "@ionic/angular";
import {Storage} from "@ionic/storage-angular";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  registerForm : FormGroup
  validation_messages = {
    'name' : [
      {type : 'required',message : 'Name is required'},
      {type : 'minlength',message : 'Name must be at least 4 characters long'}
    ],
    'email' : [
      {type : 'required',message : 'Email is required'},
      {type : 'email',message : 'Email is not valid'}
    ],
    'password' : [
      {type : 'required',message : 'Password is required'},
      {type : 'minlength',message : 'Password must be at least 6 characters long'}
    ]
  }
  registerMessage : any = ""
  constructor(private navCtrl : NavController,
              private formBuilder : FormBuilder,
              private storage : Storage) {
    this.registerForm = this.formBuilder.group({
      name : new FormControl(
        "",
        Validators.compose([Validators.required,Validators.minLength(4)])
      ),
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


  navigate(event : any){
    let route =  event.target?.id
    if (route){
      this.navCtrl.navigateForward('/'+route)
    }
  }

}
