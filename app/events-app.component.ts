import {Component} from '@angular/core';
import { AuthService } from './user/auth.srevice';

@Component({
    selector:'events-app',
    template:`
        <nav-bar></nav-bar>
        <router-outlet></router-outlet>
    `,
})
export class EventsAppComponent{
    constructor(private authService: AuthService){
        authService.checkAuthenticationStatus();
    }
}
