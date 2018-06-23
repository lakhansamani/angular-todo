import { Injectable } from '@angular/core';
import { Todo } from './todo/todo'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { Http } from '@angular/http'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: Http) { }

  getAllTodos(): Observable<any> {
    return this.http.get("assets/data.json")
    .pipe(map(res => res.json()))
  }
}
