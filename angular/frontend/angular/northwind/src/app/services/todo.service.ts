import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todos } from '../models/todos';
import { ListResponseModel } from '../models/listResponseModel';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  apiUrl = "https://jsonplaceholder.typicode.com/todos"
  constructor(private httpClient:HttpClient) { }
  
  getTodos():Observable<ListResponseModel<Todos>> {
    return this.httpClient.get<ListResponseModel<Todos>>(this.apiUrl)
  }
}
