import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service'
import { Todo } from './todo'

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Todo[]
  constructor(private todoService: TodoService) {

  }

  ngOnInit() {
    this.todoService.getAllTodos()
    .subscribe(todos => {
      this.todos = todos
      }
    )
  }

  addTodo(todoName) {
    const todo = {
      id: this.todos.length + 1,
      title: todoName,
      completed: false,
    }
    this.todos.push(todo)
  }

  onChangeStatus(index) {
    this.todos[index].completed = !this.todos[index].completed
  }

}
