import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {

  constructor(public navCtrl: NavController) {

  }

  goToProfile() {
    this.navCtrl.push(ProfilePage);
  }

}
