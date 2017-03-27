import { Component } from '@angular/core';

import { ModalController, Platform, NavParams, ViewController,NavController } from 'ionic-angular';

import { SignupPage } from '../signup/signup';
import { SigninPage } from '../signin/signin';
import { ProfilePage } from '../profile/profile';

@Component({
	selector: 'page-menu',
	templateUrl: 'menu.html'
})
export class MenuPage {

	constructor(public modalCtrl: ModalController,public navCtrl: NavController) {

	}

  openModal(characterNum) {
    let modal = this.modalCtrl.create(SigninPage, characterNum);
    modal.present();
  }

	goToSignin() {
		// this.navCtrl.setRoot(SignupPage);
		this.navCtrl.push(SignupPage);
	}

	goToProfile() {
		this.navCtrl.push(ProfilePage);
	}

}