import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Post } from 'src/app/models/post';
import { user } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private base: string = "https://jsonplaceholder.typicode.com/users/"
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }
  private url(id: number): string {
    return `${this.base}${id}`
  }

  getAllUsers() {
    return this.http.get<user[]>('https://jsonplaceholder.typicode.com/users').pipe(
      tap({
        next: (res) => { return res },
        error: (err) => console.error(err)
      })
    )
  }

  getSelectedUser(id: number) {
    return this.http.get<user>(`https://jsonplaceholder.typicode.com/users/${id}`).pipe(
      tap({
        next: (res) => { return res },
        error: (err) => console.error(err)
      })
    )
  }

  public getAllPosts(id: number){
    return this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
  }

  updateUser(user: user): Observable<any> {
    return this.http.put(this.url(user.id), user, this.httpOptions).pipe(
      tap({
      next: (res) => { return res },
      error: (err) => console.error(err)
    })
    )
  }


}
