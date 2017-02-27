// core stuff
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { IBeacon } from 'ionic-native';

// interfaces and models
import { State } from '../models/state-model';
//import { UUID } from '../config.ts';

@Injectable()
export class BeaconProvider {

  delegate: any;
  region: any;

  constructor(
    public platform: Platform
  )
  { }

  initialise(state: State): any {

    let promise = new Promise((resolve, reject) => {

      // we need to be running on a device 
      if (this.platform.is('cordova')) {

        // Request permission to use location on iOS
        IBeacon.requestAlwaysAuthorization();

        // setup a beacon region (change your UUID, major and minor here)
        this.region = IBeacon.BeaconRegion('careMonitor', "B9407F30-F5F8-466E-AFF9-25556B57FE6D", 25595, 56036);

        // create a new delegate and register it with the native layer
        this.delegate = IBeacon.Delegate();

        // subscribe to the delegate's didDetermineStateForRegion event which will be triggered
        // whenever we enter or leave the region
        this.delegate.didDetermineStateForRegion = function (data) {
          let inRegion = data.state === "CLRegionStateOutside" ? false : true;
          state.stateReview(inRegion);
        };

        // start monitoring
        IBeacon.startMonitoringForRegion(this.region)
          .then(
          () => {
            resolve(true);
          },
          error => {
            console.error('Failed to begin monitoring: ', error);
            resolve(false);
          }
          );

      } else {
        console.error("This application needs to be running on a device");
        resolve(false);
      }
    });

    return promise;
  }


}