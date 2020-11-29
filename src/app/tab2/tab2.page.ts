import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { NewTasksPage } from '../pages/new-tasks/new-tasks.page';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public tasks: Array<any> = [];

  constructor(public modalController: ModalController) {}


  async addTasks() {
    const modal = await this.modalController.create({
      component: NewTasksPage
    });
   modal.onDidDismiss().then(d => {
     this.tasks.push(d.data);
   })
    
    return await modal.present();
  }

}
