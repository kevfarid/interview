import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoListService } from '../../services/todo-list.service';

@Component({
  selector: 'app-todo-list-form',
  templateUrl: './todo-list-form.component.html',
  styleUrl: './todo-list-form.component.scss',
})
export class TodoListFormComponent {
  @Output() addTodo: EventEmitter<void> = new EventEmitter<void>();

  todoForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  constructor(private todoListService: TodoListService) {}

  onSubmit() {
    if (this.todoForm.invalid) {
      return;
    }

    this.todoListService.add({
      title: this.todoForm.value.title || 'Untitled',
      description: this.todoForm.value.description || '',
    });
    this.todoForm.reset();
    this.addTodo.emit();
  }
}
