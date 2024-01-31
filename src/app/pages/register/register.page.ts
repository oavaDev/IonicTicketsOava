import {ChangeDetectorRef, Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {NavController} from "@ionic/angular";
import {Storage} from "@ionic/storage-angular";
import {IUserRegisterInterface} from "../../Interfaces/user/IUserRegisterInterface";
import {ApiService} from "../../api/services/api.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage {
  registerForm : FormGroup
  validation_messages = {
    'username' : [
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
  registerMessage : string = ""
  registerMessageError : string = ""
  constructor(private navCtrl : NavController,
              private formBuilder : FormBuilder,
              private storage : Storage,
              private dataService: ApiService,
              private cdRef : ChangeDetectorRef
  ) {
    this.registerForm = this.formBuilder.group({
      username : new FormControl(
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
  register(register_data : IUserRegisterInterface){
    this.dataService.register(register_data).subscribe({
      next: (response) => {
        console.log(response)
        this.registerMessage = "User created successfully, you can now login"
        this.cdRef.detectChanges()
        setTimeout(() => {
          this.navCtrl.navigateRoot('/login')
        }, 2000);
      },
      error: (error) => {
        this.registerMessage = "There was an error in retrieving data from the server"
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
