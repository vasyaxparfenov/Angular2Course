import { IEvent } from './shared/event.model';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service';


@Component({
    templateUrl:'app/events/events-list.component.html',
})
export class EventsListComponent implements OnInit{
  events: IEvent[];
  constructor(private eventService: EventService, private activatedRoute:ActivatedRoute) {}
  ngOnInit(){
    this.events = this.activatedRoute.snapshot.data['events'];
  }
  
}