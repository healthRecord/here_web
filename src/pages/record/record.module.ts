import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecordPage } from './record';

@NgModule({
  declarations: [
    RecordPage,
  ],
  imports: [
    IonicPageModule.forChild(RecordPage),
  ],
  exports: [
    RecordPage
  ]
})
export class RecordPageModule {}
