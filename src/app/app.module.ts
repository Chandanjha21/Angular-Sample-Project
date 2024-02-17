import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { UserListComponentComponent } from "./user-list-component/user-list-component.component";
// import { AppRoutingModule } from "./app-routing.module";
import { RouterModule } from "@angular/router";

@NgModule({
    // declarations: [
    //     UserListComponentComponent,
    // ] ,
    imports: [       
        BrowserModule ,
        HttpClientModule,
        FormsModule,
        AppComponent,
        // AppRoutingModule,
        UserListComponentComponent,
        RouterModule
    ]
    ,
    // providers: [
    //     UserServiceService
    // ]
    
})

export class AppModule {}