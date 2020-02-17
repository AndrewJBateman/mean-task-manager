import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { List } from 'src/app/models/list.model';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})

export class TaskViewComponent implements OnInit {
  lists: List[];
  tasks: Task[];

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        if (params.listId) {
          this.taskService.getTasks(params.listId).subscribe((tasks: Task[]) => {
            this.tasks = tasks;
          });
        }
        else {
          this.tasks = undefined;
        }
      }
    )

    this.taskService.getLists().subscribe((lists: List[]) => {
      this.lists = lists;
    })
  }

  onTaskClick(task: Task) {
    // set task to completed
    this.taskService.complete(task).subscribe(() => {
      console.log('Completed successfully');
      task.completed = !task.completed;
    });
  }

}
