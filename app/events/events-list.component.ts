import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared/event.model';
import { EventService } from './shared/event.service';

@Component({
    templateUrl:'app/events/events-list.component.html',
})
export class EventsListComponent implements OnInit{
  public events: IEvent[];
  constructor(private eventService: EventService, private activatedRoute: ActivatedRoute) {}
  public ngOnInit(){
    this.events = this.activatedRoute.snapshot.data['events'];
  }
  
}
