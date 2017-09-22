import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { HttpErrorHandlerService } from '../../common/http-error-handler.service';
import { ISession } from '../index';
@Injectable()
export class VoterService{
    constructor(private http: Http, private httpErrorHandler: HttpErrorHandlerService){

    }
    public addVoter(eventId: number, session: ISession, voterName: string){
        session.voters.push(voterName);
        const headers = new Headers({'Content-Type':'application/json'});
        const options = new RequestOptions({headers});
        const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
        this.http.post(url, JSON.stringify({}), options).catch(this.httpErrorHandler.handleError).subscribe();
    }
    public deleteVoter(eventId: number, session: ISession, voterName: string){
        session.voters = session.voters.filter((voter) => voter !== voterName);
        const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
        this.http.delete(url).catch(this.httpErrorHandler.handleError).subscribe();
    }
    public userHasVoted(session: ISession, voterName: string): boolean{
        return session.voters.includes(voterName);
    }
}
