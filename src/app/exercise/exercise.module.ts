import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import {FormsModule} from '@angular/forms';
import { TodoListItemComponent } from './index/todo-list-item/todo-list-item.component';

@NgModule({
  imports: [
    CommonModule, FormsModule,
    RouterModule.forRoot([{
      path: 'exercise',
      component: IndexComponent
    }])
  ],
  declarations: [IndexComponent, TodoListItemComponent]
})
export class ExerciseModule { }
