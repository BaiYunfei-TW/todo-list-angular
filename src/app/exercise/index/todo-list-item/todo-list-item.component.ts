import {AfterViewChecked, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import TodoItem from '../../TodoItem';
import {TodoService} from '../../todo.service';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {

  @Input() item: TodoItem;
  @Output() onDeleteItem = new EventEmitter<TodoItem>();

  editMode = false;

  constructor(private todoService: TodoService,
              private elementRef: ElementRef) {

  }

  ngOnInit() {
  }

  updateItem() {
    this.editMode = false;
    this.todoService.updateItem(this.item).subscribe(_ => {});
  }

  deleteItem() {
    this.todoService.deleteItem(this.item.id).subscribe(_ => {
      this.onDeleteItem.emit(this.item);
    });
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
    if (this.editMode) {
      setTimeout(() => {
        this.elementRef.nativeElement.querySelector('#value-field').focus();
      }, 0);
    }
  }

}
