import { Component } from "@angular/core";
import { NativeAudio } from "@ionic-native/native-audio/ngx";
import { AlertController, ModalController, Platform } from "@ionic/angular";
import { BehaviorSubject } from "rxjs";
import { TextToSpeech } from "@ionic-native/text-to-speech/ngx";
import { LocalNotifications } from "@capacitor/core";

import { v4 as uuidv4 } from "uuid";
import { NewGoalsPage } from "../pages/new-goals/new-goals.page";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {

  taskStored: Array<any>;
  
  constructor(
    private alertController: AlertController,
    private nativeAudio: NativeAudio,
    private platform: Platform,
    private tts: TextToSpeech,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.taskStored = JSON.parse(localStorage.getItem("scheduledTasks"))
    ? JSON.parse(localStorage.getItem("scheduledTasks"))
    : [];
    console.log(this.taskStored)
  }

  ionViewWillEnter() {
    this.taskStored = JSON.parse(localStorage.getItem("scheduledTasks"))
    ? JSON.parse(localStorage.getItem("scheduledTasks"))
    : [];
    console.log(this.taskStored)
  }

  // Function for open a modal and save the goal created
  async createSubtask() {
    const modal = await this.modalController.create({
      component: NewGoalsPage,
    });
    modal.onDidDismiss().then((goal) => {
      console.log(goal);
      if (goal.data["dismissed"] != true) {
        this.taskStored = JSON.parse(localStorage.getItem("scheduledTasks"))
    ? JSON.parse(localStorage.getItem("scheduledTasks"))
    : [];
      }
    });

    return await modal.present();
  }
}
