import { OpaqueToken } from '@angular/core';

export let TOASTR_TOKEN = new OpaqueToken('toastr');

export abstract class Toastr{
    public abstract success(msg: string, title?: string): void;
    public abstract info(msg: string, title?: string): void;
    public abstract warning(msg: string, title?: string): void;
    public abstract error(msg: string, title?: string): void;
}
