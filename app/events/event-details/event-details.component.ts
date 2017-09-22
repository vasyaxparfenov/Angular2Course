import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { filter } from 'rxjs/operator/filter';
import { IEvent, ISession } from '../shared/event.model';
import { EventService } from '../shared/event.service';

@Component({
    templateUrl:'/app/events/event-details/event-details.component.html',
    styles:[`
        .container {padding-left:20px; padding-right:20px;}
        .event-image {height:100px}
        a {cursor:pointer}
    `],
})
export class EventDetailsComponent implements OnInit{
    public addMode: boolean;
    public event: IEvent;
    public filterBy: string = 'all';
    public sortBy: string = 'names';
    constructor(private eventService: EventService, private activatedRoute: ActivatedRoute){
        
    }
    public ngOnInit(){
        this.activatedRoute.data.forEach((data)=>{
            this.event = data['event'];
            this.addMode = false;
        });
        // this.activatedRoute.params.forEach((params:Params) => {
        //     console.log(this.activatedRoute.snapshot.data['event']);            
        //     this.event = this.activatedRoute.snapshot.data['event']
        //     this.addMode=false;
        // });
    }
    public addSession(){
        this.addMode = true;
    }

    public saveNewSession(session: ISession){
        const nextId = Math.max.apply(null, this.event.sessions.map((s)=>s.id));
        session.id = nextId + 1;
        this.event.sessions.push(session);
        this.eventService.saveEvent(this.event).subscribe();
        this.addMode = false;
    }
    public cancelAddSession(){
        this.addMode = false;
    }
}
