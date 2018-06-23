import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { TodoModule } from './todo/todo.module';
import { TodoHomeComponent } from './todo-home/todo-home.component'
import { HomeComponent } from './home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    TodoHomeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    TodoModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
       path: 'todo',
       component: TodoHomeComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
