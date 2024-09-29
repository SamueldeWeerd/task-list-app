import { Injectable, signal } from '@angular/core';
import { Task, TaskStatus } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  private tasks = signal<Task[]>([]);

  allTasks = this.tasks.asReadonly();

  taskIdCounter = 0;

  onAddTask(title: string, description: string) {
    const id = ++this.taskIdCounter;
    const newTask: Task = {
      id: id.toString(),
      title: title,
      description: description,
      status: 'OPEN'
    }

    this.tasks.update((oldTasks) => [...oldTasks, newTask]);
  };

  onChangeTaskStatus(status: TaskStatus, id: string) {
    this.tasks.update((oldTasks) => oldTasks.map((task) => {
      if (task.id === id) {
        return { ...task, status: status };
      } else {
        return task;
      }
    })
    );
  }

}
