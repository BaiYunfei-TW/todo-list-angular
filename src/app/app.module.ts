import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoModule } from './demo/demo.module';
import { RouterModule } from '@angular/router';
import { ExerciseModule } from './exercise/exercise.module';
import {TodoService} from './exercise/todo.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    DemoModule,
    ExerciseModule,
    HttpClientModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
