import { Component, OnInit } from '@angular/core';
import { TodoListService } from './services/todo-list.service';
import TodoItem from './types/TodoItem';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent implements OnInit {
  todos: TodoItem[] = [];

  constructor(private todoListService: TodoListService) {}

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.todos = this.todoListService.getAll();
  }

  delete(id: string) {
    this.todoListService.delete(id);
    this.getTodos();
  }

  done(id: string) {
    const item = this.todoListService.getById(id);
    item.isDone = !item.isDone;
    this.todoListService.update(item);
    this.getTodos();
  }
}
