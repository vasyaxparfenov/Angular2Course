import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
@Component({
    selector:'upvote',
    templateUrl:'/app/events/event-details/upvote.component.html',
    styleUrls:['/app/events/event-details/upvote.component.css'],
})
export class UpvoteComponent implements OnChanges{
    @Input() public count: number;
    @Input() set voted(val){
        this.iconColor = val ? 'red' : 'white';
    }
    @Output() public vote = new EventEmitter();
    public iconColor: string;
    public onClick(){
        this.vote.emit({});
    }

    public ngOnChanges(): void {
        
    }
}
