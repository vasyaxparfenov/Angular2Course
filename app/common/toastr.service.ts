import { OpaqueToken } from '@angular/core';

export let TOASTR_TOKEN = new OpaqueToken('toastr');

export abstract class Toastr{
    abstract success(msg:string, title?:string):void;
    abstract info(msg:string, title?:string):void;
    abstract warning(msg:string, title?:string):void;
    abstract error(msg:string, title?:string):void;
}



