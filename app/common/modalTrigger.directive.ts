import { Directive, ElementRef, Inject, Input, OnInit } from '@angular/core';
import { selector } from 'rxjs/operator/multicast';
import { JQUERY_TOKEN } from './index';
@Directive({
    selector:'[modal-trigger]',
})
export class ModalTriggerDirective implements OnInit{
    private element: HTMLElement;
    @Input('modal-trigger') public modalId: string;
    constructor(elementReference: ElementRef, @Inject(JQUERY_TOKEN) private $: any){
        this.element = elementReference.nativeElement;
    }
    public ngOnInit(){
        this.element.addEventListener('click', (e) => {
            this.$(`#${this.modalId}`).modal({});
        });
    }
}
