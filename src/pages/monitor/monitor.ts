// core stuff
import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

// providers
import { BeaconProvider } from '../../providers/beacon-provider';
import { FirebaseProvider } from '../../providers/firebase-provider';

// interfaces and models
import { State } from '../../models/state-model';

@Component({
  selector: 'page-monitor',
  templateUrl: 'monitor.html',
  providers: [BeaconProvider]
})
export class MonitorPage {

  state: State;

  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public beaconProvider: BeaconProvider,
    public firebaseProvider: FirebaseProvider,
  ) {

    // tried to use some best practice (?) MVC architecture here
    // keeping the component very thing with logic in the service 
    // and using an object/model for the state

    // create an instance of the state class
    this.state = new State(false);

    // subscribe to the observable on the state which returns
    // a result every time the status changes, when it does call the logEvent
    // method in the firebase service to log the event at the back-end
    // I could have used events here instead (which is what I've tended to do in the past)
    // but this was a good opportunity to try my own observable on a class and subscribe to it
    this.state.stateWatch.subscribe(status => {
      this.firebaseProvider.logEvent(status);
    });
  }

  ionViewDidLoad() {
    // wait for platform ready as we are needing to use the beacons plugin
    this.platform.ready().then(() => {
      // initialise the beacon service which will commence scanning
      // we pass accross the state object as a paramater
      this.beaconProvider.initialise(this.state)
        .then((success) => {
          console.log("beacon service initialisation: ", success)
        })
    });
  }


}
