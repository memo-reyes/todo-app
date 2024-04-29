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

  public onDeleteTask(id: string): void {
    this.tasksService.deleteTask(id);
  }

  public onCompleteTask(id: string): void {
    this.tasksService.completeTask(id);
  }

  public onNewTask(task: Task): void {
    this.tasksService.addTask(task);
  }
}
