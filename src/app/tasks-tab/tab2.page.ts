import { importExpr } from "@angular/compiler/src/output/output_ast";
import { Component } from "@angular/core";
import { LocalNotification, Plugins } from "@capacitor/core";
import { NativeAudio } from "@ionic-native/native-audio/ngx";
import {
  AlertController,
  ModalController,
  ToastController,
} from "@ionic/angular";
import { v4 as uuidv4 } from "uuid";
import { BehaviorSubject } from "rxjs";
import { NewTasksPage } from "../pages/new-tasks/new-tasks.page";
//import { LocalNotifications } from "@ionic-native/local-notifications/ngx";
const { LocalNotifications } = Plugins;

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
})
export class Tab2Page {
  noScheduledTasks: Array<any>;
  scheduledTasks: Array<any>;
  time: BehaviorSubject<string> = new BehaviorSubject("25:00");
  timer: number;
  interval;
  startDuration = 25;
  pomodoroSeries: number = 0;
  pomodoroSerie: number = 0;
  pomodoroTotal: number = 4;

  state: "start" | "stop" = "stop";
  constructor(
    public modalController: ModalController,
    private alertController: AlertController,
    private toastCtrl: ToastController,
    private nativeAudio: NativeAudio //private localNotifications: LocalNotifications
  ) {}

  async ngOnInit() {
    this.noScheduledTasks = JSON.parse(localStorage.getItem("noScheduledTasks"))
      ? JSON.parse(localStorage.getItem("noScheduledTasks"))
      : [];

    this.scheduledTasks = JSON.parse(localStorage.getItem("scheduledTasks"))
      ? JSON.parse(localStorage.getItem("scheduledTasks"))
      : [];

    this.scheduledTasks = this.sortArray(this.scheduledTasks);

    this.transformDate();

    await LocalNotifications.requestPermission();
    if (this.scheduledTasks.length > 0) {
      this.scheduleBasicAllTasks();
    }

    this.scheduledTasks = [
      {
        id: 123123,
        title: "Task 1",
        date: "06/11/1992",
        isChecked: false,
        isScheduled: true,
      },
    ];
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

  delete(item) {
    if (item.date == undefined) {
      this.noScheduledTasks = this.noScheduledTasks.filter((e) => {
        return item.id != e.id;
      });
      localStorage.setItem(
        "noScheduledTasks",
        JSON.stringify(this.noScheduledTasks)
      );
    } else {
      this.scheduledTasks = this.scheduledTasks.filter((e) => {
        return item.id != e.id;
      });
      localStorage.setItem(
        "scheduledTasks",
        JSON.stringify(this.scheduledTasks)
      );
    }
  }

  transformDate() {
    //console.log("Transform Date");
    let dateNow = new Date(Date.now()).toDateString();

    this.scheduledTasks.forEach((task) => {
      if (task.date != undefined) {
        if (dateNow != new Date(task.date).toDateString()) {
          task.date = new Date(
            dateNow + " " + new Date(task.date).toTimeString()
          );
        }
      }
    });
    localStorage.setItem("scheduledTasks", JSON.stringify(this.scheduledTasks));
  }

  scheduledFunction(task) {
    LocalNotifications.schedule({
      notifications: [
        {
          title: task.title,
          body: task.description,
          id: Math.random() * 100,
          extra: {
            data: "Pass data to your handler",
          },
          iconColor: "#0000FF",
          schedule: {
            at: new Date(task.date),
          },
        },
      ],
    });
  }

  async scheduleOneTask(task) {
    if (new Date(task.date).getTime() >= new Date(Date.now()).getTime()) {
      this.presentToast("Task is scheduled");
      this.scheduledFunction(task);
    } else {
      this.presentToast("The time is less that current time");
    }
  }

  async scheduleBasicAllTasks() {
    console.log("Schedule all tasks!");
    let counter = 0;
    this.scheduledTasks.forEach((e) => {
      if (new Date(e.date).getTime() >= new Date(Date.now()).getTime()) {
        this.scheduledFunction(e);
        counter++;
      }
    });
    if (counter > 0) {
      this.presentToast("Scheduled all task greater than actual time!");
    } else {
      this.presentToast("Tasks is not scheduled!");
    }
  }

  async addTasks() {
    const modal = await this.modalController.create({
      component: NewTasksPage,
    });
    modal.onDidDismiss().then((d) => {
      console.log(d);
      if (d.data["dismissed"] != true) {
        if (d.data.date == undefined) {
          this.noScheduledTasks.unshift(d.data);
          localStorage.setItem(
            "noScheduledTasks",
            JSON.stringify(this.noScheduledTasks)
          );
        } else {
          this.scheduledTasks.push(d.data);
          this.scheduledTasks = this.sortArray(this.scheduledTasks);
          localStorage.setItem(
            "scheduledTasks",
            JSON.stringify(this.scheduledTasks)
          );
          if (d.data.isScheduled == true) {
            this.scheduleOneTask(d.data);
          } else {
            console.log("Not scheduled!");
          }
        }
      }
      //console.log(this.tasks);
    });

    return await modal.present();
  }

  check(task) {
    if (task.date == undefined) {
      this.noScheduledTasks = this.noScheduledTasks.filter((e) => {
        return task.id != e.id;
      });
      this.noScheduledTasks.push(task);
    }

    localStorage.setItem("scheduledTasks", JSON.stringify(this.scheduledTasks));

    localStorage.setItem(
      "noScheduledTasks",
      JSON.stringify(this.noScheduledTasks)
    );
  }

  sortArray(array) {
    //console.log("Sort Array");
    array.sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
    //console.log(array);
    return array;
  }

  async presentToast(text) {
    const toast = await this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: "bottom",
    });

    toast.present();
  }
}

// Following tasks

// checked when the time of schedule is finished
// Fix the timer and try to integrate the pomodore inside the tasks, like an icon.
// Launch the schedule automatic when init the task
