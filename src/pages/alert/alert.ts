import { Component } from '@angular/core';
import { Navcontoller } from '@ionic-angular';

import { AlertController } from 'ionic-angular';


@Component({
 selector:'Page-alert',
  templateUrl: 'alert.html'
})
export class AlertPage {

  constructor(public alerCtrl: AlertController) { }

  doAlert() {
    let alert = this.alerCtrl.create({
      title: 'New Friend!',
      message: 'Your friend, Obi wan Kenobi, just approved your friend request!',
      buttons: ['Ok']
    });
    alert.present()
  }

}