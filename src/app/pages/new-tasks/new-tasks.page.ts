import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-new-tasks',
  templateUrl: './new-tasks.page.html',
  styleUrls: ['./new-tasks.page.scss'],
})
export class NewTasksPage implements OnInit {

  title: string;
  description: string;
  date: any;


  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    })
  }

  
  createTasks() {
    console.log(this.title);
    console.log(this.description);
    console.log(this.date)
    let task = {
      "title": this.title,
      "description": this.description,
      "date": this.date
    }
    this.modalController.dismiss(task);
    
  }

  do(d){
    console.log("date", d);
  }


}
