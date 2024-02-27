import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './product-detailscomponent.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  tasks: {} = [];

  constructor(private TaskService: TaskService) {
    this.tasks = this.TaskService.getTasks();
  }
  editTask(idx: number) {
    const title = prompt('enter title:');
    const desc = prompt('enter description:');
    const status = prompt('enter status:');
    this.tasks[idx].title = title;
    this.tasks[idx].desc = desc;
    this.tasks[idx].status = status;
  }
}
