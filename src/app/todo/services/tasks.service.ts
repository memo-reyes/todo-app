import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  public tasks: Array<Task> = [
    {
      id: uuid(),
      description: 'Inicializar aplicación TODO',
      isCompleted: true,
    },
    {
      id: uuid(),
      description: 'Crear modulo Todo',
      isCompleted: false,
    },
    {
      id: uuid(),
      description: 'Actualizamos modulo App',
      isCompleted: false,
    },
    {
      id: uuid(),
      description: 'Creamos primer componente',
      isCompleted: false,
    },
    {
      id: uuid(),
      description: 'Crear componentes para lista y formulario',
      isCompleted: false,
    },
    {
      id: uuid(),
      description: 'Finalizar aplicación',
      isCompleted: false,
    },
  ];

  constructor() { }

  public deleteTask(id: string): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  public completeTask(id: string): void {
    const index = this.tasks.findIndex(task => task.id === id);
    this.tasks[index].isCompleted = !this.tasks[index].isCompleted;
  }

  public addTask(task: Task): void {
    const newTask: Task = {id: uuid(), ...task};
    this.tasks.push(newTask);
  }
}
