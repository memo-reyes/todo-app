import { Component } from '@angular/core';

import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'todo-root',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  public tasks: Array<Task>/*Task[]*/ = [
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

  public onDeleteTask(index: number): void {
    this.tasks.splice(index, 1);
  }

  public onCompleteTask(index: number): void {
    this.tasks[index].isCompleted = !this.tasks[index].isCompleted;
  }

  public onNewTask(task: Task): void {
    this.tasks.push(task);
  }
}
