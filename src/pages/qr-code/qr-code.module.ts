import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QrCodePage } from './qr-code';
import {QRCodeModule} from 'angular2-qrcode';

@NgModule({
  declarations: [
    QrCodePage,
  ],
  imports: [
    IonicPageModule.forChild(QrCodePage),
    QRCodeModule
  ],
  exports: [
    QrCodePage
  ]
})
export class QrCodePageModule {}
