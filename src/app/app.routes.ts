import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserListComponentComponent } from './user-list-component/user-list-component.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path : '' , component: HomeComponent } ,
    { path : 'users' , component: UserListComponentComponent}
];

