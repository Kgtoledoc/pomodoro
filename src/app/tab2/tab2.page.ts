import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { TasksComponent } from '../pages/tasks/tasks.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  tasks=["Task 1", "Task 2"]

  constructor(public modalController: ModalController) {}


  async addTasks() {
    const modal = await this.modalController.create({
      component: TasksComponent
    });
    return await modal.present();
  }

}
