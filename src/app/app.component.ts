import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserListComponentComponent } from "./user-list-component/user-list-component.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, UserListComponentComponent, CommonModule , RouterLink] // CommonModule because of standalone
})
export class AppComponent {
  title = 'myapp';
}
