import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: { title: string; desc: string; status: string }[] = [];

  constructor() {}

  getTasks() {
    return this.tasks;
  }

  addTask(task) {
    this.tasks.push(task);
  }
  editTask(idx: number) {
    const title = prompt('enter title:');
    this.tasks[idx].title = title;
  }
}
