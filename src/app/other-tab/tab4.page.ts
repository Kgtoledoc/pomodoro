import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-tab4",
  templateUrl: "./tab4.page.html",
  styleUrls: ["./tab4.page.scss"],
})
export class Tab4Page implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  navigateTo(event: Event, link: String) {
    event.stopImmediatePropagation();

    const url = this.router.url.split("/");
    console.log(url);
    if (url.length >= 2) {
      url.pop();
    }

    console.log(`${url.join("/")}/${link}`);

    this.router.navigate([`${url.join("/")}/${link}`]);
  }
}
