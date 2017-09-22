import { IEvent } from './shared/event.model';

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector:'event-thumbnail',
    templateUrl:'app/events/event-thumbnail.component.html',
    styles:[`
    .green {color:#003300 !important;}
    .bold {font-weight:bold;}
`,
],
})
export class EventThumbnailComponent{
    @Input() public event: IEvent;

    public getStartTimeClass(){
        // const isEarlyStart = this.event && this.event.time === '8:00 am';
        // return {green: isEarlyStart, bold:isEarlyStart};
        // if(this.event && this.event.time === '8:00 am'){
        //     return 'green bold'
        // }
        // return '';
        if(this.event && this.event.time === '8:00 am'){
            return ['green','bold'];
        }
        return [];
    }
}
