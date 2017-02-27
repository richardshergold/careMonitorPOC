import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// pagses
import { ReceiverPage } from '../pages/receiver/receiver';
import { MonitorPage } from '../pages/monitor/monitor';
import { HomePage } from '../pages/home/home';

// providers
import { BeaconProvider } from '../providers/beacon-provider';
import { FirebaseProvider } from '../providers/firebase-provider';

// angular fire
import { AngularFireModule } from 'angularfire2';

// Angular Fire Settings
export const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  storageBucket: "",
  messagingSenderId: ""
};

@NgModule({
  declarations: [
    MyApp,
    ReceiverPage,
    MonitorPage,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ReceiverPage,
    MonitorPage,
    HomePage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, FirebaseProvider]
})
export class AppModule { }
