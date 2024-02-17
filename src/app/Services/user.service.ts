import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const base_URL = "https://jsonplaceholder.typicode.com/users"
@Injectable({
  providedIn: 'root'
})

export class UserService {
private http = inject(HttpClient)

  constructor() { }

  getUsers(){
      return this.http.get(base_URL)
  }
}
