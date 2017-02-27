// core stuff
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// pages
import { ReceiverPage } from '../receiver/receiver';
import { MonitorPage } from '../monitor/monitor';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  // monitor mode selected - open the Monitor page
  // and start monitoring for the beacon
  monitor() {
    this.navCtrl.push(MonitorPage);
  }

  // receive mode selected - open the Receiver page
  // and start receiving results of the beacon monitoring
  receive() {
    this.navCtrl.push(ReceiverPage);
  }

}
