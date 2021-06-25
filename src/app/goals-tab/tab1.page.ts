import { Component } from "@angular/core";
import { NativeAudio } from "@ionic-native/native-audio/ngx";
import { AlertController, ModalController, Platform } from "@ionic/angular";
import { BehaviorSubject } from "rxjs";
import { TextToSpeech } from "@ionic-native/text-to-speech/ngx";
import { LocalNotifications } from "@capacitor/core";

import { v4 as uuidv4 } from "uuid";
import { NewGoalsPage } from "../pages/new-goals/new-goals.page";

const circleR = 80;
const circleDasharray = 2 * Math.PI * circleR;

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  time: BehaviorSubject<string> = new BehaviorSubject("25:00");
  percent: BehaviorSubject<number> = new BehaviorSubject(100);

  timer: number;
  interval;
  startDuration = 25;
  pomodoroSeries: number = 0;
  pomodoroSerie: number = 0;
  pomodoroTotal: number = 4;

  circleR = circleR;
  circleDasharray = circleDasharray;

  state: "start" | "stop" = "stop";

  constructor(
    private alertController: AlertController,
    private nativeAudio: NativeAudio,
    private platform: Platform,
    private tts: TextToSpeech,
    private modalController: ModalController
  ) {}

  ngOnInit() {}

  // Function for open a modal and save the goal created
  async createGoals() {
    const modal = await this.modalController.create({
      component: NewGoalsPage,
    });
    modal.onDidDismiss().then((goal) => {
      console.log(goal);
      if (goal.data["dismissed"] != true) {
        console.log(goal.data);
      }
    });

    return await modal.present();
  }
}
