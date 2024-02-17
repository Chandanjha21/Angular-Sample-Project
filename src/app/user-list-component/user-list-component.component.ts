import { Component , OnInit, inject} from '@angular/core';
import { UserService } from '../Services/user.service';
import { FormsModule } from '@angular/forms';

// interface user{
//   id : number ;
//   name : string ;
//   email : string ;
// }

@Component({
  selector: 'app-user-list-component',
  standalone: true ,
  imports: [FormsModule] ,          // Helps to use all the forms method like NgModel and we are importing because of standalone
  templateUrl: './user-list-component.component.html',
  styleUrl: './user-list-component.component.css'
})

export class UserListComponentComponent implements OnInit {
  // all the variables to be used 
  private userService = inject(UserService)
  users: any = [];
  filteredUsers: any = [];
  nameFilter: string = "" ;
  emailFilter: string = "" ;

  // Constructor
  // constructor(private httpClient: UserService) {}
  constructor(private httpClient: UserService) {} // You can inject service in theconstructor as well if you want 

  ngOnInit(){ // This is the Life cycle method of the component
    this.loadUsers() ;

  }

  // loadUsers(){
  //   this.userService.getUsers().subscribe(data => {
  //     this.users = data ;
  //     this.filteredUsers = data; 
  //   })
  // }

  loadUsers(){
    this.userService.getUsers().subscribe({
      next: (users : any) => {
        this.users = users ;
        console.log("User fetched Successfully")
      },
      error: (error) => {console.log("Error while fetching Data " , error)}
    })
  }

  filterUsers(){
    this.filteredUsers = this.users.filter(
      (user: { name: string; email: string; }) => {
      const nameMatch = this.nameFilter ? user.name.toLowerCase().includes(this.nameFilter.toLowerCase()) : true
      const emailMatch = this.emailFilter ? user.email.toLowerCase().includes(this.emailFilter.toLowerCase()) : true
      return nameMatch && emailMatch;
    }
   
    )
  }
}
