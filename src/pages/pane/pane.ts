import {
    Component
} from '@angular/core';
import {
    NavController
} from 'ionic-angular';
import {
    RecordPage
} from '../record/record';

@Component({
    selector: 'page-pane',
    templateUrl: 'pane.html'
})
export class Pane {
    rootPage: any = RecordPage;

    constructor(public navCtrl: NavController) {}
    setCategory(category) {
        switch (category) {
            case 'qrCode':
                this.navCtrl.push('qrCode')
                break;
            case 'record':
                this.navCtrl.push('record')
                break;
        }
    }
}
