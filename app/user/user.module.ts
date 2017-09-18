import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { ProfileComponent } from './profile.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { userRoutes } from './user.routes';


@NgModule({
    imports :[
        CommonModule,
        RouterModule.forChild(userRoutes),
        FormsModule,
        ReactiveFormsModule
    ],
    declarations:[ProfileComponent, LoginComponent],
    providers:[],
    bootstrap:[]
})
export class UserModule{

}