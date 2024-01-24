import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';
  loginForm : FormGroup
  constructor(private router: Router,
              private formBuilder : FormBuilder) {
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
  login(data : any)  {
    console.log(data)
  }

}
