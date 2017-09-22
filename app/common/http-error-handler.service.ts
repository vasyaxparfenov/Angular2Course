import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpErrorHandlerService {
    public handleError(error: Response){
        console.log(error.status);
        return Observable.throw(error.statusText);
      }
}
