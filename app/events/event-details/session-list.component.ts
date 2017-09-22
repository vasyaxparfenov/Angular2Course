import { Component, Input, OnChanges } from '@angular/core';
import { filter } from 'rxjs/operator/filter';
import { AuthService } from '../../user/auth.srevice';
import { ISession } from '../index';
import { VoterService } from './voter.service';

@Component({
    selector:'session-list',
    templateUrl:'/app/events/event-details/session-list.component.html',
    
})
export class SessionListComponent implements OnChanges{
    @Input() public sessions: ISession[];
    @Input() public filterBy: string;
    @Input() public sortBy: string;
    @Input() public eventId: number;
    public visibleSessions: ISession[];
    constructor(private authService: AuthService, private voterService: VoterService){
        
    }
    public ngOnChanges(){
        if(this.sessions){
            this.filterSessions(this.filterBy);
            this.sortBy === 'names' ? this.visibleSessions.sort(sortByNameAsc) : this.visibleSessions.sort(sortByVotesDesc);
        }
    }
    public filterSessions(filter: string){
        if(filter === 'all'){
            this.visibleSessions = this.sessions.slice(0);
        }
        else{
            this.visibleSessions = this.sessions.filter((session) => session.level.toLocaleLowerCase() === filter);
        }
    }
    public toggleVote(session: ISession){
        if(this.userHasVoted(session)){
            this.voterService.deleteVoter(this.eventId, session, this.authService.currentUser.userName);
        }
        else{
            this.voterService.addVoter(this.eventId, session, this.authService.currentUser.userName);
        }
        if(this.sortBy==='votes'){
            this.visibleSessions.sort(sortByVotesDesc);
        }
    }
    public userHasVoted(session: ISession): boolean{
        return this.voterService.userHasVoted(session, this.authService.currentUser.userName);
    }
}

function sortByNameAsc(s1: ISession, s2: ISession){
    if(s1.name > s2.name) return 1;
    else if(s1.name === s2.name) return 0;
    else return -1;
}

function sortByVotesDesc(s1: ISession, s2: ISession){
    return s2.voters.length - s1.voters.length;
}
