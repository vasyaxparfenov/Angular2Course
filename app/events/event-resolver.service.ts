import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { resolve } from 'url';
import { EventService, IEvent } from './index';

@Injectable()
export class EventResolver implements Resolve<any> {
    constructor(private eventService: EventService) { }
    public resolve(route: ActivatedRouteSnapshot){
            return this.eventService.getEvent(+route.params['id']);
    }
}
