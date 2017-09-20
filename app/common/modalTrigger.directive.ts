import { JQUERY_TOKEN } from './index';
import { selector } from 'rxjs/operator/multicast';
import { Directive, ElementRef, Inject, Input, OnInit } from '@angular/core';
@Directive({
    selector:'[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit{
    private element:HTMLElement;
    @Input('modal-trigger') modalId:string;
    constructor(elementReference:ElementRef, @Inject(JQUERY_TOKEN) private $:any){
        this.element = elementReference.nativeElement;
    }
    ngOnInit(){
        this.element.addEventListener('click', e => {
            this.$(`#${this.modalId}`).modal({})
        });
    }
}