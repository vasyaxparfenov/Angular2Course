import { Router } from '@angular/router';
import { AuthService } from './auth.srevice';
import { first } from 'rxjs/operator/first';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl:'app/user/profile.component.html' ,
  styles:[`
      em { float:right; color:#E05C65; padding-left:10px;}
      .error input {background-color:#E3C3C5;}
      .error ::-webkit-input-placeholder {color: #999}
      .error ::-moz-placeholder  {color: #999}
      .error :-moz-placeholder  {color: #999}
      .error :ms-input-placeholder  {color: #999}
  `]
})
export class ProfileComponent implements OnInit {
  profileForm : FormGroup;
  constructor(private authService:AuthService, private router:Router){

  }   

  public ngOnInit(): void {
    let firstName = new FormControl(this.authService.currentUser.firstName, [ Validators.required, Validators.pattern('[a-zA-z].*')]);
    let lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);
    this.profileForm = new FormGroup({
      firstName:firstName,
      lastName:lastName
    });
  }

  validateFirstName(){
    return this.profileForm.controls.firstName.invalid && this.profileForm.controls.firstName.touched;
  }
  validateLastName(){
    return this.profileForm.controls.lastName.valid || this.profileForm.controls.lastName.untouched
  }
  saveProfile(formValues){
     if(this.profileForm.valid){
        this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
        this.router.navigate(['/events']);
    }
  }
  cancel(){
    this.router.navigate(['/events']);
  }
}