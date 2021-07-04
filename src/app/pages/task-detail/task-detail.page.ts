import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-task-detail",
  templateUrl: "./task-detail.page.html",
  styleUrls: ["./task-detail.page.scss"],
})
export class TaskDetailPage implements OnInit {
  task: any;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      console.log(params);
      if (params && params.special) {
        this.task = JSON.parse(params.special);
      }
      console.log(this.task);
    });
  }

  closeTaskDetail() {
    this.router.navigate([""]);
  }

  //add subtask
  //refresh the task array with the new task object - other subtask
}
