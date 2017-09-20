import {EventService} from '../events/shared/event.service';
import { AuthService } from '../user/auth.srevice';
import { link } from 'fs';
import { Component } from "@angular/core";
import { ISession } from '../events/index';



@Component({
    selector:'nav-bar',
    templateUrl:'app/nav/navbar.component.html',
    styles:[`
        .nav.navbar-nav {font-size: 15px;}
        #searchForm {margin-right: 100px;}
        @media (max=width: 1200px) {#searchForm {display:none}}
        li > a.active {color: #F97924;}
    `]

})
export class NavBarComponent{
    searchTerm:string = '';
    foundSessions:ISession[];
    constructor(private authService:AuthService, private eventService:EventService){
        
    }
    searchSessions(searchTerm:string){
        this.eventService.searchSessions(searchTerm).subscribe(sessions=>{ this.foundSessions = sessions;});
    }
}