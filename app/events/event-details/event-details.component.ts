import { filter } from 'rxjs/operator/filter';
import { IEvent, ISession } from '../shared/event.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from "@angular/core";
import { EventService } from "../shared/event.service";


@Component({
    templateUrl:'/app/events/event-details/event-details.component.html',
    styles:[`
        .container {padding-left:20px; padding-right:20px;}
        .event-image {height:100px}
        a {cursor:pointer}
    `]
})
export class EventDetailsComponent implements OnInit{
    addMode: boolean;
    event: IEvent;
    filterBy:string = 'all';
    sortBy:string = 'names';
    constructor(private eventService:EventService, private activatedRoute:ActivatedRoute){
        
    }
    ngOnInit(){
        this.activatedRoute.data.forEach(data=>{
            this.event = data['event'];
            this.addMode = false;
        });
        // this.activatedRoute.params.forEach((params:Params) => {
        //     console.log(this.activatedRoute.snapshot.data['event']);            
        //     this.event = this.activatedRoute.snapshot.data['event']
        //     this.addMode=false;
        // });
    }
    addSession(){
        this.addMode = true;
    }

    saveNewSession(session:ISession){
        const nextId = Math.max.apply(null, this.event.sessions.map(s=>s.id));
        session.id = nextId + 1;
        this.event.sessions.push(session);
        this.eventService.saveEvent(this.event).subscribe();
        this.addMode = false;
    }
    cancelAddSession(){
        this.addMode = false;
    }
}