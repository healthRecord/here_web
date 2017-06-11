import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {QRCodeModule} from 'angular2-qrcode';

import {MyApp} from './app.component';
import {Pane} from '../pages/pane/pane';
import {RecordPage} from '../pages/record/record';

@NgModule({
  declarations: [
    MyApp, Pane ,RecordPage
  ],
  imports: [
    BrowserModule, IonicModule.forRoot(MyApp, {preloadModules: true}),
    QRCodeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp, Pane ,RecordPage
  ],
  providers: [
    StatusBar,
    SplashScreen, {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    }
  ]
})
export class AppModule {}