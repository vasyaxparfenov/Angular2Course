import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.srevice';
@Component({
    templateUrl:'app/user/login.component.html',
    styles:[`
        em { float:right; color:#E05C65; padding-left:10px;}
    `],
})
export class LoginComponent{
    public loginInvalid: boolean = false;
    constructor(private authService: AuthService, private router: Router){

    }
    private navigateToEventsPage(){
        this.router.navigate(['/events']);
    }
    public login(formValues){
        this.authService.loginUser(formValues.userName, formValues.password)
        .subscribe((response) => {
            if(!response){
                this.loginInvalid = true;
            }
            else{
                this.navigateToEventsPage();
            }
        });
        
    }
    public cancel(){
        this.navigateToEventsPage();
    }
        
}
