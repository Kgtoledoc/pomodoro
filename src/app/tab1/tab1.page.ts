import { Component } from "@angular/core";
import { NativeAudio } from "@ionic-native/native-audio/ngx";
import { AlertController, Platform } from "@ionic/angular";
import { BehaviorSubject } from "rxjs";
import { TextToSpeech } from "@ionic-native/text-to-speech/ngx";
import { LocalNotifications } from "@capacitor/core";

import { v4 as uuidv4 } from "uuid";

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
    private tts: TextToSpeech
  ) {
    this.platform.ready().then(() => {
      this.nativeAudio.preloadSimple("bell", "assets/sound/bells.mp3").then(
        () => {
          console.log("Audio Loaded!");
        },
        (err) => {
          console.log("Audio Failed: " + err);
        }
      );
    });
  }

  async playSpeechToText(text: String) {
    await this.tts
      .speak({
        text: "Study the text",
        locale: "en-US",
        rate: 0.75,
      })
      .then(() => console.log("Success"))
      .catch((reason: any) => console.log(reason));
  }

  ngOnInit() {
    this.pomodoroSeries = 0;
    this.pomodoroSerie = 0;
    this.pomodoroTotal = 4;
  }

  startTimer(duration: number) {
    this.state = "start";
    clearInterval(this.interval);
    this.timer = duration * 60;
    //this.updateTimeValue();

    // change the value to 1000 miliseconds
    this.interval = setInterval(() => {
      this.updateTimeValue();
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.interval);
    this.time.next("25:00");
    this.percent.next(100);
    this.state = "stop";
    this.pomodoroSeries = 0;
  }

  toggleStartStop() {
    if (this.state === "start") {
      this.stopTimer();
    } else {
      this.startTimer(this.startDuration);
    }
  }

  swapDuration() {
    if (this.startDuration === 5) {
      console.log("Notification: Take a rest");
      LocalNotifications.schedule({
        notifications: [
          {
            title: "Let's go to WORK",
            body: "Let's go to WORK",
            id: 2,
            extra: {
              data: "Pass data to your handler",
            },
            iconColor: "#0000FF",
          },
        ],
      });
    }
    if (this.startDuration === 25 && this.pomodoroSeries < 4) {
      this.showNotification({
        title: "Take a BREAK",
        body: "Take a break",
      });
    }
    this.startDuration = this.startDuration === 25 ? 5 : 25;

    this.pomodoroSerie++;
  }

  percentageOffset(percent) {
    const percentFloat = percent / 100;
    return circleDasharray * (1 - percentFloat);
  }

  restartPomodoroTime() {
    this.pomodoroSeries = 0;
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: "Pomodoro Finished",
      message: "¿Do you want to reset the pomodoro series?",
      buttons: [
        {
          cssClass: "secondary",
          text: "Okay",
          handler: () => {
            this.restartPomodoroTime();
          },
        },
      ],
    });

    await alert.present();
  }

  updateTimeValue() {
    let minutes: any = this.timer / 60;
    let seconds: any = this.timer % 60;

    minutes = String("0" + Math.floor(minutes)).slice(-2);
    seconds = String("0" + Math.floor(seconds)).slice(-2);

    const text = minutes + ":" + seconds;
    this.time.next(text);

    const totalTime = this.startDuration * 60;
    const percentage = ((totalTime - this.timer) / totalTime) * 100;
    this.percent.next(percentage);

    --this.timer;
    if (this.timer < -1) {
      this.nativeAudio.play("bell");
      this.swapDuration();
      this.startTimer(this.startDuration);
      console.log(this.pomodoroSeries);
      if (this.pomodoroSerie == 2) {
        this.pomodoroSeries = this.pomodoroSeries + 1;
        this.pomodoroSerie = 0;
      }
      if (this.pomodoroSeries == this.pomodoroTotal) {
        this.showNotification({
          title: "Pomodoro Finished",
          body: "The pomodoro's time is finished",
        });
        this.stopTimer();
        this.presentAlertConfirm();
      }
    }
  }

  showNotification(text) {
    LocalNotifications.schedule({
      notifications: [
        {
          title: text.title,
          body: text.body,
          id: uuidv4(),
          extra: {
            data: "Pass data to your handler",
          },
          iconColor: "#0000FF",
        },
      ],
    });
  }
}
