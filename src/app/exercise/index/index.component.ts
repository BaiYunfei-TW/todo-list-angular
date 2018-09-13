import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  todos = [
    { 'id': 1, 'value': 'todo item 1', 'checked': false },
    { 'id': 2, 'value': 'todo item 2', 'checked': true }
    ];

  input = '';

  constructor() { }

  ngOnInit() {

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
