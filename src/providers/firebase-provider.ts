import { Injectable } from '@angular/core';

// interfaces and models
import { MonitorEvent } from '../models/monitor-event-interface'

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import "rxjs/add/operator/map";


@Injectable()
export class FirebaseProvider {
  eventList: FirebaseListObservable<any>;

  constructor(
    private af: AngularFire
  ) { }

  // log an event to the database
  logEvent(inRange: boolean): any {

    // get the current date/time
    let now = new Date();

    // create the event object
    let eventObject: MonitorEvent = {
      inRange: inRange,
      eventTime: now.getTime()
    }

    // save the object to Firebase
    return this.af.database.object(`/events/${eventObject.eventTime}`)
      .set(eventObject)

  }

  // return the list of events 
  getEventList(): FirebaseListObservable<any> {
    return this.af.database.list('/events')
  }

}