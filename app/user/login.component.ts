import { Router } from '@angular/router';
import { AuthService } from './auth.srevice';
import { Component } from '@angular/core';
@Component({
    templateUrl:'app/user/login.component.html',
    styles:[`
        em { float:right; color:#E05C65; padding-left:10px;}
    `]
})
export class LoginComponent{
    constructor(private authService:AuthService, private router:Router){

    }
    private navigateToEventsPage(){
        this.router.navigate(['/events']);
    }
    login(formValues){
        this.authService.loginUser(formValues.userName, formValues.password);
        this.navigateToEventsPage();
    }
    cancel(){
        this.navigateToEventsPage();
    }
        
}
