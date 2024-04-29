import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  public tasks: Array<Task> = [
    {
      description: 'Inicializar aplicación TODO',
      isCompleted: true,
    },
    {
      description: 'Crear modulo Todo',
      isCompleted: false,
    },
    {
      description: 'Actualizamos modulo App',
      isCompleted: false,
    },
    {
      description: 'Creamos primer componente',
      isCompleted: false,
    },
    {
      description: 'Crear componentes para lista y formulario',
      isCompleted: false,
    },
    {
      description: 'Finalizar aplicación',
      isCompleted: false,
    },
  ];

  constructor() { }

  public deleteTask(index: number): void {
    this.tasks.splice(index, 1);
  }

  public completeTask(index: number): void {
    this.tasks[index].isCompleted = !this.tasks[index].isCompleted;
  }

  public addTask(task: Task): void {
    this.tasks.push(task);
  }
}
