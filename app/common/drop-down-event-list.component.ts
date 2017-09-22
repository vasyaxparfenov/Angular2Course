import { Component, EventEmitter, OnInit } from '@angular/core';
import { IEvent } from '../events/index';
import {EventService} from '../events/shared/event.service';

@Component({
    selector: 'dropDown-eventList',
    templateUrl: '/app/common/drop-down-event-list.component.html',
})

export class DropDownEventListComponent implements OnInit {
    public eventList: IEvent[];
    public eventSaved: EventEmitter<IEvent[]> = new EventEmitter();
    
    constructor(private eventService: EventService) { }
    public ngOnInit() {
        this.eventService.getEvents(this.eventSaved).subscribe((response)=>{
            this.eventList = response;
        });
        this.eventSaved.subscribe((response)=> this.eventList = response as IEvent[]);
    }
}
