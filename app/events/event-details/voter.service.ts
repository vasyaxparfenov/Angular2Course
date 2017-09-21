import { HttpErrorHandlerService } from '../../common/http-error-handler.service';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { ISession } from '../index';
@Injectable()
export class VoterService{
    constructor(private http:Http, private httpErrorHandler: HttpErrorHandlerService){

    }
    addVoter(eventId: number, session: ISession, voterName: string){
        session.voters.push(voterName);
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers:headers});
        let url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
        this.http.post(url, JSON.stringify({}), options).catch(this.httpErrorHandler.handleError).subscribe();
    }
    deleteVoter(eventId: number, session:ISession, voterName:string){
        session.voters = session.voters.filter(voter => voter !== voterName);
        let url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
        this.http.delete(url).catch(this.httpErrorHandler.handleError).subscribe();
    }
    userHasVoted(session:ISession, voterName:string):boolean{
        return session.voters.includes(voterName);
    }
}