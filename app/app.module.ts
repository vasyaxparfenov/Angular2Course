import './rxjs-extensions';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DropDownEventListComponent } from './common/drop-down-event-list.component';
import { AuthService } from './user/auth.srevice';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Error404Component } from './error/404.components';
import { appRoutes } from './routes';

import {EventsAppComponent} from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';

import {
    CollapsibleWellComponent,
    HttpErrorHandlerService,
    JQUERY_TOKEN,
    ModalTriggerDirective,
    SimpleModalComponent,
    Toastr,
} from './common/index';

import {
    CreateEventComponent,
    CreateSessionComponent,
    DurationPipe,
    EventDetailsComponent,
    EventListResolver,
    EventResolver,
    EventRouteActivator,
    EventService,
    EventsListComponent,
    EventThumbnailComponent,
    LocationValidatorDirective,
    SessionListComponent,
    UpvoteComponent,
    VoterService,
} from './events/index';

declare let toastr: Toastr;
declare let jQuery: any;

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
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
        LocationValidatorDirective,
        DropDownEventListComponent,
    ],
    providers: [
        EventService,
        EventRouteActivator,
        EventListResolver,
        AuthService,
        VoterService,
        EventResolver,
        HttpErrorHandlerService,
        {
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState,
        },
        {
            provide:Toastr,
            useValue:toastr,
        },
        {
            provide:JQUERY_TOKEN,
            useValue:jQuery,
        },
    ],
    bootstrap: [EventsAppComponent],
})

export class AppModule{

}

function checkDirtyState(component: CreateEventComponent){
    if(component.isDirty){
        return window.confirm('You haven\'t saved this event, do you really want to cancel?');
    }
    return true;
}
