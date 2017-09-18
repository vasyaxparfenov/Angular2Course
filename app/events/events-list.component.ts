import { IEvent } from './shared/event.model';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';


@Component({
    templateUrl:'app/events/events-list.component.html',
})
export class EventsListComponent implements OnInit{
  events: IEvent[];
  constructor(private eventService: EventService, private toastr:ToastrService, private activatedRoute:ActivatedRoute) {}
  ngOnInit(){
    this.events = this.activatedRoute.snapshot.data['events'];
  }
  handleClick(eventName){
    this.toastr.success(eventName)
  }
}