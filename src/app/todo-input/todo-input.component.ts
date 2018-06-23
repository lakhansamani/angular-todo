import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  newTodo:string = ""
  @Output() onAddTodo:EventEmitter<any> = new EventEmitter<any>()

  constructor() { }

  ngOnInit() {
  }

  emitNewTodo() {
    if (this.newTodo) {
      this.onAddTodo.emit(this.newTodo)
      this.newTodo = ""
    }
  }

  addTodoChild() {
    this.emitNewTodo()
  }

  onKeyDown(e) {
    if(e.keyCode === 13) {
      this.emitNewTodo()
    }
  }

}
