import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() list:any[]
  @Output() onStatusChange:EventEmitter<any> = new EventEmitter<any>()
  constructor() { }

  ngOnInit() {
  }

  onInputChange(index) {
    this.onStatusChange.emit(index)
  }

}
