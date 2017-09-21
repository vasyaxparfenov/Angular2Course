import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpErrorHandlerService {
    handleError(error: Response){
        console.log(error.status);
        return Observable.throw(error.statusText);
      }
}