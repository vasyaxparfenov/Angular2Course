import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { IEvent } from './index';
import { EventService } from './shared/event.service';

@Injectable()
export class EventListResolver implements Resolve<IEvent[]>{
    constructor(private eventService: EventService){

    }
    public resolve(){
        return this.eventService.getEvents();
    }
}
