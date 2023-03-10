import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { user } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  selectedUserDetail: any = []
  //observable observer subscriber

  getAllUsers() {
    return this.http.get<user[]>('https://jsonplaceholder.typicode.com/users').pipe(
      tap({
        next: (res) => { return res },
        error: (err) => console.error(err)
      })
    )
  }

  getSelectedUser(id: number) {
    return this.http.get<user>(`https://jsonplaceholder.typicode.com/users/${id}`)
    
  }

}
