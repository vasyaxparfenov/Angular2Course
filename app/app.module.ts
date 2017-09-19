import { CollapsibleWellComponent } from './common/collapsible-well.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './user/auth.srevice';


import { Error404Component } from './error/404.components';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core'
import {BrowserModule } from '@angular/platform-browser'
import { appRoutes } from './routes';

import {EventsAppComponent} from './events-app.component'
import { NavBarComponent } from './nav/navbar.component';
import { ToastrService } from './common/toastr.service';

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
    DurationPipe
} from './events/index'

@NgModule({
    imports:[BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, ReactiveFormsModule],
    declarations:[EventsAppComponent, EventsListComponent, EventThumbnailComponent, NavBarComponent, EventDetailsComponent, CreateEventComponent, 
        Error404Component, CreateSessionComponent, SessionListComponent, CollapsibleWellComponent, DurationPipe],
    providers : [EventService, ToastrService, EventRouteActivator, EventListResolver, AuthService,
        { 
            provide:'canDeactivateCreateEvent', 
            useValue: checkDirtyState 
        } ],
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


