import {Component, OnInit} from '@angular/core';
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

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.todoService.getHeroes().subscribe(todos => this.todos = todos);
  }

  countItemLeft() {
    return this.todos.filter(item => !item.checked).length;
  }

  addItem() {
    this.todoService.saveItem({'value': this.input, 'checked': false} as TodoItem)
      .subscribe(item => this.todos.push(item as TodoItem));
    this.input = '';
  }

  onChildDeleted(deletedItem) {
    this.todos = this.todos.filter(item => item.id !== deletedItem.id);
  }

}
