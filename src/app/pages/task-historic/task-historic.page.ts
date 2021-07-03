import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-task-historic",
  templateUrl: "./task-historic.page.html",
  styleUrls: ["./task-historic.page.scss"],
})
export class TaskHistoricPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  close() {
    this.router.navigate([""]);
  }
}
