import { Component, inject } from '@angular/core';

import { Task } from '../../interfaces/task.interface';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'todo-root',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  //constructor(private tasksService: TasksService) {}
  private tasksService = inject(TasksService);

  get tasks(): Array<Task> {
    return this.tasksService.tasks;
  }

  public onDeleteTask(index: number): void {
    this.tasksService.deleteTask(index);
  }

  public onCompleteTask(index: number): void {
    this.tasksService.completeTask(index);
  }

  public onNewTask(task: Task): void {
    this.tasksService.addTask(task);
  }
}
