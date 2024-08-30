import { Injectable } from '@angular/core';
import TodoItem from '../types/TodoItem';
import { HelpersService } from '../../core/helpers.service';
import { sortedItemsDoneFinish } from './helpers';

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  constructor(private helpersService: HelpersService) {}

  private readonly LOCAL_STORAGE_KEY = 'todo-list-items';

  getAll() {
    const items = localStorage.getItem(this.LOCAL_STORAGE_KEY || '[]') || '[]';
    const parsedItems = JSON.parse(items);
    return sortedItemsDoneFinish(parsedItems);
  }

  getById(id: string) {
    const items = this.getAll();
    return items.find((item: TodoItem) => item.id === id);
  }

  add(item: TodoItem) {
    const items = this.getAll();

    const newItem: TodoItem = {
      ...item,
      id: this.helpersService.generateId(),
      isDone: false,
    };

    localStorage.setItem(
      this.LOCAL_STORAGE_KEY,
      JSON.stringify([newItem, ...items])
    );
  }

  update(item: TodoItem) {
    const items = this.getAll();
    const index = items.findIndex((i: TodoItem) => i.id === item.id);
    items[index] = item;
    localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(items));
  }

  delete(id: string) {
    const items = this.getAll();
    const index = items.findIndex((i: TodoItem) => i.id === id);
    items.splice(index, 1);
    localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(items));
  }
}
