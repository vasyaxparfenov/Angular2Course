import { Component, ContentChild, ElementRef, Inject, Input, ViewChild } from '@angular/core';
import { selector } from 'rxjs/operator/publish';
import { JQUERY_TOKEN } from './index';

@Component({
    selector:'simple-modal',
    templateUrl:'/app/common/simpleModal.component.html',
    styles:[`
        .modal-body {height:250px; overflow-y:scroll;}
    `],
    
})
export class SimpleModalComponent{
    @Input() public title: string;
    @Input() public elementId: string;
    @Input() public closeOnBodyClick: string;
    @ViewChild('modalContainer') public containerEl: ElementRef;
    constructor(@Inject(JQUERY_TOKEN) private $: any){

    }
    public closeModal(){
        if(this.closeOnBodyClick.toLocaleLowerCase()==='true'){
            this.$(this.containerEl.nativeElement).modal('hide');
        }
    }
}
