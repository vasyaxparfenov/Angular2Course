import { EventService } from './shared/event.service';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { IEvent } from './index';

@Injectable()
export class EventListResolver implements Resolve<IEvent[]>{
    constructor(private eventService:EventService){

    }
    resolve(){
        return this.eventService.getEvents();
    }
}