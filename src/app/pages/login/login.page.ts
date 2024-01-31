import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {NavController} from "@ionic/angular";
import {Storage} from "@ionic/storage-angular";
import {ApiService} from "../../api/services/api.service";
import {IUserLoginInterface} from "../../Interfaces/user/IUserLoginInterface";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage{
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
              private storage : Storage,
              private dataService: ApiService
  ) {
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
  login(login_data : IUserLoginInterface)  {
    this.dataService.login(login_data).subscribe({
      next: (response) => {
        this.storage.set('token',response.access_token)
        this.navCtrl.navigateRoot('/home')
      },
      error: (error) => {
        alert('There was an error in retrieving data from the server');
      }
    })
  }
  navigate(event : any){
    let route =  event.target?.id
    if (route){
     this.navCtrl.navigateForward('/'+route)
    }
  }
}
