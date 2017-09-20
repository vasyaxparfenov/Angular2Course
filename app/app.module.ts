import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './user/auth.srevice';


import { Error404Component } from './error/404.components';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { appRoutes } from './routes';

import {EventsAppComponent} from './events-app.component'
import { NavBarComponent } from './nav/navbar.component';

import { JQUERY_TOKEN, Toastr, CollapsibleWellComponent, SimpleModalComponent, ModalTriggerDirective } from './common/index';

import {
    EventsListComponent, 
    EventThumbnailComponent, 
    EventListResolver, 
    EventDetailsComponent, 
    EventRouteActivator, 
    EventService, 
    CreateEventComponent,
    CreateSessionComponent,
    SessionListComponent,
    DurationPipe,
    UpvoteComponent,
    VoterService,
    LocationValidatorDirective
} from './events/index'

declare let toastr:Toastr;
declare let jQuery:Object;

@NgModule({
    imports: [
        BrowserModule, 
        RouterModule.forRoot(appRoutes), 
        FormsModule, 
        ReactiveFormsModule,
        HttpModule
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent, 
        NavBarComponent, 
        EventDetailsComponent, 
        CreateEventComponent, 
        Error404Component, 
        CreateSessionComponent, 
        SessionListComponent, 
        CollapsibleWellComponent, 
        DurationPipe, 
        SimpleModalComponent, 
        ModalTriggerDirective,
        UpvoteComponent,
        LocationValidatorDirective
    ],
    providers: [
        EventService, 
        EventRouteActivator, 
        EventListResolver, 
        AuthService,
        VoterService,
        { 
            provide: 'canDeactivateCreateEvent', 
            useValue: checkDirtyState 
        },
        {
            provide:Toastr,
            useValue:toastr  
        },
        {
            provide:JQUERY_TOKEN,
            useValue:jQuery   
        } 
    ],
    bootstrap: [EventsAppComponent]
})

export class AppModule{

}

function checkDirtyState(component:CreateEventComponent){
    if(component.isDirty){
        return window.confirm("You haven't saved this event, do you really want to cancel?")
    }
    return true;
}


