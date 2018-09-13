import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import TodoItem from './TodoItem';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todoUrl = 'http://localhost:3000/api/todos';

  constructor(private http: HttpClient) { }

  getHeroes (): Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>(this.todoUrl);
  }
}
