// core stuff
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// angular fire imports
import { FirebaseListObservable } from 'angularfire2';

// providers
import { FirebaseProvider } from '../../providers/firebase-provider';

@Component({
  selector: 'page-receiver',
  templateUrl: 'receiver.html'
})
export class ReceiverPage {

  eventList: FirebaseListObservable<any>;
  zone: any

  constructor(
    public navCtrl: NavController,
    public firebaseProvider: FirebaseProvider
  ) {

    // get the event list from the provider
    // (we have an async pipe in the template)
    this.firebaseProvider.getEventList()
      .subscribe((data) => {
        this.eventList = data;
      });
  }

}
