import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  tasks = [];

  constructor(private TaskService: TaskService) {}

  ngOnInit() {
    this.tasks = this.TaskService.getTasks();
  }
}
