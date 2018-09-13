import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todo.service';
import TodoItem from '../TodoItem';

@Component({
  selector: 'app-exercise-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  todos: TodoItem[] = [];

  input = '';

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getHeroes().subscribe(todos => this.todos = todos);
  }

  countItemLeft() {
    return this.todos.filter(item => !item.checked).length;
  }

  toggleCheck(item) {
    item.checked = !item.checked;
  }

  addItem() {
    this.todos.push({
      'id': 3,
      'value': this.input,
      'checked': false
    });
    this.input = '';
  }

}
