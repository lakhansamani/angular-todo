import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { TodoInputComponent } from '../todo-input/todo-input.component';
import { HttpModule } from '@angular/http'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  declarations: [TodoComponent, TodoListComponent, TodoInputComponent],
  exports: [TodoComponent]
})
export class TodoModule { }
