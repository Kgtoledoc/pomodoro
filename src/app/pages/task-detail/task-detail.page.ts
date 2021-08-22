import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { v4 as uuidv4 } from "uuid";

@Component({
  selector: "app-task-detail",
  templateUrl: "./task-detail.page.html",
  styleUrls: ["./task-detail.page.scss"],
})
export class TaskDetailPage implements OnInit {
  subtaskInput: Boolean;
  subtaskTitle: String;
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
    this.subtaskInput = false;
    this.subtaskTitle = "";
  }

  closeTaskDetail() {
    this.router.navigate([""]);
  }

  //add subtask
  //refresh the task array with the new task object - other subtask

  addSubtask() {
    console.log("Add Subtask");
    this.subtaskInput = true;
  }

  enterSubtask() {
    console.log("subtask " + this.subtaskTitle);
    let subtask = {
      title: this.subtaskTitle,
      id: uuidv4(),
      isChecked: false,
    };
    this.task.subtaskArray.push(subtask);
    this.subtaskTitle = "";
    this.subtaskInput = false;

    this.saveSubtaskArray(this.task);
  }

  check(task) {
    console.log(task);
    this.saveSubtaskArray(this.task);
  }

  // Function to save the new content of task into scheduledTask

  // Delete task function

  delete(subtask) {
    this.task.subtaskArray = this.task.subtaskArray.filter((e) => {
      return subtask.id != e.id;
    });

    this.saveSubtaskArray(this.task);
  }

  saveSubtaskArray(taskChanged) {
    // Load the content of TaskArray
    let scheduledTask = JSON.parse(localStorage.getItem("scheduledTasks"));
    // Find the index of object into array
    let index = scheduledTask.findIndex((task, i) => {
      return task.id === taskChanged.id;
    });
    // Replace the object into index with the new object or only push the task
    scheduledTask.splice(index, 1, taskChanged);
    console.log("Scheduled Task ", scheduledTask);
    // Save the scheduledTask into LocalStorage
    localStorage.setItem("scheduledTasks", JSON.stringify(scheduledTask));
  }

  // add the enter subtask into another way. Could be a new modal o like a popover or alert
}
