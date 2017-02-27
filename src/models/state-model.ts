import { Observable } from 'rxjs/Observable';

export class State {

  // whether we are current in range of the beacon or not
  inRange: boolean = false;

  // our custom observable
  stateWatch: any;
  stateObserver: any;

  constructor() {
    // create a custom observable which will trigger a response whenever
    // the state changes
    this.stateWatch = Observable.create(observer => {
      this.stateObserver = observer;
    });
  }

  // stateReview method determines whether or not we have a change in state
  stateReview(inRange: boolean) {
    // if the state has changed, save it and trigger the response from the
    // observable which gets picked up in the monitoring component
    if (inRange !== this.inRange) {
      this.inRange = inRange;
      this.stateObserver.next(inRange);
    }

  }

}
