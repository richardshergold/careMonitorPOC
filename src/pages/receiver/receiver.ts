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

  constructor(
    public navCtrl: NavController,
    public firebaseProvider: FirebaseProvider
  ) {

    // a very simple (thin!) componennt, all we do is subscribe to the FirebaseListObservable
    // and then we can watch our data arrive instantly

    // get the event list from the provider
    this.firebaseProvider.getEventList()
      .subscribe((data) => {
        this.eventList = data;
      });
  }

}
