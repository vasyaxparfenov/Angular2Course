import { Component } from '@angular/core';
import { link } from 'fs';
import { ISession } from '../events/index';
import {EventService} from '../events/shared/event.service';
import { AuthService } from '../user/auth.srevice';

@Component({
    selector:'nav-bar',
    templateUrl:'app/nav/navbar.component.html',
    styles:[`
        .nav.navbar-nav {font-size: 15px;}
        #searchForm {margin-right: 100px;}
        @media (max=width: 1200px) {#searchForm {display:none}}
        li > a.active {color: #F97924;}
    `],

})
export class NavBarComponent{
    public searchTerm: string = '';
    public foundSessions: ISession[];
    constructor(private authService: AuthService, private eventService: EventService){
        
    }
    public searchSessions(searchTerm: string){
        this.eventService.searchSessions(searchTerm).subscribe((sessions)=>{ this.foundSessions = sessions;});
    }
}
