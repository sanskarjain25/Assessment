import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  task = { title: '', description: '', status: 'To Do' };

  constructor(private TaskService: TaskService) {}

  onSubmit() {
    this.TaskService.addTask(this.task);
    this.task = { title: '', description: '', status: 'To Do' };
  }
}
