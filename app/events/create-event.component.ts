import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEvent } from './shared/event.model';
import { EventService } from './shared/index';

@Component({
    templateUrl:'/app/events/create-event.component.html',
    styles:[`
    em { float:right; color:#E05C65; padding-left:10px;}
    .error input {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder {color: #999}
    .error ::-moz-placeholder  {color: #999}
    .error :-moz-placeholder  {color: #999}
    .error :ms-input-placeholder  {color: #999}
`],
})
export class CreateEventComponent implements OnInit{
    public isDirty: boolean = true;
    constructor(private router: Router, private eventService: EventService){

    }
    public ngOnInit(){
        
    }
    public saveEvent(formValues){
        this.eventService.saveEvent(formValues).subscribe((event) => {
            this.isDirty = false;
            this.router.navigate(['/events']);
        });
        
    }
    public cancel(){
        this.router.navigate(['/events']);
    }

}
