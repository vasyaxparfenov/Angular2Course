import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IUser } from './user.model';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class AuthService{
    public currentUser?: IUser;
    constructor(private http: Http){}
    public loginUser(userName: string, password: string): Observable<boolean>{
        const headers = new Headers({'Content-Type': 'application/json'});
        const options = new RequestOptions({headers});
        const loginInfo = {username:userName, password};

        return this.http.post('api/login', JSON.stringify(loginInfo), options).do((response)=>{
            if(response){
                this.currentUser = response.json().user as IUser;
            }
        }).catch((error) => {
            return Observable.of(false);
        });
    }
    public updateCurrentUser(firstName: string, lastName: string): Observable<Response>{
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;

        const headers = new Headers({'Content-Type':'application/json'});
        const options = new RequestOptions({headers});
        return this.http.put(`/api/users/${this.currentUser.id}`,JSON.stringify(this.currentUser), options);
        
    }
    public isAuthenticated(): boolean{
        return !!this.currentUser;
    }
    public checkAuthenticationStatus(): Subscription{
         return this.http.get('api/currentIdentity').map((response: any) => {
            if(response._body){
                return response.json();
            }
            else{
                return {};
            }
        }).do((currentUser) => {
            if(!!currentUser.userName){
                this.currentUser = currentUser;
            }
        }).subscribe();
    }
    public logout(): Observable<Response>{
        this.currentUser = undefined;
        
        const headers = new Headers({'Content-Type':'application/json'});
        const options = new RequestOptions({headers});

        return this.http.post('/api/logout', JSON.stringify({}), options);
    }
}
